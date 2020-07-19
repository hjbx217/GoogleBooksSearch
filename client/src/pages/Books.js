// import React, { useEffect, useState } from "react";
// //import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import SearchForm from "../components/Search/Search";
// import Saved from "../components/Saved";


// function Books() {
//   // Setting our component's initial state
//   const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({})
//   const [query, setQuery] = useState()

//   // Load all books and store them with setBooks
//   // useEffect(() => {
//   //   loadBooks()
//   // }, [])

//   // Loads all books and sets them to books
//   function loadBooks(query) {
//     API.getGoogle(query)
//       .then(res =>
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   function handleInputChange(e) {
//     const { name, value } = e.target
//     console.log(value);
//     setQuery(value);
//     // console.log(query);
//   }

//   function handleClick(e) {
//     e.preventDefault();
//     console.log("Hello");
//     console.log(query);
//     loadBooks(query);
//   }

//   return (
//     <Container fluid>
//       <SearchForm handleInputChange={handleInputChange} onClick={handleClick}>
//       </SearchForm>
//       {/*Create Row for the Search(ed) Books*/}
//       <Row>
//         <Col size="md-6">
//           {/* <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron> */}
//           <form>
//             <Input
//               onChange={() => { }}
//               name="title"
//               placeholder="Title (required)"
//             />
//             <Input
//               onChange={() => { }}
//               name="author"
//               placeholder="Author (required)"
//             />
//             <TextArea
//               onChange={() => { }}
//               name="synopsis"
//               placeholder="Synopsis (Optional)"
//             />
//             <FormBtn
//               // disabled={!(formObject.author && formObject.title)}
//               onClick={handleClick}
//             >
//               Submit Book
//               </FormBtn>
//           </form>
//         </Col>
//         {/*Call Saved component here */}
//         <Saved books={books}></Saved>

//       </Row>
//     </Container>
//   );
// }


// export default Books;
