const axios = require('axios');

const firstFiftyQuote = async () => {
  try {
    const quotes = await axios.get('https://type.fit/api/quotes');
    return quotes.data.slice(0, 50);
  } catch (err) {
    throw new Error('Data could not be retrieved');
  }
};
const getspecificQuote = async (index) => {
  try {
    const quotes = await axios.get('https://type.fit/api/quotes');
    return quotes.data[index];
  } catch (err) {
    throw new Error('Data could not be retrieved');
  }
};
module.exports = {
  firstFiftyQuote,
  getspecificQuote,
};
