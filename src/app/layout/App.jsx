import React, {useState} from 'react';
import EventDashboard from "../features/events/EventDashboard";
import NavBar from "../../nav/NavBar";
import {Container} from "semantic-ui-react";
import {Route} from 'react-router-dom';
import HomePage from "../features/home/HomePage";
import EventForm from "../features/events/EventForm";
import EventDetailedPage from "../features/events/EventDetailedPage";

function App() {
    const [formOpen, setFormOpen] = useState (true);
    const [selectedEvent, setSelectedEvent] = useState (null);



    function handleCreateFormOpen() {
        setSelectedEvent (null);
        setFormOpen (true);
    }

    return (
        <>
            <NavBar setFormOpen={handleCreateFormOpen}/>
            <Container className="main">
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/events' component={EventDashboard}/>
                <Route path='/events/:id' component={EventDetailedPage}/>
                <Route path={['/createEvent','/manage/:id']} component={EventForm}/>
            </Container>
        </>
    );
}

export default App;
