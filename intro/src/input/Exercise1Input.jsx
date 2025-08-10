import { useState } from "react";

const Exercise1Input = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };

  const alertName=()=>{
    alert(`Come in ${person.name}, your age is ${person.age}`)
  }
  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => handleChange(e, "name")}
        value={person.name}
      />
      <input
        id="age-input"
        onChange={(e) => handleChange(e, "age")}
        value={person.age}
      />
      <button onClick={alertName}>Go to Bar</button>
    </div>
  );
};
export default Exercise1Input;
