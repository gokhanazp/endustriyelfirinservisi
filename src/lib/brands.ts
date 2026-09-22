import type { FaqItem } from "./services";

export type Brand = {
  slug: string;
  /** Marka adi — "Electrolux" */
  name: string;
  /** Alternatif yazimlar (arama ve anahtar kelime icin) */
  aliases: string[];
  origin: string;
  /** Kisa taniticı cumle — kart uzerinde gorunur */
  tagline: string;
  /** Marka adiyla birlikte "fırın tamiri" ifadesini iceren ozgun paragraf */
  repairNote: string;
  /** Marka bazli fiyatlandirma aciklamasi */
  priceNote: string;
  intro: string[];
  productLines: string[];
  commonFaults: { title: string; text: string }[];
  parts: string[];
  faq: FaqItem[];
};

const commonBrandFaq = (name: string): FaqItem[] => [
  {
    q: `${name} fırın servisi aynı gün gelebilir mi?`,
    a: `Evet. İstanbul'un 39 ilçesinde bölgesel ekip bulunduğu için ${name} cihazlarınıza aynı gün yerinde müdahale hedeflenir. Hafta içi 16:00'a kadar açılan kayıtlarda ortalama varış süresi 2-4 saattir.`,
  },
  {
    q: `${name} fırın tamiri ne kadar sürer?`,
    a: `${name} fırın tamiri işlerinin büyük bölümü, parça araç stoğunda olduğunda 1-3 saat içinde yerinde tamamlanır. Elektronik kart onarımı veya özel ölçü parça gerektiren durumlarda süre 1-3 iş gününe çıkabilir; bu sürede cihazı kısıtlı da olsa çalışır durumda tutacak geçici çözümler uygulanır.`,
  },
  {
    q: `${name} fırın tamiri garantili mi?`,
    a: `Evet. ${name} cihazlarında yapılan işçilik 24 aya kadar, değişen parçalar ise üretici garanti süresi boyunca garanti altındadır. Garanti kapsamındaki aynı arıza için servis ve işçilik bedeli alınmaz; her tamir servis formu ve fatura ile belgelenir.`,
  },
  {
    q: `${name} yedek parçaları temin ediliyor mu?`,
    a: `Rezistans, prob, kontaktör, fan motoru ve kontrol kartı gibi sık değişen ${name} parçalarında stok tutuyoruz. Stokta olmayan özel parçalar tedarikçi ağımız üzerinden ortalama 1-3 iş gününde temin edilir; bu sürede cihazı geçici çalışır durumda tutacak çözümler uygulanır.`,
  },
  {
    q: `Eski model ${name} fırınlar tamir edilebiliyor mu?`,
    a: `Üretimden kalkmış ${name} modellerinde parça envanterimiz, muadil tedarikçi ağımız ve gerektiğinde imalat çözümleriyle (özel ölçü rezistans sarımı, conta kesimi, fan kanadı balanslama) çalışıyoruz. Tamirin ekonomik olmadığı durumlarda bunu açıkça söyler, cihaz yenileme alternatifini maliyet karşılaştırmasıyla sunarız.`,
  },
];

export const brands: Brand[] = [
  {
    slug: "electrolux-firin-servisi",
    name: "Electrolux",
    aliases: ["Elektrolux", "Electrolux Professional"],
    origin: "İsveç / İtalya",
    tagline:
      "Kombi fırın, blast chiller ve profesyonel mutfak hatlarında elektronik ağırlıklı servis.",
    repairNote:
      "Electrolux fırın tamiri, cihazların elektronik mimarisi nedeniyle klasik onarımdan farklı ilerler: hata kaydı okunur, sensör–kart–aktüatör zinciri sırayla ölçülür ve arızalı halka izole edilir. Bu yaklaşım hem gereksiz parça değişimini önler hem de tamir süresini kısaltır.",
    priceNote:
      "Electrolux fırın tamiri fiyatı; arızanın buhar grubunda mı, kontrol kartında mı yoksa mekanik tarafta mı olduğuna göre belirlenir. Kart onarımı çoğu vakada komple kart değişiminden belirgin şekilde ekonomiktir ve iki seçenek de fiyatıyla birlikte sunulur.",
    intro: [
      "Electrolux Professional cihazları, elektronik kontrol mimarisi ve otomatik pişirme programlarıyla öne çıkar. Bu güçlü yanı aynı zamanda servisin en teknik tarafıdır: bir Electrolux kombi fırında arıza çoğu zaman tek bir parçada değil, sensör–kart–aktüatör zincirinin bir halkasında gizlidir. Electrolux fırın servisi ve tamiri çalışmalarımız bu nedenle hata kodu okuma ve parametre analiziyle başlar.",
      "Servis ekibimiz air-o-steam ve SkyLine serisi kombi fırınlar, konveksiyonel modeller, blast chiller (şoklama) üniteleri ve Electrolux endüstriyel bulaşık makinelerinde çalışır. Otomatik yıkama sistemi, buhar üretim grubu, çekirdek sıcaklık probu ve dokunmatik panel arızaları en sık karşılaştığımız başlıklardır.",
      "Su sertliği yüksek bölgelerde Electrolux buhar gruplarında kireç kaynaklı arızalar hızla tekrarlar. Bu nedenle onarımın yanı sıra cihaz girişindeki su yumuşatma çözümünü de kontrol eder, gerekiyorsa reçine değişimi ve filtre kurulumunu aynı serviste tamamlarız.",
    ],
    productLines: [
      "air-o-steam kombi fırınlar",
      "SkyLine Pro / SkyLine Premium serisi",
      "Konveksiyonel fırınlar",
      "Blast chiller ve şoklama üniteleri",
      "Endüstriyel bulaşık makineleri",
      "Thermaline pişirme hatları",
    ],
    commonFaults: [
      {
        title: "Hata kodu ile kilitlenme",
        text: "Prob açık devre, aşırı sıcaklık koruması ve besleme kartı hataları cihazı devre dışı bırakır; kod okunarak ilgili grup hedeflenir.",
      },
      {
        title: "Buhar üretmiyor",
        text: "Kireçlenmiş boyler, tıkalı nozul, su pompası ve solenoid valf arızası buhar çevrimini keser.",
      },
      {
        title: "Otomatik yıkama yarıda kesiliyor",
        text: "Deterjan/parlatıcı pompası, seviye sensörü ve tahliye pompası kaynaklı hatalar yıkama programını tamamlatmaz.",
      },
      {
        title: "Dokunmatik panel tepkisiz",
        text: "Isı ve nemden etkilenen panel filmi ile besleme kartı arızaları kullanıcı arayüzünü kilitler.",
      },
    ],
    parts: [
      "Buhar boyleri ve rezistansı",
      "Çekirdek sıcaklık probu",
      "Su pompası ve solenoid valf",
      "Kontrol kartı ve dokunmatik panel",
      "Kapı contası ve menteşe seti",
      "Fan motoru ve kondansatör",
    ],
    faq: [
      {
        q: "Electrolux kombi fırında hata kodunu kendim silebilir miyim?",
        a: "Bazı uyarı kodları cihaz resetlendiğinde geçici olarak kaybolur; ancak kodun kaynağı giderilmediyse kısa sürede tekrar eder ve arıza büyür. Kodun anlamını telefonda söyleyebilir, ön teşhis yapabiliriz.",
      },
      ...commonBrandFaq("Electrolux"),
    ],
  },
  {
    slug: "ayfa-firin-servisi",
    name: "Ayfa",
    aliases: ["Ayfa Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Endüstriyel mutfak ve fırın gruplarında sağlam mekanik yapı, hızlı parça temini.",
    repairNote:
      "Ayfa fırın tamiri, cihazların mekanik ağırlıklı yapısı sayesinde büyük ölçüde yerinde tamamlanır. Rezistans, termostat, kontaktör ve fan grubu sahada değiştirilebildiği için işletmeyi ikinci bir ziyaret için bekletmeyiz.",
    priceNote:
      "Ayfa fırın tamiri fiyatı; değişecek parçaya ve müdahale süresine göre belirlenir. Rezistans ve termostat gibi standart kalemlerde maliyet öngörülebilir olduğundan telefonda gerçekçi bir aralık verilebilir.",
    intro: [
      "Ayfa cihazları, endüstriyel mutfaklarda uzun ömürlü ve tamir edilebilir yapısıyla bilinir. Mekanik ağırlıklı tasarım, doğru teşhis yapıldığında onarımı hızlandırır: rezistans, termostat ve kontaktör gibi kalemler yerinde değiştirilebilir. Ayfa fırın servisi ve tamiri hizmetimizde çoğu arıza tek serviste kapatılır.",
      "Konveksiyonel fırınlar, pide ve lahmacun fırınları, kuzine ocaklar, fritöz ve benmari gruplarında çalışıyoruz. Yoğun kullanımda en sık görülen sorunlar; rezistans yanması, termostat kalibrasyon kayması, kapı contası sertleşmesi ve fan rulmanı aşınmasıdır.",
      "Ayfa cihazlarında elektriksel bağlantı noktalarının periyodik sıkılması ciddi fark yaratır. Gevşeyen klemens bağlantıları ısınma yaparak kablo ve terminal yanmalarına yol açar; bakım ziyaretlerimizde bu kontrol standart olarak yapılır.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Pide ve lahmacun fırınları",
      "Kuzine ocaklar ve setüstü gruplar",
      "Fritöz ve benmari üniteleri",
      "Bulaşık makineleri",
      "Paslanmaz hazırlık ekipmanları",
    ],
    commonFaults: [
      {
        title: "Rezistans yanması",
        text: "Yoğun çalışma ve gerilim dalgalanmaları rezistans ömrünü kısaltır; direnç ölçümüyle grup tespit edilir.",
      },
      {
        title: "Termostat sapması",
        text: "Kapiler termostatlarda zamanla oluşan kayma, gösterge ile gerçek sıcaklık arasında fark yaratır.",
      },
      {
        title: "Kapı contası ve ısı kaçağı",
        text: "Sertleşen conta ve ayarı bozulan menteşe ısı kaybını artırır, pişirme süresini uzatır.",
      },
      {
        title: "Fan rulmanı sesi",
        text: "Aşınan rulman önce ses, ardından devir düşüşü ve pişirme dengesizliği olarak kendini gösterir.",
      },
    ],
    parts: [
      "Rezistans grupları",
      "Kapiler ve emniyet termostatı",
      "Fan motoru ve rulman seti",
      "Kontaktör ve termik röle",
      "Kapı contası ve menteşe",
      "Zaman rölesi ve şalter grubu",
    ],
    faq: commonBrandFaq("Ayfa"),
  },
  {
    slug: "ucler-firin-servisi",
    name: "Üçler",
    aliases: ["Ucler", "Üçler Makina"],
    origin: "Türkiye",
    tagline:
      "Pide, lahmacun ve konveksiyonel fırınlarda taş taban ve rezistans uzmanlığı.",
    repairNote:
      "Üçler fırın tamiri işlerinde katlı modellerin bağımsız kontrol yapısı avantaja dönüşür: arızalı kat izole edilip onarılırken diğer katlar üretime devam edebilir. Taş tabanlı modellerde ise tamir kapsamına taban taşı kontrolü de dâhil edilir.",
    priceNote:
      "Üçler fırın tamiri fiyatı; arızanın tek katla mı sınırlı olduğuna, taban taşının durumuna ve değişecek rezistans sayısına göre değişir. Taş değişimi gerekiyorsa aynı serviste yapılabildiği için ikinci bir işçilik bedeli doğmaz.",
    intro: [
      "Üçler fırınları, özellikle pide, lahmacun ve pizza üretimi yapan işletmelerde yaygındır. Taş tabanlı modellerde performansın belirleyicisi rezistans gücü kadar taban taşının durumudur. Üçler fırın servisi ve tamiri çalışmalarımızda taban ısısı ve taş sağlığı her zaman birlikte ölçülür.",
      "Katlı modellerde her katın bağımsız kontrol grubu bulunur; bu nedenle 'fırının bir katı çalışmıyor' şikâyeti çoğunlukla o kata ait kontaktör, termostat veya rezistans grubuna işaret eder. Doğru kat izole edilerek müdahale süresi kısalır, diğer katlar üretime devam eder.",
      "Üçler konveksiyonel modellerde ise fan grubu, hava yönlendirme sacı ve buhar püskürtme nozulu bakım gerektiren başlıca noktalardır. Nozul tıkanıklığı, ekmek ve pidede kabuk kalitesini doğrudan düşürür.",
    ],
    productLines: [
      "Katlı pide ve lahmacun fırınları",
      "Taş tabanlı pizza fırınları",
      "Konveksiyonel fırınlar",
      "Döner ve rotary fırınlar",
      "Hamur hazırlık makineleri",
    ],
    commonFaults: [
      {
        title: "Bir kat ısınmıyor",
        text: "Kat bazlı kontaktör, termostat veya rezistans arızası tek katı devre dışı bırakır.",
      },
      {
        title: "Taban çiğ kalıyor",
        text: "Zayıflamış alt rezistans veya çatlamış / incelmiş pişirme taşı taban ısısını düşürür.",
      },
      {
        title: "Buhar nozulu tıkanması",
        text: "Kireç birikimi nozulu daraltır; buhar püskürtme zayıflar ve kabuk parlaklığı kaybolur.",
      },
      {
        title: "Kapı camı ve conta sorunları",
        text: "Yüksek sıcaklıkta çalışan kapı gruplarında cam çatlaması ve conta deformasyonu sık görülür.",
      },
    ],
    parts: [
      "Üst / alt rezistans grupları",
      "Şamot ve kordiyerit pişirme taşı",
      "Kat kontaktörü ve termostat",
      "Buhar nozulu ve su pompası",
      "Seramik kapı camı ve conta",
    ],
    faq: [
      {
        q: "Üçler fırınımın taban taşını yenileyebilir misiniz?",
        a: "Evet. Fırın tabanı ölçülür, şamot veya kordiyerit taş ölçüye özel kesilir, eski taş sökülüp yenisi genleşme payı bırakılarak monte edilir ve ilk ısıtma prosedürü uygulanır.",
      },
      ...commonBrandFaq("Üçler"),
    ],
  },
  {
    slug: "pimak-firin-servisi",
    name: "Pimak",
    aliases: ["Pimak Makina"],
    origin: "Türkiye",
    tagline:
      "Unlu mamul, pizza ve konveyör fırın gruplarında üretim hattı odaklı servis.",
    repairNote:
      "Pimak fırın tamiri, konveyör ve döner modellerde tahrik grubunu merkeze alır: bant hızı, zincir gerginliği, redüktör ve hız kontrol kartı birlikte değerlendirilir. Yalnızca duran parçayı değiştirmek yerine tahrik zincirinin tamamı kontrol edilir.",
    priceNote:
      "Pimak fırın tamiri fiyatı; arızanın tahrik grubunda mı, buhar tarafında mı yoksa elektronik kartta mı olduğuna göre belirlenir. Üretim hattını durduran arızalarda öncelikli servis planlaması yapılır.",
    intro: [
      "Pimak fırınları, pastane ve unlu mamul üretiminden pizza zincirlerine kadar geniş bir kullanım alanına sahiptir. Konveyör bantlı modeller, sabit hızda sürekli üretim yaptığı için bant tahrik sistemi ve hava kanalları servisin ana odağıdır. Pimak fırın servisi ve tamiri hizmetimizde bant hızı ve hava basıncı her müdahalede ölçülür.",
      "Katlı ve döner modellerde ise buhar üretim grubu, kat kontrol devreleri ve tahrik motoru üzerinde çalışıyoruz. Döner fırınlarda arabanın dönüş mekanizması, zincir gerginliği ve fırın içi hava sirkülasyonu pişirme homojenliğini belirler.",
      "Pimak cihazlarında panel arızalarının önemli bölümü, yüksek ısıya maruz kalan besleme kartı ve gevşeyen konnektörlerden kaynaklanır. Kart onarımı çoğu durumda mümkündür; komple kart değişimi yalnızca onarımın ekonomik olmadığı hallerde önerilir.",
    ],
    productLines: [
      "Konveyör bantlı pizza fırınları",
      "Katlı (deck) unlu mamul fırınları",
      "Döner rotary fırınlar",
      "Konveksiyonel fırınlar",
      "Hamur hazırlık ve fermantasyon üniteleri",
    ],
    commonFaults: [
      {
        title: "Konveyör bant hızı sapması",
        text: "Aşınmış bant, gevşemiş zincir ve hız kontrol kartı arızası pişirme süresini değiştirir.",
      },
      {
        title: "Döner fırında araba dönmüyor",
        text: "Tahrik motoru, redüktör veya kavrama grubu arızası fırın içi dönüşü durdurur.",
      },
      {
        title: "Buhar yetersizliği",
        text: "Kireçlenmiş buhar bloğu ve arızalı su pompası ekmek kabuk kalitesini düşürür.",
      },
      {
        title: "Panel besleme arızası",
        text: "Isı etkisiyle bozulan güç kartı ve gevşeyen konnektörler panelin kapanmasına neden olur.",
      },
    ],
    parts: [
      "Konveyör bant ve zincir seti",
      "Tahrik motoru ve redüktör",
      "Hız kontrol kartı / invertör",
      "Buhar bloğu ve su pompası",
      "Güç kartı ve kontrol paneli",
    ],
    faq: commonBrandFaq("Pimak"),
  },
  {
    slug: "inoksan-firin-servisi",
    name: "İnoksan",
    aliases: ["Inoksan", "İnoksan Profesyonel Mutfak"],
    origin: "Türkiye (Bursa)",
    tagline:
      "Kombi fırın ve komple mutfak hatlarında yaygın kullanım, geniş parça erişimi.",
    repairNote:
      "İnoksan fırın tamiri, markanın yaygınlığı sayesinde hızlı ilerler: arıza profilleri bilinen, parça erişimi kolay bir markadır. Bu nedenle İnoksan cihazlarında işlerin büyük bölümü tek ziyarette kapanır.",
    priceNote:
      "İnoksan fırın tamiri fiyatı; buhar grubu, fan, rezistans veya elektronik kart gibi arızalı gruba göre belirlenir. Komple mutfak hattı bulunan işletmelerde sözleşmeli bakım kapsamında indirimli işçilik uygulanır.",
    intro: [
      "İnoksan, Türkiye'deki profesyonel mutfakların en yaygın markalarından biridir; otel, hastane, fabrika yemekhanesi ve zincir restoranlarda komple mutfak hatları kurulu durumdadır. Bu yaygınlık servis açısından avantaj sağlar: parça erişimi hızlı, arıza profilleri iyi bilinen bir markadır. İnoksan fırın servisi ve tamiri taleplerinde çoğu iş tek ziyarette kapanır.",
      "Kombi (buharlı) fırınlar, konveksiyonel modeller, kuzine ocak grupları, bulaşıkhane ekipmanları ve pişirme hatlarında çalışıyoruz. Kombi modellerde buhar üretimi, otomatik yıkama ve prob grubu; konveksiyonel modellerde ise fan motoru ve rezistans en sık müdahale edilen başlıklardır.",
      "Büyük mutfaklarda İnoksan ekipmanları genellikle tek hat üzerinde çalışır. Bu yüzden servislerimizde yalnızca arızalı cihaz değil, aynı hattaki elektrik panosu, gaz hattı ve su bağlantıları da hızlı kontrol edilerek tekrar eden arızaların kök nedeni araştırılır.",
    ],
    productLines: [
      "Kombi (buharlı) fırınlar",
      "Konveksiyonel fırınlar",
      "Kuzine ocak ve pişirme hatları",
      "Bulaşıkhane ekipmanları",
      "Benmari, fritöz ve ızgara grupları",
      "Paslanmaz mutfak tezgâh sistemleri",
    ],
    commonFaults: [
      {
        title: "Buhar üretim arızası",
        text: "Kireçlenme, su pompası ve solenoid valf sorunları buhar çevrimini durdurur.",
      },
      {
        title: "Fan motoru arızası",
        text: "Rulman aşınması ve sarım yanması, ses ve pişirme dengesizliği olarak ortaya çıkar.",
      },
      {
        title: "Prob hatası",
        text: "Hazne ve çekirdek problarında kopukluk, ekranda hata kodu ve yanlış sıcaklık okuması yaratır.",
      },
      {
        title: "Kapı sızdırması",
        text: "Deforme conta ve ayarı bozulan menteşe hem ısı kaybı hem de buhar kaçağı oluşturur.",
      },
    ],
    parts: [
      "Buhar rezistansı ve boyler grubu",
      "Hazne / çekirdek sıcaklık probu",
      "Fan motoru ve kondansatör",
      "Kontrol kartı ve tuş takımı",
      "Su pompası, solenoid valf",
      "Kapı contası ve menteşe seti",
    ],
    faq: [
      {
        q: "İnoksan mutfak hattımın tamamı için bakım sözleşmesi yapabilir misiniz?",
        a: "Evet. Fırın, ocak, fritöz, bulaşıkhane ve soğutma grubunu kapsayan envanter çıkarılır, her cihaz için bakım periyodu belirlenir ve tek sözleşmede toplanır. Bakım sonrası fotoğraflı rapor teslim edilir.",
      },
      ...commonBrandFaq("İnoksan"),
    ],
  },
  {
    slug: "venarro-firin-servisi",
    name: "Venarro",
    aliases: ["Venarro Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Kompakt konveksiyonel fırın ve pişirme gruplarında ekonomik onarım çözümleri.",
    repairNote:
      "Venarro fırın tamiri, kompakt cihazların sade elektromekanik yapısı sayesinde genellikle tek ziyarette tamamlanır. Tamir sırasında kontrol kartı bölmesinin havalandırması da temizlenir; bu adım tekrar eden kart arızalarının önüne geçer.",
    priceNote:
      "Venarro fırın tamiri fiyatı; rezistans, fan motoru veya kontrol kartı gibi arızalı gruba göre belirlenir. Kompakt modellerde parça maliyetleri görece düşük olduğu için onarım çoğu zaman cihaz yenilemeden çok daha ekonomiktir.",
    intro: [
      "Venarro cihazları, orta ölçekli restoran, kafe ve pastanelerde sık tercih edilir. Kompakt konveksiyonel fırınlar ve pişirme grupları, sade elektromekanik yapıları sayesinde hızlı onarıma uygundur. Venarro fırın servisi ve tamiri hizmetimizde teşhis genellikle tek ziyarette tamamlanır.",
      "En sık karşılaştığımız başlıklar; rezistans grubu arızaları, fan motoru rulman sesi, buhar püskürtme sisteminde kireç tıkanıklığı ve kapı menteşesi ayarıdır. Küçük hacimli fırınlarda kapı sızdırması, büyük cihazlara göre pişirme kalitesini daha hızlı etkiler.",
      "Tezgâh üstü modellerde havalandırma ızgaralarının yağ ve toz ile tıkanması, kontrol kartının aşırı ısınmasına ve erken arızalanmasına neden olur. Periyodik temizlik bu arızaların büyük bölümünü önler.",
    ],
    productLines: [
      "Kompakt konveksiyonel fırınlar",
      "Buharlı konveksiyon modelleri",
      "Tezgâh üstü pişirme grupları",
      "Fritöz, ızgara ve pleyt üniteleri",
      "Bulaşık ve bardak yıkama makineleri",
    ],
    commonFaults: [
      {
        title: "Rezistans grubu arızası",
        text: "Kompakt hacimde yoğun çalışan rezistanslarda kısa ömür ve nokta yanması görülebilir.",
      },
      {
        title: "Kontrol kartı aşırı ısınması",
        text: "Tıkalı havalandırma ızgaraları kart bölmesinde ısı birikimi yaratır.",
      },
      {
        title: "Buhar püskürtme tıkanıklığı",
        text: "Kireç birikimi nozulu daraltır; buhar zayıflar veya hiç gelmez.",
      },
      {
        title: "Kapı ayarı ve sızdırma",
        text: "Menteşe ayarı bozulan kapıda ısı ve buhar kaçağı pişirme süresini uzatır.",
      },
    ],
    parts: [
      "Rezistans ve buhar rezistansı",
      "Fan motoru ve kanat",
      "Kontrol kartı ve tuş takımı",
      "Su pompası ve nozul",
      "Kapı contası ve menteşe",
    ],
    faq: commonBrandFaq("Venarro"),
  },
  {
    slug: "empero-firin-servisi",
    name: "Empero",
    aliases: ["Empero Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Geniş ekipman yelpazesinde standart parça uyumu ve hızlı müdahale.",
    repairNote:
      "Empero fırın tamiri işlerinde standart tip parça kullanımı büyük kolaylık sağlar: rezistans, termostat, kontaktör ve fan motoru genellikle araç stoğundan karşılanır. Pizza modellerinde tamir kapsamına taban taşı kontrolü de eklenir.",
    priceNote:
      "Empero fırın tamiri fiyatı; değişecek parçaya ve cihaz tipine göre belirlenir. Standart parça kullanımı sayesinde hem maliyet öngörülebilir hem de bekleme süresi kısadır.",
    intro: [
      "Empero, fırından ocağa, fritözden bulaşık makinesine kadar geniş bir ekipman yelpazesine sahiptir. Cihazlarda büyük ölçüde standart tip parça kullanılması, servis açısından belirgin bir avantajdır: rezistans, termostat, kontaktör ve fan motoru gibi kalemler çoğunlukla stoktan karşılanır. Empero fırın servisi ve tamiri işlerinde bekleme süresi bu nedenle kısadır.",
      "Konveksiyonel fırınlar, pizza ve pide fırınları, kuzine ocak grupları ve yıkama ekipmanlarında çalışıyoruz. En sık müdahale edilen noktalar; rezistans yanması, termostat sapması, fan motoru ve kapı grubu sorunlarıdır.",
      "Empero pizza fırınlarında taban taşı durumu ile üst-alt rezistans dengesi birlikte değerlendirilir. Yalnızca rezistans değiştirmek, taş yorulmuşsa beklenen performansı vermez; her iki kalem aynı serviste kontrol edilir.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Pizza ve pide fırınları",
      "Kuzine ocaklar ve setüstü gruplar",
      "Fritöz, ızgara, pleyt",
      "Bulaşık ve bardak yıkama makineleri",
      "Soğutma ve teşhir dolapları",
    ],
    commonFaults: [
      {
        title: "Rezistans ve termostat arızaları",
        text: "En sık görülen kalemlerdir; direnç ve süreklilik ölçümüyle hızla tespit edilir.",
      },
      {
        title: "Fan motoru sesi ve devir düşüşü",
        text: "Rulman aşınması pişirme homojenliğini bozar ve tepsi arası fark yaratır.",
      },
      {
        title: "Pizza fırınında taban ısısı",
        text: "Alt rezistans zayıflaması ve yorulmuş pişirme taşı tabanın çiğ kalmasına yol açar.",
      },
      {
        title: "Bulaşık makinesinde yıkama zayıflığı",
        text: "Tıkalı yıkama kolu memeleri ve pompa arızası temizlik performansını düşürür.",
      },
    ],
    parts: [
      "Rezistans grupları",
      "Termostat ve emniyet termostatı",
      "Fan motoru ve rulman",
      "Pişirme taşı",
      "Yıkama kolu ve pompa grubu",
    ],
    faq: commonBrandFaq("Empero"),
  },
  {
    slug: "unox-firin-servisi",
    name: "Unox",
    aliases: ["UNOX"],
    origin: "İtalya",
    tagline:
      "ChefTop ve BakerTop serilerinde yazılım, prob ve buhar grubu uzmanlığı.",
    repairNote:
      "Unox fırın tamiri, yazılım ve sensör tarafı ağırlıklı bir süreçtir: hata kodu okunur, parametreler kontrol edilir, ardından buhar ve fan grubu ölçülür. Tamirin kalıcı olması için su hattı da mutlaka değerlendirilir.",
    priceNote:
      "Unox fırın tamiri fiyatı; arızanın buhar grubunda mı, nem sensöründe mi yoksa kontrol kartında mı olduğuna göre değişir. Kireç kaynaklı tekrarlayan arızalarda su yumuşatma çözümü ayrıca fiyatlandırılır.",
    intro: [
      "Unox fırınları, yüksek pişirme hassasiyeti ve gelişmiş yazılım özellikleriyle bilinir. ChefTop ve BakerTop serilerinde pişirme reçeteleri, nem kontrolü ve otomatik yıkama sistemleri elektronik olarak yönetilir. Unox fırın servisi ve tamiri çalışmalarımız, hata kodu okuma ve parametre kontrolüyle başlayan sistematik bir teşhis süreci izler.",
      "Bu cihazlarda en kritik konu su kalitesidir. Unox buhar sistemleri kireçlenmeye karşı hassastır; su yumuşatma olmadan çalışan cihazlarda buhar üretimi, nem sensörü ve yıkama sistemi kısa sürede etkilenir. Onarımla birlikte su hattı çözümü mutlaka değerlendirilir.",
      "Fan motoru, hava yönlendirme sacı ve kapı sızdırmazlığı, Unox'ta pişirme homojenliğini doğrudan belirleyen üçlüdür. Servis sonrası farklı raf seviyelerinde sıcaklık ölçümü yapılarak sapma 5 °C altına indirilir.",
    ],
    productLines: [
      "ChefTop serisi kombi fırınlar",
      "BakerTop pastane fırınları",
      "BakerLux konveksiyonel fırınlar",
      "Tezgâh üstü profesyonel fırınlar",
      "Otomatik yıkama sistemli modeller",
    ],
    commonFaults: [
      {
        title: "Buhar / nem kontrolü hatası",
        text: "Kireçlenme ve nem sensörü sapması, ekranda hata kodu ve düşük buhar performansı yaratır.",
      },
      {
        title: "Otomatik yıkama tamamlanmıyor",
        text: "Deterjan pompası, seviye sensörü ve tahliye hattı sorunları programı yarıda keser.",
      },
      {
        title: "Panel / yazılım kilitlenmesi",
        text: "Güncelleme hatası, kart besleme sorunu ve tuş takımı arızası kullanıcı arayüzünü durdurur.",
      },
      {
        title: "Tepsiler arası pişme farkı",
        text: "Fan devri düşüşü, hava yönlendirme sacı deformasyonu ve kapı sızdırması homojenliği bozar.",
      },
    ],
    parts: [
      "Buhar nozulu ve su pompası",
      "Nem ve sıcaklık sensörleri",
      "Fan motoru ve kanat",
      "Kontrol kartı ve panel",
      "Kapı contası ve iç cam",
      "Su yumuşatma filtresi",
    ],
    faq: [
      {
        q: "Unox fırınım için su yumuşatma şart mı?",
        a: "Şebeke suyu sertliği 8-10 Fr üzerindeyse kesinlikle önerilir. Yumuşatma olmadan buhar grubu, nem sensörü ve otomatik yıkama sistemi hızla kireçlenir; onarım maliyeti yumuşatma sisteminin birkaç katına çıkar.",
      },
      ...commonBrandFaq("Unox"),
    ],
  },
  {
    slug: "oztiryakiler-firin-servisi",
    name: "Öztiryakiler",
    aliases: ["Oztiryakiler", "Öztiryakiler Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Komple mutfak projelerinde yaygın kullanım; fırın, pişirme ve yıkama gruplarında tam kapsam.",
    repairNote:
      "Öztiryakiler fırın tamiri, çoğu zaman tek cihazla sınırlı kalmaz: aynı hattaki elektrik panosu, gaz ve su bağlantıları da kontrol edilir. Tekrar eden arızaların kök nedeni sıklıkla cihazda değil altyapıdadır.",
    priceNote:
      "Öztiryakiler fırın tamiri fiyatı; arızalı gruba ve cihaz kapasitesine göre belirlenir. Çok cihazlı hatlarda sözleşmeli bakım, tekil tamir çağrılarına göre belirgin şekilde ekonomiktir.",
    intro: [
      "Öztiryakiler, Türkiye'nin en büyük profesyonel mutfak üreticilerinden biridir ve otelden hastaneye, fabrika yemekhanesinden zincir restoranlara kadar birçok işletmede komple hat olarak kuruludur. Öztiryakiler fırın servisi ve tamiri hizmetimiz, tek cihaz onarımından tüm hattın periyodik bakımına kadar geniş bir kapsamda çalışır.",
      "Kombi ve konveksiyonel fırınlar, kuzine ocak grupları, fritöz, benmari, bulaşıkhane ve soğutma ekipmanları servis kapsamındadır. Kombi modellerde buhar grubu ve prob; konveksiyonel modellerde fan ve rezistans; yıkama grubunda pompa ve boyler en sık müdahale edilen noktalardır.",
      "Büyük hatlarda arızaların bir bölümü cihazdan değil altyapıdan kaynaklanır: dengesiz faz, yetersiz su basıncı, hatalı gaz basıncı veya tıkanmış tahliye hattı. Servis ziyaretlerimizde bu değerler de ölçülür ve rapora işlenir.",
    ],
    productLines: [
      "Kombi (buharlı) fırınlar",
      "Konveksiyonel fırınlar",
      "Kuzine ocak ve pişirme hatları",
      "Fritöz, benmari, ızgara grupları",
      "Bulaşıkhane ekipmanları",
      "Soğutma ve teşhir üniteleri",
    ],
    commonFaults: [
      {
        title: "Kombi fırında buhar sorunu",
        text: "Kireçlenmiş boyler, arızalı pompa ve valf grubu buhar üretimini keser.",
      },
      {
        title: "Ocak grubunda alev sorunu",
        text: "Tıkalı brülör başlığı, arızalı termokupl ve gaz basıncı sapması alev kalitesini bozar.",
      },
      {
        title: "Bulaşık makinesi boyler arızası",
        text: "Kireçlenmiş rezistans ve bozulmuş boyler termostatı durulama sıcaklığını düşürür.",
      },
      {
        title: "Elektrik panosu kaynaklı kesintiler",
        text: "Gevşek klemens, yıpranmış kontaktör ve kaçak akım rölesi hat genelinde duruş yaratır.",
      },
    ],
    parts: [
      "Buhar boyleri ve rezistansı",
      "Sıcaklık probu ve termostat",
      "Brülör başlığı ve termokupl",
      "Sirkülasyon ve tahliye pompaları",
      "Kontaktör ve termik röle",
      "Kapı contası ve menteşe",
    ],
    faq: commonBrandFaq("Öztiryakiler"),
  },
  {
    slug: "csa-firin-servisi",
    name: "CSA",
    aliases: ["CSA Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Konveksiyonel ve buharlı fırın gruplarında sade elektronik yapı, hızlı teşhis.",
    repairNote:
      "CSA fırın tamiri, sade elektronik yapı sayesinde kısa sürede teşhis edilir. Buhar püskürtmeli modellerde tamir kapsamına su hattı filtresi ve nozul temizliği de dâhil edilir; aksi hâlde aynı arıza kısa sürede tekrarlar.",
    priceNote:
      "CSA fırın tamiri fiyatı; rezistans, fan, buhar grubu veya kontrol kartı gibi arızalı gruba göre belirlenir. Teşhis süresinin kısa olması toplam işçilik bedelini düşürür.",
    intro: [
      "CSA cihazları, profesyonel mutfaklarda dengeli fiyat-performans yapısıyla tercih edilir. Konveksiyonel ve buharlı fırın gruplarında kullanılan elektronik yapı sade olduğu için teşhis süresi kısadır. CSA fırın servisi ve tamiri işlerinde arızanın büyük bölümü ilk ziyarette çözülür.",
      "En sık karşılaşılan başlıklar; rezistans grubu, fan motoru, buhar püskürtme nozulu ve kapı grubu sorunlarıdır. Buhar püskürtmeli modellerde su hattı filtresinin bakımsız kalması nozul tıkanıklığının başlıca sebebidir.",
      "Servis sonrasında set sıcaklığına ulaşma süresi ve raf bazlı sıcaklık dağılımı ölçülerek cihazın katalog değerlerine dönüp dönmediği doğrulanır.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Buharlı konveksiyon fırınlar",
      "Pastane tipi fırınlar",
      "Kuzine ve pişirme grupları",
      "Bulaşıkhane ekipmanları",
    ],
    commonFaults: [
      {
        title: "Buhar nozulu tıkanması",
        text: "Filtresiz su hattı nedeniyle kireç birikimi buhar püskürtmeyi zayıflatır.",
      },
      {
        title: "Rezistans grubu arızası",
        text: "Kısmi rezistans kaybı ısınma süresini uzatır ve pişirme dengesini bozar.",
      },
      {
        title: "Fan motoru arızası",
        text: "Rulman ve kondansatör sorunları devir düşüşü ve gürültü yapar.",
      },
      {
        title: "Panel ve kart arızaları",
        text: "Isıya maruz kalan kart bileşenleri zamanla hatalı sinyal üretebilir.",
      },
    ],
    parts: [
      "Rezistans ve buhar rezistansı",
      "Fan motoru ve kondansatör",
      "Buhar nozulu ve su filtresi",
      "Kontrol kartı ve tuş takımı",
      "Kapı contası ve cam",
    ],
    faq: commonBrandFaq("CSA"),
  },
  {
    slug: "kayalar-firin-servisi",
    name: "Kayalar",
    aliases: ["Kayalar Mutfak", "Kayalar Fırın"],
    origin: "Türkiye",
    tagline:
      "Taş tabanlı ve katlı fırınlarda mekanik dayanım, ekonomik parça çözümleri.",
    repairNote:
      "Kayalar fırın tamiri, mekanik ağırlıklı yapı sayesinde ekonomik biçimde tamamlanır. Katlı modellerde arızalı kat izole edilir, gazlı modellerde ise tamir sonrası brülör ayarı ve baca çekişi mutlaka kontrol edilir.",
    priceNote:
      "Kayalar fırın tamiri fiyatı; kat sayısına, değişecek rezistans ve kontaktör adedine ve taban taşının durumuna göre belirlenir. Parça temini genellikle aynı gün sağlandığı için bekleme süresi kısadır.",
    intro: [
      "Kayalar fırınları, pide, lahmacun ve ekmek üretimi yapan işletmelerde yaygın olarak kullanılır. Mekanik ağırlıklı yapı, doğru teşhis sonrası hızlı ve ekonomik onarıma imkân verir. Kayalar fırın servisi ve tamiri hizmetimizde parça temini genellikle aynı gün sağlanır.",
      "Katlı modellerde her kata ait rezistans, termostat ve kontaktör grubu bağımsız çalışır; bu sayede arızalı kat izole edilerek diğer katlarda üretim sürdürülebilir. Taş tabanlı modellerde ise taban taşı durumu pişirme kalitesinin belirleyicisidir.",
      "Gazlı Kayalar modellerinde brülör ayarı, ateşleme elektrodu ve baca çekişi düzenli kontrol gerektirir. Yanma ayarı bozulan fırınlarda hem yakıt tüketimi artar hem de üründe is tadı oluşabilir.",
    ],
    productLines: [
      "Katlı pide ve ekmek fırınları",
      "Taş tabanlı fırınlar",
      "Gazlı ve elektrikli model fırınlar",
      "Döner fırınlar",
      "Hamur hazırlık ekipmanları",
    ],
    commonFaults: [
      {
        title: "Kat bazlı ısınma sorunu",
        text: "Kata ait kontaktör, termostat veya rezistans arızası o katı devre dışı bırakır.",
      },
      {
        title: "Taban taşı yorulması",
        text: "Çatlamış veya incelmiş taş, taban ısısının geç toparlanmasına yol açar.",
      },
      {
        title: "Gazlı modelde ateşleme sorunu",
        text: "Ateşleme elektrodu, iyonizasyon çubuğu ve gaz valfi bobini kaynaklı alev tutmama.",
      },
      {
        title: "Kapı ve conta sorunları",
        text: "Yüksek sıcaklıkta deforme olan conta ve menteşe ısı kaybı yaratır.",
      },
    ],
    parts: [
      "Rezistans ve kontaktör grupları",
      "Şamot pişirme taşı",
      "Kapiler termostat",
      "Ateşleme elektrodu ve gaz valfi",
      "Kapı contası ve menteşe",
    ],
    faq: commonBrandFaq("Kayalar"),
  },
  {
    slug: "maksan-firin-servisi",
    name: "Maksan",
    aliases: ["Maksan Makina"],
    origin: "Türkiye",
    tagline:
      "Unlu mamul ve döner fırın gruplarında tahrik, buhar ve otomasyon servisi.",
    repairNote:
      "Maksan fırın tamiri, döner ve tünel modellerde tahrik ve buhar gruplarını birlikte ele alır. Otomasyonlu cihazlarda tamir öncesi pişirme reçetelerinin yedeği alınır; kart değişimi gerektiğinde programlar kaybolmaz.",
    priceNote:
      "Maksan fırın tamiri fiyatı; arızanın tahrik grubunda mı, buhar bloğunda mı yoksa otomasyon kartında mı olduğuna göre değişir. Üretim hattı duruşlarında öncelikli acil servis tarifesi uygulanır.",
    intro: [
      "Maksan fırınları, ekmek ve unlu mamul üretiminde sürekli çalışan hatların parçasıdır. Döner (rotary) ve katlı modellerde tahrik grubu, buhar üretimi ve otomasyon devreleri servisin ana başlıklarıdır. Maksan fırın servisi ve tamiri işlerinde önleyici bakım, onarımdan daha belirleyicidir.",
      "Döner fırınlarda araba tahrik motoru, redüktör ve zincir grubu düzenli yağlama ve gerginlik ayarı ister. İhmal edildiğinde dönüş kesintileri ve pişirme homojensizliği başlar. Buhar tarafında ise blok kireçlenmesi ve nozul tıkanıklığı kabuk kalitesini doğrudan etkiler.",
      "Otomasyonlu modellerde pişirme reçetelerinin yedeklenmesi kritik önemdedir. Kart değişimi gereken durumlarda yedek yoksa tüm programlar yeniden oluşturulmak zorunda kalır; servis ziyaretlerimizde reçete yedeği alınır.",
    ],
    productLines: [
      "Döner (rotary) fırınlar",
      "Katlı ekmek ve unlu mamul fırınları",
      "Tünel fırınlar",
      "Fermantasyon ve hamur hazırlık üniteleri",
      "Otomasyonlu üretim hatları",
    ],
    commonFaults: [
      {
        title: "Araba dönüş arızası",
        text: "Tahrik motoru, redüktör ve zincir grubu kaynaklı dönüş kesintileri.",
      },
      {
        title: "Buhar bloğu kireçlenmesi",
        text: "Buhar debisinin düşmesi ekmek kabuk parlaklığını ve hacmini azaltır.",
      },
      {
        title: "Reçete / otomasyon hatası",
        text: "Kart arızası veya besleme sorunu pişirme programlarının kaybolmasına yol açar.",
      },
      {
        title: "Baca ve yanma sorunları",
        text: "Gazlı modellerde brülör ayarının bozulması yakıt tüketimini ve is oluşumunu artırır.",
      },
    ],
    parts: [
      "Tahrik motoru ve redüktör",
      "Zincir, dişli ve rulman setleri",
      "Buhar bloğu ve nozul grubu",
      "Otomasyon kartı ve panel",
      "Brülör ve gaz basınç regülatörü",
    ],
    faq: commonBrandFaq("Maksan"),
  },
  {
    slug: "greenoks-firin-servisi",
    name: "Greenoks",
    aliases: ["Green Oks", "Greenoks Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Modern konveksiyonel ve pişirme gruplarında elektronik kontrol servisi.",
    repairNote:
      "Greenoks fırın tamiri, elektronik kontrollü modellerde ekran uyarıları ve sensör ölçümleri üzerinden yürütülür. Tamir sonrası cihaz farklı programlarda test edilerek sıcaklık kararlılığı doğrulanır.",
    priceNote:
      "Greenoks fırın tamiri fiyatı; prob, kontrol kartı, rezistans veya fan grubu gibi arızalı bileşene göre belirlenir. Kart onarımı mümkün olduğunda komple değişim önerilmez.",
    intro: [
      "Greenoks cihazları, modern kontrol arayüzleri ve kompakt tasarımlarıyla kafe, butik otel ve orta ölçekli restoranlarda tercih edilir. Elektronik kontrollü modellerde arıza teşhisi, ekran uyarıları ve sensör ölçümleri üzerinden yürütülür. Greenoks fırın servisi ve tamiri hizmetimizde teşhis süresi bu sayede kısalır.",
      "Sık karşılaşılan başlıklar; sıcaklık probu sapması, rezistans grubu arızası, fan motoru ve buhar püskürtme sistemidir. Kompakt cihazlarda havalandırma kanallarının temiz tutulması, kontrol kartı ömrü açısından belirleyicidir.",
      "Servis sonrası cihaz farklı programlarda test edilir; set sıcaklığına ulaşma süresi ve sıcaklık dalgalanması ölçülerek performans doğrulanır.",
    ],
    productLines: [
      "Elektronik kontrollü konveksiyonel fırınlar",
      "Buharlı konveksiyon modelleri",
      "Tezgâh üstü pişirme grupları",
      "Fritöz ve ızgara üniteleri",
      "Yıkama ve hazırlık ekipmanları",
    ],
    commonFaults: [
      {
        title: "Sıcaklık probu sapması",
        text: "Ekran değeri ile gerçek sıcaklık arasında fark oluşur, pişirme sonuçları değişkenleşir.",
      },
      {
        title: "Kontrol kartı arızası",
        text: "Isı ve nem etkisiyle bozulan bileşenler cihazın kilitlenmesine neden olur.",
      },
      {
        title: "Fan grubu sorunları",
        text: "Devir düşüşü ve kanat dengesizliği tepsi arası pişme farkı yaratır.",
      },
      {
        title: "Buhar püskürtme zayıflığı",
        text: "Kireç kaynaklı nozul tıkanıklığı buhar performansını düşürür.",
      },
    ],
    parts: [
      "Sıcaklık probu (NTC / PT100)",
      "Kontrol kartı ve panel",
      "Rezistans grupları",
      "Fan motoru ve kanat",
      "Su pompası ve nozul",
    ],
    faq: commonBrandFaq("Greenoks"),
  },
  {
    slug: "alveo-firin-servisi",
    name: "Alveo",
    aliases: ["Alveo Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Pastane ve unlu mamul fırınlarında buhar ve pişirme kalitesi odaklı servis.",
    repairNote:
      "Alveo fırın tamiri, pastane ürünlerinde kaliteyi belirleyen üç değişkeni birlikte ele alır: sıcaklık kararlılığı, buhar debisi ve hava sirkülasyonu. Tamir sonrası raf bazlı sıcaklık haritası çıkarılarak sonuç doğrulanır.",
    priceNote:
      "Alveo fırın tamiri fiyatı; buhar grubu, fan sistemi veya sensör tarafındaki arızaya göre belirlenir. Kireç kaynaklı tekrarlayan arızalarda su yumuşatma kurulumu ayrıca değerlendirilir.",
    intro: [
      "Alveo fırınları, pastane ve unlu mamul üretiminde buhar destekli pişirme yapan işletmelerde kullanılır. Bu cihazlarda ürün kalitesini belirleyen üç değişken vardır: sıcaklık kararlılığı, buhar debisi ve hava sirkülasyonu. Alveo fırın servisi ve tamiri çalışmalarımızda bu üçü birlikte ölçülür.",
      "Buhar grubunda kireç birikimi, nozul tıkanıklığı ve su pompası arızası en sık görülen sorunlardır. Su sertliği yüksek bölgelerde yumuşatma sistemi kurulmadan yapılan onarımlar kısa sürede tekrar eder.",
      "Fan ve hava yönlendirme grubunda oluşan deformasyonlar, tepsiler arasında renk ve pişme farkı olarak kendini gösterir. Servis sonrası raf bazlı sıcaklık haritası çıkarılarak sapma kontrol edilir.",
    ],
    productLines: [
      "Pastane tipi konveksiyonel fırınlar",
      "Buharlı unlu mamul fırınları",
      "Katlı fırın grupları",
      "Fermantasyon dolapları",
      "Hazırlık ve hamur ekipmanları",
    ],
    commonFaults: [
      {
        title: "Buhar debisi düşüklüğü",
        text: "Kireçlenmiş buhar grubu ve tıkalı nozullar kabuk kalitesini bozar.",
      },
      {
        title: "Tepsiler arası renk farkı",
        text: "Fan devri ve hava yönlendirme sacı kaynaklı homojenlik kaybı.",
      },
      {
        title: "Sıcaklık dalgalanması",
        text: "Prob sapması ve kontaktör sorunları set sıcaklığında oynama yaratır.",
      },
      {
        title: "Fermantasyon dolabında nem sorunu",
        text: "Nem üretim grubu ve sensör arızaları hamur kabarmasını etkiler.",
      },
    ],
    parts: [
      "Buhar grubu ve nozul seti",
      "Su pompası ve solenoid valf",
      "Fan motoru ve hava yönlendirme sacı",
      "Sıcaklık ve nem sensörleri",
      "Kontrol kartı ve panel",
    ],
    faq: commonBrandFaq("Alveo"),
  },
  {
    slug: "inoxclass-firin-servisi",
    name: "İnoxclass",
    aliases: ["Inoxclass", "İnox Class"],
    origin: "Türkiye",
    tagline:
      "Paslanmaz pişirme grupları ve fırınlarda mekanik-elektriksel tam kontrol.",
    repairNote:
      "İnoxclass fırın tamiri, elektriksel ölçüm ve mekanik kontrolün birlikte yürütüldüğü bir süreçtir. Gazlı modellerde tamir kapsamına brülör başlığı, enjektör ve termokupl temizliği de dâhil edilir.",
    priceNote:
      "İnoxclass fırın tamiri fiyatı; rezistans, termostat, fan motoru veya gaz grubu gibi arızalı bileşene göre belirlenir. Çoğu arıza tek ziyarette kapandığı için ek işçilik bedeli doğmaz.",
    intro: [
      "İnoxclass cihazları, paslanmaz gövde yapısı ve dayanıklı pişirme gruplarıyla restoran ve toplu yemek mutfaklarında kullanılır. Servis yaklaşımımız, elektriksel ölçüm ve mekanik kontrolü birlikte yürütmek üzerine kuruludur. İnoxclass fırın servisi ve tamiri işlerinde çoğu arıza tek ziyarette kapatılır.",
      "Rezistans grubu, termostat, kontaktör ve fan motoru en sık müdahale edilen kalemlerdir. Gazlı modellerde ise brülör başlıkları, enjektörler ve termokupl grubunun periyodik temizliği önem taşır.",
      "Paslanmaz gövdeli cihazlarda kapı contası ve menteşe ayarı, ısı kaybını doğrudan etkiler. Bakım ziyaretlerinde bu noktalar standart kontrol listesinde yer alır.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Kuzine ocak ve pişirme grupları",
      "Fritöz, ızgara ve pleyt üniteleri",
      "Benmari ve servis ekipmanları",
      "Paslanmaz hazırlık tezgâhları",
    ],
    commonFaults: [
      {
        title: "Rezistans / termostat arızası",
        text: "Isınmama ve sıcaklık sapmasının en yaygın nedeni bu iki kalemdir.",
      },
      {
        title: "Brülör ve termokupl sorunları",
        text: "Gazlı modellerde pilot alevin sönmesi ve gaz kesilmesi görülür.",
      },
      {
        title: "Fan motoru arızası",
        text: "Rulman aşınması gürültü ve pişirme dengesizliği yaratır.",
      },
      {
        title: "Kapı grubu ısı kaybı",
        text: "Conta sertleşmesi ve menteşe ayarı bozukluğu enerji tüketimini artırır.",
      },
    ],
    parts: [
      "Rezistans ve termostat grupları",
      "Brülör başlığı, enjektör, termokupl",
      "Fan motoru ve kondansatör",
      "Kontaktör ve termik röle",
      "Kapı contası ve menteşe",
    ],
    faq: commonBrandFaq("İnoxclass"),
  },
  {
    slug: "vital-firin-servisi",
    name: "Vital",
    aliases: ["Vital Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Pişirme ve yıkama gruplarında ekonomik, hızlı sonuç veren teknik servis.",
    repairNote:
      "Vital fırın tamiri, cihazların sade yapısı sayesinde hızlı ve makul maliyetle tamamlanır. Tamir sırasında elektrik bağlantı noktaları da sıkılır; gevşek klemensler bu markada tekrar eden arızaların en yaygın sebebidir.",
    priceNote:
      "Vital fırın tamiri fiyatı; rezistans, termostat, fan veya pompa gibi değişecek parçaya göre belirlenir. Standart parçalar araç stoğunda tutulduğu için işlerin çoğu ilk ziyarette biter.",
    intro: [
      "Vital cihazları, kafe, restoran ve küçük ölçekli üretim mutfaklarında yaygındır. Sade yapıları sayesinde arıza teşhisi hızlıdır ve onarım maliyetleri makul seviyede kalır. Vital fırın servisi ve tamiri hizmetimizde işlerin büyük bölümü ilk ziyarette tamamlanır.",
      "Sık görülen başlıklar; rezistans yanması, termostat sapması, fan motoru sesi ve bulaşık grubu pompaları ile ilgili sorunlardır. Yoğun kullanımda elektrik bağlantı noktalarının periyodik kontrolü arızaları belirgin biçimde azaltır.",
      "Servis sonrası cihazın ısınma süresi, sıcaklık kararlılığı ve kapı sızdırmazlığı test edilir; kullanım önerileri işletme personeline aktarılır.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Pizza ve pide fırınları",
      "Kuzine ocak grupları",
      "Fritöz ve ızgara üniteleri",
      "Bulaşık ve bardak yıkama makineleri",
    ],
    commonFaults: [
      {
        title: "Rezistans yanması",
        text: "En yaygın arıza kalemidir; direnç ölçümüyle hızlıca tespit edilir.",
      },
      {
        title: "Termostat sapması",
        text: "Gösterge ile gerçek sıcaklık arasında fark oluşur.",
      },
      {
        title: "Fan motoru sesi",
        text: "Rulman aşınması gürültü ve devir düşüşüne neden olur.",
      },
      {
        title: "Yıkama grubunda pompa arızası",
        text: "Sirkülasyon veya tahliye pompası sorunları yıkama çevrimini durdurur.",
      },
    ],
    parts: [
      "Rezistans grupları",
      "Termostat ve emniyet termostatı",
      "Fan motoru ve rulman",
      "Sirkülasyon ve tahliye pompaları",
      "Kapı contası ve menteşe",
    ],
    faq: commonBrandFaq("Vital"),
  },
  {
    slug: "ndustrio-firin-servisi",
    name: "Ndustrio",
    aliases: ["N-dustrio", "Ndustrio Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Yeni nesil elektronik kontrollü fırınlarda yazılım ve sensör odaklı servis.",
    repairNote:
      "Ndustrio fırın tamiri, hata kayıtlarının okunması ve parametre kontrolüyle başlar. Sensör–kart–aktüatör zinciri sırayla ölçülür; tamir sonrası reçete hafızası yedeklenip işletmeye dijital olarak teslim edilir.",
    priceNote:
      "Ndustrio fırın tamiri fiyatı; sensör, dokunmatik panel, fan sürücüsü veya buhar grubu gibi arızalı bileşene göre belirlenir. Yazılım kaynaklı arızalarda çoğu zaman donanım değişimi gerekmez.",
    intro: [
      "Ndustrio cihazları, yeni nesil kontrol arayüzleri ve dijital pişirme programlarıyla öne çıkar. Bu yapıdaki fırınlarda arızanın kaynağı çoğunlukla sensör–kart–aktüatör zincirinde aranır. Ndustrio fırın servisi ve tamiri çalışmalarımız, hata kayıtlarının okunması ve parametre kontrolüyle başlar.",
      "Sıcaklık ve nem sensörleri, buhar üretim grubu, fan sürücüsü ve dokunmatik panel en sık müdahale edilen başlıklardır. Elektronik ağırlıklı cihazlarda düzenli yazılım kontrolü, donanım arızalarının erken fark edilmesini sağlar.",
      "Servis sonrasında cihaz farklı pişirme programlarında test edilir, reçete hafızası yedeklenir ve işletmeye dijital olarak teslim edilir.",
    ],
    productLines: [
      "Elektronik kontrollü kombi fırınlar",
      "Dijital konveksiyonel fırınlar",
      "Pastane tipi modeller",
      "Otomatik yıkama sistemli fırınlar",
      "Akıllı pişirme program destekli üniteler",
    ],
    commonFaults: [
      {
        title: "Sensör hata kodları",
        text: "Sıcaklık ve nem sensörlerinde açık devre / sapma hataları cihazı kilitler.",
      },
      {
        title: "Dokunmatik panel arızası",
        text: "Isı ve nem etkisiyle panel tepki vermez veya hatalı komut üretir.",
      },
      {
        title: "Fan sürücüsü hatası",
        text: "İnvertör alarmları fan devrini düşürür veya çalışmasını engeller.",
      },
      {
        title: "Buhar grubu sorunları",
        text: "Kireçlenme ve pompa arızaları buhar üretimini durdurur.",
      },
    ],
    parts: [
      "Sıcaklık ve nem sensörleri",
      "Dokunmatik panel ve kontrol kartı",
      "Fan sürücüsü (invertör)",
      "Su pompası ve solenoid valf",
      "Kapı contası ve menteşe",
    ],
    faq: commonBrandFaq("Ndustrio"),
  },
  {
    slug: "senoven-firin-servisi",
    name: "Senoven",
    aliases: ["Şengün Makine", "Sengun Makine", "Senoven Şengün", "Şenoven"],
    origin: "Türkiye",
    tagline:
      "Şengün Makine üretimi katlı, dönerli ve konveyörlü unlu mamul fırınlarında ağır hizmet tipi servis.",
    repairNote:
      "Senoven fırın tamiri, cihazların ekmek ve unlu mamul üretimine yönelik ağır çalışma koşullarına göre kurgulanır: önce mekanik aktarma (redüktör, zincir, yatak) ve buhar bloğu değerlendirilir, ardından elektriksel grup ölçülür. Bu sıralama, üretim fırınlarında arızaların çoğunun mekanik yorulmadan doğması nedeniyle en hızlı sonucu verir.",
    priceNote:
      "Senoven fırın tamiri fiyatı; arızanın mekanik aktarma, buhar grubu veya yanma tarafında olmasına göre belirlenir. Zincir gerginlik ayarı ile redüktör değişimi arasında büyük fark vardır; kesin tutar yerinde ölçüm sonrası bildirilir.",
    intro: [
      "Senoven, Şengün Makine tarafından üretilen ve ekmek, pide, poğaça ile pastane üretiminde yaygın kullanılan endüstriyel fırın ailesidir. Katlı taş tabanlı modeller, dönerli (rotary) fırınlar ve konveyörlü hatlar aynı çatı altında toplanır. Senoven fırın servisi ve tamiri işinde belirleyici olan, bu cihazların günde 12-18 saat kesintisiz çalışan üretim ekipmanları olmasıdır.",
      "Servis ekibimiz bu fırınlarda önce mekanik tarafı ölçer: dönerli modellerde araba tahrik motoru, redüktör, kayış ve tabla yatağı; konveyörlü modellerde bant hızı, zincir gerginliği ve rulman boşluğu. Ardından buhar bloğu ve nozullar değerlendirilir, son olarak rezistans grupları, kontaktörler ve prob değerleri okunur.",
      "Bu fırınlarda en sık gözden kaçan kalem gövde izolasyonu ve kapı fitilidir. Yıllar içinde çöken izolasyon ve sertleşen fitil, arıza olarak görünmediği için ihmal edilir; oysa ısınma süresini uzatarak ve yakıt tüketimini artırarak sessiz bir maliyet üretir. Periyodik bakımlarımızda bu iki kalem termal kamerayla ayrıca kontrol edilir.",
    ],
    productLines: [
      "Katlı taş tabanlı ekmek fırınları",
      "Dönerli (rotary) fırınlar",
      "Konveyörlü bantlı fırınlar",
      "Pide ve lahmacun fırınları",
      "Fermantasyon (mayalanma) dolapları",
      "Hamur hazırlık ve kesme makineleri",
    ],
    commonFaults: [
      {
        title: "Araba dönmüyor veya zorlanıyor",
        text: "Tahrik motoru, redüktör, kayış-zincir kopması ve tabla yatağı sıkışması dönerli modellerde en sık görülen arızadır.",
      },
      {
        title: "Buhar zayıf, kabuk mat çıkıyor",
        text: "Kireçlenmiş buhar bloğu ve tıkalı nozullar buhar şokunu ortadan kaldırır; kabuk parlaklığı kaybolur.",
      },
      {
        title: "Katlar arasında pişirme farkı",
        text: "Katlı modellerde tek bir rezistans grubunun kaybı veya kat kontaktörü arızası, cihaz çalışmaya devam ettiği için geç fark edilir.",
      },
      {
        title: "Isınma süresi uzadı, tüketim arttı",
        text: "Çökmüş gövde izolasyonu, sertleşmiş kapı fitili ve ayarı bozulmuş brülör hava-yakıt oranı birlikte değerlendirilir.",
      },
    ],
    parts: [
      "Araba tahrik motoru ve redüktör",
      "Zincir, kayış, dişli ve rulman seti",
      "Buhar bloğu kütleleri ve nozullar",
      "Üst / alt rezistans grupları ve kat kontaktörü",
      "Kapı fitili, menteşe ve kapı camı",
      "Sıcaklık probu, emniyet termostatı ve kontrol kartı",
    ],
    faq: [
      {
        q: "Senoven ile Şengün Makine aynı firma mı?",
        a: "Senoven, Şengün Makine üretimi fırınlar için kullanılan marka adıdır; sahada iki isim de aynı cihazlar için kullanılır. Servis talebinizde hangi ismi kullandığınız fark etmez, cihazın tipini (katlı, dönerli, konveyörlü) ve kapasitesini bildirmeniz yeterlidir.",
      },
      ...commonBrandFaq("Senoven"),
    ],
  },
  {
    slug: "sgs-firin-servisi",
    name: "SGS",
    aliases: ["SGS Endüstriyel", "S.G.S", "SGS Mutfak"],
    origin: "Türkiye",
    tagline:
      "Konveksiyonel ve pizza fırınları ile pişirme gruplarında hızlı parça temini ve yerinde servis.",
    repairNote:
      "SGS fırın tamiri işlerinin büyük bölümü, sık kullanılan standart bileşenler üzerinde toplanır: rezistans, kontaktör, prob, fan motoru ve termostat. Bu parçaları araç stoğunda tuttuğumuz için müdahalelerin çoğu tek ziyarette tamamlanır ve cihaz aynı gün üretime döner.",
    priceNote:
      "SGS fırın tamiri fiyatı; değişecek parçaya ve arızanın elektriksel mi mekanik mi olduğuna göre belirlenir. Standart parçalar stokta olduğu için işçilik dışında bekleme maliyeti oluşmaz; kesin tutar yerinde teşhis sonrası bildirilir.",
    intro: [
      "SGS, endüstriyel mutfaklarda konveksiyonel fırınlar, pizza ve pide fırınları ile pişirme gruplarıyla yer alan Türk üretici markalarındandır. Restoran, kafe ve otel mutfaklarında yaygın kullanılır. SGS fırın servisi ve tamiri işinde avantaj, cihazların büyük ölçüde standart endüstriyel bileşenler kullanmasıdır; bu da parça teminini hızlandırır.",
      "Ekiplerimiz bu cihazlarda en sık rezistans kaybı, fan motoru ve rulman arızası, termostat sapması ve kapı contası kaynaklı ısı kaçağıyla karşılaşır. Teşhis her zaman ölçümle yapılır: rezistans direnci, gövdeye karşı izolasyon, faz dengesi ve prob direnç-sıcaklık eğrisi tek tek okunur.",
      "Onarım sonrası cihaz boş ve dolu çevrimde test edilir; set sıcaklığına ulaşma süresi ile raf seviyeleri arasındaki sıcaklık farkı ölçülerek işletmeye teslim edilir. Değişen parçalar ve ölçüm değerleri servis formuna yazılır, böylece cihazın arıza geçmişi zamanla oluşur.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Pizza ve pide fırınları",
      "Kuzine ocak ve pişirme grupları",
      "Fritöz, ızgara ve pleyt üniteleri",
      "Benmari ve servis ekipmanları",
      "Paslanmaz hazırlık tezgâhları",
    ],
    commonFaults: [
      {
        title: "Fırın ısınmıyor veya geç ısınıyor",
        text: "Yanmış rezistans, yapışmış kontaktör ve kopmuş faz en sık görülen üç nedendir; ölçümle hızlıca ayrıştırılır.",
      },
      {
        title: "Fan ses yapıyor, titreşim var",
        text: "Yıpranmış fan rulmanı, dengesi bozulmuş kanat ve zayıflamış kondansatör gürültü ile hava debisi kaybı üretir.",
      },
      {
        title: "Sıcaklık göstergeden farklı",
        text: "Kalibrasyonu kaymış prob veya termostat, ekranda yazan değer ile gerçek fırın sıcaklığını ayrıştırır.",
      },
      {
        title: "Kapıdan ısı kaçıyor",
        text: "Sertleşmiş silikon conta ve ayarı kaçmış menteşe hem pişirme kalitesini hem de enerji tüketimini olumsuz etkiler.",
      },
    ],
    parts: [
      "Rezistans (üst / alt grup)",
      "Güç kontaktörü ve termik röle",
      "Fan motoru, kondansatör ve fan kanadı",
      "Sıcaklık probu ve kapiler termostat",
      "Kapı contası, menteşe ve kapı camı",
      "Kontrol kartı, zaman rölesi ve tuş takımı",
    ],
    faq: [
      {
        q: "SGS fırınlarda parça temini ne kadar sürüyor?",
        a: "Rezistans, kontaktör, prob, termostat ve fan motoru gibi sık değişen parçaları araç ve depo stoğumuzda tutuyoruz; bu kalemlerde müdahale genellikle tek ziyarette tamamlanır. Gövdeye özel parçalarda tedarik süresi ortalama 1-3 iş günüdür ve bu sürede cihazı kısıtlı da olsa çalışır durumda tutacak çözümler uygularız.",
      },
      ...commonBrandFaq("SGS"),
    ],
  },
  {
    slug: "omake-firin-servisi",
    name: "Omake",
    aliases: ["Omak", "Omake Endüstriyel", "Omake Professional"],
    origin: "Türkiye",
    tagline:
      "Konveksiyonel fırın, pişirme ve yıkama gruplarında elektronik ve mekanik bütünleşik servis.",
    repairNote:
      "Omake fırın tamiri, cihazların elektronik kontrollü modellerinde hata kodu okumayla, mekanik modellerinde doğrudan elektriksel ölçümle başlar. Her iki yolda da amaç aynıdır: parça değiştirmeden önce arızalı halkayı ölçümle kanıtlamak. Bu yaklaşım gereksiz parça maliyetini ortadan kaldırır.",
    priceNote:
      "Omake fırın tamiri fiyatı; arızanın kontrol kartında mı, ısıtma grubunda mı yoksa mekanik tarafta mı olduğuna göre belirlenir. Kart onarımı çoğu vakada komple kart değişiminden ekonomiktir ve iki seçenek de fiyatıyla birlikte sunulur.",
    intro: [
      "Omake, endüstriyel mutfak ekipmanları üreten ve konveksiyonel fırınlar, pişirme grupları ile bulaşıkhane ekipmanlarında geniş bir ürün yelpazesi sunan markalardandır. Otel, restoran ve toplu yemek mutfaklarında yaygın kullanılır. Omake fırın servisi ve tamiri çalışmalarımız, cihazın elektronik kontrollü mü yoksa klasik termostatlı model mi olduğunun belirlenmesiyle başlar.",
      "Elektronik kontrollü modellerde panelde biriken hata kayıtları okunur ve prob-kart-aktüatör zinciri sırayla ölçülür. Klasik modellerde ise doğrudan rezistans direnci, kontaktör teması, termostat kesme noktası ve fan devri ölçülür. İki yolda da arızalı halka parça değişiminden önce ölçümle doğrulanır.",
      "Bulaşıkhane ve yıkama grubu ekipmanlarında ise arızaların önemli bölümü su kaynaklıdır: kireç, tıkalı püskürtme kolları, arızalı dozaj pompası ve tahliye sorunları. Fırın onarımıyla birlikte mutfağın bu tarafında da hızlı bir kontrol yapıyor, tekrar eden arızaların kök nedenini işletmeye rapor ediyoruz.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Buharlı konveksiyon modelleri",
      "Kuzine ocak ve pişirme grupları",
      "Fritöz, ızgara ve pleyt üniteleri",
      "Bulaşık ve bardak yıkama makineleri",
      "Benmari, teşhir ve servis ekipmanları",
    ],
    commonFaults: [
      {
        title: "Panelde hata kodu, cihaz kilitleniyor",
        text: "Prob açık devre, aşırı ısınma koruması ve besleme kartı hataları elektronik kontrollü modelleri devre dışı bırakır.",
      },
      {
        title: "Isıtma yok, panel çalışıyor",
        text: "Yanmış rezistans, yapışmış veya bobini yanmış kontaktör ve kart röle çıkışı arızası ısıtma devresini keser.",
      },
      {
        title: "Fan devri düşük, pişirme dengesiz",
        text: "Yıpranmış rulman, zayıflamış kondansatör ve kirlenmiş fan kanadı hava debisini düşürerek tepsi farkı yaratır.",
      },
      {
        title: "Yıkama grubunda su ve kireç sorunları",
        text: "Tıkalı püskürtme kolları, kireçlenmiş rezistans, arızalı dozaj pompası ve tahliye sorunları yıkama performansını bozar.",
      },
    ],
    parts: [
      "Rezistans grubu ve güç kontaktörü",
      "Sıcaklık probu (NTC / PT100) ve termostat",
      "Fan motoru, kondansatör ve fan kanadı",
      "Elektronik kontrol kartı ve tuş takımı filmi",
      "Kapı contası, menteşe ve kilit mekanizması",
      "Yıkama pompası, dozaj hortumu ve püskürtme kolu",
    ],
    faq: [
      {
        q: "Omake fırınımın modeli elektronik mi klasik mi, nasıl anlarım?",
        a: "Panelde dijital ekran, program hafızası veya dokunmatik tuşlar varsa cihaz elektronik kontrollüdür. Yalnızca çevirmeli termostat düğmesi ve mekanik zamanlayıcı varsa klasik modeldir. Telefonda paneli tarif etmeniz yeterli; teknisyen doğru ölçüm setiyle ve olası parçalarla yola çıkar.",
      },
      ...commonBrandFaq("Omake"),
    ],
  },
  {
    slug: "ozkoseoglu-firin-servisi",
    name: "Özköseoğlu",
    aliases: ["Ozkoseoglu", "Özköseoğlu Isı", "Özköseoğlu Fırın Makinaları"],
    origin: "Türkiye",
    tagline:
      "Çok katlı ekmek fırınları, döner arabalı ve siklotermik hatlarda ısı grubu uzmanlığı.",
    repairNote:
      "Özköseoğlu fırın tamiri, cihazların büyük hacimli ısı gruplarına sahip olması nedeniyle ısıtma zincirinin baştan sona ölçülmesiyle başlar: brülör veya rezistans grubu, sirkülasyon fanı, baca çekişi ve termostat kesme noktası sırayla kontrol edilir. Arızalı halka ölçümle kanıtlanmadan parça değişimi yapılmaz; bu yaklaşım hem maliyeti hem de duruş süresini düşürür.",
    priceNote:
      "Özköseoğlu fırın tamiri fiyatı; arızanın ısıtma grubunda mı, buhar hattında mı yoksa kontrol tarafında mı olduğuna göre belirlenir. Rezistans, termostat ve kontaktör gibi standart kalemlerde maliyet öngörülebilir olduğu için telefonda gerçekçi bir aralık verilebilir; buhar ve brülör grubunda kesin fiyat yerinde tespitten sonra netleşir.",
    intro: [
      "Özköseoğlu, fırıncılık sektörüne yönelik ısı ve pişirme ekipmanları üreten köklü Türk markalarındandır. Ekmek üretimi yapan işletmelerde çok katlı fırınlar, döner arabalı modeller ve siklotermik hatlar yaygın olarak kullanılır. Özköseoğlu fırın servisi ve tamiri çalışmalarımız, cihazın hangi ısı mimarisine sahip olduğunun belirlenmesiyle başlar; çünkü aynı şikâyet farklı gruplarda tamamen farklı bir arızaya işaret eder.",
      "Ekmek fırınlarında en sık gelen şikâyet 'ürün eşit pişmiyor' başlığıdır. Bunun arkasında zayıflamış rezistans grubu, dengesiz sirkülasyon fanı, tıkanmış baca/hava kanalı veya kalibrasyonu kaymış termostat olabilir. Ekibimiz kat bazlı sıcaklık ölçümü yaparak farkın hangi bölgeden kaynaklandığını sayısal olarak ortaya koyar.",
      "Buhar hattı, Özköseoğlu fırınlarında performansın ikinci belirleyicisidir. Kireç birikimi buhar jeneratörünü ve nozulları daraltarak kabuk parlaklığını düşürür. Onarımın yanı sıra cihaz girişindeki su yumuşatma çözümünü de kontrol eder, gerekiyorsa filtre ve reçine değişimini aynı serviste tamamlarız.",
    ],
    productLines: [
      "Çok katlı (masif) ekmek fırınları",
      "Döner arabalı fırınlar",
      "Siklotermik ve borulu fırınlar",
      "Konveksiyonel fırınlar",
      "Mayalandırma (fermantasyon) kabinleri",
      "Hamur hazırlık ve yoğurma grupları",
    ],
    commonFaults: [
      {
        title: "Katlar arasında pişme farkı",
        text: "Zayıflamış rezistans grubu, dengesiz hava dağılımı ve kalibrasyonu kaymış termostat katlar arası sıcaklık farkı yaratır.",
      },
      {
        title: "Buhar zayıf veya hiç gelmiyor",
        text: "Kireçlenmiş buhar jeneratörü, tıkalı nozul, arızalı solenoid valf ve düşük şebeke basıncı buhar çevrimini keser.",
      },
      {
        title: "Isıtma devreye girmiyor",
        text: "Yanmış rezistans, bobini yanmış veya yapışmış kontaktör, emniyet termostatı kesmesi ve brülör kilitlenmesi ısı devresini durdurur.",
      },
      {
        title: "Döner araba dönmüyor / takılıyor",
        text: "Redüktör aşınması, zincir-kayış gevşemesi ve taban rulman grubundaki yıpranma araba dönüşünü bozarak pişirmeyi dengesizleştirir.",
      },
    ],
    parts: [
      "Rezistans grupları ve güç kontaktörü",
      "Buhar jeneratörü, nozul ve solenoid valf",
      "Sirkülasyon fan motoru ve kondansatör",
      "Kapiler ve emniyet termostatı, sıcaklık probu",
      "Döner araba redüktörü, zincir ve rulman seti",
      "Kapı contası, menteşe ve kapı camı",
    ],
    faq: [
      {
        q: "Özköseoğlu ekmek fırınımda katlar arasında pişme farkı var, sebebi ne olabilir?",
        a: "En sık üç neden görülür: o kata ait rezistans grubunun zayıflaması, hava dağılım kanalının veya baca çekişinin tıkanması ve termostat kalibrasyonunun kayması. Servis sırasında her kat ayrı ayrı sıcaklık ölçümüyle taranır; fark sayısal olarak belirlendikten sonra yalnızca ilgili gruba müdahale edilir.",
      },
      ...commonBrandFaq("Özköseoğlu"),
    ],
  },
  {
    slug: "fimak-firin-servisi",
    name: "Fimak",
    aliases: ["Fimak Fırın Makinaları", "Fimak Makina"],
    origin: "Türkiye (Konya)",
    tagline:
      "Döner arabalı, siklotermik ve katlı fırın hatlarında ısıtma ve buhar sistemi servisi.",
    repairNote:
      "Fimak fırın tamiri, cihazın elektrikli mi yoksa yakma gruplu (siklotermik / borulu) model mi olduğunun ayrılmasıyla başlar. Elektrikli modellerde rezistans direnci ve kontaktör teması, yakma gruplu modellerde ise brülör ateşleme, baca çekişi ve ısı transfer hattı ölçülür. Doğru kolda ilerlemek tamir süresini belirgin şekilde kısaltır.",
    priceNote:
      "Fimak fırın tamiri fiyatı; arızanın ısıtma grubunda mı, buhar hattında mı yoksa tahrik/redüktör tarafında mı olduğuna göre değişir. Rezistans, kontaktör ve termostat gibi standart kalemlerde telefonda aralık verilebilir; brülör ve redüktör işlerinde kesin fiyat yerinde tespitten sonra paylaşılır.",
    intro: [
      "Fimak, Konya merkezli fırın makineleri üreticisi olarak ekmek ve unlu mamul üretimi yapan işletmelerde geniş bir kullanıcı tabanına sahiptir. Döner arabalı fırınlar, siklotermik ve borulu modeller, elektrikli katlı fırınlar ve konveksiyonel hatlar en sık servis verdiğimiz gruplardır. Fimak fırın servisi ve tamiri çalışmalarımız cihaz tipinin ve ısıtma mimarisinin doğru belirlenmesiyle başlar.",
      "Döner arabalı modellerde performansın üç ayağı vardır: ısı üretimi, hava sirkülasyonu ve araba dönüşü. Bu üçünden biri bozulduğunda şikâyet çoğu zaman aynı şekilde gelir — 'ürün eşit pişmiyor'. Ekibimiz sıcaklık ölçümü, fan devri kontrolü ve redüktör-tahrik muayenesini birlikte yaparak farkın kaynağını ayırır.",
      "Buhar sistemi Fimak fırınlarında kabuk kalitesini doğrudan belirler. Kireçlenmiş buhar hücresi ve tıkanmış nozullar püskürtmeyi zayıflatır; su sertliği yüksek bölgelerde bu arıza kısa aralıklarla tekrar eder. Onarımla birlikte su hazırlık tarafını da kontrol eder, tekrarın kök nedenini işletmeye yazılı olarak bildiririz.",
    ],
    productLines: [
      "Döner arabalı fırınlar",
      "Siklotermik ve borulu fırınlar",
      "Elektrikli katlı fırınlar",
      "Konveksiyonel fırınlar",
      "Mayalandırma kabinleri ve klima üniteleri",
      "Hamur yoğurma ve şekillendirme grupları",
    ],
    commonFaults: [
      {
        title: "Ürün eşit pişmiyor",
        text: "Düşen fan devri, dengesiz hava kanalı ve araba dönüş hızındaki bozulma tepsiler arasında renk farkı yaratır.",
      },
      {
        title: "Buhar püskürtme zayıf",
        text: "Kireçlenmiş buhar hücresi, tıkalı nozul ve arızalı solenoid valf kabuk parlaklığını düşürür.",
      },
      {
        title: "Brülör kilitleniyor / ateşleme yok",
        text: "Kirli ateşleme elektrodu, iyonizasyon problemi, yetersiz baca çekişi ve gaz basıncı düşüklüğü yakma grubunu emniyete alır.",
      },
      {
        title: "Redüktör ve tahrik sesi",
        text: "Aşınan redüktör dişlisi, gevşeyen zincir ve yıpranmış rulman önce ses, ardından dönüş düzensizliği olarak ortaya çıkar.",
      },
    ],
    parts: [
      "Rezistans grupları ve güç kontaktörü",
      "Buhar hücresi, nozul ve solenoid valf",
      "Fan motoru, kondansatör ve fan kanadı",
      "Brülör ateşleme elektrodu ve otomatı",
      "Redüktör, zincir ve tahrik rulmanı",
      "Termostat, sıcaklık probu ve kontrol kartı",
    ],
    faq: [
      {
        q: "Fimak döner arabalı fırınımda tepsiler arasında renk farkı oluşuyor, ne yapmalıyım?",
        a: "Önce fan devri ve araba dönüş hızı ölçülür; bu ikisi düştüğünde sıcak hava tepsilere eşit dağılmaz. Ardından hava yönlendirme sacları ve buhar nozulları kontrol edilir. Ölçüm sonucuna göre çoğu vakada fan kondansatörü veya redüktör bakımıyla sorun tek ziyarette kapanır.",
      },
      ...commonBrandFaq("Fimak"),
    ],
  },
  {
    slug: "altintop-firin-servisi",
    name: "Altıntop",
    aliases: ["Altuntop", "Altintop", "Altuntop Isı ve Makina"],
    origin: "Türkiye",
    tagline:
      "Döner arabalı ekmek fırınları ve ısı gruplarında mekanik ağırlıklı, yerinde servis.",
    repairNote:
      "Altıntop fırın tamiri, cihazların mekanik ağırlıklı yapısı sayesinde büyük ölçüde yerinde tamamlanır. Rezistans, kontaktör, termostat, fan grubu ve tahrik parçaları sahada değiştirilebildiği için işletmeyi ikinci bir ziyaret için bekletmeyiz.",
    priceNote:
      "Altıntop fırın tamiri fiyatı; değişecek parçaya ve müdahale süresine göre belirlenir. Rezistans, termostat ve kontaktör gibi standart kalemlerde maliyet öngörülebilir olduğundan telefonda gerçekçi bir aralık verilebilir; redüktör ve buhar grubu işlerinde fiyat yerinde tespitle netleşir.",
    intro: [
      "Altıntop (Altuntop), ekmek ve unlu mamul üretimine yönelik ısı ve fırın makineleri üreten Türk markalarındandır. Döner arabalı ekmek fırınları, katlı modeller ve mayalandırma kabinleri en çok servis verdiğimiz gruplardır. Altıntop fırın servisi ve tamiri hizmetimizde çoğu arıza tek serviste kapatılır; çünkü kritik parçaların önemli kısmı araç stoğumuzda bulunur.",
      "Yoğun kullanımda en sık görülen sorunlar rezistans yanması, kontaktör teması bozulması, termostat kalibrasyon kayması ve fan rulmanı aşınmasıdır. Bu kalemlerin tamamı yerinde ölçülerek doğrulanır; parça, arıza ölçümle kanıtlanmadan değiştirilmez.",
      "Döner arabalı modellerde tahrik grubu ayrı bir bakım başlığıdır. Redüktör yağ seviyesi, zincir gerginliği ve taban rulmanı düzenli kontrol edilmediğinde önce dönüş düzensizliği, ardından pişirme dengesizliği ortaya çıkar. Periyodik bakım ziyaretlerimizde bu kontroller standart olarak yapılır.",
    ],
    productLines: [
      "Döner arabalı ekmek fırınları",
      "Katlı ve taş tabanlı fırınlar",
      "Konveksiyonel fırınlar",
      "Mayalandırma (fermantasyon) kabinleri",
      "Buhar üretim ve dağıtım grupları",
      "Tava arabaları ve yardımcı ekipmanlar",
    ],
    commonFaults: [
      {
        title: "Rezistans yanması",
        text: "Yoğun çalışma ve gerilim dalgalanmaları rezistans ömrünü kısaltır; direnç ölçümüyle arızalı grup tespit edilir.",
      },
      {
        title: "Termostat sapması",
        text: "Kapiler termostatlarda zamanla oluşan kayma, gösterge ile gerçek fırın sıcaklığı arasında fark yaratır.",
      },
      {
        title: "Araba dönüşü düzensiz",
        text: "Redüktör aşınması, gevşeyen zincir ve yıpranmış taban rulmanı dönüşü aksatarak pişirmeyi dengesizleştirir.",
      },
      {
        title: "Isı kaçağı ve uzayan pişirme",
        text: "Sertleşen kapı contası, ayarı bozulan menteşe ve yıpranmış izolasyon ısı kaybını artırır, enerji tüketimini yükseltir.",
      },
    ],
    parts: [
      "Rezistans grupları",
      "Kapiler ve emniyet termostatı",
      "Fan motoru ve rulman seti",
      "Kontaktör ve termik röle",
      "Redüktör, zincir ve tahrik parçaları",
      "Kapı contası, menteşe ve izolasyon malzemesi",
    ],
    faq: [
      {
        q: "Altıntop mı Altuntop mu — servis talebimi hangi isimle iletmeliyim?",
        a: "İki yazım da aynı markayı işaret ettiği için fark etmez; kayıt açarken cihazın etiket bilgisi esas alınır. Etiketteki model ve seri numarasını telefonda iletmeniz, teknisyenin doğru parçalarla yola çıkması için yeterlidir.",
      },
      ...commonBrandFaq("Altıntop"),
    ],
  },
  {
    slug: "turhan-celik-firin-servisi",
    name: "Turhan Çelik",
    aliases: ["Turhan Celik", "Turhançelik", "Turhan Çelik Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Kuzine, fritöz, konveksiyonel fırın ve setüstü pişirme gruplarında bütünleşik mutfak servisi.",
    repairNote:
      "Turhan Çelik fırın tamiri, markanın geniş mutfak ekipmanı yelpazesi nedeniyle çoğu zaman tek cihazla sınırlı kalmaz: fırın onarımıyla birlikte aynı hattaki kuzine, fritöz ve benmari grupları da kontrol edilir. Bu yaklaşım, işletmenin ikinci bir servis çağrısı açmasını önler.",
    priceNote:
      "Turhan Çelik fırın tamiri fiyatı; arızanın ısıtma grubunda mı, gaz/elektrik kontrol tarafında mı yoksa mekanik parçalarda mı olduğuna göre belirlenir. Aynı ziyarette birden fazla cihaza müdahale edildiğinde tek servis bedeli uygulanır, yalnızca parça maliyeti eklenir.",
    intro: [
      "Turhan Çelik, endüstriyel mutfak ekipmanları üreten ve otel, restoran, toplu yemek mutfaklarında yaygın kullanılan Türk markalarındandır. Konveksiyonel fırınlar, kuzine ocaklar, fritöz ve ızgara grupları ile paslanmaz hazırlık ekipmanları ürün yelpazesinin ana başlıklarıdır. Turhan Çelik fırın servisi ve tamiri çalışmalarımız, cihazın gazlı mı elektrikli mi olduğunun belirlenmesiyle başlar.",
      "Gazlı modellerde arızaların önemli bölümü yakma grubunda toplanır: kirlenmiş brülör memesi, arızalı termokupl, gaz valfi ve ateşleme problemi. Elektrikli modellerde ise rezistans direnci, kontaktör teması ve termostat kesme noktası ölçülür. İki yolda da parça değişimi öncesi arızalı halka ölçümle doğrulanır.",
      "Mutfak hattında fırınla birlikte çalışan fritöz, kuzine ve benmari grupları da aynı elektrik ve gaz altyapısını paylaşır. Tekrar eden arızaların arkasında çoğu zaman gevşemiş klemens bağlantıları veya yetersiz havalandırma bulunur; servis ziyaretlerimizde bu ortak noktalar da kontrol edilir.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Kuzine ocak ve setüstü pişirme grupları",
      "Fritöz, ızgara ve pleyt üniteleri",
      "Benmari ve sıcak teşhir grupları",
      "Paslanmaz hazırlık tezgâhları ve dolaplar",
      "Davlumbaz ve havalandırma hatları",
    ],
    commonFaults: [
      {
        title: "Gazlı grupta alev sönmesi",
        text: "Arızalı termokupl, kirlenmiş brülör memesi ve gaz valfi problemi alevin emniyete alınarak kesilmesine yol açar.",
      },
      {
        title: "Isıtma yok, panel çalışıyor",
        text: "Yanmış rezistans, bobini yanmış kontaktör ve kesmiş emniyet termostatı elektrikli modellerde ısıtma devresini durdurur.",
      },
      {
        title: "Fan devri düşük, pişirme dengesiz",
        text: "Zayıflamış kondansatör, yıpranmış rulman ve kirlenmiş fan kanadı hava debisini düşürerek tepsi farkı yaratır.",
      },
      {
        title: "Kapı contası ve ısı kaçağı",
        text: "Sertleşen conta ve ayarı bozulan menteşe ısı kaybını artırır, pişirme süresini ve enerji tüketimini yükseltir.",
      },
    ],
    parts: [
      "Rezistans grubu ve güç kontaktörü",
      "Termokupl, gaz valfi ve brülör memesi",
      "Kapiler ve emniyet termostatı",
      "Fan motoru, kondansatör ve fan kanadı",
      "Kapı contası, menteşe ve kilit mekanizması",
      "Şalter, zaman rölesi ve tuş grubu",
    ],
    faq: [
      {
        q: "Turhan Çelik mutfağımda birden fazla cihaz arızalı, hepsine aynı gün bakabiliyor musunuz?",
        a: "Evet. Fırın, kuzine, fritöz ve benmari gibi gruplar aynı ziyarette kontrol edilir ve mümkün olanlar aynı gün onarılır. Kayıt açarken arızalı cihazların listesini iletmeniz yeterlidir; teknisyen ilgili parçaları araçta bulundurarak yola çıkar.",
      },
      ...commonBrandFaq("Turhan Çelik"),
    ],
  },
  {
    slug: "atalay-firin-servisi",
    name: "Atalay",
    aliases: ["Atalay Mutfak", "Atalay Endüstriyel Mutfak"],
    origin: "Türkiye",
    tagline:
      "Endüstriyel mutfak ve pişirme gruplarında tamir edilebilir mekanik yapı, hızlı yerinde müdahale.",
    repairNote:
      "Atalay fırın tamiri, cihazların sade ve mekanik ağırlıklı yapısı sayesinde çoğunlukla tek ziyarette tamamlanır. Rezistans, termostat, kontaktör ve fan grubu sahada ölçülüp değiştirilebildiği için işletmenin duruş süresi kısa tutulur.",
    priceNote:
      "Atalay fırın tamiri fiyatı; değişecek parça ve müdahale süresiyle doğrudan ilişkilidir. Standart kalemlerde telefonda gerçekçi bir aralık verilebilir; özel ölçü parça veya imalat gerektiren durumlarda fiyat yerinde tespitten sonra netleşir.",
    intro: [
      "Atalay, endüstriyel mutfak ve pişirme ekipmanları üreten Türk markalarındandır. Restoran, otel ve toplu yemek mutfaklarında fırın, ocak, fritöz ve hazırlık ekipmanlarıyla yaygın kullanılır. Atalay fırın servisi ve tamiri çalışmalarımızda öne çıkan avantaj, cihazların tamir edilebilir mekanik yapısıdır: doğru teşhis yapıldığında onarım hızlanır.",
      "En sık karşılaştığımız başlıklar rezistans yanması, termostat kalibrasyon kayması, kontaktör teması bozulması ve fan rulmanı aşınmasıdır. Her biri yerinde elektriksel ölçümle doğrulanır; gösterge ile gerçek sıcaklık arasındaki fark termometre ile sayısal olarak ortaya konur.",
      "Atalay cihazlarında elektriksel bağlantı noktalarının periyodik sıkılması önemli fark yaratır. Gevşeyen klemens bağlantıları ısınarak kablo ve terminal yanmalarına yol açar; bakım ziyaretlerimizde bu kontrol standart olarak yapılır ve termal kamera ile ısınan nokta varsa raporlanır.",
    ],
    productLines: [
      "Konveksiyonel fırınlar",
      "Pide ve lahmacun fırınları",
      "Kuzine ocak ve setüstü pişirme grupları",
      "Fritöz ve benmari üniteleri",
      "Bulaşık ve yıkama grupları",
      "Paslanmaz hazırlık ekipmanları",
    ],
    commonFaults: [
      {
        title: "Rezistans yanması",
        text: "Yoğun çalışma ve gerilim dalgalanmaları rezistans ömrünü kısaltır; direnç ölçümüyle arızalı grup belirlenir.",
      },
      {
        title: "Termostat sapması",
        text: "Zamanla oluşan kalibrasyon kayması, gösterilen sıcaklık ile fırın içi gerçek sıcaklık arasında fark yaratır.",
      },
      {
        title: "Kontaktör teması bozulması",
        text: "Yapışan veya bobini yanan kontaktör, ısıtma devresini ya hiç açmaz ya da sürekli açık bırakır.",
      },
      {
        title: "Fan rulmanı ve ses",
        text: "Aşınan rulman önce ses, ardından devir düşüşü ve tepsiler arası pişirme farkı olarak kendini gösterir.",
      },
    ],
    parts: [
      "Rezistans grupları",
      "Kapiler ve emniyet termostatı",
      "Kontaktör ve termik röle",
      "Fan motoru, kondansatör ve rulman seti",
      "Kapı contası ve menteşe",
      "Şalter, zaman rölesi ve kablo grubu",
    ],
    faq: [
      {
        q: "Atalay fırınımın göstergesi ile içerideki gerçek sıcaklık farklı, bu tamir edilir mi?",
        a: "Evet. Fark çoğu vakada termostat kalibrasyon kaymasından kaynaklanır ve termostat değişimi ya da ayarıyla giderilir. Servis sırasında fırın içi sıcaklık bağımsız termometre ile ölçülür, fark sayısal olarak kayda geçirilir ve onarım sonrası doğrulama ölçümü tekrarlanır.",
      },
      ...commonBrandFaq("Atalay"),
    ],
  },
  {
    slug: "furmaks-firin-servisi",
    name: "Furmaks",
    aliases: ["Furmaks Mutfak", "Furmaks Endüstriyel Mutfak"],
    origin: "Türkiye (İstanbul)",
    tagline:
      "Endüstriyel mutfak ekipmanları ve pişirme hatlarında komple mutfak bakım ve onarımı.",
    repairNote:
      "Furmaks fırın tamiri, markanın geniş mutfak ekipmanı yelpazesi nedeniyle hat bazlı ele alınır: fırın onarımıyla birlikte aynı elektrik ve gaz altyapısını paylaşan diğer gruplar da kontrol edilir. Böylece tekrar eden arızaların kök nedeni tek ziyarette ortaya çıkar.",
    priceNote:
      "Furmaks fırın tamiri fiyatı; arızanın ısıtma grubunda mı, kontrol tarafında mı yoksa mekanik parçalarda mı olduğuna göre belirlenir. Aynı ziyarette birden fazla cihaza müdahale edildiğinde tek servis bedeli uygulanır, yalnızca değişen parçalar ayrıca faturalanır.",
    intro: [
      "Furmaks, İstanbul merkezli endüstriyel mutfak ekipmanları markalarından biridir ve restoran, otel, pastane ile toplu yemek mutfaklarında geniş bir ürün yelpazesiyle kullanılır. Furmaks fırın servisi ve tamiri çalışmalarımız, cihazın gazlı mı elektrikli mi olduğunun ve kontrol tipinin belirlenmesiyle başlar.",
      "Pişirme gruplarında en sık görülen arızalar rezistans yanması, kontaktör teması bozulması, termostat sapması ve fan grubunda devir düşüşüdür. Gazlı modellerde ise termokupl, brülör memesi ve gaz valfi öne çıkar. Her vakada parça değişimi öncesi arızalı halka ölçümle doğrulanır.",
      "Yıkama ve hazırlık grupları aynı mutfakta fırınla birlikte çalıştığı için kireç, tıkanma ve tahliye sorunları da servis kapsamına alınır. Su sertliği yüksek bölgelerde arızaların tekrar etmemesi için su hazırlık tarafını kontrol eder, gerekli iyileştirmeyi işletmeye yazılı olarak öneririz.",
    ],
    productLines: [
      "Konveksiyonel ve buharlı fırınlar",
      "Pizza, pide ve lahmacun fırınları",
      "Kuzine ocak ve setüstü pişirme grupları",
      "Fritöz, ızgara ve pleyt üniteleri",
      "Bulaşık ve bardak yıkama makineleri",
      "Benmari, teşhir ve paslanmaz hazırlık ekipmanları",
    ],
    commonFaults: [
      {
        title: "Isıtma yok, panel çalışıyor",
        text: "Yanmış rezistans, bobini yanmış veya yapışmış kontaktör ve kesmiş emniyet termostatı ısıtma devresini durdurur.",
      },
      {
        title: "Gazlı grupta alev kesilmesi",
        text: "Arızalı termokupl, kirlenmiş brülör memesi ve gaz valfi problemi alevin emniyete alınmasına yol açar.",
      },
      {
        title: "Fan devri düşük, tepsi farkı",
        text: "Zayıflamış kondansatör, yıpranmış rulman ve kirlenmiş fan kanadı hava dağılımını bozar.",
      },
      {
        title: "Yıkama grubunda kireç ve tahliye sorunu",
        text: "Kireçlenmiş rezistans, tıkalı püskürtme kolları ve arızalı tahliye pompası yıkama performansını düşürür.",
      },
    ],
    parts: [
      "Rezistans grubu ve güç kontaktörü",
      "Termokupl, gaz valfi ve brülör memesi",
      "Kapiler ve emniyet termostatı, sıcaklık probu",
      "Fan motoru, kondansatör ve fan kanadı",
      "Kapı contası, menteşe ve kilit mekanizması",
      "Yıkama pompası, dozaj hortumu ve püskürtme kolu",
    ],
    faq: [
      {
        q: "Furmaks cihazımın yedek parçası bulunur mu?",
        a: "Rezistans, termostat, kontaktör, prob ve fan motoru gibi sık değişen kalemleri araç ve depo stoğumuzda tutuyoruz; bu parçalarda müdahale genellikle tek ziyarette tamamlanır. Gövdeye özel parçalarda tedarik süresi ortalama 1-3 iş günüdür ve bu sürede cihazı kısıtlı da olsa çalışır durumda tutacak çözümler uygulanır.",
      },
      ...commonBrandFaq("Furmaks"),
    ],
  },
];

export const brandSlugs = brands.map((b) => b.slug);

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  MARKA <-> HIZMET ESLESTIRMESI                                      */
/*  Marka sayfalarindan ilgili hizmet sayfalarina konu-alakali ic link */
/*  vermek icin kullanilir. Sirali: en alakali hizmet basta.           */
/* ------------------------------------------------------------------ */

export const brandServiceMap: Record<string, string[]> = {
  "electrolux-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "kombi-firin-servisi",
    "endustriyel-mutfak-servisi",
    "endustriyel-firin-servisi",
  ],
  "ayfa-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "pide-lahmacun-firin-servisi",
    "pizza-firini-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "ucler-firin-servisi": [
    "matador-firin-servisi",
    "pide-lahmacun-firin-servisi",
    "donerli-firin-servisi",
    "pizza-firini-servisi",
  ],
  "pimak-firin-servisi": [
    "konveyorlu-firin-servisi",
    "donerli-firin-servisi",
    "pizza-firini-servisi",
    "sanayi-tipi-firin-servisi",
  ],
  "inoksan-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "kombi-firin-servisi",
    "endustriyel-mutfak-servisi",
    "endustriyel-firin-servisi",
  ],
  "venarro-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "empero-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "pizza-firini-servisi",
    "pide-lahmacun-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "unox-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "kombi-firin-servisi",
    "endustriyel-firin-servisi",
  ],
  "oztiryakiler-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "kombi-firin-servisi",
    "endustriyel-mutfak-servisi",
    "endustriyel-firin-servisi",
  ],
  "csa-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "kayalar-firin-servisi": [
    "matador-firin-servisi",
    "pide-lahmacun-firin-servisi",
    "donerli-firin-servisi",
    "sanayi-tipi-firin-servisi",
  ],
  "maksan-firin-servisi": [
    "donerli-firin-servisi",
    "konveyorlu-firin-servisi",
    "sanayi-tipi-firin-servisi",
  ],
  "greenoks-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "alveo-firin-servisi": [
    "matador-firin-servisi",
    "konveksiyonel-firin-servisi",
    "sanayi-tipi-firin-servisi",
  ],
  "inoxclass-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "vital-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "pizza-firini-servisi",
    "pide-lahmacun-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "ndustrio-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "kombi-firin-servisi",
    "endustriyel-firin-servisi",
  ],
  "senoven-firin-servisi": [
    "donerli-firin-servisi",
    "matador-firin-servisi",
    "konveyorlu-firin-servisi",
    "sanayi-tipi-firin-servisi",
  ],
  "sgs-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "pide-lahmacun-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "omake-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "kombi-firin-servisi",
    "endustriyel-mutfak-servisi",
  ],
  "ozkoseoglu-firin-servisi": [
    "sanayi-tipi-firin-servisi",
    "donerli-firin-servisi",
    "konveksiyonel-firin-servisi",
    "endustriyel-firin-servisi",
  ],
  "fimak-firin-servisi": [
    "donerli-firin-servisi",
    "sanayi-tipi-firin-servisi",
    "konveksiyonel-firin-servisi",
    "endustriyel-firin-servisi",
  ],
  "altintop-firin-servisi": [
    "donerli-firin-servisi",
    "sanayi-tipi-firin-servisi",
    "endustriyel-firin-servisi",
  ],
  "turhan-celik-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
    "pide-lahmacun-firin-servisi",
    "endustriyel-firin-servisi",
  ],
  "atalay-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
    "pide-lahmacun-firin-servisi",
  ],
  "furmaks-firin-servisi": [
    "konveksiyonel-firin-servisi",
    "endustriyel-mutfak-servisi",
    "pizza-firini-servisi",
    "endustriyel-firin-servisi",
  ],
};

/** Bir markanin oncelikli hizmet slug'lari; eslesme yoksa genel fırın servisi. */
export function getBrandServiceSlugs(brandSlug: string): string[] {
  return brandServiceMap[brandSlug] ?? ["endustriyel-firin-servisi"];
}

/** Bir hizmete en alakali markalar — hizmet sayfalarindan marka linki icin. */
export function getServiceBrands(serviceSlug: string): Brand[] {
  return brands.filter((b) =>
    (brandServiceMap[b.slug] ?? []).includes(serviceSlug)
  );
}
