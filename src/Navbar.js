// Implementation of the NavBar Component 

import { Container, Menu } from 'semantic-ui-react';

const NavBar = () => {

    return(
        <Container >
            <Menu className = 'secondary center aligned'> 
                <Menu.Item> 
                    <a className = 'ui inverted purple button' href = '/'> Home </a>
                    <a className = 'ui inverted purple button' href = '/create'> Create </a>
                    <a className = 'ui inverted purple button' href = '/chat'> Chat </a>
                    <a className = 'ui inverted purple button' href = '/login'> Login </a>
                </Menu.Item>
            </Menu>
        </Container>
    )
}

export default NavBar;