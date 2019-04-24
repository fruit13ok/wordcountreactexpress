const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.get('/api/wordcount', (req, res) => {
    var url = req.query.query || 'https://www.google.com';
    console.log('url: ',url);
    var wordCountArr = [];
    var wordCount=0;
    var wordStatus = {};
    // request('https://fruit13ok.github.io/finalProject.html', (error, response, html) => {
    // request('https://fruit13ok.github.io/try.html', (error, response, html) => {
    // request('https://www.google.com', (error, response, html) => {
    request(url, (error, response, html) => {
        if(!error && response.statusCode == 200){
            console.log('success');
            var $ = cheerio.load(html);
            const texts = [];
            $('body > *').each(function(i, elem) {
                var eachStr = $(elem).text().trim().replace(/[()]|\s\s+/g, ' ');
                var eachArr = eachStr.split(' ').filter(function (el) {
                    return el != '';
                });
                texts.push(...eachArr);
            });
            wordCount+=texts.length;
            texts.forEach((ele)=>{
                if(wordStatus[ele]){
                    wordStatus[ele]+=1;
                }else{
                    wordStatus[ele]=1;
                }
            });
            // console.log('all texts: ',texts);
            // console.log('word count: ',wordCount);
            // console.log('each word count: ',wordStatus);
            wordCountArr.push(wordCount);
            wordCountArr.push(wordStatus);
            console.log(wordCountArr);
            res.json(wordCountArr);
        }else{
          res.json(['ERROR', {'Please check URL': 'try again'}]);
        }
    });
});

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);