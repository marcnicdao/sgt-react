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
        <Header />
        <GradeTable grades={grades}/>
      </div>
    );

  }
}

export default App;
