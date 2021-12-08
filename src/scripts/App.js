import logo from "../logo.svg";
import "../stylesheets/App.css";
import StringDisplay from "./StringDisplay";

const message =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend, nunc in sodales fringilla, nulla orci purus, sit amet luctus nunc a diam. Ut orci metus, lacinia nec sodales nec, tempus vitae risus. Phasellus maximus fringilla suscipit. Nulla lobortis arcu vitae arcu tempor, a auctor risus imperdiet. Vivamus id auctor orci. Praesent nisl tortor, mollis id felis at, blandit pulvinar felis. In ultricies massa sit amet posuere finibus. Nam egestas ut purus in finibus. Suspendisse quam tortor, imperdiet in gravida a, ultricies vitae est. Curabitur bibendum sapien leo, eget viverra diam ultrices blandit. Nam porttitor quam vel nisi condimentum iaculis. Proin sodales risus sit amet eros pretium fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique auctor est, nec facilisis nisl ultricies quis.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Frontend Developer Test</h1>
        <StringDisplay length={message} />
      </header>
    </div>
  );
}

export default App;
