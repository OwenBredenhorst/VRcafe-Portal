import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Navbar from './containers/Navbar/Navbar';
import Content from './components/Content/Content';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/Content" element={<Content />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;