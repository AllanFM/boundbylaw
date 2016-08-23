import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

import Header from './layout/Header';

export default class Layout extends React.Component{
    render(){
        return (
          <div>
            <Header />
                <Col md={3}></Col>
                <Col md={6} className="main">
                    {this.props.children}
                </Col>
                <Col md={3}></Col>
          </div>
        )
    }
}
