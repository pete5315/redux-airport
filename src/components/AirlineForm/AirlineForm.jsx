import { useDispatch } from "react-redux";
import { useState } from "react";

function AirlineForm() {
  // "dispatch" is how we talk to redux from react
  const dispatch = useDispatch();
  // Track the new airline to add in our "local" state
  // (yes, we can still use local state!)
  const [newAirline, setNewAirline] = useState([]);
  const [newAirplane, setNewAirplane] = useState([]);

  const handleSubmit = (event) => {
    // Don't reload on form submit
    event.preventDefault();
    console.log(newAirline);
    if (newAirline === "" || !newAirplane) {
      alert("Input field empty");
      return;
    }

    // Tell redux that we want to add the new airline
    dispatch({
      type: "ADD_AIRLINE",
      // Pass in what we're tracking in state
      payload: { airline: newAirline, planes: newAirplane },
    });

    // Clear the form field
    setNewAirline("");
    setNewAirplane("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Airline Name"
        value={newAirline}
        onChange={(event) => setNewAirline(event.target.value)}
      />
      <input
        type="number"
        placeholder="Airplane Number"
        value={newAirplane}
        onChange={(event) => setNewAirplane(event.target.value)}
      />
      <button type="submit">Add!</button>
    </form>
  );
}

export default AirlineForm;
