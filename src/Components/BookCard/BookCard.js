import './BookCard.css';

const BookCard = props => {
  if (props.bookCardsData) {
    return props.bookCardsData.map((book, index) => {
      return (
        <div key={index} className='SearchBooksCards__item BookCard'>
          <div className='BookCard__content'>
            <img className='BookCard__img' src={book.img} alt={book.title}/>
            <div className='BookCard__info'>
              <div className='BookCard__category'>{book.category}</div>
              <div className='BookCard__title'>{book.title}</div>
              <div className='BookCard__author'>{book.author}</div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default BookCard;