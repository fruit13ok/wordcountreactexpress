const express = require('express');

const app = express();

app.get('/api/wordcount', (req, res) => {
  const wordcount = [
    11,
    { 
        'Colla-Ball': 1,
        kitty: 2,
        cupcake: 1,
        slide: 1,
        presentation: 1,
        Demo: 1,
        video: 1,
        Gitlab: 1,
        repo: 1,
        link: 1 
    },
  ];

  res.json(wordcount);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);