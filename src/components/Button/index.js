import React from 'react';
import { connect } from 'react-redux';

import { getNews } from '../../actions'
import styles from './styles';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    return (
      <button
        style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={() => this.props.dispatch(getNews())}
      >
        Press to see News
      </button>
    );
  }

};

export default connect()(Button);
