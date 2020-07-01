import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap'

class GameConfigurationForm extends React.Component {
    render() {
        return <Container>
    <Form>
       
       <Form.Group controlId="exampleForm.ControlSelect1">
         <Form.Label>Example select</Form.Label>
         <Form.Control as="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
         </Form.Control>
       </Form.Group>
   </Form>
  
</Container>
       
    }
}

export default GameConfigurationForm