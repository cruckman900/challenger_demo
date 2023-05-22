import React, { Fragment, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Layout/Header/header';
import Top from './Layout/Top/top';
import Left from './Layout/Left/left';
import Main from './Layout/Main/Main';
import Right from './Layout/Right/right';
import StatusBar from './Layout/StatusBar/StatusBar';
import Footer from './Layout/Footer/footer';
import Portrait from './Layout/Portrait/Portrait';
import classes from './App.module.css';

function App() {
  const scrollInto = useRef();

  useEffect(() => {
    scrollInto.current.scrollIntoView();
  });

  return (
    <Fragment>
      <div className={classes.App} ref={scrollInto}>
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
    </Fragment>
  );
}

export default App;
