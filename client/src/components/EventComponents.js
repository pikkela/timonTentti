const UserComponent=(props)=>{
    //preparing table of users //{"id":1,"name":"Juhannus juhlat","location":"Vaasa","time":"2021-06-25"}
    const events=props.events.map((event, key)=>{
        return <tr key={key}><td>{event.name}</td><td>{event.location}</td><td>{event.time}</td></tr> 
    })

    
    return(
    <div>
        <h2>Events</h2>
        <table  style={{marginLeft:"15%"}}><tbody>{events}</tbody></table>
        <hr/>
        Name<input type="text" name="name" onChange={e=>props.handleChange(e)} value={props.event.name}></input><br/>
        location<input type="text" name="location" onChange={e=>props.handleChange(e)} value={props.event.location}></input><br/>
        time<input type="text" name="time" onChange={e=>props.handleChange(e)} value={props.event.time}></input><br/>
        <button  onClick={props.handleSubmit}>Save</button>
    </div>);
}

export default UserComponent;