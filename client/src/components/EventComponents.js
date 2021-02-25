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

    </div>);
}

export default UserComponent;