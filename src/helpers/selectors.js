
export function getAppointmentsForDay(state, day) {
  let appointments = [];
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === day);

  if (filteredDays.length === 0) {
    return [];
  }

  const appointmentsId = filteredDays[0].appointments;
  for (const id of appointmentsId) {
    appointments.push(state.appointments[id])
  }
  return appointments;
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


