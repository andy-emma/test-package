module.exports = {
  name: "$messageId",
  usage: "[]",
  description: "retorna el id del mensaje actual.",
  code: async (d) => {
   return d.message?.id
  }
}