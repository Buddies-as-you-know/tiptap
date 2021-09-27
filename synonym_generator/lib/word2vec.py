# coding: utf-8
# author: Taichi Hosoi
# date: 2021/9/26

from gensim.models import KeyedVectors

class SynonymGenerator:
    def __init__(self):
        self.model_dir = 'copus_tohoku/entity_vector.model.bin'
        self.model = KeyedVectors.load_word2vec_format(self.model_dir, binary=True)

    def target_word(self, word):
        try:
            res = self.model.most_similar(word)
        except Exception:
            res = None
        return res