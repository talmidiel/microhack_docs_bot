const fs = require('fs');

module.exports = (client, Discord) => {
  const loadDir = (dirs) => {
    const eventFiles = fs.readdirSync(`events/${dirs}`);

    eventFiles.map((file) => {
      const event = require(`../events/${dirs}/${file}`);
      const eventName = file.split('.')[0];
      client.on(eventName, event.bind(null, client, Discord));
    });
  };

  ['client', 'guild'].forEach((e) => loadDir(e));
};
