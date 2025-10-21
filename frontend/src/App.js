import react,{useState} from "react";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";


function App() {
  const [books,setBooks]=useState([]);

  return (
    <div >
      <h1>Welcome to Book Finder</h1>
      <BookSearch onResults={setBooks}/>
      <BookList books={books}/>
      
    </div>
  );
}

export default App;
