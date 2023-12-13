<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Install

1. Clone the repository
2. Execute
```
npm install
```
3. You need to have Nest CLI installed
```
npm install -g @nestjs/cli
```
4. Run DB throught docker compose
```
docker-compose up -d
```

5. Copy the file __.env.template__ and rename it as __.env__

6. Fill your environment variables in the file ```.env```

7. Execute the app in dev environment:

```
npm run dev
```

## Stack
* MongoDB
* NestJS
* Typescript

# Production Build
1. Create the file ```.env.prod```
2. Fill variables of ```.env.prod```
3. Build the new image
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Notes
Heroku re-deploy without changes:
```

git push heroku master
```