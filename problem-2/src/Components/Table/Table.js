import React from "react";
import "./Table.css";

function Table({ persons, deletePerson }) {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Delete person</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, i) => {
            return (
              <tr key={i}>
                <td>{person?.name}</td>
                <td>
                  <button
                    onClick={() => deletePerson(person?.name)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
