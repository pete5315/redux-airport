import AirlineForm from "../AirlineForm/AirlineForm";
import AirlineList from "../AirlineList/AirlineList";

function App() {

  return (
    <div>
      <AirlineForm />
      <table>
        <thead>
          <tr>
            <th>Airline name</th>
            <th>Number of planes</th>
          </tr>
        </thead>
        <tbody>
          <AirlineList />
        </tbody>
      </table>
    </div>
  );
}
export default App;
