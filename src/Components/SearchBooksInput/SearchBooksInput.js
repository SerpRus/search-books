import React, {Component} from 'react';
import './SearchBooksInput.css';

export default class SearchBooksInput extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(event) {
    this.props.onSearchTextChange(event.target.value);
  }

  render() {
    const {searchText} = this.props;

    return (
      <input
        className='SearchBooksInput__input'
        type='text'
        value={searchText}
        onChange={this.handleSearchTextChange}
      />
    )
  }
}