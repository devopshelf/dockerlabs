import React,{Fragment} from 'react'
import { Row,Col } from 'reactstrap';


export default () => {
  return (
    <Fragment>
      <Row>
        <Col className="dockerfile__intro" xs="12" sm="12" md="6" lg="6">
            {`
            Docker can build images automatically by reading the instructions from a Dockerfile.
                A Dockerfile is a text document that contains all the commands a user could call 
                on the command line to assemble an image. Using docker build users can create an 
                automated build that executes several command-line instructions in succession.
            `}
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <iframe title= "docker labs Intro" width="380" height="315" src="https://www.youtube.com/embed/wCvNTehzDJg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Col>
       </Row>
    </Fragment>
  )
}
