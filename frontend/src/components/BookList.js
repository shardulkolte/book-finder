import react from "react";

function BookList({books}){
    return(
        <div>
            {books.length === 0 ? (
                <p>No Books Found</p>
            ):(
                <ul>
                    {books.map((book)=>(
                        <li key={book._id}>
                            <h3>{book.title}</h3>
                            <p>{book.authors}</p>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList;