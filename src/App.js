import React from "react";
import Main from "./containers/Main";
import background from "./assets/images/background.jpg";
function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundImage: `url(${background})` }}
    >
      <Main />
    </div>
  );
}

export default App;
