import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnLink,
  NavItemBtn
} from './Navbar.elements';
import { Button } from '../../globalStyles';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
            </NavLogo>
            <MobileIcon onClick={handleClick} >
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/service">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/product">Product</NavLink>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/signup">
                    <Button primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                ) : (
                    <NavBtnLink to="/signup">
                      <Button fontBig primary>
                        SIGN UP
                      </Button>
                    </NavBtnLink>
                  )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
