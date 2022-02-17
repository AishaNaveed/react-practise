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

// const bookName = "Love You to the Moon and Back";
// const writer = "By: (Alex Clark Art)";
// const pic =
//   "https://cdn.shopify.com/s/files/1/0468/6734/9662/products/Coaster-LoveyouToThemoonandback_1024x1024@2x.jpg?v=1637598287";

function BookList() {
  return (
    <section className="bookList">
      {/* key is added so that react can keep track of any item added or deleted from the list, its good to use unique id instead of index because index can be changed but id will remain the same */}
      {Books.map((book, index) => {
        return <Book key={book.id} book={book}></Book>;
      })}
      {/* <Book
        pic={secondBook.pic}
        bookName={secondBook.bookName}
        writer={secondBook.writer}
      /> */}
      {/* <Book designation="software engineer" /> */}
    </section>
  );
}

const Book = (props) => {
  //destructuring the props
  const { pic, bookName, writer } = props.book;
  return (
    <article className="book">
      <img src={pic} alt="" />
      <h1>{bookName}</h1>
      <h5>{writer.toLocaleUpperCase()}</h5>
    </article>
  );
};

// const Image = () => <img src={pic} alt="" />;
// const Title = () => <h1>{bookName}</h1>;
// const Author = () => <h5>{writer.toLocaleUpperCase()}</h5>;

// const Author = () => (
//   <h5 style={{ color: "crimson", fontFamily: "cursive" }}>
//     By: (Alex Clark Art)
//   </h5>
// );

ReactDOM.render(<BookList />, document.getElementById("root"));
