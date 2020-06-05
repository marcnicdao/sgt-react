import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1 className='title'>Student Grade Table</h1>
    );
  }
}

class App extends React.Component {
  render() {
    return <Header/>;
  }
}

export default App;
