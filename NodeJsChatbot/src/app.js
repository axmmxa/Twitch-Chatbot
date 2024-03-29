
import {MAIN_CLIENT} from "./clients.js"
import { DISCORD_TRIGGER } from "./constant.js"
import { getMessage } from "./functions.js"

console.log("app loaded")


//functions
getMessage()



//Main Client
MAIN_CLIENT.connect()

MAIN_CLIENT.on("message", (channel, message, userstate, self) =>{
    
    if(self)return

    switch(userstate["message-type"]) {
        case "action":
            //Do Something
            break
        case "chat":
            if(message === DISCORD_TRIGGER) {
                getMessage(message)
            }
            break
        case "whisper":
            //Do Something
            break
        default:
            //Do Something
            break            
    }
})