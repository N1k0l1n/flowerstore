import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import Plants from "./Plants";
import Nav from "./Nav";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/dashboard" element={<MainContent />} />
        <Route path="/dashboard" element={<SideContent />} />
        <Route path="/todo" element={<Plants />} />
        <Route path="/orders" element={<MainContent />} />
        <Route path="/profile" element={<MainContent />} />
        <Route path="/settings" element={<MainContent />} />
        <Route path="/logout" element={<MainContent />} />
      </Route>
    </Routes>
  );
}

export default Routers;
