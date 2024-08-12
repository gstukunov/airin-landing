import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main";
import { AirinAssetControlPage } from "./pages/AirinAssetControlPage";
import { AirinPhishingKIT } from "./pages/AirinPhishingKIT";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/airin-asset-control",
      element: <AirinAssetControlPage />,
    },
    {
      path: "/airin-phishing-KIT",
      element: <AirinPhishingKIT />,
    },
    // {
    //   path: "/about-us",
    //   element: <AirinAssetControlPage />,
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
