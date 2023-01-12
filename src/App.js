import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieSection from "./Routers/MovieSection";
import MovieAbout from "./Routers/MovieAbout";
import ChartSection from "./Routers/ChartSection";
import ChartAbout from "./Routers/ChartAbout";
import HomeSection from "./Routers/HomeSection";
import Home from "./Routers/Home";

const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;

  // 기능은 동작하지만 scroll bar 안보이게하기.
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Wrap>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<HomeSection />} />
          <Route path="/Movie" element={<MovieSection />} />
          <Route path="/MovieAbout" element={<MovieAbout />} />
          <Route path="/Chart" element={<ChartSection />} />
          <Route path="/ChartAbout" element={<ChartAbout />} />
        </Routes>
      </Router>
    </Wrap>
  );
}

export default App;
