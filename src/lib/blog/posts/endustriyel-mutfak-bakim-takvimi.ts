import type { Post } from "../types";

export const post: Post = {
  slug: "endustriyel-mutfak-periyodik-bakim-takvimi",
  title:
    "Endüstriyel Mutfak Periyodik Bakım Takvimi: Günlük, Aylık ve Yıllık Kontrol Listesi",
  h1: "Endüstriyel Mutfak Periyodik Bakım Takvimi",
  metaTitle:
    "Endüstriyel Mutfak Bakım Takvimi | Kontrol Listesi",
  metaDescription:
    "Endüstriyel mutfakta ani duruşları önleyen bakım takvimi: hangi ekipman ne sıklıkta kontrol edilmeli, personelin yapabileceği işler ve servise bırakılacaklar.",
  excerpt:
    "Mutfak ekipmanlarındaki ani duruşların büyük bölümü önlenebilir. Hangi kontrolün hangi sıklıkta yapılacağını, personelin üstlenebileceği işleri ve teknik servise bırakılması gerekenleri ekipman ekipman ayırdık.",
  keywords: [
    "endüstriyel mutfak bakımı",
    "mutfak ekipmanı periyodik bakım",
    "endüstriyel mutfak kontrol listesi",
    "mutfak bakım takvimi",
    "restoran ekipman bakımı",
  ],
  serviceSlug: "endustriyel-mutfak-servisi",
  category: "Bakım Rehberi",
  publishedAt: "2026-03-04",
  updatedAt: "2026-08-20",
  readingMinutes: 12,
  takeaways: [
    "Ani duruşların yaklaşık dörtte üçü, düzenli bakımla öngörülebilir hâle gelir.",
    "Bakımın önemli bölümü mutfak personelinin günlük rutinine girebilir; teknik servis yalnızca ölçüm ve elektrik işlerinde gerekir.",
    "Bakımsız bir ekipman aynı işi %15-25 daha fazla enerjiyle yapar — bakım maliyeti çoğu işletmede kendini enerjiden çıkarır.",
    "Bakım kaydı tutulmayan mutfakta hangi parçanın ne zaman değişeceği tahmin edilemez; bütçe her zaman sürprizle karşılaşır.",
  ],
  body: [
    {
      t: "p",
      text: "Endüstriyel mutfak, birbirine bağlı onlarca ekipmanın aynı anda çalıştığı bir üretim hattıdır. Fırının durması kadar bulaşık makinesinin yıkamaması ya da soğuk odanın iki derece yükselmesi de servisi durdurur. Buna rağmen çoğu işletmede bakım, arıza olduğunda hatırlanan bir kalemdir.",
    },
    {
      t: "p",
      text: "Oysa sahada gördüğümüz tablo net: acil çağrıların büyük bölümü, birkaç ay önce beş dakikalık bir kontrolle fark edilebilecek belirtilerden doğuyor. Sertleşmiş bir conta, kireçlenmiş bir boyler, gevşemiş bir klemens — hepsi haftalar önce sinyal veriyor. Bu yazıda o sinyalleri yakalayan bir takvim önerisi sunuyoruz.",
    },

    { t: "h2", text: "Bakım sıklığını ne belirler?" },
    {
      t: "p",
      text: "Standart bir takvim yoktur; sıklık üç değişkene bağlıdır. Aynı marka fırın, günde 4 saat çalışan bir kafede yılda bir, 16 saat çalışan bir catering tesisinde üç ayda bir bakım ister.",
    },
    {
      t: "table",
      head: ["Değişken", "Etkisi", "Örnek"],
      rows: [
        [
          "Günlük çalışma süresi",
          "Rezistans, kontaktör ve rulman ömrünü doğrudan belirler",
          "8 saatin üzerinde çalışan mutfakta bakım periyodu yarıya iner",
        ],
        [
          "Su sertliği",
          "Buharlı ekipmanlarda kireçlenme hızını belirler",
          "Sert su bölgesinde kombi fırın 3 ayda bir kireç kontrolü ister",
        ],
        [
          "Ortam kirliliği",
          "Fan, kondenser ve elektronik kart ömrünü etkiler",
          "Yoğun kızartma yapan mutfakta filtre ve fan temizliği aylık olmalı",
        ],
        [
          "Ürün tipi",
          "Yağ, un ve şeker yükü ekipmanı farklı biçimde yorar",
          "Pastanede un tozu, fan ve kart bölmesini hızla tıkar",
        ],
      ],
    },

    { t: "h2", text: "Günlük: personelin 10 dakikası" },
    {
      t: "p",
      text: "Aşağıdaki işler teknik bilgi gerektirmez ve kapanış rutinine eklendiğinde arıza sıklığını gözle görülür şekilde düşürür. Önemli olan kişiye değil rutine bağlamaktır: yazılı bir kapanış listesi, hatırlamaya dayalı bir düzenden çok daha güvenilirdir.",
    },
    {
      t: "ul",
      items: [
        "Fırın haznesi soğuduktan sonra silinir; taban ve raf yuvalarında biriken yanık kalıntısı alınır",
        "Kapı contaları nemli bezle temizlenir — üzerinde kalan yağ, contayı zamanla sertleştirir",
        "Bulaşık makinesi filtreleri çıkarılıp yıkanır, yıkama kolları çıkarılıp memeler kontrol edilir",
        "Fritöz yağı süzülür, tank kenarındaki karbon birikimi kazınır",
        "Davlumbaz yağ filtreleri bulaşık makinesinde yıkanır (yoğun mutfakta her gün)",
        "Soğutucu kapı contaları kontrol edilir, kapının kendi kendine kapandığı doğrulanır",
        "Ekipmanların hepsinde gözle hasar kontrolü: çatlak cam, sarkan kablo, sızıntı izi",
      ],
    },
    {
      t: "note",
      tone: "tip",
      title: "Sıcaklık kaydı tutun",
      text: "Fırının set sıcaklığa kaç dakikada ulaştığını haftada bir kaydetmek, en ucuz erken uyarı sistemidir. Süre kademeli olarak uzuyorsa rezistans, faz veya conta tarafında bir kayıp başlamış demektir — cihaz durmadan haftalar önce fark edersiniz.",
    },

    { t: "h2", text: "Aylık: yarım saatlik kontrol" },
    {
      t: "p",
      text: "Ayda bir kez, tercihen kapalı gün veya düşük yoğunluklu bir sabah, aşağıdaki kontroller yapılır. Bunlar da büyük ölçüde personelin üstlenebileceği işlerdir.",
    },
    {
      t: "steps",
      items: [
        {
          title: "Kapı contalarının sızdırmazlık testi",
          text: "Kapıya bir kâğıt parçası sıkıştırıp kapatın ve çekin. Kâğıt kolayca çıkıyorsa conta o noktada sızdırıyordur. Fırın, soğutucu ve bulaşık makinesinde ayrı ayrı, kapının dört kenarında test edin.",
        },
        {
          title: "Soğutma grubu kondenser temizliği",
          text: "Buzdolabı ve soğuk odaların arkasındaki kondenser peteği tozlanır. Tıkalı petek, kompresörü zorlar ve elektrik faturasını yükseltir. Fırça ve süpürge ile temizlenir.",
        },
        {
          title: "Bulaşık makinesi kireç kontrolü",
          text: "Boyler ve yıkama kolu memelerinde beyaz kireç birikimi var mı bakın. Varsa üretici onaylı kireç çözücü ile program çalıştırın. Kireç, durulama sıcaklığını düşürerek hijyen riskini doğurur.",
        },
        {
          title: "Fan ve havalandırma ızgaraları",
          text: "Konveksiyonel fırınların hava giriş ızgaraları ve elektronik kart bölmesinin havalandırması tıkanmamalı. Tıkanma, kart arızalarının en yaygın gizli sebebidir.",
        },
        {
          title: "Gaz kokusu ve alev gözlemi",
          text: "Ocak ve gazlı fırınlarda alev rengi kontrol edilir: sağlıklı alev mavidir. Sarı, uzun veya titrek alev, tıkalı brülör başlığı ya da hatalı hava ayarı demektir; teknik servis konusudur.",
        },
      ],
    },

    { t: "h2", text: "Üç aylık: teknik servis bakımı" },
    {
      t: "p",
      text: "Bu adımdan itibaren ölçüm cihazı ve yetki belgesi gerekir; bu kalemler [endüstriyel mutfak servisi](/hizmetler/endustriyel-mutfak-servisi) kapsamında yürütülür. Yoğun çalışan mutfaklarda üç ay, normal yoğunluktakilerde altı ay uygun periyottur.",
    },
    {
      t: "table",
      head: ["Ekipman", "Yapılan işlem", "Neyi önler"],
      rows: [
        [
          "Fırın (tüm tipler)",
          "Rezistans direnç ve izolasyon ölçümü, prob kalibrasyonu, kontaktör kontak kontrolü",
          "Ani ısınma kaybı, kaçak akım atması, hatalı pişirme",
        ],
        [
          "Kombi / buharlı fırın",
          "Boyler kireç çözme, nozul temizliği, su yumuşatma reçine kontrolü",
          "Buhar kaybı, pompa yanması, yıkama programı hatası",
        ],
        [
          "Elektrik panosu",
          "Klemens sıkma, termal kontrol, faz dengesi ve akım ölçümü",
          "Kablo yanması, kontaktör arızası, kısmi güç kaybı",
        ],
        [
          "Bulaşık makinesi",
          "Boyler rezistans kontrolü, pompa performansı, durulama sıcaklığı ölçümü",
          "Hijyen riski, pompa arızası, yıkama kalitesi düşüşü",
        ],
        [
          "Soğutma grubu",
          "Gaz basıncı, kompresör akımı, defrost devresi, kondenser temizliği",
          "Sıcaklık kayması, kompresör yanması, ürün kaybı",
        ],
        [
          "Ocak ve fritöz",
          "Brülör ve enjektör temizliği, termokupl testi, gaz basıncı ayarı",
          "Alev sönmesi, yakıt israfı, sıcaklık dengesizliği",
        ],
        [
          "Davlumbaz / aspiratör",
          "Kanal içi yağ birikimi kontrolü, fan devri, kayış gerginliği",
          "Yangın riski, mutfakta duman birikmesi",
        ],
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "Davlumbaz kanalını atlamayın",
      text: "Ticari mutfak yangınlarının önemli bölümü davlumbaz kanalında biriken yağdan çıkar. Filtre temizliği kanalı temizlemez; kanal içi temizlik ayrı bir işlemdir ve yoğun kızartma yapan mutfaklarda yılda en az iki kez yapılmalıdır.",
    },

    { t: "h2", text: "Yıllık: kapsamlı revizyon" },
    {
      t: "p",
      text: "Yılda bir kez, tercihen sezon dışında veya işletmenin tatil döneminde yapılan kapsamlı bakım, ertesi yılın arıza yükünü belirler.",
    },
    {
      t: "ul",
      items: [
        "Tüm kapı contalarının değerlendirilmesi ve gerekenlerin değişimi",
        "Fan motoru rulman kontrolü, gerekiyorsa rulman değişimi ve kanat balanslama",
        "İzolasyon durumu — çökmüş cam yünü ısı kaybının sessiz sebebidir",
        "Su yumuşatma reçinesinin yenilenmesi ve su sertliği ölçümü",
        "Gazlı cihazlarda baca gazı analizi ve yanma verimi ayarı",
        "Elektrik panosunda termal kamera taraması ve tüm bağlantıların yeniden sıkılması",
        "Ekipman envanterinin güncellenmesi: hangi cihaz kaç yaşında, hangi parçalar değişti",
        "Ömrünü tamamlamaya yaklaşan ekipmanların yenileme planına alınması",
      ],
    },

    { t: "h2", text: "Bakım kaydı: en çok atlanan adım" },
    {
      t: "p",
      text: "Bakım yapmak yeterli değil; ne yapıldığını kaydetmek gerekir. Kayıt tutulmayan bir mutfakta hangi parçanın ne zaman değiştiğini kimse bilmez, aynı arıza defalarca 'yeni' gibi ele alınır ve bütçe planlanamaz.",
    },
    {
      t: "p",
      text: "İyi bir bakım kaydı her ekipman için şunları içerir: marka, model, seri numarası, kurulum tarihi, yapılan bakımların tarihi ve içeriği, değişen parçalar, ölçüm değerleri (özellikle rezistans direnci, akım ve sıcaklık) ve bir sonraki bakımın planlanan tarihi. Ölçüm değerlerinin zaman içindeki seyri, hangi cihazın yorulduğunu tahminden çıkarıp veriye dayandırır.",
    },
    {
      t: "quote",
      text: "Bakım maliyeti öngörülebilir; arıza maliyeti öngörülemez. Aradaki fark, işletmenin bütçe yapabilme kabiliyetidir.",
    },

    { t: "h2", text: "Bakım sözleşmesi ne zaman mantıklı olur?" },
    {
      t: "p",
      text: "Tek bir fırını olan küçük bir kafe için [tekil servis çağırmak](/hizmetler/endustriyel-firin-servisi) yeterlidir. Ancak beş ve üzeri ekipmanı olan, günde 8 saatin üzerinde çalışan veya duruşun doğrudan ciro kaybına dönüştüğü işletmelerde sözleşmeli bakım genellikle daha ekonomiktir.",
    },
    {
      t: "ul",
      items: [
        "Öncelikli servis hakkı — acil çağrı sırasında sözleşmeli işletmeler önce planlanır",
        "İndirimli işçilik ve parça fiyatı",
        "Planlı duruş — bakım, üretimi aksatmayacak saatlere önceden yerleştirilir",
        "Tek muhatap — her marka için ayrı servis aramak zorunda kalmazsınız",
        "Fotoğraflı rapor — hangi parçanın ne durumda olduğunu yazılı görürsünüz",
        "Enerji tasarrufu — bakımlı ekipman, sözleşme bedelinin önemli bölümünü faturadan geri kazandırır",
      ],
    },
    {
      t: "note",
      tone: "info",
      title: "Sözleşme öncesi keşif isteyin",
      text: "İyi bir sözleşme, mutfağınızın gerçek envanterine göre yazılır. Keşifte her cihaz marka-model-seri numarasıyla kayda alınmalı, mevcut durumu fotoğraflanmalı ve bakım periyotları cihaz bazında belirlenmelidir. Standart, tek tip bir sözleşme çoğu zaman ya eksik kalır ya da gereksiz kalem içerir.",
    },
  ],
  faq: [
    {
      q: "Periyodik bakım gerçekten arızayı önlüyor mu?",
      a: "Tamamını değil ama büyük bölümünü. Elektronik kart gibi bileşenlerde ani arıza her zaman mümkündür. Buna karşılık rezistans yorulması, kontaktör aşınması, kireçlenme, conta sertleşmesi, rulman aşınması ve pano bağlantısı gevşemesi — yani en sık görülen arıza grupları — kademeli gelişir ve ölçümle önceden yakalanır.",
    },
    {
      q: "Bakımı kendi personelim yapabilir mi?",
      a: "Günlük temizlik ve aylık gözle kontrollerin tamamını personel yapabilir; hatta yapmalıdır. Elektriksel ölçüm, gaz ayarı, kireç çözme kimyasalı kullanımı, soğutucu gaz işlemleri ve pano müdahalesi ise yetki belgesi gerektirir ve teknik servise bırakılmalıdır.",
    },
    {
      q: "Bakım sırasında mutfak kapanmak zorunda mı?",
      a: "Hayır. Bakımı vardiya aralarına, servis öncesi sabah saatlerine veya kapalı güne planlıyoruz. Çok ekipmanlı mutfaklarda cihazlar sırayla ele alınır; hiçbir zaman tüm hat aynı anda durdurulmaz.",
    },
    {
      q: "Bakım ne kadar tutar?",
      a: "Ekipman sayısı, bakım periyodu ve işletmenin bulunduğu ilçeye göre değişir. Genel kural şudur: beş ve üzeri ekipmanı olan bir mutfakta sözleşmeli bakımın yıllık bedeli, çoğunlukla tek bir ciddi arızanın (örneğin bir kombi fırın buhar grubu revizyonu) maliyetinin altında kalır.",
    },
    {
      q: "Eski ekipmanlar için bakım mantıklı mı, yoksa yenilemek mi gerekir?",
      a: "Karar, cihazın yaşından çok yıllık arıza maliyetine bakılarak verilmelidir. Yıllık onarım gideri yeni cihaz bedelinin dörtte birini aşıyor, arızalar sıklaşıyor ve parça temini zorlaşıyorsa yenileme mantıklıdır. Bunu keşifte maliyet karşılaştırmasıyla birlikte açıkça söylüyoruz.",
    },
  ],
};
