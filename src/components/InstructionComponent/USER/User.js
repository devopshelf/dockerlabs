import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class User extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:""
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
    var instruction = <p key={this.props.id}>USER{' '}{this.state.username}</p>;
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
                `The **USER** instruction sets the user name (or UID) and optionally the user group
                 (or GID) to use when running the image and for any **RUN**, **CMD** and **ENTRYPOINT** 
                 instructions that follow it in the *Dockerfile*.`
            } />
            </Col>
        </Row>
        <Row>
            <Col>
                <ReactMarkdown source='`USER <user>[:<group>] or`' />
                <ReactMarkdown source='`USER <UID>[:<GID>]`' />
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Username:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="username" 
                placeholder="Username"  
                value={this.state.username}
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
