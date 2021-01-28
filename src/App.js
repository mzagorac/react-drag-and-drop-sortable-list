import DraggableUsersList from "./containers/DraggableUsersList";
import data from "./data/data.json";
import "./App.css";

data.forEach((item) => console.log(item.name));

function App() {
  return (
    <div className="App">
      <h2>Drag 'n Drop sortable list</h2>
      <DraggableUsersList />
    </div>
  );
}

export default App;
