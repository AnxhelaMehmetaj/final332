import React,{ useState } from "react";
import EventForm from "./EventForm";
import {sampleData} from "../../api/sampleData";
import {Grid} from "semantic-ui-react";
import EventList from "./EventList";

export default function EventDashboard({formOpen, setFormOpen}){
    const [events, setEvents] =useState(sampleData);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events = {events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen&&
                <EventForm setFormOpen={setFormOpen}
                           setEvents={setEvents}/>
                }
            </Grid.Column>
        </Grid>

    )


}