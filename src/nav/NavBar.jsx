import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink} from "react-router-dom";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({setFormOpen}) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>

                    NJIT events
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
                </Menu.Item>
                 <SignedOutMenu/>
                <SignedInMenu/>

            </Container>
        </Menu>
    )
}