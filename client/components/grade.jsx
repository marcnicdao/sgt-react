import React from 'react';

export default class Grade extends React.Component {

  render() {
    const { grade, name, course } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{course}</td>
        <td>{grade}</td>
      </tr>
    );
  }
}
