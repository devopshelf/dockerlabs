import React, { Component,Fragment } from 'react'
import {Row,Col,Input,Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default class Volume extends Component {
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
    var instruction = <p key={this.props.id}>VOLUME{' '}{this.state.dir}</p>;
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
                `The **VOLUME** instruction creates a mount point with the specified name
                 and marks it as holding externally mounted volumes from native host or
                 other containers. The value can be a JSON array, \`VOLUME ["/var/log/"]\`,
                 or a plain string with multiple arguments, such as \`VOLUME /var/log\` or
                 \`VOLUME /var/log /var/db\`.`
            }
            />
            </Col>
        </Row>
        <Row>
            <Col>
               <ReactMarkdown source = '`VOLUME /path`' /> 
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
