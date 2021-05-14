import {Menu, Container, Button} from "semantic-ui-react";
import React, { useState } from 'react';

import {NavLink} from 'react-router-dom';
import SignOutMenu from "./SignOutMenu";
import SignInMenu from "./SignInMenu";

export default function NavBar({setFormOpen}) {
    const [authenticated,setAuthenticated]= useState(false);
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/public/assets/react.png" style={{marginRight: 15, width: 50, height: 30}}/>
                    NJIT events
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events'/>
                { authenticated &&
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button positive inverted content='Create Event'/>
                </Menu.Item>}
                {authenticated ? (<SignInMenu setAuthenticated={setAuthenticated}/>)
                : (<SignOutMenu setAuthenticated={setAuthenticated}/>)}


            </Container>
        </Menu>
    )
}