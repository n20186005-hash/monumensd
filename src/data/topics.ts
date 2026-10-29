/**
 * Registry topik panjang ekor untuk Monumen Ground Zero Bali (Monumen Tragedi Kemanusiaan).
 * Pusat data: setiap topik memiliki konten id (wajib) dan en (subkumpulan bernilai nyata).
 * Tidak ada info usaha/jarak/jam/harga yang dipastikan; semua diarahkan ke verifikasi.
 */
export type TopicFaq = { q: string; a: string };
export type TopicSection = { heading: string; body?: string; bullets?: string[]; callout?: string };
export type TopicContent = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  lead: string;
  updated: string;
  facts: [string, string][];
  sections: TopicSection[];
  faqs: TopicFaq[];
};
export type TopicMeta = { slug: string; group: string; id: TopicContent; en?: TopicContent };

export const TOPIC_GROUPS: { id: string; label: string; labelEn: string }[] = [
  { id: "sejarah", label: "Sejarah & Makna", labelEn: "History & Meaning" },
  { id: "kunjungan", label: "Persiapan Kunjungan", labelEn: "Planning Your Visit" },
  { id: "transportasi", label: "Transportasi", labelEn: "Getting Around" },
  { id: "sekitar", label: "Kawasan Sekitar", labelEn: "Around the Area" },
  { id: "kuliner", label: "Kuliner & Menginap", labelEn: "Food & Stay" },
  { id: "rute", label: "Rute & Itinerari", labelEn: "Routes & Itineraries" },
  { id: "konteks", label: "Konteks Bali", labelEn: "Bali Context" },
];

const UPDATED = "28 Oktober 2026";

const RAW: TopicMeta[] = [
  {
    slug: "bom-bali-2002",
    group: "sejarah",
    id: {
      title: "Bom Bali I 2002: Tragedi 12 Oktober di Legian",
      metaTitle: "Bom Bali I 2002: Kronologi & Korban di Legian, Kuta",
      metaDescription: "Latar Bom Bali I pada 12 Oktober 2002 di kawasan Legian, Kuta; jumlah korban, prasasti nama, dan mengapa monumen ini berdiri.",
      kicker: "Sejarah",
      lead: "Monumen di Jalan Legian, Kuta, berdiri untuk mengenang korban tragedi Bom Bali I yang terjadi pada malam 12 Oktober 2002.",
      updated: UPDATED,
      facts: [["Tanggal", "12 Oktober 2002"], ["Lokasi", "Kawasan Legian–Kuta"], ["Korban", "202 jiwa dari 22 negara"], ["Sumber", "Indonesia.travel"]],
      sections: [
        { heading: "Apa yang terjadi", body: "Pada malam 12 Oktober 2002, serangkaian ledakan melanda kawasan wisata Legian dan Kuta. Indonesia.travel mencatat 202 orang dari 22 negara meninggal dunia. Monumen peringatan kemudian hadir di lokasi yang berkaitan dengan peristiwa tersebut untuk menghormati korban serta keluarga yang ditinggalkan." },
        { heading: "Prasasti dan bentuk", body: "Di monumen terdapat prasasti yang mencantumkan nama dan kewarganegaraan korban. Bagian tengahnya menyerupai gunungan wayang, simbol alam semesta dalam tradisi Nusantara.", bullets: ["Jangan menaiki atau menyentuh struktur monumen.", "Jangan memindahkan bunga atau menghalangi prasasti.", "Hindari foto yang mengganggu momen hening."] },
        { heading: "Bukan tempat hiburan", body: "Kawasan ini adalah ruang memori, bukan tujuan wisata hiburan. Kunjungan yang baik memberi tempat bagi empati, hening, dan toleransi lintas bangsa.", callout: "Catatan: laporan doa bersama pada 12 Oktober 2026 adalah catatan kegiatan masa lalu, bukan jadwal acara rutin." }
      ],
      faqs: [
        { q: "Berapa korban Bom Bali I 2002?", a: "Indonesia.travel mencatat 202 korban dari 22 negara. Angka ini merujuk pada tragedi 12 Oktober 2002 di Kuta–Legian, bukan peristiwa lain." },
        { q: "Mengapa monumen berada di Legian?", a: "Monumen didirikan di lokasi yang berkaitan dengan peristiwa 12 Oktober 2002 untuk mengenang korban dan memberi ruang refleksi bagi pengunjung serta keluarga." },
        { q: "Apakah ada jadwal peringatan rutin?", a: "Pemerintah Kabupaten Badung melaporkan doa lintas agama pada 12 Oktober 2026. Itu catatan kegiatan yang telah berlangsung; panduan ini tidak menjanjikan acara rutin atau akses khusus pada tanggal mendatang." }
      ]
    },
    en: {
      title: "Bali Bombing I 2002: The 12 October Tragedy in Legian",
      metaTitle: "Bali Bombing I 2002: Timeline & Victims in Legian, Kuta",
      metaDescription: "Background of the 12 October 2002 Bali Bombing in Legian, Kuta; victim count, name inscription, and why this memorial stands.",
      kicker: "History",
      lead: "The memorial on Jalan Legian, Kuta, stands to remember the victims of the Bali Bombing I that occurred on the night of 12 October 2002.",
      updated: "28 October 2026",
      facts: [["Date", "12 October 2002"], ["Location", "Legian–Kuta area"], ["Victims", "202 from 22 nations"], ["Source", "Indonesia.travel"]],
      sections: [
        { heading: "What happened", body: "On the night of 12 October 2002, a series of explosions struck the Legian and Kuta tourist area. Indonesia.travel records 202 people from 22 countries lost their lives. The memorial later appeared at the site linked to that event to honour the victims and those they left behind." },
        { heading: "Inscription and form", body: "The memorial carries an inscription of victims' names and nationalities. Its centre resembles a wayang gunungan, a symbol of the universe in Nusantara tradition.", bullets: ["Do not climb on or touch the structure.", "Do not move flowers or block the inscription.", "Avoid photos that disturb moments of silence."] }
      ],
      faqs: [
        { q: "How many victims were there?", a: "Indonesia.travel records 202 victims from 22 countries, referring to the 12 October 2002 tragedy in Kuta–Legian." },
        { q: "Why is the memorial in Legian?", a: "It was built at the site linked to the 12 October 2002 event to honour victims and offer a space for reflection." },
        { q: "Is there a regular commemoration schedule?", a: "Badung Regency reported an interfaith prayer on 12 October 2026. That is a record of a past activity; this guide does not promise a recurring event." }
      ]
    }
  },
  {
    slug: "bom-bali-denpasar-2002",
    group: "sejarah",
    id: {
      title: "Bom Bali 2002 di Denpasar: Letak yang Berbeda",
      metaTitle: "Bom Bali 2002 Denpasar vs Kuta: Membedakan Lokasi",
      metaDescription: "Mengapa monumen di Legian berbeda dari peristiwa Denpasar pada 12 Oktober 2002; hindari kekeliruan lokasi saat merencanakan kunjungan.",
      kicker: "Sejarah",
      lead: "Malam 12 Oktober 2002 meliputi lebih dari satu lokasi. Monumen Ground Zero Bali di Legian mengenang korban di kawasan Kuta–Legian, bukan peristiwa di Denpasar.",
      updated: UPDATED,
      facts: [["Tanggal", "12 Oktober 2002"], ["Monumen", "Legian, Kuta"], ["Lokasi lain", "Denpasar (Renon)"], ["Peringatan", "Sesuai narasi resmi"]],
      sections: [
        { heading: "Dua lokasi, satu malam", body: "Peristiwa 12 Oktober 2002 mencakup lebih dari satu titik di Bali. Kawasan Legian–Kuta adalah lokasi yang diperingati oleh monumen di Jalan Legian. Lokasi lain, termasuk di Denpasar, memiliki narasi terpisah dan tidak diwakili oleh monumen ini." },
        { heading: "Gunakan alamat dengan tepat", body: "Sebutkan kepada pengemudi: Monumen Ground Zero Bali, Jalan Legian, Kuta, Badung, Bali 80361. Jangan gunakan nama kawasan Denpasar untuk menuju monumen ini, agar rute tidak salah arah.", bullets: ["Monumen ini ada di Kuta, bukan Denpasar.", "Koordinat terverifikasi: -8.7172698, 115.17449.", "Verifikasi pin peta sebelum berangkat."] }
      ],
      faqs: [
        { q: "Apakah monumen ini juga untuk korban Denpasar?", a: "Tidak. Monumen di Jalan Legian, Kuta, mengenang korban peristiwa kawasan Kuta–Legian pada 12 Oktober 2002. Peristiwa Denpasar memiliki lokasi terpisah." },
        { q: "Bagaimana memastikan alamat tujuan?", a: "Gunakan alamat lengkap Jalan Legian, Kuta, Badung, Bali 80361, dan pin peta yang diverifikasi. Jangan menyebut nama Denpasar sebagai tujuan monumen ini." },
        { q: "Apakah lokasi aman dikunjungi?", a: "Kuta adalah kawasan wisata yang beroperasi. Panduan ini tidak menjanjikan kondisi keamanan tertentu; ikuti petunjuk setempat dan informasi resmi perjalanan." }
      ]
    }
  },
  {
    slug: "makna-monumen-perdamaian",
    group: "sejarah",
    id: {
      title: "Makna Monumen: Gunungan & Pesan Perdamaian",
      metaTitle: "Makna Monumen Ground Zero Bali: Simbol Perdamaian",
      metaDescription: "Bentuk gunungan wayang dan prasasti nama korban sebagai ruang peringatan lintas bangsa di Kuta.",
      kicker: "Sejarah",
      lead: "Monumen ini bukan sekadar penanda lokasi, melainkan ruang peringatan yang merangkul pengunjung dari banyak negara.",
      updated: UPDATED,
      facts: [["Bentuk", "Gunungan wayang"], ["Pesan", "Perdamaian lintas bangsa"], ["Konteks", "Tragedi 12 Oktober 2002"], ["Sumber", "Indonesia.travel"]],
      sections: [
        { heading: "Gunungan sebagai simbol", body: "Indonesia.travel menjelaskan bahwa bagian tengah monumen menyerupai gunungan, simbol alam semesta dalam tradisi pewayangan. Bentuk ini mendukung fungsi memorial sebagai tempat mengenang sekaligus pesan perdamaian." },
        { heading: "Lintas bangsa", body: "Korban datang dari 22 negara. Prasasti nama dan kewarganegaraan menjadikan tempat ini ruang peringatan yang melampaui batas negara.", bullets: ["Baca prasasti dengan pelan.", "Hindari perilaku yang merusak suasana hening.", "Hargailah pengunjung yang sedang berduka."] }
      ],
      faqs: [
        { q: "Apa makna bentuk gunungan?", a: "Gunungan merujuk pada simbol alam semesta dalam tradisi wayang. Indonesia.travel mencatatnya sebagai bagian dari pesan perdamaian monumen." },
        { q: "Mengapa disebut lintas bangsa?", a: "Korban tragedi 12 Oktober 2002 berasal dari 22 negara, sehingga monumen berfungsi sebagai ruang peringatan bagi banyak bangsa." },
        { q: "Bolehkah berfoto?", a: "Boleh dengan rasa hormat. Jangan memindahkan bunga, menaiki struktur, atau menghalangi orang yang sedang memberi penghormatan." }
      ]
    },
    en: {
      title: "The Meaning of the Memorial: Gunungan & Peace",
      metaTitle: "Meaning of Bali Ground Zero Memorial: A Peace Symbol",
      metaDescription: "The wayang gunungan form and victim inscription as a cross-nation memorial space in Kuta.",
      kicker: "History",
      lead: "This memorial is more than a location marker; it is a space of remembrance that welcomes visitors from many countries.",
      updated: "28 October 2026",
      facts: [["Form", "Wayang gunungan"], ["Message", "Cross-nation peace"], ["Context", "12 October 2002"], ["Source", "Indonesia.travel"]],
      sections: [
        { heading: "Gunungan as a symbol", body: "Indonesia.travel explains that the centre of the memorial resembles a gunungan, a symbol of the universe in wayang tradition. This form supports its function as a place of remembrance and a message of peace." },
        { heading: "Across nations", body: "Victims came from 22 countries. The inscription of names and nationalities makes this a memorial space that crosses national borders.", bullets: ["Read the inscription quietly.", "Avoid behaviour that breaks the silence.", "Respect visitors who are grieving."] }
      ],
      faqs: [
        { q: "What does the gunungan mean?", a: "It refers to a symbol of the universe in wayang tradition, recorded by Indonesia.travel as part of the memorial's peace message." },
        { q: "Why is it called cross-nation?", a: "Victims of the 12 October 2002 tragedy came from 22 countries, so the memorial serves many nations." },
        { q: "May I take photos?", a: "Yes, respectfully. Do not move flowers, climb the structure, or block those paying respects." }
      ]
    }
  },
  {
    slug: "prasasti-nama-korban",
    group: "sejarah",
    id: {
      title: "Prasasti Nama Korban: Menghormati Ingatan",
      metaTitle: "Prasasti Korban Bom Bali: Nama & Kewarganegaraan",
      metaDescription: "Prasasti monumen mencantumkan nama dan kewarganegaraan korban 12 Oktober 2002; cara membaca dengan hormat.",
      kicker: "Sejarah",
      lead: "Di monumen terdapat prasasti yang mencantumkan nama serta kewarganegaraan korban tragedi 12 Oktober 2002.",
      updated: UPDATED,
      facts: [["Tanggal", "12 Oktober 2002"], ["Isi", "Nama & kewarganegaraan"], ["Jumlah", "202 korban"], ["Sikap", "Baca dengan hormat"]],
      sections: [
        { heading: "Apa yang tertulis", body: "Prasasti mencantumkan nama dan kewarganegaraan korban. Ini bukan daftar wisata, melainkan catatan manusia yang kehilangan nyawa dan keluarga yang ditinggalkan." },
        { heading: "Cara membaca", body: "Bacalah dengan pelan. Beri jarak bagi pengunjung yang sedang berdoa atau mengenang. Jangan menyentuh atau menaiki struktur prasasti.", bullets: ["Jaga suara di sekitar prasasti.", "Jangan memindahkan bunga atau benda peringatan.", "Hindari latar foto yang menutupi akses prasasti."] }
      ],
      faqs: [
        { q: "Apakah nama korban terbuka dibaca?", a: "Ya, prasasti terbuka bagi pengunjung. Baca dengan pelan dan hormati orang yang sedang mengenang." },
        { q: "Berapa banyak nama yang tercantum?", a: "Indonesia.travel mencatat 202 korban dari 22 negara terkait tragedi 12 Oktober 2002." },
        { q: "Boleh memindahkan bunga?", a: "Tidak. Biarkan benda peringatan tetap di tempatnya dan jangan menghalangi akses prasasti." }
      ]
    }
  },
  {
    slug: "sejarah-pasca-2002-bali",
    group: "konteks",
    id: {
      title: "Bali Pasca-2002: Pemulihan & Keamanan",
      metaTitle: "Bali Pasca-Tragedi 2002: Konteks Perjalanan",
      metaDescription: "Konteks pemulihan Bali setelah 2002 dan sikap netral panduan ini terhadap klaim keamanan.",
      kicker: "Konteks",
      lead: "Setelah tragedi 2002, Bali melakukan pemulihan di banyak bidang. Panduan ini hanya memberikan konteks, bukan jaminan keamanan.",
      updated: UPDATED,
      facts: [["Tahun", "2002 dan setelahnya"], ["Konteks", "Pemulihan pariwisata"], ["Sikap", "Netral & verifikasi"], ["Sumber", "Narasi publik"]],
      sections: [
        { heading: "Pemulihan bertahap", body: "Bali secara bertahap memulihkan kepercayaan wisatawan dan memperkuat banyak aspek pelayanan setelah 2002. Narasi ini membantu memahami mengapa monumen menjadi bagian dari memori kolektif pulau." },
        { heading: "Verifikasi, bukan janji", body: "Panduan ini tidak menjanjikan kondisi keamanan tertentu. Ikuti informasi resmi perjalanan dan petunjuk setempat saat merencanakan kunjungan.", bullets: ["Cek imbauan perjalanan resmi sebelum berangkat.", "Gunakan penyedia transportasi dan akomodasi yang diverifikasi.", "Pantau kondisi setempat selama perjalanan."] }
      ],
      faqs: [
        { q: "Apakah Bali aman dikunjungi?", a: "Bali adalah destinasi wisata yang beroperasi. Panduan ini tidak menjanjikan keamanan tertentu; ikuti informasi resmi perjalanan." },
        { q: "Apakah monumen terkait langsung dengan keamanan sekarang?", a: "Tidak. Monumen adalah ruang memori masa lalu. Informasi keamanan saat ini harus diambil dari sumber resmi." },
        { q: "Mengapa konteks ini ada di panduan?", a: "Untuk membantu pengunjung memahami makna monumen dalam sejarah Bali, tanpa klaim yang tidak dapat diverifikasi." }
      ]
    }
  },
  {
    slug: "jam-kunjungan",
    group: "kunjungan",
    id: {
      title: "Jam Kunjungan: Tidak Ada Jam Resmi",
      metaTitle: "Jam Kunjungan Monumen Ground Zero Bali: Cek di Lokasi",
      metaDescription: "Monumen tidak mencantumkan jam operasional resmi; verifikasi akses di lokasi sebelum datang, terutama malam hari.",
      kicker: "Kunjungan",
      lead: "Google Maps yang diperiksa 28 Oktober 2026 tidak mencantumkan jam operasional, telepon, atau situs pengelola monumen.",
      updated: UPDATED,
      facts: [["Jam resmi", "Tidak tercantum"], ["Sumber", "Google Maps 28 Okt 2026"], ["Malam hari", "Verifikasi dulu"], ["Akses", "Konfirmasi di lokasi"]],
      sections: [
        { heading: "Tidak ada jadwal tetap", body: "Data peta yang diperiksa tidak menampilkan jam buka atau tutup. Jangan menganggap akses tersedia 24 jam atau pada malam hari. Konfirmasikan kondisi akses dan pemberitahuan setempat sebelum datang." },
        { heading: "Waktu yang lebih tenang", body: "Sebagai ruang memori di koridor perkotaan, waktu siang hari umumnya lebih mudah diakses dan memberi ruang memberi penghormatan tanpa gangguan lalu lintas malam.", bullets: ["Hindari mengandalkan jam dari foto atau ulasan lama.", "Datang saat cahaya cukup untuk membaca prasasti.", "Ikuti rambu dan petunjuk di lokasi."] }
      ],
      faqs: [
        { q: "Jam berapa monumen buka?", a: "Tidak ada jam operasional resmi yang tercantum pada data peta yang diperiksa. Verifikasi kondisi akses di lokasi sebelum berangkat." },
        { q: "Boleh datang malam hari?", a: "Panduan ini tidak menjamin akses malam hari. Konfirmasikan lebih dahulu, terutama setelah gelap." },
        { q: "Apakah gratis masuk?", a: "Lihat halaman biaya masuk; panduan tidak menetapkan tarif resmi karena data peta tidak mencantumkannya." }
      ]
    },
    en: {
      title: "Visiting Hours: No Official Schedule",
      metaTitle: "Bali Ground Zero Memorial Hours: Check On Site",
      metaDescription: "The memorial lists no official opening hours; verify access on site before visiting, especially at night.",
      kicker: "Visiting",
      lead: "Google Maps checked on 28 October 2026 lists no opening hours, phone, or operator website for the memorial.",
      updated: "28 October 2026",
      facts: [["Official hours", "Not listed"], ["Source", "Google Maps 28 Oct 2026"], ["At night", "Verify first"], ["Access", "Confirm on site"]],
      sections: [
        { heading: "No fixed schedule", body: "The map data checked shows no opening or closing hours. Do not assume 24-hour or nighttime access. Confirm access conditions and local notices before going." },
        { heading: "Quieter daytime", body: "As a memorial in an urban corridor, daytime is generally easier to access and allows quiet reflection away from night traffic.", bullets: ["Do not rely on hours from old photos or reviews.", "Visit when there is enough light to read the inscription.", "Follow signs and on-site guidance."] }
      ],
      faqs: [
        { q: "What time does the memorial open?", a: "No official hours are listed in the map data checked. Verify access on site before going." },
        { q: "May I visit at night?", a: "This guide does not guarantee night access. Confirm first, especially after dark." },
        { q: "Is entry free?", a: "See the entry fee page; this guide sets no official fee because none is listed in the map data." }
      ]
    }
  },
  {
    slug: "biaya-masuk",
    group: "kunjungan",
    id: {
      title: "Biaya Masuk: Tanpa Tarif Resmi",
      metaTitle: "Biaya Masuk Monumen Ground Zero Bali: Tidak Ada Tarif Resmi",
      metaDescription: "Monumen tidak mencantumkan tarif masuk resmi; pelajari apa yang perlu diverifikasi sebelum berangkat.",
      kicker: "Kunjungan",
      lead: "Data peta yang diperiksa tidak menampilkan tarif masuk maupun situs pengelola. Jangan menganggap ada tiket resmi.",
      updated: UPDATED,
      facts: [["Tarif resmi", "Tidak tercantum"], ["Sumber", "Google Maps 28 Okt 2026"], ["Tiket", "Tidak dijamin"], ["Verifikasi", "Di lokasi"]],
      sections: [
        { heading: "Tidak ada tiket resmi", body: "Panduan ini tidak menemukan tarif atau situs pengelola yang diverifikasi. Jangan membeli tiket dari pihak yang tidak jelas. Konfirmasikan kondisi akses di lokasi." },
        { heading: "Waspadai penawaran tak resmi", body: "Sebagai ruang memori di koridor publik, monumen tidak seharusnya memungut tiket resmi. Jika ada permintaan biaya yang tidak jelas, verifikasi dengan sumber tepercaya.", bullets: ["Jangan membeli tiket dari pihak tak dikenal.", "Tanyakan otoritas setempat jika ragu.", "Fokus pada penghormatan, bukan transaksi."] }
      ],
      faqs: [
        { q: "Berapa harga tiket masuk?", a: "Tidak ada tarif resmi yang tercantum. Panduan tidak menetapkan harga; verifikasi di lokasi." },
        { q: "Apakah perlu reservasi?", a: "Tidak ada sistem reservasi resmi yang panduan ini verifikasi. Kunjungan dilakukan sebagai ruang memori terbuka." },
        { q: "Apakah ada biaya parkir resmi?", a: "Lihat halaman parkir sekitar Kuta; panduan tidak menjamin tarif atau lokasi parkir khusus monumen." }
      ]
    },
    en: {
      title: "Entry Fee: No Official Charge",
      metaTitle: "Bali Ground Zero Memorial Entry Fee: No Official Fee",
      metaDescription: "The memorial lists no official entry fee; learn what to verify before going.",
      kicker: "Visiting",
      lead: "The map data checked shows no entry fee or operator website. Do not assume there is an official ticket.",
      updated: "28 October 2026",
      facts: [["Official fee", "Not listed"], ["Source", "Google Maps 28 Oct 2026"], ["Ticket", "Not guaranteed"], ["Verify", "On site"]],
      sections: [
        { heading: "No official ticket", body: "This guide found no verified fee or operator website. Do not buy tickets from unclear parties. Confirm access conditions on site." },
        { heading: "Beware unclear offers", body: "As a memorial in a public corridor, the site should not charge an official ticket. If an unclear fee is requested, verify with a trusted source.", bullets: ["Do not buy tickets from unknown parties.", "Ask local authorities if unsure.", "Focus on remembrance, not transactions."] }
      ],
      faqs: [
        { q: "How much is the entry ticket?", a: "No official fee is listed. This guide sets no price; verify on site." },
        { q: "Is a reservation needed?", a: "No official reservation system is verified. Visits are as an open memorial space." },
        { q: "Is there an official parking fee?", a: "See the parking around Kuta page; this guide does not guarantee a fee or dedicated monument parking." }
      ]
    }
  },
  {
    slug: "etika-berkunjung",
    group: "kunjungan",
    id: {
      title: "Etika Berkunjung ke Monumen",
      metaTitle: "Etika Berkunjung Monumen Ground Zero Bali: Menghormati Korban",
      metaDescription: "Sikap tenang, foto dengan rasa hormat, dan menjaga prasasti saat mengunjungi monumen di Legian, Kuta.",
      kicker: "Kunjungan",
      lead: "Monumen adalah ruang mengenang korban dan keluarga yang ditinggalkan. Kunjungan yang baik memberi ruang bagi hening dan empati.",
      updated: UPDATED,
      facts: [["Suasana", "Hening & hormat"], ["Foto", "Dengan rasa hormat"], ["Prasasti", "Jangan diganggu"], ["Bunga", "Jangan dipindah"]],
      sections: [
        { heading: "Jaga suara dan sikap", body: "Area ini adalah tempat mengenang, bukan ruang hiburan. Jaga suara, hormati orang yang sedang memberi penghormatan, dan ikuti kondisi lapangan." },
        { heading: "Foto dengan rasa hormat", body: "Foto diperbolehkan, tetapi jangan memindahkan bunga, menaiki struktur, atau menghalangi akses ke prasasti. Hindari latar yang menutupi momen hening orang lain.", bullets: ["Jangan menaiki atau menyentuh struktur monumen.", "Jangan memindahkan bunga peringatan.", "Berikan jarak bagi pengunjung yang berduka."] },
        { heading: "Ikuti kondisi lapangan", body: "Peringatan, doa bersama, atau pemeliharaan dapat mengubah alur kunjungan. Ikuti petunjuk di lokasi dan jangan menganggap akses selalu sama." }
      ],
      faqs: [
        { q: "Boleh membawa anak?", a: "Ya, asalkan diajarkan untuk menjaga ketenangan dan menghormati ruang memori." },
        { q: "Boleh berfoto?", a: "Boleh dengan rasa hormat. Jangan menghalangi prasasti atau mengganggu pengunjung yang mengenang." },
        { q: "Apa yang tidak boleh dilakukan?", a: "Jangan menaiki struktur, memindahkan bunga, berteriak, atau menggunakan ruang ini sebagai tempat hiburan." }
      ]
    },
    en: {
      title: "Visiting Etiquette at the Memorial",
      metaTitle: "Bali Ground Zero Memorial Etiquette: Respecting Victims",
      metaDescription: "Quiet conduct, respectful photos, and protecting the inscription when visiting the memorial in Legian, Kuta.",
      kicker: "Visiting",
      lead: "The memorial is a space to remember victims and those they left behind. A good visit makes room for silence and empathy.",
      updated: "28 October 2026",
      facts: [["Atmosphere", "Quiet & respect"], ["Photos", "Respectfully"], ["Inscription", "Do not disturb"], ["Flowers", "Do not move"]],
      sections: [
        { heading: "Keep voice and conduct calm", body: "This is a place of remembrance, not entertainment. Keep your voice low, respect those paying respects, and follow on-site conditions." },
        { heading: "Photograph respectfully", body: "Photos are allowed, but do not move flowers, climb the structure, or block access to the inscription. Avoid backgrounds that cover others' quiet moments.", bullets: ["Do not climb on or touch the structure.", "Do not move memorial flowers.", "Give space to grieving visitors."] }
      ],
      faqs: [
        { q: "May I bring children?", a: "Yes, as long as they are taught to stay calm and respect the memorial space." },
        { q: "May I take photos?", a: "Yes, respectfully. Do not block the inscription or disturb those remembering." },
        { q: "What should I not do?", a: "Do not climb the structure, move flowers, shout, or treat this as an entertainment spot." }
      ]
    }
  },
  {
    slug: "aksesibilitas-monumen",
    group: "kunjungan",
    id: {
      title: "Aksesibilitas Monumen di Legian",
      metaTitle: "Aksesibilitas Monumen Ground Zero Bali: Verifikasi di Lokasi",
      metaDescription: "Ketersediaan akses bagi kursi roda dan pejalan kaki belum diverifikasi; rencanakan kebutuhan sebelum tiba.",
      kicker: "Kunjungan",
      lead: "Monumen berada di koridor perkotaan Jalan Legian. Fasilitas aksesibilitas belum panduan verifikasi secara pasti.",
      updated: UPDATED,
      facts: [["Lokasi", "Jalan Legian, Kuta"], ["Permukaan", "Perkotaan"], ["Akses difabel", "Verifikasi"], ["Kursi roda", "Cek di lokasi"]],
      sections: [
        { heading: "Di koridor jalan umum", body: "Monumen berada di pinggir koridor jalan Legian yang aktif. Kondisi trotoar, penyeberangan, dan akses permukaan dapat berbeda; verifikasi secara langsung." },
        { heading: "Rencanakan kebutuhan", body: "Jika memerlukan akses kursi roda atau bantuan gerak, periksa kondisi trotoar dan titik turun kendaraan terlebih dahulu bersama penyedia transportasi.", bullets: ["Konfirmasi titik turun yang aman.", "Periksa ketersediaan trotoar yang memadai.", "Siapkan waktu ekstra untuk mobilitas."] }
      ],
      faqs: [
        { q: "Apakah ramah kursi roda?", a: "Panduan belum memverifikasi fasilitas aksesibilitas khusus. Periksa kondisi trotoar dan akses di lokasi." },
        { q: "Apakah ada toilet difabel?", a: "Tidak ada data resmi yang diverifikasi. Rencanakan kebutuhan dasar sebelum tiba." },
        { q: "Seberapa dekat dari jalan?", a: "Monumen berada di tepi koridor Jalan Legian. Verifikasi jarak tempuh dari titik turun kendaraan di lokasi." }
      ]
    }
  },
  {
    slug: "kapan-waktu-terbaik",
    group: "kunjungan",
    id: {
      title: "Kapan Waktu Terbaik Berkunjung",
      metaTitle: "Kapan Waktu Terbaik ke Monumen Ground Zero Bali",
      metaDescription: "Pilih waktu tenang dan bercahaya cukup untuk mengenang; verifikasi akses karena tidak ada jam resmi.",
      kicker: "Kunjungan",
      lead: "Tanpa jam operasional resmi, pilihlah waktu yang memberi ruang tenang dan cahaya cukup untuk membaca prasasti.",
      updated: UPDATED,
      facts: [["Cahaya", "Siang lebih baik"], ["Suasana", "Hindari ramai"], ["Cuaca", "Cek prakiraan"], ["Verifikasi", "Akses di lokasi"]],
      sections: [
        { heading: "Siang hari lebih mudah", body: "Waktu siang umumnya memberi cahaya cukup untuk membaca prasasti dan menghindari gangguan lalu lintas malam. Kuta memiliki iklim tropis; cek prakiraan cuaca sebelum berangkat." },
        { heading: "Hindari kondisi ekstrem", body: "Hujan atau panas terik dapat mengganggu kenyamanan. Bawa air minum dan perlindungan jika diperlukan, serta verifikasi akses di lokasi.", bullets: ["Cek prakiraan cuaca hari perjalanan.", "Datang saat cahaya cukup.", "Bawa air minum untuk kebutuhan dasar."] }
      ],
      faqs: [
        { q: "Hari apa paling tenang?", a: "Tidak ada jaminan keramaian tertentu. Waktu siang hari kerja umumnya lebih tenang daripada malam akhir pekan." },
        { q: "Apakah malam dilarang?", a: "Tidak dilarang, tetapi panduan tidak menjamin akses malam. Verifikasi kondisi sebelum datang setelah gelap." },
        { q: "Bagaimana cuaca Kuta?", a: "Kuta beriklim tropis. Cek prakiraan cuaca resmi pada hari perjalanan." }
      ]
    }
  },
  {
    slug: "dari-bandara-ngurah-rai",
    group: "transportasi",
    id: {
      title: "Dari Bandara Ngurah Rai ke Monumen",
      metaTitle: "Dari Bandara Ngurah Rai ke Monumen Ground Zero Bali",
      metaDescription: "Persiapan perjalanan dari Bandara I Gusti Ngurah Rai ke Jalan Legian; konfirmasi layanan, tarif, dan titik turun.",
      kicker: "Transportasi",
      lead: "Bandara Internasional I Gusti Ngurah Rai adalah pintu utama Bali. Rencanakan transfer ke Jalan Legian, Kuta, dengan penyedia yang diverifikasi.",
      updated: UPDATED,
      facts: [["Bandara", "DPS · Ngurah Rai"], ["Tujuan", "Jalan Legian, Kuta"], ["Layanan", "Konfirmasi"], ["Tarif", "Verifikasi"]],
      sections: [
        { heading: "Pilih penyedia transportasi", body: "Tanyakan kepada penyedia transportasi tentang izin dan zona jemput, tujuan monumen di Jalan Legian, tarif, serta titik turun. Tidak ada layanan atau waktu tempuh tertentu yang dipastikan oleh panduan ini." },
        { heading: "Berapa lama perjalanan?", body: "Waktu tempuh bervariasi menurut lalu lintas. Jangan menganggap durasi tertentu dari foto atau ulasan lama; konfirmasikan dengan penyedia pada hari perjalanan.", bullets: ["Konfirmasi zona jemput bandara.", "Sepakati titik turun di Jalan Legian.", "Tanyakan estimasi tarif sebelum berangkat."] },
        { heading: "Turun di titik yang aman", body: "Mintalah turun di tepi jalan yang tidak menghalangi lalu lintas. Jangan berhenti di lajur sibuk di sekitar monumen." }
      ],
      faqs: [
        { q: "Berapa tarif dari bandara?", a: "Panduan tidak menetapkan tarif. Tanyakan estimasi kepada penyedia transportasi sebelum berangkat." },
        { q: "Berapa lama perjalanan?", a: "Waktu tempuh bervariasi menurut lalu lintas; konfirmasikan dengan penyedia pada hari perjalanan." },
        { q: "Apakah ada transportasi umum langsung?", a: "Lihat halaman transportasi umum Bali; panduan tidak menjamin rute langsung dari bandara ke monumen." }
      ]
    },
    en: {
      title: "From Ngurah Rai Airport to the Memorial",
      metaTitle: "From Ngurah Rai Airport to Bali Ground Zero Memorial",
      metaDescription: "Trip planning from I Gusti Ngurah Rai Airport to Jalan Legian; confirm service, fare, and drop-off point.",
      kicker: "Transport",
      lead: "Ngurah Rai International Airport is Bali's main gateway. Plan your transfer to Jalan Legian, Kuta, with a verified provider.",
      updated: "28 October 2026",
      facts: [["Airport", "DPS · Ngurah Rai"], ["Destination", "Jalan Legian, Kuta"], ["Service", "Confirm"], ["Fare", "Verify"]],
      sections: [
        { heading: "Choose a transport provider", body: "Ask your provider about pickup zones, the monument destination on Jalan Legian, fare, and drop-off point. This guide guarantees no specific service or travel time." },
        { heading: "How long is the trip?", body: "Travel time varies with traffic. Do not assume a fixed duration from old photos or reviews; confirm with the provider on the day.", bullets: ["Confirm the airport pickup zone.", "Agree on a drop-off on Jalan Legian.", "Ask for a fare estimate before leaving."] }
      ],
      faqs: [
        { q: "How much is the fare from the airport?", a: "This guide sets no fare. Ask your provider for an estimate before leaving." },
        { q: "How long is the trip?", a: "Travel time varies with traffic; confirm with the provider on the day." },
        { q: "Is there direct public transport?", a: "See the Bali public transport page; this guide does not guarantee a direct route from the airport." }
      ]
    }
  },
  {
    slug: "dari-denpasar",
    group: "transportasi",
    id: {
      title: "Dari Denpasar ke Monumen di Kuta",
      metaTitle: "Dari Denpasar ke Monumen Ground Zero Bali, Kuta",
      metaDescription: "Rute dari pusat kota Denpasar ke Jalan Legian, Kuta; konfirmasi jarak, lalu lintas, dan titik turun.",
      kicker: "Transportasi",
      lead: "Denpasar adalah ibu kota Bali dan pusat administrasi. Dari sini ke monumen di Kuta memerlukan perencanaan rute.",
      updated: UPDATED,
      facts: [["Asal", "Denpasar"], ["Tujuan", "Jalan Legian, Kuta"], ["Jarak", "Verifikasi peta"], ["Lalu lintas", "Bervariasi"]],
      sections: [
        { heading: "Gunakan peta, bukan asumsi", body: "Jarak dan waktu tempuh dari Denpasar ke Kuta bervariasi. Gunakan peta untuk rute, lalu ikuti kondisi lalu lintas setempat. Monumen berada di Jalan Legian, bukan di Denpasar." },
        { heading: "Hindari kekeliruan lokasi", body: "Ingat bahwa monumen mengenang peristiwa Legian–Kuta, bukan peristiwa Denpasar. Jangan arahkan pengemudi ke kawasan Denpasar sebagai tujuan monumen.", bullets: ["Alamat: Jalan Legian, Kuta, Badung, Bali 80361.", "Koordinat: -8.7172698, 115.17449.", "Verifikasi pin peta sebelum berangkat."] }
      ],
      faqs: [
        { q: "Berapa jauh Denpasar ke monumen?", a: "Jarak bervariasi; gunakan peta untuk rute dan verifikasi sebelum berangkat." },
        { q: "Apakah monumen di Denpasar?", a: "Tidak. Monumen ada di Jalan Legian, Kuta, dan mengenang peristiwa 12 Oktober 2002 di Kuta–Legian." },
        { q: "Apa transportasi terbaik?", a: "Tergantung kondisi; konfirmasikan layanan, tarif, dan titik turun dengan penyedia yang diverifikasi." }
      ]
    }
  },
  {
    slug: "transportasi-umum-kuta",
    group: "transportasi",
    id: {
      title: "Transportasi Umum di Sekitar Kuta",
      metaTitle: "Transportasi Umum Kuta: Catatan untuk ke Monumen",
      metaDescription: "Rute angkutan umum Bali dapat berubah; verifikasi jaringan aktif dan sambungan akhir ke Jalan Legian.",
      kicker: "Transportasi",
      lead: "Kuta dilayani oleh berbagai opsi transportasi, tetapi rute dan layanan dapat berubah. Verifikasi sebelum mengandalkan angkutan umum.",
      updated: UPDATED,
      facts: [["Jaringan", "Bervariasi"], ["Rute", "Verifikasi"], ["Sambungan", "Cek akhir"], ["Waktu", "Bervariasi"]],
      sections: [
        { heading: "Rute dapat berubah", body: "Angkutan umum dan sambungan akhir di Bali dapat berubah pola layanannya. Periksa jaringan transportasi yang aktif pada hari perjalanan." },
        { heading: "Sambungan akhir ke Legian", body: "Konfirmasikan apakah sambungan yang sesuai benar-benar tersedia menuju Jalan Legian. Jangan menganggap ada rute langsung dari terminal ke monumen.", bullets: ["Cek rute resmi hari perjalanan.", "Konfirmasi titik turun terdekat.", "Siapkan opsi cadangan seperti aplikasi transportasi."] }
      ],
      faqs: [
        { q: "Apakah ada bus langsung ke monumen?", a: "Panduan tidak menjamin rute langsung. Verifikasi jaringan angkutan umum aktif pada hari perjalanan." },
        { q: "Aplikasi transportasi tersedia?", a: "Tersedia secara umum di Bali, tetapi tarif dan ketersediaan berubah; konfirmasikan sebelum memesan." },
        { q: "Bagaimana jika angkutan tidak tersedia?", a: "Gunakan penyedia lain yang diverifikasi dan sepakati titik turun di Jalan Legian." }
      ]
    }
  },
  {
    slug: "parkir-sekitar-kuta",
    group: "transportasi",
    id: {
      title: "Parkir di Sekitar Kuta & Legian",
      metaTitle: "Parkir di Sekitar Kuta & Legian: Verifikasi Sebelum Membawa Kendaraan",
      metaDescription: "Parkir khusus monumen belum terkonfirmasi; tanyakan lokasi legal, tarif, dan akses pejalan kaki.",
      kicker: "Transportasi",
      lead: "Monumen berada di koridor jalan yang aktif. Parkir khusus belum panduan verifikasi; rencanakan lebih dahulu.",
      updated: UPDATED,
      facts: [["Parkir monumen", "Belum terkonfirmasi"], ["Kawasan", "Kuta & Legian"], ["Tarif", "Verifikasi"], ["Legalitas", "Cek penyedia"]],
      sections: [
        { heading: "Tidak ada parkir khusus monumen", body: "Parkir khusus memorial belum terkonfirmasi. Tanyakan lokasi parkir legal dan kondisi jalur akhir sebelum membawa kendaraan; patuhi rambu dan jangan berhenti di lajur lalu lintas." },
        { heading: "Gunakan parkir umum terdekat", body: "Kawasan Kuta dan Legian memiliki beberapa area parkir umum, tetapi lokasi, tarif, dan ketersediaan berubah. Verifikasi dengan penyedia setempat.", bullets: ["Tanyakan lokasi parkir legal.", "Konfirmasi tarif per jam atau harian.", "Perhatikan jalur pejalan kaki ke monumen."] }
      ],
      faqs: [
        { q: "Apakah ada parkir di monumen?", a: "Tidak ada parkir khusus yang diverifikasi. Gunakan parkir umum terdekat dan verifikasi akses pejalan kaki." },
        { q: "Berapa tarif parkir?", a: "Tarif bervariasi; tanyakan kepada penyedia parkir setempat sebelum memarkir." },
        { q: "Boleh berhenti sebentar?", a: "Hindari berhenti di lajur sibuk. Gunakan titik turun yang aman dan parkir legal terdekat." }
      ]
    }
  },
  {
    slug: "sewa-kendaraan-kuta",
    group: "transportasi",
    id: {
      title: "Sewa Kendaraan di Kuta",
      metaTitle: "Sewa Mobil & Motor di Kuta: Catatan Praktis",
      metaDescription: "Sewa kendaraan di Kuta tersedia, tetapi lisensi, asuransi, dan parkir perlu diverifikasi sendiri.",
      kicker: "Transportasi",
      lead: "Banyak penyedia sewa mobil dan motor beroperasi di Kuta. Verifikasi lisensi, asuransi, dan aturan sebelum menyewa.",
      updated: UPDATED,
      facts: [["Jenis", "Mobil & motor"], ["Lisensi", "Verifikasi"], ["Asuransi", "Cek polis"], ["Parkir", "Lihat halaman parkir"]],
      sections: [
        { heading: "Verifikasi penyedia", body: "Pilih penyedia sewa yang memiliki lisensi dan kebijakan asuransi jelas. Panduan tidak merekomendasikan penyedia tertentu; verifikasi sendiri." },
        { heading: "Siapkan parkir dan rambu", body: "Jika menyewa kendaraan, rencanakan parkir legal dan patuhi rambu lalu lintas di sekitar Jalan Legian.", bullets: ["Periksa lisensi mengemudi internasional jika perlu.", "Pahami polis asuransi sebelum menyetujui.", "Gunakan parkir legal dan hindari lajur sibuk."] }
      ],
      faqs: [
        { q: "Di mana menyewa kendaraan?", a: "Banyak penyedia di Kuta; verifikasi lisensi dan ulasan secara mandiri sebelum menyewa." },
        { q: "Apakah perlu lisensi internasional?", a: "Umumnya ya untuk pengunjung asing. Verifikasi persyaratan resmi sebelum mengemudi." },
        { q: "Bagaimana soal parkir?", a: "Lihat halaman parkir sekitar Kuta; panduan tidak menjamin ketersediaan parkir khusus monumen." }
      ]
    }
  },
  {
    slug: "pantai-kuta",
    group: "sekitar",
    id: {
      title: "Pantai Kuta: Pantai Terdekat dari Monumen",
      metaTitle: "Pantai Kuta Dekat Monumen Ground Zero Bali",
      metaDescription: "Pantai Kuta sebagai tujuan terpisah dari monumen; cara verifikasi akses, jarak, dan kondisi pantai.",
      kicker: "Kawasan Sekitar",
      lead: "Pantai Kuta adalah pantai publik yang sering dipertimbangkan setelah mengunjungi monumen. Ini tujuan terpisah, bukan bagian memorial.",
      updated: UPDATED,
      facts: [["Jenis", "Pantai publik"], ["Jarak", "Beberapa menit jalan"], ["Akses", "Verifikasi peta"], ["Sumber", "Indonesia.travel"]],
      sections: [
        { heading: "Tujuan terpisah", body: "Indonesia.travel mencantumkan Pantai Kuta sebagai tujuan tersendiri. Jika ingin menambah kunjungan, periksa alamat, kondisi akses, dan rute secara terpisah; tidak ada jalur langsung dari memorial yang kami pastikan." },
        { heading: "Dari monumen ke pantai", body: "Pantai Kuta berada beberapa menit berjalan kaki dari Jalan Legian, tergantung titik awal. Gunakan peta untuk rute dan verifikasi kondisi setempat.", bullets: ["Verifikasi jarak dari titik monumen.", "Periksa kondisi pantai hari itu.", "Siapkan kebutuhan dasar secara mandiri."] }
      ],
      faqs: [
        { q: "Apakah Pantai Kuta termasuk monumen?", a: "Tidak. Pantai Kuta adalah tujuan terpisah yang perlu diperiksa alamat dan aksesnya sendiri." },
        { q: "Berapa jauh dari monumen?", a: "Beberapa menit berjalan kaki dari Jalan Legian, tergantung titik awal; verifikasi dengan peta." },
        { q: "Apakah ada tiket masuk?", a: "Pantai publik umumnya tanpa tiket, tetapi fasilitas pantai berbeda; verifikasi dengan penyedia setempat." }
      ]
    },
    en: {
      title: "Kuta Beach: The Nearest Beach to the Memorial",
      metaTitle: "Kuta Beach Near Bali Ground Zero Memorial",
      metaDescription: "Kuta Beach as a separate destination from the memorial; how to verify access, distance, and beach conditions.",
      kicker: "Around the Area",
      lead: "Kuta Beach is a public beach often considered after visiting the memorial. It is a separate destination, not part of the memorial.",
      updated: "28 October 2026",
      facts: [["Type", "Public beach"], ["Distance", "A few minutes walk"], ["Access", "Verify on map"], ["Source", "Indonesia.travel"]],
      sections: [
        { heading: "A separate destination", body: "Indonesia.travel lists Kuta Beach as its own destination. If you want to add a visit, check the address, access conditions, and route separately; we confirm no direct path from the memorial." },
        { heading: "From the memorial to the beach", body: "Kuta Beach is a few minutes' walk from Jalan Legian, depending on the starting point. Use a map for the route and verify local conditions.", bullets: ["Verify distance from the memorial point.", "Check beach conditions that day.", "Prepare basic needs yourself."] }
      ],
      faqs: [
        { q: "Is Kuta Beach part of the memorial?", a: "No. Kuta Beach is a separate destination that needs its own address and access check." },
        { q: "How far from the memorial?", a: "A few minutes' walk from Jalan Legian, depending on the start point; verify on the map." },
        { q: "Is there an entry ticket?", a: "Public beaches are generally free, but facilities differ; verify with local providers." }
      ]
    }
  },
  {
    slug: "pantai-legian",
    group: "sekitar",
    id: {
      title: "Pantai Legian: Lanjutan dari Kuta",
      metaTitle: "Pantai Legian Bali: Dekat Monumen Ground Zero",
      metaDescription: "Pantai Legian sebagai tujuan terpisah dari monumen; verifikasi akses dan jarak dari Jalan Legian.",
      kicker: "Kawasan Sekitar",
      lead: "Pantai Legian berada di utara Pantai Kuta dan sering dipertimbangkan sebagai tujuan terpisah setelah monumen.",
      updated: UPDATED,
      facts: [["Jenis", "Pantai publik"], ["Posisi", "Utara Kuta"], ["Akses", "Verifikasi"], ["Jalur", "Tidak dijamin"]],
      sections: [
        { heading: "Bukan bagian memorial", body: "Pantai Legian adalah calon tujuan terpisah. Konfirmasikan titik tujuan, akses, dan kondisi perjalanan sendiri; kedekatan nama tidak menjamin hubungan jalan kaki atau izin masuk." },
        { heading: "Menghubungkan dari monumen", body: "Pantai Legian dapat dijangkau dengan berjalan di koridor pantai dari Kuta atau dengan kendaraan. Verifikasi rute dengan peta.", bullets: ["Periksa akses pantai hari itu.", "Verifikasi jarak tempuh.", "Jangan asumsikan koridor langsung."] }
      ],
      faqs: [
        { q: "Apakah sama dengan Pantai Kuta?", a: "Tidak. Pantai Legian terpisah namun berdekatan; periksa masing-masing alamat dan akses." },
        { q: "Bagaimana ke sana dari monumen?", a: "Berjalan di koridor pantai atau kendaraan; verifikasi rute dengan peta." },
        { q: "Apakah gratis?", a: "Pantai publik umumnya tanpa tiket, tetapi fasilitas berbeda; verifikasi setempat." }
      ]
    }
  },
  {
    slug: "beachwalk-kuta",
    group: "sekitar",
    id: {
      title: "Beachwalk Kuta: Pusat Belanja Terdekat",
      metaTitle: "Beachwalk Shopping Center Kuta: Dekat Monumen",
      metaDescription: "Beachwalk sebagai pusat belanja di Kuta; verifikasi jam, toko, dan akses dari Jalan Legian.",
      kicker: "Kawasan Sekitar",
      lead: "Beachwalk Shopping Center adalah pusat belanja di tepi Pantai Kuta, sering dipertimbangkan setelah mengunjungi monumen.",
      updated: UPDATED,
      facts: [["Jenis", "Mal & F&B"], ["Lokasi", "Tepi Pantai Kuta"], ["Jam", "Verifikasi"], ["Akses", "Verifikasi peta"]],
      sections: [
        { heading: "Tujuan terpisah", body: "Beachwalk adalah pusat belanja dengan toko dan restoran. Jam layanan, daftar tenant, dan akses berubah; verifikasi dengan sumber resmi mal tersebut." },
        { heading: "Dari monumen", body: "Beachwalk berada di koridor Kuta dekat pantai. Gunakan peta untuk rute dan periksa jam buka resmi sebelum berangkat.", bullets: ["Verifikasi jam operasional resmi.", "Periksa akses dari Jalan Legian.", "Siapkan kebutuhan sendiri."] }
      ],
      faqs: [
        { q: "Apakah Beachwalk dekat monumen?", a: "Berada di koridor Kuta dekat pantai; verifikasi jarak dengan peta dari Jalan Legian." },
        { q: "Jam buka Beachwalk?", a: "Berubah menurut kebijakan mal; verifikasi jam resmi sebelum berangkat." },
        { q: "Apakah gratis masuk?", a: "Akses mal umumnya bebas, tetapi toko dan restoran memiliki ketentuan sendiri; verifikasi." }
      ]
    }
  },
  {
    slug: "waterbom-bali",
    group: "sekitar",
    id: {
      title: "Waterbom Bali: Taman Air di Kuta",
      metaTitle: "Waterbom Bali Kuta: Lokasi & Verifikasi Tiket",
      metaDescription: "Waterbom Bali sebagai taman air berbayar di Kuta; verifikasi tiket, jam, dan akses dari monumen.",
      kicker: "Kawasan Sekitar",
      lead: "Waterbom Bali adalah taman air berbayar di koridor Kuta, sering dipertimbangkan sebagai tujuan keluarga terpisah.",
      updated: UPDATED,
      facts: [["Jenis", "Taman air berbayar"], ["Lokasi", "Kuta"], ["Tiket", "Verifikasi resmi"], ["Jam", "Verifikasi"]],
      sections: [
        { heading: "Tujuan berbayar terpisah", body: "Waterbom Bali adalah atraksi berbayar dengan tiket sendiri. Harga, jam, dan ketersediaan berubah; verifikasi melalui saluran resmi atraksi tersebut." },
        { heading: "Dari monumen", body: "Berada di koridor Kuta; gunakan peta untuk rute dan periksa ketersediaan tiket resmi sebelum berangkat.", bullets: ["Verifikasi harga tiket resmi.", "Periksa jam operasional.", "Siapkan perlengkapan sendiri."] }
      ],
      faqs: [
        { q: "Berapa harga tiket Waterbom?", a: "Berubah menurut kebijakan resmi; verifikasi melalui saluran resmi atraksi." },
        { q: "Apakah dekat monumen?", a: "Di koridor Kuta; verifikasi jarak dari Jalan Legian dengan peta." },
        { q: "Cocok untuk anak?", a: "Umumnya ya sebagai taman air, tetapi verifikasi fasilitas dan usia dengan pengelola resmi." }
      ]
    }
  },
  {
    slug: "jalan-legian",
    group: "sekitar",
    id: {
      title: "Jalan Legian: Koridor Memori & Wisata",
      metaTitle: "Jalan Legian Kuta: Koridor di Sekitar Monumen",
      metaDescription: "Jalan Legian sebagai koridor tempat monumen berada; memahami perubahan Kuta sebagai ruang wisata dan memori.",
      kicker: "Kawasan Sekitar",
      lead: "Monumen berada di Jalan Legian, koridor yang memperlihatkan perubahan Kuta sebagai ruang wisata, kerja, dan memori.",
      updated: UPDATED,
      facts: [["Peran", "Koridor monumen"], ["Kawasan", "Kuta"], ["Lalu lintas", "Aktif"], ["Akses", "Verifikasi"]],
      sections: [
        { heading: "Ruang ganda", body: "Jalan Legian adalah sekaligus ruang memori dan ruang wisata yang aktif. Beri jarak pada aktivitas lokal, rambu, serta pergerakan pejalan kaki saat mengenang." },
        { heading: "Bergerak di koridor", body: "Koridor ini menghubungkan monumen ke Pantai Kuta dan Beachwalk. Gunakan trotoar dan verifikasi titik turun kendaraan yang aman.", bullets: ["Gunakan trotoar yang tersedia.", "Hindari lajur sibuk.", "Verifikasi akses pejalan kaki."] }
      ],
      faqs: [
        { q: "Di mana letak monumen di Jalan Legian?", a: "Di tepi koridor Jalan Legian, Kuta. Koordinat -8.7172698, 115.17449." },
        { q: "Apakah ramai?", a: "Koridor ini aktif; keramaian bervariasi menurut waktu. Verifikasi kondisi setempat." },
        { q: "Bagaimana menuju pantai dari sini?", a: "Berjalan di koridor menuju Pantai Kuta; verifikasi rute dengan peta." }
      ]
    }
  },
  {
    slug: "poppies-lane",
    group: "sekitar",
    id: {
      title: "Poppies Lane: Gang Kuta yang Tenang",
      metaTitle: "Poppies Lane Kuta: Gang Dekat Monumen Ground Zero",
      metaDescription: "Poppies Lane I & II sebagai jalan kecil di Kuta dengan penginapan dan kuliner; verifikasi akses dan jarak.",
      kicker: "Kawasan Sekitar",
      lead: "Poppies Lane I dan II adalah gang kecil di Kuta yang dikenal dengan penginapan dan tempat makan, dekat dengan koridor Legian.",
      updated: UPDATED,
      facts: [["Jenis", "Gang lokal"], ["Kawasan", "Kuta"], ["Isi", "Penginapan & kuliner"], ["Akses", "Verifikasi"]],
      sections: [
        { heading: "Lorong di tengah Kuta", body: "Poppies Lane adalah jalan kecil yang menghubungkan koridor utama Kuta. Banyak penginapan dan tempat makan berada di sini, tetapi daftar dan kondisi berubah; verifikasi sendiri." },
        { heading: "Menghubungkan dari monumen", body: "Gang ini dapat dijangkau dengan berjalan kaki dari Jalan Legian. Gunakan peta untuk rute dan verifikasi kondisi setempat.", bullets: ["Verifikasi daftar tempat secara mandiri.", "Periksa jarak tempuh dari monumen.", "Waspadai gang sempit untuk kendaraan."] }
      ],
      faqs: [
        { q: "Apa itu Poppies Lane?", a: "Jalan kecil di Kuta dengan penginapan dan kuliner, dekat koridor Legian." },
        { q: "Berapa jauh dari monumen?", a: "Beberapa menit berjalan kaki dari Jalan Legian; verifikasi dengan peta." },
        { q: "Cocok untuk menginap?", a: "Banyak pilihan penginapan, tetapi verifikasi ulasan dan harga sendiri sebelum memesan." }
      ]
    }
  },
  {
    slug: "makan-minum-kuta",
    group: "kuliner",
    id: {
      title: "Makan & Minum di Sekitar Kuta",
      metaTitle: "Makan & Minum di Sekitar Kuta: Catatan Praktis",
      metaDescription: "Kuliner di Kuta beragam; panduan tidak merekomendasikan tempat tertentu, verifikasi sendiri alamat dan jam.",
      kicker: "Kuliner & Menginap",
      lead: "Kawasan Kuta menawarkan berbagai pilihan makan dan minum. Panduan ini tidak merekomendasikan pelaku usaha tertentu.",
      updated: UPDATED,
      facts: [["Pilihan", "Beragam"], ["Rekomendasi", "Tidak ada"], ["Jam", "Verifikasi"], ["Harga", "Bervariasi"]],
      sections: [
        { heading: "Tidak ada rekomendasi tertentu", body: "Panduan ini hanya menyebut kategori kebutuhan secara netral dan tidak merekomendasikan pelaku usaha tertentu. Verifikasi alamat, jam layanan, dan harga secara mandiri." },
        { heading: "Cara memilih", body: "Gunakan sumber ulasan publik dan verifikasi lokasi serta jam sebelum datang. Jangan mengandalkan informasi yang sudah lama.", bullets: ["Periksa jam layanan hari itu.", "Verifikasi alamat dengan peta.", "Bandingkan harga secara mandiri."] }
      ],
      faqs: [
        { q: "Di mana tempat makan terbaik?", a: "Panduan tidak merekomendasikan tempat tertentu. Gunakan ulasan publik dan verifikasi sendiri." },
        { q: "Apakah dekat monumen?", a: "Banyak pilihan di koridor Kuta dan Legian; verifikasi jarak dengan peta." },
        { q: "Apakah aman makan di Kuta?", a: "Kuta adalah kawasan wisata yang beroperasi; verifikasi penyedia secara mandiri." }
      ]
    }
  },
  {
    slug: "kedai-kopi-kuta",
    group: "kuliner",
    id: {
      title: "Kedai Kopi di Sekitar Kuta",
      metaTitle: "Kedai Kopi Kuta: Catatan Praktis",
      metaDescription: "Kedai kopi di Kuta beragam; verifikasi alamat, jam, dan harga secara mandiri tanpa rekomendasi tertentu.",
      kicker: "Kuliner & Menginap",
      lead: "Banyak kedai kopi beroperasi di koridor Kuta dan Legian. Panduan tidak merekomendasikan tempat tertentu.",
      updated: UPDATED,
      facts: [["Jenis", "Kopi & kafe"], ["Rekomendasi", "Tidak ada"], ["Jam", "Verifikasi"], ["Lokasi", "Kuta & Legian"]],
      sections: [
        { heading: "Netral dan terverifikasi", body: "Panduan menyebut kategori kopi secara netral. Verifikasi alamat, jam layanan, dan harga dengan sumber mandiri sebelum datang." },
        { heading: "Istirahat singkat", body: "Kedai kopi dapat menjadi tempat istirahat setelah mengenang di monumen. Pilih berdasarkan ulasan publik dan verifikasi lokasi.", bullets: ["Periksa jam buka.", "Verifikasi alamat dengan peta.", "Bandingkan harga secara mandiri."] }
      ],
      faqs: [
        { q: "Kedai kopi mana yang terbaik?", a: "Panduan tidak merekomendasikan tertentu. Gunakan ulasan publik dan verifikasi sendiri." },
        { q: "Apakah dekat monumen?", a: "Beberapa berada di koridor Kuta dan Legian; verifikasi jarak dengan peta." },
        { q: "Apakah ada kopi lokal?", a: "Bali memiliki kopi lokal, tetapi ketersediaan bervariasi; verifikasi dengan penyedia." }
      ]
    }
  },
  {
    slug: "penginapan-sekitar-kuta",
    group: "kuliner",
    id: {
      title: "Penginapan di Sekitar Kuta",
      metaTitle: "Penginapan Sekitar Kuta: Verifikasi Sendiri",
      metaDescription: "Penginapan di Kuta beragam; panduan tidak merekomendasikan hotel tertentu, verifikasi ulasan dan harga.",
      kicker: "Kuliner & Menginap",
      lead: "Kuta menawarkan banyak pilihan penginapan. Panduan ini tidak merekomendasikan properti tertentu.",
      updated: UPDATED,
      facts: [["Pilihan", "Beragam"], ["Rekomendasi", "Tidak ada"], ["Harga", "Bervariasi"], ["Verifikasi", "Ulasan mandiri"]],
      sections: [
        { heading: "Pilih secara mandiri", body: "Periksa alamat, akses dari Jalan Legian, harga, dan ulasan secara mandiri. Panduan tidak menjamin layanan atau jalur dari penginapan ke monumen." },
        { heading: "Dekat dengan monumen?", body: "Banyak penginapan berada di koridor Kuta dan Legian. Verifikasi jarak dan rute dengan peta sebelum memesan.", bullets: ["Verifikasi ulasan publik.", "Periksa akses dari monumen.", "Konfirmasi harga dan kebijakan pembatalan."] }
      ],
      faqs: [
        { q: "Hotel mana yang dekat monumen?", a: "Panduan tidak merekomendasikan tertentu. Gunakan peta dan ulasan untuk memilih." },
        { q: "Berapa jarak ke monumen?", a: "Bervariasi; verifikasi dengan peta dari alamat penginapan." },
        { q: "Apakah aman menginap di Kuta?", a: "Kuta adalah kawasan wisata yang beroperasi; verifikasi properti secara mandiri." }
      ]
    }
  },
  {
    slug: "rute-jalan-kaki-kuta",
    group: "rute",
    id: {
      title: "Rute Jalan Kaki di Kuta",
      metaTitle: "Rute Jalan Kaki Kuta: Monumen ke Pantai",
      metaDescription: "Rute berjalan kaki dari monumen ke Pantai Kuta dan Legian; verifikasi jarak dan kondisi trotoar.",
      kicker: "Rute & Itinerari",
      lead: "Jika ingin bergerak tanpa kendaraan, koridor Kuta memungkinkan jalan kaki dari monumen ke pantai.",
      updated: UPDATED,
      facts: [["Rute", "Monumen–Pantai"], ["Kondisi", "Verifikasi"], ["Jarak", "Beberapa menit"], ["Trotoar", "Bervariasi"]],
      sections: [
        { heading: "Monumen ke Pantai Kuta", body: "Dari Jalan Legian, Anda dapat berjalan menuju Pantai Kuta. Waktu dan jarak bervariasi menurut titik awal; gunakan peta dan verifikasi trotoar." },
        { heading: "Lanjut ke Legian", body: "Dari Pantai Kuta, koridor pantai dapat dilanjutkan ke arah Legian. Verifikasi kondisi jalur dan hindari berjalan di lajur kendaraan.", bullets: ["Gunakan trotoar yang tersedia.", "Verifikasi jarak dengan peta.", "Bawa air minum."] }
      ],
      faqs: [
        { q: "Berapa lama jalan ke pantai?", a: "Beberapa menit dari Jalan Legian, tergantung titik awal; verifikasi dengan peta." },
        { q: "Apakah aman jalan kaki?", a: "Koridor Kuta aktif; gunakan trotoar dan verifikasi kondisi setempat." },
        { q: "Boleh lanjut ke Legian?", a: "Ya, melalui koridor pantai; verifikasi rute dan kondisi jalur." }
      ]
    }
  },
  {
    slug: "itinerary-setengah-hari",
    group: "rute",
    id: {
      title: "Itinerari Setengah Hari dari Monumen",
      metaTitle: "Itinerari Setengah Hari Monumen Ground Zero Bali",
      metaDescription: "Rencana setengah hari: mengenang di monumen lalu melanjutkan ke Pantai Kuta atau kuliner, dengan verifikasi.",
      kicker: "Rute & Itinerari",
      lead: "Jika waktu terbatas, rencanakan setengah hari yang dimulai dari penghormatan di monumen.",
      updated: UPDATED,
      facts: [["Durasi", "Setengah hari"], ["Mulai", "Monumen"], ["Lanjutan", "Pantai/Kuliner"], ["Verifikasi", "Di lokasi"]],
      sections: [
        { heading: "Contoh alur", body: "Mulailah dengan waktu tenang di monumen, lalu berjalan ke Pantai Kuta atau mencari kuliner di koridor Kuta. Ini contoh, bukan jadwal tetap; verifikasi akses setiap tujuan." },
        { heading: "Fleksibel dan hormat", body: "Sesuaikan dengan kondisi cuaca, lalu lintas, dan akses. Jangan memaksakan durasi jika monumen sedang digunakan untuk peringatan.", bullets: ["Waktu tenang di monumen.", "Berjalan ke Pantai Kuta atau kuliner.", "Verifikasi akses setiap tujuan."] }
      ],
      faqs: [
        { q: "Cukupkah setengah hari?", a: "Ya untuk monumen dan satu tujuan terdekat. Sesuaikan dengan akses yang diverifikasi." },
        { q: "Ke mana lanjut?", a: "Pantai Kuta, kuliner koridor Kuta, atau Beachwalk; verifikasi masing-masing." },
        { q: "Bagaimana cuaca?", a: "Cek prakiraan resmi hari perjalanan." }
      ]
    }
  },
  {
    slug: "itinerary-sehari",
    group: "rute",
    id: {
      title: "Itinerari Sehari di Kuta",
      metaTitle: "Itinerari Sehari Monumen Ground Zero Bali & Kuta",
      metaDescription: "Rencana sehari: monumen, pantai, kuliner, dan pusat belanja di Kuta dengan verifikasi mandiri.",
      kicker: "Rute & Itinerari",
      lead: "Hari penuh di Kuta dapat menggabungkan penghormatan, pantai, kuliner, dan pusat belanja secara fleksibel.",
      updated: UPDATED,
      facts: [["Durasi", "Sehari"], ["Cakupan", "Monumen & Kuta"], ["Gaya", "Fleksibel"], ["Verifikasi", "Setiap tujuan"]],
      sections: [
        { heading: "Contoh alur sehari", body: "Mulai dari monumen di pagi atau siang yang tenang, lanjut ke Pantai Kuta, lalu kuliner, dan ditutup dengan Beachwalk atau Poppies Lane. Ini contoh, bukan jadwal tetap." },
        { heading: "Verifikasi setiap tahap", body: "Jam, akses, dan ketersediaan berubah. Verifikasi masing-masing tujuan dan ikuti kondisi setempat.", bullets: ["Monumen di waktu tenang.", "Pantai dan kuliner terpisah.", "Beachwalk/Poppies sebagai penutup."] }
      ],
      faqs: [
        { q: "Apakah cukup satu hari?", a: "Ya untuk monumen dan kawasan Kuta terdekat; sesuaikan dengan akses." },
        { q: "Haruskah pesan tur?", a: "Tidak wajib. Panduan tidak merekomendasikan tur tertentu; atur secara mandiri." },
        { q: "Bagaimana mengelola waktu?", a: "Verifikasi akses tiap tujuan dan hindari memaksakan durasi." }
      ]
    },
    en: {
      title: "A Full Day in Kuta",
      metaTitle: "Full-Day Itinerary: Bali Ground Zero Memorial & Kuta",
      metaDescription: "A one-day plan: memorial, beach, food, and shopping in Kuta, with self-verification.",
      kicker: "Routes & Itineraries",
      lead: "A full day in Kuta can combine remembrance, beach, food, and shopping in a flexible way.",
      updated: "28 October 2026",
      facts: [["Duration", "One day"], ["Scope", "Memorial & Kuta"], ["Style", "Flexible"], ["Verify", "Each stop"]],
      sections: [
        { heading: "Sample day flow", body: "Start at the memorial in a quiet morning or midday, continue to Kuta Beach, then food, and end with Beachwalk or Poppies Lane. This is a sample, not a fixed schedule." },
        { heading: "Verify each stage", body: "Hours, access, and availability change. Verify each destination and follow local conditions.", bullets: ["Memorial in quiet time.", "Beach and food are separate.", "Beachwalk/Poppies as a close."] }
      ],
      faqs: [
        { q: "Is one day enough?", a: "Yes for the memorial and nearby Kuta; adjust to verified access." },
        { q: "Should I book a tour?", a: "Not required. This guide recommends no specific tour; arrange it yourself." },
        { q: "How do I manage time?", a: "Verify each destination's access and avoid forcing a fixed duration." }
      ]
    }
  },
  {
    slug: "itinerary-keluarga-kuta",
    group: "rute",
    id: {
      title: "Itinerari Keluarga di Kuta",
      metaTitle: "Itinerari Keluarga Monumen & Kuta",
      metaDescription: "Rencana ramah keluarga: monumen singkat, pantai, dan taman air, dengan penyesuaian anak.",
      kicker: "Rute & Itinerari",
      lead: "Keluarga dapat mengunjungi monumen secara singkat dan melanjutkan ke tempat yang ramah anak di Kuta.",
      updated: UPDATED,
      facts: [["Cocok", "Keluarga"], ["Monumen", "Singkat & hormat"], ["Lanjutan", "Pantai/Air"], ["Verifikasi", "Setiap tujuan"]],
      sections: [
        { heading: "Ajarkan penghormatan", body: "Gunakan monumen sebagai kesempatan mengajarkan ketenangan dan empati kepada anak, secara singkat agar tidak melelahkan." },
        { heading: "Lanjut ke tempat ramah anak", body: "Pantai Kuta atau Waterbom dapat menjadi lanjutan. Verifikasi fasilitas dan usia dengan pengelola masing-masing.", bullets: ["Kunjungan monumen singkat.", "Siapkan kebutuhan anak.", "Verifikasi fasilitas anak."] }
      ],
      faqs: [
        { q: "Apakah anak boleh ikut?", a: "Ya, dengan pengawasan dan ajaran menghormati ruang memori." },
        { q: "Ke mana lanjut?", a: "Pantai Kuta atau Waterbom; verifikasi fasilitas anak dengan pengelola." },
        { q: "Apakah aman?", a: "Kuta beroperasi sebagai kawasan wisata; verifikasi tempat secara mandiri." }
      ]
    }
  },
  {
    slug: "sunset-kuta",
    group: "sekitar",
    id: {
      title: "Sunset di Pantai Kuta",
      metaTitle: "Sunset di Pantai Kuta: Dekat Monumen",
      metaDescription: "Waktu matahari terbenam di Pantai Kuta; verifikasi jam dan kondisi pantai secara mandiri.",
      kicker: "Kawasan Sekitar",
      lead: "Pantai Kuta dikenal dengan pemandangan matahari terbenam. Ini tujuan terpisah dari monumen.",
      updated: UPDATED,
      facts: [["Jenis", "Pantai"], ["Aktivitas", "Sunset"], ["Jam", "Verifikasi"], ["Akses", "Terpisah"]],
      sections: [
        { heading: "Bukan bagian monumen", body: "Sunset di Pantai Kuta adalah aktivitas pantai terpisah. Verifikasi jam terbenam resmi hari itu dan kondisi pantai sebelum datang." },
        { heading: "Menghubungkan", body: "Setelah monumen, Anda dapat berjalan atau menggunakan kendaraan ke Pantai Kuta. Verifikasi rute dengan peta.", bullets: ["Cek jam terbenam resmi.", "Periksa kondisi pantai.", "Jangan campuradukkan dengan monumen."] }
      ],
      faqs: [
        { q: "Jam berapa sunset?", a: "Bervariasi; cek jam terbenam resmi hari perjalanan." },
        { q: "Apakah dekat monumen?", a: "Pantai Kuta beberapa menit dari Jalan Legian; verifikasi dengan peta." },
        { q: "Apakah gratis?", a: "Pantai publik umumnya bebas; fasilitas berbeda, verifikasi setempat." }
      ]
    }
  },
  {
    slug: "keamanan-perjalanan-bali",
    group: "konteks",
    id: {
      title: "Keamanan Perjalanan Bali",
      metaTitle: "Keamanan Perjalanan Bali: Catatan Netral",
      metaDescription: "Panduan netral tentang keamanan perjalanan Bali; verifikasi dengan sumber resmi, bukan klaim situs.",
      kicker: "Konteks",
      lead: "Bali adalah destinasi wisata yang beroperasi. Panduan ini memberikan catatan netral, bukan jaminan keamanan.",
      updated: UPDATED,
      facts: [["Pandangan", "Netral"], ["Sumber", "Resmi"], ["Verifikasi", "Wajib"], ["Konteks", "Pasca-2002"]],
      sections: [
        { heading: "Ambil dari sumber resmi", body: "Untuk kondisi keamanan saat ini, gunakan imbauan perjalanan resmi dari otoritas negara Anda dan informasi pemerintah Indonesia. Panduan ini tidak menjanjikan keamanan tertentu." },
        { heading: "Praktik umum", body: "Seperti bepergian ke mana pun, jaga barang, gunakan transportasi terverifikasi, dan pantau kondisi setempat.", bullets: ["Cek imbauan resmi sebelum berangkat.", "Gunakan transportasi terverifikasi.", "Pantau kondisi setempat."] }
      ],
      faqs: [
        { q: "Apakah Bali aman?", a: "Bali beroperasi sebagai destinasi wisata. Untuk status saat ini, ikuti sumber resmi, bukan klaim situs ini." },
        { q: "Apakah monumen aman dikunjungi?", a: "Kuta adalah kawasan wisata yang aktif; verifikasi kondisi setempat dan ikuti petunjuk resmi." },
        { q: "Peristiwa 2002 masih relevan?", a: "Secara sejarah ya sebagai memori; untuk keamanan saat ini, gunakan sumber resmi." }
      ]
    },
    en: {
      title: "Bali Travel Safety",
      metaTitle: "Bali Travel Safety: A Neutral Note",
      metaDescription: "A neutral note on Bali travel safety; verify with official sources, not this site's claims.",
      kicker: "Context",
      lead: "Bali is an operating tourist destination. This guide offers a neutral note, not a safety guarantee.",
      updated: "28 October 2026",
      facts: [["Stance", "Neutral"], ["Source", "Official"], ["Verify", "Required"], ["Context", "Post-2002"]],
      sections: [
        { heading: "Take it from official sources", body: "For current safety conditions, use official travel advisories from your country and Indonesian government information. This guide promises no specific safety." },
        { heading: "General practice", body: "As when travelling anywhere, watch your belongings, use verified transport, and monitor local conditions.", bullets: ["Check official advisories before leaving.", "Use verified transport.", "Monitor local conditions."] }
      ],
      faqs: [
        { q: "Is Bali safe?", a: "Bali operates as a tourist destination. For current status, follow official sources, not this site's claims." },
        { q: "Is the memorial safe to visit?", a: "Kuta is an active tourist area; verify local conditions and follow official guidance." },
        { q: "Is the 2002 event still relevant?", a: "Historically yes as memory; for current safety, use official sources." }
      ]
    }
  },
  {
    slug: "peringatan-12-oktober",
    group: "konteks",
    id: {
      title: "Peringatan 12 Oktober: Memori Tahunan",
      metaTitle: "Peringatan 12 Oktober Bom Bali: Catatan Memori",
      metaDescription: "Laporan doa bersama 12 Oktober 2026 adalah catatan masa lalu, bukan jadwal acara rutin atau akses khusus.",
      kicker: "Konteks",
      lead: "Tanggal 12 Oktober diperingati sebagai hari mengenang tragedi 2002. Laporan kegiatan tertentu adalah catatan masa lalu.",
      updated: UPDATED,
      facts: [["Tanggal", "12 Oktober"], ["Laporan", "Doa 2026"], ["Status", "Catatan lalu"], ["Akses", "Tidak dijanjikan"]],
      sections: [
        { heading: "Catatan, bukan jadwal", body: "Pemerintah Kabupaten Badung melaporkan doa lintas agama pada 12 Oktober 2026. Itu catatan kegiatan yang telah berlangsung, bukan jaminan acara rutin atau akses pada tanggal mendatang." },
        { heading: "Menghormati secara pribadi", body: "Pengunjung dapat memberi penghormatan secara pribadi kapan saja dengan sikap tenang, tanpa mengandalkan acara tertentu.", bullets: ["Jaga ketenangan saat berkunjung.", "Jangan asumsikan acara rutin.", "Verifikasi jika datang pada tanggal tertentu."] }
      ],
      faqs: [
        { q: "Apakah ada acara setiap 12 Oktober?", a: "Panduan tidak menjanjikan acara rutin. Laporan doa 2026 adalah catatan masa lalu." },
        { q: "Boleh datang pada 12 Oktober?", a: "Ya, dengan sikap menghormati; verifikasi kondisi setempat karena mungkin ada kegiatan." },
        { q: "Apakah akses berubah saat peringatan?", a: "Mungkin; verifikasi di lokasi dan ikuti petunjuk pengelola setempat." }
      ]
    }
  },
  {
    slug: "koordinat-dan-lokasi",
    group: "konteks",
    id: {
      title: "Koordinat & Cara Berbagi Lokasi",
      metaTitle: "Koordinat Monumen Ground Zero Bali & Cara ke Pengemudi",
      metaDescription: "Cara menyebutkan alamat dan koordinat monumen ke pengemudi; plus code dan pin peta terverifikasi.",
      kicker: "Konteks",
      lead: "Untuk mencapai monumen, sebutkan alamat lengkap atau tunjukkan koordinat kepada pengemudi.",
      updated: UPDATED,
      facts: [["Alamat", "Jalan Legian, Kuta"], ["Koordinat", "-8.7172698, 115.17449"], ["Plus Code", "75MF+3Q Kuta"], ["Peta", "Google Maps"]],
      sections: [
        { heading: "Alamat lengkap", body: "Sebutkan kepada pengemudi: Monumen Ground Zero Bali, Jalan Legian, Kuta, Kabupaten Badung, Bali 80361. Pastikan mereka memahami bahwa monumen ada di Kuta, bukan Denpasar." },
        { heading: "Gunakan koordinat", body: "Jika ragu, tunjukkan koordinat -8.7172698, 115.17449 atau plus code 75MF+3Q Kuta kepada pengemudi. Verifikasi pin peta sebelum berangkat.", bullets: ["Alamat lengkap Kuta, Badung, Bali.", "Koordinat -8.7172698, 115.17449.", "Plus code 75MF+3Q Kuta."] }
      ],
      faqs: [
        { q: "Apa alamat lengkap monumen?", a: "Monumen Ground Zero Bali, Jalan Legian, Kuta, Kabupaten Badung, Bali 80361." },
        { q: "Berapa koordinatnya?", a: "-8.7172698, 115.17449; plus code 75MF+3Q Kuta." },
        { q: "Apakah di Denpasar?", a: "Tidak, di Kuta. Jangan arahkan pengemudi ke Denpasar." }
      ]
    },
    en: {
      title: "Coordinates & How to Share the Location",
      metaTitle: "Bali Ground Zero Memorial Coordinates & How to Tell Drivers",
      metaDescription: "How to state the memorial address and coordinates to a driver; verified plus code and map pin.",
      kicker: "Context",
      lead: "To reach the memorial, state the full address or show the coordinates to your driver.",
      updated: "28 October 2026",
      facts: [["Address", "Jalan Legian, Kuta"], ["Coordinates", "-8.7172698, 115.17449"], ["Plus Code", "75MF+3Q Kuta"], ["Map", "Google Maps"]],
      sections: [
        { heading: "Full address", body: "Tell your driver: Monumen Ground Zero Bali, Jalan Legian, Kuta, Badung Regency, Bali 80361. Make sure they understand the memorial is in Kuta, not Denpasar." },
        { heading: "Use coordinates", body: "If unsure, show the coordinates -8.7172698, 115.17449 or plus code 75MF+3Q Kuta to your driver. Verify the map pin before leaving.", bullets: ["Full address in Kuta, Badung, Bali.", "Coordinates -8.7172698, 115.17449.", "Plus code 75MF+3Q Kuta."] }
      ],
      faqs: [
        { q: "What is the full address?", a: "Monumen Ground Zero Bali, Jalan Legian, Kuta, Badung Regency, Bali 80361." },
        { q: "What are the coordinates?", a: "-8.7172698, 115.17449; plus code 75MF+3Q Kuta." },
        { q: "Is it in Denpasar?", a: "No, it is in Kuta. Do not direct your driver to Denpasar." }
      ]
    }
  }
];

export const TOPIC_SLUGS: string[] = RAW.map((t) => t.slug);
export const TOPICS_ID: Record<string, TopicContent> = Object.fromEntries(RAW.map((t) => [t.slug, t.id]));
export const TOPICS_EN: Record<string, TopicContent> = Object.fromEntries(RAW.filter((t) => t.en).map((t) => [t.slug, t.en as TopicContent]));
export const TOPIC_GROUP_OF: Record<string, string> = Object.fromEntries(RAW.map((t) => [t.slug, t.group]));

export function getTopic(slug: string, lang: "id" | "en" = "id"): TopicContent | undefined {
  return (lang === "en" ? TOPICS_EN : TOPICS_ID)[slug];
}

export function topicHasLang(slug: string, lang: "id" | "en"): boolean {
  if (lang === "id") return !!TOPICS_ID[slug];
  return !!TOPICS_EN[slug];
}

/** Label untuk halaman internal yang dikenal (selain topik). */
export const KNOWN_PAGES: Record<string, string> = {
  "/": "Beranda",
  "/sejarah": "Sejarah",
  "/transportasi": "Transportasi",
  "/sekitar": "Sekitar",
  "/en/": "Home",
};
