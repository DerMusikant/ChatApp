## ChatApp

Chat application based on MERN(Mongo, Express, React, Node) stack, implementing Typescript and styled-components for react.

### Description

Basic chat application with Users/Chats database and web sockets for real time conversations 

### Run it locally

#### Server

1- Create [mongodb altas database](https://www.mongodb.com/cloud/atlas) with collections following [this course](https://platzi.com/clases/backend-js/) (Sligthly modified tho).

2- Create `.env` in the root path `/` file and your variables

```
DB_NAME= [name]
DB_USER= [user]
DB_PASSWORD= [password]
```

2- Install node packages and then run

```
npm install
npm run dev:server
```

#### Client

1- Move to client project `cd ./client` and then create a `.env` file like the following

```
DEV_API="http://localhost:3000"
```

2- Install dependencies and run de project.

```
npm install
npm start
```
