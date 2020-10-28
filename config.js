require("dotenv").config();
const e = require("@jondotsoy/envconfig").envconfig();

module.exports = {
    mongodb: {
        tls: e("MONGODB_TLS", { type: "boolean" }) || false,
        host: e("MONGODB_HOST", { required: true }),
        database: e("MONGODB_DATABASE", { required: true }),
        adminusername: e("MONGODB_ADMINUSERNAME"),
        adminpassword: e("MONGODB_ADMINPASSWORD"),
    },
};
