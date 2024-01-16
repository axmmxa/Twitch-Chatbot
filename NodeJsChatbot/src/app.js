
import {MAIN_CLIENT} from "./clients.js"

console.log("app loaded")



//Main Client
MAIN_CLIENT.connect()

MAIN_CLIENT.on("message", (channel, message, userstate, self) =>{
    console.log( "Die Nachricht war:" + message)
})