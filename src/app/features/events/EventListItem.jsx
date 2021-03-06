import React from 'react';
import { Segment, Item, Icon,  Button } from 'semantic-ui-react';
import {Link} from "react-router-dom";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>Hosted by {event.hostedBy}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
        <span>
          <Icon name='clock' /> {event.date}
            <Icon name='marker' /> {event.place}
        </span>
            </Segment>
            <Segment secondary>

            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button
                    onClick={() => deleteEvent(event.id)}
                    color='red'
                    floated='right'
                    content='Delete'
                />
                <Button
                    as={ Link} to={'/createEvent'}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    );
}