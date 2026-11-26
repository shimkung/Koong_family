/* ==========================================================================
   쿵이가족 콘텐츠 목록 (Content Catalog)
   --------------------------------------------------------------------------
   새 콘텐츠를 추가할 때는 아래 배열에 항목을 하나 더 넣고,
   실제 HTML 파일을 해당 폴더(games/ · tests/ · articles/)에 만들면
   메인 화면 카드 그리드와 카테고리 필터에 자동으로 나타납니다.

   cat  : 'game' | 'test' | 'drama' | 'book' | 'ai'
   title/desc/tag/meta : { ko: '…', en: '…' } 두 언어를 함께 적습니다.
   date : YYYY-MM-DD (최신 항목이 위로 오도록 정렬됩니다)
   new  : true 이면 카드 배지가 살짝 빛납니다.
   ========================================================================== */
window.KOONG_CATALOG = [
  {
    id: 'remarried-empress-review',
    cat: 'drama',
    emoji: '👑',
    title: {
      ko: '《재혼황후》 10부작 정주행 후기 — 디즈니+ 실사화, 어디까지 원작 같았나',
      en: '“Remarried Empress” on Disney+ — a 10-episode review of the live-action adaptation'
    },
    desc: {
      ko: '마지막 10화까지 다 보고 쓴 후기. 신민아·주지훈·이종석·이세영 네 사람의 관계, 원작과 달라진 지점, 호불호가 갈린 이유를 정리했습니다.',
      en: 'A complete-series review after the finale: the four leads, what changed from the webtoon, and why reactions split so sharply.'
    },
    href: 'articles/remarried-empress-review.html',
    tag: { ko: '드라마 리뷰', en: 'Drama Review' },
    meta: [
      { ko: '약 7분', en: '7 min' },
      { ko: '10부작 완결', en: 'All 10 episodes' },
      { ko: '디즈니+', en: 'Disney+' }
    ],
    date: '2026-11-26',
    new: true
  },
  {
    id: 'koong-3d-runway',
    cat: 'game',
    emoji: '✨',
    title: {
      ko: '쿵이 3D 무대 — KOONG 3D RUNWAY',
      en: 'Koong 3D Runway'
    },
    desc: {
      ko: '손가락으로 돌리는 3D 런웨이 쇼케이스. 네 가지 조명 테마와 양옆 런웨이 영상, 내 음악까지 바꿔 볼 수 있습니다.',
      en: 'An interactive 3D runway you turn by hand — four lighting moods, moving showcase screens, and your own music.'
    },
    href: 'games/koong-3d-runway.html',
    tag: { ko: '3D 쇼케이스', en: '3D Showcase' },
    meta: [
      { ko: '조명 테마 4', en: '4 lighting moods' },
      { ko: '자유 회전', en: 'Free orbit' },
      { ko: '모바일·PC', en: 'Mobile & PC' }
    ],
    date: '2026-11-26',
    new: true
  },
  {
    id: 'pickle-gakoongi-rhythm',
    cat: 'game',
    emoji: '🎮',
    title: {
      ko: '쿵이 게임 — 런웨이 리듬',
      en: 'Koong Game — Runway Rhythm'
    },
    desc: {
      ko: '음악을 넣으면 비트를 스스로 분석해 3D 런웨이에 노트가 떨어지는 4레인 리듬게임. 설치 없이 브라우저에서 바로, 내 음악으로도 플레이.',
      en: 'A four-lane 3D rhythm game that analyses any track you drop in. Play in the browser with no install, on phones and desktops.'
    },
    href: 'games/pickle-gakoongi-rhythm.html',
    tag: { ko: '무료 리듬게임', en: 'Free Rhythm Game' },
    meta: [
      { ko: '4레인', en: '4 lanes' },
      { ko: '모바일·PC', en: 'Mobile & PC' },
      { ko: '내 음악 사용', en: 'Use your own track' }
    ],
    date: '2026-11-26',
    new: true
  },
  {
    id: 'ai-persona-test',
    cat: 'test',
    emoji: '🧠',
    title: {
      ko: '나는 어떤 크리에이터·리더 유형일까?',
      en: 'What kind of creator or leader are you?'
    },
    desc: {
      ko: '10문항으로 알아보는 AI 시대 성향 & 무드 테스트. 결과 6가지 유형에 강점·주의점·궁합까지 담았습니다.',
      en: 'A 10-question personality check for the AI era — six types, each with strengths, watch-outs and complementary partners.'
    },
    href: 'tests/ai-persona-test.html',
    tag: { ko: '심리테스트', en: 'Personality Test' },
    meta: [
      { ko: '10문항', en: '10 questions' },
      { ko: '약 3분', en: 'About 3 min' },
      { ko: '결과 6유형', en: '6 result types' }
    ],
    date: '2026-11-26'
  },
  {
    id: 'intelligence-origin-review',
    cat: 'book',
    emoji: '📘',
    title: {
      ko: '《지능의 기원》 후기 — 뇌의 다섯 번 혁신을 AI의 눈으로 읽기',
      en: '“A Brief History of Intelligence” — five breakthroughs, read through AI'
    },
    desc: {
      ko: '맥스 베넷 『지능의 기원』(더퀘스트)을 끝까지 읽고 남은 것. 536쪽을 얇게 만드는 다섯 장면과, 우리가 왜 이 책을 지금 읽어야 하는지.',
      en: 'Notes after finishing Max Bennett’s 536-page book: the five scenes worth underlining, and why it reads differently in the AI era.'
    },
    href: 'articles/intelligence-origin-review.html',
    tag: { ko: '책 리뷰', en: 'Book Review' },
    meta: [
      { ko: '약 6분', en: '6 min' },
      { ko: '뇌과학 · AI', en: 'Neuroscience · AI' },
      { ko: '536쪽', en: '536 pages' }
    ],
    date: '2026-11-26',
    new: true
  },
  {
    id: 'ai-music-guide',
    cat: 'ai',
    emoji: '🎵',
    title: {
      ko: '초보자도 5분 만에 이해하는 AI 음악·비주얼 제작 트렌드',
      en: 'AI music and visuals in 2026: a five-minute primer'
    },
    desc: {
      ko: 'AI 음악 생성은 어떤 원리로 동작하고, 프롬프트·마스터링·유통·영상 결합은 어떻게 하는지 한 번에 정리했습니다.',
      en: 'How AI music generation actually works, plus prompting, loudness, distribution and pairing it with video — in one guide.'
    },
    href: 'articles/ai-music-guide.html',
    tag: { ko: '가이드', en: 'Guide' },
    meta: [
      { ko: '약 8분', en: '8 min' },
      { ko: 'AI 음악', en: 'AI music' },
      { ko: '유통·영상', en: 'Release & video' }
    ],
    date: '2026-11-26'
  },
  {
    id: '3d-web-guide',
    cat: 'ai',
    emoji: '🌐',
    title: {
      ko: '설치 없이 웹에서 즐기는 3D 인터랙티브 게임의 원리',
      en: 'How browser 3D games work — with no install at all'
    },
    desc: {
      ko: 'WebGL부터 판정 타이밍, 오디오 분석, 모바일 성능 최적화까지 — 브라우저 3D 게임이 돌아가는 방식을 쉽게 풀었습니다.',
      en: 'From WebGL and hit timing to audio analysis and mobile optimisation — the mechanics behind a browser 3D game.'
    },
    href: 'articles/3d-web-guide.html',
    tag: { ko: '가이드', en: 'Guide' },
    meta: [
      { ko: '약 9분', en: '9 min' },
      { ko: 'WebGL', en: 'WebGL' },
      { ko: '3D 게임', en: '3D games' }
    ],
    date: '2026-11-26'
  }
];
