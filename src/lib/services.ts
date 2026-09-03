export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  h1: string;
  navName: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keywords: string[];
  intro: string[];
  symptoms: { title: string; text: string }[];
  scope: string[];
  equipment: string[];
  parts: string[];
  faq: FaqItem[];
  priceNote: string;
  /**
   * Ayni konu ailesindeki daha spesifik sayfalara yonlendirme.
   * Ust baslik (hub) sayfalarinin alt sayfalarla ayni anahtar
   * kelimeye girmesini onler; kullaniciyi dogru sayfaya tasir.
   */
  related?: { slug: string; note: string }[];
};

export const services: Service[] = [
  {
    slug: "endustriyel-firin-servisi",
    name: "Endüstriyel Fırın Servisi ve Tamiri",
    navName: "Endüstriyel Fırın Servisi",
    h1: "Endüstriyel Fırın Servisi ve Tamiri",
    icon: "oven",
    metaTitle: "Endüstriyel Fırın Servisi ve Tamiri | Aynı Gün Yerinde Servis",
    metaDescription:
      "Endüstriyel fırın servisi ve tamiri: konveksiyonel, kombi, konveyör ve taş tabanlı fırınlarda aynı gün yerinde arıza tespiti ve 24 ay işçilik garantisi.",
    excerpt:
      "Konveksiyonel, kombi, konveyör ve taş tabanlı tüm endüstriyel fırınlarda yerinde arıza tespiti, onarım ve periyodik bakım.",
    keywords: [
      "endüstriyel fırın servisi",
      "endüstriyel fırın tamiri",
      "endüstriyel fırın tamircisi",
      "endüstriyel fırın arıza servisi",
      "endüstriyel fırın bakımı",
      "endüstriyel fırın yedek parça",
    ],
    intro: [
      "Endüstriyel fırın, bir mutfağın üretim kapasitesini doğrudan belirleyen ekipmandır. Fırın durduğunda servis durur; bu yüzden endüstriyel fırın servisi ve tamiri işini saat bazında düşünmek gerekir. Ekiplerimiz otel, restoran, pastane, fabrika mutfağı ve catering işletmelerinde konveksiyonel, kombi (buharlı), konveyör bantlı ve taş tabanlı fırınların tamamına yerinde müdahale eder.",
      "Arızanın kaynağı çoğu zaman göründüğü yerde değildir. Isıtmayan bir fırında sorun rezistansta olabileceği gibi, güç kontaktöründe, sıcaklık probunda, kapı mikro şalterinde veya kontrol kartının röle çıkışında da olabilir. Bu nedenle her müdahale, gözle muayeneyle değil elektriksel ölçüm ve fonksiyon testiyle başlar: rezistans direnci, izolasyon, faz dengesi, prob direnç–sıcaklık eğrisi ve gazlı modellerde iyonizasyon akımı tek tek kontrol edilir.",
      "Onarım sonrasında cihaz boş değil, tam yükte test edilir. Set sıcaklığına ulaşma süresi, sıcaklık dalgalanması, fan devri, buhar üretimi ve kapı sızdırmazlığı ölçülerek işletmeye teslim edilir. Amacımız cihazı çalışır hale getirmek değil, arızadan önceki pişirme performansına döndürmektir.",
    ],
    symptoms: [
      {
        title: "Fırın ısınmıyor veya geç ısınıyor",
        text: "Yanmış rezistans, arızalı güç kontaktörü, kopmuş faz, bozulmuş sıcaklık probu veya emniyet termostatının atması en sık görülen nedenlerdir.",
      },
      {
        title: "Sıcaklık göstergeden farklı",
        text: "Kalibrasyonu kaymış NTC/PT100 prob, hatalı prob konumu veya kontrol kartındaki ölçüm devresi sapması sonucu ekran ile gerçek sıcaklık ayrışır.",
      },
      {
        title: "Üstü yanıyor, altı çiğ kalıyor",
        text: "Fan devrinin düşmesi, fan kanadının deforme olması, hava yönlendirme sacının eğrilmesi veya üst grup rezistansının tek başına çalışması homojen olmayan pişirmeye yol açar.",
      },
      {
        title: "Kapı contası ve ısı kaybı",
        text: "Sertleşmiş veya yırtılmış silikon conta, ayarı kaçmış kapı menteşesi ve kilit mekanizması ısı kaçağı ile enerji tüketimini %20'ye kadar artırır.",
      },
      {
        title: "Panelde hata kodu / cihaz kilitleniyor",
        text: "Kontrol kartı besleme sorunları, aşırı ısınma koruması, prob açık devre hataları ve tuş takımı film arızaları hata kodlarının ardındaki tipik nedenlerdir.",
      },
      {
        title: "Gaz yakmıyor, alev tutmuyor",
        text: "Gazlı modellerde ateşleme elektrodu, iyonizasyon sensörü, gaz valfi bobini ve baca çekişi kontrol edilerek yanma emniyeti yeniden sağlanır.",
      },
    ],
    scope: [
      "Yerinde arıza tespiti ve elektriksel ölçüm raporu",
      "Rezistans, termostat ve sıcaklık probu değişimi",
      "Fan motoru, rulman ve kanat onarımı / değişimi",
      "Elektronik kontrol kartı tamiri ve programlama",
      "Gaz brülörü ayarı, ateşleme ve iyonizasyon kontrolü",
      "Kapı contası, menteşe ve kilit mekanizması yenileme",
      "Buhar üretim grubu ve su yumuşatma kontrolü",
      "Kireç çözme, hijyen temizliği ve kalibrasyon",
      "Periyodik bakım sözleşmesi ve yedek parça tedariki",
    ],
    equipment: [
      "Konveksiyonel fırın",
      "Kombi (buharlı) fırın",
      "Konveyör bantlı fırın",
      "Taş tabanlı pizza fırını",
      "Katlı ekmek ve pastane fırını",
      "Döner (rotary) fırın",
      "Elektrikli ve gazlı model fırınlar",
    ],
    parts: [
      "Rezistans (üst / alt / halka tip)",
      "Sıcaklık probu (NTC, PT100, K tipi termokupl)",
      "Emniyet termostatı ve kapiler termostat",
      "Güç kontaktörü ve termik röle",
      "Fan motoru, kondansatör ve fan kanadı",
      "Elektronik kontrol kartı ve tuş takımı filmi",
      "Kapı contası, menteşe ve cam",
      "Gaz valfi, ateşleme elektrodu, iyonizasyon çubuğu",
      "Su pompası, solenoid valf, buhar nozulu",
    ],
    faq: [
      {
        q: "Endüstriyel fırın servisi aynı gün gelebilir mi?",
        a: "Evet. Hafta içi 16:00'a kadar açılan arıza kayıtlarında aynı gün yerinde müdahale hedeflenir. İstanbul'un her ilçesinde bölgesel ekip bulunduğu için ortalama varış süresi 2-4 saattir. Üretimi tamamen durduran arızalarda öncelikli acil kayıt açılır.",
      },
      {
        q: "Arıza tespiti ücretli mi?",
        a: "Yerinde arıza tespiti için servis bedeli uygulanır; onarım tarafımızca yapıldığında bu bedel toplam tutardan düşülür. Parça ve işçilik bedeli, işleme başlanmadan önce yazılı olarak bildirilir ve onayınız alınmadan hiçbir işlem yapılmaz.",
      },
      {
        q: "Yedek parçalar orijinal mi?",
        a: "Rezistans, kontrol kartı, fan motoru ve gaz valfi gibi kritik parçalarda öncelik marka orijinalidir. Orijinal parçanın temin süresi işletmeyi bekletecekse, aynı teknik değerlerde sertifikalı muadil parça seçeneği fiyatıyla birlikte sunulur ve tercihi siz yaparsınız.",
      },
      {
        q: "Onarıma garanti veriyor musunuz?",
        a: "Yapılan işçilik 24 aya kadar, değişen parçalar ise üretici garanti süresi boyunca garantilidir. Garanti kapsamındaki aynı arıza için servis ve işçilik bedeli alınmaz. Tüm servisler fatura ve servis formu ile belgelendirilir.",
      },
      {
        q: "Fırınım çok eski, parçası bulunur mu?",
        a: "Üretimden kalkmış modellerde parça envanterimiz, muadil tedarikçi ağımız ve gerektiğinde imalat çözümleriyle (özel ölçü rezistans sarımı, kapı contası kesimi, fan kanadı balanslama) çalışırız. Onarımın ekonomik olmadığı durumlarda bunu açıkça söyler, cihaz yenileme alternatiflerini sunarız.",
      },
      {
        q: "Periyodik bakım ne sıklıkta yapılmalı?",
        a: "Günde 8 saatin üzerinde çalışan işletmelerde 3 ayda bir, normal yoğunluktaki mutfaklarda 6 ayda bir bakım önerilir. Periyodik bakım; kireç çözme, conta kontrolü, elektriksel bağlantı sıkma, fan temizliği ve sıcaklık kalibrasyonunu kapsar ve ani duruşların büyük bölümünü önler.",
      },
    ],
    priceNote:
      "Endüstriyel fırın tamiri fiyatı; cihazın markası, arızanın türü ve değişecek parçaya göre belirlenir. Telefonla verilen tahmini aralık, yerinde teşhis sonrası kesinleşir.",
  },
  {
    slug: "endustriyel-mutfak-servisi",
    name: "Endüstriyel Mutfak Servisi",
    navName: "Endüstriyel Mutfak Servisi",
    h1: "Endüstriyel Mutfak Servisi ve Ekipman Tamiri",
    icon: "kitchen",
    metaTitle: "Endüstriyel Mutfak Servisi | Ekipman Bakım ve Tamiri",
    metaDescription:
      "Endüstriyel mutfak servisi: fırın, ocak, fritöz, bulaşık makinesi ve soğutma ekipmanlarında yerinde arıza tespiti, periyodik bakım ve garantili onarım.",
    excerpt:
      "Fırından bulaşıkhaneye kadar tüm endüstriyel mutfak ekipmanları için tek elden bakım, onarım ve yedek parça hizmeti.",
    keywords: [
      "endüstriyel mutfak servisi",
      "endüstriyel mutfak tamiri",
      "endüstriyel mutfak bakımı",
      "sanayi mutfak servisi",
      "endüstriyel mutfak ekipman servisi",
    ],
    intro: [
      "Endüstriyel mutfak, birbirine bağlı onlarca ekipmanın aynı anda çalıştığı bir üretim hattıdır. Fırının ısınmaması kadar, bulaşık makinesinin durması veya soğuk odanın sıcaklık tutmaması da servisi durdurur. Endüstriyel mutfak servisi hizmetimiz, bu ekipmanların tamamını tek sözleşme ve tek muhatap altında toplar; her marka için ayrı servis aramak zorunda kalmazsınız.",
      "Ekiplerimiz pişirme grubu (fırın, ocak, ızgara, fritöz, benmari), yıkama grubu (bulaşık makinesi, bardak yıkama, ön yıkama duşu), soğutma grubu (buzdolabı, soğuk oda, şoklama) ve hazırlık ekipmanlarında (hamur yoğurma, dilimleme, mikser) çalışır. Elektrik, gaz, su ve buhar hatlarının cihaz bağlantılarını da kontrol ederiz.",
      "Düzenli bakım alan bir mutfakta ani duruşların yaklaşık dörtte üçü önlenebilir. Periyodik bakım programımız her ekipman için kontrol listesi, ölçüm değerleri ve fotoğraflı rapor içerir; böylece hangi parçanın ne zaman değişeceğini önceden planlar, bütçenizi sürpriz kalemlerden korursunuz.",
    ],
    symptoms: [
      {
        title: "Bulaşık makinesi yıkamıyor / durulamıyor",
        text: "Tıkalı yıkama kolu memeleri, arızalı sirkülasyon pompası, kireçlenmiş rezistans ve bozulan boyler termostatı en sık nedenlerdir.",
      },
      {
        title: "Fritöz yağ sıcaklığını tutmuyor",
        text: "Yanmış rezistans, kalibrasyonu kaymış termostat veya devreye giren aşırı ısınma emniyeti yağ sıcaklığını dengesizleştirir.",
      },
      {
        title: "Soğutucu sıcaklık tutmuyor",
        text: "Gaz kaçağı, kirli kondenser, arızalı fan motoru veya defrost devresindeki sorun soğutma kapasitesini düşürür.",
      },
      {
        title: "Ocak / ızgara alevi düzensiz",
        text: "Tıkalı brülör başlıkları, hatalı gaz basıncı, arızalı termokupl ve pilot alev sorunları alev kalitesini bozar.",
      },
      {
        title: "Davlumbaz çekmiyor",
        text: "Yağlanmış filtreler, aşınmış aspiratör kayışı, devri düşen fan motoru ve kanal tıkanıklığı mutfakta duman birikmesine yol açar.",
      },
      {
        title: "Ekipmanlar sık sık sigorta attırıyor",
        text: "Rezistanslarda izolasyon zayıflaması, ıslanmış terminaller ve panodaki gevşek bağlantılar kaçak akım rölesini tetikler.",
      },
    ],
    scope: [
      "Tüm pişirme grubu ekipmanlarında arıza tespiti ve onarım",
      "Bulaşıkhane ekipmanlarında bakım, kireç çözme ve pompa onarımı",
      "Soğutma grubunda gaz şarjı, kompresör ve termostat işlemleri",
      "Gaz hattı, elektrik panosu ve su bağlantı kontrolleri",
      "Davlumbaz, aspiratör ve filtre bakımı",
      "Periyodik bakım sözleşmesi ve fotoğraflı ekipman raporu",
      "Yeni ekipman montajı, devreye alma ve personel eğitimi",
      "Mutfak revizyonu ve ekipman yerleşim danışmanlığı",
    ],
    equipment: [
      "Endüstriyel fırın ve konveksiyonel fırın",
      "Kuzine ocak, wok ocak, ızgara ve pleyt",
      "Fritöz, benmari, patates dinlendirme",
      "Sanayi tipi bulaşık makinesi ve bardak yıkama",
      "Buzdolabı, soğuk oda, şoklama dolabı",
      "Hamur yoğurma, mikser, dilimleme makineleri",
      "Davlumbaz, aspiratör ve havalandırma grubu",
    ],
    parts: [
      "Rezistans ve termostat grupları",
      "Sirkülasyon ve tahliye pompaları",
      "Solenoid valf ve seviye şamandırası",
      "Kompresör, kondenser fanı, kurutucu filtre",
      "Kontaktör, termik röle, kaçak akım rölesi",
      "Brülör başlığı, enjektör, termokupl",
      "Yıkama kolu, meme seti ve makine contaları",
    ],
    faq: [
      {
        q: "Tüm mutfak ekipmanları için tek servis anlaşması yapabilir miyim?",
        a: "Evet. Fırın, ocak, fritöz, bulaşık makinesi, soğutucu ve davlumbazı kapsayan tek bir periyodik bakım sözleşmesi düzenliyoruz. Her ekipman envantere alınır, marka-model-seri numarasıyla kayıt açılır ve bakım geçmişi tek dosyada tutulur.",
      },
      {
        q: "Bakım sözleşmesi işletmeye ne kazandırır?",
        a: "Öncelikli servis hakkı, indirimli işçilik ve parça fiyatı, planlı duruş imkânı ve arıza sıklığında belirgin düşüş sağlar. Ayrıca enerji tüketimi düşer: kireçlenmiş bir bulaşık makinesi boyleri veya contası kaçıran bir fırın, aynı işi %15-25 daha fazla enerjiyle yapar.",
      },
      {
        q: "Yeni açılacak mutfağın kurulumunu yapıyor musunuz?",
        a: "Ekipman yerleşimi, elektrik-gaz-su altyapısının kontrolü, cihaz montajı, devreye alma ve mutfak personeline kullanım eğitimi veriyoruz. Kurulum sonrası ilk 3 ay içindeki ayar taleplerini ücretsiz karşılıyoruz.",
      },
      {
        q: "Hafta sonu ve gece servis veriyor musunuz?",
        a: "Restoran ve otel mutfaklarının yoğunluğu dikkate alınarak hafta sonu ve mesai dışı randevu verilebilir. Üretimi durduran acil arızalarda 7/24 acil hattımız üzerinden ekip yönlendirilir.",
      },
    ],
    priceNote:
      "Endüstriyel mutfak servisi ücreti; ekipman sayısı, bakım periyodu ve işletmenin bulunduğu ilçeye göre belirlenir. Çok ekipmanlı işletmelerde sözleşmeli bakım tekil servise göre belirgin şekilde ekonomiktir.",
  },
  {
    slug: "sanayi-tipi-firin-servisi",
    name: "Sanayi Tipi Fırın Servisi ve Tamiri",
    navName: "Sanayi Tipi Fırın Servisi",
    h1: "Sanayi Tipi Fırın Servisi ve Tamiri",
    icon: "factory",
    metaTitle: "Sanayi Tipi Fırın Servisi ve Tamiri | Yerinde Teknik Servis",
    metaDescription:
      "Sanayi tipi fırın servisi ve tamiri: yüksek kapasiteli üretim fırınlarında pano, güç, izolasyon ve mekanik arızalara ağır hizmet tipi yerinde müdahale.",
    excerpt:
      "Yüksek kapasiteli üretim fırınlarında pano, güç dağıtımı, izolasyon ve mekanik aktarma arızaları için ağır hizmet tipi teknik servis.",
    keywords: [
      "sanayi tipi fırın servisi",
      "sanayi tipi fırın tamiri",
      "sanayi fırını servisi",
      "endüstriyel üretim fırını servisi",
      "tünel fırın servisi",
      "üretim fırını periyodik bakım",
    ],
    intro: [
      "Sanayi tipi fırınlar, ticari mutfak fırınlarından hem güç hem de süreklilik açısından ayrılır. 380 V üç fazlı beslemeyle çalışan, 30-60 kW arası güç çeken, günde 16-20 saat kesintisiz üretim yapan bu cihazlarda arıza yalnızca bir cihazı değil, tüm üretim planını durdurur. Sanayi tipi fırın servisi ve tamiri bu nedenle hem hızlı hem de kalıcı çözüm gerektirir.",
      "Ekmek fabrikaları, unlu mamul üretim tesisleri, hazır yemek fabrikaları ve gıda işleme hatlarında katlı fırın, döner (rotary) fırın, tünel fırın ve konveyör fırın gruplarına müdahale ediyoruz. Bu cihazlarda yalnızca ısıtma grubu değil; bant tahrik sistemi, redüktör, zincir gerginliği, buhar üretim kazanı, baca çekişi ve otomasyon PLC'si de servis kapsamındadır.",
      "Yüksek kapasiteli fırınlarda önleyici bakım, onarımdan daha kritiktir. Termal kamerayla nokta ölçümü, pano bağlantı sıkma, akım dengesi kontrolü, izolasyon direnci testi ve baca gazı analizi düzenli yapıldığında; hem beklenmedik duruşlar hem de yakıt tüketimi ciddi biçimde azalır.",
    ],
    symptoms: [
      {
        title: "Kat / bölge arası sıcaklık farkı",
        text: "Tek başına çalışmayan rezistans grubu, arızalı bölge kontaktörü veya sapma yapan bölgesel prob nedeniyle katlar arasında pişirme farkı oluşur.",
      },
      {
        title: "Bant hızı düşüyor veya duruyor",
        text: "Redüktör yağ kaybı, aşınmış zincir ve dişli, arızalı hız kontrol sürücüsü (invertör) ya da enkoder hatası bant tahrikini bozar.",
      },
      {
        title: "Buhar yetersiz / buhar gelmiyor",
        text: "Kireçlenmiş buhar bloğu, tıkalı nozullar, arızalı su pompası ve solenoid valf buhar üretimini düşürür; ekmek kabuk kalitesi bozulur.",
      },
      {
        title: "Baca çekişi ve yanma sorunları",
        text: "Gazlı ve motorinli modellerde brülör ayarı bozulduğunda alev geri teper, is oluşur ve baca gazı değerleri sınırların dışına çıkar.",
      },
      {
        title: "Aşırı enerji tüketimi",
        text: "Çöken cam yünü izolasyon, sızdıran kapılar, kalibrasyonu kaymış termostat ve gereksiz uzun ısınma çevrimi maliyeti yükseltir.",
      },
      {
        title: "Otomasyon / PLC hataları",
        text: "Reçete hafızası kaybı, dokunmatik panel arızası, dijital giriş modülü bozulması ve sürücü alarmları üretimi kilitler.",
      },
    ],
    scope: [
      "Katlı, döner, tünel ve konveyör fırınlarda tam kapsamlı servis",
      "Güç panosu revizyonu, kontaktör ve invertör değişimi",
      "Redüktör, zincir, rulman ve bant tahrik onarımı",
      "Buhar üretim grubu bakımı ve kireç çözme",
      "Brülör ayarı, baca gazı analizi ve yanma verimi optimizasyonu",
      "Termal kamera ile izolasyon ve ısı kaçağı taraması",
      "PLC / otomasyon arızalarında yazılım ve donanım müdahalesi",
      "Fırın taşıma, yeniden montaj ve devreye alma",
    ],
    equipment: [
      "Katlı (deck) sanayi fırını",
      "Döner rotary fırın",
      "Tünel fırın",
      "Konveyör bantlı fırın",
      "Buharlı ekmek fırını",
      "Gıda işleme ve kurutma fırınları",
    ],
    parts: [
      "Yüksek güçlü rezistans grupları",
      "Redüktör, zincir, dişli ve rulman setleri",
      "İnvertör (frekans sürücüsü) ve enkoder",
      "Güç kontaktörü, termik röle, faz koruma rölesi",
      "Buhar bloğu, nozul, su pompası",
      "Brülör grubu ve gaz basınç regülatörü",
      "İzolasyon malzemesi ve kapı fitilleri",
    ],
    faq: [
      {
        q: "Üretim durmadan bakım yapılabilir mi?",
        a: "Evet. Katlı ve tünel fırınlarda bakım programını vardiya aralarına veya haftalık duruş penceresine planlıyoruz. Kritik parçaları önceden temin edip sahaya getirdiğimiz için bakım süresi genellikle 3-6 saat arasında tamamlanır.",
      },
      {
        q: "Fırınımı başka bir tesise taşıyabilir misiniz?",
        a: "Katlı ve döner fırınların sökümü, taşınması, yeni adreste montajı, elektrik-gaz bağlantısı ve devreye alınması hizmet kapsamımızdadır. Taşıma öncesi ölçü ve altyapı kontrolü için keşif yapılır.",
      },
      {
        q: "Enerji tüketimini düşürmek için ne yapılabilir?",
        a: "İzolasyon yenileme, kapı fitili değişimi, brülör yanma ayarı, atık ısı geri kazanımı ve doğru ısınma çevrimi programlaması ile tüketimde %10-20 aralığında düşüş sağlanabilir. Ölçüm öncesi ve sonrası değerler raporlanır.",
      },
      {
        q: "Yedek parça stoğunuz var mı?",
        a: "Sık arızalanan kalemlerde (rezistans, kontaktör, prob, rulman, nozul) saha stoğu tutuyoruz. Özel ölçü parçalarda ise imalat süresi 2-5 iş günüdür; bu süreçte cihazı geçici çalışır durumda tutacak çözümler uygularız.",
      },
    ],
    priceNote:
      "Sanayi tipi fırın tamiri fiyatı; cihaz kapasitesi, arızalı grup ve müdahale süresine göre değişir. Üretim hattı duruşlarında öncelikli acil servis tarifesi uygulanır.",
    related: [
      { slug: "donerli-firin-servisi", note: "Tepsi arabası dönen rotary fırınlarda tahrik, redüktör ve buhar bloğu arızaları" },
      { slug: "konveyorlu-firin-servisi", note: "Bantlı ve tünel tipi fırınlarda bant hızı, redüktör ve zincir arızaları" },
      { slug: "matador-firin-servisi", note: "Katlı taş tabanlı buharlı ekmek fırınlarında kat bazında arıza ve taban taşı" },
    ],
  },
  {
    slug: "pizza-firini-servisi",
    name: "Pizza Fırını Servisi ve Tamiri",
    navName: "Pizza Fırını Servisi",
    icon: "pizza",
    h1: "Pizza Fırını Servisi ve Tamiri",
    metaTitle: "Pizza Fırını Servisi ve Tamiri | Taş Tabanlı & Konveyör",
    metaDescription:
      "Pizza fırını servisi ve tamiri: taş tabanlı, konveyör ve odun ateşli pizza fırınlarında sıcaklık, rezistans, bant ve taş sorunlarına yerinde çözüm.",
    excerpt:
      "Taş tabanlı, konveyör bantlı ve odun ateşli pizza fırınlarında sıcaklık, taban ve bant sorunlarına yerinde müdahale.",
    keywords: [
      "pizza fırını servisi",
      "pizza fırını tamiri",
      "taş fırın servisi",
      "konveyör pizza fırını servisi",
      "pizza fırını arızası",
    ],
    intro: [
      "Pizza fırınının değeri, yüksek sıcaklığı hızlı ve kararlı biçimde tutabilmesindedir. 300-450 °C aralığında çalışan bir fırında 20 °C'lik sapma bile hamurun tabanını çiğ bırakır ya da kenarını yakar. Pizza fırını servisi ve tamiri hizmetimiz, tam olarak bu sıcaklık kararlılığını geri kazandırmaya odaklanır.",
      "Taş tabanlı elektrikli fırınlarda üst ve alt rezistans gruplarının bağımsız ölçülmesi, taş yüzeyin düzlüğü ve tabandaki ısı dağılımı; konveyör bantlı fırınlarda bant hızı, hava yönlendirme kanalları (finger) ve fan basıncı; odun/gaz ateşli kubbe fırınlarda ise kubbe izolasyonu, baca çekişi ve refrakter durumu kontrol edilir.",
      "Pizzacı işletmelerinin en sık yaşadığı sorun, fırının sabah ilk saatlerde iyi çalışıp yoğun saatlerde performans kaybetmesidir. Bunun nedeni genellikle kapının sık açılmasıyla düşen tabanın toparlanamaması, zayıflamış alt rezistans veya ısı kapasitesini yitirmiş, çatlamış pişirme taşıdır. Her üçünü de yerinde ölçer ve çözeriz.",
    ],
    symptoms: [
      {
        title: "Taban çiğ kalıyor, hamur alttan pişmiyor",
        text: "Zayıflamış alt rezistans, çatlamış veya inceltilmiş pişirme taşı ya da alt bölge probunun hatalı okuması ana nedenlerdir.",
      },
      {
        title: "Sıcaklık 300 °C üzerine çıkmıyor",
        text: "Tek fazın kopması, rezistans grubunun kısmen devre dışı kalması veya emniyet termostatının erken kesmesi maksimum sıcaklığı sınırlar.",
      },
      {
        title: "Konveyör bant hızı düzensiz",
        text: "Aşınmış bant, gevşemiş zincir, arızalı tahrik motoru veya hız kontrol kartı pişirme süresini değişken hale getirir.",
      },
      {
        title: "Fırın çok yavaş toparlıyor",
        text: "Yoğun servis sırasında kapı açılışları arasında sıcaklığın geri gelmemesi, ısı kapasitesi düşmüş taş ve zayıflayan rezistansa işaret eder.",
      },
      {
        title: "Bant fırında hava üflemesi zayıf",
        text: "Kirlenmiş finger kanalları, deforme fan kanadı ve devri düşen fan motoru pizzanın üst yüzeyinde pişme sorunu yaratır.",
      },
      {
        title: "Odun / gaz fırında duman ve is",
        text: "Baca çekişinin zayıflaması, kubbe izolasyonunun nem çekmesi ve refrakter çatlakları yanma kalitesini bozar.",
      },
    ],
    scope: [
      "Taş tabanlı elektrikli pizza fırını onarımı",
      "Konveyör bantlı fırında bant, motor ve hava kanalı bakımı",
      "Odun ve gaz ateşli kubbe fırınlarda refrakter ve baca işleri",
      "Üst / alt rezistans ölçümü ve değişimi",
      "Sıcaklık probu ve kontrol kartı kalibrasyonu",
      "Pişirme taşı kontrolü, değişimi ve montajı",
      "Kapı contası ve menteşe ayarı",
      "Yoğun servis öncesi performans testi ve ayar",
    ],
    equipment: [
      "Taş tabanlı elektrikli pizza fırını",
      "Konveyör bantlı pizza fırını",
      "Odun ateşli kubbe fırın",
      "Gaz ateşli döner tabanlı pizza fırını",
      "Çift katlı pizza ve pide fırını",
    ],
    parts: [
      "Üst ve alt rezistans grupları",
      "Yüksek sıcaklık probu ve termostat",
      "Şamot / kordiyerit pişirme taşı",
      "Konveyör bant, zincir ve tahrik motoru",
      "Hız kontrol kartı ve fan motoru",
      "Kapı contası, menteşe ve seramik cam",
      "Refrakter tuğla ve izolasyon malzemesi",
    ],
    faq: [
      {
        q: "Pizza fırını kaç dereceye kadar çıkmalı?",
        a: "Napoli tipi hamurda 400-450 °C, klasik tabanlı pizzada 300-350 °C ideal aralıktır. Fırınınız katalog değerinin 40-50 °C altında kalıyorsa rezistans grubu, faz beslemesi ve prob kalibrasyonu mutlaka ölçülmelidir.",
      },
      {
        q: "Pişirme taşı ne zaman değişir?",
        a: "Çatlak oluşmuşsa, yüzeyi 1 cm'den fazla incelmişse, kalıcı yağ ve karbon tabakası oturmuşsa ya da taban ısısı geç toparlıyorsa değişim zamanı gelmiştir. Yoğun çalışan işletmelerde ortalama ömür 2-4 yıldır.",
      },
      {
        q: "Konveyör fırında pişirme süresi nasıl ayarlanır?",
        a: "Bant hızı, üst-alt hava basıncı ve set sıcaklığı birlikte ayarlanır. Servis sırasında ürününüzle deneme pişirmesi yapılarak optimum değerler bulunur ve panelde reçete olarak kaydedilir.",
      },
      {
        q: "Odun fırınımı gazlıya çevirebilir misiniz?",
        a: "Uygun kubbe yapısına sahip fırınlarda gaz brülörü dönüşümü yapılabilir. Öncesinde kubbe dayanımı, baca kesiti ve gaz hattı uygunluğu için keşif yapılır; işlem gaz yetki belgeli teknisyen tarafından uygulanır.",
      },
    ],
    priceNote:
      "Pizza fırını tamiri fiyatı fırın tipine (taş tabanlı, konveyör, odun ateşli) ve arızalı gruba göre değişir. Taş değişimi ile rezistans onarımı çoğunlukla aynı serviste birlikte yapılabilir.",
    related: [
      { slug: "pizza-firin-tasi-degisimi", note: "Sorun cihazda değil taştaysa: ölçüye özel kesim, montaj ve kürleme" },
      { slug: "konveyorlu-firin-servisi", note: "Konveyörlü (bantlı) pizza fırınlarında bant ve tahrik arızaları" },
      { slug: "pide-lahmacun-firin-servisi", note: "Pide ve lahmacun fırınları için daha yüksek taban ısısına göre servis" },
    ],
  },
  {
    slug: "konveksiyonel-firin-servisi",
    name: "Konveksiyonel Fırın Servisi ve Tamiri",
    navName: "Konveksiyonel Fırın Servisi",
    icon: "fan",
    h1: "Konveksiyonel Fırın Servisi ve Tamiri",
    metaTitle: "Konveksiyonel Fırın Servisi ve Tamiri | Fan ve Rezistans",
    metaDescription:
      "Konveksiyonel fırın servisi ve tamiri: fan motoru, rezistans, hava akışı, kontrol kartı ve sıcaklık kalibrasyonu sorunlarında yerinde teknik servis.",
    excerpt:
      "Konveksiyonel fırınlarda fan motoru, rezistans, hava akışı ve elektronik kart arızalarına hava akışı odaklı uzman müdahale.",
    keywords: [
      "konveksiyonel fırın servisi",
      "konveksiyonel fırın tamiri",
      "konveksiyonel fırın arızası",
      "konveksiyonel fırın fan arızası",
      "konveksiyonel fırın rezistans değişimi",
    ],
    intro: [
      "Konveksiyonel fırın, ısıyı fanla zorlamalı biçimde dolaştırarak tüm tepsilerde eşit pişirme sağlar. Bu avantaj aynı zamanda hassasiyet demektir: fan devrinde düşüş, kanat dengesizliği veya hava yönlendirme sacındaki deformasyon, doğrudan pişirme kalitesine yansır. Konveksiyonel fırın servisi ve tamiri işinde teşhis, bu yüzden sıcaklık kadar hava akışı üzerine kuruludur.",
      "Arızanın kaynağı çoğu zaman göründüğü yerde değildir. Tepsiler arasında pişme farkı oluştuğunda ilk akla rezistans gelir; oysa aynı belirtiyi düşmüş fan devri, deforme olmuş fan kanadı, eğrilmiş hava yönlendirme sacı veya kirlenmiş emiş ızgarası da üretir. Bu yüzden teşhiste rezistans direnci kadar fan devri, hava debisi ve raf seviyeleri arasındaki sıcaklık farkı da ölçülür.",
      "Servis sonrasında fırın boş çevrimde ve dolu tepsiyle ayrı ayrı test edilir. Sıcaklık homojenliği farklı raf seviyelerinde ölçülür, sapma 5 °C'nin üzerindeyse hava yönlendirme ve prob konumu yeniden ayarlanır. Cihazınız buhar da üretiyorsa (kombi model), buhar tarafındaki kireç ve su hattı sorunları ayrı bir uzmanlık alanıdır; onları kombi fırın servisi sayfamızda ayrıntılı anlatıyoruz.",
    ],
    symptoms: [
      {
        title: "Fan çalışmıyor veya ses yapıyor",
        text: "Sarımı yanmış fan motoru, bozulmuş rulman, kondansatör arızası veya dengesi kaçmış fan kanadı gürültü ve titreşim yapar.",
      },
      {
        title: "Tepsiler arasında pişme farkı",
        text: "Zayıflamış halka rezistans, düşen fan devri, eğrilmiş hava yönlendirme sacı ve hatalı prob konumu homojenliği bozar.",
      },
      {
        title: "Buhar üretmiyor / az buhar",
        text: "Kireçlenmiş boyler, tıkalı püskürtme nozulu, arızalı su pompası veya solenoid valf ve düşük şebeke su basıncı buhar üretimini keser.",
      },
      {
        title: "Fırın içi su birikiyor",
        text: "Tıkalı tahliye hattı, arızalı buhar yoğuşturucu ve conta sızdırmaları hazne tabanında su birikmesine yol açar.",
      },
      {
        title: "Kontrol paneli tepki vermiyor",
        text: "Isıya maruz kalan kart bileşenleri, aşınmış tuş takımı filmi ve besleme trafosu arızası panelin kilitlenmesine neden olur.",
      },
      {
        title: "Otomatik yıkama programı tamamlanmıyor",
        text: "Deterjan pompası, seviye sensörü, tahliye pompası veya program kartı hatası yıkama çevrimini yarıda keser.",
      },
    ],
    scope: [
      "Fan motoru sarımı, rulman ve kanat değişimi",
      "Halka ve grup rezistans ölçümü / değişimi",
      "Buhar üretim grubunda kireç çözme ve nozul temizliği",
      "Su pompası, solenoid valf ve tahliye hattı bakımı",
      "Elektronik kontrol kartı onarımı ve yazılım güncelleme",
      "Sıcaklık kalibrasyonu ve raf bazlı homojenlik testi",
      "Kapı contası, cam ve menteşe yenileme",
      "Su yumuşatma sistemi kurulumu ve reçine değişimi",
    ],
    equipment: [
      "Elektrikli konveksiyonel fırın",
      "Gazlı konveksiyonel fırın",
      "Kombi (buharlı) fırın — boylerli",
      "Kombi fırın — direkt püskürtmeli",
      "Pastane tipi konveksiyonel fırın",
      "Kompakt tezgâh üstü konveksiyon fırınlar",
    ],
    parts: [
      "Fan motoru, kondansatör, fan kanadı",
      "Halka rezistans ve buhar rezistansı",
      "Sıcaklık probu (NTC / PT100)",
      "Su pompası ve solenoid valf",
      "Buhar nozulu ve boyler grubu",
      "Kontrol kartı, güç kartı, tuş takımı",
      "Kapı contası, iç cam, menteşe seti",
      "Su yumuşatma filtresi ve reçine",
    ],
    faq: [
      {
        q: "Kombi fırında kireç sorunu nasıl kalıcı olarak çözülür?",
        a: "Kireç çözme işlemi tek başına geçici bir çözümdür. Kalıcı sonuç için cihaz girişine su yumuşatma sistemi kurulmalı, reçine periyodik olarak yenilenmeli ve su sertliği düzenli ölçülmelidir. Kurulum ve bakım programını servisle birlikte planlıyoruz.",
      },
      {
        q: "Fan motoru tamir mi edilir, değiştirilir mi?",
        a: "Rulman ve kondansatör kaynaklı arızalarda onarım hem ekonomik hem kalıcıdır. Sarımı yanmış motorlarda ise yeniden sarım seçeneği sunulur; ancak yüksek devirli ve ısıya maruz motorlarda yeni motor uzun vadede daha güvenlidir. Her iki seçeneğin fiyatını birlikte sunarız.",
      },
      {
        q: "Sıcaklık kalibrasyonu nasıl yapılır?",
        a: "Kalibre referans termometre ile farklı raf seviyelerinde ölçüm alınır, cihazın gösterge değeriyle karşılaştırılır ve kontrol kartındaki offset parametresi düzeltilir. Ölçüm sonuçları servis formuna yazılır.",
      },
      {
        q: "Fırının pişirme programları silindi, geri yüklenir mi?",
        a: "Çoğu markada reçete hafızası kontrol kartında saklanır ve yedekten geri yüklenebilir. Yedek yoksa ürünlerinizle birlikte deneme pişirmesi yapıp programları yeniden oluşturuyor ve dışa aktarılabilir şekilde kaydediyoruz.",
      },
    ],
    priceNote:
      "Konveksiyonel fırın tamiri fiyatı; fan, rezistans, buhar grubu veya elektronik kart gibi arızalı gruba göre değişir. Kireç kaynaklı arızalarda su yumuşatma çözümü ayrıca fiyatlandırılır.",
    related: [
      { slug: "kombi-firin-servisi", note: "Cihazınız buhar da üretiyorsa: boyler, kireç, solenoid valf ve yıkama arızaları" },
    ],
  },
  {
    slug: "kombi-firin-servisi",
    name: "Kombi Fırın Servisi ve Tamiri",
    navName: "Kombi Fırın Servisi",
    h1: "Kombi (Buharlı) Fırın Servisi ve Tamiri",
    icon: "steam",
    metaTitle: "Kombi Fırın Servisi ve Tamiri | Buhar, Kireç, Kart",
    metaDescription:
      "Kombi fırın servisi ve tamiri: buhar gelmemesi, kireç tıkanması, boyler, solenoid valf ve kontrol kartı arızalarında yerinde teknik servis ve kireç çözme.",
    excerpt:
      "Buharlı (kombi) fırınlarda buhar üretimi, kireç, boyler, su hattı ve elektronik kart arızalarına yerinde müdahale ve kalıcı su çözümü.",
    keywords: [
      "kombi fırın servisi",
      "kombi fırın tamiri",
      "buharlı fırın servisi",
      "combi steamer servisi",
      "kombi fırın kireç çözme",
      "kombi fırın buhar gelmiyor",
    ],
    intro: [
      "Kombi fırın, konveksiyon ve buharı tek gövdede birleştiren, nem oranını yüzde bir hassasiyetle yönetebilen en yetenekli pişirme ekipmanıdır. Bu yetenek aynı zamanda en kırılgan noktasıdır: cihazın yarısı fırın, yarısı bir su tesisatıdır. Kombi fırın servisi ve tamiri işinde arızaların büyük bölümü rezistansta veya fanda değil, su tarafında başlar.",
      "Sahadan gelen 'buhar gelmiyor', 'yıkama programı tamamlanmıyor', 'ekranda su hatası var' çağrılarının çoğunda bozulmuş bir parça bulmayız; kireç buluruz. Boyler taşına oturmuş kireç ısı transferini keser, nozulları tıkar, seviye elektrotunu yanlış okutur ve sonunda kartı hataya düşürür. Bu yüzden her müdahale su sertliği ölçümüyle başlar: sertlik bilinmeden yapılan kireç çözme, aynı arızayı birkaç ay sonra geri getirir.",
      "Onarım sonrasında cihaz üç ayrı çevrimde test edilir: kuru konveksiyon, tam buhar ve kombine mod. Set nemine ulaşma süresi, buhar sürekliliği, çekirdek sıcaklık probu tepkisi ve yıkama programının tam tamamlanması ölçülür. Su yumuşatma sistemi yoksa veya reçinesi doymuşsa, bunu raporda yazılı olarak bildiririz — çözülmediği sürece arıza tekrar eder.",
    ],
    symptoms: [
      {
        title: "Buhar hiç gelmiyor veya çok az geliyor",
        text: "Kireçlenmiş boyler, tıkalı buhar nozulları, arızalı solenoid valf, düşük şebeke su basıncı veya kapalı kalmış küresel vana en sık nedenlerdir.",
      },
      {
        title: "Ekranda su / seviye hatası çıkıyor",
        text: "Seviye elektrotunun üzerini kaplayan kireç tabakası suyu görmez hale getirir; cihaz hazne dolu olduğu halde su yok hatası verir.",
      },
      {
        title: "Yıkama programı tamamlanmıyor",
        text: "Yıkama pompası, deterjan dozaj hortumu, drenaj tıkanıklığı ve tahliye valfi arızaları programın ortasında durmasına yol açar.",
      },
      {
        title: "Pişirme uzuyor, nem tutmuyor",
        text: "Sertleşmiş kapı contası ve ayarı kaçmış menteşe buharın kaçmasına neden olur; cihaz kaybettiği nemi telafi etmek için sürekli üretim yapar.",
      },
      {
        title: "Cihazın altında su birikiyor",
        text: "Drenaj hattı tıkanıklığı, çatlamış tahliye hortumu, gevşemiş kelepçe veya buhar jeneratörü contası sızıntısı araştırılır.",
      },
      {
        title: "Çekirdek sıcaklık probu yanlış okuyor",
        text: "Uç kısmı yıpranmış veya kablosu kopmaya başlamış çekirdek probu, ürün piştiği halde cihazın programı sonlandırmamasına neden olur.",
      },
    ],
    scope: [
      "Su sertliği ölçümü ve kireç risk raporu",
      "Boyler ve buhar bloğu kireç çözme, nozul açma",
      "Seviye elektrotu temizliği ve kalibrasyonu",
      "Solenoid valf, su pompası ve basınç düşürücü değişimi",
      "Yıkama pompası, dozaj hattı ve drenaj açma",
      "Kapı contası, menteşe ve kilit ayarı",
      "Çekirdek probu ve hazne probu değişimi",
      "Elektronik kontrol kartı onarımı ve yazılım güncellemesi",
      "Su yumuşatma sistemi kurulumu ve reçine yenileme",
    ],
    equipment: [
      "Boyler (jeneratör) tipli kombi fırınlar",
      "Direkt püskürtmeli (injection) kombi fırınlar",
      "Otomatik yıkama sistemli modeller",
      "Tezgâh üstü kompakt kombi fırınlar",
      "10, 20 ve 40 GN kapasiteli dikey modeller",
      "Elektrikli ve gazlı kombi fırınlar",
      "Dokunmatik panelli akıllı pişirme programlı modeller",
    ],
    parts: [
      "Buhar boyleri ve rezistans grubu",
      "Solenoid (su giriş) valfi",
      "Su pompası ve basınç şalteri",
      "Seviye elektrotu ve emniyet termostatı",
      "Buhar nozulu ve püskürtme borusu",
      "Yıkama pompası ve deterjan dozaj hortumu",
      "Çekirdek sıcaklık probu ve hazne probu",
      "Kapı contası, menteşe ve kilit mekanizması",
      "Elektronik kontrol kartı ve dokunmatik panel",
    ],
    faq: [
      {
        q: "Kombi fırında buhar gelmiyorsa ilk ne kontrol edilmeli?",
        a: "Sırayla: cihaza giden su vanasının açık olduğu, şebeke basıncının yeterli olduğu ve giriş filtresinin tıkalı olmadığı kontrol edilir. Bu üçü sağlamsa sorun büyük olasılıkla boyler kirecinde, buhar nozullarında veya solenoid valftedir ve yerinde müdahale gerekir. Filtreyi kontrol etmek dışında cihazın kapağını sökmeyin; kombi fırınlarda basınçlı buhar ve 380 V birlikte bulunur.",
      },
      {
        q: "Kireç çözme ne sıklıkta yapılmalı?",
        a: "Sıklığı su sertliği ve günlük buhar kullanımı belirler. Sert su bölgesinde yoğun buhar kullanan bir işletmede 3 ayda bir, yumuşatma sistemi olan ve orta yoğunlukta çalışan bir mutfakta 9-12 ayda bir yeterlidir. Doğru periyodu ilk ziyarette su sertliğini ölçerek belirler ve yazılı olarak bildiririz.",
      },
      {
        q: "Su yumuşatma sistemi kurmak zorunlu mu?",
        a: "Zorunlu değil ama sert su bölgesinde çalışan bir kombi fırında yatırımın kendini genellikle iki yıl içinde amorti ettiğini görüyoruz. Yumuşatmasız cihazda tekrarlayan kireç çözme bedeli, boyler ve rezistans ömrünün kısalması ve üretim duruşları toplamda daha pahalıya gelir. Cihaz üreticilerinin bir bölümü de garantiyi su kalitesi şartına bağlar.",
      },
      {
        q: "Kombi fırın ile konveksiyonel fırın arasındaki fark nedir?",
        a: "Konveksiyonel fırın yalnızca fanla dolaştırılan kuru sıcak hava kullanır. Kombi fırın buna kontrollü buhar ekler ve nem oranını programlayabilir; et, sebze, ekmek ve sous-vide gibi farklı ürünleri aynı cihazda pişirebilir. Cihazınızda buhar fonksiyonu yoksa konveksiyonel fırın servisi sayfamız doğru başlıktır.",
      },
      {
        q: "Yıkama programı yarıda kalıyor, cihaz bozuk mu?",
        a: "Çoğu zaman hayır. En sık neden drenaj tıkanıklığı veya biten deterjan/durulama kimyasalıdır. Kimyasal doluysa ve tahliye açıksa yıkama pompası, dozaj hortumu ve tahliye valfi kontrol edilir. Yıkama programı tamamlanmadan cihazı pişirmede kullanmak, hazne içinde kalan kimyasal nedeniyle sakıncalıdır.",
      },
      {
        q: "Kireç çözme sırasında cihaz ne kadar süre kapalı kalır?",
        a: "Standart bir kireç çözme, çözücünün dolaşımı ve bekleme süresiyle birlikte 2-4 saat sürer. Ağır kireçlenmiş cihazlarda mekanik nozul açma ve ikinci tur uygulama gerekebilir; bu durumda süre 6 saati bulabilir. İşletmeyi durdurmamak için uygulamayı servis dışı saatlere veya kapalı güne planlıyoruz.",
      },
    ],
    priceNote:
      "Kombi fırın tamiri fiyatı; arızanın su tarafında mı elektronik tarafta mı olduğuna, kireçlenme seviyesine ve değişecek parçaya göre belirlenir. Kireç çözme ile kart onarımı çok farklı kalemlerdir; kesin tutar yerinde teşhis sonrası netleşir.",
    related: [
      { slug: "konveksiyonel-firin-servisi", note: "Buhar fonksiyonu olmayan, yalnızca fanlı modeller için" },
    ],
  },
  {
    slug: "konveyorlu-firin-servisi",
    name: "Konveyörlü (Bantlı) Fırın Servisi ve Tamiri",
    navName: "Konveyörlü Fırın Servisi",
    h1: "Konveyörlü (Bantlı) Fırın Servisi ve Tamiri",
    icon: "conveyor",
    metaTitle: "Konveyörlü Fırın Servisi ve Tamiri | Bant, Redüktör",
    metaDescription:
      "Konveyörlü bantlı fırın servisi ve tamiri: bant durması, redüktör, zincir, hız kontrol ve ısı dengesizliği arızalarında yerinde teknik servis ve bakım.",
    excerpt:
      "Bantlı pizza, ekmek ve unlu mamul fırınlarında bant tahriki, redüktör, hız kontrolü ve bölgesel ısı dengesizliği sorunlarına uzman müdahale.",
    keywords: [
      "konveyörlü fırın servisi",
      "bantlı fırın tamiri",
      "konveyör fırın servisi",
      "bantlı pizza fırını tamiri",
      "konveyörlü fırın bant değişimi",
    ],
    intro: [
      "Konveyörlü fırın, ürünü sabit hızda ısı bölgelerinin içinden geçirerek pişiren bir üretim hattıdır. Operatör bağımlılığını ortadan kaldırdığı için zincir işletmelerde ve yüksek hacimli üretimde tercih edilir. Buna karşılık mekanik bir sistemdir: bant, redüktör, zincir, rulman ve hız kontrol ünitesi birlikte çalışır ve bunlardan biri bozulduğunda cihaz pişirmeyi tamamen durdurur.",
      "Konveyörlü fırın servisi ve tamiri işinde teşhis iki ayrı eksende ilerler. Birincisi tahrik tarafıdır: bandın hızı ölçülür, gerçek geçiş süresi panelde yazan değerle karşılaştırılır, redüktör yağ seviyesi ve sesi, zincir gerginliği ve rulman boşluğu kontrol edilir. İkincisi ısı tarafıdır: bant boyunca farklı noktalardan sıcaklık ölçülerek üfleme kanallarının dengeli çalışıp çalışmadığı çıkarılır.",
      "Bu iki eksen birbirini gizler. Yavaşlamış bir bant, ürünün fazla pişmesine yol açar ve işletme bunu 'fırın çok ısıtıyor' diye bildirir; sıcaklık düşürülür, bu kez taban çiğ kalır. Bu nedenle her serviste önce bant hızı kronometreyle doğrulanır, sonra sıcaklık ayarına dokunulur.",
    ],
    symptoms: [
      {
        title: "Bant duruyor veya kesik kesik ilerliyor",
        text: "Redüktör arızası, kopmuş veya gevşemiş zincir, yanmış tahrik motoru, arızalı hız kontrol ünitesi (invertör) ve sıkışmış rulman tipik nedenlerdir.",
      },
      {
        title: "Bant hızı panelde yazandan farklı",
        text: "Kalibrasyonu kaymış hız kontrol ünitesi, gevşemiş zincir veya aşınmış dişli, gerçek geçiş süresini ayarlanan değerden uzaklaştırır.",
      },
      {
        title: "Bant bir tarafa kayıyor, sürtüyor",
        text: "Gerginlik ayarının iki tarafta eşit olmaması, eğrilmiş şaft veya deforme olmuş bant örgüsü kaymaya ve gövdeye sürtmeye yol açar.",
      },
      {
        title: "Ürün girişte ve çıkışta farklı pişiyor",
        text: "Tıkalı üfleme kanalları, kirlenmiş hava plakaları ve tek taraflı çalışan rezistans grubu bant boyunca ısı dengesizliği yaratır.",
      },
      {
        title: "Fan gürültüsü arttı, hava üflemiyor",
        text: "Yağ ve un tozu ile kaplanmış fan kanadı, yıpranmış rulman ve gevşemiş kayış hem sesi hem de üfleme verimini bozar.",
      },
      {
        title: "Bant örgüsü açıldı, telleri kırıldı",
        text: "Ömrünü tamamlamış paslanmaz bantlarda örgü açılması ürünün takılmasına ve tehlikeli sıkışmalara neden olur; bant değişimi gerekir.",
      },
    ],
    scope: [
      "Bant hızı ölçümü ve gerçek geçiş süresi doğrulaması",
      "Redüktör bakımı, yağ değişimi ve rulman yenileme",
      "Zincir gerginlik ayarı, dişli ve şaft değişimi",
      "Tahrik motoru ve hız kontrol ünitesi (invertör) onarımı",
      "Paslanmaz konveyör bandı onarımı ve komple değişimi",
      "Üfleme kanalı ve hava plakası temizliği",
      "Bant boyunca çok noktalı sıcaklık haritalama",
      "Rezistans grubu ve gaz brülörü kontrolü",
      "Periyodik bakım sözleşmesi ve yedek bant tedariki",
    ],
    equipment: [
      "Konveyörlü pizza fırınları",
      "Bantlı ekmek ve unlu mamul fırınları",
      "Tünel tipi üretim fırınları",
      "Çift katlı (üst üste) konveyörlü modeller",
      "Elektrikli ve gazlı bantlı fırınlar",
      "Bantlı tost ve sandviç fırınları",
      "Gıda işleme hattı kurutma fırınları",
    ],
    parts: [
      "Paslanmaz konveyör bandı (örgü tip)",
      "Redüktör ve tahrik motoru",
      "Zincir, dişli, şaft ve rulman seti",
      "Hız kontrol ünitesi (invertör) ve potansiyometre",
      "Fan motoru, kayış ve fan kanadı",
      "Rezistans grubu ve güç kontaktörü",
      "Sıcaklık probu ve emniyet termostatı",
      "Üfleme kanalı plakaları ve hava yönlendirici",
      "Giriş/çıkış tel ızgaraları ve koruma sacları",
    ],
    faq: [
      {
        q: "Konveyör bandı tamir mi edilir, değiştirilir mi?",
        a: "Bandın birkaç noktasında lokal açılma varsa örgü onarımı yapılır ve bant kullanılmaya devam edilir. Ancak açılma birden fazla bölgede tekrarlıyorsa, teller kırılganlaşmışsa veya bant kalıcı biçimde eğrildiyse onarım geçici olur; bu durumda komple bant değişimi hem daha güvenli hem uzun vadede daha ekonomiktir.",
      },
      {
        q: "Bant hızını kendim ayarlayabilir miyim?",
        a: "Panelden hız ayarı yapmak operatör işidir, sorun değil. Ancak panelde yazan süre ile gerçek geçiş süresi zamanla ayrışır. Ayarı değiştirmeden önce bir ürünü kronometreyle takip edip gerçek süreyi ölçmenizi öneririz; sapma varsa bu bir ayar değil kalibrasyon veya mekanik aşınma sorunudur.",
      },
      {
        q: "Girişte ve çıkışta pişme farkı neden olur?",
        a: "Genellikle üfleme kanallarının un tozu ve yağla tıkanmasından kaynaklanır; hava tek bölgeye yığılır. Kanal temizliği çoğu zaman sorunu çözer. Temizlik sonrası fark sürüyorsa rezistans gruplarının veya brülör bölgelerinin tek tek çalışıp çalışmadığı ölçülür.",
      },
      {
        q: "Konveyörlü fırın bakımı ne sıklıkta yapılmalı?",
        a: "Günde 10 saatin üzerinde çalışan bantlı fırınlarda 3 ayda bir bakım öneriyoruz. Bakım kapsamı; bant hızı doğrulaması, redüktör yağ kontrolü, zincir gerginliği, rulman gözlemi, fan ve üfleme kanalı temizliği ile çok noktalı sıcaklık ölçümünü içerir. Mekanik aşınmanın erken yakalanması, bant kopmasıyla gelen ani duruşları büyük ölçüde önler.",
      },
      {
        q: "Bant dururken fırın çalışmaya devam ediyor, tehlikeli mi?",
        a: "Evet, riskli bir durumdur. Bant durduğunda içerideki ürün sabit ısıda kalır ve kısa sürede yanmaya başlar. Bandın durduğunu fark ettiğinizde önce ısıtmayı kapatın, fanı bir süre çalışır bırakın ve içeriyi boşaltın. Bazı modellerde bant duruşunda ısıtmayı kesen emniyet devresi vardır; serviste bu devrenin çalıştığını da kontrol ediyoruz.",
      },
      {
        q: "Yedek bant ne kadar sürede temin edilir?",
        a: "Yaygın ölçülerde paslanmaz konveyör bantlarını stokta tutuyoruz; aynı gün veya ertesi gün montaj yapılabilir. Özel genişlik ve örgü tipi gerektiren modellerde bant ölçüye göre imal edilir, süre ortalama 3-7 iş günüdür. Bu sürede cihazı kısıtlı kapasiteyle çalışır durumda tutacak geçici çözümler uygulanır.",
      },
    ],
    priceNote:
      "Konveyörlü fırın tamiri fiyatı; arızanın tahrik tarafında mı ısı tarafında mı olduğuna göre değişir. Zincir ayarı ile redüktör veya komple bant değişimi çok farklı kalemlerdir; kesin tutar yerinde ölçüm sonrası bildirilir.",
    related: [
      { slug: "pizza-firini-servisi", note: "Taş tabanlı pizza fırınları için" },
      { slug: "sanayi-tipi-firin-servisi", note: "Tünel ve yüksek kapasiteli üretim hatlarının tamamı için" },
    ],
  },
  {
    slug: "donerli-firin-servisi",
    name: "Dönerli Fırın Servisi ve Tamiri",
    navName: "Dönerli Fırın Servisi",
    h1: "Dönerli (Rotary) Fırın Servisi ve Tamiri",
    icon: "rotary",
    metaTitle: "Dönerli Fırın Servisi ve Tamiri | Rotary Fırın",
    metaDescription:
      "Dönerli rotary fırın servisi ve tamiri: araba dönmemesi, buhar sorunu, brülör ayarı, fan ve redüktör arızalarında yerinde teknik servis ve periyodik bakım.",
    excerpt:
      "Dönerli (rotary) ekmek ve pastane fırınlarında araba tahriki, buhar grubu, brülör ve fan arızalarına ağır hizmet tipi müdahale.",
    keywords: [
      "dönerli fırın servisi",
      "döner fırın tamiri",
      "rotary fırın servisi",
      "dönerli ekmek fırını tamiri",
      "dönerli fırın buhar arızası",
    ],
    intro: [
      "Dönerli fırın, tepsi arabasının pişirme boyunca kendi ekseninde dönmesi sayesinde her tepsiye eşit ısı ulaştırır. Ekmek, simit, poğaça ve pastane üretiminde standart hâline gelmesinin nedeni budur. Aynı mekanizma cihazın en kritik parçasıdır: tahrik motoru, redüktör, tabla yatağı veya asma aparatı arızalandığında pişirme kalitesi anında bozulur ve üretim durur.",
      "Dönerli fırın servisi ve tamiri işinde en sık gelen üç şikâyet birbirine bağlıdır: araba dönmüyor, buhar yetersiz, ürün bir tarafta fazla pişiyor. Araba dönmediğinde hava akışının doğal dengesi kaybolur ve tek taraflı pişirme başlar; işletme bunu ısı problemi sanar. Bu yüzden teşhis daima dönüş mekanizmasının kontrolüyle açılır: motor akımı, redüktör sesi, yatak boşluğu ve tabla dengesi ölçülür.",
      "İkinci eksen buhar grubudur. Dönerli fırınlarda buhar, kabuk parlaklığı ve hacim için belirleyicidir. Buhar bloğundaki dökme demir kütlelerin kireçlenmesi ve nozul tıkanması, operatörü daha uzun buhar vermeye iter; bu hem enerji israfı hem de kabuk kalitesinde bozulma demektir. Serviste blok temizlenir, nozullar açılır ve su hattı değerlendirilir.",
    ],
    symptoms: [
      {
        title: "Araba dönmüyor veya zorlanarak dönüyor",
        text: "Tahrik motoru, redüktör, kayış veya zincir kopması, tabla yatağı sıkışması ve asma aparatının kancasındaki aşınma en sık nedenlerdir.",
      },
      {
        title: "Buhar yetersiz, kabuk mat çıkıyor",
        text: "Kireçlenmiş buhar bloğu, tıkalı nozullar, arızalı solenoid valf ve düşük su basıncı buhar üretimini doğrudan düşürür.",
      },
      {
        title: "Ürün bir tarafta fazla pişiyor",
        text: "Duran veya yavaşlamış araba, dengesiz yerleşmiş tabla, deforme fan kanadı ve tıkanmış hava kanalları homojenliği bozar.",
      },
      {
        title: "Gaz brülörü tutmuyor veya sık sık kilitleniyor",
        text: "Kirlenmiş ateşleme elektrodu, oksitlenmiş iyonizasyon çubuğu, gaz valfi bobini ve zayıf baca çekişi yanma emniyetini devreye sokar.",
      },
      {
        title: "Fırın ısıyı tutamıyor, ısınma süresi uzadı",
        text: "Çökmüş gövde izolasyonu, sertleşmiş kapı fitili ve ayarı bozulmuş brülör hava-yakıt oranı ısınma süresini belirgin şekilde uzatır.",
      },
      {
        title: "Fan sesi arttı, titreşim var",
        text: "Yıpranmış fan rulmanı, un tozu ile dengesi bozulmuş kanat ve gevşemiş kayış, hem gürültü hem de hava debisi kaybı üretir.",
      },
    ],
    scope: [
      "Araba tahrik motoru, redüktör ve kayış-zincir onarımı",
      "Tabla yatağı, asma aparatı ve kanca değişimi",
      "Buhar bloğu kireç çözme ve nozul açma",
      "Gaz brülörü ayarı, ateşleme ve iyonizasyon kontrolü",
      "Baca çekişi ve yanma emniyeti doğrulaması",
      "Fan motoru, rulman ve kanat balanslama",
      "Kapı fitili, menteşe ve gövde izolasyon yenileme",
      "Sıcaklık ve buhar zamanlayıcı kalibrasyonu",
      "Periyodik bakım sözleşmesi ve yedek parça tedariki",
    ],
    equipment: [
      "Tek arabalı dönerli (rotary) fırınlar",
      "Çift arabalı yüksek kapasiteli modeller",
      "Asma tip (kancalı) dönerli fırınlar",
      "Tabla tip (döner platformlu) fırınlar",
      "Gazlı, motorinli ve elektrikli modeller",
      "Ekmek, simit ve poğaça üretim fırınları",
      "Pastane tipi dönerli fırınlar",
    ],
    parts: [
      "Araba tahrik motoru ve redüktör",
      "Tabla yatağı, rulman ve asma kancası",
      "Tahrik kayışı ve zincir seti",
      "Buhar bloğu dökme kütleleri ve nozullar",
      "Solenoid valf ve su pompası",
      "Gaz valfi, ateşleme elektrodu, iyonizasyon çubuğu",
      "Fan motoru, rulman ve fan kanadı",
      "Kapı fitili, menteşe ve cam",
      "Sıcaklık probu, emniyet termostatı ve kontrol kartı",
    ],
    faq: [
      {
        q: "Araba dönmüyorsa fırını çalıştırmaya devam edebilir miyim?",
        a: "Etmemenizi öneririz. Dönerli fırının ısı dengesi arabanın dönmesine göre tasarlanmıştır; sabit arabada ürünün bir tarafı yanarken diğer tarafı çiğ kalır ve fire artar. Ayrıca dönmeyi engelleyen mekanik sıkışma zorlandığında redüktör veya motor sarımı zarar görebilir; küçük bir arıza büyük bir parça değişimine dönüşür.",
      },
      {
        q: "Buhar veriyorum ama kabuk parlamıyor, sebebi ne?",
        a: "Neredeyse her zaman buhar bloğunun kireçlenmesi ve nozulların tıkanmasıdır. Blok ısı depolayamadığında verilen su buhara dönüşmeden hazneye damlar; nem oluşur ama kabuk için gereken ani buhar şoku olmaz. Blok temizliği ve nozul açma işlemi sonrası kabuk kalitesi genellikle ilk fırınlamada geri gelir.",
      },
      {
        q: "Dönerli fırın ile katlı fırın arasında servis farkı var mı?",
        a: "Evet, belirgin bir fark var. Katlı fırınlarda ağırlık ısı ve buhar tarafındadır; dönerli fırında bunlara ek olarak bir mekanik tahrik sistemi vardır. Bu yüzden dönerli fırın bakımında redüktör, yatak, kayış ve kanca aşınması ayrı bir kalem olarak takip edilir. Katlı taş tabanlı modeller için matador fırın servisi sayfamız daha uygundur.",
      },
      {
        q: "Motorinli dönerli fırınlara da servis veriyor musunuz?",
        a: "Evet. Gazlı, motorinli ve elektrikli dönerli fırınların tamamına servis veriyoruz. Motorinli modellerde brülör memesi, yakıt filtresi, pompa basıncı ve ateşleme trafosu ayrı bir kontrol listesi olarak ele alınır; yanma verimi baca gazı ölçümüyle doğrulanır.",
      },
      {
        q: "Periyodik bakım hangi aralıkla yapılmalı?",
        a: "Günde 12 saatin üzerinde çalışan ekmek üretim tesislerinde 3 ayda bir, normal yoğunluktaki pastane ve fırınlarda 6 ayda bir bakım öneriyoruz. Bakımda tahrik sistemi, buhar bloğu, brülör ayarı, izolasyon ve kapı fitili birlikte değerlendirilir. Bu cihazlarda ani duruşların büyük bölümü ihmal edilmiş mekanik aşınmadan doğar.",
      },
      {
        q: "Fırınım eski model, yedek parçası bulunur mu?",
        a: "Dönerli fırınlarda tahrik ve buhar grubu parçalarının çoğu standart endüstriyel bileşenlerdir; redüktör, rulman, kayış ve solenoid valf muadilleriyle karşılanabilir. Gövdeye özel parçalarda (kanca, yatak, kapı fitili) ölçüye göre imalat yapıyoruz. Onarımın ekonomik olmadığı durumlarda bunu açıkça söyler, yenileme alternatifini gerekçesiyle sunarız.",
      },
    ],
    priceNote:
      "Dönerli fırın tamiri fiyatı; arızanın tahrik, buhar veya yanma grubunda olmasına ve değişecek parçaya göre belirlenir. Kayış ayarı ile redüktör değişimi arasında büyük fark vardır; kesin tutar yerinde teşhis sonrası bildirilir.",
    related: [
      { slug: "matador-firin-servisi", note: "Katlı ve sabit taş tabanlı modeller için" },
      { slug: "sanayi-tipi-firin-servisi", note: "Üretim hattının tamamını kapsayan ağır hizmet tipi servis" },
    ],
  },
  {
    slug: "matador-firin-servisi",
    name: "Matador Fırın Servisi ve Tamiri",
    navName: "Matador Fırın Servisi",
    h1: "Matador Fırın Servisi ve Tamiri",
    icon: "deck",
    metaTitle: "Matador Fırın Servisi ve Tamiri | Katlı Taş Fırın",
    metaDescription:
      "Matador fırın servisi ve tamiri: katlı taş tabanlı buharlı ekmek fırınlarında taban ısısı, buhar bloğu, rezistans ve kapı arızalarında yerinde teknik servis.",
    excerpt:
      "Katlı taş tabanlı buharlı ekmek fırınlarında taban ısısı, buhar grubu, rezistans ve izolasyon sorunlarına kat bazında müdahale.",
    keywords: [
      "matador fırın servisi",
      "matador fırın tamiri",
      "katlı taş fırın servisi",
      "buharlı ekmek fırını tamiri",
      "deck fırın servisi",
    ],
    intro: [
      "Matador fırın, taş tabanlı katların üst üste dizildiği, her katın kendi üst ve alt rezistans grubu ile buhar girişine sahip olduğu klasik ekmek ve pide fırınıdır. Adı Werner & Pfleiderer'in Matador serisinden gelir; bugün Türkiye'de bu yapıdaki katlı taş tabanlı buharlı fırınların tamamı için kullanılan yaygın bir tanımdır. Ekmek, pide, poğaça ve pastane üretiminde taban ısısının doğrudan taştan gelmesi nedeniyle hâlâ tercih edilir.",
      "Matador fırın servisi ve tamiri işinin ayırt edici yanı, arızanın çoğu zaman cihazın tamamında değil tek bir katta olmasıdır. İşletme 'fırın iyi pişirmiyor' dediğinde ilk yapılan iş, katları tek tek ölçmektir: her katın taban ve tavan sıcaklığı ayrı ayrı okunur, üst ve alt rezistans grupları bağımsız test edilir. Genellikle bir katın alt grubunda tek bir rezistans yanmıştır ve cihaz çalışmaya devam ettiği için sorun geç fark edilir.",
      "İkinci kritik nokta taban taşıdır. Yıllar içinde ısıl döngüye maruz kalan şamot taban çatlar, gözenekleri kapanır ve ısı depolama kapasitesini kaybeder. Rezistans değişip taş kontrol edilmediğinde şikâyet tam olarak geçmez. Bu yüzden her serviste taban taşının durumu da raporlanır ve gerekiyorsa ölçüye özel taş kesimi ile değişim yapılır.",
    ],
    symptoms: [
      {
        title: "Bir kat diğerlerinden farklı pişiriyor",
        text: "O kata ait üst veya alt rezistans grubundan birinin yanması, kat kontaktörünün arızalanması ya da prob sapması tipik nedendir.",
      },
      {
        title: "Ekmek tabanı yeterince kızarmıyor",
        text: "Yorulmuş veya çatlamış taban taşı, alt rezistans kaybı ve yetersiz ön ısıtma süresi taban ısısını düşürür.",
      },
      {
        title: "Buhar zayıf, kabuk parlaklığı kayboldu",
        text: "Kireçlenmiş buhar bloğu, tıkalı buhar borusu ve arızalı solenoid valf buhar şokunu ortadan kaldırır.",
      },
      {
        title: "Kapıdan ısı ve buhar kaçıyor",
        text: "Sertleşmiş kapı fitili, ayarı kaçmış menteşe ve gevşemiş kilit, hem enerji kaybına hem de kabuk kalitesinde düşüşe yol açar.",
      },
      {
        title: "Fırın geç ısınıyor, tüketim arttı",
        text: "Çökmüş gövde izolasyonu, nem çekmiş cam yünü ve kaçak yapan kapı contası ısınma süresini ve faturayı birlikte yükseltir.",
      },
      {
        title: "Panelde hata kodu, kat kilitleniyor",
        text: "Emniyet termostatının atması, prob açık devre hatası ve kat kontrol kartındaki röle arızası cihazı korumaya alır.",
      },
    ],
    scope: [
      "Kat bazında taban ve tavan sıcaklık ölçümü",
      "Üst ve alt rezistans grubu testi ve değişimi",
      "Şamot taban taşı kontrolü, ölçüye özel kesim ve değişim",
      "Buhar bloğu kireç çözme ve buhar borusu açma",
      "Solenoid valf, su hattı ve zamanlayıcı kontrolü",
      "Kapı fitili, menteşe, kilit ve cam yenileme",
      "Gövde izolasyonu yenileme ve termal kamera taraması",
      "Kat kontaktörleri, prob ve kontrol kartı onarımı",
      "Periyodik bakım sözleşmesi ve yedek parça tedariki",
    ],
    equipment: [
      "Katlı taş tabanlı buharlı ekmek fırınları",
      "2, 3, 4 ve 5 katlı matador modelleri",
      "Pide ve lahmacun katlı fırınları",
      "Pastane tipi katlı deck fırınlar",
      "Elektrikli ve gazlı katlı modeller",
      "Buhar jeneratörlü ve blok buharlı tipler",
      "Fermantasyon dolabı entegre modeller",
    ],
    parts: [
      "Üst ve alt rezistans grupları",
      "Şamot taban taşı (ölçüye özel)",
      "Kat kontaktörü ve termik röle",
      "Buhar bloğu kütleleri ve buhar borusu",
      "Solenoid valf ve buhar zamanlayıcı",
      "Kapı fitili, menteşe, kilit ve kapı camı",
      "Sıcaklık probu ve emniyet termostatı",
      "Kat kontrol kartı ve tuş takımı filmi",
      "Gövde izolasyon malzemesi (cam yünü / seramik elyaf)",
    ],
    faq: [
      {
        q: "Tek kat bozuk, diğer katları kullanmaya devam edebilir miyim?",
        a: "Çoğu modelde evet; katlar bağımsız beslendiği için arızalı kat kapatılıp diğerleri kullanılabilir. Ancak arıza kat kontaktöründe veya besleme hattındaysa devam etmek riskli olur; ısınan bir kontaktör yangın riski taşır. Emin değilseniz o katın şalterini indirin ve serviste hattı kontrol ettirin.",
      },
      {
        q: "Taban taşı ne zaman değişmeli?",
        a: "Taş çatlamışsa, yüzeyi çukurlaşmışsa, hamur belirgin şekilde yapışmaya başladıysa veya rezistanslar sağlam olduğu halde taban kızarmıyorsa değişim zamanı gelmiştir. Ticari kullanımda şamot taban ömrü ortalama 4-8 yıldır; yoğun üretim ve sık ısı değişimi bu süreyi kısaltır. Taşları ölçüye özel kesip genleşme payı bırakarak monte ediyoruz.",
      },
      {
        q: "Matador fırın ile dönerli fırın arasındaki fark nedir?",
        a: "Matador katlı ve sabittir; ürün taşın üzerinde durur, ısının önemli bölümü taban taşından iletim yoluyla gelir. Dönerli fırında ürün arabayla döner ve ısı ağırlıklı olarak sıcak hava dolaşımıyla aktarılır. Matador daha iyi taban kızarması ve klasik ekmek kabuğu verir; dönerli daha yüksek kapasite ve daha az operatör bağımlılığı sağlar.",
      },
      {
        q: "Buhar kalitesini nasıl geri kazanırım?",
        a: "Önce buhar bloğunun kireci çözülür ve buhar boruları mekanik olarak açılır. Ardından solenoid valf ve zamanlayıcı test edilir. Bu üç adım sorunların çoğunu çözer. Kalıcı sonuç için su sertliği ölçülmeli, sert su bölgesindeyseniz yumuşatma sistemi değerlendirilmelidir; aksi halde blok birkaç ay içinde yeniden kireçlenir.",
      },
      {
        q: "Eski matador fırınların parçası bulunuyor mu?",
        a: "Evet. Bu fırınların bileşenleri büyük ölçüde standarttır: rezistans, kontaktör, prob, solenoid valf ve fitil ölçüye göre temin edilebilir veya imal edilebilir. Özel ölçü rezistans sarımı, kapı fitili kesimi ve şamot taş kesimi bizim düzenli yaptığımız işlerdir; üretimden kalkmış model olması tek başına engel değildir.",
      },
      {
        q: "İzolasyon yenilemeye değer mi?",
        a: "Gövdesi sağlam bir fırında izolasyon yenileme, ısınma süresini ve enerji tüketimini gözle görülür biçimde düşürdüğü için genellikle kendini kısa sürede amorti eder. Karar öncesinde termal kamerayla gövde taraması yapıyor, kaybın gerçekten izolasyondan mı yoksa kapı fitilinden mi kaynaklandığını ölçerek gösteriyoruz.",
      },
    ],
    priceNote:
      "Matador fırın tamiri fiyatı; arızanın kaç katı etkilediğine, rezistans mı taban taşı mı değişeceğine ve buhar grubunun durumuna göre belirlenir. Kat bazında ölçüm sonrası kalem kalem bildirilir.",
    related: [
      { slug: "pide-lahmacun-firin-servisi", note: "Yalnızca pide ve lahmacun üretimi yapan yüksek taban ısılı fırınlar için" },
      { slug: "donerli-firin-servisi", note: "Tepsi arabası dönen rotary modeller için" },
    ],
  },
  {
    slug: "pide-lahmacun-firin-servisi",
    name: "Pide ve Lahmacun Fırını Servisi ve Tamiri",
    navName: "Pide & Lahmacun Fırın Servisi",
    h1: "Pide ve Lahmacun Fırını Servisi ve Tamiri",
    icon: "flame",
    metaTitle: "Pide ve Lahmacun Fırını Servisi ve Tamiri | İstanbul",
    metaDescription:
      "Pide ve lahmacun fırını servisi: taş tabanlı, gazlı ve odun ateşli fırınlarda taban ısısı, taş çatlağı, brülör ve baca sorunlarında yerinde teknik servis.",
    excerpt:
      "Taş tabanlı, gazlı, elektrikli ve odun ateşli pide-lahmacun fırınlarında taban ısısı, taş, brülör ve baca çekişi sorunlarına müdahale.",
    keywords: [
      "pide fırını servisi",
      "lahmacun fırını tamiri",
      "pide fırını tamircisi",
      "taş tabanlı pide fırını servisi",
      "lahmacun fırını taş değişimi",
    ],
    intro: [
      "Pide ve lahmacun fırını, endüstriyel fırınlar arasında en yüksek taban sıcaklığıyla çalışan gruptur. Lahmacunun 90-120 saniyede pişmesi, tabandan gelen ani ve yoğun ısıya bağlıdır. Bu yüzden bu fırınlarda arıza, çoğu zaman bir parçanın bozulmasından değil, taban ısısının sessizce düşmesinden gelir; işletme bunu 'eskisi gibi pişmiyor, süre uzadı' diye tarif eder.",
      "Pide fırını servisi ve tamiri işinde teşhis, kızılötesi termometreyle taban haritalaması yaparak açılır. Boş fırında taban farklı noktalardan ölçülür; noktalar arasında 30 °C'yi aşan fark varsa sorun ısı kaynağında değil taşta veya ısı dağıtımındadır. Ardından ısı kaynağı tipine göre yol ayrılır: gazlı modellerde brülör ayarı, hava-yakıt oranı ve baca çekişi; elektriklilerde alt rezistans grubu ve prob kalibrasyonu; odun ateşli modellerde ocak yapısı ve baca kontrolü.",
      "Bu fırınlarda ikinci en sık kalem taban taşıdır. Yoğun servis ve sürekli ısı değişimi şamot tabanı yorar; yüzey çukurlaşır, hamur yapışmaya başlar ve pişirme süresi uzar. Taş değişimi ölçüye özel kesim, genleşme payı ve kademeli ilk ısıtma (kürleme) prosedürüyle yapılır — bu üç adımdan biri atlandığında yeni taş de kısa sürede çatlar.",
    ],
    symptoms: [
      {
        title: "Lahmacun pişme süresi belirgin şekilde uzadı",
        text: "Düşen taban ısısı, yorulmuş şamot taş, alt rezistans kaybı veya bozulmuş brülör ayarı en sık nedenlerdir.",
      },
      {
        title: "Taban çiğ kalıyor, üst yüzey yanıyor",
        text: "Taş ısı depolayamadığında üstten gelen ısı baskın gelir; ürünün üstü kararırken tabanı hamur kalır.",
      },
      {
        title: "Taban taşı çatlamış veya çukurlaşmış",
        text: "Ani ısı değişimi, ıslak temizlik ve montajda genleşme payı bırakılmaması taşta kalıcı çatlaklara yol açar.",
      },
      {
        title: "Fırının bir bölgesi soğuk kalıyor",
        text: "Tek taraflı çalışan brülör, tıkanmış alev dağıtım kanalı ve dengesiz oturmuş taş, taban boyunca sıcaklık farkı yaratır.",
      },
      {
        title: "Alev tutmuyor veya sık sık sönüyor",
        text: "Kirlenmiş ateşleme elektrodu, oksitlenmiş iyonizasyon çubuğu, gaz valfi bobini ve yetersiz baca çekişi yanma emniyetini kilitler.",
      },
      {
        title: "İçeride duman kalıyor, geri tepme var",
        text: "Tıkanmış veya yanlış ölçülendirilmiş baca, davlumbaz emiş yetersizliği ve kapatılmış hava girişi dumanın dışarı atılmasını engeller.",
      },
    ],
    scope: [
      "Kızılötesi termometreyle taban ısı haritalaması",
      "Şamot taban taşı kontrolü, ölçüye özel kesim ve değişim",
      "Kademeli ilk ısıtma (kürleme) prosedürünün uygulanması",
      "Gaz brülörü ayarı, hava-yakıt oranı ve alev dağılımı",
      "Ateşleme elektrodu ve iyonizasyon çubuğu bakımı",
      "Baca çekişi ölçümü ve davlumbaz emiş kontrolü",
      "Alt ve üst rezistans grubu testi (elektrikli modeller)",
      "Sıcaklık probu kalibrasyonu ve termostat ayarı",
      "Kapı, gözetleme camı ve ısı yalıtımı yenileme",
    ],
    equipment: [
      "Taş tabanlı pide ve lahmacun fırınları",
      "Katlı pide fırınları",
      "Gazlı model pide fırınları",
      "Elektrikli taş tabanlı fırınlar",
      "Odun ateşli geleneksel fırınlar",
      "Döner tablalı lahmacun fırınları",
      "Konveyörlü lahmacun ve pide fırınları",
    ],
    parts: [
      "Şamot taban taşı (ölçüye özel kesim)",
      "Alt ve üst rezistans grubu",
      "Gaz valfi ve brülör memesi",
      "Ateşleme elektrodu ve iyonizasyon çubuğu",
      "Alev dağıtım borusu ve hava ayar bileziği",
      "Sıcaklık probu ve emniyet termostatı",
      "Kapı contası, menteşe ve gözetleme camı",
      "Döner tabla motoru ve yatağı",
      "Baca damperi ve bağlantı elemanları",
    ],
    faq: [
      {
        q: "Lahmacun eskisi gibi pişmiyor, sebebi ne olabilir?",
        a: "En sık neden taban ısısının düşmesidir ve bunun iki kaynağı vardır: yorulmuş taban taşı veya zayıflamış ısı kaynağı. Ayrımı yapmanın pratik yolu şudur: fırını normal süre ön ısıtın, boş taban sıcaklığını kızılötesi termometreyle ölçün. Sıcaklık normalse sorun taşın ısı depolama kapasitesinde, düşükse brülörde veya rezistanstadır.",
      },
      {
        q: "Taban taşını kendim değiştirebilir miyim?",
        a: "Teknik olarak mümkün ama üç ayrıntı işi belirler: ölçü fırın soğukken ve iç tabandan alınmalı, kenarlara genleşme payı bırakılmalı, montaj sonrası kademeli ilk ısıtma uygulanmalıdır. Bu adımlar atlandığında yeni taş ilk haftalarda çatlar. Montajı biz yaptığımızda kürleme prosedürünü uygular ve yazılı olarak işletmeye bırakırız.",
      },
      {
        q: "Odun ateşli fırınlara da servis veriyor musunuz?",
        a: "Evet. Odun ateşli fırınlarda müdahale ağırlıklı olarak ocak yapısı, taban taşı, kubbe sıvası, baca çekişi ve davlumbaz emişi üzerinedir. Gazlı dönüşüm yapılmış modellerde ayrıca brülör ayarı ve yanma emniyeti kontrol edilir. Odun ateşli fırınlarda baca temizliği ihmal edilmemesi gereken bir güvenlik kalemidir.",
      },
      {
        q: "Fırından içeri duman doluyor, tehlikeli mi?",
        a: "Evet, ciddiye alınması gerekir. Duman geri tepmesi çoğunlukla baca tıkanıklığından, yetersiz baca kesitinden veya mutfağa taze hava girişinin kapatılmasından kaynaklanır. Gazlı modellerde bu durum eksik yanma ve karbonmonoksit riski demektir. Bacayı ve hava girişini kontrol ettirmeden cihazı yoğun kullanmayın.",
      },
      {
        q: "Pide fırını servisi ile pizza fırını servisi aynı şey mi?",
        a: "Yakın ama aynı değil. İkisi de taş tabanlıdır, ancak pide ve lahmacun fırınları genellikle daha yüksek taban sıcaklığında ve çok daha kısa pişirme süresiyle çalışır; taş kalınlığı, ısı geri kazanım hızı ve brülör kapasitesi buna göre seçilir. Konveyörlü veya taş tabanlı pizza fırınınız varsa pizza fırını servisi sayfamız daha uygundur.",
      },
      {
        q: "Ne sıklıkta bakım yaptırmalıyım?",
        a: "Gün boyu servis veren pide ve lahmacun salonlarında 6 ayda bir bakım öneriyoruz. Bakım kapsamı; taban ısı haritalaması, taş durumu değerlendirmesi, brülör ayarı ve alev gözlemi, baca çekişi ölçümü ile kapı ve yalıtım kontrolünü içerir. Baca ve davlumbaz temizliği yoğun işletmelerde 3 ayda bir yapılmalıdır.",
      },
    ],
    priceNote:
      "Pide ve lahmacun fırını tamiri fiyatı; sorunun taş tarafında mı ısı kaynağında mı olduğuna göre değişir. Brülör ayarı ile komple taban taşı değişimi çok farklı kalemlerdir; taban ısı ölçümü sonrası kesin tutar bildirilir.",
    related: [
      { slug: "matador-firin-servisi", note: "Katlı pide fırınlarında kat bazında ölçüm ve buhar grubu" },
      { slug: "pizza-firini-servisi", note: "Taş tabanlı ve konveyörlü pizza fırınları için" },
    ],
  },
  {
    slug: "pizza-firin-tasi-degisimi",
    name: "Pizza Fırın Taşı Değişimi, Montajı ve Satışı",
    navName: "Pizza Fırın Taşı Değişimi",
    icon: "stone",
    h1: "Pizza Fırın Taşı Değişimi, Montajı ve Satışı",
    metaTitle: "Pizza Fırın Taşı Değişimi, Montajı ve Satışı | Ölçüye Özel",
    metaDescription:
      "Pizza fırın taşı değişimi, montajı ve satışı. Şamot ve kordiyerit pişirme taşı, ölçüye özel kesim, yerinde montaj ve ilk ısıtma prosedürü ile teslim.",
    excerpt:
      "Şamot ve kordiyerit pişirme taşında ölçüye özel kesim, yerinde montaj ve doğru ilk ısıtma prosedürüyle teslim.",
    keywords: [
      "pizza fırın taşı",
      "pizza fırın taşı değişimi",
      "pizza fırın taşı satışı",
      "şamot taş",
      "kordiyerit pişirme taşı",
      "fırın taşı montajı",
    ],
    intro: [
      "Pişirme taşı, pizza fırınının kalbidir. Isıyı depolayıp hamura hızlı ve doğrudan aktarır; hamurun altındaki nemi emerek çıtır tabanı oluşturur. Zamanla çatlayan, incelen veya yağ doygunluğuna ulaşan taş bu iki işlevi de kaybeder. Pizza fırın taşı değişimi, çoğu işletmede fırını yenilemeden pişirme kalitesini geri kazandırmanın en hızlı yoludur.",
      "İki ana malzeme kullanıyoruz. Şamot taş yüksek ısı kapasitesiyle klasik taş fırınlar için idealdir; ısıyı uzun süre tutar ve yoğun serviste toparlanmayı kolaylaştırır. Kordiyerit taş ise termal şoka çok daha dayanıklıdır; sık kapı açılan, hızlı ısınıp soğuyan fırınlarda çatlama riskini düşürür. Fırın tipinize ve servis yoğunluğunuza göre doğru malzemeyi birlikte seçiyoruz.",
      "Taş yalnızca satılmaz; doğru kesilip doğru monte edilmesi gerekir. Fırın tabanı ölçülür, genleşme payı bırakılarak kesim yapılır, taş altına ısıl köprü oluşturmayacak şekilde yataklanır ve ilk ısıtma (kürleme) çevrimi uygulanır. Bu prosedür atlandığında yeni taş ilk haftalarda çatlar — en sık karşılaştığımız hatalardan biridir.",
    ],
    symptoms: [
      {
        title: "Taşta çatlak veya kırık var",
        text: "Ani sıcaklık değişimi, ıslak zeminle temas ve yanlış montaj çatlamaya yol açar. Çatlak büyüdükçe taban ısısı düzensizleşir.",
      },
      {
        title: "Taban ısısı geç toparlıyor",
        text: "İncelmiş veya doygunluğa ulaşmış taş, ısı depolama kapasitesini yitirir; yoğun serviste ardışık pizzalarda taban çiğ kalır.",
      },
      {
        title: "Taş yüzeyi yağ çekmiş ve kararmış",
        text: "Gözenekleri tıkanan taş, hamurdaki nemi emmez; taban çıtır olmak yerine yumuşak ve lastiksi kalır.",
      },
      {
        title: "Taş oynuyor / yüzeyi düz değil",
        text: "Hatalı ölçü, eksik yataklama ve genleşme payının bırakılmaması taşın oynamasına ve pişirme yüzeyinin bozulmasına neden olur.",
      },
    ],
    scope: [
      "Fırın tabanı ölçümü ve taş tipi seçimi danışmanlığı",
      "Şamot ve kordiyerit taş satışı",
      "Ölçüye özel kesim (tek parça veya modüler plaka)",
      "Eski taşın sökümü ve taban temizliği",
      "Yataklama, genleşme payı ve yerinde montaj",
      "İlk ısıtma (kürleme) prosedürünün uygulanması",
      "Taş bakımı ve temizliği konusunda personel bilgilendirmesi",
      "Konveyör fırınlar için taş plaka çözümleri",
    ],
    equipment: [
      "Taş tabanlı elektrikli pizza fırını",
      "Odun ateşli kubbe fırın",
      "Gaz ateşli pizza fırını",
      "Katlı pide ve lahmacun fırını",
      "Ev tipi ve tezgâh üstü taş fırınlar",
    ],
    parts: [
      "Şamot pişirme taşı (kalınlık 20-40 mm)",
      "Kordiyerit pişirme taşı (kalınlık 15-30 mm)",
      "Modüler taş plaka setleri",
      "Yüksek sıcaklık harcı ve yataklama malzemesi",
      "Refrakter tuğla ve izolasyon levhası",
    ],
    faq: [
      {
        q: "Şamot mu kordiyerit mi tercih etmeliyim?",
        a: "Uzun süre sabit sıcaklıkta çalışan, kapısı seyrek açılan fırınlarda şamot daha iyi ısı depolar. Yoğun servis nedeniyle sık kapı açılan, hızlı ısı değişimi yaşayan fırınlarda ise termal şok dayanımı yüksek kordiyerit çok daha uzun ömürlüdür.",
      },
      {
        q: "Taş kalınlığı ne olmalı?",
        a: "Ticari kullanımda 20-30 mm aralığı çoğu fırın için idealdir. Daha kalın taş daha çok ısı depolar ancak ısınma süresi uzar. Fırınınızın rezistans gücü ve günlük çalışma düzenine göre öneri yaparız.",
      },
      {
        q: "Yeni taş takıldıktan sonra ne yapmalıyım?",
        a: "İlk ısıtma kademeli olmalıdır: yaklaşık 2-3 saat boyunca sıcaklık kademeli yükseltilir, taş içindeki nem yavaşça atılır. Bu prosedürü montajda biz uygular ve size yazılı olarak bırakırız. Ayrıca taş asla suyla yıkanmaz; fırça ve kazıyıcı ile kuru temizlenir.",
      },
      {
        q: "Sadece taş satın alabilir miyim?",
        a: "Evet. Ölçülerinizi ilettiğinizde kesilmiş taşı kargoyla gönderiyoruz. Ancak montaj hatalarının çatlamayla sonuçlanma riski nedeniyle, İstanbul içinde yerinde montaj hizmetimizi öneriyoruz.",
      },
    ],
    priceNote:
      "Pizza fırın taşı fiyatı; malzeme (şamot / kordiyerit), kalınlık ve ölçüye göre belirlenir. Fırın markası ve iç taban ölçüsünü ilettiğinizde net fiyat aynı gün verilir.",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Ana hizmet — anasayfa ve ilce sayfalarinda vurgulanir */
export const primaryService = services[0];
