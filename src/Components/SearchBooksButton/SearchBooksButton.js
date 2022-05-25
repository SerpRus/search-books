import React, {Component} from 'react';
import './SearchBooksButton.css';

export default class SearchBooksButton extends Component {
  render() {
    return (
      <button
        className='SearchBooksButton'
        type='submit'
      >
        Поиск
      </button>
    )
  }
}