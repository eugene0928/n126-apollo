import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://umid09tuxtayeevgmail.com:postgres@localhost:5432/postgres', {
    dialect: 'postgres',
    logging: false
});


!(async () => {
    try {
        await sequelize.authenticate();
        console.log('db is connected successfully...');
    } catch (error) {
        console.log(error);
    }
})();


export {
    sequelize
}