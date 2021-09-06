import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faBiohazard} from '@fortawesome/free-solid-svg-icons'

import {
     
    Navbar,
     
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
  } from 'reactstrap';

  const HeaderComponent = () =>{

    return(

        <div>
            <Navbar light style={{background:"#cc66cc"  }}>
            
            <NavbarBrand href="/home" style={{paddingLeft:"30px" , color:"#4d1933"}}>   <h3>BreakingBad <FontAwesomeIcon icon={faBiohazard}/> </h3>   </NavbarBrand>
                
               <Nav  navbar>
                <NavItem style={{paddingRight:"50px",paddingLeft:"30px"}}> 
                    < NavLink href="/home">  <p><FontAwesomeIcon icon={faHome} /> Home</p></NavLink>
                </NavItem>
               </Nav>
               
                
            </Navbar>
        </div>
    );
  }
  export default HeaderComponent;