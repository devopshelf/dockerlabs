import React,{Fragment} from 'react'
import { Row,Col } from 'reactstrap';


export default () => {
  const linkStyle={
      "textDecoration":"none",
      "color":"black"
  }  
  return (
    <Fragment>
        <Row>
            <Col>
                <h5 style={{"color":"#077cbc"}}>References</h5>
            </Col>
        </Row>
        <Row>
            <Col style={{"marginBottom":"30px"}}>
                <a style={linkStyle} href="https://docs.docker.com/engine/reference/builder/" target="blank">1. Dockerfile Reference from Docker Documentation</a><br/>
                <a style={linkStyle} href="https://github.com/docker/labs/blob/master/beginner/chapters/webapps.md" target="blank">2. Webapps with Docker</a>
            </Col>
        </Row>
    </Fragment>
  )
}
