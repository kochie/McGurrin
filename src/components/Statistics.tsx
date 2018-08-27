import * as React from "react";
import { connect } from "react-redux";

interface Props {
  typos: number;
}

class Statistics extends React.Component<Props> {
  render(): React.ReactNode {
    const { typos } = this.props;
    return <div>Typos: {typos}</div>;
  }
}

const mapStateToProps = state => ({
  typos: state.stats.typos
});

export default connect(mapStateToProps)(Statistics);
