const enviromnents = {};

enviromnents.staging = {
  port: 3000,
  envName: "staging",
  secretKey: "jsdfghjsdhfjhdsf",
  maxChecks: 5,
  twilio: {
    fromPhone: "",
    accountSid: "",
    authToken: "",
  },
};

enviromnents.production = {
  port: 5000,
  envName: "production",
  secretKey: "sjfdhkjshdkjfj",
  maxChecks: 5,
  twilio: {
    fromPhone: "",
    accountSid: "",
    authToken: "",
  },
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const environmentToExport =
  typeof enviromnents[currentEnvironment] === "object"
    ? enviromnents[currentEnvironment]
    : enviromnents.staging;

module.exports = environmentToExport;
