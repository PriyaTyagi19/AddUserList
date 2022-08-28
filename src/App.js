import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [enteredList, setEnteredList] = useState([]);
  const enterUserHandler = (uName, uAge) => {
    setEnteredList((prevEnteredList) => {
      return [
        ...prevEnteredList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <div className="App">
        <AddUser onEnterUser={enterUserHandler} />
        <UserList users={enteredList} />
      </div>
    </>
  );
}

export default App;
