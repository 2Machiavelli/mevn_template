# MongoDB + Express.js + Vue.js + Node.js template

## Development Usage

- Install [Node.js](https://nodejs.org/en/download/)

### Server Usage

- Run `npm i`
- Set up `.env` file(MONGODB_URL)
- Then `npm run dev`

### Client Usage

- Run `npm i`
- Then `npm run serve`

---

## Production Usage(Heroku)

- Install [Node.js](https://nodejs.org/en/download/)
- Set /client in server's .gitignore file

### Client Usage

- Run `npm i`
- Then `npm run build`

### Server Usage

- Set up `.env` file(MONGODB_URL)

That commands put the front-end built in server's public folder

And then just connect and deploy in on Heroku