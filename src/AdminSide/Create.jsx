import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// Create New Data
const Create = () => {
  const [name, setname] = useState("");
  const [img, setemail] = useState("");
  // name , img,time,date,price,location,fuel,total seat
  const [time, settime] = useState("");
  const [endtime, setendtime] = useState("");
  const [date, setdate] = useState("");
  const [price, setprice] = useState("");
  const [fuel, setfuel] = useState("");
  const [location, setlocation] = useState("");
  const [totalseat, settotalseat] = useState("");

  const history = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clickedbtn");

    fetch(`http://localhost:6536/${location}`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        img: img,
        time: time,
        fuel: fuel,
        totalseat: totalseat,
        location: location,
      
        date: date,
        price: price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });

    // console.log(name, img, location, time, date, price, fuel, totalseat);

    // history("/reader");
  };

  return (
    <>
      <div style={{ width: "80%", margin: "auto", marginBottom: "100px" }}>
        <div className="d-flex justify-content-between m-2 ">
          <h2>Create Crud</h2>
          <Link to="/reader">
            <button onl className="btn btn-primary">
              Show Data
            </button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Car Name
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Car Name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Time
            </label>
            <input
              onChange={(e) => settime(e.target.value)}
              type="time"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Car Timing"
            />
          </div>
         
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Date
            </label>
            <input
              onChange={(e) => setdate(e.target.value)}
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Date"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
              onChange={(e) => setprice(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Car Price"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Fuel Type
            </label>
            <input
              onChange={(e) => setfuel(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Fuel Type Car"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Total Seat's
            </label>
            <input
              onChange={(e) => settotalseat(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Car Name"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Car Img Link
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Car Img Link"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <select onChange={(e) => setlocation(e.target.value)}>
            <option value="Bangalore">Bangalore</option>

            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="NCR">NCR</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Indore">Indore</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Mangalore">Mangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Vizag">Vizag</option>
            <option value="Goa">Goa</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Kochi">Kochi</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Siliguri">Siliguri</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Guwahati">Guwahati</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Nashik">Nashik</option>
            <option value=" Udupi-Manipal">Udupi-Manipal</option>
            <option value="Trichy">Trichy</option>
            <option value="Madurai">Madurai</option>
          </select>

          <button
            onClick={handlesubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;

// name , img,time,date,price,location,fuel,car name,total seat




// {
//   "name": "Suzuki Swift Dzire MT",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/2bfa504fda54519e54871e49ccf7a713c7452d97.png?1663874651",
//   "time": "04:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-24",
//   "price": "100",
//   "id": 2
// },
// {
//   "name": "Maruti S-Presso",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/5ef36d2a7a54280f15d4ef1d5af8a3c452838f08.png?1663874575",
//   "time": "02:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-26",
//   "price": "321",
//   "id": 3
// },
// {
//   "name": "Hyundai Grand i10",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/f9a7281d921fc6abdb3b61a2f61d7c32bd9ac748.png?1663872996",
//   "time": "02:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-26",
//   "price": "321",
//   "id": 4
// },
// {
//   "name": "Hyundai Grand i10",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/f9a7281d921fc6abdb3b61a2f61d7c32bd9ac748.png?1663872996",
//   "time": "02:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-26",
//   "price": "321",
//   "id": 5
// },
// {
//   "name": "Honda City",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/4c80bfbbb90bc61da71b03281361a78093e92060.png?1663872525",
//   "time": "07:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-27",
//   "price": "212",
//   "id": 6
// },
// {
//   "name": "Maruti Wagon R",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/2733bd472b2c1cf2964cb9612854abbea8a9aeaa.png?1663874676",
//   "time": "07:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-27",
//   "price": "212",
//   "id": 7
// },
// {
//   "name": "Honda Amaze",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/038cccdbf5e006c84ade0277edc7d3927f307568.png?1663872447",
//   "time": "03:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "1231-02-28",
//   "price": "344",
//   "id": 8
// },
// {
//   "name": "Suzuki Baleno",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/289ac94026c19af09c0dd6de322896ebd2a9b227.png?1663874188",
//   "time": "07:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "2023-02-05",
//   "price": "344",
//   "id": 9
// },
// {
//   "name": "Renault Kwid",
//   "img": "https://zoomcar-assets.zoomcar.com/photographs/original/5d9078c7423169ed133f300b0d759b20ee488ab6.png?1663875987",
//   "time": "08:23",
//   "fuel": "Petrol",
//   "totalseat": "5",
//   "location": "Bangalore",
//   "date": "2023-02-02",
//   "price": "111",
//   "id": 10
// }