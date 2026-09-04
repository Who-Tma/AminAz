document.addEventListener('DOMContentLoaded', () => {

  // ---------- translations ----------
  const I18N = {
    fa: {
      dir: 'rtl',
      welcome: 'سلام. به اتاق من خوش اومدی.',
      book_intro: 'اون کتاب رو روی میز می‌بینی؟ چندتا از اپ‌هایی که ساختم رو توش معرفی کردم؛ یه سر بزن بهش.',
      book_word: 'کتاب',
      book_retry: 'باشه، یه بار دیگه می‌گم: همون کتابی که علامت سوال داره رو می‌بینی؟ بزن روش 🙂',
      paper_intro: 'خوبه! یک برگه هم سمت دیگه‌ میز هست که ایمیل و ایدی تلگراممو داخلش نوشتم؛ می‌تونی پیام بدی',
      paper_word: 'برگه',
      paper_retry: 'باشه: همون برگه‌ی کنار مداد رو می‌بینی؟ بزن روش.',
      final_message: 'عالیه! من باید برم، کارم داشتی می‌تونی از طریق همون نامه سمت چپ خبرم کنی...',
      final_word: 'نامه',
      confirm_yes: 'متوجه شدم',
      confirm_no: 'متوجه نشدم',
      skills_title: 'مهارت‌هام',
      skill_0: 'ساخت مینی‌اپ تلگرامی (TMA)',
      skill_1: 'طراحی و ساخت سایت',
      skill_2: 'ساخت وب‌اپلیکیشن (قابل نصب با APK)',
      skill_5: 'ساخت بازی‌های سبک اندروید',
      skill_6: 'کار با APK Editor',
      skill_8: 'کار با AI',
      contact_title: 'راه ارتباطی',
      contact_intro: 'از هر کدوم راحتی، پیام بده تا در ارتباط باشیم:',
      contact_telegram_label: 'تلگرام',
      contact_email_label: 'ایمیل',
      sheet_close: 'بستن',
      game_title: 'Jump.exe',
      game_tap_start: 'برای شروع بازی، ضربه بزن یا اسپیس رو فشار بده',
      game_over_title: 'باختی!',
      game_score_label: 'امتیاز:',
      game_restart: 'دوباره امتحان کن',
      game_best: 'بهترین: 0',
      bird_title: 'Bird.exe',
      bird_tap_start: 'برای پرواز، ضربه بزن یا اسپیس رو فشار بده',
      win_shutdown: 'خاموش کردن',
      battery_low_title: 'شارژ باتری کم است',
      battery_exit_btn: 'خروج',
      battery_toast_msg: 'بذار چند دقیقه لپ‌تاپ شارژ بشه، بعد دوباره بیا بازی کن 🔌',
      rotate_msg: 'برای تجربه بهتر گوشیتو بچرخون (حالت افقی) 🔄'
    },
    en: {
      dir: 'ltr',
      welcome: 'Hi. Welcome to my room.',
      book_intro: "See that book on the desk? I've featured a few of the apps I've built in there — go take a look.",
      book_word: 'book',
      book_retry: "Okay, I'll say it again: see the book with the question mark on it? Tap it 🙂",
      paper_intro: "Nice! There's also a note on the other side of the desk with my email and Telegram ID — feel free to message me",
      paper_word: 'note',
      paper_retry: 'Okay: see the note next to the pencil? Tap it.',
      final_message: "Great! I've gotta go — if you need anything, reach me through the note on the left...",
      final_word: 'note',
      confirm_yes: 'Got it',
      confirm_no: "Didn't get it",
      skills_title: 'My skills',
      skill_0: 'Telegram Mini App development (TMA)',
      skill_1: 'Website design & development',
      skill_2: 'Web app development (installable as an Android APK)',
      skill_5: 'Android-style game development',
      skill_6: 'APK Editor',
      skill_8: 'Working with AI',
      contact_title: 'Get in touch',
      contact_intro: 'Reach out however works best for you:',
      contact_telegram_label: 'Telegram',
      contact_email_label: 'Email',
      sheet_close: 'Close',
      game_title: 'Jump.exe',
      game_tap_start: 'Tap or press Space to start',
      game_over_title: 'Game over!',
      game_score_label: 'Score:',
      game_restart: 'Try again',
      game_best: 'Best: 0',
      bird_title: 'Bird.exe',
      bird_tap_start: 'Tap or press Space to fly',
      win_shutdown: 'Shut down',
      battery_low_title: 'Battery is low',
      battery_exit_btn: 'Exit',
      battery_toast_msg: 'Let the laptop charge for a few minutes, then come back and play 🔌',
      rotate_msg: 'Rotate your phone for a better experience 🔄'
    },
    ru: {
      dir: 'ltr',
      welcome: 'Привет. Добро пожаловать в мою комнату.',
      book_intro: 'Видишь ту книгу на столе? Я рассказал там о нескольких приложениях, которые сделал — загляни.',
      book_word: 'книгу',
      book_retry: 'Хорошо, повторю: видишь книгу со знаком вопроса? Нажми на неё 🙂',
      paper_intro: 'Отлично! На другом краю стола есть записка с моей почтой и Telegram — можешь написать мне',
      paper_word: 'записка',
      paper_retry: 'Хорошо: видишь записку рядом с карандашом? Нажми на неё.',
      final_message: 'Отлично! Мне пора — если что-то нужно, напиши через записку слева...',
      final_word: 'записку',
      confirm_yes: 'Понятно',
      confirm_no: 'Не понятно',
      skills_title: 'Мои навыки',
      skill_0: 'Разработка мини-приложений Telegram (TMA)',
      skill_1: 'Дизайн и разработка сайтов',
      skill_2: 'Разработка веб-приложений (устанавливается как APK на Android)',
      skill_5: 'Разработка игр в стиле Android',
      skill_6: 'APK Editor',
      skill_8: 'Работа с ИИ',
      contact_title: 'Связаться со мной',
      contact_intro: 'Выбери удобный способ связи:',
      contact_telegram_label: 'Telegram',
      contact_email_label: 'Email',
      sheet_close: 'Закрыть',
      game_title: 'Jump.exe',
      game_tap_start: 'Нажми или нажми пробел, чтобы начать',
      game_over_title: 'Игра окончена!',
      game_score_label: 'Очки:',
      game_restart: 'Попробовать снова',
      game_best: 'Рекорд: 0',
      bird_title: 'Bird.exe',
      bird_tap_start: 'Нажми или нажми пробел, чтобы взлететь',
      win_shutdown: 'Выключить',
      battery_low_title: 'Батарея разряжена',
      battery_exit_btn: 'Выход',
      battery_toast_msg: 'Дай ноутбуку немного зарядиться, потом возвращайся и играй снова 🔌',
      rotate_msg: 'Поверни телефон для удобства 🔄'
    },
    de: {
      dir: 'ltr',
      welcome: 'Hallo. Willkommen in meinem Zimmer.',
      book_intro: 'Siehst du das Buch auf dem Tisch? Ich hab dort ein paar Apps vorgestellt, die ich gebaut hab – schau mal rein.',
      book_word: 'Buch',
      book_retry: "Okay, ich sag's nochmal: siehst du das Buch mit dem Fragezeichen? Tipp drauf 🙂",
      paper_intro: 'Gut! Auf der anderen Seite des Tisches liegt ein Zettel mit meiner E-Mail und Telegram-ID — du kannst mir schreiben',
      paper_word: 'Zettel',
      paper_retry: 'Okay: siehst du den Zettel neben dem Stift? Tipp drauf.',
      final_message: 'Super! Ich muss los — falls du was brauchst, erreichst du mich über den Zettel links...',
      final_word: 'Zettel',
      confirm_yes: 'Verstanden',
      confirm_no: 'Nicht verstanden',
      skills_title: 'Meine Fähigkeiten',
      skill_0: 'Telegram-Mini-App-Entwicklung (TMA)',
      skill_1: 'Webdesign & Webentwicklung',
      skill_2: 'Webanwendungen (als APK für Android installierbar)',
      skill_5: 'Android-Spieleentwicklung',
      skill_6: 'APK Editor',
      skill_8: 'Arbeiten mit KI',
      contact_title: 'Kontakt',
      contact_intro: 'Schreib mir, wie es dir am besten passt:',
      contact_telegram_label: 'Telegram',
      contact_email_label: 'E-Mail',
      sheet_close: 'Schließen',
      game_title: 'Jump.exe',
      game_tap_start: 'Tippe oder drücke Leertaste zum Starten',
      game_over_title: 'Game Over!',
      game_score_label: 'Punkte:',
      game_restart: 'Nochmal versuchen',
      game_best: 'Bestwert: 0',
      bird_title: 'Bird.exe',
      bird_tap_start: 'Tippe oder drücke Leertaste zum Fliegen',
      win_shutdown: 'Herunterfahren',
      battery_low_title: 'Akku ist schwach',
      battery_exit_btn: 'Beenden',
      battery_toast_msg: 'Lass den Laptop ein paar Minuten laden und komm dann wieder zum Spielen 🔌',
      rotate_msg: 'Dreh dein Handy für ein besseres Erlebnis 🔄'
    }
  };

  let LANG = 'fa';
  const t = (key) => (I18N[LANG] && I18N[LANG][key] !== undefined) ? I18N[LANG][key] : I18N.fa[key];

  function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val !== undefined) el.textContent = val;
    });
  }

  // ---------- language gate ----------
  const langGate = document.getElementById('langGate');

  function startExperience(lang) {
    LANG = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = t('dir') === 'rtl' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-ltr', t('dir') !== 'rtl');
    applyStaticTranslations();

    langGate.classList.add('is-hidden');
    setTimeout(() => { langGate.style.display = 'none'; }, 550);

    setTimeout(typeWelcome, 400);
  }

  document.querySelectorAll('.lang-gate__btn').forEach(btn => {
    btn.addEventListener('click', () => startExperience(btn.dataset.lang));
  });

  // ---------- language gate: twinkling starfield ----------
  const gateCanvas = document.getElementById('gateStars');
  const gateCtx = gateCanvas.getContext('2d');
  let gw, gh, gateStars = [];

  function gateResize() {
    gw = gateCanvas.width = window.innerWidth;
    gh = gateCanvas.height = window.innerHeight;
    gateStars = [];
    const count = Math.floor((gw * gh) / 3200);
    for (let i = 0; i < count; i++) {
      gateStars.push({
        x: Math.random() * gw,
        y: Math.random() * gh,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.85 ? '210,225,255' : Math.random() > 0.7 ? '255,220,180' : '255,255,255'
      });
    }
  }

  function gateDraw(time) {
    if (!langGate || langGate.style.display === 'none') return; // stop once the gate is gone
    gateCtx.clearRect(0, 0, gw, gh);
    for (const s of gateStars) {
      const twinkle = Math.sin(time * s.speed + s.phase) * 0.5 + 0.5;
      const alpha = s.baseAlpha * (0.5 + twinkle * 0.5);
      gateCtx.beginPath();
      gateCtx.fillStyle = `rgba(${s.hue},${alpha})`;
      gateCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      gateCtx.fill();
    }
    requestAnimationFrame(gateDraw);
  }

  window.addEventListener('resize', gateResize);
  gateResize();
  requestAnimationFrame(gateDraw);

  // ---------- language gate: brand + orbit -> language picker ----------
  function runGatePhaseTransition() {
    const brand = document.getElementById('gateBrand');
    const tagline = document.getElementById('gateTagline');
    const orbitWrap = document.getElementById('gateOrbit');
    const options = document.getElementById('gateOptions');

    // Freeze the currently-animated values as inline styles, then kill
    // the keyframe animation so CSS transitions can take over smoothly.
    const bcs = getComputedStyle(brand);
    brand.style.opacity = bcs.opacity;
    brand.style.filter = bcs.filter;
    brand.style.transform = bcs.transform;
    brand.style.letterSpacing = bcs.letterSpacing;
    brand.style.animation = 'none';

    tagline.style.opacity = getComputedStyle(tagline).opacity;
    tagline.style.animation = 'none';

    orbitWrap.style.opacity = getComputedStyle(orbitWrap).opacity;
    orbitWrap.style.transform = getComputedStyle(orbitWrap).transform;
    orbitWrap.style.animation = 'none';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        brand.style.opacity = '0';
        brand.style.filter = 'blur(8px)';
        brand.style.transform = 'translateY(-6px) scale(0.94)';
        tagline.style.opacity = '0';
        orbitWrap.classList.add('is-out');

        setTimeout(() => {
          brand.textContent = 'Choose your language:';
          brand.classList.add('lang-gate__brand--final');
          brand.style.animation = '';
          brand.style.fontSize = 'clamp(1.05rem, 3vw, 1.5rem)';
          brand.style.letterSpacing = '0.28em';
          brand.style.transform = 'translateY(-30px) scale(1)';
          brand.style.filter = 'blur(0)';
          brand.style.opacity = '1';

          tagline.style.visibility = 'hidden';
        }, 460);

        setTimeout(() => {
          orbitWrap.style.visibility = 'hidden';
          options.classList.add('is-shown');
        }, 620);
      });
    });
  }

  setTimeout(runGatePhaseTransition, 4200);

  // ---------- welcome speech bubble ----------
  const bubble = document.getElementById('bubble');
  const bubbleText = document.getElementById('bubbleText');
  const TYPE_SPEED_MS = 45;
  const CORNER_DELAY_MS = 3000;  // how long the message stays next to the character's head before moving
  const FADE_AFTER_MS = 3000;    // how long it stays in the corner before fading
  const FADE_DURATION_MS = 1600; // matches the .bubble.is-fading transition in CSS

  function typeWelcome() {
    const welcomeText = t('welcome');
    bubble.classList.add('is-visible');
    let i = 0;
    const interval = setInterval(() => {
      bubbleText.textContent = welcomeText.slice(0, i + 1);
      i++;
      if (i >= welcomeText.length) {
        clearInterval(interval);
        bubble.classList.add('is-done');
        setTimeout(shrinkToCorner, CORNER_DELAY_MS);
      }
    }, TYPE_SPEED_MS);
  }

  function shrinkToCorner() {
    document.body.appendChild(bubble); // escape the transformed wrapper so `fixed` is relative to the viewport
    bubble.classList.add('is-corner');
    setTimeout(() => {
      bubble.classList.add('is-fading');
      setTimeout(() => {
        bubble.style.display = 'none'; // free up the top-right spot
        runTutorial();
      }, FADE_DURATION_MS);
    }, FADE_AFTER_MS);
  }

  // ---------- tutorial (live question near the head -> commits to top chat log once answered) ----------
  const chatLog = document.getElementById('chatLog');
  const liveBubble = document.getElementById('liveBubble');
  const liveBubbleText = document.getElementById('liveBubbleText');
  const liveBubbleOptions = document.getElementById('liveBubbleOptions');
  const bookDot = document.getElementById('bookDot');
  const paperDot = document.getElementById('paperDot');
  const CHAT_TYPE_SPEED_MS = 28;

  function scrollChatToBottom() {
    chatLog.scrollTo({ top: chatLog.scrollHeight, behavior: 'smooth' });
  }

  function typeInto(el, text, speed) {
    return new Promise(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }

  function highlightedHtml(text, highlightWord, highlightClass) {
    if (highlightWord && text.includes(highlightWord)) {
      return text.replace(highlightWord, `<span class="${highlightClass}">${highlightWord}</span>`);
    }
    return text;
  }

  function commitCharMessage(html) {
    const row = document.createElement('div');
    row.className = 'chat-row chat-row--char';
    const msg = document.createElement('div');
    msg.className = 'chat-bubble chat-bubble--char';
    msg.innerHTML = html;
    row.appendChild(msg);
    chatLog.appendChild(row);
    scrollChatToBottom();
  }

  function commitUserMessage(text) {
    const row = document.createElement('div');
    row.className = 'chat-row chat-row--user';
    const msg = document.createElement('div');
    msg.className = 'chat-bubble chat-bubble--user';
    msg.textContent = text;
    row.appendChild(msg);
    chatLog.appendChild(row);
    scrollChatToBottom();
  }

  function hideLiveBubble() {
    liveBubble.classList.remove('is-visible');
    liveBubbleOptions.hidden = true;
    liveBubbleText.textContent = '';
  }

  // Shows a question near the character's head, waits for the user's answer,
  // THEN moves both the question and the answer up to the top chat log.
  function askNearHead(text, highlightWord, highlightClass) {
    return new Promise(resolve => {
      liveBubble.classList.add('is-visible');
      liveBubbleOptions.hidden = true;
      typeInto(liveBubbleText, text, CHAT_TYPE_SPEED_MS).then(() => {
        liveBubbleText.innerHTML = highlightedHtml(text, highlightWord, highlightClass);
        liveBubbleOptions.hidden = false;

        function onClick(e) {
          const answer = e.target.dataset.answer;
          if (!answer) return;
          liveBubbleOptions.removeEventListener('click', onClick);
          const charHtml = liveBubbleText.innerHTML;
          const userText = answer === 'yes' ? t('confirm_yes') : t('confirm_no');
          hideLiveBubble();
          commitCharMessage(charHtml);
          commitUserMessage(userText);
          resolve(answer === 'yes');
        }
        liveBubbleOptions.addEventListener('click', onClick);
      });
    });
  }

  // Shows a question with a single "got it" button, waits for the click,
  // then moves both messages up to the top chat log.
  function askSingleConfirm(text, highlightWord, highlightClass) {
    const noBtn = liveBubbleOptions.querySelector('[data-answer="no"]');
    return new Promise(resolve => {
      liveBubble.classList.add('is-visible');
      liveBubbleOptions.hidden = true;
      noBtn.style.display = 'none';
      typeInto(liveBubbleText, text, CHAT_TYPE_SPEED_MS).then(() => {
        liveBubbleText.innerHTML = highlightedHtml(text, highlightWord, highlightClass);
        liveBubbleOptions.hidden = false;

        function onClick(e) {
          const answer = e.target.dataset.answer;
          if (!answer) return;
          liveBubbleOptions.removeEventListener('click', onClick);
          noBtn.style.display = '';
          const charHtml = liveBubbleText.innerHTML;
          hideLiveBubble();
          commitCharMessage(charHtml);
          commitUserMessage(t('confirm_yes'));
          resolve();
        }
        liveBubbleOptions.addEventListener('click', onClick);
      });
    });
  }

  // Swaps the character to its side-profile pose and slides it off the right edge of the screen.
  function triggerCharacterExit() {
    const wrap = document.querySelector('.stage__character-wrap');
    const img = document.querySelector('.stage__character');
    img.src = 'character-side.png';
    img.classList.add('is-static');
    requestAnimationFrame(() => {
      wrap.classList.add('is-leaving');
    });
    // once the character has actually left the room, the laptop becomes usable
    setTimeout(enableLaptop, 2650);
  }

  // ---------- laptop hotspot (aligned to the real laptop drawn in room-bg.jpg) ----------
  const laptopBtn = document.getElementById('laptopBtn');
  const laptopGlow = document.getElementById('laptopGlow');
  const stageEl = document.querySelector('.stage');

  // Coordinates measured directly on the source image (room-bg.jpg is 1536x1024).
  const BG_IMG_W = 1536, BG_IMG_H = 1024;
  const LAPTOP_CLICK_RECT = { x: 174, y: 426, w: 265, h: 145 };   // whole laptop, generous tap target
  const LAPTOP_SCREEN_RECT = { x: 196, y: 436, w: 214, h: 108 }; // just the display, for the glow

  // Reproduces the browser's object-fit: cover / object-position: left center math,
  // so the hotspot lines up with the laptop in the artwork at any viewport size.
  function mapImageRectToViewport(rect) {
    const cw = stageEl.clientWidth;
    const ch = stageEl.clientHeight;
    const scale = Math.max(cw / BG_IMG_W, ch / BG_IMG_H);
    const dispH = BG_IMG_H * scale;
    const offsetX = 0; // object-position: left
    const offsetY = (ch - dispH) / 2; // object-position: center (vertical)
    return {
      left: offsetX + rect.x * scale,
      top: offsetY + rect.y * scale,
      width: rect.w * scale,
      height: rect.h * scale
    };
  }

  function positionLaptopHotspot() {
    const click = mapImageRectToViewport(LAPTOP_CLICK_RECT);
    laptopBtn.style.left = `${click.left}px`;
    laptopBtn.style.top = `${click.top}px`;
    laptopBtn.style.width = `${click.width}px`;
    laptopBtn.style.height = `${click.height}px`;

    const glow = mapImageRectToViewport(LAPTOP_SCREEN_RECT);
    laptopGlow.style.left = `${glow.left}px`;
    laptopGlow.style.top = `${glow.top}px`;
    laptopGlow.style.width = `${glow.width}px`;
    laptopGlow.style.height = `${glow.height}px`;
  }

  positionLaptopHotspot();
  window.addEventListener('resize', positionLaptopHotspot);
  window.addEventListener('orientationchange', positionLaptopHotspot);

  function enableLaptop() {
    positionLaptopHotspot();
    laptopBtn.disabled = false;
    laptopGlow.classList.add('is-ready');
  }

  laptopBtn.addEventListener('click', () => {
    if (laptopBtn.disabled) return;
    openLaptopGame();
  });

  async function runTutorial() {
    bookDot.classList.add('is-visible');
    let understood = await askNearHead(t('book_intro'), t('book_word'), 'hl-book');
    while (!understood) {
      understood = await askNearHead(t('book_retry'), t('book_word'), 'hl-book');
    }

    paperDot.classList.add('is-visible');
    understood = await askNearHead(t('paper_intro'), t('paper_word'), 'hl-paper');
    while (!understood) {
      understood = await askNearHead(t('paper_retry'), t('paper_word'), 'hl-paper');
    }

    await askSingleConfirm(t('final_message'), t('final_word'), 'hl-paper');
    triggerCharacterExit();
  }

  // ---------- bottom sheets ----------
  const overlay = document.getElementById('overlay');
  const sheetAbout = document.getElementById('sheetAbout');
  const sheetContact = document.getElementById('sheetContact');
  const bookBtn = document.getElementById('bookBtn');
  const paperBtn = document.getElementById('paperBtn');

  function openSheet(sheet) {
    overlay.classList.add('is-visible');
    sheet.classList.add('is-open');
  }

  function closeSheets() {
    overlay.classList.remove('is-visible');
    sheetAbout.classList.remove('is-open');
    sheetContact.classList.remove('is-open');
  }

  bookBtn.addEventListener('click', () => openSheet(sheetAbout));
  paperBtn.addEventListener('click', () => openSheet(sheetContact));
  overlay.addEventListener('click', closeSheets);
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', closeSheets);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSheets();
  });

  // ---------- laptop game: pixel jump runner ----------
  const laptopScreen = document.getElementById('laptopScreen');
  const laptopFrame = document.getElementById('laptopFrame');
  const laptopCloseBtn = document.getElementById('laptopCloseBtn');
  const winDesktop = document.getElementById('winDesktop');
  const gameExeIcon = document.getElementById('gameExeIcon');
  const winTaskbarApp = document.getElementById('winTaskbarApp');
  const winClock = document.getElementById('winClock');
  const gameWindow = document.getElementById('gameWindow');
  const gameWindowContent = document.getElementById('gameWindowContent');
  const gameMinimizeBtn = document.getElementById('gameMinimizeBtn');
  const gameWinCloseBtn = document.getElementById('gameWinCloseBtn');
  const gameCanvas = document.getElementById('gameCanvas');
  const gctx = gameCanvas.getContext('2d');
  const gameScoreEl = document.getElementById('gameScore');
  const gameBestEl = document.getElementById('gameBest');
  const gameStartMsg = document.getElementById('gameStartMsg');
  const gameOverMsg = document.getElementById('gameOverMsg');
  const gameOverScoreEl = document.getElementById('gameOverScore');
  const gameRestartBtn = document.getElementById('gameRestartBtn');

  const birdExeIcon = document.getElementById('birdExeIcon');
  const birdTaskbarApp = document.getElementById('birdTaskbarApp');
  const birdWindow = document.getElementById('birdWindow');
  const birdWindowContent = document.getElementById('birdWindowContent');
  const birdMinimizeBtn = document.getElementById('birdMinimizeBtn');
  const birdWinCloseBtn = document.getElementById('birdWinCloseBtn');
  const birdCanvas = document.getElementById('birdCanvas');
  const bctx = birdCanvas.getContext('2d');
  const birdScoreEl = document.getElementById('birdScore');
  const birdBestEl = document.getElementById('birdBest');
  const birdStartMsg = document.getElementById('birdStartMsg');
  const birdOverMsg = document.getElementById('birdOverMsg');
  const birdOverScoreEl = document.getElementById('birdOverScore');
  const birdRestartBtn = document.getElementById('birdRestartBtn');

  const winStartBtn = document.getElementById('winStartBtn');
  const winStartMenu = document.getElementById('winStartMenu');
  const winShutdownBtn = document.getElementById('winShutdownBtn');
  const winBatteryEl = document.getElementById('winBattery');
  const winBatteryFillEl = document.getElementById('winBatteryFill');
  const winBatteryPctEl = document.getElementById('winBatteryPct');
  const batteryDeadOverlay = document.getElementById('batteryDeadOverlay');
  const batteryExitBtn = document.getElementById('batteryExitBtn');
  const toastEl = document.getElementById('toast');
  const toastMsgEl = document.getElementById('toastMsg');

  const BEST_KEY = 'az_laptop_jump_best';
  const BIRD_BEST_KEY = 'az_laptop_bird_best';
  let audioCtx = null;

  function beep(freq, dur, type, vol) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type || 'square';
      osc.frequency.value = freq;
      const v = vol || 0.06;
      const now = audioCtx.currentTime;
      gain.gain.setValueAtTime(v, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + dur);
    } catch (e) { /* audio not available, fine */ }
  }

  const sfx = {
    jump: () => beep(520, 0.12, 'square', 0.05),
    score: () => beep(880, 0.08, 'square', 0.04),
    hit: () => beep(120, 0.35, 'sawtooth', 0.07)
  };

  let cw = 0, ch = 0, groundY = 0;
  const player = { x: 0, y: 0, w: 0, h: 0, vy: 0, onGround: true };
  let obstacles = [];
  let speed = 0, baseSpeed = 0;
  let score = 0;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  let started = false, over = false, blocked = false;
  let spawnTimer = 0, nextSpawnIn = 0;
  let rafId = null, lastTime = 0;

  function bestLabel() {
    return (t('game_best').split(':')[0] || 'Best') + ': ' + best;
  }

  function resizeCanvas() {
    const rect = gameCanvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cw = rect.width;
    ch = rect.height;
    gameCanvas.width = Math.floor(cw * dpr);
    gameCanvas.height = Math.floor(ch * dpr);
    gctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    gctx.imageSmoothingEnabled = false;
    groundY = ch * 0.8;
    player.w = Math.max(22, ch * 0.11);
    player.h = player.w;
    player.x = cw * 0.14;
    player.y = groundY - player.h;
    baseSpeed = cw * 0.32;
  }

  function resetGame() {
    obstacles = [];
    score = 0;
    speed = baseSpeed;
    player.vy = 0;
    player.onGround = true;
    player.y = groundY - player.h;
    spawnTimer = 0;
    nextSpawnIn = 900 + Math.random() * 500;
    over = false;
    gameScoreEl.textContent = '0';
    gameOverMsg.hidden = true;
  }

  function spawnObstacle() {
    const h = player.h * (0.7 + Math.random() * 0.7);
    const w = player.h * (0.45 + Math.random() * 0.35);
    obstacles.push({ x: cw + w, y: groundY - h, w, h, passed: false });
  }

  function update(dt) {
    if (blocked || !started || over) return;

    const gravity = ch * 3.4;
    player.vy += gravity * dt;
    player.y += player.vy * dt;
    if (player.y >= groundY - player.h) {
      player.y = groundY - player.h;
      player.vy = 0;
      player.onGround = true;
    }

    speed += dt * 6;

    spawnTimer += dt * 1000;
    if (spawnTimer >= nextSpawnIn) {
      spawnTimer = 0;
      nextSpawnIn = Math.max(500, 1000 - speed * 2) + Math.random() * 400;
      spawnObstacle();
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
      const o = obstacles[i];
      o.x -= speed * dt;
      if (!o.passed && o.x + o.w < player.x) {
        o.passed = true;
        score += 1;
        gameScoreEl.textContent = String(score);
        if (score % 5 === 0) sfx.score();
      }
      if (o.x + o.w < -10) obstacles.splice(i, 1);

      const pad = player.w * 0.18;
      const hit = player.x + pad < o.x + o.w &&
                  player.x + player.w - pad > o.x &&
                  player.y + pad < o.y + o.h &&
                  player.y + player.h > o.y;
      if (hit) gameOver();
    }
  }

  function draw() {
    gctx.clearRect(0, 0, cw, ch);

    const grad = gctx.createLinearGradient(0, 0, 0, ch);
    grad.addColorStop(0, '#1b140d');
    grad.addColorStop(1, '#2a2018');
    gctx.fillStyle = grad;
    gctx.fillRect(0, 0, cw, ch);

    gctx.fillStyle = '#4a3a28';
    gctx.fillRect(0, groundY, cw, ch - groundY);
    gctx.fillStyle = '#6a5438';
    gctx.fillRect(0, groundY, cw, 3);

    gctx.fillStyle = '#e0763a';
    obstacles.forEach(o => gctx.fillRect(Math.round(o.x), Math.round(o.y), Math.round(o.w), Math.round(o.h)));

    gctx.fillStyle = '#f4c430';
    gctx.fillRect(Math.round(player.x), Math.round(player.y), Math.round(player.w), Math.round(player.h));
  }

  function loop(ts) {
    if (!lastTime) lastTime = ts;
    const dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;
    update(dt);
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function jump() {
    if (blocked) return;
    if (!started) { startGame(); return; }
    if (over) { restartGame(); return; }
    if (player.onGround) {
      player.vy = -ch * 1.55;
      player.onGround = false;
      sfx.jump();
    }
  }

  function startGame() {
    started = true;
    gameStartMsg.hidden = true;
    resetGame();
  }

  function restartGame() {
    resetGame();
  }

  function gameOver() {
    if (over) return;
    over = true;
    sfx.hit();
    if (score > best) {
      best = score;
      localStorage.setItem(BEST_KEY, String(best));
    }
    gameOverScoreEl.textContent = String(score);
    gameBestEl.textContent = bestLabel();
    gameOverMsg.hidden = false;
  }

  function checkOrientation() {
    const portrait = window.matchMedia('(orientation: portrait)').matches;
    blocked = portrait && Math.min(window.innerWidth, window.innerHeight) < 720;
    laptopScreen.classList.toggle('is-blocked', blocked);
  }

  function updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    winClock.textContent = `${hh}:${mm}`;
  }
  let clockTimer = null;

  // Opens the laptop screen straight to the Windows-style desktop.
  async function openLaptopGame() {
    laptopScreen.classList.add('is-open');
    showDesktop();
    if (batteryDead) batteryDeadOverlay.hidden = false;
    checkOrientation();
    updateClock();
    if (!clockTimer) clockTimer = setInterval(updateClock, 15000);

    try {
      if (laptopFrame.requestFullscreen) await laptopFrame.requestFullscreen();
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock('landscape').catch(() => {});
      }
    } catch (e) { /* fullscreen/orientation lock not supported here, that's fine */ }
  }

  function closeLaptopGame() {
    laptopScreen.classList.remove('is-open');
    stopGameLoop();
    stopBirdLoop();
    if (clockTimer) { clearInterval(clockTimer); clockTimer = null; }
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    if (screen.orientation && screen.orientation.unlock) {
      try { screen.orientation.unlock(); } catch (e) { /* ignore */ }
    }
  }

  function stopGameLoop() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  // Back to the desktop (open apps keep running "in the background" via their taskbar entry).
  function showDesktop() {
    winDesktop.hidden = false;
    gameWindow.hidden = true;
    birdWindow.hidden = true;
  }

  // Launches (or re-opens) the Jump.exe window.
  function launchGame(fresh) {
    winDesktop.hidden = true;
    birdWindow.hidden = true;
    gameWindow.hidden = false;
    winTaskbarApp.hidden = false;

    if (fresh) {
      started = false;
      over = false;
      gameStartMsg.hidden = false;
      gameOverMsg.hidden = true;
      gameBestEl.textContent = bestLabel();
    }

    requestAnimationFrame(() => {
      resizeCanvas();
      if (fresh) resetGame();
      lastTime = 0;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
  }

  // Minimizes the window back to the desktop without resetting game progress.
  function minimizeGame() {
    winDesktop.hidden = false;
    gameWindow.hidden = true;
  }

  gameExeIcon.addEventListener('click', () => launchGame(true));
  winTaskbarApp.addEventListener('click', () => launchGame(false));
  gameMinimizeBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  gameMinimizeBtn.addEventListener('click', minimizeGame);
  gameWinCloseBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  gameWinCloseBtn.addEventListener('click', () => {
    stopGameLoop();
    winTaskbarApp.hidden = true;
    showDesktop();
  });

  laptopCloseBtn.addEventListener('click', closeLaptopGame);

  // Whole play area is tappable (not just the canvas) — covers the start/game-over overlays too.
  gameRestartBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  gameRestartBtn.addEventListener('click', () => restartGame());
  gameWindowContent.addEventListener('pointerdown', jump);

  // ---------- laptop game 2: Bird.exe (flappy-style) ----------
  let bcw = 0, bch = 0, bGroundY = 0;
  const bird = { x: 0, y: 0, w: 0, h: 0, vy: 0, angle: 0 };
  let pipes = [];
  let bSpeed = 0, bBaseSpeed = 0;
  let bScore = 0;
  let bBest = Number(localStorage.getItem(BIRD_BEST_KEY) || 0);
  let bStarted = false, bOver = false;
  let pipeTimer = 0, nextPipeIn = 0;
  let bRafId = null, bLastTime = 0;

  function bBestLabel() {
    return (t('game_best').split(':')[0] || 'Best') + ': ' + bBest;
  }

  function resizeBirdCanvas() {
    const rect = birdCanvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    bcw = rect.width;
    bch = rect.height;
    birdCanvas.width = Math.floor(bcw * dpr);
    birdCanvas.height = Math.floor(bch * dpr);
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bctx.imageSmoothingEnabled = false;
    bGroundY = bch * 0.9;
    bird.w = Math.max(20, bch * 0.09);
    bird.h = bird.w;
    bird.x = bcw * 0.26;
    bBaseSpeed = bcw * 0.28;
  }

  function resetBirdGame() {
    pipes = [];
    bScore = 0;
    bSpeed = bBaseSpeed;
    bird.y = bch * 0.45;
    bird.vy = 0;
    bird.angle = 0;
    pipeTimer = 0;
    nextPipeIn = 1100;
    bOver = false;
    birdScoreEl.textContent = '0';
    birdOverMsg.hidden = true;
  }

  function spawnPipe() {
    const gapH = Math.max(bch * 0.24, bch * 0.34 - bScore * bch * 0.004);
    const margin = bch * 0.08;
    const gapY = margin + Math.random() * (bGroundY - margin * 2 - gapH);
    const w = Math.max(28, bch * 0.14);
    pipes.push({ x: bcw + w, w, gapY, gapH, passed: false });
  }

  function updateBird(dt) {
    if (blocked || !bStarted || bOver) return;

    const gravity = bch * 2.6;
    bird.vy += gravity * dt;
    bird.y += bird.vy * dt;
    bird.angle = Math.max(-0.5, Math.min(1.1, bird.vy / (bch * 1.6)));

    if (bird.y <= 0) { bird.y = 0; bird.vy = 0; }
    if (bird.y + bird.h >= bGroundY) { bird.y = bGroundY - bird.h; birdGameOver(); }

    bSpeed += dt * 5;

    pipeTimer += dt * 1000;
    if (pipeTimer >= nextPipeIn) {
      pipeTimer = 0;
      nextPipeIn = Math.max(850, 1400 - bSpeed * 1.6) + Math.random() * 300;
      spawnPipe();
    }

    const padX = bird.w * 0.16;
    const padY = bird.h * 0.16;
    for (let i = pipes.length - 1; i >= 0; i--) {
      const p = pipes[i];
      p.x -= bSpeed * dt;
      if (!p.passed && p.x + p.w < bird.x) {
        p.passed = true;
        bScore += 1;
        birdScoreEl.textContent = String(bScore);
        if (bScore % 5 === 0) sfx.score();
      }
      if (p.x + p.w < -10) { pipes.splice(i, 1); continue; }

      const overlapsX = bird.x + bird.w - padX > p.x && bird.x + padX < p.x + p.w;
      if (overlapsX) {
        const hitsTop = bird.y + padY < p.gapY;
        const hitsBottom = bird.y + bird.h - padY > p.gapY + p.gapH;
        if (hitsTop || hitsBottom) birdGameOver();
      }
    }
  }

  function drawBird() {
    bctx.clearRect(0, 0, bcw, bch);

    const sky = bctx.createLinearGradient(0, 0, 0, bch);
    sky.addColorStop(0, '#6fc3e8');
    sky.addColorStop(1, '#bfe8f5');
    bctx.fillStyle = sky;
    bctx.fillRect(0, 0, bcw, bch);

    bctx.fillStyle = '#2e7d32';
    pipes.forEach(p => {
      bctx.fillRect(Math.round(p.x), 0, Math.round(p.w), Math.round(p.gapY));
      bctx.fillRect(Math.round(p.x), Math.round(p.gapY + p.gapH), Math.round(p.w), Math.round(bGroundY - (p.gapY + p.gapH)));
      bctx.fillStyle = '#1b5e20';
      const lip = Math.max(4, p.w * 0.18);
      bctx.fillRect(Math.round(p.x - lip * 0.25), Math.round(p.gapY - lip), Math.round(p.w + lip * 0.5), lip);
      bctx.fillRect(Math.round(p.x - lip * 0.25), Math.round(p.gapY + p.gapH), Math.round(p.w + lip * 0.5), lip);
      bctx.fillStyle = '#2e7d32';
    });

    bctx.fillStyle = '#3f7d32';
    bctx.fillRect(0, Math.round(bGroundY), bcw, Math.round(bch - bGroundY));
    bctx.fillStyle = '#5aa346';
    bctx.fillRect(0, Math.round(bGroundY), bcw, 3);

    bctx.save();
    bctx.translate(Math.round(bird.x + bird.w / 2), Math.round(bird.y + bird.h / 2));
    bctx.rotate(bird.angle);
    bctx.fillStyle = '#f4c430';
    bctx.fillRect(Math.round(-bird.w / 2), Math.round(-bird.h / 2), Math.round(bird.w), Math.round(bird.h));
    bctx.fillStyle = '#c9930f';
    bctx.fillRect(Math.round(bird.w / 2 - bird.w * 0.22), Math.round(-bird.h * 0.12), Math.round(bird.w * 0.22), Math.round(bird.h * 0.28));
    bctx.restore();
  }

  function loopBird(ts) {
    if (!bLastTime) bLastTime = ts;
    const dt = Math.min((ts - bLastTime) / 1000, 0.05);
    bLastTime = ts;
    updateBird(dt);
    drawBird();
    bRafId = requestAnimationFrame(loopBird);
  }

  function flap() {
    if (blocked) return;
    if (!bStarted) { startBirdGame(); return; }
    if (bOver) { restartBirdGame(); return; }
    bird.vy = -bch * 1.05;
    sfx.jump();
  }

  function startBirdGame() {
    bStarted = true;
    birdStartMsg.hidden = true;
    resetBirdGame();
  }

  function restartBirdGame() {
    resetBirdGame();
  }

  function birdGameOver() {
    if (bOver) return;
    bOver = true;
    sfx.hit();
    if (bScore > bBest) {
      bBest = bScore;
      localStorage.setItem(BIRD_BEST_KEY, String(bBest));
    }
    birdOverScoreEl.textContent = String(bScore);
    birdBestEl.textContent = bBestLabel();
    birdOverMsg.hidden = false;
  }

  function stopBirdLoop() {
    if (bRafId) { cancelAnimationFrame(bRafId); bRafId = null; }
  }

  // Launches (or re-opens) the Bird.exe window.
  function launchBird(fresh) {
    winDesktop.hidden = true;
    gameWindow.hidden = true;
    birdWindow.hidden = false;
    birdTaskbarApp.hidden = false;

    if (fresh) {
      bStarted = false;
      bOver = false;
      birdStartMsg.hidden = false;
      birdOverMsg.hidden = true;
      birdBestEl.textContent = bBestLabel();
    }

    requestAnimationFrame(() => {
      resizeBirdCanvas();
      if (fresh) resetBirdGame();
      bLastTime = 0;
      if (!bRafId) bRafId = requestAnimationFrame(loopBird);
    });
  }

  // Minimizes the window back to the desktop without resetting game progress.
  function minimizeBird() {
    winDesktop.hidden = false;
    birdWindow.hidden = true;
  }

  birdExeIcon.addEventListener('click', () => launchBird(true));
  birdTaskbarApp.addEventListener('click', () => launchBird(false));
  birdMinimizeBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  birdMinimizeBtn.addEventListener('click', minimizeBird);
  birdWinCloseBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  birdWinCloseBtn.addEventListener('click', () => {
    stopBirdLoop();
    birdTaskbarApp.hidden = true;
    showDesktop();
  });

  birdRestartBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  birdRestartBtn.addEventListener('click', () => restartBirdGame());
  birdWindowContent.addEventListener('pointerdown', flap);

  document.addEventListener('keydown', (e) => {
    if (!laptopScreen.classList.contains('is-open')) return;
    if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowUp') {
      if (!gameWindow.hidden) { e.preventDefault(); jump(); }
      else if (!birdWindow.hidden) { e.preventDefault(); flap(); }
    }
    if (e.key === 'Escape') closeLaptopGame();
  });
  window.addEventListener('resize', () => {
    if (laptopScreen.classList.contains('is-open')) {
      checkOrientation();
      if (!gameWindow.hidden) resizeCanvas();
      if (!birdWindow.hidden) resizeBirdCanvas();
    }
  });
  window.addEventListener('orientationchange', () => {
    if (laptopScreen.classList.contains('is-open')) checkOrientation();
  });

  // ---------- start menu ----------
  function openStartMenu() { winStartMenu.hidden = false; }
  function closeStartMenu() { winStartMenu.hidden = true; }

  winStartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (winStartMenu.hidden) openStartMenu(); else closeStartMenu();
  });
  winShutdownBtn.addEventListener('click', () => {
    closeStartMenu();
    closeLaptopGame();
  });
  document.addEventListener('click', (e) => {
    if (!winStartMenu.hidden && !winStartMenu.contains(e.target) && e.target !== winStartBtn) {
      closeStartMenu();
    }
  });

  // ---------- laptop battery ----------
  const BATTERY_MAX = 15;             // this laptop's "full charge" for the vignette
  const BATTERY_DRAIN_MS = 180000;    // ~3 minutes to fully drain while the screen is open
  const BATTERY_RECHARGE_MS = 120000; // ~2 minutes to recharge back to full while closed
  let batteryPct = BATTERY_MAX;
  let batteryDead = false;
  let lastBatteryTick = null;

  function updateBatteryUI() {
    const pct = Math.max(0, Math.min(100, batteryPct));
    winBatteryPctEl.textContent = Math.round(pct) + '%';
    winBatteryFillEl.style.width = pct + '%';
    winBatteryEl.classList.toggle('is-critical', pct <= 5);
    winBatteryEl.classList.toggle('is-low', pct > 5 && pct <= BATTERY_MAX);
  }

  function triggerBatteryDead() {
    if (batteryDead) return;
    batteryDead = true;
    stopGameLoop();
    stopBirdLoop();
    closeStartMenu();
    batteryDeadOverlay.hidden = false;
  }

  function tickBattery() {
    const now = Date.now();
    if (lastBatteryTick == null) { lastBatteryTick = now; return; }
    const deltaMs = now - lastBatteryTick;
    lastBatteryTick = now;
    const isOpen = laptopScreen.classList.contains('is-open');

    if (isOpen && !batteryDead) {
      batteryPct -= (BATTERY_MAX * deltaMs) / BATTERY_DRAIN_MS;
      if (batteryPct <= 0) {
        batteryPct = 0;
        triggerBatteryDead();
      }
    } else if (!isOpen && batteryPct < BATTERY_MAX) {
      batteryPct += (BATTERY_MAX * deltaMs) / BATTERY_RECHARGE_MS;
      if (batteryPct >= BATTERY_MAX) {
        batteryPct = BATTERY_MAX;
        batteryDead = false;
      }
    }
    updateBatteryUI();
  }

  updateBatteryUI();
  setInterval(tickBattery, 1000);

  // ---------- toast ----------
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
    toastMsgEl.textContent = msg;
    toastEl.hidden = false;
    requestAnimationFrame(() => toastEl.classList.add('is-visible'));
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('is-visible');
      setTimeout(() => { toastEl.hidden = true; }, 400);
    }, 4500);
  }

  batteryExitBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  batteryExitBtn.addEventListener('click', () => {
    batteryDeadOverlay.hidden = true;
    closeLaptopGame();
    showToast(t('battery_toast_msg'));
  });
});
