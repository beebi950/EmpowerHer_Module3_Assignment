import { AppProvider } from "../context/AppContext";
import Component2 from "./Component2";

function Component1() {
  return (
    <div className="component-box">
      <h3>Component 1</h3>

      <AppProvider>
        <Component2 />
      </AppProvider>
    </div>
  );
}

export default Component1;
