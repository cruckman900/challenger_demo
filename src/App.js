import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header/header';
import Top from './Top/top';
import Left from './Left/left';
import Main from './Main/Main';
import Right from './Right/right';
import Bottom from './Bottom/bottom';
import Footer from './Footer/footer';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Row><Col><Header /></Col></Row>
      <Row><Col><Top /></Col></Row>
      <Row className={classes.horizRowContainer}>
        <Col><Left /></Col>
        <Col><Main /></Col>
        <Col><Right /></Col>
      </Row>
      <Row><Col><Bottom /></Col></Row>
      <Row><Col><Footer /></Col></Row>
    </div>
  );
}

export default App;
