import { useState, useEffect } from "react";
import axios from "axios";
import { updateSpots } from "helpers/selectors";


export default function useApplicationData() {

  const setDay = day => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, [])




  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = updateSpots(state.days, appointments);
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

    
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const days = updateSpots(state.days, appointments);
        setState({
          ...state,
          days,
          appointments
        });
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}