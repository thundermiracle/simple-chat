const messages = require("./db").messages;

module.exports = {
  postMessage: (parent, { user, content }) => {
    const id = messages.length;

    messages.push({
      id,
      user,
      content,
    });

    return id;
  },
};
