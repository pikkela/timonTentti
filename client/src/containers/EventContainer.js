import {useState, useEffect} from "react";
import EventComponent from "../components/EventComponents";
import {getEvents, create} from './../controllers/EventController';

const UserContainer=()=>{
    const [events, setEvents]= useState([]);
    const [event, setEvent]= useState({});

    //Getting the users from database
    useEffect(()=>{
        getEvents()
        .then(events=>{setEvents(events)})
        .catch((error) => {
            alert('Error: Palvelin ei vastaa, tarkista VPN', error);
        });
    },[]);

    //calling component to render the users
    return(
        <div>
            <EventComponent events={events}/>
        </div>
    );
}

export default UserContainer;