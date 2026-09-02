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
      "Sanayi tipi fırın servisi ve tamiri: katlı, döner, tünel ve konveyör fırınlarda üretim hatlarına yerinde arıza müdahalesi ve periyodik bakım.",
    excerpt:
      "Katlı, döner, tünel ve konveyör fırınlarda yüksek kapasiteli üretim hatları için ağır hizmet tipi teknik servis.",
    keywords: [
      "sanayi tipi fırın servisi",
      "sanayi tipi fırın tamiri",
      "sanayi fırını servisi",
      "endüstriyel üretim fırını servisi",
      "tünel fırın servisi",
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
  },
  {
    slug: "konveksiyonel-firin-servisi",
    name: "Konveksiyonel Fırın Servisi ve Tamiri",
    navName: "Konveksiyonel Fırın Servisi",
    icon: "fan",
    h1: "Konveksiyonel Fırın Servisi ve Tamiri",
    metaTitle: "Konveksiyonel Fırın Servisi ve Tamiri | Fan, Rezistans, Buhar",
    metaDescription:
      "Konveksiyonel fırın servisi ve tamiri: fan motoru, rezistans, buhar üretimi, kontrol kartı ve sıcaklık kalibrasyonu sorunlarında yerinde teknik servis.",
    excerpt:
      "Konveksiyonel ve kombi (buharlı) fırınlarda fan, rezistans, buhar üretimi ve elektronik kart arızalarına uzman müdahale.",
    keywords: [
      "konveksiyonel fırın servisi",
      "konveksiyonel fırın tamiri",
      "kombi fırın servisi",
      "buharlı fırın tamiri",
      "konveksiyonel fırın arızası",
    ],
    intro: [
      "Konveksiyonel fırın, ısıyı fanla zorlamalı biçimde dolaştırarak tüm tepsilerde eşit pişirme sağlar. Bu avantaj aynı zamanda hassasiyet demektir: fan devrinde düşüş, kanat dengesizliği veya hava yönlendirme sacındaki deformasyon, doğrudan pişirme kalitesine yansır. Konveksiyonel fırın servisi ve tamiri işinde teşhis, bu yüzden sıcaklık kadar hava akışı üzerine kuruludur.",
      "Kombi (buharlı) modellerde işin bir katmanı daha vardır. Buhar üretimi ya boyler ile ya da doğrudan püskürtme yöntemiyle yapılır; her ikisinde de su sertliği, kireç birikimi ve solenoid valf sağlığı belirleyicidir. Su yumuşatma sistemi olmayan işletmelerde buhar arızalarının neredeyse tamamı kireç kaynaklıdır ve tekrar etmemesi için önce su hattı çözülmelidir.",
      "Servis sonrasında fırın; boş çevrim, dolu tepsi çevrimi ve buhar çevriminde ayrı ayrı test edilir. Sıcaklık homojenliği farklı raf seviyelerinde ölçülür, sapma 5 °C'nin üzerindeyse hava yönlendirme ve prob konumu yeniden ayarlanır.",
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
