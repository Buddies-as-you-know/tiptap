# coding: utf-8
# author: Taichi Hosoi
# date: 2021/9/26

from flask import Flask, request,  jsonify
from lib.word2vec import SynonymGenerator

app = Flask(__name__)
synonym_generator = SynonymGenerator()

@app.route('/synonym_gen', methods=['POST', 'GET'])
def synonim_gen():
    if not 'utterance' in request.values:
        return jsonify({'status': 'ng'})
    else:
        word = request.values['word']
        res = synonym_generator.target_word(word)
        res_p = []
        for result in res[:5]:
            if "[" in result[0]:
                res_p.append(result[0][1:-1])
            else:
                res_p.append(result[0])
        return jsonify({'status': 'ok', 'response': res_p})

if __name__ == '__main__':
    app.debug = True
    app.run()