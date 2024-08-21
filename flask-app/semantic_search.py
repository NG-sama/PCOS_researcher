from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import CharacterTextSplitter
from langchain.chains.question_answering import load_qa_chain

# Initialize the OpenAIEmbeddings
embeddings = OpenAIEmbeddings()

# Initialize the Chroma vector store
vectorstore = Chroma(
    embedding_function=embeddings.embed_query,
    persist_directory='./vectorstore'
)

# Load the question-answering chain
qa_chain = load_qa_chain(llm=ChatOpenAI(), chain_type="stuff")

def get_news_articles():
    # Fetch the latest news articles from a source (e.g., RSS feed, API)
    articles = [
        {
            'title': 'Article 1',
            'description': 'This is the first news article.',
            'url': 'https://example.com/article1'
        },
        {
            'title': 'Article 2',
            'description': 'This is the second news article.',
            'url': 'https://example.com/article2'
        },
        # Add more articles as needed
    ]

    # Split the articles into smaller chunks
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    texts = [article['description'] for article in articles]
    chunks = text_splitter.split_texts(texts)

    # Add the chunks to the Chroma vector store
    vectorstore.add_texts(chunks)

    # Return the original articles
    return articles