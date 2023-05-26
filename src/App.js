import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ReferEarnDesktop from "./pages/ReferEarnDesktop";
import ReferEarnDesktop1 from "./pages/ReferEarnDesktop1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/refer-earn-desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ReferEarnDesktop />} />
      <Route path="/refer-earn-desktop" element={<ReferEarnDesktop1 />} />
    </Routes>
  );
}
export default App;
