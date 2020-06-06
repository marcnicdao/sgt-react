import React from 'react';

export default class Header extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { average } = this.props;
    return (
      <div className='header'>
        <h1 className='title'>Student Grade Table</h1>
        <h3>Average Grade <span>{average}</span></h3>
      </div>
    );
  }
}
