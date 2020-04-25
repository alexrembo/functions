
const FUNCTION_TYPES = ["linear", "logarithm"];
  
const getRandomType = (randomNumber = Math.random()) => FUNCTION_TYPES[Math.floor(randomNumber * FUNCTION_TYPES.length)];
  
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateCharts = (chartsCount) => new Array(chartsCount).fill([]).map(() => getRandomType());

const generateUniqueID = () => '_' + Math.random().toString(36).substr(2, 9);

const getBaseLog = (a, x) => Math.log(x) / Math.log(a);

const generateChartsData = (options, charts) => charts.map(item => {
  const { from, to, step } = options;
  let i = +from;
  const x = [], y = [];
  const base = getRandomNumber(1, 6);
  const k = getRandomNumber(1, 5);
  const b = getRandomNumber(1, 3);
  const id = generateUniqueID();

  while (i <= +to) {
    x.push(i);
    if (item === 'logarithm') {
    	y.push(getBaseLog(base, i));
    }
    else {
    	y.push(Math.round((k * i + b) * 10) / 10);
    }
    i = Math.round((i + +step) * 10) / 10;

  }
  return { x, y, name: item, id}
});

module.exports = { getRandomNumber, generateCharts, generateChartsData };
