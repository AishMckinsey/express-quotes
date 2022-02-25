const axios = require('axios');
const { quoteURL, getQuotes } = require('../src/services/quote.service');
jest.mock('axios');
describe("fetchQuotes from URL", () => {
  describe("when API call is successful", () => {
    it("should return list of quotes", async () => {
      const quotes = [
        {
          "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
          "author": "Thomas Edison"
        },
        {
          "text": "You can observe a lot just by watching.",
          "author": "Yogi Berra"
        },
      ];
      axios.get.mockResolvedValueOnce(quotes);
      const result = await getQuotes()
      expect(axios.get).toHaveBeenCalledWith(`${quoteURL}`);
      expect(result).toEqual(quotes);
    });
  });
});