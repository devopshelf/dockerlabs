import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Arg extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       key:""
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
    var instruction = <p key={this.props.id}>ARG{' '}{this.state.key}</p>;
    this.props.onAdd(instruction);
    this.setState({
        key:""
    })
  }
    
  render() {
    return (
      <Fragment>
        <Row>
            <Col>
            <ReactMarkdown source = 
            {
                `The **ARG** instruction defines a variable that users can pass at build-time
                 to the builder with the \`docker build\` command using the
                  \`--build-arg <varname>=<value>\` flag..`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source = '`ARG <name>[=<default value>]`' /> 
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Argument:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="key" 
                placeholder="Arguments"  
                value={this.state.key}
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
