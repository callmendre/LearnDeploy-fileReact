import { useState } from "react";

import Card from "./component/card-api";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
    </>
  );
}

export default App;
