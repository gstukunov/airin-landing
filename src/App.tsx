import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main";
import { AirinAssetControlPage } from "./pages/AirinAssetControlPage";
import { AirinPhishingKIT } from "./pages/AirinPhishingKIT";
import { CompanyProfile } from "./pages/CompanyProfile";

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
    {
      path: "/company-profile",
      element: <CompanyProfile />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
