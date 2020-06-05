import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1 className='title'>Student Grade Table</h1>
    );
  }
}

class GradeTable extends React.Component {
  render() {
    const grades = this.props.grades ? '' : 'No grades recorded';
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades}
        </tbody>
      </table>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <GradeTable grades=''/>
      </div>
    );

  }
}

export default App;
