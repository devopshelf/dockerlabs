import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Expose extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       port:80,
       toggle:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  addInstruction(){
    var instruction = "";  
    if(this.state.toggle){
        instruction = <p key={this.props.id}>PORT{' '}{this.state.port}/udp</p>;
    }else{
        instruction = <p key={this.props.id}>PORT{' '}{this.state.port}</p>;;
    }   
    this.props.onAdd(instruction);
    this.setState({
        port:80
    })
  }

  toggle(){
    this.setState({
        toggle:!this.state.toggle
    })
}
    
  render() {
    const togglerStyle={
        "margin":"0 10px",
        "color":"tomato",
        "fontSize":"22px",
        "cursor":"pointer"
    }   
    return (
      <Fragment>
        <Row>
            <Col>
            <ReactMarkdown source = 
            {
                `The **EXPOSE** instruction informs Docker that the container listens on the specified
                 network ports at runtime. You can specify whether the port listens on TCP or 
                 UDP, and the default is TCP if the protocol is not specified.`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source = '`PORT <port-name>/<protocol>`' /> 
               <p>(TCP)
                   <i onClick={this.toggle} 
                   style={togglerStyle} 
                   className = {this.state.toggle ? "fas fa-toggle-on" : "fas fa-toggle-off"}></i>
                (UDP)</p> 
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                PORT:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="port" 
                placeholder="PORT"  
                value={this.state.port}
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
