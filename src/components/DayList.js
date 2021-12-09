import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days;
  const eachDay = days.map((obj) => {
    return <DayListItem
      key={obj.id}
      name={obj.name}
      spots={obj.spots} 
      selected={obj.name === props.value}
      setDay={props.onChange} 
    />
  })

  return (
    <ul>
      {eachDay}
    </ul>
  );
}