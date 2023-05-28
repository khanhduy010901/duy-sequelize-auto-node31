
import express from 'express';
import cors from 'cors';

import rootRouter from './routers/rootRouter.js';

const app = express();
app.use(express.json()); // middleware cho phép đọc định json gửi từ FE

app.use(cors());

app.listen(8080)
// localhost:8080/api/user/get-user
app.use("/api",rootRouter);

// yarn add sequelize
// 1: kết nối CSDL
// 2: Khởi tạo DAO => liên kết đến table


