from flask import Flask, jsonify, request
from chatmodel import get_chatmodel_response
from semantic_search import get_news_articles

app = Flask(__name__)

@app.route('/api/chatmodel', methods=['POST'])
def chatmodel_endpoint():
    message = request.json['message']
    response = get_chatmodel_response(message)
    return jsonify({'response': response})

@app.route('/api/news', methods=['GET'])
def news_endpoint():
    articles = get_news_articles()
    return jsonify({'articles': articles})

if __name__ == '__main__':
    app.run(debug=True)