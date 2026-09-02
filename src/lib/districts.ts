export type District = {
  /** Kisa anahtar — "kadikoy" */
  key: string;
  /** URL slug — "kadikoy-endustriyel-firin-servisi" */
  slug: string;
  /** Gorunen ad — "Kadikoy" */
  name: string;
  side: "Anadolu" | "Avrupa";
  /** Ilcedeki bilinen mahalle / bolgeler */
  areas: string[];
  /** Komsu ilce anahtarlari */
  neighbors: string[];
  /** Ilcenin isletme profiline dair ozgun metin */
  profile: string;
  /** Servis ekibinin bolgeye dair notu */
  serviceNote: string;
};

const d = (
  key: string,
  name: string,
  side: "Anadolu" | "Avrupa",
  areas: string[],
  neighbors: string[],
  profile: string,
  serviceNote: string
): District => ({
  key,
  slug: `${key}-endustriyel-firin-servisi`,
  name,
  side,
  areas,
  neighbors,
  profile,
  serviceNote,
});

export const districts: District[] = [
  // --- ANADOLU YAKASI ---
  d(
    "kadikoy",
    "Kadıköy",
    "Anadolu",
    ["Moda", "Caferağa", "Fenerbahçe", "Kozyatağı", "Bostancı", "Göztepe", "Acıbadem", "Suadiye"],
    ["uskudar", "atasehir", "maltepe"],
    "Kadıköy, İstanbul'un en yoğun restoran ve kafe kümelenmesine sahip ilçelerinden biridir. Moda ve Caferağa çevresindeki butik mutfaklar, Kozyatağı ve Bostancı hattındaki zincir işletmeler, Bağdat Caddesi boyunca uzanan pastane ve brunch mekânları küçük hacimli ama gün boyu kesintisiz çalışan fırınlar kullanır.",
    "Kadıköy'de en sık gelen talepler konveksiyonel fırın rezistans arızası, pizza fırınında taban ısısı düşüklüğü ve kombi fırınlarda kireç kaynaklı buhar sorunlarıdır. Bölgedeki şebeke suyu sertliği nedeniyle buharlı fırınlarda su yumuşatma kontrolünü standart olarak yapıyoruz."
  ),
  d(
    "uskudar",
    "Üsküdar",
    "Anadolu",
    ["Altunizade", "Bulgurlu", "Çengelköy", "Kısıklı", "Ünalan", "Kuzguncuk", "Bağlarbaşı"],
    ["kadikoy", "atasehir", "umraniye", "beykoz"],
    "Üsküdar'da geleneksel esnaf lokantaları, sahil hattındaki balık restoranları ve Altunizade çevresindeki plaza mutfakları bir arada bulunur. Bu karma yapı; katlı pide fırınından kombi fırına kadar geniş bir ekipman çeşitliliği anlamına gelir.",
    "Üsküdar'da hem eski model katlı taş fırınlar hem de yeni nesil elektronik kontrollü kombi fırınlar için parça stoğumuzu ayrı tutuyoruz. Tarihi dokudaki dar sokaklara servis aracı erişimi için randevu saatlerini işletmeyle birlikte planlıyoruz."
  ),
  d(
    "atasehir",
    "Ataşehir",
    "Anadolu",
    ["Barbaros", "Küçükbakkalköy", "İçerenköy", "Ataşehir Bulvarı", "Batı Ataşehir", "Yenisahra"],
    ["kadikoy", "uskudar", "umraniye", "maltepe", "sancaktepe"],
    "Ataşehir, finans merkezi ve plaza yoğunluğu nedeniyle kurumsal yemekhane, catering mutfağı ve zincir restoran ağırlıklıdır. Bu işletmelerde öğle servisi dar bir zaman aralığına sıkışır; fırın arızası doğrudan servis aksamasına dönüşür.",
    "Ataşehir'deki plaza mutfaklarında öğle servisi öncesi ve sonrası müdahale penceresi kritiktir. Ekiplerimiz bu işletmelerde bakım ve onarımı 10:00 öncesi veya 15:00 sonrası saatlere planlayarak servisi aksatmadan çalışır."
  ),
  d(
    "umraniye",
    "Ümraniye",
    "Anadolu",
    ["Atatürk Mahallesi", "Çakmak", "Tantavi", "Dudullu", "İnkılap", "Site"],
    ["uskudar", "atasehir", "sancaktepe", "cekmekoy", "beykoz"],
    "Ümraniye, sanayi siteleri ile yoğun konut alanlarının iç içe geçtiği bir ilçedir. Dudullu Organize Sanayi çevresindeki fabrika yemekhaneleri, unlu mamul üretim tesisleri ve toplu yemek firmaları yüksek kapasiteli sanayi tipi fırınlarla çalışır.",
    "Ümraniye'de üç fazlı yüksek güçlü fırınlarda faz dengesizliği ve kontaktör kaynaklı arızalar sık görülür. Servislerimizde cihaz onarımının yanı sıra besleme panosu bağlantı kontrolü de yapılır."
  ),
  d(
    "maltepe",
    "Maltepe",
    "Anadolu",
    ["Bağlarbaşı", "Cevizli", "Küçükyalı", "Altayçeşme", "Zümrütevler", "İdealtepe"],
    ["kadikoy", "atasehir", "kartal", "sancaktepe"],
    "Maltepe sahil hattı boyunca uzanan kafe ve restoranlar ile iç kesimdeki mahalle fırınları ve pastaneler ilçenin ekipman profilini belirler. Sahil işletmelerinde sezonluk yoğunluk, fırınları kısa sürede yorar.",
    "Maltepe'de yaz sezonu öncesi bakım talebi yoğunlaşır. Sezon başlamadan yapılan rezistans, conta ve fan kontrolü, yoğun dönemde yaşanan ani duruşları belirgin biçimde azaltıyor."
  ),
  d(
    "kartal",
    "Kartal",
    "Anadolu",
    ["Yakacık", "Soğanlık", "Cevizli", "Uğur Mumcu", "Orhantepe", "Hürriyet"],
    ["maltepe", "pendik", "sancaktepe", "sultanbeyli"],
    "Kartal'da sahil şeridindeki restoranlar, Yakacık ve Soğanlık'taki üretim atölyeleri, hastane ve okul yemekhaneleri bir arada bulunur. Kurumsal mutfaklarda kombi fırın kullanımı yaygındır.",
    "Kartal'daki hastane ve okul mutfaklarında hijyen prosedürleri nedeniyle servis öncesi ve sonrası temizlik adımlarını da ekip olarak uyguluyor, servis formunu kurum kayıt sistemine uygun düzenliyoruz."
  ),
  d(
    "pendik",
    "Pendik",
    "Anadolu",
    ["Kaynarca", "Velibaba", "Kurtköy", "Batı", "Doğu", "Güzelyalı"],
    ["kartal", "tuzla", "sultanbeyli", "cekmekoy"],
    "Pendik, sanayi bölgeleri, havalimanı çevresindeki otel ve catering işletmeleri ve geniş konut alanlarıyla karışık bir profil sunar. Kurtköy hattındaki oteller kombi fırın ve blast chiller gruplarını yoğun kullanır.",
    "Pendik'te otel mutfaklarında 7/24 çalışma düzeni olduğu için gece ve sabah erken saat randevuları veriyoruz. Havalimanı çevresindeki catering tesislerinde üretim durmadan bakım planlaması yapılıyor."
  ),
  d(
    "tuzla",
    "Tuzla",
    "Anadolu",
    ["Aydınlı", "İçmeler", "Postane", "Şifa", "Orhanlı", "Tersane bölgesi"],
    ["pendik"],
    "Tuzla, organize sanayi bölgeleri ve tersane çevresindeki fabrika yemekhaneleriyle öne çıkar. Günde binlerce kişiye üretim yapan bu mutfaklarda sanayi tipi fırın ve büyük kapasiteli pişirme hatları kullanılır.",
    "Tuzla'daki fabrika yemekhanelerinde vardiya düzeni nedeniyle bakım penceresi dardır. Kritik yedek parçaları önceden sahaya getirerek müdahale süresini tek duruşta tamamlıyoruz."
  ),
  d(
    "sancaktepe",
    "Sancaktepe",
    "Anadolu",
    ["Sarıgazi", "Samandıra", "Abdurrahmangazi", "Yenidoğan", "Meclis"],
    ["umraniye", "cekmekoy", "sultanbeyli", "atasehir", "kartal", "maltepe"],
    "Sancaktepe'de küçük ve orta ölçekli üretim atölyeleri, unlu mamul imalathaneleri ve mahalle fırınları yoğundur. Katlı taş fırın ve döner fırın kullanımı yaygındır.",
    "Sancaktepe'deki ekmek fırınlarında en sık müdahale ettiğimiz noktalar buhar bloğu kireçlenmesi ve döner fırın tahrik grubu arızalarıdır. Bu iki kalem için sabit saha stoğu tutuyoruz."
  ),
  d(
    "sultanbeyli",
    "Sultanbeyli",
    "Anadolu",
    ["Abdurrahmangazi", "Battalgazi", "Mehmet Akif", "Fatih", "Turgutreis"],
    ["sancaktepe", "pendik", "kartal", "cekmekoy"],
    "Sultanbeyli'de mahalle fırınları, pide-lahmacun salonları ve aile işletmesi restoranlar ağırlıktadır. Bu işletmelerde ekonomik ve hızlı onarım beklentisi yüksektir.",
    "Sultanbeyli'de katlı pide fırınlarında rezistans, kat kontaktörü ve taban taşı en sık değişen kalemlerdir. Ölçüye özel taş kesimini aynı hafta içinde tamamlayarak montaja geliyoruz."
  ),
  d(
    "cekmekoy",
    "Çekmeköy",
    "Anadolu",
    ["Taşdelen", "Alemdağ", "Ömerli", "Mimar Sinan", "Soğukpınar"],
    ["umraniye", "sancaktepe", "beykoz", "sultanbeyli", "pendik", "sile"],
    "Çekmeköy'de site içi sosyal tesisler, okul ve kreş mutfakları ile Alemdağ çevresindeki kır lokantaları öne çıkar. Hafta sonu yoğunluğu yüksek işletmelerdir.",
    "Çekmeköy'deki kır lokantalarında odun ve gaz ateşli fırınlarda baca çekişi ve refrakter sorunlarına sık müdahale ediyoruz. Hafta içi bakım planlaması bu işletmeler için en uygun seçenek."
  ),
  d(
    "beykoz",
    "Beykoz",
    "Anadolu",
    ["Kavacık", "Paşabahçe", "Anadolu Hisarı", "Çubuklu", "Acarkent", "Riva"],
    ["uskudar", "umraniye", "cekmekoy", "sile"],
    "Beykoz'da Boğaz hattındaki balık restoranları, Kavacık'taki plaza mutfakları ve Riva çevresindeki kır tesisleri farklı ekipman ihtiyaçları doğurur. Balık restoranlarında ızgara ve fırın grubu yoğun çalışır.",
    "Beykoz'un sahil ve orman hattındaki işletmelerine erişim süresi değişkendir; randevu saatini ekip yola çıkmadan teyit ederek net varış saati bildiriyoruz."
  ),
  d(
    "sile",
    "Şile",
    "Anadolu",
    ["Merkez", "Ağva", "Çayırbaşı", "Kumbaba", "Doğancılı"],
    ["cekmekoy", "beykoz"],
    "Şile ve Ağva hattı, yaz sezonunda kapasitesi katlanan otel, pansiyon ve kır restoranlarıyla belirgin bir mevsimsellik gösterir. Sezon açılışında ekipmanların uzun süreli duruştan sonra devreye alınması gerekir.",
    "Şile'de sezon öncesi devreye alma servisi veriyoruz: uzun duruştan sonra rezistans izolasyonu, conta durumu, su hattı ve gaz bağlantıları kontrol edilip cihaz tam yükte test ediliyor."
  ),
  d(
    "adalar",
    "Adalar",
    "Anadolu",
    ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada"],
    ["kartal", "maltepe"],
    "Adalar'da restoran ve otel yoğunluğu tamamen sezona bağlıdır. Araç kullanımının sınırlı olması, servis ve parça lojistiğini özel planlama gerektiren bir konuma taşır.",
    "Adalar'a servis planlaması vapur saatlerine göre yapılır ve olası tüm yedek parçalar önceden hazırlanıp birlikte getirilir. Böylece ikinci bir sefere gerek kalmadan iş tek ziyarette tamamlanır."
  ),

  // --- AVRUPA YAKASI ---
  d(
    "fatih",
    "Fatih",
    "Avrupa",
    ["Aksaray", "Laleli", "Sultanahmet", "Çapa", "Fındıkzade", "Balat", "Eminönü"],
    ["zeytinburnu", "eyupsultan", "bayrampasa", "beyoglu"],
    "Fatih, İstanbul'un en yoğun esnaf lokantası ve otel mutfağı bölgesidir. Sultanahmet ve Laleli hattındaki turistik oteller, Aksaray çevresindeki lokantalar ve tarihi ekmek fırınları gün boyu kesintisiz çalışır.",
    "Fatih'te dar sokaklar ve otopark kısıtı nedeniyle servis ekiplerimiz taşınabilir ölçüm seti ve parça çantasıyla hareket eder. Tarihi yapılardaki fırınlarda elektrik altyapısı kontrolü teşhisin ilk adımıdır."
  ),
  d(
    "beyoglu",
    "Beyoğlu",
    "Avrupa",
    ["İstiklal", "Galata", "Karaköy", "Cihangir", "Şişhane", "Tarlabaşı", "Kasımpaşa"],
    ["fatih", "sisli", "besiktas", "kagithane"],
    "Beyoğlu, butik restoran ve kafe yoğunluğunun en yüksek olduğu ilçelerden biridir. Karaköy ve Cihangir çevresindeki küçük mutfaklarda kompakt konveksiyonel fırın ve tezgâh üstü pişirme grupları yaygındır.",
    "Beyoğlu'nda mutfaklar dar ve ekipmanlar sıkışık yerleştirilmiştir; bu da havalandırma ve kart soğutması sorunlarını artırır. Servis sırasında cihaz çevresi hava akışını da kontrol ediyoruz."
  ),
  d(
    "sisli",
    "Şişli",
    "Avrupa",
    ["Mecidiyeköy", "Nişantaşı", "Bomonti", "Fulya", "Esentepe", "Kuştepe"],
    ["beyoglu", "besiktas", "kagithane", "sariyer"],
    "Şişli; Nişantaşı'ndaki butik pastaneler, Mecidiyeköy ve Esentepe'deki plaza mutfakları, otel ve alışveriş merkezi restoranlarıyla yüksek standart bekleyen bir bölgedir.",
    "Şişli'deki AVM ve otel mutfaklarında çalışma izni ve giriş prosedürleri vardır. Ekiplerimiz gerekli evrak ve iş güvenliği donanımıyla geldiği için giriş kaynaklı zaman kaybı yaşanmaz."
  ),
  d(
    "besiktas",
    "Beşiktaş",
    "Avrupa",
    ["Levent", "Etiler", "Ortaköy", "Bebek", "Balmumcu", "Gayrettepe", "Arnavutköy (Beşiktaş)"],
    ["sisli", "beyoglu", "sariyer", "kagithane"],
    "Beşiktaş; Boğaz hattındaki üst segment restoranlar ile Levent-Etiler aksındaki plaza ve otel mutfaklarını bir arada barındırır. Bu işletmelerde pişirme tutarlılığı ve sessiz çalışma beklentisi yüksektir.",
    "Beşiktaş'taki üst segment mutfaklarda servis sonrası sıcaklık kalibrasyonu ve raf bazlı homojenlik ölçümünü rapor halinde teslim ediyoruz; şef ekibiyle birlikte deneme pişirmesi yapılıyor."
  ),
  d(
    "sariyer",
    "Sarıyer",
    "Avrupa",
    ["Maslak", "Tarabya", "Yeniköy", "İstinye", "Zekeriyaköy", "Bahçeköy", "Rumelifeneri"],
    ["besiktas", "sisli", "kagithane", "eyupsultan"],
    "Sarıyer'de Boğaz kıyısındaki balık restoranları, Maslak'taki kurumsal yemekhaneler ve Zekeriyaköy çevresindeki kır tesisleri farklı ekipman profilleri oluşturur.",
    "Sarıyer'in kuzey hattındaki işletmelerde su sertliği yüksektir; buharlı fırınlarda yumuşatma sistemi kontrolünü ve reçine değişimini standart bakım kapsamına alıyoruz."
  ),
  d(
    "kagithane",
    "Kâğıthane",
    "Avrupa",
    ["Seyrantepe", "Çağlayan", "Gültepe", "Sanayi Mahallesi", "Merkez", "Hamidiye"],
    ["sisli", "besiktas", "beyoglu", "eyupsultan", "sariyer"],
    "Kâğıthane, ofis binaları ile küçük üretim atölyelerinin iç içe olduğu bir ilçedir. Catering firmaları ve unlu mamul imalathaneleri bölgede yoğun biçimde faaliyet gösterir.",
    "Kâğıthane'deki catering mutfaklarında sabah üretimi çok erken başlar. Bakım randevularını üretim bitişine göre öğleden sonra planlayarak duruş yaratmıyoruz."
  ),
  d(
    "eyupsultan",
    "Eyüpsultan",
    "Avrupa",
    ["Alibeyköy", "Göktürk", "Kemerburgaz", "Rami", "Silahtarağa", "Akşemsettin"],
    ["kagithane", "sariyer", "gaziosmanpasa", "bayrampasa", "fatih", "arnavutkoy"],
    "Eyüpsultan'da geleneksel esnaf lokantaları, Göktürk-Kemerburgaz hattındaki butik restoranlar ve Rami çevresindeki gıda toptancıları bir arada bulunur.",
    "Eyüpsultan'ın kuzey hattı ile merkez arasındaki mesafe nedeniyle bölgeyi iki ayrı servis rotasına ayırdık; böylece Göktürk ve Alibeyköy taleplerine varış süresi kısalıyor."
  ),
  d(
    "gaziosmanpasa",
    "Gaziosmanpaşa",
    "Avrupa",
    ["Karayolları", "Küçükköy", "Sarıgöl", "Yıldıztabya", "Merkez"],
    ["eyupsultan", "bayrampasa", "sultangazi", "esenler"],
    "Gaziosmanpaşa'da mahalle fırınları, pide salonları ve orta ölçekli lokantalar yoğundur. Ekipmanlar uzun yıllar kullanılır; onarılabilirlik önemlidir.",
    "Gaziosmanpaşa'da üretimden kalkmış modellerde muadil parça ve özel imalat çözümleri (rezistans sarımı, conta kesimi) sık kullandığımız yöntemlerdir."
  ),
  d(
    "sultangazi",
    "Sultangazi",
    "Avrupa",
    ["Cebeci", "Habipler", "50. Yıl", "Uğur Mumcu", "Esentepe"],
    ["gaziosmanpasa", "esenler", "basaksehir", "arnavutkoy", "eyupsultan"],
    "Sultangazi'de küçük sanayi siteleri, gıda imalathaneleri ve mahalle fırınları öne çıkar. Katlı fırın ve döner fırın kullanımı yaygındır.",
    "Sultangazi'deki imalathanelerde tozlu ortam nedeniyle fan ve kontrol kartı bölmesi hızla kirlenir. Periyodik bakımda basınçlı hava ile temizlik ve terminal sıkma standart adımlarımızdır."
  ),
  d(
    "bayrampasa",
    "Bayrampaşa",
    "Avrupa",
    ["Kartaltepe", "Yıldırım", "Terazidere", "Vatan", "Altıntepsi", "Hal bölgesi"],
    ["gaziosmanpasa", "eyupsultan", "esenler", "zeytinburnu", "fatih"],
    "Bayrampaşa, İstanbul'un gıda toptancılığı ve lojistik merkezlerinden biridir. Hal çevresindeki üretim tesisleri, toplu yemek firmaları ve otel mutfakları yüksek kapasiteli ekipman kullanır.",
    "Bayrampaşa merkez servis noktamıza yakınlığı nedeniyle bu ilçedeki acil çağrılara ortalama varış süremiz en kısa seviyededir; parça değişimi çoğunlukla aynı gün tamamlanır."
  ),
  d(
    "esenler",
    "Esenler",
    "Avrupa",
    ["Menderes", "Havaalanı", "Oruçreis", "Nine Hatun", "Turgutreis"],
    ["bayrampasa", "gaziosmanpasa", "sultangazi", "bagcilar", "gungoren", "basaksehir"],
    "Esenler'de otogar çevresindeki lokantalar, mahalle fırınları ve küçük üretim atölyeleri ağırlıktadır. İşletmeler gün boyu yüksek devirle çalışır.",
    "Esenler'de yoğun çalışan katlı fırınlarda rezistans ömrü kısalır. Bu bölgede periyodik rezistans direnç ölçümünü 3 aylık bakım programına dâhil ediyoruz."
  ),
  d(
    "gungoren",
    "Güngören",
    "Avrupa",
    ["Merkez", "Tozkoparan", "Haznedar", "Gençosman", "Sanayi"],
    ["esenler", "bagcilar", "bahcelievler", "zeytinburnu"],
    "Güngören, tekstil ve küçük sanayi yoğunluğunun yanında fabrika yemekhaneleri ve esnaf lokantalarıyla bilinir. Öğle servisi kapasitesi yüksektir.",
    "Güngören'deki fabrika yemekhanelerinde öğle servisi 11:00-14:00 aralığında kilitlenir. Servis randevularını bu pencerenin dışına planlayarak üretim aksamıyor."
  ),
  d(
    "bagcilar",
    "Bağcılar",
    "Avrupa",
    ["Güneşli", "Kirazlı", "Mahmutbey", "Yıldıztepe", "Demirkapı", "Bağlar"],
    ["gungoren", "esenler", "bahcelievler", "kucukcekmece", "basaksehir"],
    "Bağcılar'da matbaa ve tekstil sanayisinin yanı sıra gıda üretim tesisleri, unlu mamul imalathaneleri ve toplu yemek firmaları yoğun biçimde faaliyet gösterir.",
    "Bağcılar'da sanayi tipi fırınlarda üç fazlı besleme sorunları ve kontaktör arızaları öne çıkar. Servislerde faz dengesi ve akım ölçümünü mutlaka rapora ekliyoruz."
  ),
  d(
    "bahcelievler",
    "Bahçelievler",
    "Avrupa",
    ["Şirinevler", "Yenibosna", "Soğanlı", "Kocasinan", "Siyavuşpaşa"],
    ["gungoren", "bagcilar", "bakirkoy", "kucukcekmece"],
    "Bahçelievler'de Şirinevler ve Yenibosna hattındaki oteller, iş merkezi restoranları ve yoğun konut bölgesinin mahalle fırınları bir arada bulunur.",
    "Bahçelievler'deki otel mutfaklarında kahvaltı servisi çok erken başlar. Fırın arızalarında sabah 06:00 öncesi acil müdahale talepleri için nöbetçi ekip yönlendirmesi yapıyoruz."
  ),
  d(
    "bakirkoy",
    "Bakırköy",
    "Avrupa",
    ["Ataköy", "Yeşilköy", "Yeşilyurt", "Florya", "Şenlikköy", "Zuhuratbaba"],
    ["bahcelievler", "zeytinburnu", "kucukcekmece"],
    "Bakırköy; Yeşilköy ve Florya'daki otel ve balık restoranları, Ataköy hattındaki AVM mutfakları ve sahil kafeleriyle yüksek servis standardı bekleyen bir ilçedir.",
    "Bakırköy'de havalimanı çevresindeki otel ve catering tesislerine 7/24 servis veriyoruz. AVM mutfaklarında giriş izni prosedürleri için evraklarımız hazır şekilde geliniyor."
  ),
  d(
    "zeytinburnu",
    "Zeytinburnu",
    "Avrupa",
    ["Merkezefendi", "Kazlıçeşme", "Telsiz", "Veliefendi", "Beştelsiz"],
    ["bakirkoy", "bahcelievler", "gungoren", "bayrampasa", "fatih"],
    "Zeytinburnu'nda deri ve tekstil sanayisinin yanında gıda üretim atölyeleri, esnaf lokantaları ve toplu yemek firmaları bulunur.",
    "Zeytinburnu'ndaki üretim atölyelerinde fırınlar genellikle sınır kapasitede çalışır. Bu bölgede ısıl aşırı yüklenmeye bağlı rezistans ve kontaktör arızalarına odaklı bakım programı uyguluyoruz."
  ),
  d(
    "kucukcekmece",
    "Küçükçekmece",
    "Avrupa",
    ["Sefaköy", "Halkalı", "Cennet", "Kanarya", "Atakent", "İkitelli (K.Çekmece)"],
    ["bakirkoy", "bahcelievler", "bagcilar", "basaksehir", "avcilar"],
    "Küçükçekmece'de Halkalı ve Sefaköy hattındaki lokantalar, üniversite ve hastane yemekhaneleri ile gıda üretim tesisleri yoğundur.",
    "Küçükçekmece'deki kurumsal yemekhanelerde kombi fırın kullanımı yüksektir; buhar grubu bakımı ve otomatik yıkama sistemi arızaları en sık müdahale ettiğimiz konulardır."
  ),
  d(
    "basaksehir",
    "Başakşehir",
    "Avrupa",
    ["İkitelli", "Kayaşehir", "Ziya Gökalp", "Bahçeşehir", "Altınşehir", "Şahintepe"],
    ["kucukcekmece", "bagcilar", "esenler", "sultangazi", "arnavutkoy", "avcilar", "buyukcekmece"],
    "Başakşehir; İkitelli Organize Sanayi Bölgesi'ndeki fabrika yemekhaneleri, Bahçeşehir'deki restoran ve kafeler ve Kayaşehir'in yeni yerleşim işletmeleriyle geniş bir alana yayılır.",
    "Başakşehir çok geniş bir ilçe olduğu için İkitelli, Bahçeşehir ve Kayaşehir hatlarına ayrı ekip yönlendirmesi yapıyoruz; böylece varış süresi bölgeden bağımsız kısa kalıyor."
  ),
  d(
    "avcilar",
    "Avcılar",
    "Avrupa",
    ["Ambarlı", "Denizköşkler", "Cihangir", "Üniversite", "Firuzköy"],
    ["kucukcekmece", "basaksehir", "beylikduzu", "buyukcekmece"],
    "Avcılar'da üniversite çevresindeki kafe ve restoranlar, Ambarlı liman bölgesindeki toplu yemek firmaları ve sahil hattındaki işletmeler bulunur.",
    "Avcılar'da öğrenci yoğunluğuna bağlı olarak fast-food ve pizza işletmeleri fazladır; konveyör pizza fırınlarında bant ve hava kanalı bakımı en sık talep edilen hizmettir."
  ),
  d(
    "beylikduzu",
    "Beylikdüzü",
    "Avrupa",
    ["Barış", "Cumhuriyet", "Yakuplu", "Gürpınar", "Adnan Kahveci", "Marmara"],
    ["avcilar", "buyukcekmece", "esenyurt"],
    "Beylikdüzü, yeni yerleşim yapısıyla AVM restoranları, zincir kafeler ve site içi sosyal tesis mutfaklarının yoğun olduğu bir ilçedir.",
    "Beylikdüzü'ndeki zincir işletmelerde standart ekipman parkı bulunduğu için sık kullanılan parçaları araç stoğunda tutuyor, çoğu arızayı ilk ziyarette kapatıyoruz."
  ),
  d(
    "buyukcekmece",
    "Büyükçekmece",
    "Avrupa",
    ["Mimarsinan", "Kumburgaz", "Atatürk", "Türkoba", "Guzelce"],
    ["beylikduzu", "avcilar", "basaksehir", "silivri", "catalca", "esenyurt"],
    "Büyükçekmece'de sahil hattındaki düğün salonları, otel ve balık restoranları ile Mimarsinan çevresindeki üretim tesisleri öne çıkar. Düğün salonlarında kapasite dalgalanması yüksektir.",
    "Büyükçekmece'deki düğün ve davet salonlarında hafta sonu öncesi kontrol servisi veriyoruz; yoğun etkinlik gecelerinde arıza riskini önden düşürmek en etkili çözüm oluyor."
  ),
  d(
    "esenyurt",
    "Esenyurt",
    "Avrupa",
    ["Kıraç", "Saadetdere", "Yenikent", "Örnek", "Balıkyolu", "Talatpaşa"],
    ["beylikduzu", "buyukcekmece", "basaksehir", "arnavutkoy"],
    "Esenyurt, yoğun nüfusu ve çok sayıda küçük işletmesiyle mahalle fırını, pide salonu ve lokanta bakımından İstanbul'un en kalabalık ilçelerinden biridir.",
    "Esenyurt'ta günlük talep hacmi yüksek olduğu için bölgeye sabit ekip konumlandırdık. Katlı fırın rezistans ve kontaktör değişimleri genellikle 2-3 saat içinde tamamlanıyor."
  ),
  d(
    "arnavutkoy",
    "Arnavutköy",
    "Avrupa",
    ["Hadımköy", "Bolluca", "Taşoluk", "Haraççı", "Deliklikaya", "İmrahor"],
    ["esenyurt", "basaksehir", "sultangazi", "eyupsultan", "catalca", "buyukcekmece"],
    "Arnavutköy'de Hadımköy ve Deliklikaya çevresindeki organize sanayi tesisleri, fabrika yemekhaneleri ve havalimanı çevresindeki catering işletmeleri yoğundur.",
    "Arnavutköy'deki fabrika mutfaklarında sanayi tipi fırın ve büyük kapasiteli pişirme hatları kullanılır. Bu tesislerde önleyici bakım sözleşmesi, ani duruş maliyetini en aza indiriyor."
  ),
  d(
    "catalca",
    "Çatalca",
    "Avrupa",
    ["Merkez", "Ferhatpaşa", "Ormanlı", "Kaleiçi", "Çiftlikköy"],
    ["arnavutkoy", "buyukcekmece", "silivri"],
    "Çatalca'da kır lokantaları, et restoranları ve düğün salonları ilçenin işletme profilini oluşturur. Hafta sonu ve sezonluk yoğunluk belirgindir.",
    "Çatalca'daki et restoranlarında odun ve kömür ateşli pişirme grupları ile fırınlar birlikte kullanılır; baca çekişi, davlumbaz ve fırın bakımını tek ziyarette birleştiriyoruz."
  ),
  d(
    "silivri",
    "Silivri",
    "Avrupa",
    ["Merkez", "Selimpaşa", "Değirmenköy", "Gümüşyaka", "Ortaköy (Silivri)"],
    ["catalca", "buyukcekmece"],
    "Silivri'de sahil hattındaki oteller, tatil siteleri ve düğün salonları yaz aylarında kapasitelerini katlar. Mevsimsel çalışma düzeni ekipman bakımını kritik hale getirir.",
    "Silivri'ye planlı servis günleri belirleyerek bölgedeki birden fazla işletmenin bakımını aynı rotada topluyoruz; bu sayede hem varış süresi hem de maliyet düşüyor."
  ),
];

export const districtSlugs = districts.map((x) => x.slug);

export function getDistrict(slug: string): District | undefined {
  return districts.find((x) => x.slug === slug);
}

export function getDistrictByKey(key: string): District | undefined {
  return districts.find((x) => x.key === key);
}

export const europeanDistricts = districts.filter((x) => x.side === "Avrupa");
export const anatolianDistricts = districts.filter((x) => x.side === "Anadolu");

/**
 * FOOTER'DA ONE CIKARILAN ILCELER
 * ------------------------------------------------------------------
 * Footer her sayfada render edildigi icin 39 ilcenin tamamini
 * listelemek, sayfa basina ~60 dahili link demekti ve link degerini
 * seyreltiyordu. Asagidaki 10 ilce isletme yogunlugu en yuksek
 * bolgelerdir; kalan 29 ilce /bolgeler sayfasindan linklenir.
 */
const featuredKeys = [
  "kadikoy",
  "atasehir",
  "umraniye",
  "uskudar",
  "maltepe",
  "besiktas",
  "sisli",
  "beyoglu",
  "bagcilar",
  "basaksehir",
] as const;

export const featuredDistricts: District[] = featuredKeys
  .map((k) => districts.find((x) => x.key === k))
  .filter((x): x is District => Boolean(x));
