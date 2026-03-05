import { useState } from "react";
import "./FormStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    age: 0,
    isEmployee: false,
    salary: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  function shAlert(event) {
    event.preventDefault();
    const ConditionE = [];
    if (form.name == "") {
      ConditionE.push("The Name field is empty");
    }
    if (
      form.phoneNumber == "" ||
      form.phoneNumber > 10 ||
      form.phoneNumber < 8
    ) {
      ConditionE.push("The Phone Number field is inccorect");
    }
    if (form.age == 0 || form.age < 18 || form.age > 55) {
      ConditionE.push("The Age field is incorrect");
    }
    if (form.salary == "") {
      ConditionE.push("The Salary field is empty");
    }
    setShowAlert(ConditionE);

    if (ConditionE.length == 0) {
      setShowAlert(true);
    }
  }

  function hAlert() {
    setShowAlert(false);
  }

  function handleName(event) {
    setForm({ ...form, name: event.target.value });
  }

  function handlePhone(event) {
    setForm({
      ...form,
      phoneNumber: event.target.value,
    });
  }

  function handleAge(event) {
    setForm({ ...form, age: event.target.value });
  }

  function employeeHandler(event) {
    setForm({
      ...form,
      isEmployee: event.target.checked,
    });
  }

  function salaryHandler(event) {
    setForm({
      ...form,
      salary: event.target.value,
    });
  }

  const formValidation =
    form.name == "" ||
    form.phoneNumber == "" ||
    form.age == "" ||
    form.salary == "" ||
    form.isEmployee == null;

  return (
    <div className="flex">
      <form id="loan-Form">
        <div>
          <h2>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "40px" }} />
          </h2>

          <hr />
        </div>

        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={form.name}
          onChange={handleName}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={handlePhone}
          required
        />

        <label>age: </label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleAge}
          required
        />

        <label>Are you employe?</label>
        <input
          type="checkbox"
          checked={form.isEmployee}
          onChange={employeeHandler}
          required
        />

        <label>Salary:</label>
        <select onChange={salaryHandler} required>
          <option>0 To 500</option>
          <option>500 To 1500</option>
          <option>1500 To 3000</option>
          <option>3000 To 6000</option>
        </select>

        <button
          id="submit-btn"
          onClick={shAlert}
          disabled={formValidation}
          className={`submit-btn ${formValidation ? "disabled" : ""}`}
        >
          Submit
        </button>
      </form>
      {showAlert && (
        <div onClick={hAlert} id="model">
          <div id="model-content">
            <h1>The Form Has Been Submitted Successfully</h1>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
