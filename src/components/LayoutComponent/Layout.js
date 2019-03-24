import React from 'react'
import { Container } from 'reactstrap';

import Header from './Header/Header';
import Footer from './Footer/Footer';

export default (props) => {  
  return (
    <Container>
      <Header />
      {props.children}
      <hr />
      <Footer />
    </Container>
  )
}
