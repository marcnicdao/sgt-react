import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  onChangeHandler(event) {
    const { classList, value } = event.target;
    if (classList.contains('name')) {
      this.setState({ name: value });
      return;
    }
    if (classList.contains('course')) {
      this.setState({ course: value });
      return;
    }
    if (classList.contains('grade')) {
      this.setState({ grade: value });
    }
  }

  resetHandler() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  submitHandler(event) {
    event.preventDefault();
    const { name, grade, course } = this.state;
    const newGrade = {
      name: name,
      grade: grade,
      course: course
    };
    this.props.addNewGrade(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className='form-container col-3'>
        <form className='grade=form d-flex flex-wrap'
          onSubmit={this.submitHandler}
          onReset={this.resetHandler}
        >
          <div className='input'>
            <label htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input type="text"
              name='name'
              id='name'
              placeholder='name'
              className='name'
              value={this.state.name}
              onChange={this.onChangeHandler}/>
          </div>
          <div className='input'>
            <label htmlFor="course">
              <i className="fas fa-list-alt"></i>
            </label>
            <input type="text"
              name='course'
              id='course'
              placeholder='course'
              className='course'
              value={this.state.course}
              onChange={this.onChangeHandler}/>
          </div>
          <div className='input'>
            <label htmlFor="grade">
              <i className="fas fa-graduation-cap"></i>
            </label>
            <input type="text"
              name='grade'
              id='grade'
              placeholder='grade'
              className='grade'
              value={this.state.grade}
              onChange={this.onChangeHandler}/>
          </div>
          <div className='form-button-container'>
            <button type='submit'>Add</button>
            <button type='reset'>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
