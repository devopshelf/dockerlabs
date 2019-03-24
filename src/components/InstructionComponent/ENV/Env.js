import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Env extends Component {
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
    var instruction = <p key={this.props.id}>ENV{'  '}{this.state.x}{'  '}{this.state.y}</p>;
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
                `The **ENV** instruction sets the environment variable **<key>** to the value **<value>**. 
                This value will be in the environment for all subsequent instructions in the 
                build stage and can be replaced inline in many as well.`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source='`ENV <key> <value>`' /> 
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
