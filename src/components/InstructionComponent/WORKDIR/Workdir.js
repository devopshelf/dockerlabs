import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Workdir extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dir:""
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
    var instruction = <p key={this.props.id}>WORKDIR{' '}{this.state.dir}</p>;
    this.props.onAdd(instruction);
    this.setState({
        dir:""
    })
  }
    
  render() {
    return (
      <Fragment>
        <Row>
            <Col>
            <ReactMarkdown source = 
            {
                `The **WORKDIR** instruction sets the working directory for any RUN, 
                CMD, ENTRYPOINT, COPY and ADD instructions that follow it in 
                the Dockerfile. If the **WORKDIR** doesn’t exist, it will be created 
                even if it’s not used in any subsequent Dockerfile instruction.`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source = '`WORKDIR /path/to/workdir`' /> 
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Directory:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="dir" 
                placeholder="/dir"  
                value={this.state.dir}
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
