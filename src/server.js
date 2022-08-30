import express from "express";

const PORT = 4000;
const app = express();

//Express 코드는 여기서 부터 시작//
const handleHome = (req, res) => {
    return res.send("aloha~")
};
const handleLogin = (req,res) => {
    return res.send("You can login here")
};

app.get("/", handleHome); 
app.get("/login",handleLogin);


//코드 개방//

const handleListening = () => console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);