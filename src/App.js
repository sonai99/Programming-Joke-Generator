import React, {useState, useEffect} from 'react';
import './App.css';

const API = `https://sv443.net/jokeapi/v2/joke/Programming?type=single`;

function App() {
  const [joke, setJoke] = useState('...Loading next joke');

  const generateJoke = () => {
    fetch(API)
			.then((res) => res.json())
			.then(data => setJoke(data.joke));
  }

  useEffect(() => {
    generateJoke();
  }, [])

  console.log("HELLO");
  return (
    <div className="container">
      <h3>Get a random Programming Joke</h3>
      <p className='joke'>{joke}</p>
      <button onClick={generateJoke} className='btn'>Next Joke</button>
      <a className='twitter-share-button' target="_blank" rel="noopener noreferrer"
    href="https://twitter.com/intent/tweet?text=Check out this cool Programming Joke Generator: https://anirban-joke-generator.netlify.app/ , Created by @Hustler052199"
    data-size="large">Tweet</a>
    </div>
  );
}

export default App;
