module.exports = {
    name: 'welcome',
    slash: 'both', // Create both a slash and legacy command
    testOnly: true, // Only register a slash command for the testing guilds
    description: 'A simple ping pong command',

    callback: ({ message, interaction }) => {
      // const reply = 'Pong!'
  
      // // message is provided only for a legacy command
      // if (message) {
      //   message.reply({
      //     content: reply
      //   })
      //   return
      // }
  
      // // interaction is provided only for a slash command
      // interaction.reply({
      //   content: reply
      // })
      
      // Alternatively we can just simply return our reply object
      // OR just a string as the content.
      // WOKCommands will handle the proper way to reply with it
      // return {
      //   content: reply
      // }
    },
  }