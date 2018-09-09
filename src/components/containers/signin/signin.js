import React, { Component } from 'react';
import './signin.css'


class Signin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {username :'', Password: ''};
    this.onformSubmit = this.onFormSubmit.bind(this);

  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.singin(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.onformSubmit} className="form">
        <label>
          User Name:
            <input value={this.state.username}
            onChange={event => this.setState({username: event.target.value})}/>
        </label>
        <br/>
        <label>
          Password:
            <input value={this.state.password}
            onChange={event => this.setState({password: event.target.value})}/>
        </label>
        <br/>

        <input type="submit" value="Submit" />
      </form>


        
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({singin}, dispatch)

}

export default connect(mapDispatchToProps) (Signin);





