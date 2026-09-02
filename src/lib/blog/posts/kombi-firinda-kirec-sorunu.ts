import type { Post } from "../types";

export const post: Post = {
  slug: "kombi-firinda-kirec-sorunu-ve-kalici-cozumu",
  title:
    "Kombi ve Konveksiyonel Fırınlarda Kireç: Buhar Arızalarının Kök Nedeni",
  h1: "Kombi Fırınlarda Kireç Sorunu ve Kalıcı Çözümü",
  metaTitle:
    "Kombi Fırında Kireç Sorunu | Buhar Gelmiyor mu? Kalıcı Çözüm",
  metaDescription:
    "Kombi fırınlarda buhar gelmemesinin kök nedeni çoğunlukla kireçtir. Su sertliği, yumuşatma sistemi, kireç çözme prosedürü ve kalıcı çözüm adımları.",
  excerpt:
    "Buhar arızalarının neredeyse tamamı aynı yerden çıkar: su. Kirecin cihazın içinde ne yaptığını, kireç çözmenin neden tek başına yetmediğini ve su hattını çözmeden yapılan onarımın neden tekrarladığını anlattık.",
  keywords: [
    "kombi fırın buhar gelmiyor",
    "konveksiyonel fırın kireç",
    "fırın kireç çözme",
    "su yumuşatma sistemi fırın",
    "buhar nozulu tıkanması",
    "fırın su sertliği",
  ],
  serviceSlug: "konveksiyonel-firin-servisi",
  category: "Teknik Rehber",
  publishedAt: "2026-06-11",
  updatedAt: "2026-08-26",
  readingMinutes: 11,
  takeaways: [
    "Buhar arızalarının büyük bölümünde arızalı parça değil, arızayı üreten su vardır.",
    "Kireç çözme bir onarım değil, bir temizliktir; su hattı çözülmezse birkaç ay içinde tekrarlar.",
    "Su sertliği 8-10 Fr üzerindeyse yumuşatma sistemi tercih değil, zorunluluktur.",
    "Yumuşatma sistemi kurmak yetmez — reçine periyodik olarak yenilenmelidir.",
  ],
  body: [
    {
      t: "p",
      text: "[Kombi (buharlı) fırınlar](/hizmetler/konveksiyonel-firin-servisi) profesyonel mutfağın en yetenekli ekipmanıdır: aynı cihazda konveksiyon, buhar ve kombine pişirme yapabilir, nem oranını yüzde bir hassasiyetle kontrol edebilirsiniz. Bu yetenek bir bedelle gelir — su ile çalışan her sistem gibi, suyun kalitesine karşı hassastır.",
    },
    {
      t: "p",
      text: "Sahada gelen 'buhar gelmiyor', 'yıkama programı tamamlanmıyor', 'ekranda su hatası var' çağrılarının büyük çoğunluğunda arızalı bir parça buluyoruz — ama o parçayı arızalandıran şey neredeyse her zaman aynı: kireç. Bu yazı, arızayı değil arızanın sebebini hedef alıyor.",
    },

    { t: "h2", text: "Kireç cihazın içinde tam olarak ne yapıyor?" },
    {
      t: "p",
      text: "Şebeke suyunda çözünmüş hâlde kalsiyum ve magnezyum bileşikleri bulunur. Su ısıtıldığında bu bileşikler çözünürlüğünü kaybeder ve en sıcak yüzeyde katı olarak birikir. Kombi fırında en sıcak yüzey rezistansın kendisidir.",
    },
    {
      t: "table",
      head: ["Bölge", "Kirecin etkisi", "Ortaya çıkan belirti"],
      rows: [
        [
          "Buhar boyleri / rezistansı",
          "Isı yalıtımı yapar; rezistans suyu ısıtamaz, kendi üzerinde ısı biriktirir",
          "Buhar üretimi yavaşlar, rezistans zamanla yanar",
        ],
        [
          "Püskürtme nozulları",
          "Delik kesitini daraltır, sonunda tamamen tıkar",
          "Buhar zayıflar veya hiç gelmez",
        ],
        [
          "Su pompası",
          "Rotor ve salmastrada aşınma yaratır",
          "Pompa gürültüsü, debi düşüşü, pompa arızası",
        ],
        [
          "Solenoid valf",
          "Valf iğnesi ve yatağında birikir; tam kapanmaz veya açılmaz",
          "Sürekli su akışı ya da hiç su alamama",
        ],
        [
          "Seviye sensörü / prob",
          "Yüzeyi kaplar, iletkenlik ölçümünü bozar",
          "Hatalı su seviyesi okuması, ekranda hata kodu",
        ],
        [
          "Hazne ve tahliye hattı",
          "Birikir, daraltır",
          "Hazne tabanında su birikmesi, tahliye yavaşlığı",
        ],
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "Kirecin en pahalı etkisi",
      text: "Rezistans üzerinde 1 mm kalınlığındaki kireç tabakası bile ısı transferini belirgin biçimde düşürür. Rezistans suyu ısıtamayınca kendi sıcaklığı yükselir ve metal yorulur. Bu yüzden kireçli cihazlarda rezistans, olması gerekenden çok daha erken yanar — yani kireç sadece performansı değil, parça ömrünü de kısaltır.",
    },

    { t: "h2", text: "Suyunuz ne kadar sert? Önce bunu ölçün" },
    {
      t: "p",
      text: "Her müdahalenin başlangıç noktası su sertliği ölçümüdür; bu ölçüm [periyodik bakım takvimimizin](/blog/endustriyel-mutfak-periyodik-bakim-takvimi) de sabit maddelerinden biridir. Test kiti birkaç dakikada sonuç verir ve kararların tamamını bu değer belirler.",
    },
    {
      t: "table",
      head: ["Sertlik (Fr)", "Sınıf", "Kombi fırın için ne anlama gelir"],
      rows: [
        ["0-5", "Çok yumuşak", "Yumuşatma gerekmez; yıllık kontrol yeterli"],
        ["5-10", "Yumuşak", "Sınırda; yoğun kullanımda yumuşatma önerilir"],
        [
          "10-20",
          "Orta sert",
          "Yumuşatma gerekli; olmadan 3-6 ayda kireç birikir",
        ],
        [
          "20-30",
          "Sert",
          "Yumuşatma zorunlu; reçine takibi sıkı yapılmalı",
        ],
        [
          "30+",
          "Çok sert",
          "Yumuşatma + düzenli reçine yenileme; ters ozmoz değerlendirilmeli",
        ],
      ],
    },
    {
      t: "p",
      text: "İstanbul'da su sertliği ilçeye ve hatta mahalleye göre değişir; şehir genelinde tek bir değerden söz etmek doğru olmaz. Bu nedenle kurulum öncesi ölçümü işletmenin kendi musluğundan alıyoruz. Ayrıca bina içi tesisatın yaşı ve deponun varlığı da sonucu etkileyebilir.",
    },

    { t: "h2", text: "Kireç çözme: nasıl yapılır, ne zaman yetmez" },
    {
      t: "p",
      text: "Kireç çözme, birikmiş kireci kimyasal olarak eritip sistemden atma işlemidir. Doğru yapıldığında cihazı ilk günkü performansına yaklaştırır. Yanlış yapıldığında ise contaları, paslanmaz yüzeyleri ve pompayı kalıcı olarak zarara uğratır.",
    },
    {
      t: "steps",
      items: [
        {
          title: "Cihaza uygun kimyasal seçilir",
          text: "Üretici onaylı kireç çözücü kullanılır. Marketten alınan genel amaçlı asitler paslanmaz yüzeyde korozyon, silikon contalarda sertleşme yapar.",
        },
        {
          title: "Sistem boşaltılır ve izole edilir",
          text: "Boyler tahliye edilir, su girişi kesilir. Elektronik bileşenlerin kimyasalla temas etmeyeceği doğrulanır.",
        },
        {
          title: "Çözücü dolaştırılır ve bekletilir",
          text: "Kimyasal, üreticinin belirttiği konsantrasyon ve sürede sistemde dolaştırılır. Süreyi uzatmak 'daha iyi temizler' anlamına gelmez, zarar verir.",
        },
        {
          title: "Nozullar mekanik olarak açılır",
          text: "Kimyasal çoğu zaman tamamen tıkalı bir nozulu açmaz. Nozullar sökülür, temizlenir ve delik kesiti kontrol edilir.",
        },
        {
          title: "Bol su ile durulanır",
          text: "Kimyasal kalıntısı bırakılmaz; birkaç kez tam durulama yapılır. Kalıntı, sonraki pişirmelerde ürüne geçer.",
        },
        {
          title: "Test ve ölçüm yapılır",
          text: "Buhar üretim süresi, nem oranı ve boyler ısınma süresi ölçülür; değerler servis formuna yazılır.",
        },
      ],
    },
    {
      t: "note",
      tone: "info",
      title: "Kireç çözme neden kalıcı çözüm değil?",
      text: "Çünkü kirecin kaynağını değiştirmez. Aynı sertlikteki su akmaya devam ettiği sürece birikim aynı hızla yeniden başlar. Sert su bölgesinde yumuşatmasız çalışan bir cihazda kireç çözme işlemi 3-6 ayda bir tekrar gerekir; bu da hem maliyet hem duruş demektir.",
    },

    { t: "h2", text: "Su yumuşatma: kalıcı çözümün kendisi" },
    {
      t: "p",
      text: "Yumuşatma sistemi, sudaki kalsiyum ve magnezyum iyonlarını reçine üzerinde tutarak cihaza ulaşmasını engeller. Cihaz girişine takılan bu sistem, kireç sorununun tekrarını büyük ölçüde ortadan kaldırır.",
    },
    {
      t: "p",
      text: "Üç yaygın çözüm vardır ve her biri farklı ihtiyaca yanıt verir:",
    },
    {
      t: "table",
      head: ["Sistem", "Nasıl çalışır", "Uygun olduğu durum"],
      rows: [
        [
          "Kartuşlu reçine filtre",
          "Değiştirilebilir kartuş içindeki reçine iyonları tutar",
          "Tek cihaz, orta sertlik, düşük-orta su tüketimi",
        ],
        [
          "Rejenerasyonlu yumuşatıcı",
          "Tuz çözeltisiyle reçine kendini yeniler",
          "Çok cihazlı mutfak, yüksek su tüketimi, sert su",
        ],
        [
          "Ters ozmoz",
          "Membran ile mineralleri ayırır",
          "Çok sert su, hassas ekipman, buhar kalitesi kritikse",
        ],
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "En sık yapılan hata",
      text: "Yumuşatma sistemi kurulur ve unutulur. Reçinenin tutma kapasitesi sonludur; dolduğunda sistem sudan hiçbir şey almaz, sadece bir boru gibi davranır. İşletme kendini korunuyor sanır, oysa kireç birikimi kaldığı yerden devam eder. Kartuş veya reçine, su tüketimine göre periyodik olarak yenilenmelidir.",
    },

    { t: "h2", text: "Kireç dışındaki buhar arızaları" },
    {
      t: "p",
      text: "Her buhar sorunu kireçten kaynaklanmaz. Aşağıdakiler de teşhis sırasında elenir:",
    },
    {
      t: "ul",
      items: [
        "Şebeke su basıncının yetersiz olması — çoğu kombi fırın minimum bir basınç ister; altına düştüğünde su alamaz",
        "Su girişi filtresinin tıkanması — tesisattan gelen tortu, kireçten bağımsız olarak filtreyi kapatır",
        "Solenoid valf bobininin yanması — elektriksel arıza, kireçten bağımsızdır",
        "Su pompası kondansatörünün zayıflaması — pompa çalışır ama debi düşer",
        "Seviye sensörü kablo bağlantısının gevşemesi — hatalı okuma, hata kodu",
        "Kontrol kartında buhar rölesi çıkışının arızalanması — komut hiç gitmez",
        "Tahliye hattının tıkanması — sistem su alamaz çünkü boşaltamaz",
      ],
    },
    {
      t: "p",
      text: "Bu nedenle doğru teşhis sırası önemlidir: önce su basıncı ve filtre, sonra elektriksel bileşenler, en son mekanik/kireç kaynaklı tıkanmalar. Ters sırada gidildiğinde gereksiz kireç çözme işlemleri yapılır ve gerçek arıza atlanır.",
    },

    { t: "h2", text: "Günlük kullanımda kireci yavaşlatan alışkanlıklar" },
    {
      t: "ul",
      items: [
        "Cihazın otomatik yıkama programını atlamamak — programın kendisi birikimi geciktirir",
        "Gün sonunda hazneyi soğuduktan sonra silmek; kalıntı üzerinde kireç daha hızlı tutunur",
        "Uzun duruşlarda (tatil, sezon dışı) boyleri boş bırakmak, dolu suyla bekletmemek",
        "Su filtresi değişim tarihini cihazın yanına yazılı olarak asmak",
        "Buhar performansındaki düşüşü not etmek — 'eskiden daha iyiydi' hissini ölçüye çevirmek",
        "Su sertliğini yılda bir kez yeniden ölçmek; şebeke kaynağı değişebilir",
      ],
    },

    { t: "h2", text: "Maliyet karşılaştırması" },
    {
      t: "p",
      text: "İşletmelerin en sık sorduğu soru: 'Yumuşatma sistemi kurmaya değer mi?' Karşılaştırmayı üç yıllık bir pencerede yapmak en doğrusudur.",
    },
    {
      t: "table",
      head: ["Senaryo", "3 yıllık maliyet kalemleri"],
      rows: [
        [
          "Yumuşatmasız",
          "6-10 kez kireç çözme servisi + en az bir boyler rezistansı + muhtemel pompa/valf değişimi + duruş kaybı",
        ],
        [
          "Yumuşatmalı",
          "Bir defalık sistem kurulumu + periyodik kartuş/reçine yenileme + yılda bir kontrol",
        ],
      ],
    },
    {
      t: "p",
      text: "Sert su bölgesinde çalışan çok cihazlı bir mutfakta bu karşılaştırma neredeyse her zaman yumuşatma lehine çıkar. Yumuşak su bölgesindeki tek cihazlı bir işletmede ise düzenli kontrol yeterli olabilir. Karar, tahminle değil sertlik ölçümüyle verilmelidir.",
    },
    {
      t: "quote",
      text: "Kireç arızası tekrar ediyorsa mesele parçada değil, o parçaya ulaşan sudadır.",
    },
  ],
  faq: [
    {
      q: "Kireç çözme işlemini kendim yapabilir miyim?",
      a: "Cihazın otomatik kireç çözme programı varsa ve üretici onaylı kimyasal kullanıyorsanız evet, prosedüre birebir uyarak yapabilirsiniz. Ancak tıkanmış nozulların sökülüp mekanik temizlenmesi, boyler içi kontrol ve sonrasındaki ölçümler teknik servis işidir. Marketten alınan genel amaçlı asitleri kesinlikle kullanmayın.",
    },
    {
      q: "Su yumuşatma sistemi buharın tadını etkiler mi?",
      a: "Doğru seçilmiş bir sistem etkilemez. Reçineli yumuşatıcılarda sudaki sodyum oranı bir miktar artar; bu, pişirme sonucunu pratikte etkilemeyecek düzeydedir. Çok hassas uygulamalarda ters ozmoz tercih edilir, ancak o durumda da mineral dengesi için karıştırma valfi kullanılır.",
    },
    {
      q: "Filtre / reçine ne sıklıkta değişmeli?",
      a: "Sabit bir takvim yerine su tüketimine ve sertliğe göre belirlenir. Kartuşlu sistemlerde üretici belirli bir litre kapasitesi verir; işletmenin günlük su tüketimi bilindiğinde değişim tarihi hesaplanabilir. Uygulamada çoğu mutfakta 6-12 ay aralığına denk gelir.",
    },
    {
      q: "Cihazım 'su yok' hatası veriyor ama su geliyor. Neden?",
      a: "Muhtemel sebepler: seviye sensörünün kireçle kaplanması (iletkenliği okuyamıyor), giriş filtresinin tıkanması, şebeke basıncının cihazın minimum değerinin altına düşmesi veya solenoid valfin tam açılmaması. Sensör kaynaklıysa temizlik çoğu zaman yeterlidir.",
    },
    {
      q: "Buhar arızası cihazın diğer fonksiyonlarını etkiler mi?",
      a: "Evet. Çoğu modelde otomatik yıkama programı da aynı su devresini kullanır; buhar tarafı tıkalıysa yıkama tamamlanmaz. Ayrıca kireçli boylerdeki rezistans aşırı ısındığı için emniyet devresi devreye girip cihazı tamamen durdurabilir.",
    },
  ],
};
