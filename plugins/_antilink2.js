let linkRegex = /\b((https?:\/\/|www\.)?[\w-]+\.[\w-]+(?:\.[\w-]+)*(\/[\w\.\-\/]*)?)\b/i
export async function before(m, {isAdmin, isBotAdmin, text}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 Anti Links 」*\nustedes nunca aprenderán 🙄 y nunca aprenderán ${user} no as echo caso a las reglas por tu descuido serás elinado/a...!!`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply(`✦ No soy admin!! por lo tanto no puedo ejecutar la acción de expulsión.`);
    // await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\nU̸͟͞s̸͟͞t̸͟͞e̸͟͞d̸͟͞e̸͟͞s̸͟͞ n̸͟͞u̸͟͞n̸͟͞c̸͟͞a̸͟͞ a̸͟͞p̸͟͞r̸͟͞e̸͟͞n̸͟͞d̸͟͞e̸͟͞n̸͟͞ 🙄 y̸͟͞ n̸͟͞u̸͟͞n̸͟͞c̸͟͞a̸͟͞ a̸͟͞p̸͟͞r̸͟͞e̸͟͞n̸͟͞d̸͟͞e̸͟͞r̸͟͞a̸͟͞n̸͟͞, ${await this.getName(m.sender) 𝑵𝒐 𝒂𝒔 𝒆𝒄𝒉𝒐 𝒄𝒂𝒔𝒐 𝒂 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒑𝒐𝒓 𝒕𝒖 𝒅𝒆𝒔𝒄𝒖𝒊𝒅𝒐 𝒔𝒆𝒓𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐/𝒂...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝚘 𝚜𝚘𝚢 𝚊𝚍𝚖𝚒𝚗 𝚙𝚊𝚛𝚊 𝚎𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚛 𝚊𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply(`✦ El owner no tiene activa la opción de restringir, no puedo ejecutar está acción.`);
  }
  return !0;
}