import http from "node:http";
import express from "express";
import { Server } from "socket.io";
import path from "node:path";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

type TCheckedState = Record<number, boolean>;
const checkedState: TCheckedState = {};

const GRID = 1000;

io.on("connect", (socket) => {
    console.log("A client connected", socket.id);
    
    socket.emit("loadstate", checkedState);

    socket.on("mark", ({x,y,checked}) => {
        socket.broadcast.emit("mark", {x,y,checked});
        const key = y * GRID + x;
        checkedState[key] = checked;
    })

})

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

server.listen(3000, () => {
    console.log(`Server listening on http://localhost:${3000}`);
});