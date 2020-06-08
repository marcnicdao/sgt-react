import React from 'react';

export default class Grade extends React.Component {

  render() {
    const { grade, name, course, deleteGrade, id } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{course}</td>
        <td>{grade}</td>
        <td>
          <button onClick={() => deleteGrade(id)}
            className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    );
  }
}
