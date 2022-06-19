import { useEffect, useReducer } from "react";
import axios from "axios";
import { updateSpots } from "helpers/selectors";



export default function useApplicationData() {

  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";
  // const UPDATE_SPOTS = "SET_INTERVIEW";


  function reducer(state, action) {
    if (action.type === SET_DAY) {
      return { ...state, day: action.day };
    } else if (action.type === SET_APPLICATION_DATA) {
      return { ...state, days: action.days, appointments: action.appointments, interviewers: action.interviewers };
    } else if (action.type === SET_INTERVIEW) {
      const appointment = {
        ...state.appointments[action.id],
        interview: { ...action.interview }
      };
      const appointments = {
        ...state.appointments,
        [action.id]: appointment
      };
      const days = updateSpots(state.days, appointments)
      return { ...state, days, appointments };
    }
    else {
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })


  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      dispatch({ type: SET_APPLICATION_DATA, days: all[0].data, appointments: all[1].data, interviewers: all[2].data })
    });
  }, [])


  const setDay = day => dispatch({ type: "SET_DAY", day });

  function bookInterview(id, interview) {

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        // const days = updateSpots(state.days, appointments);
        dispatch({ type: SET_INTERVIEW, id, interview })

      });
  }

  function cancelInterview(id) {

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        // const days = updateSpots(state.days, appointments);
        dispatch({ type: SET_INTERVIEW, id, interview: null,})
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}