/* ==========================================================================
   쿵이가족 (KOONG FAMILY) — 공용 스크립트
   1) KR / EN 언어 모드   2) 모바일 메뉴 · 드롭다운
   3) 콘텐츠 카탈로그 렌더 + 카테고리 필터   4) 연도 표기
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- 0) 공용 유틸 ---------- */
  var LANG_KEY = 'koong_lang';
  var CATS = [
    { key: 'game', ko: '쿵미니게임', en: 'Koong Mini Games' },
    { key: 'test', ko: '쿵심리테스트', en: 'Koong Test' },
    { key: 'drama', ko: '드라마/영화', en: 'Drama & Film' },
    { key: 'book', ko: '책', en: 'Books' },
    { key: 'ai', ko: 'AI 가이드', en: 'AI Guides' }
  ];

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function getLang() { return safeGet(LANG_KEY) === 'en' ? 'en' : 'ko'; }

  function catLabel(key, lang) {
    if (key === 'all') return lang === 'en' ? 'All' : '전체';
    for (var i = 0; i < CATS.length; i++) if (CATS[i].key === key) return CATS[i][lang];
    return key;
  }

  function pick(obj, lang) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] != null ? obj[lang] : (obj.ko || '');
  }

  /* ---------- 1) 언어 모드 ---------- */
  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-ko]').forEach(function (el) {
      var v = lang === 'en' ? (el.getAttribute('data-en') || el.getAttribute('data-ko')) : el.getAttribute('data-ko');
      el.innerHTML = v;
    });
    document.querySelectorAll('[data-ko-aria]').forEach(function (el) {
      var v = lang === 'en' ? (el.getAttribute('data-en-aria') || el.getAttribute('data-ko-aria')) : el.getAttribute('data-ko-aria');
      el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-ko-title]').forEach(function (el) {
      var v = lang === 'en' ? (el.getAttribute('data-en-title') || el.getAttribute('data-ko-title')) : el.getAttribute('data-ko-title');
      el.setAttribute('title', v);
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('koong:lang', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    safeSet(LANG_KEY, lang);
    applyLang(lang);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lang-btn]');
    if (!b) return;
    setLang(b.getAttribute('data-lang-btn'));
  });

  /* ---------- 2) 모바일 메뉴 · 드롭다운 ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('.nav-item__toggle')) return;
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  document.querySelectorAll('.nav-item__toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var item = btn.closest('.nav-item');
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-item')) return;
    document.querySelectorAll('.nav-item.open').forEach(function (it) {
      it.classList.remove('open');
      var t = it.querySelector('.nav-item__toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 3) 카탈로그 렌더 ---------- */
  var grid = document.getElementById('catalogGrid');
  var filterBar = document.getElementById('catalogFilters');
  var state = { cat: 'all' };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderCatalog() {
    if (!grid || !window.KOONG_CATALOG) return;
    var lang = getLang();
    var items = window.KOONG_CATALOG.slice().sort(function (a, b) {
      return String(b.date).localeCompare(String(a.date));
    });

    function cardHTML(item) {
      var meta = (item.meta || []).map(function (m) { return '<span>' + esc(pick(m, lang)) + '</span>'; }).join('<i></i>');
      return '' +
        '<article class="card' + (item['new'] ? ' card--new' : '') + '" data-cat="' + esc(item.cat) + '">' +
          '<div class="card__top">' +
            '<div class="card__emoji" aria-hidden="true">' + esc(item.emoji) + '</div>' +
            '<span class="chip">' + esc(pick(item.tag, lang)) + '</span>' +
          '</div>' +
          '<h3><a href="' + esc(item.href) + '">' + esc(pick(item.title, lang)) + '</a></h3>' +
          '<p>' + esc(pick(item.desc, lang)) + '</p>' +
          '<div class="card__meta">' +
            '<span class="chip chip--dim">' + esc(catLabel(item.cat, lang)) + '</span>' +
            meta +
          '</div>' +
        '</article>';
    }

    var counts = { all: items.length };
    CATS.forEach(function (c) { counts[c.key] = 0; });
    items.forEach(function (i) { counts[i.cat] = (counts[i.cat] || 0) + 1; });

    /* 필터: 요청된 5개 카테고리는 항상 보이고, 그 밖의 카테고리가 있으면 뒤에 붙인다 */
    var order = ['all'].concat(CATS.map(function (c) { return c.key; }));
    Object.keys(counts).forEach(function (k) { if (order.indexOf(k) === -1) order.push(k); });

    if (filterBar) {
      filterBar.innerHTML = order.map(function (key) {
        return '<button class="filter" type="button" data-filter="' + key + '" aria-pressed="' +
          (key === state.cat ? 'true' : 'false') + '">' + catLabel(key, lang) + ' <b>' + (counts[key] || 0) + '</b></button>';
      }).join('');
    }

    grid.innerHTML = items.map(cardHTML).join('');
    applyFilter(state.cat);
  }

  function applyFilter(key) {
    if (!grid) return;
    state.cat = key;
    grid.querySelectorAll('.card').forEach(function (c) {
      c.hidden = !(key === 'all' || c.getAttribute('data-cat') === key);
    });
    if (filterBar) {
      filterBar.querySelectorAll('.filter').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-filter') === key ? 'true' : 'false');
      });
    }
  }

  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var b = e.target.closest('.filter');
      if (!b) return;
      applyFilter(b.getAttribute('data-filter'));
      var url = new URL(location.href);
      if (b.getAttribute('data-filter') === 'all') url.searchParams.delete('cat');
      else url.searchParams.set('cat', b.getAttribute('data-filter'));
      history.replaceState(null, '', url.toString());
    });
  }

  var initial = new URLSearchParams(location.search).get('cat');
  if (initial === 'read') initial = 'all'; /* 옛 링크 호환 */
  if (initial) state.cat = initial;

  document.addEventListener('koong:lang', function () {
    if (grid) renderCatalog();
  });

  renderCatalog();

  /* ---------- 4) 연도 ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  /* ---------- 5) 부팅: 저장된 언어 적용 ---------- */
  applyLang(getLang());
})();
