// import React, { useEffect, useState } from "react";
// import  "./card.css";
// import { Button } from "bootstrap";

// // kratibharadwaj@buyume.io
// // https://docs.google.com/document/d/1k6CqXXyNHi4xpQfJstEgDCD6XNScNdseEXTfv9cOW5Q/edit

// const Card = () => {

//     const [users, setUsers] = useState();
//     // const [email, setEmail] = useState();

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => setUsers(data));
// },[]);
     

//     console.log(users);
//     // console.log(email);

   
//     return(
//      <div className="header">
//        <input
//          type="text"
//          placeholder="write here"
//          value={users}
//          />

//        {users?.map(user => (
          
          
//           <input
//           type="text"
//           placeholder="write here"
//           value={user.name}
//           />       
          
//        ))}
//      </div>
//     );

// }

// export default Card;






// // import { Button, EditableText } from "@blueprintjs/core"
// // import { useEffect, useState } from "react"
// // import "./App.css"

// // function Card() {
// //   const [users, setUsers] = useState([])

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/users")
// //       .then(response => response.json())
// //       .then(json => setUsers(json))
// //   }, [])
// //   console.log(users);

// //   return (
// //     <div className="App">
// //       <table class="bp4-html-table .modifier">
// //         <thead>
// //           <tr>
// //             <th>Id</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Website</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map(user => (
// //             <tr key={user.id}>
// //               <td>{user.id}</td>
// //               <td>{user.name}</td>
// //               <td>
// //                 {/* <EditableText value={user.email} /> */}
// //               </td>
// //               <td>
// //                 {/* <EditableText value={user.website} /> */}
// //               </td>
// //               <td>
// //                 {/* <Button intent="primary">Update</Button> */}
// //                 &nbsp;
// //                 {/* <Button intent="danger">Delete</Button> */}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   )
// // }

// // export default Card