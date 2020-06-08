import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  getAverage() {
    const grades = this.state.grades.map(el => el.grade);
    const totalPoints = grades.reduce((n1, n2) => {
      return Number(n1) + Number(n2);
    }, 0);
    return totalPoints / grades.length;
  }

  componentDidMount() {
    fetch('api/grades')
      .then(data => data.json())
      .then(grades => this.setState({ grades: grades }));
  }

  addNewGrade(newGrade) {
    fetch('api/grades', {
      method: 'POST',
      body: JSON.stringify(newGrade),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(grade => {
        this.setState({ grades: this.state.grades.concat(grade) });
      });
  }

  deleteGrade(id) {
    const newState = this.state.grades.filter(grade => grade.id !== id);
    fetch(`api/grades/${id}`, {
      method: 'DELETE'
    })
      .then(() => this.setState({
        grades: newState
      }));
  }

  render() {
    const { grades } = this.state;
    return (
      <div>
        <Header average={this.getAverage().toString()} />
        <div className='d-flex'>
          <GradeTable grades={grades} deleteGrade={this.deleteGrade}/>
          <GradeForm addNewGrade={this.addNewGrade}/>
        </div>

      </div>
    );

  }
}

export default App;
