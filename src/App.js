import "./App.css";
import "./reset.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes />
      </body>
    </div>
  );
}

export default App;
