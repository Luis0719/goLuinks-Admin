import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

import storeNewLink from '../helpers/storeNewLink';

const CreateLinkFormComponent = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(null);
  const [routine, setRoutine] = useState("");
  const [isRoutine, setIsRoutine] = useState(false);

  function handleNameChange(e) {
    const newValue = e.target.value;
    setName(newValue);
  }

  function handleUrlChange(e) {
    const newValue = e.target.value;
    setUrl(newValue);
  }

  function handleRoutineChange(e) {
    const newValue = e.target.value;
    console.log(newValue);
    setRoutine(newValue);
  }

  function handleIsRoutineChange(e) {
    const newValue = e.target.checked;
    setIsRoutine(newValue);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({
      type: "info",
      msg: "Creating...",
    });

    const saveData = {
      name,
    }

    if (isRoutine) {
      saveData.routine = routine;
    } else {
      saveData.url = url;
    }

    try {
      storeNewLink(saveData).then(res => {
        // Turns out that when the request is successful,
        // we receive the created link object itself. So whenever we get
        // a response with a statuscode, it means something went not-so-good.
        // This is a tech-debt, but I'm too lazy to fix it right now.
        if (res.statusCode) {
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
        setRoutine("");
      });

    } catch(err) {
      setStatus({
        type: "danger",
        msg: err,
      });
    }
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

        <Col className="col-5">
          <Form.Group>
            { isRoutine
              ? <Form.Control onChange={handleRoutineChange} type="text" placeholder="Enter routine name" value={routine}></Form.Control>
              : <Form.Control onChange={handleUrlChange} type="text" placeholder="Enter url" value={url}></Form.Control>
            }
          </Form.Group>
        </Col>

        <Col className="col-1">
          <Form.Group>
            <Form.Check type="checkbox" id="isRoutineCb" onChange={handleIsRoutineChange} value={isRoutine} label="Routine" />
          </Form.Group>
        </Col>

        <Col className="col-2">
          <Button variant="primary" type="submit">Create</Button>
        </Col>
      </Row>
      <Row>
        {status &&
          <Alert variant={status.type}>{status.msg}</Alert>
        }
      </Row>
    </Form>
  )
}

export default CreateLinkFormComponent;