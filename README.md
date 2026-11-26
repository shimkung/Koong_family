# 쿵이가족 KOONG FAMILY

가족이 만든 게임·심리테스트·읽을거리를 모아 두는 작은 웹 놀이터입니다.
정적 파일만으로 동작하며, GitHub Pages로 배포됩니다.

- **사이트 주소**: https://beathousemusic.today/
- **저장소**: https://github.com/shimkung/Koong_family
- **테마**: 검은 바탕(`#09090B`) + 형광 노랑(`#E2FF00`)

> 🌐 사이트는 커스텀 도메인 **`beathousemusic.today`** 로 서비스되고, 루트(`/`)에서 바로 열립니다.
> 링크·canonical·og:url·sitemap에는 항상 `https://beathousemusic.today/` 기준으로 적어 주세요.
> 옛 GitHub Pages 주소로 들어와도 GitHub Pages가 새 도메인으로 넘겨줍니다.
> 저장소 이름은 대문자 `K`와 언더바 `_`를 쓰는 **`Koong_family`** 입니다(저장소 URL에만 해당).

---

## 1. 폴더 구조

```
.
├─ index.html                      메인 (짧은 소개 · 카드 그리드 · 카테고리 필터)
├─ about.html                      소개
├─ privacy.html                    개인정보처리방침 (AdSense 쿠키·맞춤광고 안내 포함)
├─ terms.html                      이용약관
├─ contact.html                    문의하기 (osy500133@gmail.com)
├─ 404.html                        없는 페이지 안내
├─ robots.txt / sitemap.xml / ads.txt
├─ data/
│   └─ catalog.js                  ★ 콘텐츠 목록 (여기만 고치면 메인 카드가 바뀝니다)
├─ assets/
│   ├─ css/style.css               공용 디자인
│   └─ js/site.js                  메뉴 · 카드 렌더 · 필터
├─ games/
│   ├─ pickle-gakoongi-rhythm.html    쿵이 게임 소개 · 조작법 · 공략 (긴 글)
│   ├─ pickle-gakoongi-rhythm-app.html 게임 실행 파일 (단일 HTML, 주소 유지)
│   ├─ koong-3d-runway.html           쿵이 3D 무대 소개 · 조작법 (긴 글)
│   └─ koong-3d-runway-app.html       3D 무대 실행 파일 (단일 HTML, 주소 유지)
├─ tests/
│   └─ ai-persona-test.html        심리테스트 (10문항 / 6유형, KR·EN)
└─ articles/
    ├─ remarried-empress-review.html   《재혼황후》 드라마 리뷰
    ├─ intelligence-origin-review.html 《지능의 기원》 책 리뷰
    ├─ ai-music-guide.html             AI 가이드
    └─ 3d-web-guide.html               AI 가이드
```

---

## 2. 새 콘텐츠 추가하는 법

### (1) 파일 만들기

- 게임 → `games/내게임.html`
- 심리테스트 → `tests/내테스트.html`
- 글 → `articles/내글.html`

기존 페이지 하나를 복사해서 내용만 바꾸는 방법이 가장 빠릅니다.
(공용 CSS `assets/css/style.css`와 `assets/js/site.js`를 그대로 쓰면 디자인이 자동으로 맞습니다.)

### (2) 목록에 등록하기

`data/catalog.js` 배열 맨 위에 항목을 하나 추가하면 메인 화면 카드와 필터에 자동으로 나타납니다.

```js
{
  id: 'my-new-game',              // 고유 아이디(영문·하이픈)
  cat: 'game',                    // 'game' | 'test' | 'drama' | 'book' | 'ai'
  emoji: '🎯',
  title: { ko: '새로 만든 게임', en: 'My new game' },
  desc: { ko: '카드에 보일 두 줄 소개.', en: 'Two lines for the card.' },
  href: 'games/my-new-game.html', // 최상위 기준 경로
  tag: { ko: '무료 게임', en: 'Free game' },
  meta: [{ ko: '1인 플레이', en: 'Single player' }, { ko: '모바일 지원', en: 'Mobile' }],
  date: '2026-12-01'              // 최신 날짜가 위로 정렬됨
}
```

`new: true` 를 넣으면 카드 배지가 살짝 빛납니다.

### KR / EN 두 언어로 쓰는 법

모든 페이지는 상단 오른쪽 `KR / EN` 버튼으로 언어를 바꿉니다. 선택은 `localStorage('koong_lang')` 에 저장되어
페이지를 옮겨도 유지되고, 게임 화면도 같은 값을 씁니다.

- **본문처럼 긴 내용**은 `<div class="lang-ko"> … </div>` 와 `<div class="lang-en"> … </div>` 두 블록으로 나눠 씁니다.
  CSS가 `html[data-lang]` 값에 따라 한쪽만 보여 줍니다.
- **버튼·메뉴처럼 짧은 문구**는 한 요소에 `data-ko="홈" data-en="Home"` 처럼 적습니다. (`data-ko-aria`, `data-ko-title` 도 같습니다)
- 접근성 라벨 등은 `data-ko-aria` / `data-en-aria` 쌍으로 적습니다.
- 새 글을 쓸 때도 같은 방식으로 두 블록을 함께 넣으면 영어 모드에서 바로 읽힙니다.

### (3) 푸시

```bash
git add .
git commit -m "새 콘텐츠: ..."
git push
```

푸시 후 1~2분 안에 사이트에 반영됩니다.

---

## 3. 게임 최신본으로 교체하기

게임 실행 파일은 두 개입니다.

| 파일 | 내용 |
|---|---|
| `games/pickle-gakoongi-rhythm-app.html` | 쿵이 게임 — 런웨이 리듬(4레인 리듬게임, 약 7MB) |
| `games/koong-3d-runway-app.html` | 쿵이 3D 무대(손으로 돌리는 3D 런웨이 쇼케이스, 약 2.2MB) |

(2026-11-26 기준 최신 버전 반영: 판정 패드 1:1 정렬 · 물방울 터치감 · 쇼케이스 영상 3D 무빙 · 카메라 리액션,
리듬게임은 **시점이 항상 고정**되어 `시점 고정` 버튼이 없습니다.)
새 버전이 나오면 아래 둘 중 하나로 교체하면 됩니다.

**방법 A — 파일만 갈아끼우기 (기존 주소 유지)**

```bash
cp 새게임.html games/pickle-gakoongi-rhythm-app.html
git add . && git commit -m "게임 v2 적용" && git push
```

**방법 B — 새 파일로 추가하고 링크만 변경**

1. `games/pickle-gakoongi-rhythm-v2.html` 로 업로드
2. `games/pickle-gakoongi-rhythm.html` 안의 `바로 플레이하기` 링크를 v2로 수정
3. (선택) 이전 버전은 `archive/` 폴더로 옮겨 보관

> 리듬게임 파일은 약 7MB(내장 기본 트랙·영상 포함), 3D 무대 실행 파일은 약 2.2MB(내장 쇼케이스 영상 포함)입니다.
> GitHub는 파일당 100MB까지 허용하므로 문제없지만, 너무 커지면 로딩이 느려집니다.

---

## 4. Google AdSense 켜는 순서

1. **사이트 승인 신청** — https://adsense.google.com 에서 사이트 URL
   `https://beathousemusic.today/` 추가 → 소유 확인(사이트에 코드 삽입 또는 Search Console 인증).
2. **게시자 ID 확인** — `ca-pub-XXXXXXXXXXXXXXXX` 형식의 ID를 발급받습니다.
3. **모든 HTML 파일의 주석 해제** — `<head>` 안에 아래 주석이 있습니다.

   ```html
   <!--
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   -->
   ```

   주석 기호를 지우고 `ca-pub-...` 를 실제 ID로 바꿉니다.
   (index, 게임 소개, 테스트, 글 2편, about, privacy, terms, contact 전부)

4. **광고 슬롯 켜기** — 페이지 안의 아래 형태를 찾아 `data-ad-ready="false"` → `"true"` 로 바꾸고,
   그 안에 애드센스 광고 단위 코드를 넣습니다.

   ```html
   <!-- ADSENSE_SLOT: home-top | 메인 상단 -->
   <div class="ad-slot" data-ad-ready="false" data-ad-slot="home-top"> ... </div>
   ```

   기본 CSS는 `display:none` 이라, 승인 전에는 빈 회색 박스가 보이지 않습니다.

5. **ads.txt 활성화** — `ads.txt` 안의 마지막 줄 주석을 풀고 `pub-...` 를 실제 ID로 바꿉니다.

### 현재 광고 슬롯 위치

| 슬롯 ID | 페이지 | 위치 |
|---|---|---|
| `home-top` | 메인 | 히어로 아래, 콘텐츠 시작 전 |
| `home-bottom` | 메인 | 카드·소개 섹션 아래 |
| `game-top` | 게임 소개 | 제목·플레이 버튼과 40px 이상 떨어진 곳 |
| `game-mid` | 게임 소개 | 조작법/판정 설명 뒤, 본문 중간 |
| `game-bottom` | 게임 소개 | 관련 링크 아래 |
| `test-top` | 심리테스트 | 테스트 시작 영역 위 |
| `test-bottom` | 심리테스트 | 설명·관련 링크 아래 |
| `article-top` / `article-mid` / `article-bottom` | 글 2편 | 본문 상·중·하 |

게임 **실행 페이지**(`-app.html`)에는 광고를 넣지 않았습니다. 전체 화면 캔버스 게임 위에 광고를 얹으면
오클릭·플레이 방해로 정책 위반이 되기 쉽기 때문입니다.

### 피해야 할 배치 (정책)

- 플레이 버튼·메뉴 버튼 **바로 옆/위**에 광고 두기
- 광고를 닫기 어려운 팝업·플로팅 박스로 띄우기
- “클릭해 주세요”, 화살표 등으로 클릭 유도
- 광고와 콘텐츠를 구분할 수 없게 만들기
- 게임 화면을 가리는 배치

---

## 5. 로컬에서 미리 보기

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

`file://` 로 열면 상대 경로·일부 스크립트가 동작하지 않을 수 있으니 로컬 서버 사용을 권장합니다.

---

## 6. 배포 (GitHub Pages)

- 브랜치: `main` / 폴더: `/` (root)
- 설정 위치: 저장소 → Settings → Pages
- 배포 후 주소: https://beathousemusic.today/
- 커스텀 도메인: `CNAME` 파일에 `beathousemusic.today` (지우면 GitHub Pages 기본 주소로 돌아갑니다)
- 설정 → Pages → Custom domain 에도 `beathousemusic.today` + Enforce HTTPS 체크
- `.nojekyll` 파일이 있어 Jekyll 처리를 건너뜁니다. (지우지 마세요)

---

## 7. 애드센스 승인 전 체크리스트

- [x] 소개·문의·개인정보처리방침·이용약관 4종 페이지 + 모든 페이지 하단 링크
- [x] 실제 문의 이메일 표기 (`osy500133@gmail.com`)
- [x] 쿠키·맞춤형 광고·거부 방법 안내 (privacy.html)
- [x] `robots.txt` 에서 Mediapartners-Google 허용
- [x] `sitemap.xml` 최신 URL
- [x] HTTPS (GitHub Pages 기본 제공)
- [x] 모바일 대응 (반응형)
- [ ] 승인 후: 게시자 ID 교체 + 광고 슬롯 활성화 + ads.txt
- [ ] 승인 후: Search Console·애널리틱스 연결(선택)

---

## 8. 참고

- 폰트: Pretendard(CDN), Black Han Sans·Bebas Neue(Google Fonts)
- 3D 엔진: three.js 0.160.0 (게임 파일이 unpkg → jsDelivr 순으로 불러옴)
- 게임에서 넣은 음악·영상은 브라우저 안에서만 처리되며 서버로 전송되지 않습니다.
