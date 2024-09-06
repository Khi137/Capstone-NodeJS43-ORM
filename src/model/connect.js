// const connect =mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'1234',
//     port:'3306',
//     database:'db_youtube'
// })
 
import { Sequelize } from "sequelize";
const sequelize=new Sequelize('capstone','root','123456',{
    host:'localhost',
    port:'3308',
    dialect:'mysql',

}
)
//  test ket noi
try{
 await sequelize.authenticate();
 console.log("ket noi thanh c");
}catch(e){
    console.log(e);
}
export default sequelize