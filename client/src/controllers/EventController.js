import settings from "./../settings.json";

export function getEvents(){
    return fetch(settings.url + "events")
    .then(response=>response.json())
    .then(data=>{return data});
}

export async function create(event){
    const response = await fetch(settings.url + "event", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'  
        },
        body: JSON.stringify(event) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
}