/**
   * Create By Bernekellboy
   * Contact Me on wa.me/6289695073357
   * Follow https://github.com/Bernekellboy
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'a9a05974d30e','LuOlangNgentot',
}

// Other
global.owner = ['6289695073357','6281224413305','6289695073357']
global.ownernumber = 'wa.me/6289695073357'
global.ownername = 'Bernekellboy🔥'
global.botname = 'Bernekell-Bot🤖'
global.packname = '© BERNEKELLBOT-MD'
global.facebook = 'Bernekellboy ID'
global.allfriend = '📺 All My Friends And All Creator Bot Wangsap'
global.quotes = '📜 Jadikan hinaan itu sebagai alasan lu agar semangat dan bisa untuk membuktikan bahwa lu bukaj seperti yang mereka kira!.'
global.author = 'Ig : @bernekellboy_'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✅ Done Success',
    admin: '❌Fitur Khusus Admin Group!',
    botAdmin: '📢 Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '❌ Fitur Khusus Owner Bot',
    group: '❌ Fitur Digunakan Hanya Untuk Group!',
    private: '❌ Fitur Digunakan Hanya Untuk Private Chat!',
    bot: '❌ Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Sabar Loading...',
}
global.thumb = fs.readFileSync('./lib/nekell.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
