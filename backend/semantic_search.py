from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI
import requests
from bs4 import BeautifulSoup
import os

# Initialize OpenAI embeddings
embeddings = OpenAIEmbeddings()

# Initialize ChatOpenAI
llm = ChatOpenAI(temperature=0.7)

# Function to fetch PCOS articles (replace with actual API or web scraping logic)
def fetch_pcos_articles():
    # This is a placeholder. In a real application, you would fetch articles from a reliable medical news API or database
    articles = [
        {
            'title': 'New PCOS Study Reveals Promising Treatment',
            'url': 'https://example.com/pcos-study-1',
            'content': 'Researchers have discovered a new approach to treating PCOS...'
        },
        {
            'title': 'Diet and PCOS: What's the Connection?',
            'url': 'https://example.com/pcos-study-2',
            'content': 'A recent study explores the relationship between diet and PCOS symptoms...'
        },
        # Add more articles here
    ]
    return articles

# Function to process and vectorize articles
def process_and_vectorize_articles():
    articles = fetch_pcos_articles()
    
    # Combine title and content for each article
    texts = [f"{article['title']}\n\n{article['content']}" for article in articles]
    
    # Split texts into chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = text_splitter.split_texts(texts)
    
    # Create FAISS index
    vectorstore = FAISS.from_texts(chunks, embeddings)
    
    return vectorstore, articles

# Function to perform semantic search
def semantic_search(query, top_k=5):
    vectorstore, articles = process_and_vectorize_articles()
    
    # Perform similarity search
    similar_chunks = vectorstore.similarity_search(query, k=top_k)
    
    # Create a QA chain
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever()
    )
    
    # Get answer
    answer = qa_chain.run(query)
    
    # Match chunks to original articles
    results = []
    for chunk in similar_chunks:
        for article in articles:
            if chunk.page_content in f"{article['title']}\n\n{article['content']}":
                results.append(article)
                break
    
    return results, answer

# Main function to get news articles and perform search
def get_news_articles(query="Latest PCOS research"):
    results, answer = semantic_search(query)
    
    # Format results
    formatted_results = [
        {
            'title': article['title'],
            'url': article['url'],
            'description': article['content'][:200] + '...'  # Truncate description
        }
        for article in results
    ]
    
    return formatted_results, answer

# Example usage
if __name__ == "__main__":
    articles, answer = get_news_articles("New treatments for PCOS")
    print(f"Answer: {answer}\n")
    for article in articles:
        print(f"Title: {article['title']}")
        print(f"URL: {article['url']}")
        print(f"Description: {article['description']}")
        print()