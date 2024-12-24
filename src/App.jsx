import Login from "./component/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./component/Register";
import HomePage from "./pages/HomePage";
import NavbarComponent from './component/NavbarComponent'
import { Container } from "react-bootstrap";
import ProtectedRoute from "./component/ProtectedRoute";
import NotFound from "./component/NotFound";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NavbarComponent />
              <Container>
                <Routes>
                  <Route path="/home" element={<ProtectedRoute Component={HomePage} />} />
                  <Route path="/" element={<ProtectedRoute Component={Login} isLoginRoute={true} />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Container>
            </>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
