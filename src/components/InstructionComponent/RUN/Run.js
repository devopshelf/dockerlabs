import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Run extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       command:"",
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
    var instruction = '';  
    if(this.state.toggle){
        var arr = this.state.command.split(" ");
        instruction = <p key={this.props.id}>RUN{' '}{JSON.stringify(arr)}</p>;
    }else{
        instruction = <p key={this.props.id}>RUN{' '}{this.state.command}</p>;
    } 
    this.props.onAdd(instruction);
    this.setState({
        dir:""
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
                `The **RUN** instruction will execute any commands in a new layer on top of the current image
                 and commit the results. The resulting committed image will be used for the next step in
                  the _Dockerfile_.`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source = 'Shell Form `RUN <command>`' /> 
               <ReactMarkdown source = 'Exec Form `RUN ["executable", "param1", "param2"]`' />
               <p>(shell form)
                   <i onClick={this.toggle} 
                   style={togglerStyle} 
                   className = {this.state.toggle ? "fas fa-toggle-on" : "fas fa-toggle-off"}></i>
                (exec form)</p> 
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Command:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="command" 
                placeholder="command"  
                value={this.state.command}
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
