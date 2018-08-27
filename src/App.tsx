import React from 'react';
import WordList from './components/WordList';
import Keyboard from './components/Keyboard';

const words = 'The quick brown fox jumps over the lazy dog';

const App = () => (
  <div>
    <h1>Hello, World! Party</h1>
    <WordList words={words} />
    <Keyboard/>
  </div>
);

export default App;
