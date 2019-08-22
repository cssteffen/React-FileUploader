import React from "react";
import "./ControlBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedoAlt,
  faTrashAlt,
  faCloudDownloadAlt
} from "@fortawesome/free-solid-svg-icons";

/* ControlBar is simply responsible for the 
three button bar on each file displayed on a ListItem. */

export default class ControlBar extends React.Component {
  render() {
    return (
      <div className="ControlBar">
        <div className="ControlBar__btn">
          <FontAwesomeIcon icon={faRedoAlt} />
        </div>
        <div className="ControlBar__btn">
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
        <div className="ControlBar__btn">
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </div>
      </div>
    );
  }
}
