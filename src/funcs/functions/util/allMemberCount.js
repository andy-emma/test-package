module.exports = {
name: "$allMemberCount",
usage: "[name]",
description: "return the all member count from all guild",
code: async (d) => {
return d.client.guilds.cache.map(x => x.memberCount ?? 0).reduce((a, b) => a + b);
}
}
