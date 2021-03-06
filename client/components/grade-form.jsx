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
          onReset={this.resetHandler} >
          <div className="input-group">
            <i className="fas fa-user fa-lg input-group-prepend  input-group-text"></i>
            <input type="text"
              name='name'
              id='name'
              placeholder='name'
              className='name form-control input-group-form'
              value={this.state.name}
              onChange={this.onChangeHandler} />
          </div>

          <div className="input-group">
            <i className="fas fa-list-alt fa-lg input-group-prepend  input-group-text"></i>
            <input type="text"
              name='course'
              id='course'
              placeholder='course'
              className='course form-control input-group-form'
              value={this.state.course}
              onChange={this.onChangeHandler} />
          </div>
          <div className='input-group'>
            <i className="fas fa-graduation-cap fa-lg input-group-prepend  input-group-text"></i>
            <input type="text"
              name='grade'
              id='grade'
              placeholder='grade'
              className='grade form-control input-group-form'
              value={this.state.grade}
              onChange={this.onChangeHandler}/>
          </div>

          <div className='form-button-container'>
            <button type='submit' className="btn btn-success btn-sm">Add</button>
            <button type='reset' className="btn btn-outline-secondary btn-sm">Cancel</button>
          </div>
        </form>
      </div >
    );
  }
}
