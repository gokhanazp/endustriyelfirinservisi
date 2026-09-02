import type { Post } from "../types";

export const post: Post = {
  slug: "pizza-firininda-taban-cig-kaliyor-cozum",
  title:
    "Pizza Fırınında Taban Neden Çiğ Kalır? Sıcaklık, Taş ve Ayar Rehberi",
  h1: "Pizza Fırınında Taban Neden Çiğ Kalır?",
  metaTitle:
    "Pizza Fırınında Taban Çiğ Kalıyor: Nedenleri ve Kalıcı Çözümü",
  metaDescription:
    "Pizza fırınında taban çiğ kalıyorsa nedeni alt rezistans, yorulmuş pişirme taşı, prob sapması veya düşen taban ısısı olabilir. Teşhis ve kalıcı çözüm rehberi.",
  excerpt:
    "Üstü kızarmış ama tabanı hamur kalmış bir pizza, neredeyse her zaman aynı üç sebepten birine işaret eder. Hangisinin sizde olduğunu ayırt etmenin yolunu ve her biri için kalıcı çözümü anlattık.",
  keywords: [
    "pizza fırınında taban çiğ kalıyor",
    "pizza tabanı pişmiyor",
    "pizza fırını alt rezistans",
    "pizza fırın taşı çatladı",
    "pizza fırını sıcaklık ayarı",
    "konveyör pizza fırını ayarı",
  ],
  serviceSlug: "pizza-firini-servisi",
  category: "Arıza Rehberi",
  publishedAt: "2026-05-08",
  updatedAt: "2026-08-25",
  readingMinutes: 10,
  takeaways: [
    "Taban ısısı ile hava sıcaklığı farklı şeylerdir; termostat hava sıcaklığını gösterir.",
    "Yorulmuş pişirme taşı, çalışan bir rezistansla bile tabanı pişiremez.",
    "Yoğun serviste bozulan tabanı sabahki performansla karşılaştırmak, en hızlı ayırt etme yöntemidir.",
    "Hamurun nem oranı ve dinlendirme süresi de tabloya karışır — her taban sorunu arıza değildir.",
  ],
  body: [
    {
      t: "p",
      text: "Pizzacı işletmelerinden gelen servis taleplerinin başında bu cümle gelir: 'Üstü güzel oluyor ama tabanı hamur kalıyor.' Şikâyet tek olsa da arkasında birbirinden tamamen farklı sebepler yatar ve hangisinin geçerli olduğunu anlamanın basit yolları vardır.",
    },
    {
      t: "p",
      text: "Bu yazıda önce sorunu kendi başınıza daraltmanızı sağlayacak testleri, sonra her sebebin kalıcı çözümünü anlatıyoruz. Sonda ise sorunun cihazda değil hamurda olduğu durumlara da değiniyoruz — çünkü sahada gördüğümüz taban şikâyetlerinin azımsanmayacak bir bölümü teknik değil, reçete kaynaklı.",
    },

    { t: "h2", text: "Önce şunu bilin: iki farklı sıcaklık var" },
    {
      t: "p",
      text: "Pizza fırınında iki ayrı sıcaklık iş görür ve bunlar birbirinden bağımsız davranır. Bu ayrımı bilmeden yapılan her teşhis eksik kalır.",
    },
    {
      t: "table",
      head: ["", "Hava (kubbe) sıcaklığı", "Taban (taş) sıcaklığı"],
      rows: [
        [
          "Neyi belirler",
          "Üst yüzeyin kızarması, malzemenin pişmesi",
          "Hamurun altının çıtırlaşması ve kabarması",
        ],
        [
          "Kaynağı",
          "Üst rezistans / kubbe ısısı",
          "Alt rezistans + taşın depoladığı ısı",
        ],
        [
          "Panelde görünür mü",
          "Evet, termostat genellikle bunu okur",
          "Hayır — ayrı ölçüm gerekir",
        ],
        [
          "Toparlanma hızı",
          "Hızlı (dakikalar)",
          "Yavaş (taşın ısı kapasitesine bağlı)",
        ],
      ],
    },
    {
      t: "note",
      tone: "tip",
      title: "Tek başına en faydalı alet",
      text: "Bir kızılötesi (lazerli) termometre. Fırın boşken taş yüzeyine tutup ölçün, sonra üç pizza arka arkaya pişirip tekrar ölçün. Aradaki düşüş ve geri toparlama süresi, sorunun kaynağını neredeyse tek başına söyler.",
    },

    { t: "h2", text: "Sorunu daraltan 4 test" },
    {
      t: "steps",
      items: [
        {
          title: "Sabah testi",
          text: "Günün ilk pizzası düzgün pişiyor, akşam yoğunlukta taban bozuluyorsa sorun ısı kapasitesindedir: taş yorulmuş veya alt rezistans zayıflamıştır. İlk pizza da kötüyse sorun kalıcı bir arızadır.",
        },
        {
          title: "Boş fırın ölçümü",
          text: "Fırını set sıcaklığa getirin, en az 40 dakika bekletin. Kızılötesi termometreyle taş yüzeyini birkaç noktadan ölçün. Panel değeri ile taş sıcaklığı arasında 40 °C'den fazla fark varsa alt grup veya prob tarafında sorun var demektir.",
        },
        {
          title: "Konum testi",
          text: "Aynı pizzayı tabanın farklı bölgelerinde pişirin. Yalnızca belirli bir bölgede taban çiğ kalıyorsa o bölgedeki rezistans veya taşın o kısmı sorunludur. Her yerde aynıysa genel bir güç kaybı vardır.",
        },
        {
          title: "Taş muayenesi",
          text: "Fırın soğukken taşa bakın: çatlak var mı, yüzey kararmış ve parlaklaşmış mı, kalınlığı ilk günkü ölçüsünden belirgin biçimde azalmış mı? Üçünden biri varsa taş değişimi gündemdedir.",
        },
      ],
    },

    { t: "h2", text: "Sebep 1: Alt rezistans zayıflaması veya kaybı" },
    {
      t: "p",
      text: "Taş tabanlı elektrikli fırınlarda alt ve üst rezistans grupları bağımsızdır. Alt gruptan bir rezistans yandığında cihaz çalışmaya devam eder — üst ısı normaldir, panel set sıcaklığı gösterir — ama tabana giden güç azalmıştır. Klasik 'üstü yanıyor, altı çiğ' tablosu tam olarak budur.",
    },
    {
      t: "p",
      text: "Teşhis, alt grubun her rezistansının direncini ohmmetre ile ölçmekle konur. Açık devre olan rezistans yanmıştır. Gövdeye karşı izolasyon direnci de ölçülür; düşükse rezistans nem çekmiş demektir ve kısa süre içinde kaçak akım rölesini attıracaktır.",
    },
    {
      t: "p",
      text: "Çözüm rezistans değişimidir; ancak burada sık yapılan bir hata var: alt rezistans değiştirilir, taş kontrol edilmez. Taş da yorulmuşsa sorun tam olarak çözülmez ve işletme birkaç hafta içinde aynı şikâyetle geri döner. İkisi birlikte değerlendirilmelidir.",
    },

    { t: "h2", text: "Sebep 2: Pişirme taşının ısı kapasitesini yitirmesi" },
    {
      t: "p",
      text: "Pişirme taşı yalnızca bir yüzey değil, bir ısı deposudur. Fırın ısınırken taş enerji yükler; pizza konduğunda bu enerjiyi hızla hamura aktarır. Kapasitesi düştüğünde ilk pizza iyi çıkar, ardışık pizzalarda taban giderek kötüleşir.",
    },
    {
      t: "p",
      text: "Kapasite üç şekilde düşer:",
    },
    {
      t: "ul",
      items: [
        "Çatlama — çatlak, ısı iletimini böler ve o hat boyunca soğuk bir şerit oluşturur",
        "İncelme — sürekli kazıma ve aşınma taşı zamanla inceltir; ince taş daha az enerji depolar",
        "Yağ doygunluğu — gözenekleri dolan taş hem nemi emmez hem ısıyı farklı iletir; taban çıtır değil lastiksi olur",
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "Taşı asla suyla yıkamayın",
      text: "Gözenekli taş suyu emer; ısındığında içerideki su buhara dönüşerek taşı içeriden çatlatır. Temizlik yalnızca kuru fırça ve kazıyıcı ile, taş soğukken yapılır. Deterjan da kullanılmaz — taş kimyasalı emer ve sonraki pişirmelerde ürüne geçer.",
    },
    {
      t: "p",
      text: "Ticari kullanımda taş ömrü ortalama 2-4 yıldır. Hangi malzemenin işletmenize uygun olduğunu [şamot mu kordiyerit mi karşılaştırmasında](/blog/pizza-firin-tasi-secimi-samot-mu-kordiyerit-mi) ayrıntılı anlattık; değişim ve montajı [pizza fırın taşı değişimi](/hizmetler/pizza-firin-tasi-degisimi) hizmetimiz kapsamında yapıyoruz. Yoğun servis, sık ısı değişimi ve yanlış temizlik bu süreyi kısaltır. Değişimde iki malzeme arasında seçim yaparsınız: şamot yüksek ısı kapasitesiyle uzun süre sabit sıcaklıkta çalışan fırınlar için, kordiyerit ise termal şok dayanımıyla kapısı sık açılan yoğun işletmeler için daha uygundur.",
    },

    { t: "h2", text: "Sebep 3: Prob sapması ve yanlış okuma" },
    {
      t: "p",
      text: "Sıcaklık probu yaşlandıkça direnç–sıcaklık eğrisi kayar. Cihaz gerçekte 280 °C iken 340 °C okuyorsa ısıtmayı erken keser; panel 'hazır' der ama fırın hazır değildir. Bu durumda hem üst hem taban etkilenir, ancak taban ısı deposuna bağlı olduğu için sorunu önce orada fark edersiniz.",
    },
    {
      t: "p",
      text: "Prob konumu da önemlidir. Kubbeye yakın konumlanmış bir prob, taban sıcaklığı hakkında hiçbir şey bilmez. Bazı modellerde probun kaydırılması ya da alt bölge için ayrı bir prob eklenmesi kalıcı çözüm sağlar.",
    },
    {
      t: "p",
      text: "Kalibrasyon işlemi basittir: kalibre referans termometre ile fırın içi ölçülür, cihazın gösterge değeriyle karşılaştırılır ve kontrol kartındaki offset parametresi düzeltilir. Ölçüm değerleri servis formuna yazılır.",
    },

    { t: "h2", text: "Sebep 4: Yoğun serviste toparlanamama" },
    {
      t: "p",
      text: "Bu teknik olarak bir arıza değil, kapasite sorunudur. Her kapı açılışında taban ısısının bir kısmı gider; art arda gelen siparişlerde taş yeniden yüklenmeye fırsat bulamaz. Sabah mükemmel çalışan fırın, akşam 20:00'de sürekli çiğ taban üretir.",
    },
    {
      t: "ul",
      items: [
        "Kapı açık kalma süresini kısaltın — hazırlığı tamamlamadan kapıyı açmayın",
        "Pizzaları taban üzerinde döndürerek soğumuş bölgeye değil, dinlenmiş bölgeye koyun",
        "Set sıcaklığı yoğun saatlerde 10-15 °C yükseltin (üst yanma riskini gözeterek)",
        "Taş kalınlığını artırmayı değerlendirin — kalın taş daha yavaş ısınır ama daha çok enerji depolar",
        "Sipariş yoğunluğu kapasiteyi sürekli aşıyorsa ikinci kat / ikinci fırın kaçınılmazdır",
      ],
    },

    { t: "h2", text: "Konveyör fırınlarda durum farklıdır" },
    {
      t: "p",
      text: "Bantlı fırınlarda taban çiğ kalmasının nedenleri değişir. Burada ısı, taş deposundan değil doğrudan üflenen sıcak havadan gelir.",
    },
    {
      t: "table",
      head: ["Belirti", "Kontrol edilecek", "Tipik çözüm"],
      rows: [
        [
          "Taban çiğ, üst normal",
          "Alt finger (hava kanalı) delikleri tıkalı mı",
          "Finger sökülüp temizlenir",
        ],
        [
          "Pişme süresi değişken",
          "Bant hızı, zincir gerginliği, hız kontrol kartı",
          "Zincir ayarı veya kart onarımı",
        ],
        [
          "Her iki yüz de yetersiz",
          "Fan basıncı, fan kanadı deformasyonu, rezistans grubu",
          "Fan bakımı, rezistans değişimi",
        ],
        [
          "Bant kenarında farklı pişme",
          "Hava dağılımı, finger yerleşimi",
          "Finger konfigürasyonu yeniden ayarlanır",
        ],
      ],
    },

    { t: "h2", text: "Sorun her zaman fırında değildir" },
    {
      t: "p",
      text: "Dürüst olmak gerekirse: servis çağrılarımızın bir bölümünde cihazda hiçbir sorun bulmuyoruz. Taban çiğliğinin cihaz dışı sebepleri de var ve bunları elemek hem zaman hem para kazandırır.",
    },
    {
      t: "ul",
      items: [
        "Hamurun nem oranı yüksek — fazla su, tabanın kurumasını geciktirir",
        "Hamur yeterince dinlenmemiş veya buzdolabından çıkar çıkmaz kullanılıyor",
        "Sos fazla sürülmüş; taban nemi hamura geçiyor",
        "Malzeme yükü çok ağır — üst kısım pişerken taban ısı alamıyor",
        "Un yerine fazla irmik veya yağ kullanımı taban temasını bozuyor",
        "Pizza küreği ile taşa temas gecikiyor, hamur havada bekliyor",
      ],
    },
    {
      t: "note",
      tone: "info",
      title: "Basit ayırt etme yöntemi",
      text: "Sade bir hamuru (üzerinde hiçbir şey olmadan) fırına atın. Taban düzgün kızarıyor ve kabarıyorsa fırın sağlamdır; sorun reçete veya yükleme tarafındadır. Sade hamur da çiğ kalıyorsa sorun cihazdadır.",
    },

    { t: "h2", text: "Kalıcı çözüm için sıralama" },
    {
      t: "ol",
      items: [
        "Kızılötesi termometreyle taş sıcaklığını ölç, panel değeriyle karşılaştır",
        "Sade hamur testiyle cihaz–reçete ayrımını yap",
        "Alt rezistans grubunun direnç ve izolasyon ölçümünü yaptır",
        "Taşı gözle muayene et: çatlak, incelme, yağ doygunluğu",
        "Prob kalibrasyonunu doğrulat",
        "Gerekli parçaları birlikte değiştir — rezistans ve taşı ayrı ayrı ele alma",
        "Değişim sonrası kendi ürününle deneme pişirmesi yap, ayarları panelde kaydet",
      ],
    },
  ],
  faq: [
    {
      q: "Pizza fırını kaç dereceye çıkmalı?",
      a: "Napoli tipi ince hamurda 400-450 °C, klasik tabanlı pizzada 300-350 °C ideal aralıktır. Önemli olan panelin gösterdiği değer değil, taş yüzeyinin gerçek sıcaklığıdır. Kızılötesi termometre ile ölçtüğünüzde katalog değerinin 40-50 °C altındaysanız teknik bir sorun vardır.",
    },
    {
      q: "Pişirme taşı ne zaman değişmeli?",
      a: "Çatlak oluşmuşsa, yüzey ilk ölçüsüne göre belirgin biçimde incelmişse, kalıcı yağ ve karbon tabakası oturmuşsa veya ardışık pizzalarda taban ısısı toparlanmıyorsa değişim zamanı gelmiştir. Yoğun çalışan işletmelerde ortalama ömür 2-4 yıldır.",
    },
    {
      q: "Şamot mu kordiyerit mi almalıyım?",
      a: "Uzun süre sabit sıcaklıkta çalışan, kapısı seyrek açılan fırınlarda şamot daha çok ısı depolar. Yoğun servis nedeniyle kapısı sık açılan, hızlı ısı değişimi yaşayan fırınlarda ise termal şok dayanımı yüksek kordiyerit belirgin şekilde uzun ömürlüdür.",
    },
    {
      q: "Yeni taş taktım ama çatladı, neden?",
      a: "Neredeyse her zaman ilk ısıtma (kürleme) prosedürünün atlanmasından kaynaklanır. Yeni taş içinde nem barındırır; doğrudan yüksek sıcaklığa çıkarıldığında bu nem buharlaşıp taşı içeriden çatlatır. Sıcaklık 2-3 saat boyunca kademeli yükseltilmelidir. İkinci yaygın sebep, montajda genleşme payı bırakılmamasıdır.",
    },
    {
      q: "Alt rezistansı değiştirdik ama sorun devam ediyor, neden?",
      a: "En sık sebep, taşın da yorulmuş olması ve birlikte değerlendirilmemesidir. İkinci sebep prob sapmasıdır: rezistans yeni olsa da cihaz yanlış okuduğu için ısıtmayı erken keser. Üçüncü olasılık kapasite sorunudur — cihaz sağlamdır ama sipariş yoğunluğu fırının toparlanma hızını aşmaktadır.",
    },
  ],
};
