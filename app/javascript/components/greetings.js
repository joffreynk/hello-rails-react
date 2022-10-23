import React, { useState, useEffect } from 'react';

export default function  Quote (){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/greetings_api")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
          <blockquote>{quote.message}</blockquote>
          <p>by: {quote.author}</p>
      </div>
    );
  }
}
