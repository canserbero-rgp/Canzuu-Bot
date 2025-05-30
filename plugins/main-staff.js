let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/Imagen.jpg'
let staff = `✨ *EQUIPO DE AYUDANTES* ✨
👑 *Dueño* ${creador}
🍬 *Bot:* ${botname}
⚜️ *Versión:* ${vs}
📚 *Libreria:* ${libreria} ${baileys}

🪐 *Creador:*

👑 Ángel
🔖 *Rol:* Creador
👾 wa.me/50368471855

🍃 *mods:*

🌟 seishiro nagi
🔖 *Rol:* mod
👾  wa.me/51920227615

🌟 
🔖 *Rol:* mod
👾 wa.me/

🌟 
🔖 *Rol:* mod
👾 wa.me/

🌟 
🔖 *Rol:* mod
👾 wa.me/

🌟 
🔖 *Rol:* mod ml
👾 wa.me/
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
/*externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: packname,
body: dev,
mediaType: 1,
sourceUrl: channel,
thumbnailUrl: icono
}}*/
}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
