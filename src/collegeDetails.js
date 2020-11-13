import React, { Component } from "react";
import PropTypes, { string } from "prop-types";
export default class collegeDetails extends Component {
  render() {
    const {
      id,
      name,
      location,
      affilatedTo,
      TNEAcode,
      averagePlacementRecord,
      coursesOffered,
    } = this.props;
    return (
      <>
        <h1 className="header">Ebox Colleges</h1>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{location}</h1>
        <h1>{affilatedTo}</h1>
        <h1>{TNEAcode}</h1>
        <h1>{averagePlacementRecord}</h1>
        <h1>{coursesOffered}</h1>
      </>
    );
  }
}

collegeDetails.propType = {
  id: PropTypes.number,
  name: PropTypes.string,
  location: PropTypes.string,
  affilatedTo: PropTypes.string,
  TNEAcode: PropTypes.number,
  averagePlacementRecord: PropTypes.number,
  coursesOffered: PropTypes.array,
};

collegeDetails.defaultProps = {
  id: 1,
  name: "ebox-college",
  location: "coimbatore",
  affilatedTo: "ebox university",
  TNEAcode: 1001,
  averagePlacementRecord: 100,
  coursesOffered: ["Mechanical"],
};
