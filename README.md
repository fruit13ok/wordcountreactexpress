#wordcountreactexpress
## This is a take home project given by interviewer, user React, Node, Express, and cheerio to build a simple word count app to count words on given website by scraping in 1 week.



### outline

### reseach
1. https://www.youtube.com/watch?v=v0t42xBIYIs


### 4-23-2019
1. setup the project:
   1. setup node<br>
   `npm init`
   2. change entry point from `index.js` to `server.js`
   3. setup github repo
   4. install express and concurrently<br>
   `npm i express concurrently`
   5. install nodemon as dependency<br>
   `npm i nodemon --save-dev`
   6. edit script to `package.json`<br>
   ```
    "scripts": {
        "start": "node server.js",
        "server": "nodemon server.js"
    },
   ```
   7. create `server.js`

2. setup `server.js` with the basic libraries, port number, listener, and a single route<br>
```
const express = require('express');
const app = express();
app.get('/api/wordcount', (req, res) => {
  res.json([wordcount, wordstatus]);
});
const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
```

3. run server with run script<br>
`npm run server`
4. leave server running, and open a second terminal<br>
