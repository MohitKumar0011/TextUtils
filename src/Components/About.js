import React from "react";

export default function About(props) {
  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "black",
        border: "2px solid",
      }}
    >
      <h1>
        <strong>About Us</strong>
      </h1>
      <p>
        Welcome to TextUtils, the ultimate web application designed to
        effortlessly manipulate text according to your preferences. Our
        intuitive and user-friendly platform allows you to easily convert text
        to uppercase or lowercase, clear unnecessary formatting, copy text to
        your clipboard, and even calculate the average number of characters per
        word. Whether you're a writer, a student, or simply looking to
        streamline your text processing tasks, TextPlay is here to simplify your
        experience. With its powerful yet straightforward features, you can say
        goodbye to manual text modifications and embrace the convenience of
        automated text manipulation. Join us today and unlock a world of endless
        possibilities with just a few clicks.
      </p>
    </div>
  );
}
