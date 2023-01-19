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
  const [totalseat, settotalseat] = useState("");

  const [location, setlocation] = useState("");
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
        endtime: endtime,
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

    console.log(name, img, location, time, date, price, fuel, totalseat);

    // history("/reader");
  };

  return (
    <>
      <div style={{ width: "80%", margin: "auto" ,marginBottom:"100px"}}>
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
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Car Timing"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Ending Time
            </label>
            <input
              onChange={(e) => setendtime(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="EndingTime"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Date
            </label>
            <input
              onChange={(e) => setdate(e.target.value)}
              type="text"
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
