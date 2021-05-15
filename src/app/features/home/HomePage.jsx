import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                   NJIT Events
                </Header>

            </Container>
        </Segment>
    )
}