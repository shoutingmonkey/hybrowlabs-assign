import React, { useState } from "react";

import Table from "./Components/Table/Table";
import "./App.css";
import { getName } from "./api/getNamesAPI";

function App() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const deletePerson = (key) => {
    setPersons(persons.filter((person) => person.name !== key));
  };

  const addPerson = async () => {
    setIsLoading(true);
    const response = await getName();
    if (response) setPersons([...persons, response.data]);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <button onClick={addPerson} className="btn-add" disabled={isLoading}>
        {isLoading ? "Loading..." : "Add Record"}
      </button>
      <Table persons={persons} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
