module.exports = {
name: "$allChannelsCount",
usage: "[]",
description: "return the all channel count from all guild",
code: async (d) => {
return d.client.channels.cache.size;
}
}
