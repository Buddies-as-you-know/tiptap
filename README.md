#これは楽天インターシップ二子玉夏の陣で優勝した作品です。
テーマ「人々を熱狂させるもの」
熱狂している話題に対してボタンを押して熱狂度を表しています。
押すことでタップ数を競い合うこともできます。
使用ツール：rails,React,TypeScript,MySQL,Docker




# Usage
```bash
docker-compose build
docker-compose run --rm frontend npm install
docker-compose run backend rails db:migrate
docker-compose run backend rails db:seed
docker-compose up
http://localhost:3000
```

# frontend

./frontend

# backend
How to start
```
docker-compose run backend rails db:migrate
docker-compose run backend rails db:seed
docker-compose up
```

if you update some gems
```
docker-compose run --rm backend bundle install
```
./backend
