import React from 'react';
import { connect } from 'react-redux';

import img from '../../assets/loading_spinner.gif';

const Laoading = ({ loading }) => (
  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(mapStateToProps)(Laoading);
