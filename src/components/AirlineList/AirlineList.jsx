import { useSelector } from "react-redux";

function AirlineList() {
  // Grab the elementList from the redux store
  const airlineList = useSelector((store) => store.airlineList);

  return (
    // Render the elements list from redux
    <>
      {airlineList.map((airline, i) => (
        <tr key={i}>
          <td>
            {airline.airline}
          </td>
          <td>
            {airline.planes}
          </td>
        </tr>
      ))}
    </>
  );
}

export default AirlineList;
