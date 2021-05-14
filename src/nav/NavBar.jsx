import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink} from "react-router-dom";

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
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}