import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar className="container-fluid tak4" >
                <Navbar.Brand> 
                    <img className="mt-2" src="/images/logo/logo4.png" width={250} height={65}></img>
                </Navbar.Brand>
                <ul className="navbar-nav ms-auto">
                    <Nav className="mr-auto">
                        <Link to="/"><h6 className="text-light nav-link">Member</h6> </Link>
                        <Link to="/members"><h6 className="text-light nav-link">Add</h6> </Link>
                        <Link to="/memberedit"><h6 className="text-light nav-link">Edit</h6> </Link>
                        <Link to="/membersdelete"><h6 className="text-light nav-link">Delete</h6></Link> 
                    </Nav>
                </ul>
                <Link to="/about"><img  src="/Logos.webp" alt="Logo"></img></Link> 
            </Navbar>
        </div>
    );
}


//<h1 className="container text-light">ST Member</h1>
/*class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid " >
                <div className="row" >
                    <div className="col-md-5 text-left ">
                        <h1 className="text-light" style={{fontSize: 60}}><img src="/images/logo/logo2.png" alt="" /> ST Members </h1>
                        <div className="clo-md-4 text-right">
                            <ul className="list-inline">
                                <li className="list-inline-item title"><Link className="text-light" to="/">Member</Link></li>
                                <li className="list-inline-item title"> | </li>
                                <li className="list-inline-item title"><Link className="text-light" to="/membersadd">Add Member</Link></li>
                                <li className="list-inline-item title"> | </li>
                                <li className="list-inline-item title"><Link className="text-light" to="/membersdelete">Delete Member</Link></li>
                                <li className="list-inline-item title"> | </li>
                                <li className="list-inline-item title"><Link className="text-light" to="/membersedit">Edit Member</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>   
                <hr />         
            </div> 
        );
    }
}
*/
