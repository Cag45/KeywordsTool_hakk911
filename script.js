let interval;
let lang = 'en';

function start() {
  const keyword = document.getElementById('keyword').value.trim();
  if (!keyword) return;
  interval = setInterval(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    const line = keyword + ' ' + random + 'k';
    const output = document.getElementById('output');
    output.value += line + '\n';
    document.getElementById('count').innerText = output.value.trim().split('\n').length;
    output.scrollTop = output.scrollHeight;
  }, 500);
}

function stop() {
  clearInterval(interval);
}

function copyResults() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
}

function clearResults() {
  document.getElementById('output').value = '';
  document.getElementById('count').innerText = '0';
}

function toggleLang() {
  const html = document.getElementById('htmlTag');
  const isEn = lang === 'en';
  lang = isEn ? 'ar' : 'en';
  document.body.style.direction = isEn ? 'rtl' : 'ltr';
  html.lang = lang;
  document.getElementById('flag').src = isEn ? 'flag1.png' : 'flag2.png';
  document.getElementById('title').innerText = isEn ? 'أداة الكلمات المفتاحية | @hakk911' : 'Keywords Tool | @hakk911';
  document.getElementById('inputLabel').innerText = isEn ? 'ادخل الكلمات المفتاحية الخاصه بك :' : 'Enter your keywords:';
  document.getElementById('startBtn').innerText = isEn ? 'تشغيل' : 'Start';
  document.getElementById('stopBtn').innerText = isEn ? 'ايقاف' : 'Stop';
  document.getElementById('copyBtn').innerText = isEn ? 'نسخ الكل' : 'Copy All';
  document.getElementById('clearBtn').innerText = isEn ? 'تنضيف النتائج' : 'Clear';
  document.getElementById('resultsLabel').innerHTML = isEn ? 'النتائج : <span id="count">' + document.getElementById('count').innerText + '</span>' : 'Results: <span id="count">' + document.getElementById('count').innerText + '</span>';
}