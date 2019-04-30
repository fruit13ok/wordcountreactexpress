# wordcountreactexpress
## This is a take home project given by interviewer, user React, Node, Express, and cheerio to build a simple word count app to count words on given website by scraping in 1 week.

- [Github link](https://github.com/fruit13ok/wordcountreactexpress).
- [Heroku link](https://wordcountreactexpress.herokuapp.com/).

### Outline

### Reseach
1. This project contain lots of research. This is the first time learning web scraping. Also the first time try to setup react and node into a single repo.
https://cheerio.js.org/
http://zetcode.com/javascript/cheerio/
https://www.youtube.com/watch?v=v0t42xBIYIs
https://daveceddia.com/deploy-react-express-app-heroku/
https://coursework.vschool.io/deploying-mern-with-heroku/
https://medium.freecodecamp.org/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250
https://stackoverflow.com/questions/50629652/strange-create-react-app-heroku-error-cannot-get
https://www.youtube.com/watch?v=P86N9FqNqso

### 4-23-2019
1. Setup node / express:
   1. Setup node<br>
   `npm init`
   2. Change entry point from `index.js` to `server.js`
   3. Setup github repo
   4. Install express and concurrently<br>
   `npm i express concurrently`
   5. Install nodemon as dependency<br>
   `npm i nodemon --save-dev`
   6. Edit script to `package.json`<br>
   ```
    "scripts": {
        "start": "node server.js",
        "server": "nodemon server.js"
    },
   ```
   7. Create `server.js`

2. Setup `server.js` with the basic libraries, port number, listener, and a single route<br>
```
const express = require('express');
const app = express();
app.get('/api/wordcount', (req, res) => {
  res.json([wordcount, wordstatus]);
});
const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
```

3. Run server with run script<br>
`npm run server`

4. Leave server running, and open a second terminal

5. Setup react
   1. create react app<br>
   `create-react-app client`
   2. add `proxy` below script to `package.json`<br>
   `"proxy": "http://localhost:5000",`

6. Go to react client folder<br>
`cd client`

7. Run react while node server is running<br>
`npm start`

8. Remove default files

9. Create some basic files<br>
`index.js`, `components/App.js`, `components/App.css`

10. install axios<br>
`npm i axios`

11. Create react components `SearchBar` for enter URL and `WordList` display list of words and their count

12. After submit URL input `SearchBar` lifting state up back to `App`, axios call to backend express route `/api/wordcount` to get the placeholder data, pass `response data` to `WordList` to loop through object key / value pairs, display as `<li>`.

13. Web scraping
   1. Install `request` and `cheerio`<br>
   `npm i request cheerio`
   2. Back to `App.js` and replace the placeholder with a request to a url, and cheerio scraping. cheerio will clone the html / DOM, traverse like jQuery. So I assume the targeted website has to have jQuery in order to scrape it.
   3. Extract all the text, parse them, store them in a map, each word as key, its count as value.

14. Setup `concurrently`
   1. Stop both client and server.
   2. Go to server's `package.json`, edit script to add install client script, add run client, use concurrently create a script to run server script first then run client script<br>
   ```
    "scripts": {
        "start": "node server.js",
        "server": "nodemon server.js",
        "client": "npm start --prefix client",
        "dev": "concurrently \"npm run server\" \"npm run client\""
    },
   ```
   3. Use new concurrently run script<br>
   `npm run dev`

"scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "cd client && npm install && npm run build"
  },