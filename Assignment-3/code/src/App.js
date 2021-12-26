import React from "react";
import logo from "./logo.svg";
import "./App.css";
const employee = {
  Name: "Alan Ford",
  empid: "00005152",
  Appointment: "9:00 (24-05-2016)",
  Email: "alan.form@gmail.nl",
  Phone: "+31123456789",
  Status: "In Progress",
  Door: "Mark",
  Time: "10:30 (25-05-2016)",
  prodimg: "https://www.w3schools.com/howto/img_avatar.png",
  prodname: "Boltaart Bosbessen",
  prodDesc:
    "Overheerlijke boltaart met Bosbessen uit de keuken van de bijenkorf.",
};

var arrow = "<";
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className="emp-details">
        <label className="leftarrow"> {arrow} </label>
        <label className="Print">Print</label>
        <h2>{employee.Name}</h2>
        <p>{employee.empid}</p>
      </div>
      <div className="customer-info">
        <div>
          <strong>Appointment On : </strong>
          <label>{employee.Appointment}</label>
        </div>
        <div>
          <strong>Email : </strong>
          <label>{employee.Email}</label>
        </div>
        <div>
          <strong>Phone : </strong>
          <label>{employee.Phone}</label>
        </div>
      </div>

      <div className="order-info">
        <table>
          <tr>
            <td>
              <strong>Status</strong>
            </td>
            <td>
              <strong>Door</strong>
            </td>
            <td>
              <strong>Time</strong>
            </td>
          </tr>
          <tr>
            <td>
              <span>&#9679;</span>
              {employee.Status}
            </td>
            <td>{employee.Door}</td>
            <td>{employee.Time}</td>
          </tr>
        </table>
      </div>

      <div className="product-list">
        <div className="check-box">
          <input type="checkbox"></input>
        </div>
        <div className="prod-img">
          <img src={employee.prodimg} alt="prod_Image"></img>
        </div>
        <div className="prod-details">
          <h3>{employee.prodname}</h3>
          <p>{employee.prodDesc}</p>
        </div>
        <div className="right-arrow">{">"}</div>
      </div>
    </div>
  );
}
export default App;
