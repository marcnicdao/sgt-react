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

  render() {
    const { grades } = this.state;
    return (
      <div>
        <Header average={this.getAverage().toString()}/>
        <GradeTable grades={grades} />
      </div>
    );

  }
}

export default App;
