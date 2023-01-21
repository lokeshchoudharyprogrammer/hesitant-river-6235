// import React from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";
// export default function Reade() {
//   const [data, setdata] = React.useState([]);
//   const [tabledark, settabledark] = React.useState("");

//   const [location, setlocation] = React.useState("");
//   function getdata(location) {
//     axios
//       .get(`http://localhost:6536/${location ? location : "Bangalore"}`)

//       .then((res) => setdata(res.data));
//   }
//   console.log(data);
//   const deleteditem = (id) => {
//     axios
//       .delete(
//         `http://localhost:6536/${location ? location : "Bangalore"}/${id}`
//       )
//       .then(() => getdata());
//   };

//   const editdata = (id, name, email) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//   };
//   React.useEffect(() => {
//     getdata(location);
//   }, [location]);

//   return (
//     <>
//       <div style={{ width: "20%", marginLeft: "12px" }}>
//         <select onChange={(e) => setlocation(e.target.value)}>
//           <option value="Bangalore">Bangalore</option>

//           <option value="Pune">Pune</option>
//           <option value="Delhi">Delhi</option>
//           <option value="NCR">NCR</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Chennai">Chennai</option>
//           <option value="Hyderabad">Hyderabad</option>
//           <option value="Chandigarh">Chandigarh</option>
//           <option value="Kolkata">Kolkata</option>
//           <option value="Ahmedabad">Ahmedabad</option>
//           <option value="Coimbatore">Coimbatore</option>
//           <option value="Indore">Indore</option>
//           <option value="Jaipur">Jaipur</option>
//           <option value="Mangalore">Mangalore</option>
//           <option value="Mysore">Mysore</option>
//           <option value="Vizag">Vizag</option>
//           <option value="Goa">Goa</option>
//           <option value="Nagpur">Nagpur</option>
//           <option value="Kochi">Kochi</option>
//           <option value="Vijayawada">Vijayawada</option>
//           <option value="Siliguri">Siliguri</option>
//           <option value="Bhopal">Bhopal</option>
//           <option value="Lucknow">Lucknow</option>
//           <option value="Guwahati">Guwahati</option>
//           <option value="Bhubaneswar">Bhubaneswar</option>
//           <option value="Vadodara">Vadodara</option>
//           <option value="Nashik">Nashik</option>
//           <option value=" Udupi-Manipal">Udupi-Manipal</option>
//           <option value="Trichy">Trichy</option>
//           <option value="Madurai">Madurai</option>
//         </select>
//       </div>

//       <div style={{ display: "flex", width: "80%", margin: "auto" }}>
//         <div >
//           {data.map((newdata) => {
//             return (
//               <div
//                 key={newdata.id}
//                 style={{
//                   display: "flex",
//                   marginButton: "21px",
//                   border: "2px solid black",
//                   padding: "21px",
//                 }}
//               >
//                 <div>
//                   <img src={newdata.img} alt="" width="50px" />
//                 </div>
//                 <div style={{ display: "flex", gap: "20px" }}>
//                   <p> Name {newdata.name}</p>
//                   <p>TotalSeater : {newdata.totalseat}</p>
//                   <p>Location :{newdata.location}</p>
//                   <p>Fuel Type: {newdata.fuel}</p>

//                   <p>Price : {newdata.price} </p>
//                   <p>{newdata.date}</p>
//                   <p>{newdata.time}</p>

//       <div className="form-check form-switch">
//         <input
//           class="form-check-input"
//           type="checkbox"
//           role="switch"
//           onClick={() => {
//             settabledark(tabledark === "table-dark" ? "" : "table-dark");
//           }}
//         />
//       </div>
//       <div className="d-flex justify-content-between m-2 ">
//         <h2>Read</h2>

        
//         <Link to="/create">
//           <button onl className="btn btn-secondary">
//             Create
//           </button>
//         </Link>
//       </div>
//       <table className={`table ${tabledark}`}>
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//           </tr>
//         </thead>
//         {data.map((newdata, index) => {
//           return (
//             <tbody>
//               <tr>
//                 <th scope="row">{newdata.id} </th>

//                   <button
//                     onClick={() => deleteditem(newdata.id)}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
