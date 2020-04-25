const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const { generateChartsData, getRandomNumber, generateCharts } = require('./utils');

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/points', (req, res) => {
  if (req.method === 'POST') {
    let options = req.body;

    if (options) {
      const chartsCount = getRandomNumber(1, 4);
      const charts = generateCharts(chartsCount);
      const chartsData = generateChartsData(options, charts);

      if (chartsData) {
        res.status(200).jsonp(chartsData);
      }
      else {
        res.status(400).jsonp({
          error: "No valid data"
        });
      }

    } else {
      res.status(400).jsonp({
        error: "No valid data"
      });
    }
  }
});

server.listen(3000, () => {
  console.log('JSON Server is running')
})
