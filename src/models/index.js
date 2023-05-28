// chứa câu lệnh kết nối CSDL bằng sequelize

import { Sequelize } from 'sequelize';
import config from '../config/config.js';

// biến chưa chuỗi kết nối CSDL
const sequelize = new Sequelize(config.db_database, config.db_user, config.db_pass, {
    host: config.db_host,
    port: config.db_port,
    dialect: config.db_dialect
});

export default sequelize;

// try {
//     await sequelize.authenticate();
//     console.log("Thành công")
// } catch (err) {
//     console.log("Thất bại", err)
// }
// node src/models/index.js

// yarn add sequelize-cli => Code First
// npx sequelize-cli init
// yarn sequelize-cli init

// yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

// npx sequelize-cli db:migrate
// yarn sequelize-cli db:migrate

// yarn sequelize-cli seed:generate --name demo-user
// yarn sequelize-cli db:seed:all
// yarn sequelize-cli db:seed:undo

// yarn add sequelize-auto => Database First