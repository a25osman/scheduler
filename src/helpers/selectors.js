export function getAppointmentsForDay(state, day) {
  let result = [];
  let appointmentsArray = []
  for (const obj of state.days) {
    if (obj.name === day) {
      appointmentsArray = obj.appointments;
    }
  }

  for (const val of appointmentsArray) {
    result.push(state.appointments[String(val)]);
  }
  return result;
}

export function getInterview(state, interview) {
  if (interview) {
    let id_interviewer = interview.interviewer;
    let student = interview.student;
    return {
      student,
      interviewer: state.interview[String(id_interviewer)]
    };
  }
  return null
}

export function getInterviewsForDay(state, day) {
  let result = [];
  let interviewersArray = []
  for (const obj of state.days) {
    if (obj.name === day) {
      interviewersArray = obj.interviewers;
    }
  }

  for (const val of interviewersArray) {
    result.push(state.interview[String(val)]);
  }
  return result;
}