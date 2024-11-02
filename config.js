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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_55_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlowQkFJdlB5c25WTFNmRkZIOWRQNUxCQlJJcmk5MVcxVHBYN2s4L0xVWkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2Mjg1NzAwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDEyMUU4NjAyODdBMkY0RUVFQkRENjQ3Qjc2NzZFMDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTgwOTEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInltcWV5MHM4UjdTeXFJcHVBRi0zWVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTU4NGI2ZmItMDRjMy00YTVlLWFmY2UtYTg1YWQ4Mjk3NTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDMzLFxuICAgICAgNyxcbiAgICAgIDk3LFxuICAgICAgMjE1LFxuICAgICAgNyxcbiAgICAgIDk1LFxuICAgICAgMTg5LFxuICAgICAgMTQxLFxuICAgICAgMTgsXG4gICAgICAxMTAsXG4gICAgICAxNDQsXG4gICAgICAyMTksXG4gICAgICAxNDYsXG4gICAgICAxOTQsXG4gICAgICAxNjEsXG4gICAgICAyLFxuICAgICAgMTU0LFxuICAgICAgODMsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIzOSxcbiAgICAgIDIxNyxcbiAgICAgIDYwLFxuICAgICAgMjU1LFxuICAgICAgMjM2LFxuICAgICAgMTY5LFxuICAgICAgNzYsXG4gICAgICAyMTIsXG4gICAgICAyNDQsXG4gICAgICAyMTcsXG4gICAgICAxOTcsXG4gICAgICA3MyxcbiAgICAgIDE4NyxcbiAgICAgIDE4MixcbiAgICAgIDIxLFxuICAgICAgMTM3LFxuICAgICAgNDAsXG4gICAgICAyMjIsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWkYzOVRSRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2Mjg1NzAwMzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29hY2ggU29sb21vbiBEYW5pZWxcIixcbiAgICBcImxpZFwiOiBcIjgxOTM5ODM5MDk4OTQ1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGovejZBSEVLS2ptcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVRWF1MFdQaGp1aTc3cmlVVlBCRXNESTlPaHdkMnNDSmhEei84RlNtdmpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIncvRnJ6OER1RlZ3Z2dnd24yZUpvRU43OFFCR1Y4dXRYM1pxeFFVVUdSNFRhMUJOSGplUmMyMmt2N1JlMkhZeE5zS042VXdRcHY4WVk5N3pXK1ZsTkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpYZ0grWFhWYjZVdW1Ydlgvd2sxZVRzV3haaS9lZm5rSWNUTFZkaldReXJQcjRsSGdhUWRiWkRHb0xiRy9leG4yTldQZWpnYmI3eHROSEVIZDZEekRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjI4NTcwMDM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTgwOTA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTW44XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbjguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxMWVFczRMOE5XQlAvSjZPTnk5SHNheDQzM1dDbnJIR1BlNTF0VVQ1Ti9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDc0Njc3MDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDU4MDkxMTUyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
