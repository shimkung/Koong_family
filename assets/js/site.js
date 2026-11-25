/* ==========================================================================
   쿵이가족 (KOONG FAMILY) — 공용 스크립트
   1) 모바일 메뉴  2) 콘텐츠 카탈로그 렌더 + 카테고리 필터  3) 연도 표기
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- 1) 모바일 메뉴 ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
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

  /* ---------- 2) 카탈로그 렌더 ---------- */
  var grid = document.getElementById('catalogGrid');
  if (grid && window.KOONG_CATALOG) {
    var LABEL = { game: '게임', test: '심리테스트', read: '읽을거리' };
    var FILTERS = [
      { key: 'all', name: '전체' },
      { key: 'game', name: '게임' },
      { key: 'test', name: '심리테스트' },
      { key: 'read', name: '읽을거리' }
    ];
    var items = window.KOONG_CATALOG.slice().sort(function (a, b) {
      return String(b.date).localeCompare(String(a.date));
    });

    function esc(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }

    function cardHTML(item) {
      var meta = (item.meta || []).map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('<i></i>');
      return '' +
        '<article class="card' + (item.date >= '2026-11-26' ? ' card--new' : '') + '" data-cat="' + esc(item.cat) + '">' +
          '<div class="card__top">' +
            '<div class="card__emoji" aria-hidden="true">' + esc(item.emoji) + '</div>' +
            '<span class="chip">' + esc(item.tag) + '</span>' +
          '</div>' +
          '<h3><a href="' + esc(item.href) + '">' + esc(item.title) + '</a></h3>' +
          '<p>' + esc(item.desc) + '</p>' +
          '<div class="card__meta">' +
            '<span class="chip chip--dim">' + esc(LABEL[item.cat] || item.cat) + '</span>' +
            meta +
          '</div>' +
        '</article>';
    }

    var counts = { all: items.length, game: 0, test: 0, read: 0 };
    items.forEach(function (i) { counts[i.cat] = (counts[i.cat] || 0) + 1; });

    var filterBar = document.getElementById('catalogFilters');
    if (filterBar) {
      filterBar.innerHTML = FILTERS.map(function (f) {
        return '<button class="filter" type="button" data-filter="' + f.key + '" aria-pressed="' +
          (f.key === 'all' ? 'true' : 'false') + '">' + f.name + ' <b>' + (counts[f.key] || 0) + '</b></button>';
      }).join('');
    }

    grid.innerHTML = items.map(cardHTML).join('');

    function applyFilter(key) {
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
      });
    }

    var initial = new URLSearchParams(location.search).get('cat');
    if (initial && counts[initial]) applyFilter(initial);
  }

  /* ---------- 3) 연도 ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
