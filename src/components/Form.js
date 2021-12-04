import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  // consolidate forms to one State
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    faveFood: "Pizza",
    coolGuy: false
  })

  function handleFormChange(event) {
    console.log(event.target.name, event.target.value)

    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") value = event.target.checked
    // event.target.type === "checkbox" ? value = event.target.checked : console.log("not checkbox")

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }

  return (
    <form>
      <input 
      type="text" 
      name="firstName"
      onChange={handleFormChange} 
      value={formData.firstName} 
      />
      <input 
      type="text" 
      name="lastName"
      onChange={handleFormChange} 
      value={formData.lastName} 
      />
            <input 
      type="text" 
      name="faveFood"
      onChange={handleFormChange} 
      value={formData.faveFood} 
      />
      <input 
      type="checkbox" 
      name="coolGuy"
      onChange={handleFormChange} 
      value={formData.coolGuy} 
      />       
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
