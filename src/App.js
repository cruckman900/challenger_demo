import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Layout/Header/header';
import Top from './Layout/Top/top';
import Left from './Layout/Left/left';
import Main from './Layout/Main/Main';
import Right from './Layout/Right/right';
import StatusBar from './Layout/StatusBar/StatusBar';
import Footer from './Layout/Footer/footer';
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  };

  callAPI() {
    fetch("http://localhost:9000/testApi")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  UNSAFE_componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className={classes.App}>
        <p style={{color: 'rgba(255, 69, 0, .8)', position: 'absolute', top: 25, left: 25, zIndex: 5}}><i>{this.state.apiResponse}</i></p>
        <Row><Col><Header /></Col></Row>
        <Row><Col><Top /></Col></Row>
        <Row className={classes.horizRowContainer}>
          <Col><Left /></Col>
          <Col><Main /></Col>
          <Col className={classes.floatingHolder}><Right /></Col>
        </Row>
        <Row><Col><Footer /></Col></Row>
        <Row className={classes.status}><Col><StatusBar /></Col></Row>
      </div>
    );
  }
}

export default App;
