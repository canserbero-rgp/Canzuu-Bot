import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad.....*

- ${namegrupo}
*❀* ${gp1}

- ${namecomu}
*❀* ${comunidad1}

*ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ*

⚘ Enlace anulado? entre aquí! 

- ${namechannel}
*❀* ${channel}

- ✧┊┋◟𝐋𝐮𝐟𝐟𝐲 𝐭𝐞𝐬𝐭◞┊┋✧
*❀* ${channel2}

> ${dev}`

await conn.sendFile(m.chat, miniurl, "luffy.jpg", grupos, m)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler