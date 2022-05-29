
export function getAppointmentsForDay(state, day) {

  const filteredDays = state.days.filter(selectedDay => selectedDay.name === day);

  if (filteredDays.length === 0) {
    return [];
  }

  const appointmentsId = filteredDays[0].appointments;

  return appointmentsId.map(id => state.appointments[id]);

}




export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;
  const student = interview.student;
  const interviewer = state.interviewers[interviewerId];

  return { student, interviewer };
}




export function getInterviewersForDay(state, day) {

  const filteredDays = state.days.filter(selectedDay => selectedDay.name === day);

  if (filteredDays.length === 0) {
    return [];
  }

  const interviewersId = filteredDays[0].interviewers;

  return interviewersId.map(id => state.interviewers[id]);

}

