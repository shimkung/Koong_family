/* ==========================================================================
   쿵이가족 콘텐츠 목록 (Content Catalog)
   --------------------------------------------------------------------------
   새 콘텐츠를 추가할 때는 아래 배열에 항목을 하나 더 넣고,
   실제 HTML 파일을 해당 폴더(games/ · tests/ · articles/)에 만들면
   메인 화면 카드 그리드와 카테고리 필터에 자동으로 나타납니다.

   cat 종류 : 'game' (게임) | 'test' (심리테스트) | 'read' (읽을거리)
   emoji     : 카드 아이콘
   tag       : 카드 우측 상단 배지 문구
   meta      : 카드 하단 짧은 정보 (여러 개는 · 로 구분)
   href      : 사이트 최상위 기준 상대 경로
   date      : YYYY-MM-DD (최신 항목이 위로 오도록 정렬됩니다)
   featured  : true 이면 맨 위 대형 배너에도 노출
   ========================================================================== */
window.KOONG_CATALOG = [
  {
    id: 'pickle-gakoongi-rhythm',
    cat: 'game',
    emoji: '🎮',
    title: '피클 가쿵이 — 런웨이 리듬',
    desc: '음악을 넣으면 비트를 스스로 분석해 3D 런웨이에 노트가 떨어지는 4레인 리듬게임. 설치 없이 브라우저에서 바로, 내 음악으로도 플레이.',
    href: 'games/pickle-gakoongi-rhythm.html',
    tag: '무료 리듬게임',
    meta: ['4레인', '모바일·PC', '내 음악 사용'],
    date: '2026-11-26',
    featured: true
  },
  {
    id: 'ai-persona-test',
    cat: 'test',
    emoji: '🧠',
    title: '나는 어떤 크리에이터·리더 유형일까?',
    desc: '10문항으로 알아보는 AI 시대 성향 & 무드 테스트. 결과 6가지 유형에 강점·주의점·궁합까지 담았습니다.',
    href: 'tests/ai-persona-test.html',
    tag: '심리테스트',
    meta: ['10문항', '약 3분', '결과 6유형'],
    date: '2026-11-26'
  },
  {
    id: 'ai-music-guide',
    cat: 'read',
    emoji: '🎵',
    title: '초보자도 5분 만에 이해하는 AI 음악·비주얼 제작 트렌드',
    desc: 'AI 음악 생성은 어떤 원리로 동작하고, 프롬프트·마스터링·유통·영상 결합은 어떻게 하는지 한 번에 정리했습니다.',
    href: 'articles/ai-music-guide.html',
    tag: '가이드',
    meta: ['약 8분', 'AI 음악', '유통·영상'],
    date: '2026-11-26'
  },
  {
    id: '3d-web-guide',
    cat: 'read',
    emoji: '🌐',
    title: '설치 없이 웹에서 즐기는 3D 인터랙티브 게임의 원리',
    desc: 'WebGL부터 판정 타이밍, 오디오 분석, 모바일 성능 최적화까지 — 브라우저 3D 게임이 돌아가는 방식을 쉽게 풀었습니다.',
    href: 'articles/3d-web-guide.html',
    tag: '가이드',
    meta: ['약 9분', 'WebGL', '3D 게임'],
    date: '2026-11-26'
  }
];
