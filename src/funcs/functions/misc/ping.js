module.exports = {
name: "$ping",
usage: "[]",
description: "retorna el ping vro",
code: async (d) => {
return d.client.ws.ping
}
}
