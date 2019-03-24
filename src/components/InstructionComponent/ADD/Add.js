import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Add extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       src:"",
       dest:"",
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
    var instruction = <p key={this.props.id}>ADD{' '}{this.state.src}{' '}{this.state.dest}</p>;
    this.props.onAdd(instruction);
    this.setState({
        src:"",
        dest:""
    })
  }
    
  render() {
    return (
      <Fragment>
        <Row>
            <Col>
                <ReactMarkdown 
                source = 'The **ADD** instruction copies new files, directories or remote file URLs from **<src>** and adds them to the filesystem of the image at the path **<dest>**.'  />
            </Col>
        </Row>
        <Row>
            <Col>
                <ReactMarkdown source = '`ADD <src> <dest>`'/>
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Source:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="src" 
                placeholder="/src"  
                value={this.state.src}
                onChange={this.handleChange}
                />
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="4" sm="4" md="4" lg="4">
                Destination:
            </Col>
            <Col xs="8" sm="8" md="8" lg="8">
                <Input type="text" 
                name="dest" 
                placeholder="/dest"
                value={this.state.dest}
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
