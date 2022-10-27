const app = require("./app");
const PORT = process.env.port || 3000;
const { conn, User } = require("./db");

const init = async () => {
  try {
    await conn.sync({ force: true });
    await User.create({ username: 'chris', password: '123', firstName: 'Chris', lastName: 'Buzz', email: 'foo@bar.com'})

    app.listen(PORT, () => console.log(`listening of port: ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
