# Google qidiruviga chiqarish

Asosiy manzil hozir `https://nuraddinov-uz.vercel.app`. Domen ulanganligi
tasdiqlanmaguncha canonical manzilni `nuraddinov.uz` ga almashtirmang.

## Nashrdan keyin

1. O'zgarishlarni production saytga deploy qiling.
2. [Google Search Console](https://search.google.com/search-console) ichida
   `https://nuraddinov-uz.vercel.app/` uchun **URL prefix** property yarating.
3. HTML tag tasdiqlash usulidagi `content` qiymatini Vercel loyihasining
   `GOOGLE_SITE_VERIFICATION` environment variable qiymatiga kiriting.
   Qayta deploy qiling va Search Console'da **Verify** tugmasini bosing.
   DNS orqali avval tasdiqlangan property bo'lsa, bu qadam kerak emas.
4. **Sitemaps** bo'limiga `sitemap.xml` yuboring.
5. **URL Inspection** orqali `/`, `/about`, `/projects`, `/contact` manzillarini
   tekshirib, zarur bo'lsa **Request indexing** bosing.
6. **Pages** hisobotida indekslanish holatini, **Performance** hisobotida
   `Nuraddinov Sarvarbek` va `Sarvarbek Nuraddinov` so'rovlarini kuzating.

GitHub va LinkedIn profilingizning sayt maydoniga asosiy manzilni kiriting.
Loyihalarda muallif sifatida ko'rsatiladigan tabiiy havolalar ham foydali.
Har loyiha haqida haqiqiy muammo, yechim va natijalarni yozish kontentni boyitadi;
sun'iy kalit so'zlar yoki sotib olingan havolalardan foydalanmang.

## Domen o'zgarsa

Avval domenni hostingga ulang va HTTPS orqali ochilishini tekshiring.
`lib/socials.ts` dagi `SITE_URL` va `app/opengraph-image.tsx` dagi ko'rinadigan
domen yozuvini yangilang. Hostingda eski domendan yangi domenga yo'lni saqlovchi
doimiy redirect sozlang. Yangi domenni Search Console'da tasdiqlab, uning
sitemap faylini yuboring. Canonical, robots va sitemap `SITE_URL` dan foydalanadi.

## Chegaralar

Til tanlovi localStorage'da saqlanadi; alohida til URLlari yo'q. Boshlang'ich
HTML va SEO matnlari o'zbekcha. Boshqa tillarni mustaqil indekslatish uchun
alohida til URLlari va ularga mos metadata/hreflang kerak bo'ladi.

Search Console tasdiqlash kodi va hisobga kirishsiz saytni foydalanuvchi
nomidan tasdiqlash yoki indekslash so'rovini yuborish mumkin emas.
SEO birinchi o'rinni yoki indekslanishni kafolatlamaydi; natija vaqt talab qiladi.

Manbalar:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/appearance/site-names
