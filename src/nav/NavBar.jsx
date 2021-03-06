import React, {useState} from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink} from "react-router-dom";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({setFormOpen}) {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    Homepage
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
                {authenticated && (
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button positive inverted content='Create Event' />
                    </Menu.Item>
                )}
                {authenticated ? (
                    <SignedInMenu setAuthenticated={setAuthenticated} />
                ) : (
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                )}

            </Container>
        </Menu>
    )
}