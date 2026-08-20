document.addEventListener('DOMContentLoaded', () => {

  // ---------- translations ----------
  const I18N = {
    fa: {
      dir: 'rtl',
      welcome: 'سلام. به اتاق من خوش اومدی.',
      book_intro: 'اون کتاب روی میز رو می‌بینی؟ مهارت‌هامو توش نوشتم...',
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
      sheet_close: 'بستن'
    },
    en: {
      dir: 'ltr',
      welcome: 'Hi. Welcome to my room.',
      book_intro: 'See that book on the desk? I wrote my skills in it...',
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
      sheet_close: 'Close'
    },
    ru: {
      dir: 'ltr',
      welcome: 'Привет. Добро пожаловать в мою комнату.',
      book_intro: 'Видишь книгу на столе? Я записал туда свои навыки...',
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
      sheet_close: 'Закрыть'
    },
    de: {
      dir: 'ltr',
      welcome: 'Hallo. Willkommen in meinem Zimmer.',
      book_intro: 'Siehst du das Buch auf dem Tisch? Ich habe meine Fähigkeiten dort reingeschrieben...',
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
      sheet_close: 'Schließen'
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
  }

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
});
