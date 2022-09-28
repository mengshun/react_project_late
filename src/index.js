import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./App8"; // redux
// import App from "./App9";
// import store from "./store";
import BaseRouter from "./routes";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  <BaseRouter />
);
