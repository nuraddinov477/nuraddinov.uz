export type Lang = "uz" | "ru" | "en" | "zh";

export const translations = {
  uz: {
    nav: {
      about: "Men haqimda",
      experience: "Tajriba",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, men",
      name: "Nuraddinov Sarvarbek",
      title: "Full-stack & AI dasturchi",
      subtitle: "Ta'lim va biznes uchun sun'iy intellektga asoslangan veb-tizimlar quraman — g'oyadan ishlaydigan mahsulotgacha",
      cta: "Loyihalarni ko'rish",
      contact: "Bog'lanish",
      roles: ["Full-stack dasturchi", "AI tizimlar muhandisi", "TDShU talabasi"],
      stats: {
        projects: "loyiha",
        live: "jonli sayt",
        orgs: "tashkilot",
        years: "yillik tajriba",
      },
    },
    about: {
      title: "Men haqimda",
      description:
        "Men — Nuraddinov Sarvarbek Muzaffar o'g'li, Toshkent davlat sharqshunoslik universiteti talabasi va full-stack & AI dasturchiman. Ta'lim va biznes uchun sun'iy intellektga asoslangan tizimlar quraman: universitet dars jadvalidan tortib maktab diagnostikasi va konsalting ERP'sigacha.",
      description2:
        "TDShU, Firdavs School va RESTA konsalting kompaniyasi uchun tizimlar ishlab chiqqanman. Backend'da FastAPI va Django, frontend'da React va Next.js, AI qismida Claude va Gemini API bilan ishlayman. Jarayonlarni Telegram botlar va Google Sheets orqali avtomatlashtiraman.",
      location: "Joylashuv",
      locationValue: "Toshkent, O'zbekiston",
      experience: "Tajriba",
      experienceValue: "2+ yil",
      education: "Ta'lim",
      educationValue: "TDShU, talaba",
      status: "Holat",
      statusValue: "Ishga ochiq",
      nowTitle: "Hozir ustida ishlayapman",
      now: [
        "SmartJadval 2.0 — jadval tizimini FastAPI'da qayta yozish (TDShU)",
        "«Turkiy yozma meros — 2026» xalqaro ilmiy yig'ini sayti",
        "Lora — Claude asosidagi shaxsiy AI yordamchi",
      ],
    },
    experience: {
      title: "Tajriba",
      subtitle: "Kimlar bilan va nima ustida ishlaganman",
      present: "hozir",
      months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
      monthYear: "{m} {y}",
      visit: "Loyihani ochish",
      items: {
        tdshu: {
          role: "Full-stack & AI dasturchi",
          org: "Toshkent davlat sharqshunoslik universiteti",
          summary: "Universitet uchun dars jadvali tizimi va xalqaro ilmiy anjuman sayti.",
          points: [
            "SmartJadval — fakultet, kafedra, o'qituvchi, guruh va xonalarni bitta tizimda boshqaradigan dars jadvali platformasi",
            "To'qnashuvsiz jadval tuzish dvigateli: DSATUR va simulated annealing algoritmlari, alohida jarayonda ishlaydi",
            "AI yordamchi (Claude / Gemini) oddiy tildagi buyruqlarni jadval sozlamalariga aylantiradi",
            "Backend'ni Node.js'dan FastAPI'ga ko'chirdim; jadval PDF, Word va Excel'ga eksport qilinadi",
            "«Turkiy yozma meros — 2026» xalqaro ilmiy yig'ini uchun 3 tilli sayt (Flask)",
          ],
        },
        firdavs: {
          role: "Full-stack dasturchi",
          org: "Firdavs School",
          summary: "Xususiy maktab uchun diagnostika, imtihon va qabul tizimlari.",
          points: [
            "Boshqaruv paneli: 7 ta rol, huquqlar matritsasi, savollar bazasi va Cambridge/IELTS uslubidagi hisobotlar",
            "Bilim Check-Up: qog'ozdagi javoblar skanerlanadi, Gemini AI har bir o'quvchiga alohida PDF/DOCX hisobot yozadi",
            "Qabul uchun Telegram bot: arizalar Google Sheets'ga tushadi, adminlar holatni tugma bilan yangilaydi",
          ],
        },
        resta: {
          role: "AI tizimlar dasturchisi",
          org: "RESTA — konsalting kompaniyasi",
          summary: "Konsalting biznesi uchun AI-first boshqaruv tizimi va kompaniya sayti.",
          points: [
            "5 ta Claude AI agenti: protokolchi, diagnostika, copilot, hisobotchi va rahbar xulosachisi",
            "Klientlar, loyihalar, uchrashuvlar va vazifalar uchun web panel: rollar va health score dashboard",
            "Telegram bot (aiogram) hamda KPI va ROI hisobotlarini DOCX'ga eksport qilish",
            "resta.uz kompaniya landing sahifasi",
          ],
        },
        independent: {
          role: "Mustaqil loyihalar",
          org: "Shaxsiy va ochiq kodli ishlar",
          summary: "Til o'rganish platformalari, ilmiy korpus va avtomatlashtirish botlari.",
          points: [
            "HSKGo va Xitoy tili — HSK 1–9 darajalari bo'yicha xitoy tili platformalari",
            "Turkiy yozma yodgorliklar elektron korpusi: konkordans, xarita va 4 tilli interfeys",
            "Telegram botlar: avtomoyka hisoboti va anonim xabarlar (Google Sheets + Apps Script)",
            "Lora — Claude asosidagi shaxsiy AI yordamchi",
          ],
        },
        education: {
          role: "Talaba",
          org: "Toshkent davlat sharqshunoslik universiteti",
          summary: "Sharqshunoslik bo'yicha bilimlarimni dasturlash bilan birlashtiraman: xitoy tili va turkiy yozma yodgorliklarga oid loyihalarim shu yo'nalishda.",
          points: [],
        },
      },
    },
    skills: {
      title: "Ko'nikmalar",
      subtitle: "Real loyihalarda ishlatgan texnologiyalarim",
      legend: "Raqam — shu texnologiya ishlatilgan loyihalar soni",
      also: "Shuningdek tanishman",
      categories: {
        ai: "AI va LLM",
        backend: "Backend",
        frontend: "Frontend",
        automation: "Avtomatlashtirish",
      },
    },
    projects: {
      title: "Loyihalar",
      subtitle: "Jonli ishlaydigan loyihalarim — ustiga bosib ochib ko'ring",
      viewCode: "Kodni ko'rish",
      viewDemo: "Saytni ochish",
      viewAll: "Barcha loyihalar GitHub'da",
      filters: {
        all: "Barchasi",
        ai: "AI",
        edtech: "Ta'lim",
        language: "Tillar",
        business: "Biznes",
      },
      items: {
        smartjadval: {
          title: "SmartJadval",
          description:
            "Toshkent davlat sharqshunoslik universiteti uchun dars jadvali tizimi. DSATUR va simulated annealing asosidagi dvigatel jadvalni to'qnashuvsiz tuzadi, AI yordamchi oddiy tildagi buyruqlarni tushunadi, jadval PDF, Word va Excel'ga eksport qilinadi.",
        },
        bilim: {
          title: "Bilim Check-Up",
          description:
            "Firdavs School uchun diagnostik imtihon platformasi: o'quvchilar qog'ozda javob yozadi, admin skanerlab yuklaydi, Gemini AI har bir o'quvchi uchun alohida PDF/DOCX hisobot tayyorlaydi.",
        },
        resta: {
          title: "RESTA ERP",
          description:
            "Konsalting kompaniyasi uchun AI-first boshqaruv tizimi: 5 ta Claude agenti uchrashuv protokollari, diagnostika va KPI/ROI hisobotlarini tayyorlaydi. Web panel va Telegram bot bilan.",
        },
        turkiy: {
          title: "Turkiy Yozma Yodgorliklar Korpusi",
          description:
            "O'rta asrlar turkiy yozma merosini o'rganish uchun ilmiy elektron korpus: 17 ta yodgorlik, 110 000+ so'z, interaktiv xarita, vaqt o'qi, konkordans va statistika. 4 tilda (UZ / RU / EN / TR).",
        },
        firdavs: {
          title: "Firdavs school — Boshqaruv paneli",
          description:
            "Maktab diagnostika tizimining boshqaruv paneli: 7 ta rol va huquqlar matritsasi, o'quvchilar, savollar bazasi va Cambridge/IELTS uslubidagi hisobotlar. Demo hisoblar bilan kirib ko'rish mumkin.",
        },
        hskgo: {
          title: "HSKGo",
          description:
            "HSK 1–9 darajalariga tayyorlanish uchun xitoy tili platformasi: 11 000+ so'z, 3 000+ ieroglif, tinglash, o'qish, chiziq tartibida yozish va talaffuzni baholash modullari.",
        },
        xitoy: {
          title: "Xitoy tili — HSK",
          description:
            "Xitoy tilini o'rganish uchun platforma: HSK 1–2 darajalari bo'yicha 20 ta mavzu, 370+ so'z, grammatika qoidalari va namunaviy gaplar.",
        },
        portfolio: {
          title: "Portfolio Sayt",
          description:
            "Shu sayt — Next.js va Tailwind CSS'da, 4 tilli (UZ / RU / EN / ZH), tajriba vaqt chizig'i va loyihalar filtri bilan.",
        },
        kitoblar: {
          title: "Kitoblar Dunyosi",
          description:
            "O'zbek va jahon adabiyoti kitoblari uchun onlayn kutubxona platformasi. Kitob qidirish, ko'rish va to'plam yaratish imkoniyatlari mavjud.",
        },
        adabiyot: {
          title: "O'zbek Adabiyoti — Sharq Tillari",
          description:
            "O'zbek adabiyoti va sharq tillari (arab, fors, turk) bo'yicha ma'lumot va resurslar to'plami. Ta'lim maqsadida yaratilgan veb sayt.",
        },
      },
    },
    contact: {
      title: "Aloqa",
      subtitle: "Menga xabar yuboring",
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "Email manzilingiz",
      messagePlaceholder: "Xabaringiz...",
      send: "Yuborish",
      sent: "Yuborildi!",
      orConnect: "Yoki ijtimoiy tarmoqlar orqali",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan",
      madeWith: "Yaratildi",
      by: "tomonidan",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакт",
    },
    hero: {
      greeting: "Привет, я",
      name: "Нураддинов Сарварбек",
      title: "Full-stack & AI разработчик",
      subtitle: "Создаю веб-системы на базе ИИ для образования и бизнеса — от идеи до работающего продукта",
      cta: "Смотреть проекты",
      contact: "Написать мне",
      roles: ["Full-stack разработчик", "Инженер AI-систем", "Студент ТашГУВ"],
      stats: {
        projects: "проектов",
        live: "работающих сайтов",
        orgs: "организации",
        years: "года опыта",
      },
    },
    about: {
      title: "Обо мне",
      description:
        "Я — Нураддинов Сарварбек Музаффар угли, студент Ташкентского государственного университета востоковедения и full-stack & AI разработчик. Создаю системы на базе ИИ для образования и бизнеса: от расписания занятий в университете до школьной диагностики и ERP для консалтинга.",
      description2:
        "Разрабатывал системы для ТашГУВ, Firdavs School и консалтинговой компании RESTA. На бэкенде работаю с FastAPI и Django, на фронтенде — с React и Next.js, в части ИИ — с Claude и Gemini API. Автоматизирую процессы с помощью Telegram-ботов и Google Sheets.",
      location: "Местоположение",
      locationValue: "Ташкент, Узбекистан",
      experience: "Опыт",
      experienceValue: "2+ года",
      education: "Образование",
      educationValue: "ТашГУВ, студент",
      status: "Статус",
      statusValue: "Открыт к работе",
      nowTitle: "Сейчас работаю над",
      now: [
        "SmartJadval 2.0 — переписываю систему расписания на FastAPI (ТашГУВ)",
        "Сайт международной научной конференции «Тюркское письменное наследие — 2026»",
        "Lora — личный AI-ассистент на базе Claude",
      ],
    },
    experience: {
      title: "Опыт",
      subtitle: "С кем и над чем я работал",
      present: "сейчас",
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthYear: "{m} {y}",
      visit: "Открыть проект",
      items: {
        tdshu: {
          role: "Full-stack & AI разработчик",
          org: "Ташкентский государственный университет востоковедения",
          summary: "Система расписания занятий для университета и сайт международной научной конференции.",
          points: [
            "SmartJadval — платформа расписания, объединяющая факультеты, кафедры, преподавателей, группы и аудитории",
            "Движок составления расписания без накладок: алгоритмы DSATUR и simulated annealing в отдельном процессе",
            "AI-ассистент (Claude / Gemini) превращает команды на естественном языке в настройки расписания",
            "Перенёс бэкенд с Node.js на FastAPI; экспорт расписания в PDF, Word и Excel",
            "Трёхъязычный сайт международной конференции «Тюркское письменное наследие — 2026» (Flask)",
          ],
        },
        firdavs: {
          role: "Full-stack разработчик",
          org: "Firdavs School",
          summary: "Системы диагностики, экзаменов и приёма для частной школы.",
          points: [
            "Панель управления: 7 ролей, матрица прав, база вопросов и отчёты в стиле Cambridge/IELTS",
            "Bilim Check-Up: бумажные ответы сканируются, Gemini AI пишет каждому ученику отдельный отчёт в PDF/DOCX",
            "Telegram-бот для приёма: заявки попадают в Google Sheets, админы меняют статус кнопками",
          ],
        },
        resta: {
          role: "Разработчик AI-систем",
          org: "RESTA — консалтинговая компания",
          summary: "AI-first система управления для консалтингового бизнеса и сайт компании.",
          points: [
            "5 AI-агентов на Claude: протоколист, диагностика, копилот, отчётчик и сводка для руководителя",
            "Веб-панель для клиентов, проектов, встреч и задач: роли и дашборд health score",
            "Telegram-бот (aiogram) и экспорт KPI/ROI-отчётов в DOCX",
            "Лендинг компании resta.uz",
          ],
        },
        independent: {
          role: "Собственные проекты",
          org: "Личные и open-source работы",
          summary: "Платформы для изучения языков, научный корпус и боты для автоматизации.",
          points: [
            "HSKGo и «Китайский язык» — платформы для изучения китайского по уровням HSK 1–9",
            "Электронный корпус тюркских письменных памятников: конкорданс, карта и интерфейс на 4 языках",
            "Telegram-боты: учёт автомойки и анонимные сообщения (Google Sheets + Apps Script)",
            "Lora — личный AI-ассистент на базе Claude",
          ],
        },
        education: {
          role: "Студент",
          org: "Ташкентский государственный университет востоковедения",
          summary: "Совмещаю востоковедение с программированием: мои проекты по китайскому языку и тюркским письменным памятникам — в этом направлении.",
          points: [],
        },
      },
    },
    skills: {
      title: "Навыки",
      subtitle: "Технологии, которые я применял в реальных проектах",
      legend: "Число — количество проектов, где использована технология",
      also: "Также знаком с",
      categories: {
        ai: "AI и LLM",
        backend: "Backend",
        frontend: "Frontend",
        automation: "Автоматизация",
      },
    },
    projects: {
      title: "Проекты",
      subtitle: "Работающие проекты — нажмите, чтобы открыть",
      viewCode: "Смотреть код",
      viewDemo: "Открыть сайт",
      viewAll: "Все проекты на GitHub",
      filters: {
        all: "Все",
        ai: "AI",
        edtech: "Образование",
        language: "Языки",
        business: "Бизнес",
      },
      items: {
        smartjadval: {
          title: "SmartJadval",
          description:
            "Система расписания занятий для Ташкентского государственного университета востоковедения. Движок на основе DSATUR и simulated annealing строит расписание без накладок, AI-ассистент понимает команды на естественном языке, экспорт в PDF, Word и Excel.",
        },
        bilim: {
          title: "Bilim Check-Up",
          description:
            "Платформа диагностических экзаменов для Firdavs School: ученики пишут ответы на бумаге, админ сканирует и загружает их, Gemini AI готовит для каждого ученика отдельный отчёт в PDF/DOCX.",
        },
        resta: {
          title: "RESTA ERP",
          description:
            "AI-first система управления для консалтинговой компании: 5 агентов на Claude готовят протоколы встреч, диагностику и KPI/ROI-отчёты. С веб-панелью и Telegram-ботом.",
        },
        turkiy: {
          title: "Корпус тюркских письменных памятников",
          description:
            "Научный электронный корпус для изучения средневекового тюркского письменного наследия: 17 памятников, 110 000+ слов, интерактивная карта, хронология, конкорданс и статистика. На 4 языках (UZ / RU / EN / TR).",
        },
        firdavs: {
          title: "Firdavs school — Панель управления",
          description:
            "Панель управления школьной системы диагностики: 7 ролей и матрица прав, ученики, база вопросов и отчёты в стиле Cambridge/IELTS. Можно войти через демо-аккаунты.",
        },
        hskgo: {
          title: "HSKGo",
          description:
            "Платформа для подготовки к HSK уровней 1–9: 11 000+ слов, 3 000+ иероглифов, модули аудирования, чтения, письма с порядком черт и оценки произношения.",
        },
        xitoy: {
          title: "Китайский язык — HSK",
          description:
            "Платформа для изучения китайского языка: 20 тем уровней HSK 1–2, 370+ слов, грамматические правила и примеры предложений.",
        },
        portfolio: {
          title: "Portfolio сайт",
          description:
            "Этот сайт — на Next.js и Tailwind CSS, на 4 языках (UZ / RU / EN / ZH), с таймлайном опыта и фильтром проектов.",
        },
        kitoblar: {
          title: "Kitoblar Dunyosi",
          description:
            "Онлайн-библиотека для узбекской и мировой литературы. Поиск книг, просмотр и создание коллекций.",
        },
        adabiyot: {
          title: "Узбекская литература — Восточные языки",
          description:
            "Информационный сайт по узбекской литературе и восточным языкам (арабский, персидский, турецкий). Создан в образовательных целях.",
        },
      },
    },
    contact: {
      title: "Контакт",
      subtitle: "Напишите мне",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш email",
      messagePlaceholder: "Ваше сообщение...",
      send: "Отправить",
      sent: "Отправлено!",
      orConnect: "Или через социальные сети",
    },
    footer: {
      rights: "Все права защищены",
      madeWith: "Сделано",
      by: "",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Sarvarbek Nuraddinov",
      title: "Full-stack & AI Developer",
      subtitle: "I build AI-powered web systems for education and business — from idea to a working product",
      cta: "View Projects",
      contact: "Get in Touch",
      roles: ["Full-stack Developer", "AI Systems Engineer", "TSUOS Student"],
      stats: {
        projects: "projects",
        live: "live sites",
        orgs: "organizations",
        years: "years of experience",
      },
    },
    about: {
      title: "About Me",
      description:
        "I'm Nuraddinov Sarvarbek Muzaffar o'g'li — a student at Tashkent State University of Oriental Studies and a full-stack & AI developer. I build AI-powered systems for education and business: from university class scheduling to school diagnostics and a consulting ERP.",
      description2:
        "I've built systems for TSUOS, Firdavs School, and the consulting company RESTA. I work with FastAPI and Django on the backend, React and Next.js on the frontend, and the Claude and Gemini APIs for AI. I automate workflows with Telegram bots and Google Sheets.",
      location: "Location",
      locationValue: "Tashkent, Uzbekistan",
      experience: "Experience",
      experienceValue: "2+ years",
      education: "Education",
      educationValue: "TSUOS, student",
      status: "Status",
      statusValue: "Open to work",
      nowTitle: "Currently working on",
      now: [
        "SmartJadval 2.0 — rewriting the scheduling system in FastAPI (TSUOS)",
        "Website for the international conference “Turkic Written Heritage — 2026”",
        "Lora — a personal AI assistant built on Claude",
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "Who I've worked with and what I've built",
      present: "Present",
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthYear: "{m} {y}",
      visit: "Open project",
      items: {
        tdshu: {
          role: "Full-stack & AI Developer",
          org: "Tashkent State University of Oriental Studies",
          summary: "A class scheduling system for the university and a website for an international academic conference.",
          points: [
            "SmartJadval — a scheduling platform that manages faculties, departments, teachers, groups, and rooms in one place",
            "Conflict-free scheduling engine built on DSATUR and simulated annealing, running in a separate process",
            "AI assistant (Claude / Gemini) turns plain-language commands into scheduling constraints",
            "Migrated the backend from Node.js to FastAPI; schedules export to PDF, Word, and Excel",
            "Trilingual website for the international conference “Turkic Written Heritage — 2026” (Flask)",
          ],
        },
        firdavs: {
          role: "Full-stack Developer",
          org: "Firdavs School",
          summary: "Diagnostics, exam, and admissions systems for a private school.",
          points: [
            "Admin panel with 7 roles, a permission matrix, a question bank, and Cambridge/IELTS-style reports",
            "Bilim Check-Up: paper answers are scanned and Gemini AI writes a separate PDF/DOCX report for every student",
            "Admissions Telegram bot: applications land in Google Sheets and admins update their status with buttons",
          ],
        },
        resta: {
          role: "AI Systems Developer",
          org: "RESTA — consulting company",
          summary: "An AI-first management system for a consulting business, plus the company website.",
          points: [
            "5 Claude AI agents: meeting minutes, client diagnostics, copilot, reporting, and executive summaries",
            "Web panel for clients, projects, meetings, and tasks with roles and a health-score dashboard",
            "Telegram bot (aiogram) and KPI/ROI reports exported to DOCX",
            "resta.uz company landing page",
          ],
        },
        independent: {
          role: "Independent Projects",
          org: "Personal and open-source work",
          summary: "Language learning platforms, a scholarly corpus, and automation bots.",
          points: [
            "HSKGo and Chinese Language — Chinese learning platforms for HSK levels 1–9",
            "Electronic corpus of Turkic written monuments with a concordance, a map, and a 4-language interface",
            "Telegram bots: car-wash bookkeeping and anonymous messages (Google Sheets + Apps Script)",
            "Lora — a personal AI assistant built on Claude",
          ],
        },
        education: {
          role: "Student",
          org: "Tashkent State University of Oriental Studies",
          summary: "I combine Oriental studies with programming — my projects on the Chinese language and Turkic written monuments come from this direction.",
          points: [],
        },
      },
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I've used in real projects",
      legend: "Number — how many of my projects use this technology",
      also: "Also familiar with",
      categories: {
        ai: "AI & LLM",
        backend: "Backend",
        frontend: "Frontend",
        automation: "Automation",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Live projects — click a card to open it",
      viewCode: "View Code",
      viewDemo: "Open site",
      viewAll: "All projects on GitHub",
      filters: {
        all: "All",
        ai: "AI",
        edtech: "Education",
        language: "Languages",
        business: "Business",
      },
      items: {
        smartjadval: {
          title: "SmartJadval",
          description:
            "Class scheduling system for Tashkent State University of Oriental Studies. An engine based on DSATUR and simulated annealing builds conflict-free timetables, an AI assistant understands plain-language commands, and schedules export to PDF, Word, and Excel.",
        },
        bilim: {
          title: "Bilim Check-Up",
          description:
            "A diagnostic exam platform for Firdavs School: students answer on paper, an admin scans and uploads the sheets, and Gemini AI prepares a separate PDF/DOCX report for each student.",
        },
        resta: {
          title: "RESTA ERP",
          description:
            "An AI-first management system for a consulting company: 5 Claude agents prepare meeting minutes, client diagnostics, and KPI/ROI reports. Includes a web panel and a Telegram bot.",
        },
        turkiy: {
          title: "Corpus of Turkic Written Monuments",
          description:
            "A scholarly electronic corpus of medieval Turkic written heritage: 17 monuments, 110,000+ words, an interactive map, timeline, concordance, and statistics. Available in 4 languages (UZ / RU / EN / TR).",
        },
        firdavs: {
          title: "Firdavs School — Management Panel",
          description:
            "The admin panel of a school diagnostics system: 7 roles and a permission matrix, students, a question bank, and Cambridge/IELTS-style reports. Demo accounts are available to try it out.",
        },
        hskgo: {
          title: "HSKGo",
          description:
            "A Chinese learning platform for HSK levels 1–9: 11,000+ words, 3,000+ characters, and modules for listening, reading, stroke-order writing, and pronunciation scoring.",
        },
        xitoy: {
          title: "Chinese Language — HSK",
          description:
            "A platform for learning Chinese: 20 topics across HSK levels 1–2, 370+ words, grammar notes, and example sentences.",
        },
        portfolio: {
          title: "Portfolio Website",
          description:
            "This site — built with Next.js and Tailwind CSS, in 4 languages (UZ / RU / EN / ZH), with an experience timeline and project filters.",
        },
        kitoblar: {
          title: "Kitoblar Dunyosi",
          description:
            "An online library platform for Uzbek and world literature. Features book search, browsing, and personal collection management.",
        },
        adabiyot: {
          title: "Uzbek Literature — Eastern Languages",
          description:
            "An informational website dedicated to Uzbek literature and Eastern languages (Arabic, Persian, Turkish). Built for educational purposes.",
        },
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Send me a message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sent: "Sent!",
      orConnect: "Or connect via",
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
      by: "by",
    },
  },
  zh: {
    nav: {
      about: "关于我",
      experience: "经历",
      skills: "技能",
      projects: "项目",
      contact: "联系",
    },
    hero: {
      greeting: "你好，我是",
      name: "Sarvarbek Nuraddinov",
      title: "全栈 & AI 开发者",
      subtitle: "我为教育和商业打造基于 AI 的 Web 系统——从想法到可运行的产品",
      cta: "查看项目",
      contact: "联系我",
      roles: ["全栈开发者", "AI 系统工程师", "塔什干东方学大学学生"],
      stats: {
        projects: "项目",
        live: "上线网站",
        orgs: "合作机构",
        years: "年经验",
      },
    },
    about: {
      title: "关于我",
      description:
        "我是 Nuraddinov Sarvarbek，塔什干国立东方学大学的学生，也是一名全栈 & AI 开发者。我为教育和商业打造基于 AI 的系统：从大学排课到学校诊断测评，再到咨询公司的 ERP。",
      description2:
        "我曾为塔什干东方学大学、Firdavs School 和咨询公司 RESTA 开发系统。后端使用 FastAPI 和 Django，前端使用 React 和 Next.js，AI 部分使用 Claude 和 Gemini API，并通过 Telegram 机器人和 Google Sheets 实现流程自动化。",
      location: "所在地",
      locationValue: "塔什干，乌兹别克斯坦",
      experience: "经验",
      experienceValue: "2年以上",
      education: "教育",
      educationValue: "塔什干东方学大学，在读",
      status: "状态",
      statusValue: "正在求职",
      nowTitle: "目前正在做",
      now: [
        "SmartJadval 2.0——用 FastAPI 重写排课系统（塔什干东方学大学）",
        "“突厥文献遗产——2026”国际学术会议网站",
        "Lora——基于 Claude 的个人 AI 助手",
      ],
    },
    experience: {
      title: "经历",
      subtitle: "我与谁合作、做过什么",
      present: "至今",
      months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      monthYear: "{y}年{m}",
      visit: "打开项目",
      items: {
        tdshu: {
          role: "全栈 & AI 开发者",
          org: "塔什干国立东方学大学",
          summary: "为大学开发的排课系统和国际学术会议网站。",
          points: [
            "SmartJadval——在一个系统中管理院系、教研室、教师、班级和教室的排课平台",
            "基于 DSATUR 和模拟退火算法的无冲突排课引擎，在独立进程中运行",
            "AI 助手（Claude / Gemini）将自然语言指令转换为排课约束",
            "将后端从 Node.js 迁移到 FastAPI；课表可导出为 PDF、Word 和 Excel",
            "“突厥文献遗产——2026”国际学术会议的三语网站（Flask）",
          ],
        },
        firdavs: {
          role: "全栈开发者",
          org: "Firdavs School",
          summary: "为私立学校开发的诊断测评、考试和招生系统。",
          points: [
            "管理后台：7 种角色、权限矩阵、题库以及 Cambridge/IELTS 风格的报告",
            "Bilim Check-Up：扫描纸质答卷，由 Gemini AI 为每位学生生成独立的 PDF/DOCX 报告",
            "招生 Telegram 机器人：申请自动写入 Google Sheets，管理员通过按钮更新状态",
          ],
        },
        resta: {
          role: "AI 系统开发者",
          org: "RESTA——咨询公司",
          summary: "为咨询业务打造的 AI 优先管理系统及公司官网。",
          points: [
            "5 个 Claude AI 智能体：会议纪要、客户诊断、副驾驶、报告和管理层摘要",
            "管理客户、项目、会议和任务的 Web 面板，含角色权限和健康度仪表盘",
            "Telegram 机器人（aiogram）以及导出为 DOCX 的 KPI/ROI 报告",
            "resta.uz 公司落地页",
          ],
        },
        independent: {
          role: "独立项目",
          org: "个人及开源作品",
          summary: "语言学习平台、学术语料库和自动化机器人。",
          points: [
            "HSKGo 和中文学习——覆盖 HSK 1–9 级的中文学习平台",
            "突厥文献电子语料库：语词索引、地图和四语界面",
            "Telegram 机器人：洗车店记账和匿名消息（Google Sheets + Apps Script）",
            "Lora——基于 Claude 的个人 AI 助手",
          ],
        },
        education: {
          role: "在读学生",
          org: "塔什干国立东方学大学",
          summary: "我将东方学与编程相结合——我的中文学习和突厥文献项目正是这一方向的成果。",
          points: [],
        },
      },
    },
    skills: {
      title: "技能",
      subtitle: "我在真实项目中使用过的技术",
      legend: "数字——使用该技术的项目数量",
      also: "也熟悉",
      categories: {
        ai: "AI 与大模型",
        backend: "后端",
        frontend: "前端",
        automation: "自动化",
      },
    },
    projects: {
      title: "项目",
      subtitle: "已上线的项目——点击卡片即可打开",
      viewCode: "查看代码",
      viewDemo: "打开网站",
      viewAll: "在 GitHub 上查看全部项目",
      filters: {
        all: "全部",
        ai: "AI",
        edtech: "教育",
        language: "语言",
        business: "商业",
      },
      items: {
        smartjadval: {
          title: "SmartJadval",
          description:
            "为塔什干国立东方学大学开发的排课系统。基于 DSATUR 和模拟退火的引擎生成无冲突课表，AI 助手可理解自然语言指令，并支持导出 PDF、Word 和 Excel。",
        },
        bilim: {
          title: "Bilim Check-Up",
          description:
            "为 Firdavs School 开发的诊断性考试平台：学生在纸上作答，管理员扫描上传，Gemini AI 为每位学生生成独立的 PDF/DOCX 报告。",
        },
        resta: {
          title: "RESTA ERP",
          description:
            "为咨询公司打造的 AI 优先管理系统：5 个 Claude 智能体负责会议纪要、客户诊断和 KPI/ROI 报告，配有 Web 面板和 Telegram 机器人。",
        },
        turkiy: {
          title: "突厥文献语料库",
          description:
            "研究中世纪突厥文字遗产的学术电子语料库：收录 17 处碑铭、11 万余词，提供交互式地图、时间轴、语词索引和统计。支持 4 种语言（UZ / RU / EN / TR）。",
        },
        firdavs: {
          title: "Firdavs School 管理系统",
          description:
            "学校诊断测评系统的管理后台：7 种角色及权限矩阵、学生管理、题库和 Cambridge/IELTS 风格的报告，可使用演示账号登录体验。",
        },
        hskgo: {
          title: "HSKGo",
          description:
            "HSK 1–9 级备考中文学习平台：11,000+ 词汇、3,000+ 汉字，包含听力、阅读、笔顺书写和发音评测模块。",
        },
        xitoy: {
          title: "中文学习 — HSK",
          description:
            "中文学习平台：涵盖 HSK 1–2 级的 20 个主题、370+ 个词汇、语法要点和例句。",
        },
        portfolio: {
          title: "个人作品集网站",
          description:
            "本网站——使用 Next.js 和 Tailwind CSS 构建，支持四种语言（UZ / RU / EN / ZH），包含经历时间轴和项目筛选。",
        },
        kitoblar: {
          title: "Kitoblar Dunyosi",
          description:
            "乌兹别克和世界文学的在线图书馆平台。支持图书搜索、浏览和个人收藏管理。",
        },
        adabiyot: {
          title: "乌兹别克文学——东方语言",
          description:
            "专注于乌兹别克文学和东方语言（阿拉伯语、波斯语、土耳其语）的信息网站，以教育为目的。",
        },
      },
    },
    contact: {
      title: "联系",
      subtitle: "给我发消息",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的邮箱",
      messagePlaceholder: "您的留言...",
      send: "发送消息",
      sent: "已发送！",
      orConnect: "或通过社交媒体联系",
    },
    footer: {
      rights: "保留所有权利",
      madeWith: "制作于",
      by: "作者",
    },
  },
} as const;

export type ProjectId = keyof (typeof translations)["uz"]["projects"]["items"];
export type ExperienceId = keyof (typeof translations)["uz"]["experience"]["items"];
