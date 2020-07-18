import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search For Book</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter Book's Name"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm;


// import React from "react";
// import "./style.css";

// function Search({ query, handleInputChange, handleFormSubmit }) {
//   return (
//     <form className="form-inline" role="form">
//       <div className="form-group mx-sm-3 mb-2">
//         <label htmlFor="Title" className="sr-only">
//           Search Book Title
//         </label>
//         <input
//           className="form-control heading-subtitle "
//           id="Title"
//           type="text"
//           value={query}
//           placeholder="Book Title..."
//           name="query"
//           onChange={handleInputChange}
//           size="55"
//           required
//         />
//       </div>
//       <button
//         onClick={handleFormSubmit}
//         type="submit"
//         className="btn btn-lg search-button heading-subtitle"
//       >
//         Search
//       </button>
//     </form>
//   );
// }

// export default Search;