import React, {Component} from 'react';
import './SearchBooks.css'
import SearchBooksInput from '../SearchBooksInput/SearchBooksInput';
import SearchBooksButton from '../SearchBooksButton/SearchBooksButton';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import Sorting from '../Sorting/Sorting';
import SearchBooksCards from '../SearchBooksCards/SearchBooksCards';
import TotalBooks from '../TotalBooks/TotalBooks';
import LoadMore from '../LoadMore/LoadMore';

export default class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookCardsData: [],
      totalBooks: null,
      categoryFilter: '',
      sorting: 'relevance',
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSortingChange = this.handleSortingChange.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  startIndex = 0;
  
  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText,
    });
  }

  handleCategoryChange(categoryFilter) {
    this.setState({
      categoryFilter: categoryFilter,
    });
  }

  handleSortingChange(sorting) {
    this.setState({
      sorting: sorting,
    });
  }

  handleLoadMore() {
    this.startIndex += 30;
    this.handleSearchButton();
  }

  async getSearchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  getBookImage(book) {
    const imageLinks = book.volumeInfo.imageLinks;
    return imageLinks ? imageLinks.thumbnail : '';
  }

  getCategory(book) {
    const categories = book.volumeInfo.categories;
    return categories ? categories[0] : '';
  }

  getAuthor(book) {
    const authors = book.volumeInfo.authors;
    return authors ? authors[0] : '';
  }

  getcurrentData(array) {
    if (array) {
      return array.map(book => {
        return {
          img: this.getBookImage(book),
          category: this.getCategory(book),
          author: this.getAuthor(book),
          title: book.volumeInfo.title,
        }
      });
    }
  }

  async handleSearchButton(event) {
    if (event) {
      event.preventDefault();
      this.startIndex = 0;
    }

    const {searchText, categoryFilter, sorting} = this.state;
    let fullBooksData = this.state.bookCardsData;
    if (!searchText) {
      return;
    }
    let url;

    if (categoryFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${categoryFilter}&orderBy=${sorting}&maxResults=6&startIndex=${this.startIndex}`;
    } else {
      url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sorting}&maxResults=6&startIndex=${this.startIndex}`;
    }

    const searchData = await this.getSearchData(url);
    const totalBooks = searchData.totalItems;
    const books = searchData.items;
    const currentData = this.getcurrentData(books);

    if (!currentData) {
      return;
    }

    if (event) {
      fullBooksData = currentData;
    } else {
      fullBooksData = fullBooksData.concat(currentData);
    }

    this.setState({
      bookCardsData: fullBooksData,
      totalBooks: totalBooks,
    });
  }

  render() {
    return (
      <div className='SearchBooks'>
        <div className='container'>
          <h1 className='SearchBooks__title'>Search for books</h1>

          <form
            className='SearchBooks__form'
            onSubmit={this.handleSearchButton}
          >
            <div>
              <div>
                <SearchBooksInput
                  searchText={this.state.searchText}
                  onSearchTextChange={this.handleSearchTextChange}
                />

                <SearchBooksButton />
              </div>

              <div>
                <CategoryFilter
                  categoryFilter={this.state.categoryFilter}
                  onCategoryChange={this.handleCategoryChange}
                />

                <Sorting
                  sorting={this.state.sorting}
                  onSortingChange={this.handleSortingChange}
                />

              </div>
            </div>
          </form>
            {
              this.state.totalBooks &&
                <div className='SearchBooks__result'>
                  <TotalBooks totalBooks={this.state.totalBooks} />
                  
                  <SearchBooksCards
                    bookCardsData={this.state.bookCardsData}
                  />

                  <LoadMore onLoadMore={this.handleLoadMore} />
                </div>
            } 
        </div>
      </div>
    )
  }
}