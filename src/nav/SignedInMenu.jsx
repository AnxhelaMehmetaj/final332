import React from "react";
import {Button, Menu } from "semantic-ui-react";

export default function SignedInMenu({setAuthenticated}){
    return(
        <Menu.Item position='right'>

            <Button onClick={()=> setAuthenticated(false)} basic inverted content='Sign out' style={{marginLeft:'0.5em'}}/>

        </Menu.Item>
    )
}