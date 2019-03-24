import React, { Component,Fragment } from 'react'
import {Row,Col,Input} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class From extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
    
  render() {
    return (
      <Fragment>
        <Row>
            <Col>
                <ReactMarkdown 
                source = 'The **FROM** instruction initializes a new build stage and sets the Base Image for subsequent instructions. As such, a valid Dockerfile must start with a **FROM** instruction.'  />
            </Col>
        </Row>
        <Row>
            <Col>
                <ReactMarkdown source = '`FROM <image>[:<tag>] [AS <name>]`'/>
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Base Image:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="base" 
                placeholder="For Example: node:alpine"  
                value={this.props.base}
                onChange={(e)=>{
                  this.props.handleChange(e.target.value)
                }}
                />
            </Col>
        </Row>
      </Fragment>
    )
  }
}
