import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Navbar from './containers/Navbar/Navbar';
import Content from './components/Content/Content';
import WelcomeBedrijf from "./components/Welcome/WelcomeBedrijf";
import Upload from "./components/Upload/Upload";
import FilteredContent from "./components/Content/FilteredContent";
import Filter from "./containers/Filter/Filter";
import FilterDropDown from "./containers/Filter/FilterDropDown";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/WelcomeBedrijf" element={<WelcomeBedrijf />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/FilteredContent" element={<FilteredContent />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/FilterDropDown" element={<FilterDropDown />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;