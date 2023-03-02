const app = require('express')();

app.get('/', (req, res) => res.send('<h1 style="color:blue;">Test</h1> <img src="/images/logo.svg" />'));

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app