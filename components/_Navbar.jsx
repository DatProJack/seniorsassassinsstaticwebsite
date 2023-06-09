import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
export default function _Navbar(props){
  const navigate = useNavigate();

  // following code changes the color of the navbar depending on current route
  
  return(
    <Navbar bg="white" expand="sm" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand style={{cursor: "pointer"}} className="ms-3 cursor-pointer" onClick={()=>{navigate("/")}}>
          {/* <img className="navIcon me-1" src="https://cdn-icons-png.flaticon.com/512/845/845022.png"></img> */}
          TAG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={()=>{navigate("/leaderboard")}} className="text-dark">
              <img width="20px" className="navIcon me-1" src="https://icons.veryicon.com/png/o/miscellaneous/monochrome-function-linear-icon/leaderboard-2.png"></img>
              Leaderboard
            </Nav.Link>
            <Nav.Link onClick={()=>{navigate("/signup")}} className="text-dark">
              Signup
            </Nav.Link>
            <Nav.Link onClick={()=>{navigate("/submitkill")}} className="text-dark">
              Submit Tag
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}