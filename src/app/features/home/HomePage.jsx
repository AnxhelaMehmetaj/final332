import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/react.png' style={{marginBottom: 12}} />
                    Njit Events
                </Header>

            </Container>
        </Segment>
    )
}