import React from "react";
import { useMutation, gql } from "@apollo/client";

import { Container, Row, Col, FormInput, Button } from "shards-react";
import Messages from "./Messages";

const SEND_MESSAGES = gql`
  mutation SendMessage($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Chat = () => {
  const [state, setState] = React.useState({
    user: "",
    content: "",
  });
  const [postMessage] = useMutation(SEND_MESSAGES);

  const handleChange = React.useCallback((e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  });

  const handleSend = React.useCallback(() => {
    if (state.content.length > 0) {
      postMessage({ variables: state });
      setState({
        ...state,
        content: "",
      });
    }
  });

  const handleEnterPressed = React.useCallback((e) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  });

  return (
    <Container style={{ marginTop: "1em" }}>
      <Messages user={state.user} />
      <Row>
        <Col xs={2}>
          <FormInput
            label="User"
            name="user"
            value={state.user}
            onChange={handleChange}
          />
        </Col>
        <Col xs={8}>
          <FormInput
            label="Content"
            name="content"
            value={state.content}
            onChange={handleChange}
            onKeyUp={handleEnterPressed}
          />
        </Col>
        <Col xs={2}>
          <Button onClick={handleSend}>Send</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
