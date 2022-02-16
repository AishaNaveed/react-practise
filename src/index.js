import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const bookName = "Love You to the Moon and Back";
const writer = "By: (Alex Clark Art)";
const pic =
  "https://cdn.shopify.com/s/files/1/0468/6734/9662/products/Coaster-LoveyouToThemoonandback_1024x1024@2x.jpg?v=1637598287";

function BookList() {
  return (
    <section className="bookList">
      <Book job="developer" />
      <Book designation="software engineer" />
    </section>
  );
}

const Book = (props) => (
  <article className="book">
    <Image />
    <Title />
    <Author />
    <p>{props.job}</p>
    <p>{props.designation}</p>
    {/* <p>{console.log(props)}</p> */}
  </article>
);

const Image = () => <img src={pic} alt="" />;
const Title = () => <h1>{bookName}</h1>;
const Author = () => <h5>{writer.toLocaleUpperCase()}</h5>;

// const Author = () => (
//   <h5 style={{ color: "crimson", fontFamily: "cursive" }}>
//     By: (Alex Clark Art)
//   </h5>
// );

ReactDOM.render(<BookList />, document.getElementById("root"));
