import React, { Component } from "react";
import CollegeDetails from "./collegeDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      collegeData: [
        {
          id: 1,
          name: "Kathir college of engineering",
          location: "Coimbatore",
          affilatedTo: "Anna University",
          TNEAcode: 2018,
          averagePlacementRecord: 88.5,
          coursesOffered: [
            "Information Technology",
            "Computer Science ",
            "Electrical and Electronics",
          ],
        },
        {
          id: 2,
          name: "Shanmuga college of engineering",
          location: "Coimbatore",
          affilatedTo: "EBox University",
          TNEAcode: 2028,
          averagePlacementRecord: 76,
          coursesOffered: [
            "Electrical and Electronics",
            "Electronics and Communication ",
            "Computer Science",
          ],
        },
        {
          id: 3,
          name: "United Institute of Technology",
          location: "Coimbatore",
          affilatedTo: "Anna University",
          TNEAcode: 2056,
          averagePlacementRecord: 100,
          coursesOffered: [
            "Information Technology",
            "Agriculture ",
            "Marine",
            "Computer Science",
          ],
        },
        {
          id: 4,
          name: "VSB college of engineering",
          location: "Karur",
          affilatedTo: "Anna University",
          TNEAcode: 2078,
          averagePlacementRecord: 90,
        },
      ],
    };
  }
  render = () => {
    const { collegeData } = this.state;
    return (
      <div>
        {collegeData.map((data) => {
          return (
            <CollegeDetails
              id={data.id}
              name={data.name}
              location={data.location}
              affilated={data.affilated}
              TNEAcode={data.TNEAcode}
              averagePlacementRecord={data.averagePlacementRecord}
              coursesOffered={data.coursesOffered}
            />
          );
        })}
      </div>
    );
  };
}
export default App;
