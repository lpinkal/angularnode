
const environment={
  mongoURL:'mongodb://localhost:27017/angularuserdata',
  port:process.env.PORT|'3001',
  jsonsecret:'hello'
};
exports.module={environment};
