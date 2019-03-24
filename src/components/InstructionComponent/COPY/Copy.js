import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Copy extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       src:"",
       dest:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.addCopyInstruction = this.addCopyInstruction.bind(this);
  }

  handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  addCopyInstruction(){
    var instruction = <p key={this.props.id}>COPY{' '}{this.state.src}{' '}{this.state.dest}</p>;
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
            <ReactMarkdown source=
            {
                `The **COPY** instruction copies new files or directories from **<src>** and 
                adds them to the filesystem of the container at the path **<dest>**.`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source='`COPY <src>... <dest>`' /> 
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
                <Button onClick={this.addCopyInstruction} block>ADD</Button>
            </Col>
        </Row>
      </Fragment>
    )
  }
}
