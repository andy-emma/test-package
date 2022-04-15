module.exports = {
name: "$day",
usage: "[name]",
description: "return the current day",
code: async (d) => {
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
return days[new Date().getDay()];
}
}
