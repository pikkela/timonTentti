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

    const handleChange = (e) => {
        let aNew = {...event};   //avoid mutation
        aNew[e.target.name]=e.target.value; //getting the value from Event interface (component)
        setEvent(aNew); //storing to the memory of container
    };

    const handleSubmit=()=>{
        const result = create(event);
        const temp = [...events];    //create temp array for users
        temp.push(event);            //add new user in array
        setEvents(temp);             //set temp array to users state
        if(result.id>0){
            alert("Saved  " +JSON.stringify(event));
        }
    }

    //calling component to render the users
    return(
        <div>
            <EventComponent event={event} events={events} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    );
}

export default UserContainer;