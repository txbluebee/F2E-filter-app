import { FETCH_EVENTS, FETCH_SELECTED_LOCATION } from './eventConstants';


export const fetchEvents = () =>{
  return {
    type: FETCH_EVENTS
  }
}

export const fetchEventsByLocation = (location) =>{
  return {
    type: FETCH_SELECTED_LOCATION,
    payload: location 
  }
}
