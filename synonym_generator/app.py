# coding: utf-8
# author: Taichi Hosoi
# date: 2021/9/26

from flask import Flask, request,  jsonify
from lib.word2vec import SynonymGenerator
import jaconv
import requests
import ast

app = Flask(__name__)
synonym_generator = SynonymGenerator()

@app.route('/synonym_gen', methods=['POST', 'GET'])
def synonim_gen():
    if not 'word' in request.values:
        return jsonify({'status': 'ng'})
    else:
        word = request.values['word']
        word = jaconv.hankaku2zenkaku(word)
        API_Endpoint = "http://www.google.com/transliterate?langpair=ja-Hira|ja&text="
        _result = requests.get(API_Endpoint + word).text
        _result = ast.literal_eval(_result)
        res = ""

        for i in _result:
            res = res + i[1][0]
        res = synonym_generator.target_word(res)
        if res == None:
            return jsonify({'status': 'ng'})
        else:
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