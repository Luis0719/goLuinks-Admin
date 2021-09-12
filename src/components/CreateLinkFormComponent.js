import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const CreateLinkFormComponent = () => {
  return (
    <Form className="mt-5 mb-5 pb-4" style={{borderBottom: "1px solid black"}}>
      <h2 className="mb-4">Create new link</h2>
      <Row>
        <Col className="col-4">
          <Form.Group>
            <Form.Control type="text" placeholder="Enter link name"></Form.Control>
          </Form.Group>
        </Col>

        <Col className="col-6">
          <Form.Group>
            <Form.Control type="text" placeholder="Enter url"></Form.Control>
          </Form.Group>
        </Col>

        <Col className="col-2">
          <Button variant="primary" type="submit">Create</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateLinkFormComponent;