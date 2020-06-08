import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    const { grades, deleteGrade } = this.props;
    const row = grades.length > 0
      ? grades.map(grade => {
        return <Grade key={grade.id}
          name={grade.name}
          course={grade.course}
          grade={grade.grade}
          id={grade.id}
          deleteGrade={deleteGrade}/>;
      })
      : (
        <tr>
          <td>No grades recorded</td>
        </tr>

      );
    return (
      <div className='col-9'>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>

      </div>
    );
  }
}
