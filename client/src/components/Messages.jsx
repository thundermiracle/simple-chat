import React from "react";
import clsx from "clsx";
import { useQuery, useSubscription, gql } from "@apollo/client";

import "./Messages.scss";

const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      content
      user
    }
  }
`;

const SUBSCRIPTION_MESSAGES = gql`
  subscription SubscriptionMessages {
    messages {
      id
      content
      user
    }
  }
`;

function Messages({ user }) {
  const { loading, error, data } = useSubscription(SUBSCRIPTION_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return null;

  return data.messages.map(({ id, content, user: messageUser }) => (
    <div
      key={id}
      className={clsx("messages", { currentUser: user === messageUser })}
    >
      {user !== messageUser && (
        <div className="name">{messageUser.slice(0, 2).toUpperCase()}</div>
      )}
      <div className={clsx("content", { currentUser: user === messageUser })}>
        {content}
      </div>
    </div>
  ));
}

export default Messages;
