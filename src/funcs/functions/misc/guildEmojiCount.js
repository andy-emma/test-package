module.exports = {
name: "$emojiCount",
usage: "[]",
description: "retorna los emojiss",
code: async (d) => {
const id = d.data.inside;
   let guild = d.client.guilds.cache.get(id);
   if(!guild) return d.sendError(d, "Your provided guild id is invalid")
   return guild.emojis?.cache?.size
}
}