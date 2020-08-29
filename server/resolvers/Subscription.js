const { messages, subscribers } = require("./db");

const onMessagesUpdates = (fn) => subscribers.push(fn);

module.exports = {
  messages: {
    subscribe: (parent, args, { pubsub }) => {
      const channel = Math.random().toString(36).slice(2, 15);
      // append subscribe function to subscribers list
      onMessagesUpdates(() => pubsub.publish(channel, { messages }));
      setTimeout(() => pubsub.publish(channel, { messages }), 0);
      return pubsub.asyncIterator(channel);
    },
  },
};
