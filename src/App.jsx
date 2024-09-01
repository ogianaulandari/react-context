import { createContext, useState } from "react";

import Child from "./components/Child";
import { data as initialData } from "./data/data";

export const MyContext = createContext();

function App() {
  const [data, setData] = useState(initialData);

  return (
    <MyContext.Provider value={{ data, setData }}>
      <Child />
    </MyContext.Provider>
  );
}

export default App;