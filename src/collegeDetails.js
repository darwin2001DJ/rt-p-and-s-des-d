import React, { Component } from "react";
import PropTypes, { string } from "prop-types";
import "./card.css";
export default class CollegeDetails extends Component {
  render() {
    const {
      name,
      location,
      affilatedTo,
      TNEAcode,
      averagePlacementRecord,
      coursesOffered,
    } = this.props;
    return (
      <>
        <div className="card">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th>College Name:</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Location:</th>
                <td>{location}</td>
              </tr>
              <tr>
                <th>Affiliated to:</th>
                <td>{affilatedTo}</td>
              </tr>
              <tr>
                <th>TNEA Code:</th>
                <td>{TNEAcode}</td>
              </tr>
              <tr>
                <th>Placement Record:</th>
                <td>{averagePlacementRecord}</td>
              </tr>
              <tr>
                <th>Courses Offered:</th>
                <td>{coursesOffered}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

CollegeDetails.propType = {
  id: PropTypes.number,
  name: PropTypes.string,
  location: PropTypes.string,
  affilatedTo: PropTypes.string,
  TNEAcode: PropTypes.number,
  averagePlacementRecord: PropTypes.number,
  coursesOffered: PropTypes.array,
};

CollegeDetails.defaultProps = {
  id: 1,
  name: "ebox-college",
  location: "coimbatore",
  affilatedTo: "ebox university",
  TNEAcode: 1001,
  averagePlacementRecord: 100,
  coursesOffered: ["Mechanical"],
};
