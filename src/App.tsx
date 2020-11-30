import React from "react";
import "./App.css";

function App() {
  const clickHandle = () => {
    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78z5t2t8c4ko5b&redirect_uri=http://localhost:3000&state=fooobar&scope=r_liteprofile", "_blank")
  };

  return (
    <div className="App">
      <button onClick={clickHandle}>
        Click Me
      </button>
    </div>
  );
}

export default App;
