import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Books = [
  {
    id: 1,
    pic: "https://cdn.shopify.com/s/files/1/0468/6734/9662/products/Coaster-LoveyouToThemoonandback_1024x1024@2x.jpg?v=1637598287",
    bookName: "Love You to the Moon and Back",
    writer: "By: (Alex Clark Art)",
  },
  {
    id: 2,
    pic: "https://images-na.ssl-images-amazon.com/images/I/51CvNtFCbZL._SX258_BO1,204,203,200_.jpg",
    bookName: "I Love You to the Moon And Back",
    writer: "By: (Little Tiger Press)",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {Books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
      {/* key is added so that react can keep track of any item added or deleted from the list, its good to use unique id instead of index because index can be changed but id will remain the same */}
      {/* spread operator is used above */}
    </section>
  );
}

const Book = (props) => {
  //destructuring the props
  const { pic, bookName, writer } = props;
  const clickHandle = () => alert("Hello");
  return (
    <article className="book">
      <img src={pic} alt="" />
      <h1 onClick={() => console.log(bookName)}>{bookName}</h1>
      <h5>{writer.toLocaleUpperCase()}</h5>
      <button type="button" onClick={clickHandle}>
        Just checking
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
