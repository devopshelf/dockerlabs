import React,{Fragment} from 'react'
import ReactMarkdown from 'react-markdown';
import { Row,Col } from 'reactstrap';


export default () => {
  return (
    <Fragment>
      <Row>
        <Col>
            <h5 style={{"color":"#077cbc"}}>Next Steps</h5>
        </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <ReactMarkdown source='##### Build the image' />
                <ReactMarkdown source={
                    `Now that you have your *Dockerfile*, you can build your image. 
                    The \`docker build\` command does the heavy-lifting of creating a 
                    docker image from a *Dockerfile*.
                    `
                } />
                <ReactMarkdown source='`docker build -t username/<app-name> .`' />
                <ReactMarkdown source={
                    `The \`docker build\` command is quite simple - it takes an optional 
                    tag name with the -t flag, and the location of the directory containing
                    the *Dockerfile* - the . indicates the current directory`
                } />
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <ReactMarkdown source='##### Run your image' />
                <ReactMarkdown source={
                    `The next step in this section is to run the image and see if it actually works. `
                } />
                <ReactMarkdown source='`docker run -p 8888:5000 --name myfirstapp YOUR_USERNAME/myfirstapp`' />
                <ReactMarkdown source={
                    `The \`docker run\` command is quite simple - it takes an port 
                    tag name with the -p flag, and the name of the image.`
                } />
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <ReactMarkdown source='##### Push your image' />
                <ReactMarkdown source={
                    `Now that you've created and tested your image, you can push it to Docker Cloud.
                    First you have to login to your Docker Cloud account, to do that: `
                } />
                <ReactMarkdown source='`docker login`' />
                <ReactMarkdown source={
                    `Enter \`USERNAME\` and \`PASSWORD\` When prompted.`
                } />
                <ReactMarkdown source='`docker push YOUR_USERNAME/myfirstapp`' />
            </Col>
        </Row>
    </Fragment>
  )
}
