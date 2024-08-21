from langchain.chains import ConversationChain
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory

# Initialize the ChatOpenAI model
chat = ChatOpenAI(temperature=0.7)

# Initialize the conversation chain
conversation = ConversationChain(
    llm=chat,
    memory=ConversationBufferMemory(k=5),
    verbose=True
)

def get_chatmodel_response(message):
    response = conversation.predict(input=message)
    return response