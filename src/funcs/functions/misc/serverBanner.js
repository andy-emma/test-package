module.exports = {
name: "$emojiCount",
usage: "[]",
description: "retorna el banner del servidor",
code: async (d) => {
const id = d.data.inside;
   let guild = d.client.guilds.cache.get(id);
   if(!guild) return d.sendError(d, "Your provided guild id is invalid")
   return guild.bannerURL({dynamic: true, size: 4096})
}
}