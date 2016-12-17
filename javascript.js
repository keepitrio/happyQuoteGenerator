var quotes = [
  'Don\'t worry, be happy - Bobby McFerrin',
  'The purpose of our lives is to be happy - Dalai Lama',
  'If you want to be happy, be - Leo Tolstoy',
  'No one is in charge of your happiness except you - Regina Brett',
  'Stay humble, stay hungry',
  'Being happy is your choice',
  'To be happy, we must not be too concerned with others. - Albert Camus',
  'What you do not want done to yourself, do not do to others. - Confucius',
  'Happiness is acceptance.',
  'The secret of happiness is not in doing what one likes, but in liking what one does. - James M. Barrie'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

