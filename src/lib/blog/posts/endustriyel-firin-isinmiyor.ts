import type { Post } from "../types";

export const post: Post = {
  slug: "endustriyel-firin-isinmiyor-ne-yapmali",
  title: "Endüstriyel Fırın Isınmıyor: 9 Olası Neden ve Adım Adım Arıza Tespiti",
  h1: "Endüstriyel Fırın Isınmıyor: 9 Olası Neden ve Adım Adım Arıza Tespiti",
  metaTitle:
    "Endüstriyel Fırın Isınmıyor: 9 Neden ve Teşhis Rehberi",
  metaDescription:
    "Endüstriyel fırın ısınmıyorsa nedeni rezistans, kontaktör, prob veya emniyet termostatı olabilir. Servis öncesi kontroller ve teknisyenin teşhis sırası.",
  excerpt:
    "Isınmayan bir fırında sorun her zaman rezistansta değildir. Sahada uyguladığımız teşhis sırasını, hangi belirtinin hangi parçayı işaret ettiğini ve servis çağırmadan önce güvenle yapabileceğiniz kontrolleri anlattık.",
  keywords: [
    "endüstriyel fırın ısınmıyor",
    "fırın ısınmıyor nedenleri",
    "endüstriyel fırın arıza tespiti",
    "fırın rezistans arızası",
    "fırın kontaktör arızası",
    "emniyet termostatı attı",
  ],
  serviceSlug: "endustriyel-firin-servisi",
  category: "Arıza Rehberi",
  publishedAt: "2026-02-10",
  updatedAt: "2026-08-18",
  readingMinutes: 11,
  takeaways: [
    "Isınmama şikâyetlerinin yaklaşık yarısı rezistans dışı bir sebepten kaynaklanır.",
    "Cihazı defalarca açıp kapatmak arızayı büyütür; ilk yapılması gereken enerjiyi kesmektir.",
    "Belirtinin şekli (hiç ısınmıyor / geç ısınıyor / bir süre sonra kesiliyor) arızayı doğrudan daraltır.",
    "Emniyet termostatı bir arıza değil, bir uyarıdır — sebebi bulunmadan resetlenmemelidir.",
  ],
  body: [
    {
      t: "p",
      text: "Bir mutfakta en çok panik yaratan cümle şudur: 'Fırın ısınmıyor.' Servis öncesi bir saat kala duyulduğunda ise mesele teknik olmaktan çıkıp operasyonel bir krize dönüşür. Ancak bu şikâyetin arkasında tek bir arıza yoktur; birbirinden tamamen farklı en az dokuz neden aynı belirtiyi üretir. Doğru teşhis, hangi belirtinin hangi nedeni işaret ettiğini bilmekle başlar.",
    },
    {
      t: "p",
      text: "Bu yazıda sahada uyguladığımız teşhis sırasını olduğu gibi paylaşıyoruz. Amaç, cihazınıza kendi başınıza müdahale etmenizi sağlamak değil — endüstriyel fırınlar 380 V ile çalışır ve yetkisiz müdahale hem tehlikeli hem de garanti kapsamını sonlandıran bir işlemdir. Amaç, telefonu açtığınızda doğru bilgiyi verebilmeniz ve teknisyenin doğru parçayla yola çıkabilmesi.",
    },

    { t: "h2", text: "Önce belirtiyi doğru tanımlayın" },
    {
      t: "p",
      text: "Teşhisin en verimli adımı, 'ısınmıyor' ifadesini üç alt başlığa ayırmaktır. Hangisinde olduğunuzu bilmek, olası nedenlerin yarısını daha ilk dakikada eler.",
    },
    {
      t: "table",
      head: ["Belirti", "En olası nedenler", "Aciliyet"],
      rows: [
        [
          "Hiç ısınmıyor, panel açık ama sıcaklık artmıyor",
          "Güç kontaktörü, kopmuş faz, rezistans grubu, kontrol kartı röle çıkışı",
          "Yüksek",
        ],
        [
          "Isınıyor ama çok yavaş / set sıcaklığına ulaşmıyor",
          "Kısmi rezistans kaybı, tek faz kopması, izolasyon/conta kaçağı, kirli fan",
          "Orta",
        ],
        [
          "Bir süre çalışıyor sonra kesiliyor",
          "Emniyet termostatı atması, termik röle, aşırı ısınma koruması, fan arızası",
          "Yüksek",
        ],
        [
          "Panel hiç açılmıyor, ekran ölü",
          "Sigorta, kaçak akım rölesi, besleme trafosu, güç kartı",
          "Orta",
        ],
      ],
      caption:
        "Belirti–neden eşleşmesi: telefonda ilk sorduğumuz soru budur.",
    },

    { t: "h2", text: "Servis çağırmadan önce güvenle yapabileceğiniz 5 kontrol" },
    {
      t: "p",
      text: "Aşağıdaki adımlar pano içine girmeyi veya cihazın kapağını sökmeyi gerektirmez. Beşi de birkaç dakika sürer ve arızaların azımsanmayacak bir bölümünü daha teknisyen yola çıkmadan çözer.",
    },
    {
      t: "steps",
      items: [
        {
          title: "Sigorta ve kaçak akım rölesini kontrol edin",
          text: "İşletmenin ana panosunda fırına ait şalterin konumuna bakın. Attıysa bir kez kaldırın; hemen tekrar atıyorsa ısrar etmeyin — cihazda kaçak veya kısa devre var demektir ve tekrar denemek zarar verir.",
        },
        {
          title: "Üç fazın da geldiğinden emin olun",
          text: "Panodaki faz lambalarına bakın. Üçünden biri sönükse fırın çalışır ama gücünün üçte birini kaybeder; klasik 'ısınıyor ama yetişmiyor' tablosu budur. Bu bir cihaz arızası değil, besleme sorunudur.",
        },
        {
          title: "Program ve zamanlayıcı ayarlarını doğrulayın",
          text: "Vardiya değişiminde yanlışlıkla düşük sıcaklıklı bir program, gecikmeli başlatma veya 'eco' modu seçilmiş olabilir. Cihazı fabrika programlarından birine alıp deneyin.",
        },
        {
          title: "Kapının tam kapandığını kontrol edin",
          text: "Kapı mikro şalteri kapanmayı algılamıyorsa çoğu model ısıtmaya hiç başlamaz. Contanın arasına sıkışmış bir tepsi kenarı veya ayarı kaçmış bir menteşe bu duruma yol açar.",
        },
        {
          title: "Cihazı 10 dakika dinlendirin",
          text: "Aşırı ısınma koruması devreye girmişse cihaz soğuduğunda kendine gelir. Ancak bu bir çözüm değil, bir ipucudur: sorun büyük ihtimalle fan veya havalandırma tarafındadır ve tekrarlayacaktır.",
        },
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "Yapılmaması gerekenler",
      text: "Cihazı arka arkaya açıp kapatmayın; her denemede kontaktör ve rezistans üzerinde ek yük oluşur. Emniyet termostatının reset düğmesini sebebi bulunmadan defalarca basmayın. Pano kapağını açmayın — 380 V hatlarında kapasitif yük, cihaz kapalıyken bile risk taşır.",
    },

    { t: "h2", text: "9 olası neden ve her birinin imzası" },
    {
      t: "p",
      text: "Aşağıdaki listeyi sahada karşılaşma sıklığına göre sıraladık. Her maddede, o arızayı diğerlerinden ayıran 'imza' belirtiyi de belirttik.",
    },

    { t: "h3", text: "1. Rezistans yanması (en yaygın)" },
    {
      t: "p",
      text: "Rezistanslar ısıtma işini yapan direnç telleridir ve ömürleri sonludur. Yanan bir rezistans elektriksel olarak açık devre olur. Endüstriyel fırınlarda genellikle üç veya daha fazla rezistans grubu bulunduğu için, birinin yanması cihazı tamamen durdurmaz — ısınma süresini uzatır. İmzası budur: cihaz çalışır ama katalog süresinin belirgin şekilde üzerinde ısınır.",
    },
    {
      t: "p",
      text: "Ölçüm basittir: her rezistansın direnci ohmmetre ile okunur ve etiket değeriyle karşılaştırılır. Sonsuz direnç yanmış rezistanstır. Ayrıca gövdeye karşı izolasyon direnci ölçülür; düşük izolasyon, rezistansın nem çektiğini ve kısa süre içinde kaçak akım rölesini attıracağını gösterir.",
    },

    { t: "h3", text: "2. Güç kontaktörü arızası" },
    {
      t: "p",
      text: "Kontaktör, kontrol kartından gelen düşük gerilimli sinyalle rezistansların yüksek akımını anahtarlayan elektromekanik bir röledir. Günde yüzlerce kez çeker ve bırakır; kontakları zamanla yanar, yapışır veya hiç kapanmaz. İmzası: fırın ısı talep ettiğinde panodan gelen 'tak' sesinin duyulmaması ya da tersine, cihaz kapatıldığı hâlde ısınmaya devam etmesi (yapışmış kontak).",
    },
    {
      t: "note",
      tone: "info",
      title: "Yapışmış kontaktör neden tehlikelidir?",
      text: "Kontakları kaynaklanmış bir kontaktör, termostat kesse bile rezistansa enerji vermeye devam eder. Cihaz kontrolsüz ısınır, emniyet termostatı devreye girer; girmezse yangın riski doğar. Bu arıza acil sınıfındadır, cihaz kullanılmamalıdır.",
    },

    { t: "h3", text: "3. Kopmuş veya dengesiz faz" },
    {
      t: "p",
      text: "Üç fazlı bir fırında bir fazın kopması gücün yaklaşık üçte birini götürür. Cihaz çalışmaya devam ettiği için sorun çoğu zaman cihaza atfedilir; oysa kaynak binanın elektrik altyapısıdır. İmzası: ısınma süresinin yaklaşık %50 uzaması ve fırının belirli bir sıcaklıkta takılıp kalması. Ölçümde fazlar arası gerilim ve her fazın çektiği akım karşılaştırılır; %10'un üzerindeki dengesizlik raporlanır.",
    },

    { t: "h3", text: "4. Sıcaklık probu (NTC / PT100) sapması" },
    {
      t: "p",
      text: "Prob, fırının 'termometresi'dir. Yaşlandıkça direnç–sıcaklık eğrisi kayar ve cihaz gerçekte 180 °C iken 250 °C okumaya başlar; ısıtmayı erken keser. İmzası: ekran set sıcaklığa ulaştığını gösterir ama ürün pişmez, fırın içi gözle görülür şekilde soğuktur. Kalibre referans termometre ile karşılaştırma yapıldığında sapma anında ortaya çıkar.",
    },

    { t: "h3", text: "5. Emniyet termostatının atması" },
    {
      t: "p",
      text: "Emniyet termostatı bir arıza parçası değil, koruma elemanıdır. Attıysa cihaz gerçekten aşırı ısınmıştır ve nedeni ayrıca aranmalıdır: durmuş fan, tıkanmış hava kanalı, yapışmış kontaktör veya bozulmuş ana termostat. İmzası: cihaz bir süre normal çalışır, sonra ısıtma tamamen kesilir ve ancak soğuduktan sonra resetlenebilir. Sebebi bulunmadan yapılan her reset, aynı riski yeniden üretir.",
    },

    { t: "h3", text: "6. Kontrol kartı ve röle çıkışı" },
    {
      t: "p",
      text: "Elektronik kontrollü modellerde kart, prob verisini okuyup kontaktöre sinyal gönderir. Kart üzerindeki röle çıkışı yandığında sinyal hiç ulaşmaz. İmzası: prob ve rezistans ölçümleri normal çıktığı hâlde kontaktörün hiç çekmemesi. Kart onarımı çoğu durumda mümkündür; komple değişim yalnızca onarımın ekonomik olmadığı hâllerde önerilir.",
    },

    { t: "h3", text: "7. Kapı mikro şalteri" },
    {
      t: "p",
      text: "Kapı kapalı algılanmazsa ısıtma devresi kilitli kalır. Zamanla ayarı kayan menteşe veya ezilen conta, şalterin tam basmamasına yol açar. İmzası: kapıyı elle bastırdığınızda cihazın çalışmaya başlaması. Basit ve ucuz bir arızadır ama teşhis edilmediğinde günlerce üretim kaybettirir.",
    },

    { t: "h3", text: "8. Fan motoru (konveksiyonel modellerde)" },
    {
      t: "p",
      text: "[Konveksiyonel fırınlarda](/hizmetler/konveksiyonel-firin-servisi) fan durursa ısı hazneye dağılmaz; rezistans etrafında birikir ve aşırı ısınma koruması devreye girer. İmzası: cihazın ilk dakikalarda normal çalışıp ardından kesilmesi, kapağı açtığınızda fan sesinin duyulmaması veya belirgin bir rulman gürültüsü. Rulman ve kondansatör kaynaklı arızalarda onarım hem ekonomik hem kalıcıdır.",
    },

    { t: "h3", text: "9. Gazlı modellerde ateşleme ve iyonizasyon" },
    {
      t: "p",
      text: "Gazlı fırınlarda 'ısınmıyor' şikâyeti çoğunlukla alevin hiç tutmaması veya tutup hemen sönmesidir. Sorumlular: kirlenmiş ateşleme elektrodu, oksitlenmiş iyonizasyon çubuğu, gaz valfi bobini, düşük gaz basıncı veya zayıf baca çekişi. İmzası: ateşleme sesinin gelmesi ama alevin tutmaması. Bu grup yalnızca gaz yetki belgeli teknisyen tarafından ele alınmalıdır.",
    },

    { t: "h2", text: "Teknisyenin izlediği teşhis sırası" },
    {
      t: "p",
      text: "Sahada rastgele parça değiştirmek en pahalı yöntemdir. Uyguladığımız sıra, en hızlı elenen olasılıktan en yavaşa doğru ilerler:",
    },
    {
      t: "ol",
      items: [
        "Besleme kontrolü — fazlar arası gerilim, faz-nötr gerilimi, sigorta ve kaçak akım rölesi durumu",
        "Kontrol devresi — kart besleme gerilimi, kapı şalteri sürekliliği, emniyet termostatı sürekliliği",
        "Prob ölçümü — oda sıcaklığında direnç değeri ve kalibre termometre ile karşılaştırma",
        "Kontaktör testi — bobin gerilimi var mı, kontak kapanıyor mu, kontak direnci normal mi",
        "Rezistans ölçümü — her grubun direnci ve gövdeye karşı izolasyon direnci",
        "Yük altında akım ölçümü — her fazın çektiği akımın etiket değeriyle karşılaştırılması",
        "Tam yükte test — set sıcaklığa ulaşma süresi, sıcaklık dalgalanması, raf bazlı homojenlik",
      ],
    },
    {
      t: "p",
      text: "Bu sıranın son adımı kritiktir: parça değişimi tek başına iş bitmiş sayılmaz. Cihazın arızadan önceki performansına döndüğü ölçümle doğrulanmalı ve değerler servis formuna yazılmalıdır. Aksi hâlde 'onarıldı' denen fırın, birkaç gün sonra aynı şikâyetle geri döner.",
    },

    { t: "h2", text: "Isınma sorunlarının önüne geçmek" },
    {
      t: "p",
      text: "Isınma arızalarının büyük bölümü ani değil, kademeli gelişir. [Periyodik bakımda](/blog/endustriyel-mutfak-periyodik-bakim-takvimi) ölçülen değerler bu kaymayı önceden gösterir; böylece parça, cihaz durmadan önce planlı biçimde değiştirilir.",
    },
    {
      t: "ul",
      items: [
        "Üç ayda bir rezistans direnç ve izolasyon ölçümü — değerlerdeki düşüş yaklaşan arızayı haber verir",
        "Pano içi klemens ve kontaktör bağlantılarının sıkılması — gevşek bağlantı ısınır, ısınan bağlantı yanar",
        "Fan temizliği ve rulman kontrolü — biriken yağ ve kir hem devri düşürür hem motoru zorlar",
        "Kapı contası ve menteşe ayarı — sızdıran kapı, ısınma süresini ve enerji tüketimini birlikte artırır",
        "Sıcaklık kalibrasyonu — prob sapması ürün kalitesini fark ettirmeden bozar",
        "Hava giriş ızgaralarının açık tutulması — tıkalı ızgara, kart bölmesinde ısı birikmesi demektir",
      ],
    },
    {
      t: "note",
      tone: "tip",
      title: "Aradığınızda hazır bulundurun",
      text: "Cihazın markası ve modeli, etiketteki seri numarası, arızanın ne zaman ve hangi koşulda başladığı, panelde görünen hata kodu ve son bakımın tarihi. Bu beş bilgi, teknisyenin doğru yedek parçayla yola çıkmasını sağlar ve işlerin çoğunu tek ziyarette kapatır.",
    },
  ],
  faq: [
    {
      q: "Fırın ısınmıyorsa rezistans mı değişmeli?",
      a: "Mutlaka değil. Sahada gördüğümüz ısınmama vakalarının yaklaşık yarısında rezistans sağlamdır; sorun kontaktör, kopmuş faz, prob sapması, kapı şalteri veya emniyet termostatındadır. Ölçüm yapılmadan rezistans değiştirmek hem gereksiz maliyet hem de arızanın tekrarı anlamına gelir.",
    },
    {
      q: "Emniyet termostatını kendim resetleyebilir miyim?",
      a: "Bir kez resetleyip cihazı gözlem altında çalıştırabilirsiniz. Ancak tekrar atıyorsa cihazı kullanmayı bırakın: emniyet termostatı bir arıza değil, gerçek bir aşırı ısınmanın göstergesidir. Sebebi (durmuş fan, yapışmış kontaktör, tıkalı hava kanalı) bulunmadan yapılan tekrarlı resetler ciddi risk yaratır.",
    },
    {
      q: "Fırınım eskiden 20 dakikada ısınıyordu, şimdi 40 dakika sürüyor. Arıza mı?",
      a: "Evet, bu tipik bir kısmi güç kaybıdır. En sık nedenleri: bir rezistans grubunun yanması, bir fazın kopması, kapı contasının sızdırması ve izolasyonun çökmesi. Cihaz çalışmaya devam ettiği için ertelenir; oysa hem enerji tüketimi hem de kalan rezistansların yükü artar, arıza büyür.",
    },
    {
      q: "Panelde hata kodu var, kodu söylersem telefonda teşhis edebilir misiniz?",
      a: "Büyük ölçüde evet. Hata kodları genellikle bir grubu işaret eder (prob açık devre, aşırı sıcaklık, iletişim hatası). Kod bize hangi yedek parçaları yanımıza almamız gerektiğini söyler; kesin teşhis yine yerinde ölçümle konur ama ikinci ziyaret ihtiyacı büyük ölçüde ortadan kalkar.",
    },
    {
      q: "Servis gelene kadar fırını çalıştırmaya devam edebilir miyim?",
      a: "Kaçak akım rölesi atıyorsa, yanık kokusu varsa, cihaz kapalıyken ısınmaya devam ediyorsa veya emniyet termostatı tekrar tekrar atıyorsa kesinlikle hayır — enerjiyi kesin. Yalnızca yavaş ısınma söz konusuysa, düşük yükle ve gözlem altında kullanmaya devam edebilirsiniz.",
    },
  ],
};
