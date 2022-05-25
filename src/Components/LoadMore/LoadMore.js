import React, {Component} from 'react';
import './LoadMore.css';

export default class Sorting extends Component  {
  constructor(props) {
    super(props);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore() {
    this.props.onLoadMore();
  }

  render() {
    return (
      <button
        className='LoadMore'
        onClick={this.handleLoadMore}
      >
        load more
      </button>
    );
  }
}
