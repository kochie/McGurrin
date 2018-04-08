/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { nextChar } from '../actions';

class WordList extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('keypress', (ev) => {
      this.props.increment();
      console.log(ev.charCode, this.props.index);
    });
  }

  render() {
    const { classes, index, words } = this.props;
    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item>
          <Typography>
            {words.split('').map((char, idx) => (<span className={idx === index ? classes.selected : null} key={idx}>{char}</span>))}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  container: {

  },
  selected: {
    backgroundColor: 'red',
  },
};


WordList.propTypes = {
  words: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.number).isRequired,
};

const withClasses = withStyles(styles)(WordList);

const mapStateToProps = state => ({
  index: state.words.idx,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => {
    dispatch(nextChar(ownProps.words.length));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withClasses);
