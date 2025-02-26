const express = require('express');

const { quoteHandler, specificQuoteHandler } = require('../handlers/quotes.handler');

const router = express.Router();

router.get('/', quoteHandler);
router.get('/:index', specificQuoteHandler);

module.exports = {
  quoteRouter: router,
};
