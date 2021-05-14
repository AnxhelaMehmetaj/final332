import React from 'react';
import {Button, Icon, Item, Segment, List} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteEvent } from "./eventActions";



export default function EventListItem({event}){
    const dispatch = useDispatch();
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src="/assets/user.png" />
                        <Item.Content >
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
              <span>
                  <Icon name='clock' />{event.date}
                  <Icon name='place' />{event.place}
              </span>

            </Segment>

            <Segment clearing>
                <div>{event.description}</div>
                <Button  onClick={()=>dispatch(deleteEvent(event.id))}
                         color='red'
                         floated='right'
                         content='Delete' />
                <Button  as={ Link }
                         to={'/events/${event.id}'}
                         color='teal'
                         floated='right'
                         content='View' />

            </Segment>
        </Segment.Group>
    );
}