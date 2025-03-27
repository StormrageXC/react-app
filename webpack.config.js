export default async function (env) {
  const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";
  return (await import(`./config/webpack.${mode}.js`)).default;
}
