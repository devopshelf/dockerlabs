import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Label extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x:"",
       y:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
  }

  handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  addInstruction(){
    var instruction = <p key={this.props.id}>Label{' '}{this.state.x}{'='}"{this.state.y}"</p>;
    this.props.onAdd(instruction);
    this.setState({
        x:"",
        y:""
    })
  }
    
  render() {
    return (
      <Fragment>
        <Row>
            <Col>
            <ReactMarkdown source = 
            {
                `The **LABEL** instruction adds metadata to an image. 
                A **LABEL** is a *key-value* pair. To include spaces within
                 a **LABEL** value, use quotes and backslashes as you would in command-line parsing.`
            } />
            </Col>
        </Row>
        <Row>
            <Col>
                <ReactMarkdown source='`LABEL <key>=<value>`' />
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Key:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="x" 
                placeholder="Key"  
                value={this.state.x}
                onChange={this.handleChange}
                />
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Value:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="y" 
                placeholder="Value"
                value={this.state.y}
                onChange={this.handleChange}  
                />
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <Button onClick={this.addInstruction} block>ADD</Button>
            </Col>
        </Row>
      </Fragment>
    )
  }
}
