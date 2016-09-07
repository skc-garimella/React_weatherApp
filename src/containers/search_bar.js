
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';



class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };

    //when a call back function(onInputChange) is provided in onChange and if the
    //callback function makes reference to "this", then "this" will not refer to
    //SearchBar.
    //It will have some other reference. To solve this, bind onInputChange with
    //"this"(SearchBar) in the constructor.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event){

    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    //fetch weather data.
    this.props.fetchWeather(this.state.term);
    //clear the search input after this.
    this.setState({ term: '' });
  }


  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
       <input
         placeholder="enter city for five day weather forecast"
         type="text"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange} />
       <span className="input-group-btn">
        <button type="submit" className="btn btn-primary">Search</button>
       </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
