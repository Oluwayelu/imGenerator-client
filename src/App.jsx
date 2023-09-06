import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotifcationProvider } from "./context";
import { Home, CreatePost, Browse } from "./page";

const App = () => (
  <NotifcationProvider>
    <SkeletonTheme baseColor="#75D6EA" highlightColor="#D4F1F4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  </NotifcationProvider>
);

export default App;

