const axios = require('axios');
const { firstFiftyQuotes, QuoteAtIndex } = require('../src/services/quotes.services');

describe('firstFiftyQuotes', () => {
  test.only('should give first fifty quotes', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      statusText: 'OK',
      headers: {
        date: 'Thu, 24 Feb 2022 19:53:07 GMT',
        'content-type': 'text/plain; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'access-control-allow-origin': '*',
        etag: 'W/"00cf03255039c32229862ef2e27f921b-ssl-df"',
        'strict-transport-security': 'max-age=31536000',
        'cache-control': 'public,s-max-age=31536000',
        age: '11331',
        vary: 'Accept-Encoding',
        'x-nf-request-id': '01FWPMPPYQXZC2KVRTGQ5PWZ71',
        'cf-cache-status': 'DYNAMIC',
        'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2KI%2F96yc5UC%2BbNllEwM%2BF2Y%2BcBs7EbzQDGkgzOoV5PFaxXJc%2B9445j46UlMvn5KP%2BcussbzohQH4pLd26k9QfQ6v6iZQDSed4NKI0WCQKWLSF%2B4CPLH1GPAGZg%3D%3D"}],"group":"cf-nel","max_age":604800}',
        nel: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
        server: 'cloudflare',
        'cf-ray': '6e2b3cfe5b20dcda-SIN',
        'alt-svc': 'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
      },
      data:
        [
          {
            text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
            author: 'Thomas Edison',
          }, {
            text: 'You can observe a lot just by watching.',
            author: 'Yogi Berra',
          }, {
            text: 'A house divided against itself cannot stand.',
            author: 'Abraham Lincoln',
          }, {
            text: 'Difficulties increase the nearer we get to the goal.',
            author: 'Johann Wolfgang von Goethe',
          }, {
            text: 'Fate is in your hands and no one elses',
            author: 'Byron Pulsifer',
          },
          {
            text: 'Be the chief but never the lord.',
            author: 'Lao Tzu',
          },
          {
            text: 'Nothing happens unless first we dream.',
            author: 'Carl Sandburg',
          },
          {
            text: 'Well begun is half done.',
            author: 'Aristotle',
          },
          {
            text: 'Life is a learning experience, only if you learn.',
            author: 'Yogi Berra',
          },
          {
            text: 'Self-complacency is fatal to progress.',
            author: 'Margaret Sangster',
          },
          {
            text: 'Peace comes from within. Do not seek it without.',
            author: 'Buddha',
          },
          {
            text: 'What you give is what you get.',
            author: 'Byron Pulsifer',
          },
          {
            text: 'We can only learn to love by loving.',
            author: 'Iris Murdoch',
          },
          {
            text: 'Life is change. Growth is optional. Choose wisely.',
            author: 'Karen Clark',
          },
          {
            text: "You'll see it when you believe it.",
            author: 'Wayne Dyer',
          },
          {
            text: 'Today is the tomorrow we worried about yesterday.',
            author: null,
          },
          {
            text: "It's easier to see the mistakes on someone else's paper.",
            author: null,
          },
          {
            text: 'Every man dies. Not every man really lives.',
            author: null,
          },
          {
            text: 'To lead people walk behind them.',
            author: 'Lao Tzu',
          },
          {
            text: 'Having nothing, nothing can he lose.',
            author: 'William Shakespeare',
          },
          {
            text: 'Trouble is only opportunity in work clothes.',
            author: 'Henry J. Kaiser',
          },
          {
            text: 'A rolling stone gathers no moss.',
            author: 'Publilius Syrus',
          },
          {
            text: 'Ideas are the beginning points of all fortunes.',
            author: 'Napoleon Hill',
          },
          {
            text: 'Everything in life is luck.',
            author: 'Donald Trump',
          },
          {
            text: 'Doing nothing is better than being busy doing nothing.',
            author: 'Lao Tzu',
          },
          {
            text: 'Trust yourself. You know more than you think you do.',
            author: 'Benjamin Spock',
          },
          {
            text: 'Study the past, if you would divine the future.',
            author: 'Confucius',
          },
          {
            text: 'The day is already blessed, find peace within it.',
            author: null,
          },
          {
            text: 'From error to error one discovers the entire truth.',
            author: 'Sigmund Freud',
          },
          {
            text: 'Well done is better than well said.',
            author: 'Benjamin Franklin',
          },
          {
            text: 'Bite off more than you can chew, then chew it.',
            author: 'Ella Williams',
          },
          {
            text: 'Work out your own salvation. Do not depend on others.',
            author: 'Buddha',
          },
          {
            text: 'One today is worth two tomorrows.',
            author: 'Benjamin Franklin',
          },
          {
            text: 'Once you choose hope, anythings possible.',
            author: 'Christopher Reeve',
          },
          {
            text: 'God always takes the simplest way.',
            author: 'Albert Einstein',
          },
          {
            text: 'One fails forward toward success.',
            author: 'Charles Kettering',
          },
          {
            text: 'From small beginnings come great things.',
            author: null,
          },
          {
            text: 'Learning is a treasure that will follow its owner everywhere',
            author: 'Chinese proverb',
          },
          {
            text: 'Be as you wish to seem.',
            author: 'Socrates',
          },
          {
            text: 'The world is always in movement.',
            author: 'V. Naipaul',
          },
          {
            text: 'Never mistake activity for achievement.',
            author: 'John Wooden',
          },
          {
            text: 'What worries you masters you.',
            author: 'Haddon Robinson',
          },
          {
            text: 'One faces the future with ones past.',
            author: 'Pearl Buck',
          },
          {
            text: 'Goals are the fuel in the furnace of achievement.',
            author: 'Brian Tracy',
          },
          {
            text: 'Who sows virtue reaps honour.',
            author: 'Leonardo da Vinci',
          },
          {
            text: 'Be kind whenever possible. It is always possible.',
            author: 'Dalai Lama',
          },
          {
            text: "Talk doesn't cook rice.",
            author: 'Chinese proverb',
          },
          {
            text: 'He is able who thinks he is able.',
            author: 'Buddha',
          },
          {
            text: 'A goal without a plan is just a wish.',
            author: 'Larry Elder',
          },
          {
            text: 'To succeed, we must first believe that we can.',
            author: 'Michael Korda',
          },
          {
            text: 'Learn from yesterday, live for today, hope for tomorrow.',
            author: 'Albert Einstein',
          },
          {
            text: 'A weed is no more than a flower in disguise.',
            author: 'James Lowell',
          },
          {
            text: 'Do, or do not. There is no try.',
            author: 'Yoda',
          },
          {
            text: 'All serious daring starts from within.',
            author: 'Harriet Beecher Stowe',
          },
          {
            text: 'The best teacher is experience learned from failures.',
            author: 'Byron Pulsifer',
          },
          {
            text: 'Think how hard physics would be if particles could think.',
            author: 'Murray Gell-Mann',
          },
          {
            text: "Love is the flower you've got to let grow.",
            author: 'John Lennon',
          },
          {
            text: "Don't wait. The time will never be just right.",
            author: 'Napoleon Hill',
          },
          {
            text: 'Time is the wisest counsellor of all.',
            author: 'Pericles',
          },
          {
            text: 'You give before you get.',
            author: 'Napoleon Hill',
          },
          {
            text: 'Wisdom begins in wonder.',
            author: 'Socrates',
          },
          {
            text: 'Without courage, wisdom bears no fruit.',
            author: 'Baltasar Gracian',
          },
          {
            text: 'Change in all things is sweet.',
            author: 'Aristotle',
          },
          {
            text: 'What you fear is that which requires action to overcome.',
            author: 'Byron Pulsifer',
          },
          {
            text: 'When performance exceeds ambition, the overlap is called success.',
            author: 'Cullen Hightower',
          },
          {
            text: 'When deeds speak, words are nothing.',
            author: 'African proverb',
          },
          {
            text: 'Real magic in relationships means an absence of judgement of others.',
            author: 'Wayne Dyer',
          },
          {
            text: 'I never think of the future. It comes soon enough.',
            author: 'Albert Einstein',
          },
          {
            text: 'Skill to do comes of doing.',
            author: 'Ralph Emerson',
          },
          {
            text: 'Wisdom is the supreme part of happiness.',
            author: 'Sophocles',
          },
          {
            text: 'I believe that every person is born with talent.',
            author: 'Maya Angelou',
          },
          {
            text: 'Important principles may, and must, be inflexible.',
            author: 'Abraham Lincoln',
          },
          {
            text: 'The undertaking of a new action brings new strength.',
            author: 'Richard Evans',
          },
          {
            text: 'The years teach much which the days never know.',
            author: 'Ralph Emerson',
          },
          {
            text: 'Our distrust is very expensive.',
            author: 'Ralph Emerson',
          },
          {
            text: 'All know the way; few actually walk it.',
            author: 'Bodhidharma',
          },
          {
            text: 'Great talent finds happiness in execution.',
            author: 'Johann Wolfgang von Goethe',
          },
          {
            text: 'Faith in oneself is the best and safest course.',
            author: 'Michelangelo',
          },
          {
            text: 'Never bend your head. Always hold it high. Look the world right in the eye.',
            author: 'Helen Keller',
          },
          {
            text: 'One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.',
            author: 'Albert Schweitzer',
          },
          {
            text: 'We cannot do everything at once, but we can do something at once.',
            author: 'Calvin Coolidge',
          },
          {
            text: 'You have to do your own growing no matter how tall your grandfather was.',
            author: 'Abraham Lincoln',
          },
          {
            text: 'Invent your world. Surround yourself with people, color, sounds, and work that nourish you.',
            author: null,
          },
          {
            text: 'It is fatal to enter any war without the will to win it.',
            author: 'General Douglas MacArthur',
          },
          {
            text: 'Be what you are. This is the first step toward becoming better than you are.',
            author: 'Julius Charles Hare',
          },
          {
            text: "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
            author: 'Buckminster Fuller',
          },
          {
            text: 'Love and compassion open our own inner life, reducing stress, distrust and loneliness.',
            author: 'Dalai Lama',
          },
          {
            text: 'Ideals are an imaginative understanding of that which is desirable in that which is possible.',
            author: 'Walter Lippmann',
          },
          {
            text: 'The superior man is satisfied and composed; the mean man is always full of distress.',
            author: 'Confucius',
          },
          {
            text: "If you spend too much time thinking about a thing, you'll never get it done.",
            author: 'Bruce Lee',
          },
          {
            text: 'The way is not in the sky. The way is in the heart.',
            author: 'Buddha',
          },
          {
            text: 'Most people are about as happy as they make up their minds to be',
            author: 'Abraham Lincoln',
          },
          {
            text: 'Three things cannot be long hidden: the sun, the moon, and the truth.',
            author: 'Buddha',
          },
          {
            text: 'More often than not, anger is actually an indication of weakness rather than of strength.',
            author: 'Dalai Lama',
          },
          {
            text: 'Before you put on a frown, make absolutely sure there are no smiles available.',
            author: 'Jim Beggs',
          },
          {
            text: 'A man of ability and the desire to accomplish something can do anything.',
            author: 'Donald Kircher',
          },
          {
            text: 'You, yourself, as much as anybody in the entire universe, deserve your love and affection.',
            author: 'Buddha',
          },
          {
            text: 'It is not uncommon for people to spend their whole life waiting to start living.',
            author: 'Eckhart Tolle',
          },
          {
            text: "Don't be afraid to go out on a limb. That's where the fruit is.",
            author: 'H. Jackson Browne',
          },
          {
            text: 'Wicked people are always surprised to find ability in those that are good.',
            author: 'Marquis Vauvenargues',
          },
          {
            text: 'Life is so constructed that an event does not, cannot, will not, match the expectation.',
            author: 'Charlotte Bronte',
          },
          {
            text: 'If you change the way you look at things, the things you look at change.',
            author: 'Wayne Dyer',
          },
          {
            text: 'No man can succeed in a line of endeavor which he does not like.',
            author: 'Napoleon Hill',
          },
          {
            text: 'You will not be punished for your anger, you will be punished by your anger.',
            author: 'Buddha',
          },
          {
            text: "Don't judge each day by the harvest you reap but by the seeds you plant.",
            author: 'Robert Stevenson',
          },
          {
            text: 'They say that time changes things, but you actually have to change them yourself.',
            author: 'Andy Warhol',
          },
          {
            text: 'Never apologize for showing feelings. When you do so, you apologize for the truth.',
            author: 'Benjamin Disraeli',
          },
          {
            text: 'The truth you believe and cling to makes you unavailable to hear anything new.',
            author: 'Pema Chodron',
          },
        ],
    });
    const output = await firstFiftyQuotes();
    expect(output).toStrictEqual([{ text: 'Genius is one percent inspiration and ninety-nine percent perspiration.', author: 'Thomas Edison' }, { text: 'You can observe a lot just by watching.', author: 'Yogi Berra' }, { text: 'A house divided against itself cannot stand.', author: 'Abraham Lincoln' }, { text: 'Difficulties increase the nearer we get to the goal.', author: 'Johann Wolfgang von Goethe' }, { text: 'Fate is in your hands and no one elses', author: 'Byron Pulsifer' }, { text: 'Be the chief but never the lord.', author: 'Lao Tzu' }, { text: 'Nothing happens unless first we dream.', author: 'Carl Sandburg' }, { text: 'Well begun is half done.', author: 'Aristotle' }, { text: 'Life is a learning experience, only if you learn.', author: 'Yogi Berra' }, { text: 'Self-complacency is fatal to progress.', author: 'Margaret Sangster' }, { text: 'Peace comes from within. Do not seek it without.', author: 'Buddha' }, { text: 'What you give is what you get.', author: 'Byron Pulsifer' }, { text: 'We can only learn to love by loving.', author: 'Iris Murdoch' }, { text: 'Life is change. Growth is optional. Choose wisely.', author: 'Karen Clark' }, { text: "You'll see it when you believe it.", author: 'Wayne Dyer' }, { text: 'Today is the tomorrow we worried about yesterday.', author: null }, { text: "It's easier to see the mistakes on someone else's paper.", author: null }, { text: 'Every man dies. Not every man really lives.', author: null }, { text: 'To lead people walk behind them.', author: 'Lao Tzu' }, { text: 'Having nothing, nothing can he lose.', author: 'William Shakespeare' }, { text: 'Trouble is only opportunity in work clothes.', author: 'Henry J. Kaiser' }, { text: 'A rolling stone gathers no moss.', author: 'Publilius Syrus' }, { text: 'Ideas are the beginning points of all fortunes.', author: 'Napoleon Hill' }, { text: 'Everything in life is luck.', author: 'Donald Trump' }, { text: 'Doing nothing is better than being busy doing nothing.', author: 'Lao Tzu' }, { text: 'Trust yourself. You know more than you think you do.', author: 'Benjamin Spock' }, { text: 'Study the past, if you would divine the future.', author: 'Confucius' }, { text: 'The day is already blessed, find peace within it.', author: null }, { text: 'From error to error one discovers the entire truth.', author: 'Sigmund Freud' }, { text: 'Well done is better than well said.', author: 'Benjamin Franklin' }, { text: 'Bite off more than you can chew, then chew it.', author: 'Ella Williams' }, { text: 'Work out your own salvation. Do not depend on others.', author: 'Buddha' }, { text: 'One today is worth two tomorrows.', author: 'Benjamin Franklin' }, { text: 'Once you choose hope, anythings possible.', author: 'Christopher Reeve' }, { text: 'God always takes the simplest way.', author: 'Albert Einstein' }, { text: 'One fails forward toward success.', author: 'Charles Kettering' }, { text: 'From small beginnings come great things.', author: null }, { text: 'Learning is a treasure that will follow its owner everywhere', author: 'Chinese proverb' }, { text: 'Be as you wish to seem.', author: 'Socrates' }, { text: 'The world is always in movement.', author: 'V. Naipaul' }, { text: 'Never mistake activity for achievement.', author: 'John Wooden' }, { text: 'What worries you masters you.', author: 'Haddon Robinson' }, { text: 'One faces the future with ones past.', author: 'Pearl Buck' }, { text: 'Goals are the fuel in the furnace of achievement.', author: 'Brian Tracy' }, { text: 'Who sows virtue reaps honour.', author: 'Leonardo da Vinci' }, { text: 'Be kind whenever possible. It is always possible.', author: 'Dalai Lama' }, { text: "Talk doesn't cook rice.", author: 'Chinese proverb' }, { text: 'He is able who thinks he is able.', author: 'Buddha' }, { text: 'A goal without a plan is just a wish.', author: 'Larry Elder' }, { text: 'To succeed, we must first believe that we can.', author: 'Michael Korda' }]);
  });
  test('should give error if status is 400', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 400,
    });
    try {
      await firstFiftyQuotes();
    } catch (err) {
      expect(err.message).toBe('Error 404');
    }
  });
});
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
describe('QuoteAtIndex', () => {
  test.only('should give quote at index', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data:
        [
          {
            text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
            author: 'Thomas Edison',
          }, {
            text: 'You can observe a lot just by watching.',
            author: 'Yogi Berra',
          },
        ],
    });
    const req = { params: { index: 0 } };
    const res = mockResponse();
    const output = await QuoteAtIndex(req, res);
    expect(output).toStrictEqual({ text: 'Genius is one percent inspiration and ninety-nine percent perspiration.', author: 'Thomas Edison' });
  });
  test('should give error if status is 400', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 400,
    });
    try {
      await QuoteAtIndex(0);
    } catch (err) {
      expect(err.message).toBe('Error 404');
    }
  });
});
// ./node_modules/.bin/jest.cmd ./tests/quotes.services.test.js
