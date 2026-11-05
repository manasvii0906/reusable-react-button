import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div style={{ display: "flex", gap: "15px", padding: "30px" }}>
      <Button variant="primary">
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
}

export default App;
