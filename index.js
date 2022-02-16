import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article>
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
const Title = () => <h1>Love You to the Moon and Back</h1>;
const Author = () => <h5>By: (Alex Clark Art)</h5>;

ReactDOM.render(<BookList />, document.getElementById("root"));
