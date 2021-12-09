import logo from "../logo.svg";
import "../stylesheets/App.css";
import StringDisplay from "./StringDisplay";

const message =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus, risus a imperdiet lobortis, lorem ligula hendrerit felis, ac tincidunt leo turpis quis velit. Ut sit amet tristique sapien, non viverra tortor. Donec vitae ante quis diam rutrum rhoncus id sed lacus. Nam sapien neque, ultricies a dui id, iaculis feugiat tellus. Pellentesque viverra id erat sit amet blandit. Duis efficitur sodales nisl eget feugiat. Vivamus non nisi non orci tincidunt lacinia nec in turpis. Nullam ornare, neque eu efficitur porttitor, ex sapien tincidunt nisl, vitae posuere purus diam eu augue. Aliquam ultrices ex in fermentum consectetur. Morbi molestie odio quis purus aliquam feugiat. Sed vitae nulla molestie, imperdiet ipsum a, rhoncus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut molestie rutrum libero at consequat. Praesent feugiat mi erat, sit amet eleifend eros finibus ac.";

const length = 80;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Frontend Developer Test</h1>
        <StringDisplay message={message} length={length} />
      </header>
    </div>
  );
}

export default App;
