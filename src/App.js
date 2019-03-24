import React, { Component } from 'react';
import { Container, Row, Col,Input,Button } from 'reactstrap';
import Layout from './components/LayoutComponent/Layout';
import From from './components/InstructionComponent/FROM/From';
import Copy from './components/InstructionComponent/COPY/Copy';
import Add from './components/InstructionComponent/ADD/Add';
import Workdir from './components/InstructionComponent/WORKDIR/Workdir';
import Label from './components/InstructionComponent/LABEL/Label';
import Env from './components/InstructionComponent/ENV/Env';
import Run from './components/InstructionComponent/RUN/Run';
import Cmd from './components/InstructionComponent/CMD/Cmd';
import User from './components/InstructionComponent/USER/User';
import Entrypoint from './components/InstructionComponent/ENTRYPOINT/Entrypoint';
import Expose from './components/InstructionComponent/EXPOSE/Expose';
import Volume from './components/InstructionComponent/VOLUME/Volume';
import Arg from './components/InstructionComponent/ARG/Arg';
import NextSteps from './components/NextSteps/NextSteps';
import Intro from './components/Intro/Intro';
import References from './components/References/References';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       base:"",
       instruction:"",
       instructions:[],
       key:1
    }
    this.handleBaseImageChange =  this.handleBaseImageChange.bind(this);
    this.onInstructionSelect = this.onInstructionSelect.bind(this);
    this.onInstructionAdd = this.onInstructionAdd.bind(this);
    this.onReset = this.onReset.bind(this);
   }
  
  handleBaseImageChange(baseImage){
    this.setState({
      base:baseImage
    })
  }

  onInstructionSelect(e){
    e.preventDefault();
    this.setState({
      instruction:e.target.value
    })
  }

  onInstructionAdd(instruction){
    this.setState({
      instructions:[...this.state.instructions,instruction],
      instruction:"",
      key:this.state.key + 1
    })
  }

  onReset(){
    this.setState({
      base:"",
      instructions:[]
    })
  }

  render() {
    var instructions = this.state.instructions.map((i,key)=>{
      return i;
    })
    return (
        <Layout>
          <Intro />
          <br/>
          <Row>
            <Col>
              <h5 style={{"color":"#077cbc"}}>ToolBox</h5>
            </Col>
          </Row>
          <Row className="dockerfile__lab">
            <Col xs="12" sm="12" md="6" lg="6" className="dockerfile__form">
              <Container>
                <From base={this.state.base} handleChange={this.handleBaseImageChange}/>
                <br />
                <Row>
                  <Col>
                    <Input type="select" 
                    disabled={this.state.base === ""}
                    name="instruction" 
                    value={this.state.instruction}
                    onChange={this.onInstructionSelect}
                    >
                      <option value="">--SELECT--</option>
                      <option value="Add">ADD</option>
                      <option value="Copy">COPY</option>
                      <option value="Workdir">WORKDIR</option>
                      <option value="Label">LABEL</option>
                      <option value="Env">ENV</option>
                      <option value="Run">RUN</option>
                      <option value="Cmd">CMD</option>
                      <option value="User">USER</option>
                      <option value="Entrypoint">ENTRYPOINT</option>
                      <option value="Expose">EXPOSE</option>
                      <option value="Volume">VOLUME</option>
                      <option value="Arg">ARG</option>
                    </Input>
                  </Col>
                </Row>
                <br />
                {
                  this.state.instruction === "Copy" ? <Copy id={this.state.key} onAdd={this.onInstructionAdd} />
                : this.state.instruction === "Add" ? <Add id={this.state.key} onAdd={this.onInstructionAdd} />
                : this.state.instruction === "Workdir" ? <Workdir id={this.state.key} onAdd={this.onInstructionAdd} />  
                :  this.state.instruction === "Label" ? <Label id={this.state.key} onAdd={this.onInstructionAdd} />
                :  this.state.instruction === "Env" ? <Env id={this.state.key} onAdd={this.onInstructionAdd} />
                :  this.state.instruction === "Run" ? <Run id={this.state.key} onAdd={this.onInstructionAdd} />                
                :  this.state.instruction === "Cmd" ? <Cmd id={this.state.key} onAdd={this.onInstructionAdd} />                                
                :  this.state.instruction === "User" ? <User id={this.state.key} onAdd={this.onInstructionAdd} />                                                
                :  this.state.instruction === "Entrypoint" ? <Entrypoint id={this.state.key} onAdd={this.onInstructionAdd} />                                                      
                :  this.state.instruction === "Expose" ? <Expose id={this.state.key} onAdd={this.onInstructionAdd} />                                                           
                :  this.state.instruction === "Volume" ? <Volume id={this.state.key} onAdd={this.onInstructionAdd} />                                                                      
                :  this.state.instruction === "Arg" ? <Arg id={this.state.key} onAdd={this.onInstructionAdd} />                                                                      
                : ""
                }
                <Row style={{"marginTop":"10px"}}>
                  <Col>
                    <Button color="danger" onClick={this.onReset} block>RESET</Button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" className="dockerfile__file">
             <Container>
               <Row>
                 <Col className="dockerfile__file-title">Dockerfile</Col>
               </Row>
               <hr />
               {this.state.base !== "" ?<p>FROM {this.state.base}</p> : ""}
               {instructions}
             </Container>
            </Col>
          </Row>
          <br />
          <NextSteps />
          <br/>
          <References />
        </Layout>
    );
  }
}

export default App;
