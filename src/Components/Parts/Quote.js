import React from 'react' ;
import quotes from '../../Data/Quotes';
import '../../Styles/Quote.css' ;



function Quote() {

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="slogan">
    <p> " {randomQuote .text}" </p>
    <p className='author'> - {randomQuote.author}</p>
</div>
  )
}

export default Quote ;
