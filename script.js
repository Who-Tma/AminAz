document.addEventListener('DOMContentLoaded', () => {
  // ---------- welcome speech bubble ----------
  const bubble = document.getElementById('bubble');
  const bubbleText = document.getElementById('bubbleText');
  const WELCOME_TEXT = 'سلام. به اتاق من خوش اومدی.';
  const TYPE_SPEED_MS = 45;
  const CORNER_DELAY_MS = 5000;  // how long the message stays next to the character's head before moving
  const FADE_AFTER_MS = 5000;    // how long it stays in the corner before fading
  const FADE_DURATION_MS = 1600; // matches the .bubble.is-fading transition in CSS

  function typeWelcome() {
    bubble.classList.add('is-visible');
    let i = 0;
    const interval = setInterval(() => {
      bubbleText.textContent = WELCOME_TEXT.slice(0, i + 1);
      i++;
      if (i >= WELCOME_TEXT.length) {
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

  setTimeout(typeWelcome, 500);

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
          const userText = answer === 'yes' ? 'متوجه شدم' : 'متوجه نشدم';
          hideLiveBubble();
          commitCharMessage(charHtml);
          commitUserMessage(userText);
          resolve(answer === 'yes');
        }
        liveBubbleOptions.addEventListener('click', onClick);
      });
    });
  }

  // Shows a question with a single "متوجه شدم" button, waits for the click,
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
          commitUserMessage('متوجه شدم');
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
    img.src = 'assets/character-side.png';
    img.classList.add('is-static');
    requestAnimationFrame(() => {
      wrap.classList.add('is-leaving');
    });
  }

  async function runTutorial() {
    bookDot.classList.add('is-visible');
    let understood = await askNearHead(
      'اون کتاب روی میز رو می‌بینی؟ مهارت‌هامو توش نوشتم...',
      'کتاب', 'hl-book'
    );
    while (!understood) {
      understood = await askNearHead(
        'باشه، یه بار دیگه می‌گم: همون کتابی که علامت سوال داره رو می‌بینی؟ بزن روش 🙂',
        'کتاب', 'hl-book'
      );
    }

    paperDot.classList.add('is-visible');
    understood = await askNearHead(
      'خوبه! یک برگه هم سمت دیگه‌ میز هست که ایمیل و ایدی تلگراممو داخلش نوشتم؛ می‌تونی پیام بدی',
      'برگه', 'hl-paper'
    );
    while (!understood) {
      understood = await askNearHead(
        'باشه: همون برگه‌ی کنار مداد رو می‌بینی؟ بزن روش.',
        'برگه', 'hl-paper'
      );
    }

    await askSingleConfirm(
      'عالیه! من باید برم، کارم داشتی می‌تونی از طریق همون نامه سمت چپ خبرم کنی...',
      'نامه', 'hl-paper'
    );
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
