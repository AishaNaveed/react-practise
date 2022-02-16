import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => (
  <img
    src="https://cdn.shopify.com/s/files/1/0468/6734/9662/products/Coaster-LoveyouToThemoonandback_1024x1024@2x.jpg?v=1637598287"
    alt=""
  />
);
const bookName = "Love You to the Moon and Back";

const Title = () => <h1>{bookName}</h1>;

const Author = () => {
  const writer = "By: (Alex Clark Art)";
  return <h5>{writer}</h5>;
};

// const Author = () => (
//   <h5 style={{ color: "crimson", fontFamily: "cursive" }}>
//     By: (Alex Clark Art)
//   </h5>
// );

ReactDOM.render(<BookList />, document.getElementById("root"));
