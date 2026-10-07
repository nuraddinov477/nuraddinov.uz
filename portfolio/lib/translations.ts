export type Lang = "uz" | "ru" | "en" | "zh";

export const translations = {
  uz: {
    nav: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, men",
      name: "Nuraddinov Sarvarbek",
      title: "ML & Web dasturchi",
      subtitle: "Sun'iy intellekt va zamonaviy veb texnologiyalar yordamida muammolarni hal qilaman",
      cta: "Loyihalarni ko'rish",
      contact: "Bog'lanish",
      roles: ["ML muhandis", "Veb dasturchi", "Vibe coder"],
    },
    about: {
      title: "Men haqimda",
      description:
        "Men — Nuraddinov Sarvarbek Muzaffar o'g'li. ML muhandis va veb dasturchi sifatida ishlayman. Machine Learning modellarini ishlab chiqish va zamonaviy veb ilovalar yaratish — mening asosiy yo'nalishlarim. Bundan tashqari vibe coding bilan ham shug'ullanaman.",
      description2:
        "Har bir loyihaga ijodiy yondashaman. Python, PyTorch, scikit-learn kabi ML texnologiyalari bilan bir qatorda React, Next.js va Node.js bilan ham kuchli tajribaga egaman.",
      location: "Joylashuv",
      locationValue: "Toshkent, O'zbekiston",
      experience: "Tajriba",
      experienceValue: "2+ yil",
      status: "Holat",
      statusValue: "Ishga ochiq",
    },
    skills: {
      title: "Ko'nikmalar",
      subtitle: "Men foydalanadigan texnologiyalar",
      categories: {
        ml: "Machine Learning",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Asboblar",
        other: "Boshqalar",
      },
    },
    projects: {
      title: "Loyihalar",
      subtitle: "Qilgan ishlarimdan namunalar",
      viewCode: "Kodni ko'rish",
      viewDemo: "Demo",
      viewAll: "Barcha loyihalar GitHub'da",
      items: [
        {
          title: "SmartJadval",
          description:
            "Toshkent davlat sharqshunoslik universiteti uchun AI yordamidagi dars jadvali tizimi. Jadvalni to'qnashuvlarsiz avtomatik tuzadi, AI yordamchi oddiy tilda berilgan buyruqlarni tushunadi, jadvalni PDF, Word va Excel formatida eksport qiladi.",
          tech: ["React", "Vite", "Tailwind CSS", "AI / LLM"],
          github: "#",
          demo: "https://smartjadval-1.vercel.app/tsuos",
        },
        {
          title: "Bilim Check-Up",
          description:
            "Maktablar uchun diagnostik imtihon tizimi. O'quvchilarning bilim darajasini aniqlashga yordam beradi, maktab xodimlari uchun alohida admin panelga ega.",
          tech: ["Python", "FastAPI", "HTML / CSS"],
          github: "#",
          demo: "https://bilim-checkup.onrender.com",
        },
        {
          title: "Xitoy tili — HSK",
          description:
            "Xitoy tilini o'rganish uchun platforma: HSK 1–2 darajalari bo'yicha 20 ta mavzu, 370+ so'z, grammatika qoidalari va namunaviy gaplar.",
          tech: ["Next.js", "React", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/Xitoy_tili",
          demo: "https://xitoy-tili.vercel.app",
        },
        {
          title: "Portfolio Sayt",
          description:
            "Shaxsiy portfolio sayt — Next.js va Tailwind CSS bilan yaratilgan. Ko'p tilli interfeys (UZ / RU / EN / ZH).",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/nuraddinov.uz",
          demo: "#",
        },
        {
          title: "Kitoblar Dunyosi",
          description:
            "O'zbek va jahon adabiyoti kitoblari uchun onlayn kutubxona platformasi. Kitob qidirish, ko'rish va to'plam yaratish imkoniyatlari mavjud.",
          tech: ["React", "Node.js", "MongoDB"],
          github: "#",
          demo: "#",
        },
        {
          title: "O'zbek Adabiyoti — Sharq Tillari",
          description:
            "O'zbek adabiyoti va sharq tillari (arab, fors, turk) bo'yicha ma'lumot va resurslar to'plami. Ta'lim maqsadida yaratilgan veb sayt.",
          tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
          github: "#",
          demo: "#",
        },
      ],
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
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакт",
    },
    hero: {
      greeting: "Привет, я",
      name: "Нураддинов Сарварбек",
      title: "ML & Web разработчик",
      subtitle: "Решаю задачи с помощью искусственного интеллекта и современных веб-технологий",
      cta: "Смотреть проекты",
      contact: "Написать мне",
      roles: ["ML-инженер", "Веб-разработчик", "Vibe coder"],
    },
    about: {
      title: "Обо мне",
      description:
        "Я — Нураддинов Сарварбек Музаффар угли. Работаю как ML-инженер и веб-разработчик. Разработка моделей машинного обучения и создание современных веб-приложений — мои основные направления. Также занимаюсь vibe coding.",
      description2:
        "Подхожу к каждому проекту творчески. Имею опыт работы с Python, PyTorch, scikit-learn, а также с React, Next.js и Node.js.",
      location: "Местоположение",
      locationValue: "Ташкент, Узбекистан",
      experience: "Опыт",
      experienceValue: "2+ года",
      status: "Статус",
      statusValue: "Открыт к работе",
    },
    skills: {
      title: "Навыки",
      subtitle: "Технологии, с которыми я работаю",
      categories: {
        ml: "Машинное обучение",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Инструменты",
        other: "Прочее",
      },
    },
    projects: {
      title: "Проекты",
      subtitle: "Примеры моих работ",
      viewCode: "Смотреть код",
      viewDemo: "Демо",
      viewAll: "Все проекты на GitHub",
      items: [
        {
          title: "SmartJadval",
          description:
            "Система составления расписания с ИИ для Ташкентского государственного университета востоковедения. Автоматически строит расписание без накладок, ИИ-ассистент понимает команды на естественном языке, экспорт в PDF, Word и Excel.",
          tech: ["React", "Vite", "Tailwind CSS", "AI / LLM"],
          github: "#",
          demo: "https://smartjadval-1.vercel.app/tsuos",
        },
        {
          title: "Bilim Check-Up",
          description:
            "Система диагностических экзаменов для школ. Помогает определить уровень знаний учеников, имеет отдельную админ-панель для сотрудников школы.",
          tech: ["Python", "FastAPI", "HTML / CSS"],
          github: "#",
          demo: "https://bilim-checkup.onrender.com",
        },
        {
          title: "Китайский язык — HSK",
          description:
            "Платформа для изучения китайского языка: 20 тем уровней HSK 1–2, 370+ слов, грамматические правила и примеры предложений.",
          tech: ["Next.js", "React", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/Xitoy_tili",
          demo: "https://xitoy-tili.vercel.app",
        },
        {
          title: "Portfolio сайт",
          description:
            "Личный portfolio сайт — создан с Next.js и Tailwind CSS. Многоязычный интерфейс (UZ / RU / EN / ZH).",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/nuraddinov.uz",
          demo: "#",
        },
        {
          title: "Kitoblar Dunyosi",
          description:
            "Онлайн-библиотека для узбекской и мировой литературы. Поиск книг, просмотр и создание коллекций.",
          tech: ["React", "Node.js", "MongoDB"],
          github: "#",
          demo: "#",
        },
        {
          title: "Узбекская литература — Восточные языки",
          description:
            "Информационный сайт по узбекской литературе и восточным языкам (арабский, персидский, турецкий). Создан в образовательных целях.",
          tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
          github: "#",
          demo: "#",
        },
      ],
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
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Sarvarbek Nuraddinov",
      title: "ML & Web Developer",
      subtitle: "I solve problems using AI/ML and modern web technologies",
      cta: "View Projects",
      contact: "Get in Touch",
      roles: ["ML Engineer", "Web Developer", "Vibe Coder"],
    },
    about: {
      title: "About Me",
      description:
        "I'm Nuraddinov Sarvarbek Muzaffar o'g'li — an ML engineer and web developer. I build machine learning models and modern web applications. I also do vibe coding on the side.",
      description2:
        "I approach every project creatively. I have solid experience with Python, PyTorch, and scikit-learn, as well as React, Next.js, and Node.js.",
      location: "Location",
      locationValue: "Tashkent, Uzbekistan",
      experience: "Experience",
      experienceValue: "2+ years",
      status: "Status",
      statusValue: "Open to work",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with",
      categories: {
        ml: "Machine Learning",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        other: "Other",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my recent work",
      viewCode: "View Code",
      viewDemo: "Demo",
      viewAll: "All projects on GitHub",
      items: [
        {
          title: "SmartJadval",
          description:
            "AI-assisted class scheduling system for Tashkent State University of Oriental Studies. Automatically builds conflict-free timetables, an AI assistant understands plain-language commands, and schedules export to PDF, Word, and Excel.",
          tech: ["React", "Vite", "Tailwind CSS", "AI / LLM"],
          github: "#",
          demo: "https://smartjadval-1.vercel.app/tsuos",
        },
        {
          title: "Bilim Check-Up",
          description:
            "A diagnostic exam system for schools. Helps assess students' knowledge level and includes a separate admin panel for school staff.",
          tech: ["Python", "FastAPI", "HTML / CSS"],
          github: "#",
          demo: "https://bilim-checkup.onrender.com",
        },
        {
          title: "Chinese Language — HSK",
          description:
            "A platform for learning Chinese: 20 topics across HSK levels 1–2, 370+ words, grammar notes, and example sentences.",
          tech: ["Next.js", "React", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/Xitoy_tili",
          demo: "https://xitoy-tili.vercel.app",
        },
        {
          title: "Portfolio Website",
          description:
            "Personal portfolio website built with Next.js and Tailwind CSS. Multilingual interface (UZ / RU / EN / ZH).",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/nuraddinov.uz",
          demo: "#",
        },
        {
          title: "Kitoblar Dunyosi",
          description:
            "An online library platform for Uzbek and world literature. Features book search, browsing, and personal collection management.",
          tech: ["React", "Node.js", "MongoDB"],
          github: "#",
          demo: "#",
        },
        {
          title: "Uzbek Literature — Eastern Languages",
          description:
            "An informational website dedicated to Uzbek literature and Eastern languages (Arabic, Persian, Turkish). Built for educational purposes.",
          tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
          github: "#",
          demo: "#",
        },
      ],
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
      skills: "技能",
      projects: "项目",
      contact: "联系",
    },
    hero: {
      greeting: "你好，我是",
      name: "Sarvarbek Nuraddinov",
      title: "ML & Web 开发者",
      subtitle: "我利用人工智能和现代网络技术解决问题",
      cta: "查看项目",
      contact: "联系我",
      roles: ["机器学习工程师", "网页开发者", "Vibe Coder"],
    },
    about: {
      title: "关于我",
      description:
        "我是 Nuraddinov Sarvarbek——ML 工程师和网页开发者。我开发机器学习模型和现代网络应用程序。我也从事 vibe coding。",
      description2:
        "我以创造性的方式对待每个项目。我熟练掌握 Python、PyTorch、scikit-learn，以及 React、Next.js 和 Node.js。",
      location: "所在地",
      locationValue: "塔什干，乌兹别克斯坦",
      experience: "经验",
      experienceValue: "2年以上",
      status: "状态",
      statusValue: "正在求职",
    },
    skills: {
      title: "技能",
      subtitle: "我使用的技术",
      categories: {
        ml: "机器学习",
        frontend: "前端",
        backend: "后端",
        tools: "工具",
        other: "其他",
      },
    },
    projects: {
      title: "项目",
      subtitle: "我的部分作品",
      viewCode: "查看代码",
      viewDemo: "演示",
      viewAll: "在 GitHub 上查看全部项目",
      items: [
        {
          title: "SmartJadval",
          description:
            "为塔什干国立东方学大学开发的 AI 智能排课系统。自动生成无冲突课表，AI 助手可理解自然语言指令，并支持导出 PDF、Word 和 Excel。",
          tech: ["React", "Vite", "Tailwind CSS", "AI / LLM"],
          github: "#",
          demo: "https://smartjadval-1.vercel.app/tsuos",
        },
        {
          title: "Bilim Check-Up",
          description:
            "面向学校的诊断性考试系统，帮助评估学生的知识水平，并为学校工作人员提供独立的管理后台。",
          tech: ["Python", "FastAPI", "HTML / CSS"],
          github: "#",
          demo: "https://bilim-checkup.onrender.com",
        },
        {
          title: "中文学习 — HSK",
          description:
            "中文学习平台：涵盖 HSK 1–2 级的 20 个主题、370+ 个词汇、语法要点和例句。",
          tech: ["Next.js", "React", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/Xitoy_tili",
          demo: "https://xitoy-tili.vercel.app",
        },
        {
          title: "个人作品集网站",
          description:
            "使用 Next.js 和 Tailwind CSS 构建的个人作品集网站。多语言界面（UZ / RU / EN / ZH）。",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/nuraddinov477/nuraddinov.uz",
          demo: "#",
        },
        {
          title: "Kitoblar Dunyosi",
          description:
            "乌兹别克和世界文学的在线图书馆平台。支持图书搜索、浏览和个人收藏管理。",
          tech: ["React", "Node.js", "MongoDB"],
          github: "#",
          demo: "#",
        },
        {
          title: "乌兹别克文学——东方语言",
          description:
            "专注于乌兹别克文学和东方语言（阿拉伯语、波斯语、土耳其语）的信息网站，以教育为目的。",
          tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
          github: "#",
          demo: "#",
        },
      ],
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
