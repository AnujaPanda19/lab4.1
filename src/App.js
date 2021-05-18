
import React from 'react';
import BookList from './booklist.json';
function App() {
  return (
    <div className="container">
   
      <div className="table">
        {    BookList.length>0 ?(

              <div>
               

                <table className="table table-bordered">
                  <thead>
                    <th>Book Id</th>
                    <th>Book Title</th>
                    <th>Book Author</th>
                    <th>Book Year of publish</th>

                  </thead>
                  <tbody>
                         {
                           BookList.map(p=>{
                             return(
                              <tr>
                              <td>{p.id}</td>
                              <td>{p.title}</td>
                              <td>{p.author}</td>
                              <td>{p.year}</td>
                              </tr>
                             )
                           })
                         }
                   
                  </tbody>

                </table>
              </div>

           
      
        ): null
         }
      </div>
    </div>
  );
}

export default App;
