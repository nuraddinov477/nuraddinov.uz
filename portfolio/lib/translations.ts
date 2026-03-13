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
    },
    about: {
      title: "Men haqimda",
      description:
        "Men — Nuraddinov Sarvarbek Muzaffar o'g'li. ML muhandis va veb dasturchi sifatida ishlyman. Machine Learning modellarini ishlab chiqish va zamonaviy veb ilovalar yaratish — mening asosiy yo'nalishlarim. Bundan tashqari vibe coding bilan ham shug'ullanaman.",
      description2:
        "Har bir loyihaga ijodiy yondashaман. Python, PyTorch, scikit-learn kabi ML texnologiyalari bilan bir qatorda React, Next.js va Node.js bilan ham kuchli tajribaga egaman.",
      location: "Joylashuv",
      locationValue: "Toshkent, O'zbekiston",
      experience: "Tajriba",
      experienceValue: "2+ yil",
      status: "Holat",
      statusValue: "Ochiq ishga",
    },
    skills: {
      title: "Ko'nikmalar",
      subtitle: "Men foydalanadigan texnologiyalar",
      categories: {
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
      items: [
        {
          title: "Portfolio Sayt",
          description:
            "Shaxsiy portfolio sayt — Next.js va Tailwind CSS bilan yaratilgan. Ko'p tilli interfeys (UZ / RU / EN).",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "#",
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
      items: [
        {
          title: "Portfolio сайт",
          description:
            "Личный portfolio сайт — создан с Next.js и Tailwind CSS. Многоязычный интерфейс (UZ / RU / EN).",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "#",
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
      items: [
        {
          title: "Portfolio Website",
          description:
            "Personal portfolio website built with Next.js and Tailwind CSS. Multilingual interface (UZ / RU / EN).",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "#",
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
      items: [
        {
          title: "个人作品集网站",
          description:
            "使用 Next.js 和 Tailwind CSS 构建的个人作品集网站。多语言界面（UZ / RU / EN / ZH）。",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "#",
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
      orConnect: "或通过社交媒体联系",
    },
    footer: {
      rights: "保留所有权利",
      madeWith: "制作于",
      by: "作者",
    },
  },
} as const;
