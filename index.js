const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
require('dotenv').config()

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION'],
    disableEveryone: false,
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
    // The client object is required as the first argument.
    // The second argument is the options object.
    // All properties of this object are optional.

    new WOKCommands(client, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),
        
        // The name of the local folder for your feature files
        featuresDir: path.join(__dirname, 'features'),
        
        // The name of the local file for your message text and translations
        // Omitting this will use the built-in message path
        messagesPath: '',
        
        // Allow importing of .ts files
        // typeScript: false,
        
        // If WOKCommands warning should be shown or not, default true
        showWarns: true,
        
        // How many seconds to keep error messages before deleting them
        // -1 means do not delete, defaults to -1
        delErrMsgCooldown: -1,
        
        // What language your bot should use
        // Must be supported in your messages.json file
        defaultLangauge: 'english',
        
        // If your commands should not be ran by a bot, default false
        ignoreBots: false,
        
        // If interactions should only be shown to the one user
        // Only used for when WOKCommands sends an interaction response
        // Default is true
        ephemeral: true,
        
        // Various options for your MongoDB database connection
        dbOptions: {
            // These are the default options
            keepAlive: true
        },
        
        // What server/guild IDs are used for testing only commands & features
        // Can be a single string if there is only 1 ID
        testServers: ['834198040843255850'],
        
        // User your own ID
        // If you only have 1 ID then you can pass in a string instead
        botOwners: ['298137115877965844'],
        
        // What built-in commands should be disabled.
        // Note that you can overwrite a command as well by using
        // the same name as the command file name.
        disabledDefaultCommands: [
             'help',
            // 'command',
            // 'language',
            // 'prefix',
            // 'requiredrole',
            // 'channelonly'
        ],
        
        // When connecting to a Mongo database.
        // For more infomration view the "DATABASES" section
        // of this documentation.
        mongoUri: process.env.MONGO_URI,
        
        // Provides additional debug logging
        debug: true
    })
        // Here are some additional methods that you can chain
        // onto the contrustor call. These will eventually be
        // merged into the above object, but for now you can
        // use them:
        
        // The default is !
        .setDefaultPrefix('rg!')
        
        // Used for the color of embeds sent by WOKCommands
        .setColor(0xff0000)
})

client.login(process.env.DISCORD_TOKEN)