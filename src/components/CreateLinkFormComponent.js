import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

import storeNewLink from '../helpers/storeNewLink';

const CreateLinkFormComponent = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(null);

  function handleNameChange(e) {
    const newValue = e.target.value;
    setName(newValue);
  }

  function handleUrlChange(e) {
    const newValue = e.target.value;
    setUrl(newValue);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({
      type: "info",
      msg: "Creating...",
    });

    try {
      storeNewLink({name, url}).then(res => {
        if (res.statusCode !== 200) {
          setStatus({
            type: 'danger',
            msg: res.message,
          });
          return;
        }

        setStatus({
          type: 'success',
          msg: "New link created successfully",
        });

        setName("");
        setUrl("");
      });

    } catch(err) {
      setStatus({
        type: "danger",
        msg: err,
      });
    }
  }

  function renderStatus() {
    if (!status) return;

    return <Alert variant={status.type}>{status.msg}</Alert>
  }

  return (
    <Form className="mt-5 mb-5 pb-4" style={{borderBottom: "1px solid black"}} onSubmit={handleSubmit}>
      <h2 className="mb-4">Create new link</h2>
      <Row>
        <Col className="col-4">
          <Form.Group>
            <Form.Control onChange={handleNameChange} type="text" placeholder="Enter link name" value={name}></Form.Control>
          </Form.Group>
        </Col>

        <Col className="col-6">
          <Form.Group>
            <Form.Control onChange={handleUrlChange} type="text" placeholder="Enter url" value={url}></Form.Control>
          </Form.Group>
        </Col>

        <Col className="col-2">
          <Button variant="primary" type="submit">Create</Button>
        </Col>
      </Row>
      <Row>
        {renderStatus()}
      </Row>
    </Form>
  )
}

export default CreateLinkFormComponent;