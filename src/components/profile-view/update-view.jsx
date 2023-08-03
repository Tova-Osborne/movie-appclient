// import React, { useReducer } from "react";
// import { Form } from "react-bootstrap";
// import formReducer from "../reducers/form-reducer";
// import { Form } from "react-bootstrap";
// import { Button, FloatingLabel } from "react-bootstrap";
// import { useParams } from "react-router";

// export const UpdateView = () => {
//   const initialFormValue = {
//     Username: "",
//     // storedUser.Username,
//     Password: "",
//     // storedUser.Password,
//     Email: "",
//     // storedUser.Email,
//     Birthdate: "",
//     // storedUser.Birthdate,
//   };
//   console.log(initialFormState);
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const storedToken = localStorage.getItem("token");
//   console.log(storedUser);

//   const [formState, dispatch] = useReducer(formReducer, initialFormValue);
//   console.log(formState);
//   const handleChange = (e) =>
//     dispatch({
//       type: "handleChange",
//       field: e.target.name,
//       payload: e.target.value,
//     });

//     const noChange = (!e) => {
//         dispatch({
//             type: 'noChange',
//         })

//   // const Data = {
//   //   Username: formState.Username,
//   //   Password: formState.Password,
//   //   Email: formState.Email,
//   //   Birthdate: formState.Birthdate,
//   // };
//   // console.log(Data);

//   function handleUpdate() {
//     fetch(`https://tovamovielistapp.herokuapp.com/users/${storedUser._id}`, {
//       method: "PUT",
//       body: JSON.stringify(formState),
//       headers: {
//         Authorization: `Bearer ${storedToken}`,
//         "Content-Type": "application/json",
//       },
//     }).then((response) => {
//       if (response.ok) {
//         alert("Change(s) successful");
//         //   localStorage.setItem("user", JSON.stringify(formState));
//         window.location.reload();
//       } else {
//         alert("Change failed");
//       }
//     });
//   }

//   return (
//     <Form>
//       <h3> Manage Account Details </h3>
//       <Form.Group controlId="formUsernameChange">
//         <FloatingLabel
//           controlId="floatingUsername"
//           label="Enter new Username"
//           className="mb-3"
//         >
//           <Form.Control
//             type="text"
//             name="Username"
//             value={formState.username}
//             onChange={(e) => handleChange(e)}
//             placeholder="Enter new username"
//             minLength="5"
//           />
//         </FloatingLabel>
//       </Form.Group>
//       <Form.Group controlId="formPasswordChange">
//         <FloatingLabel
//           controlId="floatingPassword"
//           label="Enter new Password"
//           className="mb-3"
//         >
//           <Form.Control
//             type="text"
//             name="Password"
//             value={formState.password}
//             onChange={(e) => handleChange(e)}
//             placeholder="Enter new password"
//             minLength="8"
//           />
//         </FloatingLabel>
//       </Form.Group>
//       <Form.Group controlId="formEmailChange">
//         <FloatingLabel
//           controlId="floatingEmail"
//           label="Enter new Email"
//           className="mb-3"
//         >
//           <Form.Control
//             type="text"
//             name="Email"
//             value={formState.email}
//             onChange={(e) => handleChange(e)}
//             placeholder="Enter new email address"
//           />
//         </FloatingLabel>
//       </Form.Group>
//       <Form.Group controlId="formBirthdateChange">
//         <FloatingLabel
//           controlId="floatingBirthday"
//           label="Enter new Birthday"
//           className="mb-3"
//         >
//           <Form.Control
//             type="date"
//             name="Birthdate"
//             value={formState.Birthdate}
//             onChange={(e) => handleChange(e)}
//             placeholder="Enter new birthday"
//           />
//         </FloatingLabel>
//       </Form.Group>
//       <Button variant="dark" onClick={handleUpdate}>
//         Update
//       </Button>
//     </Form>
//   );
// };
