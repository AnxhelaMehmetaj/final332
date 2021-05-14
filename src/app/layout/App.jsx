import React from 'react';
import EventDashboard from "../features/events/EventDashboard";
import NavBar from "../../nav/NavBar";
import {Container} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import HomePage from "../features/home/HomePage";
import EventDetailedPage from "../features/events/EventDetailedPage";
import EventForm from "../features/events/EventForm";

export default function App() {



    return (
        <>
            <NavBar />
            <Container className='main'>

                <Route exact path='/' component={HomePage}/>
                <Route exact path='/events' component={EventDashboard}/>
                <Route path='/events/:id' component={EventDetailedPage}/>

                <Route path={['/createEvent', '/event/:id']} component={EventForm} />


            </Container>
        </>
    );
}