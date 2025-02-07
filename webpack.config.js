module.exports = function (env) {
    const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";
    return require(`./config/webpack.${mode}`);
};