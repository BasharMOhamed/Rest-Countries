import { Provider } from "react-redux";
import "./App.css";
import RootElement from "./Components/RootElement";
import Country from "./Pages/countryDetail";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Store/Store";

function App() {
  const fetchAll = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err.message);
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <Home />, loader: fetchAll },
        { path: ":name", element: <Country /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
