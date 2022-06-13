import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";



export default function DayListItem(props) {

  function formatSpots(spots) {

    let message = "";

    if (spots === 0) {
      message = `no spots remaining`;
    }
    else if (spots === 1) {
      message = `1 spot remaining`;
    } else {
      message = `${spots} spots remaining`;
    }
    return message;
  }

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  return (
    <li data-testid="day"
      className={dayClass}
      onClick={props.setDay}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
