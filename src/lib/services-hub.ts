import type { FaqItem } from "./services";

/**
 * /hizmetler HUB SAYFASI ICERIGI
 * ------------------------------------------------------------------
 * Hub sayfasi genel ve karsilastirmali sorgulari hedefler
 * ("endustriyel firin ve mutfak servis hizmetleri").
 * Spesifik sorgular alt sayfalara birakilir — ayni anahtar kelimeyi
 * iki sayfada H1 yapmayin, keyword cannibalization olusur.
 */

/** Giris paragraflari — hedef kelime ilk 100 kelimede dogal geciyor */
export const hubIntro: string[] = [
  "Endüstriyel fırın ve mutfak servis hizmetlerimiz, İstanbul'da üretim yapan otel, restoran, pastane, catering ve fabrika mutfaklarının tamamına yerinde veriliyor. Konveksiyonel ve kombi fırınlardan katlı ekmek fırınlarına, konveyör bantlı pizza fırınlarından bulaşıkhane ve soğutma gruplarına kadar mutfaktaki her ekipman aynı ekip tarafından takip edilir. Amaç cihazı çalışır hale getirmek değil, arızadan önceki pişirme performansına döndürmektir.",
  "Bir mutfakta arıza nadiren tek başına gelir. Isınmayan bir fırının arkasında yanmış bir rezistans olabileceği gibi, yapışmış bir güç kontaktörü, kalibrasyonu kaymış bir sıcaklık probu veya kireçlenmiş bir buhar hattı da olabilir. Bu yüzden her müdahale gözle muayeneyle değil, elektriksel ölçüm ve fonksiyon testiyle başlar: rezistans direnci, izolasyon, faz dengesi, prob direnç–sıcaklık eğrisi ve gazlı modellerde iyonizasyon akımı tek tek kontrol edilir.",
  "Aşağıdaki altı hizmet başlığı, cihaz tipine göre uzmanlaşmış ekipleri temsil eder. Hangi başlığa gideceğinizden emin değilseniz bu sayfadaki seçim tablosunu ve arıza belirtisi tablosunu kullanın; ikisi de sizi doğru hizmet sayfasına veya konuyu ayrıntılı anlatan teknik yazıya yönlendirir.",
];

/** Bolum 4 — "Hangi hizmeti secmeliyim?" (featured snippet adayi) */
export type ChooserRow = {
  device: string;
  symptom: string;
  serviceSlug: string;
  serviceLabel: string;
};

export const hubChooser: ChooserRow[] = [
  {
    device: "Konveksiyonel / kombi fırın",
    symptom: "Buhar gelmiyor, fan ses yapıyor, panelde kart hatası var",
    serviceSlug: "konveksiyonel-firin-servisi",
    serviceLabel: "Konveksiyonel Fırın Servisi",
  },
  {
    device: "Katlı, döner, tünel veya konveyör fırın",
    symptom: "Bant durdu, pano arızası, katlar arasında ısı dengesizliği",
    serviceSlug: "sanayi-tipi-firin-servisi",
    serviceLabel: "Sanayi Tipi Fırın Servisi",
  },
  {
    device: "Taş tabanlı veya konveyörlü pizza fırını",
    symptom: "Taban çiğ kalıyor, üst yüzey yanıyor, pişirme süresi uzadı",
    serviceSlug: "pizza-firini-servisi",
    serviceLabel: "Pizza Fırını Servisi",
  },
  {
    device: "Pişirme taşı çatlamış veya aşınmış",
    symptom: "Hamur taşa yapışıyor, taş kırık, yüzey çukurlaşmış",
    serviceSlug: "pizza-firin-tasi-degisimi",
    serviceLabel: "Pizza Fırın Taşı Değişimi",
  },
  {
    device: "Bulaşıkhane, soğutma ve pişirme grubu birlikte",
    symptom: "Birden fazla ekipmanda eş zamanlı arıza veya bakım ihtiyacı",
    serviceSlug: "endustriyel-mutfak-servisi",
    serviceLabel: "Endüstriyel Mutfak Servisi",
  },
  {
    device: "Marka ve model belli, arıza belirsiz",
    symptom: "Panelde hata kodu var ama sebebi anlaşılmıyor",
    serviceSlug: "endustriyel-firin-servisi",
    serviceLabel: "Endüstriyel Fırın Servisi",
  },
];

/** Bolum 5 — Ariza belirtisi -> kok neden -> teknik yazi */
export type SymptomRow = {
  symptom: string;
  cause: string;
  postSlug: string;
  postLabel: string;
};

export const hubSymptoms: SymptomRow[] = [
  {
    symptom: "Fırın ısınmıyor veya set sıcaklığına çok geç ulaşıyor",
    cause: "Yanmış rezistans, yapışmış güç kontaktörü, kopmuş faz, arızalı sıcaklık probu",
    postSlug: "endustriyel-firin-isinmiyor-ne-yapmali",
    postLabel: "Endüstriyel fırın ısınmıyor: 9 olası neden",
  },
  {
    symptom: "Kombi fırında buhar gelmiyor, nozullar tıkanıyor",
    cause: "Kireç birikmesi, solenoid valf arızası, su yumuşatma sisteminin doygunluğu",
    postSlug: "kombi-firinda-kirec-sorunu-ve-kalici-cozumu",
    postLabel: "Kombi fırında kireç sorunu ve kalıcı çözümü",
  },
  {
    symptom: "Pizza tabanı çiğ kalıyor, üstü fazla pişiyor",
    cause: "Taban ısısı düşüklüğü, taş kalınlığı ve malzemesi, yetersiz ön ısıtma",
    postSlug: "pizza-firininda-taban-cig-kaliyor-cozum",
    postLabel: "Pizza fırınında taban çiğ kalıyor: çözüm",
  },
  {
    symptom: "Doğal gaz ve elektrik faturaları belirgin şekilde arttı",
    cause: "Sertleşmiş kapı contası, bozulmuş izolasyon, kaçmış sıcaklık ayarı, boş bekleme",
    postSlug: "sanayi-tipi-firin-enerji-tuketimi-dusurme",
    postLabel: "Sanayi tipi fırında enerji tüketimini düşürme",
  },
  {
    symptom: "Aynı arıza birkaç ayda bir tekrar ediyor",
    cause: "Periyodik bakım planının olmaması, kök neden yerine belirtinin onarılması",
    postSlug: "endustriyel-mutfak-periyodik-bakim-takvimi",
    postLabel: "Endüstriyel mutfakta periyodik bakım takvimi",
  },
  {
    symptom: "Pişirme taşı çatladı, hangi taşı alacağımı bilmiyorum",
    cause: "Şamot ve kordiyerit taşların ısı davranışı ve kalınlık farkı",
    postSlug: "pizza-firin-tasi-secimi-samot-mu-kordiyerit-mi",
    postLabel: "Pizza fırın taşı seçimi: şamot mu, kordiyerit mi?",
  },
];

/** Bolum 7 — Servis bedeli ve garanti seffafligi */
export const hubPricing = {
  intro:
    "Endüstriyel fırın servisi fiyatı tek bir rakam değildir; cihazın markası, arızanın türü ve değişecek parçaya göre belirlenir. Telefonda verilen aralık tahminidir, kesin tutar yerinde teşhis sonrası netleşir. Süreci baştan bilmeniz için mantığı açıkça yazıyoruz.",
  rows: [
    {
      title: "Yerinde arıza tespiti (servis bedeli)",
      text: "Teknisyenin işletmeye gelişi, ölçüm yapması ve arızayı raporlaması için sabit bir servis bedeli uygulanır. Onarımı biz yaparsak bu bedel toplam tutardan düşülür.",
    },
    {
      title: "İşçilik",
      text: "İşin niteliğine göre belirlenir; parça değişimi, kart onarımı ve kalibrasyon farklı işçilik kalemleridir. İşleme başlanmadan önce yazılı olarak bildirilir.",
    },
    {
      title: "Yedek parça",
      text: "Kritik parçalarda öncelik marka orijinalidir. Orijinal parçanın tedarik süresi işletmeyi bekletecekse, aynı teknik değerlerde sertifikalı muadil seçeneği fiyatıyla birlikte sunulur; tercihi siz yaparsınız.",
    },
    {
      title: "Onay şartı",
      text: "Parça ve işçilik bedeli onaylanmadan hiçbir işlem yapılmaz. Onarımın ekonomik olmadığı durumlarda bunu açıkça söyler, cihaz yenileme alternatifini sunarız.",
    },
    {
      title: "Garanti",
      text: "Yapılan işçilik 24 aya kadar, değişen parçalar ise üretici garanti süresi boyunca garantilidir. Garanti kapsamındaki aynı arıza için servis ve işçilik bedeli alınmaz.",
    },
    {
      title: "Belgelendirme",
      text: "Her servis sonunda servis formu ve fatura teslim edilir. Formda yapılan ölçümler, değişen parçalar ve öneriler yazılıdır; bu belge sonraki bakımlar için cihaz geçmişi oluşturur.",
    },
  ],
};

/**
 * Bolum 9 — Hub sayfasina ozel SSS.
 * Ana sayfadaki ve alt sayfalardaki SSS'lerle KESISMEZ; buradaki
 * sorular "hangi hizmet, nasil calisiyor, nasil fiyatlaniyor"
 * eksenindedir.
 */
export const hubFaq: FaqItem[] = [
  {
    q: "Endüstriyel fırın servisi ile endüstriyel mutfak servisi arasındaki fark nedir?",
    a: "Endüstriyel fırın servisi yalnızca pişirme fırınlarını kapsar: konveksiyonel, kombi, katlı, döner, konveyör ve taş tabanlı modeller. Endüstriyel mutfak servisi ise mutfağın tamamını kapsayan daha geniş bir başlıktır; fırınların yanında bulaşık makinesi, soğutma grubu, ocak ve fritöz, davlumbaz ve hazırlık ekipmanları da dahildir. Tek arızalı cihazınız varsa fırın servisi, mutfağın bütününde bakım planı istiyorsanız mutfak servisi doğru başlıktır.",
  },
  {
    q: "Cihazımın markası listenizde yok, yine de servis veriyor musunuz?",
    a: "Evet. Sitedeki 17 marka en sık servis verdiklerimizdir, kapsamımızın sınırı değildir. Endüstriyel fırınların büyük bölümü aynı bileşen ailesini kullanır: rezistans, kontaktör, NTC/PT100 prob, fan motoru, gaz valfi ve kontrol kartı. Markası ne olursa olsun teşhis aynı ölçüm mantığıyla yapılır. Az bilinen veya ithal bir markada parça tedarik süresi uzayabilir; bunu ilk görüşmede açıkça bildiririz.",
  },
  {
    q: "Arıza tespiti için servis bedeli alıyor musunuz, onarım yapılırsa mahsup ediliyor mu?",
    a: "Yerinde arıza tespiti için sabit bir servis bedeli uygulanır. Onarımı tarafımız yaparsa bu bedel toplam tutardan düşülür. Onarımı yaptırmamayı seçerseniz servis bedeli tahsil edilir; karşılığında yapılan ölçümleri ve arızanın kaynağını gösteren yazılı servis formunu alırsınız.",
  },
  {
    q: "Yedek parça orijinal mi, muadil mi? Nasıl karar veriliyor?",
    a: "Kontrol kartı, gaz valfi ve fan motoru gibi kritik parçalarda öncelik daima marka orijinalidir. Orijinal parçanın tedarik süresi işletmeyi durduracaksa, aynı teknik değerlere sahip sertifikalı muadil seçeneğini fiyatı ve garanti süresiyle birlikte sunarız. İki seçeneği de görüp kararı siz verirsiniz; sizin adınıza sessizce muadil takılmaz.",
  },
  {
    q: "Periyodik bakım sözleşmesi hangi ekipmanları kapsıyor?",
    a: "Sözleşme mutfağın envanterine göre hazırlanır. Standart kapsam; fırınlarda kireç çözme, conta ve menteşe kontrolü, elektriksel bağlantı sıkma, fan temizliği ve sıcaklık kalibrasyonunu, mutfak genelinde ise soğutma gruplarının kondenser temizliğini, bulaşık makinesi kireç kontrolünü ve gaz hattı sızdırmazlık gözlemini içerir. Günde 8 saatin üzerinde çalışan işletmelerde 3 ayda bir, normal yoğunluktaki mutfaklarda 6 ayda bir ziyaret önerilir.",
  },
  {
    q: "Hafta sonu ve gece arıza müdahalesi yapıyor musunuz?",
    a: "Evet. Hafta içi 08:00-20:00 ve cumartesi 09:00-18:00 saatleri normal servis penceresidir. Bu saatler dışında üretimi tamamen durduran arızalar için 7/24 acil hat çalışır. Acil müdahalede mesai dışı servis bedeli uygulanır ve bu fark siz onaylamadan işleme alınmaz.",
  },
  {
    q: "Onarım mı ekonomik, yenileme mi? Nasıl karar veriyorsunuz?",
    a: "Ölçüt basittir: onarım maliyeti cihazın güncel ikinci el değerinin yarısını aşıyorsa ve gövde, izolasyon ya da kazan gibi ana bileşenlerde yorgunluk varsa yenileme önerilir. Buna karşılık gövdesi sağlam bir cihazda rezistans, kontaktör veya kart değişimi çoğu zaman yeni cihaz fiyatının çok altında kalır. Kararı verirken cihazın yaşını, yıllık arıza sayısını ve enerji tüketimini birlikte değerlendirir, gerekçeyi yazılı olarak bildiririz.",
  },
  {
    q: "Servis sonrası hangi belgeleri teslim ediyorsunuz?",
    a: "Her müdahale sonunda servis formu ve fatura teslim edilir. Servis formunda arıza tanımı, yapılan ölçüm değerleri, değişen parçaların listesi, uygulanan garanti süresi ve işletmeye yönelik kullanım önerileri yer alır. Periyodik bakımlarda ayrıca bir sonraki bakım tarihi yazılır; bu kayıtlar zamanla cihazın arıza geçmişini oluşturur ve tekrarlayan sorunların kök nedenini bulmayı kolaylaştırır.",
  },
];
