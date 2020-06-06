import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1 className='title'>Student Grade Table</h1>
    );
  }
}

class Grade extends React.Component {

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

class GradeTable extends React.Component {
  render() {
    const { grades } = this.props;
    const row = grades.length > 0
      ? grades.map(grade => {
        return <Grade key={grade.id} name={grade.name} course={grade.course} grade={grade.grade}/>;
      })
      : 'No grades recorded';
    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
        </table>

      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('api/grades')
      .then(data => data.json())
      .then(grades => this.setState({ grades: grades }));
  }

  render() {
    const { grades } = this.state;
    return (
      <div>
        <Header />
        <GradeTable grades={grades}/>
      </div>
    );

  }
}

export default App;
