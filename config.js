const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349070128533";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_15_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVFM2dpQThSQlZSMXZJa1RDRVY1TVQ1MUwrSkszZ3FaTThuc0cvQk9iUms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNJMW5IbV95U3R5NG4tcy0zWGdwZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNjNDIwOWEtODYyMy00MmJlLWFiNWUtNTA1YmJhZmM4OGQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDk2LFxuICAgICAgMjIyLFxuICAgICAgMjE5LFxuICAgICAgMjE4LFxuICAgICAgMjQwLFxuICAgICAgMjE5LFxuICAgICAgMTEsXG4gICAgICAyMCxcbiAgICAgIDE4NyxcbiAgICAgIDE4NCxcbiAgICAgIDEyMCxcbiAgICAgIDIxLFxuICAgICAgOTcsXG4gICAgICAxNjYsXG4gICAgICAyMDcsXG4gICAgICAxNzAsXG4gICAgICAyMzQsXG4gICAgICAxOSxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDIwOCxcbiAgICAgIDI0NixcbiAgICAgIDE0OSxcbiAgICAgIDExNixcbiAgICAgIDI0MSxcbiAgICAgIDE1MSxcbiAgICAgIDE4MyxcbiAgICAgIDc0LFxuICAgICAgMjksXG4gICAgICAyNTIsXG4gICAgICAxNjEsXG4gICAgICAyMTUsXG4gICAgICAxMDMsXG4gICAgICA4MixcbiAgICAgIDU0LFxuICAgICAgMzksXG4gICAgICA4OCxcbiAgICAgIDIwMixcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3TU40RzdHSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2Mjg1NzAwMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29hY2ggU29sb21vbiBEYW5pZWxcIixcbiAgICBcImxpZFwiOiBcIjgxOTM5ODM5MDk4OTQ1OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG4vejZBSEVOL2J0TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVRWF1MFdQaGp1aTc3cmlVVlBCRXNESTlPaHdkMnNDSmhEei84RlNtdmpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInh2UHNqTlI0NFFDK3Zzb2RFUDBkZmlwMWEwVzhVbU9MRzJ4bE56ZmF5N1g3VXpsbG5yYTgyYnV3SjM0RUc2NzFxYzZHTzRyMER6aTgvZTZzTlFPSkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVqdEpVd3dvQTJ3bUxzSmZhUlA5TndHVGltQmdSUUo1czhYbi9UMGROSG1XdlRqa0NLeENQengrM1lrajRSbWE1cmFIa1U4andUTG1uVEFXdDdSS0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjI4NTcwMDM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDE0MTE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
