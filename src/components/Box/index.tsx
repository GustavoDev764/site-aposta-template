import React, { Component } from "react";
import { Link } from "react-router-dom";

interface StateProps {
  classItemBox?: String;
  classbox?: String;
  title?: String;
  name?: String;
  urlLink?: String;
  textLink?: String;
  classLink?: String;
}

interface DispatchProps {}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

export default class Box extends Component<Props> {
  render() {
    const {
      classbox,
      classItemBox,
      title,
      name,
      urlLink,
      textLink,
      classLink,
    } = this.props;

    return (
      <div className={"" + classItemBox}>
        <div className={"" + classbox}>
          <div className="inner">
            <h3>{title}</h3>

            <p>{name}</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag"></i>
          </div>
          <Link to={"" + urlLink} className={"" + classLink}>
            {textLink} <i className="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
    );
  }
}
