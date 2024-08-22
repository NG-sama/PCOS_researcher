from flask import Flask, request, jsonify
from flask_cors import CORS
from chatmodel import get_chatmodel_response
from semantic_search import get_news_articles

app = Flask(__name__)
CORS(app)

@app.route('/api/chatmodel', methods=['POST'])
def chatmodel_endpoint():
    message = request.json['message']
    response = get_chatmodel_response(message)
    return jsonify({'response': response})

@app.route('/api/news', methods=['GET'])
def news_endpoint():
    query = request.args.get('query', 'Latest PCOS research')
    articles, answer = get_news_articles(query)
    return jsonify({'articles': articles, 'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)