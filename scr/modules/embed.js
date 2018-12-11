const { RichEmbed } = require('discord.js');
class Embed {
    constructor(type, options) {
       this.emb = new RichEmbed();

       this.type = type; 
       this.title = options.title;
       this.description  = options.description;
       this.image = options.image;
       this.footer = options.footer;

        
       this.emb.setTitle(this.title);

    }
}

module.exports = Embed;