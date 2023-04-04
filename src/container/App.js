import React from "react";
import ToolTip from "../components/ToolTip";
import './App.css';

function App() {
  return (
    <div className="App">
      //tooltip component render
      <ToolTip content="hawk-emoji" direction="top">
        <span>Hawk</span>
      </ToolTip>
    </div>
  );
}

export default App;
