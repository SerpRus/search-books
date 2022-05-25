import React, {Component} from 'react';
import './CategoryFilter.css';

export default class CategoryFilter extends Component  {
  constructor(props) {
    super(props);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(event) {
    this.props.onCategoryChange(event.target.value);
  }

  render() {
    return (
      <label>
        Categories:
        <select value={this.props.categoryFilter} onChange={this.handleCategoryChange}>
          <option value="">all</option>
          <option value="Art">art</option>
          <option value="Biography">biography</option>
          <option value="Computers">computers</option>
          <option value="History">history</option>
          <option value="Medical">medical</option>
          <option value="Poetry">poetry</option>
        </select>
      </label>
    );
  }
}
