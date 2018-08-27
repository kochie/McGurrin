import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { WithStyles } from 'material-ui/core'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


const styles = {
  container: {

  },
  font: {
    fontFamily: 'Roboto Mono',
  },
  selected: {
    backgroundColor: 'red',
  },
};

export interface Props extends WithStyles<typeof styles> {
  words: string,
  index: number,
}

class WordList extends React.Component<Props> {
  props: Props
  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    const { classes, index, words } = this.props;
    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item>
          <Typography className={classes.font}>
            {words.split('').map((char, idx) => (<span className={idx === index ? classes.selected : null} key={idx}>{char}</span>))}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const withClasses = withStyles(styles)(WordList);

const mapStateToProps = state => ({
  index: state.words.idx,
  words: state.words.string
});



export default connect(mapStateToProps)(withClasses);
