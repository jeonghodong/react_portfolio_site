import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Default from "./Routers/Default";
import MovieSection from "./Routers/MovieSection";
import ChartSection from "./Routers/ChartSection";
import Home from "./Routers/Home";

const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <Wrap>
      <Router>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/Movie" element={<MovieSection />} />
            <Route path="/Chart" element={<ChartSection />} />
          </Route>
        </Routes>
      </Router>
    </Wrap>
  );
}

export default App;
