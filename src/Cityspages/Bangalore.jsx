import React from 'react'

export const Bangalore = () => {
    const [city, setcity] = React.useState("");
    const [loading, setloading] = React.useState(false);
    const [data, setdata] = React.useState([]);
    const [sort, setsortdata] = React.useState("asc");
    function Fetchdata(data) {
      return fetch(`http://localhost:6536/Pune?_sort=price&_order=${data}`).then(
        (res) => res.json()
      );
    }
  
    React.useEffect(() => {
      Fetchdata(sort).then((res) => {
        setdata(res);
      });
    }, [sort]);
    return (
      <>
        <div>
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
      </>
    );
}
