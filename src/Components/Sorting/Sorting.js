import React, {Component} from 'react';
import './Sorting.css';

export default class Sorting extends Component  {
  constructor(props) {
    super(props);
    this.handleSortingChange = this.handleSortingChange.bind(this);
  }

  handleSortingChange(event) {
    this.props.onSortingChange(event.target.value);
  }

  render() {
    return (
      <label>
        Sorting:
        <select value={this.props.sorting} onChange={this.handleSortingChange}>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </label>
    );
  }
}
