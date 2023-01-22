import React, { useEffect } from "react";
import { CiSaveDown1, CiCircleChevUp } from "react-icons/ci";
import { MdEventSeat } from "react-icons/md";
import { GiHolyWater } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "../Css/Nav.css";
export const AllCitys = ({ about }) => {
  const [city, setcity] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const [data, setdata] = React.useState([]);
  const [sort, setsortdata] = React.useState("asc");
  function Fetchdata(data) {
    return fetch(
      `http://localhost:6536/Pune?_sort=price&_order=${data}`
    ).then((res) => res.json());
  }

  useEffect(() => {
    Fetchdata(sort).then((res) => {
      setdata(res);
    });
  }, [sort]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/pune");
  }

  const Bagalore = () => {
    return navigate("/bagalore");
  };
  const pune = () => {
    return navigate("/pune");
  };
  const delhi = () => {
    return navigate("/delhi");
  };
  const ncr = () => {
    return navigate("/ncr");
  };
  const mumbai = () => {
    return navigate("/mumbai");
  };
  const chennai = () => {
    return navigate("/chennai");
  };
  const hyderabad = () => {
    return navigate("/hyderabad");
  };
  const chandigarh = () => {
    return navigate("/chandigarh");
  };
  const kolkata = () => {
    return navigate("/kolkata");
  };
  const ahmedabad = () => {
    return navigate("/ahmedabad");
  };
  const coimbatore = () => {
    return navigate("/coimbatore");
  };
  const indore = () => {
    return navigate("/indore");
  };
  const jaipur = () => {
    return navigate("/jaipur");
  };
  const mangalore = () => {
    return navigate("/mangalore");
  };
  const mysore = () => {
    return navigate("/mysore");
  };
  const vizag = () => {
    return navigate("/vizag");
  };
  const goa = () => {
    return navigate("/goa");
  };
  const nagpur = () => {
    return navigate("/nagpur");
  };
  const kochi = () => {
    return navigate("/kochi");
  };
  const Vijayawada = () => {
    return navigate("/vijayawada");
  };
  const Siliguri = () => {
    return navigate("/siliguri");
  };
  const Bhopal = () => {
    return navigate("/bhopal");
  };
  const Lucknow = () => {
    return navigate("/lucknow");
  };
  const Guwahati = () => {
    return navigate("/guwahati");
  };
  const Bhubaneswar = () => {
    return navigate("/bhubaneswar");
  };
  const Vadodara = () => {
    return navigate("/vadodara");
  };
  const Nashik = () => {
    return navigate("/nashik");
  };
  const UdupiManipal = () => {
    return navigate("/udupiManipal");
  };
  const Trichy = () => {
    return navigate("/trichy");
  };
  const Madurai = () => {
    return navigate("/Madurai");
  };

  return (
    <>
      <div>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "500px",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "16px",
                margin: "12px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                border: "1px solid grey",
                borderRadius: "12px",
              }}
            >
              <div
              // style={{ width: "20%", display: "flex" }}
              >
                <h2 style={{ fontWeight: "700" }}>Sort And Filter Data</h2>
                <div>
                  <div
                    style={{
                      gap: "12px",
                      marginTop: "12px",
                      marginLeft: "12px",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        border: "2px solid black",
                        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        padding: "4px",
                        borderRadius: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItem: "center",
                          gap: "4px",
                        }}
                      >
                        <CiSaveDown1 />₹
                      </div>
                      <div>
                        <button
                          onClick={() => setsortdata("asc")}
                          style={{ fontSize: "12px" }}
                        >
                          Low To High{" "}
                        </button>
                      </div>
                    </div>
                    <div
                      style={{
                        border: "2px solid black",
                        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        padding: "4px",
                        borderRadius: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItem: "center",
                          gap: "4px",
                        }}
                      >
                        <CiCircleChevUp />₹
                      </div>
                      <div>
                        <button
                          onClick={() => setsortdata("desc")}
                          style={{ fontSize: "12px" }}
                        >
                          High To Low{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <h1 style={{ marginTop: "12px", fontWeight: "700" }}>Seats</h1>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginLeft: "12px",
                  marginTop: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    gap: "4px",
                    borderRadius: "11px",
                    padding: "16px",
                    border: "2px solid black",
                  }}
                >
                  <button disabled={1 != 1}>
                    <MdEventSeat />4
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    gap: "4px",
                    borderRadius: "11px",
                    padding: "16px",
                    border: "2px solid black",
                  }}
                >
                  <button disabled={1 != 1}>
                    <MdEventSeat />5
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    gap: "4px",
                    borderRadius: "11px",
                    padding: "16px",
                    border: "2px solid black",
                  }}
                >
                  <button>
                    {" "}
                    <MdEventSeat />7
                  </button>
                </div>
              </div>
              <h1 style={{ marginTop: "12px", fontWeight: "700" }}>
                Fuel Type
              </h1>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginLeft: "12px",
                  marginTop: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    gap: "4px",
                    borderRadius: "11px",
                    padding: "16px",
                    border: "2px solid black",
                  }}
                >
                  <button>
                    <GiHolyWater /> Petrol
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    gap: "4px",
                    borderRadius: "11px",
                    padding: "16px",
                    border: "2px solid black",
                  }}
                >
                  <button>
                    <GiHolyWater /> Diesel
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    gap: "4px",
                    borderRadius: "11px",
                    padding: "16px",
                    border: "2px solid black",
                  }}
                >
                  <button>
                    {" "}
                    <GiHolyWater />7
                  </button>
                </div>
              </div>
            </div>
            <div style={{ height: "500px", width: "80%" }}>
              <div style={{}}>
                <div
                  className="citybtn"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6,1fr)",
                  }}
                >
                  <button onClick={Bagalore}>Bangalore</button>
                  <button onClick={pune}>Pune</button>
                  <button onClick={delhi}> Delhi</button>
                  <button onClick={ncr}>NCR</button>
                  <button onClick={mumbai}>Mumbai</button>
                  <button onClick={chennai}>Chennai</button>
                  <button onClick={hyderabad}>Hyderabad</button>
                  <button onClick={chandigarh}>Chandigarh</button>
                  <button onClick={kolkata}>Kolkata</button>
                  <button onClick={ahmedabad}>Ahmedabad</button>
                  <button onClick={coimbatore}>Coimbatore</button>
                  <button onClick={indore}>Indore</button>
                  <button onClick={jaipur}>Jaipur</button>
                  <button onClick={mangalore}>Mangalore</button>
                  <button onClick={mysore}>Mysore</button>
                  <button onClick={vizag}>Vizag</button>
                  <button onClick={goa}>Goa</button>
                  <button onClick={nagpur}>Nagpur</button>
                  <button onClick={kochi}>Kochi</button>
                  <button onClick={Vijayawada}>Vijayawada</button>
                  <button onClick={Siliguri}>Siliguri</button>
                  <button onClick={Bhopal}>Bhopal</button>
                  <button onClick={Lucknow}>Lucknow</button>
                  <button onClick={Guwahati}>Guwahati</button>
                  <button onClick={Bhubaneswar}>Bhubaneswar</button>
                  <button onClick={Vadodara}>Vadodara</button>
                  <button onClick={Nashik}>Nashik</button>
                  <button onClick={UdupiManipal}>Udupi-Manipal</button>
                  <button onClick={Trichy}>Trichy</button>
                  <button onClick={Madurai}>Madurai</button>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  margin: "auto",
                  gridTemplateColumns: "repeat(3,1fr)",
                }}
              >
                {data.map((res) => {
                  return (
                    <div key={res.id}>
                      <img src={res.img} width="250px" alt="" srcset="" />
                      <p>Car Name: {res.name}</p>

                      <p>Fuel Type :{res.fuel}</p>
                      <p>Seat's : {res.totalseat}</p>
                      <p>Price {res.price}:Par/hr</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
