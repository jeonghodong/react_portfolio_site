import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieSection from "./Routers/MovieSection";
import MovieAbout from "./Routers/MovieAbout";
import ChartSection from "./Routers/ChartSection";
import ChartAbout from "./Routers/ChartAbout";
import Home from "./Routers/Home";
import PortfolioSection from "./Routers/PortfolioSection";
import PortfolioAbout from "./Routers/PortfolioAbout";
import PhotographySection from "./Routers/PhotographySection";
import PhotographyAbout from "./Routers/PhotographyAbout ";
import Intro from "./Routers/Intro";

const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;

`;

function App() {
  return (
    <Wrap>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Intro />} />
          <Route path="/Movie" element={<MovieSection />} />
          <Route path="/MovieAbout" element={<MovieAbout />} />
          <Route path="/SNS" element={<ChartSection />} />
          <Route path="/SnsAbout" element={<ChartAbout />} />
          <Route path="/Portfolio" element={<PortfolioSection />} />
          <Route path="/PortfolioAbout" element={<PortfolioAbout />} />
          <Route path="/Photography" element={<PhotographySection />} />
          <Route path="/PhotographyAbout" element={<PhotographyAbout />} />
        </Routes>
      </Router>
    </Wrap>
  );
}

export default App;
