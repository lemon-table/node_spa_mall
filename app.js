const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js');
const cartsRouter = require('./routes/carts.js');
const connect = require("./schemas");

connect();

app.use(express.json());
app.use("/api",[goodsRouter,cartsRouter]);

app.post("/",(req,res)=>{
    console.log(req.body);

    res.send("기본 url에 post 메소드 정상적 실행");
})

app.get("/", (req,res) => {
    console.log(req.query);

    const obj = {
        "KeyKey": "value 입니다.",
        "이름입니다." : "이름일까요",
    }

    //res.send('정상적으로 반환');
    res.status(400).json({
        "KeyKey": "value 입니다.",
        "이름입니다." : "이름일까요",
    });
})

app.get("/:id",(req,res)=>{
    console.log(req.params);

    res.send(":id URI에 정상적으로 반환"); 
})


// app.get('/',(req,res)=>{
//     res.send('Hellow World!');
// });

//위의 코드 검사후 use 검사 완료해야 아래로 내려간다.
//localhost:3000/api -> goodRouter
// app.use("/api",goodsRouter);

app.listen(port,()=>{
    console.log(port,'포트로 서버가 열렸어요!');
});