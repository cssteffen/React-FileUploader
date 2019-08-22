import React from "react";
import ControlBar from "../ControlBar/ControlBar";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo
} from "@fortawesome/free-solid-svg-icons";

/*This component takes a number of props describing a single file. 
It must determine which icon to display based on the fileType prop. 
A lookup list of the file types corresponding to the icons is 
first created to make the mapping of fileType to icon faster. */

export default class ListItem extends React.Component {
  render() {
    const icons = {
      jpg: faFileImage,
      mov: faFileVideo,
      txt: faFileAlt,
      mps: faFileAudio
    };
    return (
      <div className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt} />
          </div>
        </div>
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <div className="ListItem__title">{this.props.name}</div>
            <div className="ListItem__size">{this.props.size}</div>
          </div>
          <div className="ListItem__actions">
            <div className="ListItem__status">{this.props.status}</div>
            <ControlBar />
          </div>
        </div>
      </div>
    );
  }
}
