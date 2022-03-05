const express = require('express');

const { quoteHandler, specificQuoteHandler } = require('../handler/quotes.handler');

const router = express.Router();

router.get('/', quoteHandler);
router.get('/:index', specificQuoteHandler);

module.exports = {
  quoteRouter: router,
};
