import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./../notes.js";
function App() {
  var a = 3 + 3;
  return (
    <div>
      <Header />
      {notes.map((values) => (
        <Note key={values.key} title={values.title} content={values.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
