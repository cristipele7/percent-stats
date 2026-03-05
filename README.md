## Run project

1. Install the necessary tools (if not already installed):
- Node.js - https://nodejs.org/en/download
- Nx Console - https://nx.dev/docs/getting-started/installation
- PostgreSQL server - https://www.postgresql.org/download/
- Docker Desktop - https://docs.docker.com/desktop/
- Java ^17 - https://www.oracle.com/ro/java/technologies/downloads/
- Android Studio - https://developer.android.com/studio

2. Add the .env file to the root directory. Here is an example (replace the user, password and database variables with the correct ones):

```sh
ENV=development

DATABASE_URL="postgresql://{user}:{password}@localhost:5432/{database}"
HOST='localhost'
API_PORT=3000

GQL_URL=http://localhost:3000/graphql

```

3. Add the .env file to the apps/ui directory. Here is an example:

```sh
ENV=development

GQL_URL=http://localhost:3000/graphql

```

4. Install the dependencies:

```sh
npm install
```

5. Create docker containers:

```sh
npm run docker:dev
```

6. Run scripts:

- generate the database (must keep it running)
```sh
npm run start:db
```
- run api (must keep it running)
```sh
npm run start:api
```
- generate graphql
```sh
npm run start:gql
```
- run web
```sh
npm run start:web
```
- run android
```sh
npm run start:android
```
- run ios
```sh
cd apps/ui/ios && pod install && cd ../../..
```
```sh
npm run start:ios
```
- run them all at once (but first make sure to run them separately at least once)
```sh
npm run start
```

7. URLs:

- DB: http://localhost:5555/
- API: http://localhost:3000/graphiql
- WEB: http://localhost:4200/
