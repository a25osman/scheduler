import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interview: {}
  });
  
  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => (
        {...prev, days: all[0].data, appointments: all[1].data, interview: all[2].data}
      ));
    })
  }, []);


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    let i;
    let numspots = 0;
    let obj
    state.days.forEach ((day, index) => {
      if (day.name === state.day) {
        for (let app_id of day.appointments) {
          if (appointments[app_id].interview === null) {
            numspots ++;
          }
          i = index;
        }
        obj = {...day, spots: numspots};
      }
    })
    const days = [
      ...state.days,
    ];
    days[i] = obj;
    
    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then(() => {
      setState({
        ...state,
        days,
        appointments
      });
    });
  }
  

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    
    let i;
    let numspots = 0;
    let obj
    state.days.forEach ((day, index) => {
      if (day.name === state.day) {
        for (let app_id of day.appointments) {
          if (appointments[app_id].interview === null) {
            numspots ++;
          }
          i = index;
        }
        obj = {...day, spots: numspots};
      }
    })
    const days = [
      ...state.days,
    ];
    days[i] = obj;
    
    return axios.delete(`http://localhost:8001/api/appointments/${id}`).then(() => {
      setState({
        ...state,
        days,
        appointments
      });
    });
  }

  return {state, setDay, bookInterview, cancelInterview}
}