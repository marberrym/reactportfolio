import React, { Component } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import '../styles/navbar.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    
    render() {
        return (
            <Appbar position="static">
                <Toolbar className="navFlex">
                    <div>
                        {this.props.type === "sub" ?
                            <IconButton>
                                <Link to="/">
                                    <HomeIcon className="navIcon"/>
                                </Link>
                            </IconButton>
                        :
                            null
                        
                        }
                        <IconButton>
                            <MenuIcon 
                                onClick={this.toggleMenu}
                                aria-owns="simple-menu" 
                            />
                        </IconButton>
                    </div>
                    <Menu 
                        open={this.state.menu} 
                        onClose={this.toggleMenu} 
                        className="menu"
                        id="simple-menu"
                    >
                        <MenuList>
                            <MenuItem><Link to="/about" className="navLink"><Typography variant="subtitle2">ABOUT ME</Typography></Link></MenuItem>
                            <MenuItem><Typography variant="subtitle2">PROJECTS</Typography></MenuItem>
                            <MenuItem><Typography variant="subtitle2">GRAPHIC DESIGN</Typography></MenuItem>
                            <MenuItem> <a href="mailto:marberrym@gmail.com?subject=I got a chance to visit your portfolio and..." className="navLink"><Typography variant="subtitle2">CONTACT</Typography></a></MenuItem>
                            <MenuItem><Typography variant="subtitle2">RESUME</Typography></MenuItem>
                        </MenuList>
                    </Menu>
                    <div>
                        <IconButton>
                            <a href="https://www.linkedin.com/in/matthewmarberry">
                                <i class="fab fa-linkedin navIcon"></i>
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://www.github.com/marberrym">
                                <i class="fab fa-github navIcon"></i>
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="mailto:marberrym@gmail.com?subject=I got a chance to visit your portfolio and...">
                                <i class="far fa-envelope navIcon"></i>
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://codepen.io/Jaydoe/">
                                <i class="fab fa-codepen navIcon"></i>
                            </a>
                        </IconButton>
                            
                    </div>
                </Toolbar>
            </Appbar>
        )
    }
    
}

export default Navbar