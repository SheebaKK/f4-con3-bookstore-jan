import React, { useEffect, useState } from "react";
import "../Style/BookDetails.css";
import axios from "axios";

const API_KEY = "AIzaSyDijmeEgM8AIsrm8BlNzMSLySkfJ4antY0";

const BookDetail = ({ bookClicked }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${bookClicked}?key=${API_KEY}`
      )
      .then((res) => {
        setBook(res.data);
        console.log(res.data, "mye");
      })
      .catch((err) => console.log(err, "mmmm"));
  }, [bookClicked]);

  return book ? (
    <div className="books-detail">
      {console.log(book, "bye")};
      <div className="book-detail">
        <div className="book-background-detail">
          <div className="books-img-detail">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={`Thumbnail for ${book.title}`}
            />
          </div>
          <div className="book-info-detail">
            <h3 className="book-title-detail">{book.volumeInfo.title}</h3>
            <h2 className="book-title-author">{book.volumeInfo.authors[0]}</h2>
            <p className="book-desc-detail">{book.volumeInfo.description}</p>
            <h2 className="ratings">
              Avg Rating : {book.volumeInfo.averageRating} | Rating Count :{" "}
              {book.volumeInfo.ratingCount} | Publisher :{" "}
              {book.volumeInfo.publisher} | Language :{book.volumeInfo.language}
            </h2>
            <div className="button-info">
              {" "}
              <button
                className="readmore-detail"
                onClick={() =>
                  (window.location.href = book.volumeInfo.previewLink)
                }
              >
                Now Read!
              </button>
              <button
                className="readmore-detail"
                onClick={() =>
                  (window.location.href = book.volumeInfo.infoLink)
                }
              >
                More Info!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BookDetail;