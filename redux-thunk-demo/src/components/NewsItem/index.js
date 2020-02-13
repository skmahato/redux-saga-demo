import React from 'react';
import { connect } from 'react-redux'

import styles from './styles';

const NewsItem = ({ article }) => (
  article ?
    <article style={styles.articleStyle} >
      {article.error && <h2 style={styles.errorMessage}>{article.error}</h2>}
      {article.title && <div>
        <h1>{article.title}</h1>
        <img style={styles.imgStyle} src={article.urlToImage} alt="" />
        <h2>{article.description}</h2>
      </div>}
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article: state.news,
})

export default connect(mapStateToProps)(NewsItem);
