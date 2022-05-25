import './TotalBooks.css';

const TotalBooks = props => {
  return (
    <div className='TotalBooks'>
      Found {props.totalBooks} results
    </div>
  );
}

export default TotalBooks;