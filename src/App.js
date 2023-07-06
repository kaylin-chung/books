import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    
    const editBookByID = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id)
            {
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookByID = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random()*9999), 
                title: title,
            }
        ];
        setBooks(updatedBooks);


        // const response = await axios.post("http://localhost:3001/books", {
        //     title
        // });
  
        // const updatedBooks = [
        //     ...books,
        //     response.data
        // ];
        // setBooks(updatedBooks);
    };


    return (
    <div className="app"> 
        <h1> Reading List </h1>
        <BookList onEdit={editBookByID} books={books} onDelete={deleteBookByID}/>
        <BookCreate onCreate={createBook} /> 
    </div>
    );
}

export default App;