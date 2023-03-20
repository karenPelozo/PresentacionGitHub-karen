const express =  require('express'); //llamamos express de node_modules para usarla 
const app = express();
const PORT = 3001;
app.get('/api', (req, res) =>{
    res.json({mensaje : 'hola mundo' }).status(200);//formato para intercambiar archivos .status manda todo ok 
})//el get recibe 2 parametros string , funcion de flechita la fucion dos parametros req 
//NECECITA ESTAR ECUCHANDO 
app.listen(PORT,()=>{console.log('estoy escuchando en el puerto 3001')});//.listen recibe 2 parametros un entero y una funcion
