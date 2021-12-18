import logo from "./logo.svg";
import "./App.css";
const employee = {
  name: "Tobbey",
  location: "NewYork",
  bloodGroup: "B+",
  age: 28,
  profileImg: "https://www.w3schools.com/howto/img_avatar.png",
};

function App() {
  return (
    <div className="container">
      <img src={employee.profileImg} alt="profileImg" />
      <div className="name">{employee.name}</div>
      <p>Location</p>
      <div className="location">{employee.location}</div>
      <p>BloodGroup</p>
      <div className="bloodgroup">{employee.bloodGroup}</div>
      <p>Age</p>
      <div className="age">{employee.age}</div>
    </div>
  );
}

export default App;
