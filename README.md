# wordcountreactexpress
## This is a take home project given by interviewer, user React, Node, Express, and cheerio to build a simple word count app to count words on given website by scraping in 1 week.



### Outline

### Reseach
1. https://www.youtube.com/watch?v=v0t42xBIYIs


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

