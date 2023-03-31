import { Navbar, NavDropdown, } from 'react-bootstrap'
import logo1 from '../assets/netflix_logo.png'
import logo2 from '../assets/avatar.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function MyNav() {
    return (
        <Navbar className="bg-dark" expand='lg'>
            <div className="container-fluid">
                <a className="navbar-brand ms-2" href="#">
                    <img width="100px" className="img-fluid" src={logo1} alt="logo Netflix" />
                </a>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarCollapse id='basic-navbar-nav'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Recently Added</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">My List</a>
                            </li>
                        </ul>
                        <span className="navbar-nav mt-1">
                            <span className="nav-item">
                                <a className="nav-link text-white mt-1 me-1" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </a>
                            </span>
                            <span className="nav-item">
                                <a className="nav-link text-white mt-1 me-1" href="#">Kids</a>
                            </span>
                            <span className="nav-item">
                                <a className="nav-link text-white mt-1 me-1" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                    </svg>
                                </a>
                            </span>
                            <span className="nav-item me-2">
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={
                                        <div>
                                            <img width='40px' src= {logo2} alt="logo2" />
                                        </div>
                                    }
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </span>
                        </span>
                </NavbarCollapse>
            </div>
        </Navbar>
    )
}

export default MyNav;