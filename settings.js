const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'ydofVS76', // ð login https://api.zeeoneofc.xyz to get apikey
}

// setting 
global.autoread = false // auto read message
global.autobio = false //auto ganti bio
global.anticall = true //anti call 
global.userRegister = false
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "Â©DRAGONBOTâ¢à½¼ AND FARILBOTZ" //namabot kalian
global.ownername = "â¡ððððð¼ ðð¼ððððâ¡ AND FARILBOTZ" //nama kalian
global.myweb = "gada" //bebas asal jan hapus
global.youtube = "gada" //bebas asal jan hapus
global.myweb2 = "gada" //bebas
global.email = "putrahaqimi344@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['601121075279'] //premium user
global.owner = ["601121075279", "6285790211460"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "601121075279" // nomor wa kalian
global.ownernomerr = "+6285790211460" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://telegra.ph/file/e90bef3779d3c5812a5d1.mp4'
global.packname = 'Â®DRAGONBOTâ¢ AND FARILBOTZ' //sticker wm ubah
global.author = 'Di Buat Oleh â¡ððððð¼ ðð¼ððððâ¡ AND FARILBOTZ' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
   premium: "10000",
   free: 100
}

global.adventureRPG = 'https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg'
global.bankRPG = 'https://telegra.ph/file/ce47dca98cfdb34162abb.png'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/507395e2edbd1d740a0fd.png'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: 'ð',
         limit: 'ð«',
         health: 'â¤ï¸',
         exp: 'â¨',
         money: 'ð¹',
         bank: 'ð¦',
         potion: 'ð¥¤',
         diamond: 'ð',
         common: 'ð¦',
         uncommon: 'ðï¸',
         mythic: 'ð',
         legendary: 'ðï¸',
         superior: 'ð¼',
         pet: 'ð',
         trash: 'ð',
         armor: 'ð¥¼',
         sword: 'âï¸',
         pickaxe: 'âï¸',
         fishingrod: 'ð£',
         wood: 'ðªµ',
         rock: 'ðª¨',
         string: 'ð¸ï¸',
         horse: 'ð´',
         cat: 'ð±',
         dog: 'ð¶',
         fox: 'ð¦',
         petFood: 'ð',
         iron: 'âï¸',
         gold: 'ðª',
         emerald: 'âï¸',
         upgrader: 'ð§°'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', 'ð¦', 'ð¤', 'ð¿']
global.sp = 'â­'
global.mess = {
   sukses: 'ð¤Done, Oke Desu~',
   admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
   botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
   owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
   group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
   private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
   bot: 'Fitur Khusus Pengguna Nomor Bot',
   errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
   wait: 'â³ Sedang Di Proses',
   lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
   example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})