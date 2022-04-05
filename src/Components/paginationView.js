import React, { Fragment } from "react";
import { Table } from "reactstrap";

function Test() {
  const attendence = [
    {
      Name: "A Person",
      Attendence: [
        {
          date: "2019/12/01",
          attendence: 1,
        },
        {
          date: "2019/12/02",
          attendence: 1,
        },
        {
          date: "2019/12/03",
          attendence: 1,
        },
      ],
    },
  ];

  return (
    <Fragment>
      {attendence.map((person) => {
        return (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                {person.Attendence.map((personAttendendance) => {
                  return <th>{personAttendendance.date}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{person.Name}</td>
                {person.Attendence.map((personAttendendance) => {
                  return <td>{personAttendendance.attendence}</td>;
                })}
              </tr>
            </tbody>
          </Table>
        );
      })}
    </Fragment>
  );
}

export default Test;
