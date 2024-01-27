import React from "react";

import "../Style/MoreBooks.css";

const MoreBooks = ({ booksDetail, setBookClicked }) => {
  return (
    <div className="more-books">
      <h1 className="text">More Books</h1>
      <div className="books-list">
        {booksDetail.map((book, index) => {
          return (
            <div
              className="single-book"
              key={index}
              onClick={() => {
                setBookClicked(book.id);
              }}
            >
              {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`Thumbnail for ${book.title}`}
                  />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreBooks;