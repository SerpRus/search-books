import React, {Component} from 'react';
import './SearchBooksCards.css';
import BookCard from '../BookCard/BookCard';

export default class SearchBooksCards extends Component {
  render() {
    return (
      <div className='SearchBooksCards'>
        <BookCard bookCardsData={this.props.bookCardsData} />
      </div>
    );
  }
}