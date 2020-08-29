const { messages, subscribers } = require("./db");

module.exports = {
  postMessage: (parent, { user, content }) => {
    const id = messages.length;

    messages.push({
      id,
      user,
      content,
    });

    subscribers.forEach((fn) => fn());

    return id;
  },
};
