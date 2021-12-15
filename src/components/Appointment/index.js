import React, { Fragment }  from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "../../hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition("SAVING")
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => transition("ERROR_SAVE", true));
  }


  function deleteBooking() {
    transition("DELETING")
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => transition("ERROR_DELETE", true));
  }
  
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition("CREATE")} />}
      {mode === "CREATE" && (
        <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition("CONFIRM")}
          onEdit={() => transition("EDIT")}
        />
      )}
      {mode === "EDIT" && (
        <Form 
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === "SAVING" && (
        <Status message="Saving" />
      )}
      {mode === "DELETING" && (
        <Status message="Deleting" />
      )}
      {mode === "ERROR_DELETE" && (
        <Error onClose={() => back()} message="Could not cancel appointment." />
      )}
      {mode === "ERROR_SAVE" && (
        <Error onClose={() => back()} message="Could not create or edit appointment." />
      )}
      {mode === "CONFIRM" && (
        <Confirm onConfirm={() => deleteBooking()} onCancel={() => back()} message="Are you sure you would like to delete?" />
      )}
      
    </article>
  );
}