import React from 'react';
import WordList from './components/WordList';

const words = 'The quick brown fox jumps over the lazy dog';

const app = () => (
  <div>
    <h1>Hello, World! Party</h1>
    <WordList words={words} />
  </div>
);


export default app;
