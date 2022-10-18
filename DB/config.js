const { default: mongoose } = require("mongoose");

const runDB = async () => {
    return await mongoose
        .connect(process.env.URL)
        .then(() => {
            console.log("database connented");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {runDB}