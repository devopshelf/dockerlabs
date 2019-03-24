import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default () => {
  return (
    <Container>
        <Row>
          <Col>
              <h5 style={{"color":"#077cbc"}}>Contact Us</h5>
          </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <ReactMarkdown source={
                    `We provide free tutorials and solutions for Full Stack *Web Development, AWS Cloud
                    and CI/CD best practices*. Docker labs is an online Dockerfile Generator and provides
                    list of Docker cheatsheets and Dockerfile Examples.
                    **Contact Us for more details**.  
                    `
                } />
            </Col>
        </Row>  
        <Row>
          <iframe className="col-lg-12 col-md-12 col-sm-12" title="contact us form" src="https://docs.google.com/forms/d/e/1FAIpQLSfmvY3rWTFIe2ep4h7Hf2Y2dsgkS_16YTYDksWwzRSDVkkv_w/viewform?embedded=true" width="800" height="400" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        </Row>
        <p className="text-center">Made with <i style={{"color":"#077cbc"}} className="fas fa-heart"></i> for Docker Developers</p>
    </Container>
  )
}
