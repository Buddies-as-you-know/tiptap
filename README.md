# Usage
```bash
docker-compose build
docker-compose run --rm frontend npm install


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
