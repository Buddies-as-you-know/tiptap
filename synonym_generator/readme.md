# Usage
```
http://127.0.0.1:5000/synonym_gen?word=[単語]
```
の入力によってjsonが帰ってきます．
推定可能なワードである場合は，
```
{'status': 'ok', 'response': 単語5つ}
```
推定不可能なワードである場合は，
```
{'status': 'ng'}
```

# Requirements
重みデータのダウンロードのみ必要です．
http://www.cl.ecei.tohoku.ac.jp/~m-suzuki/jawiki_vector/
から 20170201.tar.bz2 ファイルをダウンロードして解凍．
解凍したら生成された2つのファイルを./dataディレクトリ下に配置．

### 追記
Boxにも重みデータあげてます．
https://app.box.com/folder/146613855483
