import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  getAverage() {
    const grades = this.state.grades.filter(el => true);
    console.log(grades);
    const totalPoints = grades.reduce((item1, item2) => {
      return parseInt(item1.grade) + parseInt(item2.grade);
    }, 0);
    return totalPoints / this.state.grades.length;
  }

  componentDidMount() {
    fetch('api/grades')
      .then(data => data.json())
      .then(grades => this.setState({ grades: grades }))
      .catch(error => console.error(error));
  }

  render() {
    const { grades } = this.state;
    return (
      <div>
        <Header average={this.getAverage()} totalPoints={this.totalPoints}/>
        <GradeTable grades={grades} />
      </div>
    );

  }
}

export default App;
