const crypto = require("crypto");

const utilities = {};
const environments = require("./environment");

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }

  return output;
};

// hash string
utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    console.log(environments, process.env.NODE_ENV);
    const hash = crypto
      .createHmac("sha256", environments.secretKey)
      .update(str)
      .digest("hex");
    return hash;
  }
  return false;
};

// export module
module.exports = utilities;

// const crypto = require("crypto");
// const environments = require("../helpers/environment");
// const utilities = {};

// utilities.parseJSON = (jsonString) => {
//   let output;

//   try {
//     output = JSON.parse(jsonString);
//   } catch (error) {
//     output = {};
//   }
//   return output;
// };

// utilities.hash = (str) => {
//   if (typeof str === "string" && str.length > 0) {
//     const hash = crypto
//       .createHmac("sha256", environments.secretKey)
//       .update(str)
//       .digest("hex");
//     return hash;
//   }
//   return false;
// };
// module.exports = utilities;
