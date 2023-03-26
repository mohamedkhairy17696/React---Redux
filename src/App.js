import "./App.css";
import { Container } from "./components/index";
import { Home, Profile, SearchPage } from "./Pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./sections/index";
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    // <Router basename="/cybrog">  // basename used with hostinger domain
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailPage/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
      <Footer position="fixed" />
    </Router>
  );
}

export default App;
