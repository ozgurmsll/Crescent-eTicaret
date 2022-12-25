import { Category } from "src/app/categories/category.model";
import { Product } from "src/app/products/product.model";

export class ProductRepo{
  private products:Product[] =[
    {
      "urunID": 0,
      "urunAdi": "Telefon",
      "urunAciklamasi": "Android özelliğine sahip dokunmatik telefon. 16mp ön kamera 32mp arka kameraya sahiptir. Mavi Beyaz ve Siyah renkleri mevcuttur.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 12499,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://lh3.googleusercontent.com/VUYKrmiuvsE1dn5L-58clmUX2pvOio6Cu7YZoFfWUaE8NLEV5mWy_qzMmKTor-26hR4vK5-L5Ro7h9GmnDRLdX0BzOXPG2ErYw=rw-e365-w500",
        "https://lh3.googleusercontent.com/hODCzG6hUGm2EbaKzYy_wXXZEzufZvQqR3zT1RizQ8KLYMU--m83nbXvli1EkV6TmDayZt3m1hODrs5AecWqcgXtiyzNQIXmRRLa=rw-e365-w1050"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 1,
      "urunAdi": "Laptop",
      "urunAciklamasi": "16' Dizüstü laptop. Yeni nesil işlemciye sahip. 6GB Ekran kartına sahiptir. 16 GB Ram belleğine sahiptir. 500 GB Depolama alanına sahiptir.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 17899,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://lh3.googleusercontent.com/W20i59pjsDF4WjMQcJiDGT2Y7bSTkInE0pSf9Dtb6jN0yVMeyqceCwr5RGteGUWxuyc=w1014",
        "https://lh3.googleusercontent.com/FgAX3qE17yqLlPsZ-A5bikXc_kA0zRnXU0IqOQTi5GNuE-xtrvO-Aw4GFe3pim295sM=w1014"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 2,
      "urunAdi": "Tablet",
      "urunAciklamasi": "11 Ekran dokunmatik tablet. Android işletim sistemine sahiptir. 6 GB Ram belleğine sahiptir. 128 GB Depolama alanına sahiptir. Yeni nesil hızlı işlemciye sahiptir.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 5249,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://lh3.googleusercontent.com/fxl6yRK82HAGM63UlRjjgRuq8nBA02J7PfDFJ_9LKGM8SENsIKXmyrbqChw_c3X_d8XEJovLhRhT1A_jOYB_ugezWyH6bAgNmyiuoUw=rw-e365-w875-v1"
      ],
      "kampanyalar": ["2.ürün 1 TL"],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 3,
      "urunAdi": "Televizyon",
      "urunAciklamasi": "35 Ekran televizyon. Android tv uyumludur. Bir çok uygulamayı çalıştırabilmektedir. Dahili uydu alıcısına sahiptir.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 29999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQPV3T-kT2NOY13VTTnSY_zUN_9XmOET-I_jP8WnUMI6qwCu_rSGK9UczWnAe8GSUVGt_GrjS1ir-k9OtN242giSKZte72T-SYjEzdg90t_Yhg4YuTJzkUkmY&usqp=CAE",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0jXW3pmzrj0eaeFxAVU5tb_15xcNLk3fndMVNoBDWey96aE5mTGihHpkU1XlpvEacv7aLEGLimAOOKCY-S-24z4qgpPl2hmZjSmY15fufDm-tWG88PUXr&usqp=CAE"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 4,
      "urunAdi": "Oyun Konsolu",
      "urunAciklamasi": "2 Adet oyun koluna sahiptir. 500 GB depolama alanı sunmaktadır. Hdmi girişine sahiptir. Gerekli kabloları ile satılmaktadır.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 16799,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.akakce.com/z/sony/ps5-825-gb-ssd.jpg",
        "https://iasbh.tmgrup.com.tr/e84f64/740/479/0/62/1000/710?u=https://isbh.tmgrup.com.tr/sbh/2020/11/12/playstation-5-ps5-ilk-testte-bozuldu-tamamen-kullanilmaz-hale-geldi-1605189628421.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 5,
      "urunAdi": "Bluetooth Kulaklık",
      "urunAciklamasi": "Suya dayanıklı uzun batarya ömrü sunmaktadır. Renk seçenekleri mevcuttur.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://lh3.googleusercontent.com/-mHxCtUbYbNyzI4c6zAEwSXUNNiltYV-zdKFSDsjUb9me5qbIOZ40KvxFPAn79kkKaQYvHNtC6qiI7s1guiWerJKyE2Xkzy9hw=s0",
        "https://lh3.googleusercontent.com/BHyFf8XaLqhpgRs3p0zVxVwzPAdv9BpoqICzcFqWkE9leIwfQpPVZC_bTlPH1xHB-_LY4C_gn9hp3kcF4j3DfeEHVZguzvWVNvA=rw-e365-w500"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 6,
      "urunAdi": "Yazıcı",
      "urunAciklamasi": "Renkli ve renksiz çıkarma özelliklerine sahiptir. Wifi uyumludur. 2 top kartuş ile birlikte verilmektedir.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 2499,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/TeoriV2-109114_large.jpg",
        "https://productimages.hepsiburada.net/s/44/375/10793493790770.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 7,
      "urunAdi": "Klavye",
      "urunAciklamasi": "RGB Renk özelliklerine sahiptir. Mekanik özelliğine sahiptir.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 449,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.akakce.com/a4-tech/a4-tech-km-720-q-usb-z.jpg",
        "https://m.media-amazon.com/images/I/41WGL+pSzvL._AC_SY350_.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 8,
      "urunAdi": "Akıllı Saat",
      "urunAciklamasi": "GPS modülü sayesinde canlı konum takibi, aramaları telefondan cevaplama ve sesli görüşme. Müzik kontrolü, bildirim ve aktivite takibi ile hayatınızı kolaylaştırın.  ",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 2449,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://lh3.googleusercontent.com/0qx3uS8KzhUQrcf3xX1ZvkAubfJJiecDB76wxrJgcGhw7wvWEYdK64juquwGX7jy73KFMErsYyKpvcqvt9Ony6tnQi_fhCtOt76Y=s0",
        "https://lh3.googleusercontent.com/C1AfgKj_8g1Udl-fPzc_48Km-sGByQKzFnnaiWvqSP4ik4xA10yKcOqhpIFB74JOCtEQ_yBStdk7xRdXk2m7n0r68dGtdysU_Q=s0"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 9,
      "urunAdi": "Mouse",
      "urunAciklamasi": "Yüksek DPI, RGB, masaüstü uygulaması ve ayarlanabilir ağırlıklar.",
      "urunKategorisi": "Elektronik",
      "urunFiyati": 349,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.cimri.io/image/1000x1000/logitechmgrimouse_3251320.jpg",
        "https://cdn.akakce.com/logitech/logitech-m185-gri-910-002235-optik-wireless-mouse-z.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 10,
      "urunAdi": "Sırt Çantası",
      "urunAciklamasi": "Su geçirmez tasarım, sırt çantası ya da el çantası olarak kullanma ve elektronik cihaz şarjı özelliğine sahiptir.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 299,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://chemodan-na-kolesah.ru/upload/iblock/39c/american_tourister_upbeat_backpack_93g_06002_yellow_5.jpg",
        "https://www.tradeinn.com/f/13818/138185093_7/american-tourister-upbeat-19.5l-rucksack.jpg"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 11,
      "urunAdi": "A4 Kağıdı",
      "urunAciklamasi": "A Yaprak Kalitesi, 80gr yaprak.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 89,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.akakce.com/mopak/mopak-kazancli-a4-80-gr-500-yaprak-z.jpg",
        "https://productimages.hepsiburada.net/s/167/375/110000129375232.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 12,
      "urunAdi": "Plastik Klasör",
      "urunAciklamasi": "Organizer özelliği sayesinde çalışmalarınızı düzenleyin.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 45,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdnsta.avansas.com/mnresize/900/-/urun/63393/avansas-eco-plastik-klasor-genis-a4-mavi-zoom-1.jpg",
        "https://cdnsta.avansas.com/mnresize/300/-/urun/63401/avansas-extra-plastik-klasor-genis-a4-mavi-zoom-2.jpg"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 13,
      "urunAdi": "Defter",
      "urunAciklamasi": "Kaliteli yaprakları sayesinde çizimleriniz ve yazınız için eşsiz bir performans.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 349,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNtKMb5jN5WQ-VLHfL7gDk0UL2hG8u1cTNCh62zNmRLuoh944MokBVUERWuCLOGbFIAaWhztjqsKj9U0lFCfLWr5XFu8EEEwxV5EYC78VFP1XyWMvlGlhiiA&usqp=CAE",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSsMaeLcBWOw2kfFUdEPXETMH_8EAhJJ8s2N0qeYpSS46vt9a6c56a9XdaHAREfrlIlavNIIlftbfjqrmNEC3cHNcPUk6IS&usqp=CAE"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 14,
      "urunAdi": "Sekreterlik",
      "urunAciklamasi": "Kağıtlarınızı bir arada tutar.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 34,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdnsta.avansas.com/mnresize/300/-/urun/71883/wole-a4-kapakli-sekreterlik-siyah-zoom-1.jpg",
        "https://cdn03.ciceksepeti.com/cicek/kcm28224710-1/XL/sekreterlik-dosya-kapakli-sekreter-dosya-siyah-kcm28224710-1-4d889983b62c477fa2f6f42848b0abc5.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 15,
      "urunAdi": "Evrak Dosyası",
      "urunAciklamasi": "Sıvı geçirmez özelliği ve kilit sistemi sayesinde çalışmalarınızı koruyun.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 29,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/7/375/9753454116914.jpg",
        "https://cdn.shopify.com/s/files/1/0382/4323/8028/products/DEN_3d0d7658-0cca-4495-b86c-e3a04d8a8ce9_grande.jpg?v=1600770703"
      ],
      "kampanyalar": ["2.ürün 1 TL"],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 16,
      "urunAdi": "Mantar Pano",
      "urunAciklamasi": "Çalışmalarınızı sergileyin.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 39,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/12/375/9064336621618.jpg",
        "https://cdn03.ciceksepeti.com/cicek/kc2282854-1/XL/mantar-pano-30x40-cm-ahsap-cerceve-kc2282854-1-42cf9ba30b3c4c5f8d11aeb4a7ca7e2a.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 17,
      "urunAdi": "100'lü Şeffaf Dosya",
      "urunAciklamasi": "100'lü plastik şeffaf dosya.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 15,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/35/1500/10485882191922.jpg",
        "https://www.fmcgstore.com/content/images/thumbs/007/0070436_p-alc-deluxe-a4-seffaf-poset-dosya-100lu-paket_550.jpeg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 18,
      "urunAdi": "10lu Tükenmez Kalem",
      "urunAciklamasi": "Çalışmalarınız ve ofisiniz için mükemmel bir tercih.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 89,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/42/1500/10729062858802.jpg",
        "https://productimages.hepsiburada.net/s/42/1500/10729062924338.jpg"
      ],
      "kampanyalar": ["2.ürün 1 TL"],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 19,
      "urunAdi": "Proje Çantası",
      "urunAciklamasi": "Projelerinizi ve çalışmalarınızı taşıyın.",
      "urunKategorisi": "Ev ve Kırtasiye",
      "urunFiyati": 99,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/6/375/9713156980786.jpg",
        "https://cdn.dsmcdn.com/mnresize/500/-/ty16/product/media/images/20201010/20/14964810/78809759/1/1_org.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 20,
      "urunAdi": "Çim Biçme Makinesi",
      "urunAciklamasi": "Bahçenizi temizleyin.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 1399,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/18/550/9801129033778.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/263/550/110000247892618.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 21,
      "urunAdi": "Bahçe Sandığı",
      "urunAciklamasi": "Alet ve fazlalık eşyalarınızı depolayın.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 499,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/241/550/110000226197945.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/241/550/110000226197946.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 22,
      "urunAdi": "Benzinli Çapa Makinesi",
      "urunAciklamasi": "Bahçenize çiçek ve tarımsal ürünlerinizi ekerken ellerinizi kirletmeyin.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 8999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/179/550/110000143709932.jpg/format:webp",
        "https://cdn.akakce.com/kaan/kaan-23-s-7-hp-ipli-benzinli-z.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 23,
      "urunAdi": "Ağaç Kesme Makinesi",
      "urunAciklamasi": "Bahçenizde bulunan ağaçları düzenleyin.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 2599,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/32/375/10354496503858.jpg",
        "https://cdn.dsmcdn.com/ty85/product/media/images/20210312/17/70976846/89375222/2/2_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 24,
      "urunAdi": "Bahçe Balkon Takımı",
      "urunAciklamasi": "Bahçenizin bakımı için ihtiyacınız olan her şey.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 11299,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/279/550/110000266931340.jpg/format:webp"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 25,
      "urunAdi": "Bahçe Eldiveni",
      "urunAciklamasi": "Bahçe işleriyle uğraşırken elleriniz kirlenmesin.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 399,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/23/550/10060173312050.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 26,
      "urunAdi": "Köpük Aparatı",
      "urunAciklamasi": "Aracınızı hızlıca temizleyin.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 499,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/241/550/110000225643291.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/241/550/110000225643292.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/241/550/110000225643293.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 27,
      "urunAdi": "Basınçlı Sprey Pompası",
      "urunAciklamasi": "Bahçe temizlikleriniz için vazgeçilmez.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 69,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/19/550/9837237796914.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/19/550/9837237829682.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 28,
      "urunAdi": "Kare Saksı",
      "urunAciklamasi": "Çiçekleriniz için sağlam ve sağlıklı bir ortam sağlayın.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 89,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/183/550/110000146906544.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/23/222-222/10055650246706.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 29,
      "urunAdi": "Meşe Odunu 20Kg",
      "urunAciklamasi": "İster dekor olarak isterseniz yakacak olarak kullanabilirsiniz.",
      "urunKategorisi": "Bahçe",
      "urunFiyati": 199,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/33/550/10409414950962.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/33/550/10409415016498.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 30,
      "urunAdi": "Oyun Hamuru",
      "urunAciklamasi": "Sağlığa zararlı madde içermez.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 39,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/196/550/110000165856897.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/196/550/110000165856898.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 31,
      "urunAdi": "Üçlü Araba Seti",
      "urunAciklamasi": "Patentli marka arabalardan oluşmaktadır.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 89,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/44/550/10790600507442.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/44/550/10790600441906.jpg/format:webp"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 32,
      "urunAdi": "Oyuncak Bebek",
      "urunAciklamasi": "Sarı saçlı, sağlığa herhangi bir zararı olmayan oyuncak bebek.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 899,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/335/550/110000341334375.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 33,
      "urunAdi": "Lego Seti",
      "urunAciklamasi": "484 Parçadan Oluşmaktadır...",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 469,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/116/550/110000064331722.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/116/550/110000064331723.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 34,
      "urunAdi": "Dijital Çizim Tableti",
      "urunAciklamasi": "Çocuklarınızın el kalibrasyonu ve motor kuvveti için ideal.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 229,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/113/550/110000059829009.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/113/550/110000059829011.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 35,
      "urunAdi": "Büyük Su Kaydırağı",
      "urunAciklamasi": "Kaydırak ve su çocukların en sevdiği şeyler arasındayken neden ikisi bir arada olmasın?",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 689,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/37/550/10548398391346.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/37/550/10548398424114.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 36,
      "urunAdi": "Tren Seti",
      "urunAciklamasi": "Modüler tren seti.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 4669,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/235/550/110000218165313.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/235/550/110000218165314.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 37,
      "urunAdi": "Bowling Oyuncağı",
      "urunAciklamasi": "Çocuğunuzla eğlenin.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 49,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/111/550/110000058316103.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 38,
      "urunAdi": "Oyuncak Telefon",
      "urunAciklamasi": "Çocuklar için oyuncak telefon.",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 199,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/44/550/10793727721522.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/44/550/10793727852594.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 39,
      "urunAdi": "Arabalar Bul-Tak",
      "urunAciklamasi": "Çocuklarınızın görsel hafızasının gelişmesin",
      "urunKategorisi": "Bebek ve Oyuncak",
      "urunFiyati": 29,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/33/550/10395469840434.jpg/format:webp"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 40,
      "urunAdi": "Futbol Topu",
      "urunAciklamasi": "Lisanslı, orijinal futbol topu.",
      "urunKategorisi": "Spor",
      "urunFiyati": 799,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/253/550/110000235783462.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/210/550/110000187897767.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 41,
      "urunAdi": "Koşu Bandı",
      "urunAciklamasi": "Aktif bir yaşam için olmazsa olmazınız.",
      "urunKategorisi": "Spor",
      "urunFiyati": 5999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/314/550/110000307579177.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/314/550/110000307580127.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 42,
      "urunAdi": "Dambıl Seti",
      "urunAciklamasi": "Kauçuk yüzey ve metal tutacaklar sayesinde üstün kaliteyi elinizde hissedin.",
      "urunKategorisi": "Spor",
      "urunFiyati": 99,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/40/550/10680163565618.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/40/550/10680163598386.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 43,
      "urunAdi": "Tenis Raketi",
      "urunAciklamasi": "Tenise başlangıç için ideal bir üründür.",
      "urunKategorisi": "Spor",
      "urunFiyati": 299,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/184/550/110000149590361.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 44,
      "urunAdi": "Üçlü Tenis Topu",
      "urunAciklamasi": "Tenise başlangıç için ideal bir üründür.",
      "urunKategorisi": "Spor",
      "urunFiyati": 69,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/5/550/9686736961586.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/13/550/9174845718578.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 45,
      "urunAdi": "Basketbol Topu",
      "urunAciklamasi": "Basketbol eğlencenize kaliteli bir yaşam stili katın.",
      "urunKategorisi": "Spor",
      "urunFiyati": 349,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/107/550/110000050731493.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/107/550/110000051162469.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 46,
      "urunAdi": "Antrenman Seti",
      "urunAciklamasi": "Spora ilk adım için idealdir.",
      "urunKategorisi": "Spor",
      "urunFiyati": 399,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/159/550/110000117175616.jpg/format:webp"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 47,
      "urunAdi": "Kaleci Eldiveni",
      "urunAciklamasi": "Kalecilik antrenmanları için birebir üründür.",
      "urunKategorisi": "Spor",
      "urunFiyati": 199,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/19/550/9840967516210.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 48,
      "urunAdi": "Bisiklet",
      "urunAciklamasi": "Şehri turlamak için dizayn edilmiştir.",
      "urunKategorisi": "Spor",
      "urunFiyati": 3199,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/262/550/110000246440613.jpg/format:webp"
      ],
      "kampanyalar": ["2.ürün 1 TL"],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 49,
      "urunAdi": "Pilates Matı",
      "urunAciklamasi": "Pilates yaparken vücudunuzu kazalardan koruyun.",
      "urunKategorisi": "Spor",
      "urunFiyati": 299,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/309/550/110000301971712.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/309/550/110000301971713.jpg/format:webp"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 50,
      "urunAdi": "KİDOL Ozel Sayı Blackpınk - Pınk Venom KDLOZL01",
      "urunAciklamasi": "K-POP dergisi.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 39,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty539/product/media/images/20220923/22/178997689/576020722/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 51,
      "urunAdi": "TEK Ingilizce Başına 1",
      "urunAciklamasi": "İngilizceye başlangıç kitabı.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 25,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty353/product/media/images/20220308/20/65623266/409303838/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 52,
      "urunAdi": "Sola Unitas Seninle Başlamadı",
      "urunAciklamasi": "Bilinçaltınıza bir yolculuk.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 65,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 53,
      "urunAdi": "EMC YAYINCILIK Essential Grammar In Use+ Supplementary Exercises With Answers And Cd hSEE",
      "urunAciklamasi": "İngilizce öğrenenler için dünyanın en çok satan kitabı.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 150,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty479/product/media/images/20220715/0/141844207/521477781/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 54,
      "urunAdi": "Vazgeçilmez Olmanın Sırrı - Esra Ezmeci",
      "urunAciklamasi": "İlişkilerinizde daha iyi olmaya dair bir kitap.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 64.5,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty563/product/media/images/20221014/16/193500290/596408204/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 55,
      "urunAdi": "Sırlarımız Kadar Hastayız & Resetting Metoduyla Şifa Yolculuğu",
      "urunAciklamasi": "Kişisel gelişim kitabı.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 74.5,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty322/product/media/images/20220204/14/43693437/364278275/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 56,
      "urunAdi": "OXFORD UNIVERSITY PRESS",
      "urunAciklamasi": "İngilizce kelimelerin gücüne dair popüler bir kitap.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 74.5,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty469/product/media/images/20220707/16/136559135/433190932/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 57,
      "urunAdi": "Turkuvaz Kukuli Ile Yapıştır Tamamla",
      "urunAciklamasi": "Çocuklar için eğlenceli ve öğretici niteliği taşıyan bir kitap.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 19.9,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty395/product/media/images/20220411/19/88567295/444684121/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 58,
      "urunAdi": "LCF Bobo 3'lü Ingilizce Sesli Hikaye Seti 1",
      "urunAciklamasi": "İngilizce kulağınızı geliştirin.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 66.54,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty455/product/media/images/20220616/13/126298299/500951968/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 59,
      "urunAdi": "Kuranı Kerim 7 Özellikli Arapça Satır Arası Türkçe Okunuş Kelime Anlamı Meal Tecvidli Cami Boy",
      "urunAciklamasi": "Kutsal kitabın anlatmak istediklerini öğrenin.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 144.99,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty519/product/media/images/20220901/13/168030065/148580953/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 60,
      "urunAdi": "TEK Almanca Başına ALMANCA KİTAP",
      "urunAciklamasi": "Almanca'ya başlangıç kitabı.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 25.45,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty352/product/media/images/20220308/20/65623398/409304019/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 61,
      "urunAdi": "Dilek Cesur-bu Kitap Annelere Çok Iyi Gelecek TEK EBAT",
      "urunAciklamasi": "Ebeveynler için çocuk eğitimine dair bir kitap.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 87.89,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty616/product/media/images/20221201/10/225307677/636625858/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 62,
      "urunAdi": "Esra Ezmeci Seti 5 Kitap Takım - Defter",
      "urunAciklamasi": "Esra Ezmeci'nin 5 kitabının bir arada olduğu set.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 250,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty587/product/media/images/20221104/16/207572198/290939885/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 63,
      "urunAdi": "Bir Psikiyatristin Gizli Defteri & En Sıradış",
      "urunAciklamasi": "Dr.Gray Small'ın hastalarına dair kitap.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 68,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty137/product/media/images/20210624/21/104108936/9729872/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 64,
      "urunAdi": "Hayvan Çiftliği - George Orwell",
      "urunAciklamasi": "George Orwell’in modern klasikler arasına girmiş ikinci ünlü romanı ve çarpıcı bir politik taşlamadır.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 19.49,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty169/product/media/images/20210903/18/125634694/5703095/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 65,
      "urunAdi": "Fono Yayınları Uygulamalı Almanca Dilbilgisi",
      "urunAciklamasi": "Almanca dilbilginizi geliştirin.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 178,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty61/product/media/images/20210127/3/57524762/134691389/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 66,
      "urunAdi": "Vazgeçilmez Olmanın Sırrı + Iz Bıraktığın Kadar Varsın / Defter Hediyeli 2 Kitap Set",
      "urunAciklamasi": "İlişklere dair kişisel gellişim kitabı.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 139.5,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty650/product/media/images/20221217/11/239674559/652481383/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 67,
      "urunAdi": "Venedik Yayınları Büyükler Için Mandala Boyama Kitabı Renklerin Terapisi",
      "urunAciklamasi": "Renklerin Terapisiyle İç Huzurun Sesini Dinleyin!",
      "urunKategorisi": "Kitap",
      "urunFiyati": 29,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty585/product/media/images/20221103/17/206739829/69824133/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 68,
      "urunAdi": "Çocuklar Ve Alerji ",
      "urunAciklamasi": "Çağımızın hastalıklarından biri olan alerjinin görülme sıklığı her geçen gün biraz daha artıyor.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 69,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty20/product/media/images/20201104/20/22469165/17106582/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 69,
      "urunAdi": "Dikkat Kaygan Zemin! - Kral Şakir",
      "urunAciklamasi": "Çocuklar için eğlence dolu bir kitap !",
      "urunKategorisi": "Kitap",
      "urunFiyati": 25,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty615/product/media/images/20221130/11/224765679/635932160/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 70,
      "urunAdi": "Kuranı kerim orta boy",
      "urunAciklamasi": "Kutsal kitabın hakiki arapça versiyonu.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 75,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty342/product/media/images/20220224/15/57988095/109035377/2/2_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 71,
      "urunAdi": "Literart Yayınları Literart Ingilizce Klasik Roman 5'li Set 8",
      "urunAciklamasi": "İngilizce bilginizi geliştirirken genel kültürünüzü de geliştirin.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 127,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty4/product/media/images/20200514/14/1274445/71091726/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 72,
      "urunAdi": "Her Güne Bir Soru: 5 Yıllık Günlük (Ciltli - Cep Boy)",
      "urunAciklamasi": "Bu günlük size hayatınızın beş yılı boyunca aklınızdan ne geçtiğini gün gün gösteriyor.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 139,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty480/product/media/images/20220716/8/142481382/14728747/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 73,
      "urunAdi": "Bilinmeyen Bir Kadının Mektubu (Karton Kapak)",
      "urunAciklamasi": "'Sana, beni asla tanımamış olan sana'",
      "urunKategorisi": "Kitap",
      "urunFiyati": 18,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty224/product/media/images/20211103/7/164362640/6034537/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 74,
      "urunAdi": "Yapı Kredi Yayınları Kürk Mantolu Madonna",
      "urunAciklamasi": "Tekrar Tekrar Okuyacağınız Sarsıcı Aşk Hikayesine Hazır Olun!",
      "urunKategorisi": "Kitap",
      "urunFiyati": 19,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty539/product/media/images/20220921/6/177757449/5703074/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 75,
      "urunAdi": "Psikonet Yayınları Iyi Hissetmek - David Burns",
      "urunAciklamasi": "Bilişsel Davranışçı Terapi uygulamaları içeren bir self-help kitabıdır.",
      "urunKategorisi": "Kitap",
      "urunFiyati": 84,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/ty652/product/media/images/20221218/23/241116982/6033850/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 76,
      "urunAdi": "Kışlık Mont",
      "urunAciklamasi": "Polarlı yapısı sayesinde soğuğu asla hissetmeyeceksiniz.",
      "urunKategorisi": "Moda",
      "urunFiyati": 2199,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://contents.mediadecathlon.com/p2310069/k$8747f02245f6f84e7c7fd06f348ac225/sq/montlar.jpg?format=auto&f=800x0",
        "https://contents.mediadecathlon.com/p2056859/k$c3996442726581557d221e7c09af9238/sq/yagmurluklar-ve-pancolar.jpg?format=auto&f=800x0"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 77,
      "urunAdi": "Erkek Gömlek",
      "urunAciklamasi": "Modern toplumun simgelerinden birisi olan gömlek ile tarzınızı yansıtın.",
      "urunKategorisi": "Moda",
      "urunFiyati": 999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://st-tommy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mw0mw283250gz-oxford-fil-coupe-casual-gomlek-638035889064386130.jpg",
        "https://st-tommy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mw0mw29164xit-flex-natural-soft-casual-gomlek-638053101271223966.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 78,
      "urunAdi": "Bayan Gömlek",
      "urunAciklamasi": "Kırmızı renkli bayan gömlek. Farklı bedenler mevcuttur",
      "urunKategorisi": "Moda",
      "urunFiyati": 799,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://wwwi.globalpiyasa.com/lib/Urun/670/a4f872151f908639ade0d97a11e2b97e_1.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 79,
      "urunAdi": "Kot Pantolon",
      "urunAciklamasi": "Bay ve bayan için kot pantolon. Farklı çeşitleri ve beden seçenekleri bulunmaktadır",
      "urunKategorisi": "Moda",
      "urunFiyati": 599,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://sarar.com/sarar-paladium-kot-pantolon-8205-denim-pantolon-sarar-15763-82-B.jpg",
        "https://sarar.com/sarar-premium-paladium-mavi-kot-pantolon-5560-denim-pantolon-sarar-premium-6768-55-B.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 80,
      "urunAdi": "Kumaş Pantolon",
      "urunAciklamasi": "Bay ve bayan için farklı modeller, bedenler ve çeşitler mevcuttur",
      "urunKategorisi": "Moda",
      "urunFiyati": 749,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://vakko-wcollection.akinoncdn.com/products/2021/04/20/1041313/e379c677-8e71-4c7f-b893-03ac577cf22d_size737x905.jpg",
        "https://www.jakamen.com.tr/Uploads/UrunResimleri/thumb/klasik-kalip---regular-fit-bedenli-pan-9-4133.jpg"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 81,
      "urunAdi": "Kapşonlu Sweatshirt",
      "urunAciklamasi": "Unisex kapuşonlu fermuarlı sweatshirt, farklı renkler mevcuttur.",
      "urunKategorisi": "Moda",
      "urunFiyati": 444,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://www.zepplingiyim.com/designer/product_images/canvas/11441-14984-1-canvas.jpg?upd=2021-06-26%2014:58:58"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 82,
      "urunAdi": "Şapka",
      "urunAciklamasi": "Farklı renkler mevcuttur. Kadın ve Erkekler kullanabilir.",
      "urunKategorisi": "Moda",
      "urunFiyati": 99,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/18/600-800/9794706702386.jpg"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 83,
      "urunAdi": "Çorap Çeşitleri",
      "urunAciklamasi": "Bay ve bayanlar için farklı desenli renkli çorap çeşitleri mevcuttur.",
      "urunKategorisi": "Moda",
      "urunFiyati": 59,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://ktnimg2.mncdn.com/products/2022/06/19/2458439/11c50a0a-f67d-432b-8f88-448206b2a03c.jpg",
        "https://cdn.dsmcdn.com/ty51/product/media/images/20210112/7/51680516/66607859/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 84,
      "urunAdi": "Güneş Gözlüğü",
      "urunAciklamasi": "Bay ve bayanlar için güneş gözlüğü.",
      "urunKategorisi": "Moda",
      "urunFiyati": 399,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://productimages.hepsiburada.net/s/36/1500/10500750934066.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 85,
      "urunAdi": "Eşofman Takımı",
      "urunAciklamasi": "Unisex eşofman takımı. Farklı renkleri mevcuttur",
      "urunKategorisi": "Moda",
      "urunFiyati": 999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/585841/01/fnd/TUR/w/1000/h/1000/fmt/png",
        "https://productimages.hepsiburada.net/s/104/600-800/110000047847246.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 86,
      "urunAdi": "Kadın Çanta",
      "urunAciklamasi": "Kadın çanta. Farklı renkleri mevcuttur.",
      "urunKategorisi": "Moda",
      "urunFiyati": 999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty647/product/media/images/20221214/15/237521796/649589565/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 87,
      "urunAdi": "1:16 Efsane Drift Uzaktan Kumandalı Şarjlı Tofaş Araba",
      "urunAciklamasi": "Şık tasarım ve ince detayları ile gerçekçi bir görünüme sahiptir.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 359,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty142/product/media/images/20210708/21/108439787/199532971/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty141/product/media/images/20210708/21/108439787/199532971/4/4_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 88,
      "urunAdi": "Solar Enerjili Kendin Yap Maket - Solar Rüzgar Türbini",
      "urunAciklamasi": "Solar Güneş Pili ile ya da 3,7 V 18650 Li-Ion Pil ile çalışan Rüzgar Türbini. Kendin Yap Solar Rüzgar Türbini.USB şarj kablosu ile pilini şarj edebilirsiniz.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 499,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty107/product/media/images/20210426/17/83140494/134314242/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty107/product/media/images/20210426/17/83140494/134314242/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "4 yıl" }
    },
    {
      "urunID": 89,
      "urunAdi": "Ks Yılbaşı Tombala KSGT40",
      "urunAciklamasi": "S Yılbaşı Tombala Ailenizle veya arkadaşlarınızla beraber eğlenceli vakit geçirmenin en kolay yolu Tombala. Büyük küçük herkesin ortak noktası 7 den 70'e bir arada yaş sınırı olmadan oynanan oyun.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 99,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty281/product/media/images/20211229/12/18076368/10533152/1/1_org_zoom.jpg"
      ],
      "kampanyalar": ["Kargo Bedava"],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 90,
      "urunAdi": "Animasyonlu Tak Çalıştır Kumandalı Rgb Şerit Işık Aydınlatma 5 Metre-yapışkan Set Ultra Pixel ",
      "urunAciklamasi": "Silikonlu şerit led 4 mod (strobe, fade, smooth, flash) kumanda ile renkleri değiştirebilir, istediğiniz moda geçebilir.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 89,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty466/product/media/images/20220703/20/134620142/455982651/4/4_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty467/product/media/images/20220703/20/134620142/455982651/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 91,
      "urunAdi": "Bonitagift 3d Geyikli Işıklı Cam Küre",
      "urunAciklamasi": "Doğum günleri için birebir.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 49,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty270/product/media/images/20211216/15/12224181/339323778/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "1 yıl" }
    },
    {
      "urunID": 92,
      "urunAdi": "Bimotif Paket Ipi, Kırmızı-beyaz 20 Metre",
      "urunAciklamasi": "İki renkli pamuklu paket ipi.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 39,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty532/product/media/images/20220913/23/175015823/568916182/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 93,
      "urunAdi": "Tarot Konuşan Dişil Eril Kartları Konuşan",
      "urunAciklamasi": "Tarot kartları.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 150,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty650/product/media/images/20221217/16/239995636/652643626/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty648/product/media/images/20221217/16/239995636/652643626/6/6_org_zoom.jpg"
      ],
      "kampanyalar": ["Kargo Bedava", "2.ürün 1 TL"],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 94,
      "urunAdi": "Akrilik Boya 140ml Beyaz 3619 ",
      "urunAciklamasi": "Beyaz akrilik boya.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 15,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty629/product/media/images/20221208/5/230495221/506386755/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 95,
      "urunAdi": "E58 4k Hd Kameralı Fly More Combo Drone Otomatik Kalkış Iniş Sabit Durma Özellikli ADNE58",
      "urunAciklamasi": "4K HD kameralı drone.",
      "urunKategorisi": "Hobi",
      "urunFiyati": 1999,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty327/product/media/images/20220211/0/48278561/22166128/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty327/product/media/images/20220211/0/48278561/22166128/4/4_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 96,
      "urunAdi": "CAPTIVATING MEMORIES VIBRANCY ADVENTURES 100 ML",
      "urunAciklamasi": "Liçi, elma, limon ve sedir ağacı notalarından oluşan koku.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 399,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://static.zara.net/photos///2022/I/2/1/p/0120/522/999/2/w/850/0120522999_6_1_1.jpg?ts=1669652622101",
        "https://static.zara.net/photos///2022/I/2/1/p/0120/522/999/2/w/850/0120522999_6_3_1.jpg?ts=1669652617886"
      ],
      "kampanyalar": ["2.ürün 1 TL"],
      "garanti": { "turu": "İthalatçı", "sure": "4 yıl" }
    },
    {
      "urunID": 97,
      "urunAdi": "VIBRANT LEATHER 100 ML",
      "urunAciklamasi": "Vibrant Leather, odunsu notaların pasifik ve romantik yanıyla derinin canlılığı ve yoğunluğu arasındaki dengedir.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 499,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://static.zara.net/photos///2022/I/2/2/p/0210/581/999/2/w/850/0210581999_6_1_1.jpg?ts=1663836764574",
        "https://static.zara.net/photos///2022/I/2/2/p/0210/581/999/2/w/850/0210581999_6_3_1.jpg?ts=1663836768445"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    },
    {
      "urunID": 98,
      "urunAdi": "La Roche Posay Lipikar Baume Ap+m Nemlendirici 400 mL",
      "urunAciklamasi": "Kuru ciltler için nemlendirici.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 429,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/415/622/ty15/product/media/images/20210615/15/10000000/20000000/20000000_1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 99,
      "urunAdi": "Toleriane Teint Compact Mineral Pudra Fondöten-Orta Karma/Yağlı Ciltler",
      "urunAciklamasi": "Karma ve yağlı ciltler için pudra fondöten.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 560,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty2/product/media/images/20200409/12/1469715/5431213/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 100,
      "urunAdi": "Revox At Kuyruğu Bitki Özlü Saç Dökülmelerine Karşı Çok Etkili Şampuan 2 Li Set 400 mL",
      "urunAciklamasi": "Saç dökülmesine karşı etkili şampuan.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 122,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty212/product/media/images/20211027/12/157603827/233650849/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 101,
      "urunAdi": "Mara Nude Oje Seti 15 Adet",
      "urunAciklamasi": "Mara Nude Oje Seti 15 Adet",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 150,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty297/product/media/images/20220118/16/27943600/360292040/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "3 yıl" }
    },
    {
      "urunID": 102,
      "urunAdi": "Sesu Yüz Sir Ağda Bandı Hassas Ciltler 20'li",
      "urunAciklamasi": "Yüz bölgesi ve hassas ciltler için ağda bandı.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 49,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty430/product/media/images/20220512/10/109743097/56566254/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "Distribütör", "sure": "2 yıl" }
    },
    {
      "urunID": 103,
      "urunAdi": "ach3 Start Tıraş Bıçağı Yedek Başlığı 4 Adet",
      "urunAciklamasi": "Tıraş bıçağı yedek başlığı.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 129,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty321/product/media/images/20220204/20/44300282/380616218/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "2 yıl" }
    },
    {
      "urunID": 104,
      "urunAdi": "Max Factor Ruj - Moisture Kiss Lipstick 030 Rosewood",
      "urunAciklamasi": "En sevdiğiniz ruj şimdi premium bir görünüm ile!",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 99,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty97/product/media/images/20210404/09/8109f9aa/57655883/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "1 yıl" }
    },
    {
      "urunID": 105,
      "urunAdi": "Ithal Ayaklı Ve Ozonlu Yüz Buhar Makinesi Sıcak Vapozon",
      "urunAciklamasi": "Yoğun buharı sayesinde ciltteki gözenekleri açarak cildin bakıma hazır hale gelmesini sağlar.",
      "urunKategorisi": "Kozmetik",
      "urunFiyati": 1489,
      "urunIndirim": false,
      "urunIndirimTutari": 0,
      "urunFotograflari": [
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty510/product/media/images/20220819/13/162782951/547880721/1/1_org_zoom.jpg"
      ],
      "kampanyalar": [],
      "garanti": { "turu": "İthalatçı", "sure": "3 yıl" }
    }
  ]





  private category: Category[] = [

      {
        "kategori_id": 0,
        "kategori_ismi": "Elektronik",
        "kategori_aciklamasi": "Bilgisayar, Yazıcı, Cep Telefonu, Beyaz Eşya ve Elektrikli Ev Aletleri gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 1,
        "kategori_ismi": "Moda",
        "kategori_aciklamasi": "Kadınlar ve Erkekler için Elbise, Pantolon, Mont, Gömlek, Bluz gibi kıyafetlerin bulunduğu kategori"
      },
      {
        "kategori_id": 2,
        "kategori_ismi": "Ev ve Kırtasiye",
        "kategori_aciklamasi": "Ev için tava, tencere, yemek takımları ve kırtasiye ürünleri gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 3,
        "kategori_ismi": "Bahçe",
        "kategori_aciklamasi": "Bahçe içerisinde kullanılabileceğiniz dekorasyon, bitki bakımı ve mangal gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 4,
        "kategori_ismi": "Bebek ve Oyuncak",
        "kategori_aciklamasi": "Bebekler için mamalar, bezler, bakım ürünleri ve oyuncaklar gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 5,
        "kategori_ismi": "Spor",
        "kategori_aciklamasi": "Sporda kullanabileceğiniz ayakkabı, giyim ve aksesuarlar gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 6,
        "kategori_ismi": "Kozmetik",
        "kategori_aciklamasi": "Cildinizi, saçlarınızı ve vücudunuzu güzelleştirecek bakım ürünleri gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 7,
        "kategori_ismi": "Hobi",
        "kategori_aciklamasi": "İstediğiniz Müzik ve Film gibi ürünlerin bulunduğu kategori"
      },
      {
        "kategori_id": 8,
        "kategori_ismi": "Kitap",
        "kategori_aciklamasi": "Okumaktan zevk alacağınız dilediğiniz yazara ait kitapların bulunduğu kategori"
      }

  ]
  getCategory(): Category[] {
    return this.category.filter(p=>p);
}
     getProducts(): Product[] {
        return this.products.filter(p=>p);
    }

    getProductById(id: number) {
      return this.products.find(p => p.urunID == id);
  }
  getProductsByCategoryId(kategori_ismi: string): Product[] {
    return this.products.filter(p=>p.urunKategorisi == kategori_ismi);
}
}
