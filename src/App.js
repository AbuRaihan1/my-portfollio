import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loader ? (
        <div className="preloader-div">
          <PuffLoader
            className="preloader"
            color="#16a6ee"
            size={150}
          />
        </div>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}
export default App;
