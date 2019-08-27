import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, getData, getDataSuccess, getDataError } from '../../actions';

class Home extends Component {
  

  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  loadData = () => {
    this.props.getData(true);
    this.props.getDataError(null);
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(data => data.json())
      .then(data => {
        this.props.getDataSuccess(data);
        this.props.getData(false);
        console.log(data)
      }, error => {
        this.props.getDataError('Error ao carregar');
        this.props.getData(false);
      });
  }

  render() {
    //console.log(this.props)
    
    const { 
      clickButton,
      data,
      loadingData,
      errorData
    } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="App">
          <h1>Home page</h1>
          <input
            onChange={this.inputChange}
            type='text'
            value={inputValue}
          />
          <button onClick={() => clickButton(inputValue)}>
            Click me!
          </button>
          <hr />
          <button onClick={() => this.loadData()}>Carregar Dados</button>
          { (data) && data.map(d => {
            return <p key={d.id}><b>Name: </b>{d.employee_name}</p>
          }) }
          { (loadingData) && <p>carregando</p> }
          { (errorData) && <p>{errorData}</p> }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  data: store.clickState.data,
  loadingData: store.clickState.loadingData,
  errorData: store.clickState.errorData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    clickButton,
    getData,
    getDataSuccess,
    getDataError
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
