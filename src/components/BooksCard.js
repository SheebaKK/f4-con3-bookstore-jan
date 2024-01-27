import React from "react";
import "../Style/BooksCard.css";

const BooksCard= ({ booksDetail, setBookClicked }) => {
  console.log(booksDetail);
  //   booksDetail
  //     .then((res) => console.log(res.items))
  //     .catch((err) => console.log(err));
  return (
    <div className="books">
      {booksDetail.map((book, index) => {
        if (index > 2) return null;

        if (
          !book.volumeInfo ||
          !book.volumeInfo.imageLinks ||
          !book.volumeInfo.imageLinks.thumbnail ||
          !book.volumeInfo.title ||
          !book.searchInfo ||
          !book.searchInfo.textSnippet ||
          !book.volumeInfo.previewLink
        ) {
          return null;
        }

        return (
          <div className="book" key={index}>
            <div className="book-background">
              <div className="books-img">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`Thumbnail for ${book.title}`}
                />
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.volumeInfo.title}</h3>
                <p className="book-desc">{book.searchInfo.textSnippet}</p>
                <button
                  className="readmore"
                  onClick={() => {
                    setBookClicked(book.id);
                  }}
                >
                  Now Read!
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksCard;