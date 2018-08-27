import * as React from 'react';
import { connect } from 'react-redux';

import WordList from './components/WordList';
import Keyboard from './components/Keyboard';
import Statistics from './components/Statistics';
import { nextChar, updateWords, incrementTypo } from './actions';

const quote = 'The quick brown fox jumps over the lazy dog';

interface Props {
  increment: Function,
  words: string,
  index: number,
  newWords: Function,
  newTypo: Function
}
class App extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  onKeyPress(ev: KeyboardEvent) {
    ev.preventDefault()
    const {increment, words, index, newTypo} = this.props
    increment(ev.key)
    if (ev.key !==  words[index]) {
      newTypo()
    }
  }

  componentDidMount() {
    const {newWords} = this.props
    window.addEventListener('keypress', this.onKeyPress)
    newWords(quote)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress)
  }

  render() {
    return (
      <div>
        <h1>Hello, World! Party</h1>
        <Statistics />
        <WordList />
        <Keyboard />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  increment: (keyCode: string) => {
    dispatch(nextChar(keyCode));
  },
  newWords: (words: string) => {
    dispatch(updateWords(words))
  },
  newTypo: () =>  {
    dispatch(incrementTypo())
  }
});

const mapStateToProps = state => ({
  index: state.words.idx,
  words: state.words.string
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
