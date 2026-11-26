/* ==========================================================================
   쿵이가족 6축 MBTI — 콘텐츠 데이터 (KR / EN)
   --------------------------------------------------------------------------
   4축(E/I · S/N · T/F · J/P)에 A/O(자신감 / 과사고)와 H/C(온기 / 냉철)를 더한
   6축 64조합 리포트용 데이터입니다. 모든 문항과 문장은 쿵이가족이 직접 쓴
   오리지널 콘텐츠이며, 타 사이트의 문항·결과 문구를 옮겨 오지 않았습니다.

   구성
     axes      : 6개 축의 이름·양극·비율별 한 줄 해석
     types     : 16유형 핵심 리포트 (겉모습·속마음·강점·연애·직업)
     mods.ao   : A(자신감) / O(과사고) 보정 문단
     mods.hc   : H(온기) / C(냉철) 보정 문단
     combos    : A/O × H/C 4조합의 헤드라인과 심층·연애·직업 문단
     questions : 36문항 (축마다 6문항, 선택지 4개)

   문항 설계 원칙 (v2 · 36문항)
     1) 한 문항은 한 축만 잰다. S/N 문항에는 감정·관계 단서를 넣지 않고,
        T/F 문항은 '판단의 최종 기준'을, J/P 문항은 '닫고 싶은가 열어 두고
        싶은가'를, A/O는 '흔들린 뒤 얼마나 빨리 돌아오는가'를, H/C는
        '사람에게 얼마나 가까이 가는가'를 묻는다.
     2) 선택지 순서 편향(primacy effect)을 줄이기 위해 문항마다 극의 방향을
        뒤집고, 선택지별 가중치(w)를 데이터에 명시한다.
          정방향 w: [-3, -1, +1, +3]   (왼쪽 극 강 → 오른쪽 극 강)
          역방향 w: [+3, +1, -1, -3]   (오른쪽 극 강 → 왼쪽 극 약)
        축마다 정방향 3문항 + 역방향 3문항으로 균형을 맞춰, 첫 번째 선택지만
        계속 고르는 응답 편향이 생겨도 축 점수가 0(50%)으로 상쇄된다.
     3) 축별 합계 범위는 -18 ~ +18 (6문항 × |3|)이며, 양수면 오른쪽 극
        (I · N · F · P · O · C), 음수면 왼쪽 극(E · S · T · J · A · H)이다.
   ========================================================================== */

window.KOONG_MBTI6 = {
  axes: [
    {
      key: 'EI',
      L: { letter: 'E', ko: '외향', en: 'Extraverted' },
      R: { letter: 'I', ko: '내향', en: 'Introverted' },
      ko: {
        name: '에너지 방향',
        short: '에너지',
        L: {
          strong: '사람이 곧 충전기예요. 대화가 길어질수록 머리가 맑아지고, 혼자 오래 있으면 감각이 무뎌지는 느낌이 들죠.',
          mild: '혼자도 좋지만 사람과 있을 때 조금 더 살아나요. 말로 꺼내는 순간 생각이 정리되는 쪽이에요.'
        },
        R: {
          strong: '혼자 있는 시간이 없으면 나를 잃어요. 사람을 좋아해도 하루의 끝은 반드시 혼자여야 하죠.',
          mild: '사람을 피하지는 않지만 에너지는 혼자 있을 때 채워져요. 약속이 있던 다음 날은 조용한 오전이 필요해요.'
        },
        even: '사람과 혼자, 양쪽에서 반반씩 충전해요. 그날의 기분에 따라 두 모드를 자연스럽게 오가요.'
      },
      en: {
        name: 'Energy',
        short: 'Energy',
        L: {
          strong: 'People are your charger. The longer a conversation runs, the clearer your head gets — and too much time alone dulls your senses.',
          mild: 'You like your own company, but you come alive a little more around people. Thinking out loud is how things get organised.'
        },
        R: {
          strong: 'Without time alone you lose yourself. You may love people, but the end of every day has to belong to you.',
          mild: 'You do not avoid people, but your energy refills in private. The morning after a social night needs to stay quiet.'
        },
        even: 'You recharge about half from people and half from solitude, switching between the two depending on the day.'
      }
    },
    {
      key: 'SN',
      L: { letter: 'S', ko: '현실', en: 'Sensing' },
      R: { letter: 'N', ko: '직관', en: 'Intuitive' },
      ko: {
        name: '인식 방식',
        short: '인식',
        L: {
          strong: '눈에 보이고 손에 잡히는 것부터 믿어요. 구체적인 경험과 숫자가 있어야 마음이 놓이고, 추상적인 말은 오래 붙잡고 있어야 이해돼요.',
          mild: '현실 감각이 기본이지만, 가끔 "이게 왜 이렇게 됐을까"를 생각하며 한 걸음 물러서 보기도 해요.'
        },
        R: {
          strong: '보이는 것보다 그 뒤에 있는 의미가 먼저 보여요. 하나를 보면 열 가지 가능성이 따라붙고, 그게 당신의 가장 큰 재능이자 가장 큰 산만함이에요.',
          mild: '사실을 좋아하지만 패턴과 의미를 찾는 쪽에도 마음이 가요. 남들이 지나친 연결고리를 종종 발견해요.'
        },
        even: '구체적인 현실과 그 너머의 의미를 비슷하게 오가요. 설명할 때도 사례와 해석을 함께 꺼내는 편이에요.'
      },
      en: {
        name: 'Perception',
        short: 'Perception',
        L: {
          strong: 'You trust what you can see and touch. Concrete experience and numbers put you at ease; abstract talk needs time before it lands.',
          mild: 'Practicality is your baseline, though you sometimes step back and ask why things turned out this way.'
        },
        R: {
          strong: 'You see the meaning behind things before the thing itself. One sighting brings ten possibilities — your greatest talent and your greatest distraction.',
          mild: 'You like facts but drift toward patterns and meaning, often spotting a connection others walked straight past.'
        },
        even: 'You move between the concrete and the meaning behind it. Even your explanations carry both an example and an interpretation.'
      }
    },
    {
      key: 'TF',
      L: { letter: 'T', ko: '논리', en: 'Thinking' },
      R: { letter: 'F', ko: '감정', en: 'Feeling' },
      ko: {
        name: '판단 기준',
        short: '판단',
        L: {
          strong: '맞고 틀림이 먼저예요. 기분이 상할 수 있다는 걸 알면서도, 틀린 건 틀렸다고 말해야 다음에 안 틀리죠.',
          mild: '논리로 판단하지만 사람이 다치는 건 싫어요. 그래서 결론은 정확하게, 말투는 부드럽게 고르는 편이에요.'
        },
        R: {
          strong: '사람이 어떻게 느낄지가 판단의 중심이에요. 논리적으로 맞아도 누군가 상처받는다면 그 선택은 오래 못 가요.',
          mild: '원칙도 중요하지만 결국 사람이 편한 쪽을 고르게 돼요. 결정 뒤에 늘 "그 사람은 괜찮을까"가 남아요.'
        },
        even: '머리와 마음이 비슷한 무게로 판단해요. 그래서 결정이 느린 대신, 한번 정하면 오래 후회하지 않아요.'
      },
      en: {
        name: 'Judgement',
        short: 'Judgement',
        L: {
          strong: 'Right and wrong come first. You know feelings can bruise, but saying the wrong thing is wrong is how it gets fixed next time.',
          mild: 'You judge by logic but hate seeing people hurt, so you pick sharp conclusions and soft wording.'
        },
        R: {
          strong: 'How people will feel sits at the centre of your judgement. Even a correct choice cannot last if it wounds someone.',
          mild: 'Principles matter, yet you lean toward whatever lets people breathe. “Will they be okay?” follows every decision.'
        },
        even: 'Head and heart carry about equal weight. Your decisions take longer, but once made they rarely come back as regret.'
      }
    },
    {
      key: 'JP',
      L: { letter: 'J', ko: '계획', en: 'Judging' },
      R: { letter: 'P', ko: '즉흥', en: 'Prospecting' },
      ko: {
        name: '생활 리듬',
        short: '리듬',
        L: {
          strong: '정해진 게 있어야 마음이 놓여요. 여행 동선, 마감, 파일 이름까지 미리 정해 두면 그다음에야 편안히 즐길 수 있죠.',
          mild: '대체로 계획하는 편이지만 모든 걸 정해 두면 숨이 막혀서, 중요한 것만 정하고 나머지는 열어 둬요.'
        },
        R: {
          strong: '정해 두는 순간 재미가 줄어들어요. 마지막 순간에 몰아치는 힘, 그 순간에 떠오르는 선택이 오히려 당신을 살려요.',
          mild: '큰 틀만 잡고 세부는 그때그때 정해요. 계획이 조금 틀어져도 금방 다른 길을 찾아요.'
        },
        even: '계획과 즉흥을 상황에 맞게 섞어요. 중요한 일엔 표를 만들고, 나머지는 흘러가게 두는 편이에요.'
      },
      en: {
        name: 'Rhythm',
        short: 'Rhythm',
        L: {
          strong: 'You relax when something is settled. Travel routes, deadlines, even file names — decide them early and then you can actually enjoy it.',
          mild: 'Mostly a planner, though full control feels suffocating. You settle the important things and leave the rest open.'
        },
        R: {
          strong: 'Fixing things in advance drains the fun. The last-minute push and the choice that appears in the moment are what keep you alive.',
          mild: 'You set a rough frame and decide details as you go. When a plan bends, you find another route quickly.'
        },
        even: 'You mix plan and improvisation by situation — a table for what matters, free flow for everything else.'
      }
    },
    {
      key: 'AO',
      L: { letter: 'A', ko: '자신감', en: 'Assertive' },
      R: { letter: 'O', ko: '과사고', en: 'Overthinking' },
      ko: {
        name: '마음의 안정',
        short: '안정',
        L: {
          strong: '실수해도 오래 붙잡지 않아요. "그럴 수 있지"로 넘기고 다음으로 가죠. 그 단단함이 당신을 오래 굴러가게 해요.',
          mild: '대체로 흔들리지 않지만, 아끼는 사람 앞에서는 생각보다 예민해져요.'
        },
        R: {
          strong: '방금 한 말을 밤에 다시 들어요. 표정 하나, 답장 속도, 말끝의 온도까지 읽고 여러 번 되감죠. 그 해상도가 당신의 재능이고 숙제예요.',
          mild: '결정한 뒤에도 다른 선택지가 떠오르면 한동안 흔들려요. 그래도 겉으로는 잘 티를 안 내는 편이에요.'
        },
        even: '중요한 일엔 신중하고 사소한 일엔 담담해요. 두 모드를 상황에 맞게 골라 쓰는 편이에요.'
      },
      en: {
        name: 'Inner steadiness',
        short: 'Steadiness',
        L: {
          strong: 'A mistake does not hold you long. “It happens,” and on you go — that steadiness is what keeps you running.',
          mild: 'Mostly steady, though you get more sensitive than you expect in front of someone you care about.'
        },
        R: {
          strong: 'You replay what you just said at night — a look, the speed of a reply, the temperature of a sentence ending. That resolution is both your gift and your homework.',
          mild: 'After deciding, a different option can still surface and shake you for a while. You rarely let it show, though.'
        },
        even: 'Careful with what matters, easy-going with the rest — you pick the mode to fit the situation.'
      }
    },
    {
      key: 'HC',
      L: { letter: 'H', ko: '온기', en: 'Warm' },
      R: { letter: 'C', ko: '냉철', en: 'Cool' },
      ko: {
        name: '정서의 온도',
        short: '온도',
        L: {
          strong: '사람의 기분을 온도로 먼저 느껴요. 방에 들어갔을 때 공기가 차가우면 말보다 표정이 먼저 풀리죠. 그래서 사람들이 당신 옆에서 긴장을 늦춰요.',
          mild: '정이 많은 편이지만 아무에게나 다 주지는 않아요. 마음이 열린 사람에게는 한없이 부드러워져요.'
        },
        R: {
          strong: '상처받아도 표정이 잘 안 바뀌어요. 속으로 정리하고 밖으로는 아무 일 없는 얼굴이죠. 그게 당신을 지키는 갑옷이자 사람을 멀리 세우는 벽이에요.',
          mild: '감정을 앞세우기보다 한발 물러서서 보는 편이에요. 그래서 위기에서 침착하지만, 가끔 정 없다는 말을 들어요.'
        },
        even: '따뜻함과 냉정함을 상황에 따라 바꿔요. 사람 앞에서는 부드럽고, 결정의 순간에는 차분해져요.'
      },
      en: {
        name: 'Emotional temperature',
        short: 'Temperature',
        L: {
          strong: 'You read a room by its temperature. If the air is cold, your face softens before you speak — and people around you loosen up.',
          mild: 'You are warm but not indiscriminate. With someone whose door is open, you become endlessly gentle.'
        },
        R: {
          strong: 'Your face barely changes when you are hurt. Inside you are filing it away; outside nothing happened. That is armour that also keeps people at a distance.',
          mild: 'You step back and observe rather than lead with feeling. Calm in a crisis — though occasionally told you seem cold.'
        },
        even: 'You switch between warm and cool as the moment needs — soft in front of people, settled at the moment of decision.'
      }
    }
  ],

  /* ---------- A/O · H/C 보정 문단 ---------- */
  /* ---------- A/O · H/C 보정 문단 ---------- */
  mods: {
    ao: {
      A: {
        ko: {
          label: '단단한 자신감',
          deep: '당신은 실수해도 그 자리에 오래 머물지 않아요. 얼굴이 뜨거워지는 건 잠깐이고, 한 시간 뒤엔 다른 얘기를 하고 있죠. 그래서 주변은 당신을 부러워하고, 그 단단함이 실제로 당신을 오래 굴러가게 해요. 다만 그 속도가 너무 빨라서, 옆 사람이 아직 그 장면에서 헤어나오지 못했을 때 당신은 이미 다음으로 넘어가 있어요. 그래서 가끔 "너는 왜 하나도 안 힘들어 보이냐"는 말을 들어요.',
          love: '확인을 자주 요구하는 편은 아니에요. 좋으면 좋다고 하고, 싫으면 그 자리에서 정리해요. 함께 있으면 편안하지만, 상대는 "이 사람은 나 없어도 잘 살 것 같다"고 느낄 수 있어요. 필요 없다는 말 대신, 필요하다는 말을 한 번 더 꺼내 보세요.',
          work: '결정이 빨라요. 정보가 70%만 모여도 방향을 잡고 나머지는 가면서 고치죠. 그 결단이 팀을 앞으로 밀어요. 대신 오래 준비하는 사람에게는 조급함으로 보일 수 있으니, 왜 빨리 가는지 한 번만 설명해 주세요.'
        },
        en: {
          label: 'Grounded confidence',
          deep: 'A mistake does not hold you long. Your face burns for a minute, then an hour later you are talking about something else. People envy it, and it genuinely keeps you moving. The cost is speed: while someone beside you is still inside that moment, you are already on the next thing. That is why you hear “how are you never bothered?”',
          love: 'You do not keep asking for reassurance. You say it if you like someone, and you settle it on the spot if you do not. Being with you is easy — and a partner can feel “this person would be fine without me”. Say that you need them, not only that you do not.',
          work: 'You decide fast: seventy percent of the information sets a direction, the rest gets fixed in motion. That decisiveness pushes a team. To someone who prepares slowly it reads as impatience, so explain once why you move at that speed.'
        }
      },
      O: {
        ko: {
          label: '섬세한 과사고',
          deep: '당신은 방금 한 말을 밤에 다시 들어요. 표정 하나, 답장의 속도, 말끝의 온도까지 읽고 그게 무슨 뜻이었을지 여러 번 상상하죠. 이건 예민함이라기보다 해상도예요. 남들이 흘려보내는 것을 당신은 선명하게 봐요. 그래서 사람을 깊이 이해하지만, 그 선명함이 자기 자신을 향할 때는 오래 아파요.',
          love: '세심함이 당신의 무기예요. 상대가 말하지 않은 기분을 먼저 알아채고, 필요한 순간에 정확한 말을 해요. 다만 확인받고 싶은 마음을 돌려 말하다 보니, 상대는 가끔 시험을 받는 기분이 들어요. 원하는 것을 원문 그대로 말해 보세요. 대개 그게 제일 잘 통해요.',
          work: '위험을 먼저 봐요. 남들이 신나서 달릴 때 "이 부분이 터지면 어떡하지"를 생각하죠. 그래서 당신이 있는 프로젝트는 사고가 적어요. 대신 결정 전에 스스로 시간 제한을 걸어야 해요. 그렇지 않으면 완벽한 답을 기다리다 판이 끝나요.'
        },
        en: {
          label: 'Fine-grained overthinking',
          deep: 'You listen back to what you said tonight. A look, the speed of a reply, the temperature at the end of a sentence — you read all of it and imagine what it meant. That is not touchiness, it is resolution: you see clearly what others let pass. It makes you deeply understanding, and when it turns on yourself it hurts for a long time.',
          love: 'Attentiveness is your weapon. You catch a mood before it is spoken and find the exact words at the exact moment. But asking for reassurance sideways makes a partner feel tested. Say what you want in plain words — that usually works best.',
          work: 'You see risk first. While others run at it cheerfully, you are asking what happens if this part breaks — and projects you are on have fewer accidents. Cap your own decision time, though, or you wait for the perfect answer until the chance is gone.'
        }
      }
    },
    hc: {
      H: {
        ko: {
          label: '따뜻한 온기',
          deep: '당신은 사람의 기분을 온도로 먼저 느껴요. 방에 들어갔을 때 공기가 차가우면 말보다 표정이 먼저 풀리죠. 그래서 사람들이 당신 옆에서 긴장을 늦춰요. 이 온기는 노력해서 나오는 게 아니라서, 당신은 자기가 얼마나 큰 일을 하고 있는지 모르는 경우가 많아요.',
          love: '사랑하는 방식은 상대를 안심시키는 쪽이에요. 밥은 먹었는지, 잘 자라고, 별것 아닌 걸 기억해 두죠. 다만 그 마음이 늘 말로 표현되지는 않아서, 상대가 "좋아하는 건지 그냥 착한 건지" 헷갈릴 때가 있어요.',
          work: '사람을 다루는 자리에서 강해요. 갈등이 생기면 누가 맞는지보다 어떻게 풀지부터 생각하죠. 대신 정작 자기 몫을 뒤로 미루다 마감에 몰리는 일이 생겨요.'
        },
        en: {
          label: 'Warmth',
          deep: 'You feel a person’s mood as temperature. If the air in the room is cold, your face softens before you speak, and people stop bracing. The warmth is not effort for you, which is why you often have no idea how much it does.',
          love: 'You love by making someone feel safe — did you eat, sleep well — and by remembering small things. Because it does not always reach words, a partner can be unsure whether you like them or are simply kind.',
          work: 'You are strong wherever people are involved. Conflict makes you think about how to untangle it before who was right. The catch is that your own work slides to the deadline.'
        }
      },
      C: {
        ko: {
          label: '냉철한 칼날',
          deep: '당신은 상처받아도 표정이 잘 안 바뀌어요. 속으로는 정리하고 있고, 밖으로는 아무 일 없는 얼굴이죠. 그래서 주변은 당신을 강하다고 생각하지만, 사실은 아픈 것을 아프다고 말하는 방법을 배우지 않았을 뿐이에요. 이 냉철함은 당신을 지키는 갑옷이자, 사람을 한 걸음 멀리 세우는 벽이에요.',
          love: '과장하지 않아요. "보고 싶었어"를 아껴 쓰고, 대신 약속은 정확히 지켜요. 그 신뢰가 당신의 사랑법이에요. 다만 상대는 말로 듣고 싶어 하죠. 한 달에 한 번, 계산 없는 말을 연습해 보세요.',
          work: '감정에 휘둘리지 않는 판단이 강점이에요. 불리한 사실도 정확히 말하고, 사람을 정리해야 할 때 칼을 들 수 있죠. 대신 그 정확함이 차갑게 느껴질 때가 있어요. 결론 앞에 사람을 먼저 언급하는 문장 하나를 붙여 보세요.'
        },
        en: {
          label: 'Cool precision',
          deep: 'Your face barely moves when you are hurt. Inside you are filing it; outside nothing happened. People read that as strength, when really you were never taught how to say it hurts. This coolness is armour — and a wall that keeps people one step away.',
          love: 'You do not exaggerate. You ration “I missed you” and keep your promises exactly instead. That reliability is how you love. But a partner wants to hear it. Practise one uncalculated sentence a month.',
          work: 'Your strength is judgement that feeling cannot sway. You state the unfavourable fact precisely and can hold the knife when someone has to go. Sometimes that precision reads as cold — put the person first in one sentence before the conclusion.'
        }
      }
    }
  },

  /* ---------- A/O × H/C 4조합 ---------- */
  combos: {
    AH: {
      ko: {
        headline: '흔들리지 않으면서도 따뜻한 — 생각보다 드문 조합',
        deep: '자신감(A)과 온기(H)가 만나면 사람들은 당신을 "편한데 믿음이 가는 사람"으로 기억해요. 실수해도 무너지지 않고, 그 무던함으로 옆 사람을 안심시키죠. 문제는 그 무던함이 너무 튼튼하다는 거예요. 아무도 당신의 한계를 몰라서, 쓰러질 때까지 아무도 모를 수 있어요. "나 지금 힘들어"를 말할 수 있는 사람이 한 명쯤 필요해요.',
        love: '관계에서 당신은 안정적이에요. 크게 흔들지 않고, 상대의 기분을 살피면서도 자기 중심을 잃지 않죠. 그래서 오래가는 연애를 해요. 다만 갈등이 생기면 "괜찮다"고 넘겨버리는 습관이 있어요. 괜찮지 않은 것을 괜찮다고 말하는 순간, 그 관계는 조금씩 멀어져요.',
        work: '추진력과 사람 다루는 힘이 같이 있어요. 결정을 미루지 않으면서도 주변을 다치게 하지 않죠. 사람을 끌고 가야 하는 자리 — 팀장, 프로젝트 리드, 작은 브랜드의 대표 — 에 특히 잘 맞아요.'
      },
      en: {
        headline: 'Steady and warm — rarer than people think',
        deep: 'Confidence plus warmth makes you the person others call easy to be around and easy to trust. A mistake does not take you down, and that steadiness calms the room. The problem is how strong it is: nobody knows your limit, so nobody may notice until you break. You need one person you can say “I am not okay” to.',
        love: 'In love you are stable — rarely thrown, attentive, and still anchored. That is why your relationships last. The habit to watch is saying “it is fine” when it is not. Every time you say that, the distance grows a little.',
        work: 'You combine drive with the ability to handle people. You do not delay decisions and still avoid wounding anyone. Roles that pull people along — team lead, project lead, founder of something small — suit you especially well.'
      }
    },
    AC: {
      ko: {
        headline: '빠르고 정확하다. 그래서 가끔, 너무 차갑다',
        deep: '자신감(A)과 냉철함(C)의 조합은 결정이 빠르고 감정에 흔들리지 않아요. 문제가 생기면 한숨부터 나오는 대신 해결 순서를 짜죠. 조직에서는 이보다 강한 조합이 드물어요. 대신 가까운 사람에게는 "나를 사람으로 보지 않는 것 같다"는 인상을 줄 수 있어요. 아끼는 사람에게는 결론보다 과정을 조금 보여 주세요.',
        love: '과장이 없어요. 좋아하면 좋아한다고 하고, 아닌 건 아니라고 말하죠. 그 솔직함이 매력이지만, 상대가 원하는 건 정답이 아니라 온도일 때가 있어요. 결론을 말하기 전에 "그래서 내 마음은 이래"를 한 줄 붙여 보세요.',
        work: '결단과 냉정함이 무기예요. 어려운 결정을 미루지 않고 감정 소모 없이 처리하죠. 협상, 구조조정, 위기 대응처럼 모두가 머뭇거리는 자리에서 당신이 필요해요.'
      },
      en: {
        headline: 'Fast and precise — and occasionally, too cold',
        deep: 'Confidence and coolness make you quick and hard to shake. When something breaks you skip the sigh and map the order of fixes. Few combinations are stronger inside an organisation. Close up, though, you can give the impression of not seeing people as people. Show someone you love a little of your process, not just the conclusion.',
        love: 'You do not exaggerate in love. You say it when you like someone and say it when you do not. That honesty is attractive — but sometimes what a partner wants is not the correct answer, it is warmth. Before the conclusion, add one line: “and here is how I feel.”',
        work: 'Decisiveness and cool are your weapons. You do not postpone hard calls and you make them without emotional drag. Negotiation, restructuring, crisis response — where everyone hesitates — is where you are needed.'
      }
    },
    OH: {
      ko: {
        headline: '남의 마음은 다 읽는데, 정작 내 마음엔 제일 늦게 도착한다',
        deep: '과사고(O)와 온기(H)가 겹치면, 당신은 남의 마음을 너무 잘 읽어서 스스로를 소진해요. 상대가 말하지 않은 서운함까지 느끼고, 그것을 자기 책임으로 가져오죠. 이 조합의 재능은 깊은 공감이지만, 대가로 자기 감정이 늘 뒷순위가 돼요. 오늘 하루만, 남의 기분을 읽기 전에 내 기분을 먼저 물어보세요.',
        love: '상대의 작은 변화를 다 알아채요. 그래서 사랑하는 방식도, 사랑받는 방식도 섬세해요. 문제는 그 섬세함이 확인 욕구로 바뀔 때예요. "요즘 나 어때?"를 묻고 싶을 때, 먼저 "나는 요즘 네가 좋아"를 말해 보세요. 같은 말이지만 도착하는 방향이 달라요.',
        work: '사람의 미묘한 신호를 읽는 능력이 강점이에요. 기획, 상담, 교육, 콘텐츠처럼 사람을 이해하는 일에서 특히 빛나요. 대신 감정 노동을 혼자 떠안지 않도록 경계를 정해 두세요. 다 들어주는 사람은 결국 지쳐서 아무도 못 들어줘요.'
      },
      en: {
        headline: 'You read everyone’s heart and reach your own last',
        deep: 'Overthinking plus warmth means you read people so well that you exhaust yourself. You feel the disappointment they did not mention and carry it as your responsibility. Deep empathy is the gift here; your own feelings paying the bill is the cost. For one day, ask how you feel before you read how they do.',
        love: 'You notice every small change in your partner, so both loving and being loved come out finely detailed. The risk is when that detail turns into a need for confirmation. When you want to ask “how am I lately?”, say “I have been fond of you lately” first. Same words, opposite direction.',
        work: 'Your strength is reading the subtle signals of people — planning, counselling, teaching, content. Just set a boundary so you are not carrying the emotional labour alone. The one who listens to everything eventually has nothing left to listen with.'
      }
    },
    OC: {
      ko: {
        headline: '머릿속에선 이미 백 번 끝난 일을, 아무 일 없는 얼굴로 지나간다',
        deep: '과사고(O)와 냉철함(C)의 조합은 겉으로 조용하고 속으로는 가장 복잡해요. 이미 여러 번 시뮬레이션을 돌렸지만 그 과정을 말하지 않아서, 사람들은 당신을 무던하다고 생각해요. 이 조합의 강점은 정확한 통찰이에요. 다만 그 통찰을 혼자 삼키면 아무것도 바뀌지 않아요. 결론만이라도 꺼내 놓는 연습이 필요해요.',
        love: '겉으로는 담담하고, 속으로는 파도가 쳐요. 상대는 그걸 모르니 "무관심한 사람"으로 오해하기도 하죠. 당신의 사랑은 말보다 오래 기억되는 디테일에 있어요. 그 디테일을 한 번씩 말로 설명해 주면 관계의 온도가 달라져요.',
        work: '디테일과 정확성으로 승부해요. 남들이 놓치는 오류를 잡고, 위험을 미리 계산하죠. 분석, 검증, 설계에서 강하지만 결정을 오래 미루면 기회를 잃어요. "지금 아는 것으로 정한다"는 규칙 하나를 스스로에게 붙여 주세요.'
      },
      en: {
        headline: 'A hundred finished versions in your head, one quiet face outside',
        deep: 'Overthinking plus coolness is quiet outside and the most complicated thing in the room inside. You have already run the simulation many times and never say so, so people think you are unbothered. Precise insight is the strength here. Swallowed alone, it changes nothing — practise saying the conclusion out loud.',
        love: 'Calm outside, waves inside. A partner can mistake that for indifference. Your love lives in details that outlast words. Explain one of those details out loud now and then and the temperature of the relationship shifts.',
        work: 'You compete on detail and accuracy — catching the error others missed, calculating the risk ahead of time. Analysis, verification and design are your ground. Delay a decision too long, though, and the chance goes. Give yourself one rule: decide with what you know now.'
      }
    }
  },
  /* ---------- 16유형 ---------- */
  types: {

    INTJ: {
      emoji: '♟️',
      ko: {
        nick: '청사진 설계자', tag: '말없이 다섯 수 앞을 그린다',
        outer: '남들은 당신을 차분하고 예의 바른 사람으로 기억해요. 크게 웃지 않고, 회의에서는 대개 마지막에 한 번 정확하게 말하죠. 그래서 "저 사람은 지금 무슨 생각을 하나" 싶다가도, 다음 날 보면 이미 다 정리해 와 있어요. 조용한 게 무관심이 아니라, 말을 꺼내기 전에 결론까지 가 본 것뿐이에요.',
        inner: '머릿속은 훨씬 시끄러워요. 누가 흘린 말 하나를 3년 뒤 계획에 끼워 보고, 지금 이 선택이 1년 뒤에 어떻게 돌아올지 미리 돌려 봐요. 그런데 그 과정을 설명하지 않아요. 설명이 길어질 것 같고, 어차피 다 이해되지는 않을 거란 걸 알거든요. 그래서 당신의 마음은 말보다 "미리 준비된 행동"으로 먼저 도착해요.',
        strengths: ['어질러진 문제를 구조로 바꿔 버리는 정리력', '다들 흥분할 때 혼자 온도를 낮추는 힘', '한 번 세운 기준을 쉽게 팔지 않는 일관성', '남들이 당연하게 넘기는 구멍을 미리 막아 두는 감각'],
        alone: '혼자 있으면 아무것도 안 하는 것처럼 보여요. 그런데 그 시간에 머릿속에서 내년 계획이 다시 짜이고, 밀린 생각들이 서랍에 정리돼요. 당신에게 혼자는 낭비가 아니라 정비소예요.',
        trigger: '말없이 바뀐 계획, 이유 없이 반복되는 회의, "왜 그렇게까지 생각하냐"는 말. 그리고 애써 준비한 걸 아무도 안 봤을 때. 그때 제일 지쳐요.',
        recover: '회복은 수다가 아니라 정리에서 와요. 걸리는 걸 메모에 다 쏟고, 그중 내일 할 세 개만 남기세요. 그리고 아무도 없는 한 시간을 확보하세요. 그 정도면 원래 속도로 돌아와요.',
        charm: '매력은 과묵함이 남기는 여백이에요. 좋아하는 사람 앞에서는 준비가 들켜요. 한 달 전에 흘린 취향을 기억하고, 아무도 안 챙기는 부분을 조용히 해 둬요. 그 확실함이 사람을 붙잡아요.',
        flaw: '마음을 말로 확인하지 않는 게 약점이에요. "알아서 알겠지"라고 믿지만 상대는 몰라요. 게다가 실망을 혼자 쌓아 두다가 한계에서 처음 말하기 때문에, 상대는 그때 처음 듣고 "갑자기 왜?"라고 느껴요.',
        partners: ['ENFP', 'ENTP'],
        partnerNote: '당신의 조용한 계획 위에 웃음과 우연을 얹어 주는 사람들. 당신이 끝내 말하지 않은 것까지 웃으면서 꺼내 줘요.',
        avoid: '감정을 그 자리에서 확인하라고 요구하는 사람, 계획을 당일 아침에 바꾸는 사람. 당신은 그걸 배신으로 기억해요.',
        openLine: '\"네가 조용한 게 무관심인 줄 알았어. 근데 그게 다 미리 챙겨 둔 거였네.\"',
        work: '목표가 주어지면 경로를 직접 설계해요. 시키지 않은 자료를 미리 모아 두고, 나올 반대 논리를 먼저 막아 두죠. 그래서 당신이 맡은 일은 중간에 잘 안 흔들려요.',
        jobs: ['전략 기획', '데이터 아키텍트', '게임 시스템 디자이너', '기술 연구 · R&D'],
        leap: '도약의 열쇠는 완성도가 아니라 공개예요. 90%에서 한 번 보여 주고 피드백을 받아 보세요. 계획은 세상과 부딪히는 순간 훨씬 정교해져요.'
      },
      en: {
        nick: 'The Blueprint Architect', tag: 'draws five moves ahead without saying so',
        outer: 'People remember you as calm and polite. You do not laugh loudly, and in meetings you usually speak once, at the end, precisely. So people wonder what you are thinking — and then the next day find it already sorted out. Your quiet is not indifference; you simply walked all the way to the conclusion before opening your mouth.',
        inner: 'Inside it is much louder. A remark someone dropped gets fitted into a plan three years out, and this choice gets run forward a year to see how it comes back. You never explain that. The explanation would run long, and you already know it would not fully land. So your real feelings arrive as preparation rather than words.',
        strengths: ['Turning a mess of a problem into structure', 'Lowering the temperature while everyone else heats up', 'A standard that does not go on sale', 'Sealing the hole everyone else steps over'],
        alone: 'Alone, you look like you are doing nothing. That is when next year gets replanned and the loose thoughts get filed. For you solitude is not waste, it is the workshop.',
        trigger: 'Plans changed without a word, meetings that repeat for no reason, “why do you have to think that far?” — and preparation nobody looks at. That is what wears you out.',
        recover: 'Recovery comes from tidying, not talking. Dump everything that snags into a note, keep three things for tomorrow, then take an hour with nobody around. That usually restores your speed.',
        charm: 'Your charm is the space your silence leaves. Around someone you like, the preparation shows: a preference mentioned a month ago is remembered, the part nobody handles is quietly handled. That certainty holds people.',
        flaw: 'Not confirming feelings out loud is the weak spot. You trust that it is understood; it is not. And because you stack disappointments privately until your limit, they hear it for the first time at the door — and it feels sudden to them.',
        partners: ['ENFP', 'ENTP'],
        partnerNote: 'The people who lay laughter and accident over your quiet plan, and say out loud the thing you never got around to saying.',
        avoid: 'Anyone who demands emotional confirmation on the spot, or moves a plan on the morning of. You remember that as betrayal.',
        openLine: '“I thought your silence meant you did not care. Turns out you were carrying all of it.”',
        work: 'Given a goal, you design the route. Material you were not asked for is gathered first, and the counter-argument is blocked before it arrives, so work you own rarely wobbles halfway.',
        jobs: ['Strategy planning', 'Data architecture', 'Game systems design', 'Research & development'],
        leap: 'The key is not polish but publication. Show one thing at 90% and take the feedback. Your plan gets sharper the moment it meets the world.'
      }
    },

    INTP: {
      emoji: '🔎',
      ko: {
        nick: '원리 탐정', tag: '\"왜?\"가 멈추지 않는 사람',
        outer: '조용하고 느긋해 보이는데, 갑자기 엉뚱한 질문을 던져서 사람들이 당신의 위치를 못 잡아요. 회의에서도 흐름을 한 번 끊고 "근데 그게 왜 그렇게 되는데요?"를 물어요. 악의가 아니라, 정말 궁금해서요.',
        inner: '머릿속에선 질문이 끝나지 않아요. 하나를 이해하면 그 전제가 궁금해지고, 그 전제의 예외가 또 궁금해져요. 그래서 남들이 사흘 전에 끝낸 주제를 당신은 오늘 밤 다시 꺼내요. 퍼즐이 딱 맞아떨어지는 순간, 그게 당신이 세상에서 제일 좋아하는 순간이에요.',
        strengths: ['당연하게 여기는 것을 의심하는 힘', '멀리 떨어진 분야를 이어 붙여 새 관점을 만드는 재주', '이론을 끝까지 파고드는 집요함', '내 생각이 틀렸으면 바로 고치는 정직함'],
        alone: '혼자 있는 시간에 세상이 조용히 넓어져요. 한 주제를 밤새 파다가 아침에 전혀 다른 결론에 도착하죠. 그런데 그 결론을 아무한테도 말하지 않아서, 아무도 당신이 얼마나 깊이 들어갔는지 몰라요.',
        trigger: '형식만 남은 절차, "원래 그렇게 하는 거야", 생각할 시간 없이 답을 재촉하는 회의. 이유 없는 규칙 앞에서 제일 빨리 지쳐요.',
        recover: '회복은 "아무것도 안 하기"로 결정하는 데서 와요. 좋아하는 주제를 목적 없이 30분만 읽어 보세요. 결과물을 안 만들어도 되는 사고가 당신의 충전이에요.',
        charm: '평소엔 무던한데, 상대가 흥미로운 말을 하면 눈빛이 바뀌어요. 그때의 집중이 사람에게는 특권처럼 느껴져요. 좋아하는 사람 앞에서는 평소 논리가 잠깐 고장 나서, 괜히 쓸데없는 팩트를 던지기도 하죠.',
        flaw: '시작은 잘하는데 끝을 안 맺어요. 흥미가 식으면 그냥 멈추고, 상대는 그걸 "나에 대한 관심이 식은 것"으로 받아요. 그리고 감정 확인을 귀찮아해서, 확인은 늘 상대 몫이 돼요.',
        partners: ['ENFJ', 'ESFJ'],
        partnerNote: '당신의 생각을 사람의 말로 번역해 주는 사람들. 흩뿌린 아이디어를 실제 자리까지 데려가 줘요.',
        avoid: '감정을 즉시 말로 요구하는 사람, 왜 그런지 설명 없이 규칙만 강요하는 사람.',
        openLine: '\"네가 그 얘기할 때 표정 완전히 달라지는 거 알아? 나는 그게 제일 좋아.\"',
        work: '증상이 아니라 뿌리를 찾아요. 남들이 고칠 때 당신은 원인을 파서 같은 문제가 다시 안 생기게 만들죠. 대신 마감보다 완결성을 우선하는 버릇이 있어요. 마무리 규칙 하나만 정해 두면 성과가 확 올라가요.',
        jobs: ['소프트웨어 엔지니어', '데이터 분석', '연구원', '테크니컬 라이터'],
        leap: '도약의 열쇠는 말로 꺼내는 거예요. 머릿속 완성본을 세 줄로 남기는 습관 하나만 붙여도, 당신 생각이 처음으로 남의 것이 돼요.'
      },
      en: {
        nick: 'The Principle Detective', tag: 'never stops asking why',
        outer: 'You seem quiet and unhurried, then drop a question from nowhere and nobody can place you. In meetings you break the flow once: “but why does it work that way?” Not out of spite — you genuinely want to know.',
        inner: 'The questions do not end. Understanding one thing makes you curious about its premise, then about the exceptions to it. So a topic others finished three days ago comes back out tonight. That click when the puzzle fits is your favourite sound in the world.',
        strengths: ['Doubting what everyone has agreed to stop questioning', 'Joining distant fields into a new angle', 'Following a theory all the way down', 'Correcting yourself the moment you are wrong'],
        alone: 'Your world widens quietly in private. You dig all night and land on a completely different conclusion by morning — then tell nobody, so nobody knows how far down you went.',
        trigger: 'Procedures kept for their own sake, “that is how it is done”, meetings that want an answer before you can think. A rule without a reason tires you fastest.',
        recover: 'Recovery starts with deciding to do nothing. Read about something you love for thirty minutes with no output in mind. Thinking with no deliverable is your charger.',
        charm: 'Usually unbothered — then someone says something interesting and your eyes change. That focus feels like a privilege to be on the receiving end of. Around a crush your logic briefly breaks and you throw out a completely useless fact.',
        flaw: 'You start beautifully and do not close. When interest fades you simply stop, and they read it as interest in them fading. Emotional check-ins feel like admin, so the checking ends up being their job.',
        partners: ['ENFJ', 'ESFJ'],
        partnerNote: 'The people who translate your thinking into human speech and walk your scattered ideas to an actual place.',
        avoid: 'Anyone who demands feelings in words immediately, or enforces rules with no explanation.',
        openLine: '“Do you know your whole face changes when you talk about that? That is my favourite thing.”',
        work: 'You go for the root, not the symptom. While others patch, you find the cause so it cannot happen again. Completeness can beat the deadline, though — set one closing rule and your output jumps.',
        jobs: ['Software engineer', 'Data analysis', 'Researcher', 'Technical writer'],
        leap: 'The key is saying it out loud. One habit — a three-line summary of each finished thought — and your thinking belongs to someone else for the first time.'
      }
    },
    ENTJ: {
      emoji: '🧭',
      ko: {
        nick: '판을 짜는 지휘자', tag: '목표가 보이면 사람부터 세운다',
        outer: '들어가면 분위기가 정리되는 사람이에요. 말이 빠르고 결론이 분명하고, 회의가 산으로 가면 "그래서 뭘 하기로 한 거죠?"로 한 번에 끌어내리죠. 그래서 누군가는 당신을 대하기 긴장하지만, 막상 일이 굴러가면 제일 먼저 당신을 찾아요.',
        inner: '속은 생각보다 단순해요. "이걸 어떻게 굴릴까" 하나만 계속 돌아가요. 사람을 무기로 보는 게 아니라, 목표까지 가는 길에 누가 어디에 서야 하는지를 보는 거예요. 다만 그 계산이 빨라서, 느린 사람의 사정을 나중에 알아차려요. 미안하다고 말하는 타이밍을 자주 놓치는 이유예요.',
        strengths: ['흩어진 사람을 한 방향으로 세우는 힘', '정보가 반쯤 모였을 때 방향을 정하는 결단', '문제를 사람 문제와 구조 문제로 나눠 보는 눈', '책임을 자기 쪽으로 가져오는 태도'],
        alone: '혼자 있을 때는 다음 판을 그려요. 쉬는 것처럼 보여도 머릿속에선 회의실이 돌아가고 있어요. 그래서 진짜로 쉬려면 "아무것도 안 하기"를 일정에 넣어야 해요. 안 그러면 휴가도 프로젝트가 돼요.',
        trigger: '결정을 미루는 사람, 같은 얘기를 세 번째 반복하는 회의, "그건 좀 아닌 것 같아요"만 하고 대안은 없는 말. 그 앞에서 제일 예민해져요.',
        recover: '회복은 혼자 몸을 쓰는 데서 와요. 걷기, 운동, 정리. 머리를 비우는 게 아니라 몸으로 옮겨야 해요. 그리고 잘한 일 하나를 소리 내어 인정해 주세요. 당신은 칭찬을 잘 못 받는 사람이에요.',
        charm: '매력은 앞에서 끌어 주는 힘이에요. 무서운 사람인데, 당신이 편애하는 사람에게는 갑자기 다정해져요. 그 온도 차이를 아는 사람은 그 다정함을 받기 위해 오래 옆에 있어요.',
        flaw: '약점은 속도를 사람에게 요구한다는 거예요. 당신에게는 쉬운 일이 누군가에게는 몇 배 걸리는 일이라, 그 차이를 배려 없이 지나가요. 그리고 화가 나면 말이 정확해서 더 아파요. 논리로 이기고 관계를 잃는 순간이에요.',
        partners: ['INFP', 'INTP'],
        partnerNote: '당신에게 "왜 그렇게까지"라고 물어봐 주는 사람들. 속도를 늦추면 세상이 무너지는 게 아니라는 걸 알려 줘요.',
        avoid: '결정을 계속 미루면서 불만만 쌓는 사람, 당신의 결단을 무시하고 뒤에서 판을 바꾸는 사람.',
        openLine: '\"너는 앞에서 다 끌고 가면서, 정작 자기 얘기는 안 하잖아. 나한테는 해도 돼.\"',
        work: '일에서는 목표를 쪼개고 사람을 배치해요. 안 되는 이유를 찾는 데 시간을 안 쓰고, 되는 경로를 먼저 만듭니다. 그래서 당신이 들어간 팀은 몇 달 만에 속도가 달라져요. 대신 그 속도를 따라오지 못한 사람이 조용히 사라지는 걸 나중에 알게 돼요.',
        jobs: ['사업 총괄 · CEO', '프로젝트 디렉터', '컨설팅', '영업 조직 리드'],
        leap: '도약의 열쇠는 "설명하는 시간"이에요. 결론을 말할 때 이유를 세 문장 더 붙이세요. 그 세 문장이 당신 편을 두 배로 만들어요.'
      },
      en: {
        nick: 'The One Who Sets the Board', tag: 'sees the goal, then moves the people',
        outer: 'The room organises itself when you walk in. You talk fast, conclusions are clear, and when a meeting drifts you pull it back with “so what are we actually doing?” Some people brace around you — and then come straight to you the moment things stall.',
        inner: 'Inside it is simpler than it looks. One loop runs: how do we move this. You do not see people as tools; you see where each person has to stand for the goal to be reachable. The calculation is just fast, so the slower person’s situation registers late. That is why you miss the moment to say sorry.',
        strengths: ['Getting scattered people to face one direction', 'Deciding when half the information is in', 'Separating a people problem from a structure problem', 'Taking the responsibility onto your side'],
        alone: 'Alone, you draw the next board. It looks like rest, but the meeting room is running. To actually rest you have to schedule doing nothing — otherwise even a holiday becomes a project.',
        trigger: 'People who postpone decisions, a meeting on its third round of the same topic, and “I am not sure that works” with no alternative attached. That is where you get sharpest.',
        recover: 'Recovery comes from moving your body alone. Walk, train, tidy. Do not try to empty your head, move it into your legs. Then say one thing you did well out loud — you are bad at receiving praise.',
        charm: 'Your charm is the pull from the front. You are intimidating, and then suddenly tender with the people you favour. Anyone who has felt that temperature difference stays a long time, hoping for more of it.',
        flaw: 'You ask people to match your speed. What is easy for you takes someone else three times as long, and you walk past that gap. And anger makes you precise, which makes it hurt more. That is the moment you win the argument and lose the person.',
        partners: ['INFP', 'INTP'],
        partnerNote: 'The people who ask “why that far?” — and show you the world does not collapse when you slow down.',
        avoid: 'Anyone who keeps postponing while resentment piles up, or quietly rewrites the board behind your decision.',
        openLine: '“You drag everyone forward and never talk about yourself. You are allowed to do that with me.”',
        work: 'You split the goal and place the people. No time is spent listing why it cannot work; you build the route that can. A team you join moves differently within months. The cost is that the person who could not keep up disappears quietly, and you find out later.',
        jobs: ['Founder / CEO', 'Project director', 'Consulting', 'Sales organisation lead'],
        leap: 'The key is the explanation. Add three sentences of why after every conclusion. Those three sentences double your side.'
      }
    },

    ENTP: {
      emoji: '⚡',
      ko: {
        nick: '토론 연금술사', tag: '반대 의견에서 불꽃이 튄다',
        outer: '재밌고 말이 빠른 사람으로 보여요. 어떤 주제든 일단 반대쪽에서 한 번 밀어 보고, 그 과정에서 웃음이 나요. 그래서 사람들은 당신과 얘기하면 머리가 깨어나지만, 가끔 "이 사람 진심이 뭐지" 하고 헷갈려 해요.',
        inner: '속에서는 가능성이 계속 켜져요. 하나를 보면 "이거면 저것도 되겠는데"가 붙고, 그 조합이 또 다른 조합을 불러요. 문제는 그중 10개 중 9개가 안 해도 되는 일이라는 거예요. 재밌는 건 많은데 끝까지 가는 게 적어서, 스스로도 그게 답답할 때가 있어요.',
        strengths: ['막힌 상황에서 새 문을 만들어 내는 순발력', '상대 논리의 약한 고리를 귀신같이 찾는 감각', '처음 보는 사람과 어색함 없이 말을 트는 재주', '실패를 오래 안 끌고 가는 회복력'],
        alone: '혼자 있을 때 머릿속에서 토론이 열려요. 아무도 없는 방에서 혼자 "아니 그건 아닌데"를 중얼거리죠. 그 시간에 아이디어가 폭발하지만, 정작 정리는 안 해서 메모가 산더미예요.',
        trigger: '이미 정해진 답을 확인만 시키는 자리, "그건 원래 안 돼"로 끝나는 대화, 같은 루틴이 6개월째 반복될 때. 지루함이 당신에게는 통증이에요.',
        recover: '회복은 새 자극이에요. 안 가 본 곳, 안 읽어 본 주제, 처음 보는 사람. 쉬는 것보다 갈아타는 게 당신에게는 회복이에요. 대신 밤 두 시에 시작한 검색은 스스로 끊어야 해요.',
        charm: '매력은 같이 있으면 세상이 넓어지는 느낌이에요. 당신이 던진 한마디에 상대의 생각이 옆으로 확장돼요. 그리고 웃기면서도 진짜 관심을 가진 사람에게는 놀랄 만큼 깊어져요.',
        flaw: '약점은 시작한 걸 안 끝내는 것, 그리고 농담이 상대에게는 칼이 될 수 있다는 걸 늦게 아는 거예요. 특히 가까운 사람에게는 "이 정도는 괜찮겠지" 하고 더 세게 던져요. 그게 쌓이면 관계가 조용히 멀어져요.',
        partners: ['INFJ', 'INTJ'],
        partnerNote: '당신의 폭발하는 아이디어를 하나로 골라 끝까지 데려가 주는 사람들. 당신이 놓친 마지막 10%를 채워요.',
        avoid: '아이디어를 "그거 해서 뭐 해"로 먼저 자르는 사람, 농담을 진지하게만 받는 사람.',
        openLine: '\"너랑 얘기하면 내가 똑똑해진 것 같아. 근데 너는 그거 알아? 너도 나 때문에 웃고 있다는 거.\"',
        work: '일에서는 초반에 제일 강해요. 아무것도 없을 때 구조를 던지고, 막힌 곳을 뚫어요. 대신 마무리 단계에서 지루해져서, 마지막 20%를 붙잡아 줄 동료나 규칙이 필요해요. 그 하나만 있으면 당신은 팀에서 대체 불가가 돼요.',
        jobs: ['신사업 기획', '브랜드 마케팅', '제품 매니저', '창업 · 1인 사업'],
        leap: '도약의 열쇠는 "하나만 고르기"예요. 아이디어 열 개 중 하나를 골라 90일만 끝까지 가 보세요. 당신의 재능은 그 한 번의 완주에서 처음 증명돼요.'
      },
      en: {
        nick: 'The Debate Alchemist', tag: 'sparks off the opposing view',
        outer: 'You come across as fun and fast. Whatever the topic, you push from the other side once, and it makes people laugh. Conversations wake up around you — and occasionally someone wonders what you actually believe.',
        inner: 'Possibilities stay switched on. Seeing one thing attaches “then that would work too”, and the combination calls up another. The problem is that nine of ten of them do not need doing. Plenty of sparks, few finishes — and that frustrates you too.',
        strengths: ['Making a new door where the wall was', 'Finding the weak joint in an argument instantly', 'Talking to a stranger with no awkwardness', 'Not carrying a failure around for long'],
        alone: 'Alone, a debate opens in your head. You mutter “no, that is not right” to an empty room. Ideas explode in that hour, and nothing is ever organised, so the notes become a mountain.',
        trigger: 'Being asked to confirm a decision already made, conversations that end in “that just is not done”, the same routine for six months. Boredom registers as pain for you.',
        recover: 'Recovery is novelty — a place you have not been, a topic you have not read, a person you have not met. Switching is how you rest. Just be the one who ends the two a.m. search.',
        charm: 'Being near you makes the world wider. One line from you and their thinking expands sideways. You are funny, and then astonishingly deep with the few you truly care about.',
        flaw: 'You do not finish, and you learn late that a joke can land as a knife. With people close to you it goes harder — “they can take it”. It piles up, and the relationship quietly backs away.',
        partners: ['INFJ', 'INTJ'],
        partnerNote: 'The people who pick one of your explosions and walk it to the end, filling the last ten percent you dropped.',
        avoid: 'Anyone who opens with “what is the point of that”, or takes every joke as a position.',
        openLine: '“Talking to you makes me feel smart. Do you know you laugh more when I am around?”',
        work: 'You are strongest at the start — throwing a structure over nothing and breaking the blockage. Boredom arrives at the finish, so you need one colleague or rule that holds the last twenty percent. With that, you are irreplaceable on a team.',
        jobs: ['New business planning', 'Brand marketing', 'Product manager', 'Founder / solo business'],
        leap: 'The key is choosing one. Take a single idea and run ninety days to the end. Your talent gets proven for the first time by one finish.'
      }
    },
    INFJ: {
      emoji: '🕯️',
      ko: {
        nick: '의미 해석가', tag: '말보다 표정을 먼저 읽는다',
        outer: '예의 바르고 부드러운 사람으로 보여요. 누구에게나 고르게 다정하고, 대화에서 상대가 원하는 말을 정확히 골라 주죠. 그래서 사람들은 당신에게 속마음을 털어놓고, 정작 당신에 대해서는 아는 게 별로 없어요. 다정함이 벽처럼 보이는 순간이 그때예요.',
        inner: '속에서는 계속 의미를 읽어요. 저 사람이 오늘 세 번 웃었는데 눈은 안 웃었다든지, 회의에서 누가 말을 끊겼을 때 표정이 어떻게 굳었다든지. 그걸 다 기억해요. 그리고 그 관찰로 사람의 3년 뒤를 그려요. 문제는 그 그림이 너무 선명해서, 아직 일어나지 않은 일에 미리 마음을 쓰느라 오늘을 놓친다는 거예요.',
        strengths: ['말하지 않은 감정을 정확히 짚어 내는 감각', '사람 사이에서 벌어진 일의 진짜 원인을 보는 눈', '오래 봐도 질리지 않는 깊이', '자기 신념 앞에서 놀랍도록 단단해지는 힘'],
        alone: '혼자 있는 시간이 없으면 사람이 되어 버려요. 남의 감정을 계속 읽다 보면 내 감정이 어디 있는지 모르게 되죠. 그래서 당신에게 혼자는 사치가 아니라 필수예요. 아무도 없는 밤에 혼자 조용히 있는 그 시간에 당신이 돌아와요.',
        trigger: '가벼운 사람들 사이에서 계속 표정 관리해야 할 때, 내 진심을 "너무 진지하다"고 넘길 때, 그리고 내가 맞춰 준 걸 아무도 몰랐을 때. 그때 조용히 마음이 닫혀요.',
        recover: '회복은 표현이에요. 글로 써도 되고, 그림이어도 되고, 누군가에게 한 번 말해도 돼요. 읽기만 하면 더 깊어져요. 몸을 움직여서 머리에서 내려오는 것도 당신에게는 약이에요.',
        charm: '매력은 "이 사람은 나를 진짜로 본다"는 감각이에요. 사람들이 당신 앞에서 처음으로 솔직해지는 이유가 그거예요. 그리고 당신이 마음을 연 사람에게는 상상 이상으로 헌신적이에요.',
        flaw: '약점은 참다가 한 번에 끊는다는 거예요. 서운함을 말하지 않고 쌓아 두다가, 어느 날 갑자기 조용히 연락을 끊어요. 상대는 영문을 몰라요. 그 문 닫는 속도가 당신을 더 외롭게 해요.',
        partners: ['ENTP', 'ENFP'],
        partnerNote: '당신의 깊은 생각을 가볍게 받아 주고, 침묵을 어색해하지 않는 사람들. 당신이 말하지 않은 것도 기다려 줘요.',
        avoid: '감정을 읽어 주기만 하고 자기 얘기는 안 하는 관계, 당신의 진심을 농담으로 넘기는 사람.',
        openLine: '\"너는 늘 물어보기만 하잖아. 오늘은 내가 물어볼게. 너는 지금 어때?\"',
        work: '일에서는 사람과 의미를 동시에 봐요. 이 일이 누구에게 어떤 의미인지 이해하기 때문에, 말 한마디로 팀의 방향을 바꿔요. 기획·상담·교육·글에서 강하고, 대신 자기 성과를 말로 잘 못 만들어서 손해를 봐요.',
        jobs: ['브랜드 스토리 기획', '상담 · 코칭', '교육 콘텐츠', '작가 · 에디터'],
        leap: '도약의 열쇠는 "내 몫을 말하기"예요. 좋은 일을 하고도 말하지 않으면 없는 일이 돼요. 한 달에 한 번, 내가 한 일을 한 문단으로 남겨 보세요.'
      },
      en: {
        nick: 'The Reader of Meaning', tag: 'reads the face before the words',
        outer: 'You seem gentle and well mannered. You are equally warm to everyone and pick exactly the words the other person needs. So people pour their hearts out to you — and know almost nothing about you. That is the moment your kindness looks like a wall.',
        inner: 'Meaning keeps being read inside. They laughed three times today but the eyes did not; that person’s face when they were cut off in the meeting. All of it is stored. From those observations you draw their next three years. The picture is so clear that you spend today on things that have not happened.',
        strengths: ['Naming the feeling nobody said out loud', 'Seeing the real cause of what happened between people', 'A depth that does not wear out', 'Becoming unexpectedly solid in front of your conviction'],
        alone: 'Without time alone you become other people. Reading everyone’s feelings, you lose track of where yours went. Solitude is not a luxury for you, it is maintenance. On a quiet night with nobody around, you come back.',
        trigger: 'Managing your face among people who keep it light, having your sincerity waved off as “too serious”, and being the only one who noticed what you adjusted to. The door closes quietly then.',
        recover: 'Recovery is expression — writing, drawing, saying it once to someone. Reading alone only takes you deeper. Moving your body is medicine too; it brings you down out of your head.',
        charm: 'The charm is the sense of “this person actually sees me”. That is why people become honest in front of you for the first time. And to the one you opened to, you are devoted past imagination.',
        flaw: 'You endure, then cut once. Hurt goes unsaid until one day the contact quietly ends. They have no idea why. The speed of that door closing is what makes you lonelier.',
        partners: ['ENTP', 'ENFP'],
        partnerNote: 'The people who hold your deep thinking lightly and are not uncomfortable in silence — who wait for what you have not said.',
        avoid: 'A relationship where you read their feelings and they never share theirs, and anyone who turns your sincerity into a joke.',
        openLine: '“You always ask. Today I will ask. How are you, really?”',
        work: 'You see people and meaning at once. Because you understand what the work means to whom, one sentence from you can turn a team. Planning, counselling, teaching, writing — and you undersell your own contribution because you cannot package it.',
        jobs: ['Brand story planning', 'Counselling / coaching', 'Educational content', 'Writer / editor'],
        leap: 'The key is claiming your share. Good work that goes unmentioned stops existing. Once a month, write one paragraph about what you did.'
      }
    },

    INFP: {
      emoji: '🌱',
      ko: {
        nick: '이상주의 시인', tag: '조용한데 머릿속은 서사시',
        outer: '순하고 조용한 사람으로 보여요. 싫은 말에도 웃으면서 넘기고, 자리를 피하는 쪽이죠. 그래서 사람들은 당신이 별생각 없이 산다고 오해해요. 실제로는 그 자리에서 열 가지 생각이 스쳐 갔고, 그중 하나가 당신을 하루 종일 붙잡고 있어요.',
        inner: '속에는 자기만의 세계가 있어요. 좋아하는 장면, 아직 쓰지 않은 이야기, 언젠가 되고 싶은 사람. 현실 이야기를 하다가도 그 세계로 잠깐 다녀오고, 돌아와서 "네, 그렇네요"라고 말해요. 그 세계가 당신의 에너지원이자, 가끔 현실을 놓치는 이유예요.',
        strengths: ['사람의 아픈 곳을 소리 없이 알아보는 감수성', '내 기준을 끝까지 지키는 조용한 고집', '익숙한 것에서 새 의미를 만들어 내는 상상력', '미움보다 이해를 먼저 선택하는 마음'],
        alone: '혼자 있을 때 제일 살아 있어요. 음악을 크게 틀고, 밤에 생각하고, 아무도 안 보는 글을 써요. 그 시간에 당신은 아무에게도 설명하지 않아도 되는 사람이 돼요.',
        trigger: '가치가 무시당하는 자리, 싸움이 큰 소리로 오가는 곳, "그런 걸로 왜 그래"라는 말. 그 앞에서 당신은 조용히 사라지고 싶어져요.',
        recover: '회복은 아름다운 것 하나예요. 좋아하는 노래, 산책, 익숙한 영화. 거기에 더해 "지금 내가 어떤 감정인지" 한 줄 적어 보세요. 이름을 붙이면 조금 가벼워져요.',
        charm: '매력은 사람을 있는 그대로 받아 주는 데 있어요. 당신 앞에서는 약한 모습을 보여도 된다는 느낌이 들어요. 그리고 평소 조용한 사람이 자기 이야기를 꺼낼 때, 그 집중이 사람을 놀라게 해요.',
        flaw: '약점은 원하는 것을 말하지 않는다는 거예요. "알아주겠지"를 기다리다가 아무것도 얻지 못하고, 속으로 서운해해요. 그리고 상처를 입으면 대화 대신 거리를 두기 때문에, 상대는 이유를 끝까지 몰라요.',
        partners: ['ENFJ', 'ENTJ'],
        partnerNote: '당신의 세계를 웃으면서 들어와 주고, 현실의 다음 단계까지 손잡아 주는 사람들.',
        avoid: '감정을 무시하는 사람, 약속을 가볍게 어기는 사람. 당신은 그걸 오래 기억해요.',
        openLine: '\"너는 말 안 해도 알 거라고 생각하지? 나는 몰라. 말해 주면 좋겠어.\"',
        work: '일에서는 의미를 먼저 봐요. 이 일이 왜 필요한지 납득해야 움직이고, 납득하면 남들보다 오래 파요. 글·디자인·기획처럼 자기 색이 들어가는 일에서 강하고, 대신 평가와 마감 앞에서 쉽게 지쳐요.',
        jobs: ['작가 · 시나리오', '일러스트 · 디자인', '콘텐츠 기획', '심리 · 상담 분야'],
        leap: '도약의 열쇠는 "밖으로 꺼내기"예요. 혼자만 아는 완성본은 세상에 없는 것과 같아요. 80%에서 한 번 올려 보세요. 당신의 세계는 누군가에게 닿을 때 완성돼요.'
      },
      en: {
        nick: 'The Idealist Poet', tag: 'quiet outside, an epic inside',
        outer: 'You seem soft and quiet. You smile through things you dislike and step away rather than fight, so people assume nothing much is going on. In fact ten thoughts crossed in that moment, and one of them has been holding you all day.',
        inner: 'There is a world in there. A scene you love, a story you have not written, a person you mean to become. Mid-conversation about real life you slip into it briefly, come back, and say “right, yes”. That world is your power source — and sometimes the reason you miss what is in front of you.',
        strengths: ['Noticing where someone hurts without being told', 'A quiet stubbornness about your own standard', 'Making new meaning out of ordinary things', 'Choosing understanding before dislike'],
        alone: 'Alone is when you are most alive. Music loud, thinking at night, writing what nobody will read. In those hours you are a person who owes nobody an explanation.',
        trigger: 'Places where your values get stepped on, rooms where arguments are loud, “why does that bother you”. There you quietly want to disappear.',
        recover: 'Recovery is one beautiful thing — a song, a walk, a film you know by heart. Then write one line about what you are feeling. Naming it makes it lighter.',
        charm: 'Your charm is taking people exactly as they are. Around you they feel allowed to be weak. And when the quiet one finally talks about themselves, the focus is startling.',
        flaw: 'You do not say what you want. You wait to be understood, get nothing, and feel hurt privately. And when wounded you put distance instead of talking, so they never learn why.',
        partners: ['ENFJ', 'ENTJ'],
        partnerNote: 'The people who walk into your world laughing and hold your hand through the practical next step.',
        avoid: 'Anyone who dismisses feelings, or breaks promises lightly. You remember that for years.',
        openLine: '“You think I should just know. I do not. I would rather you told me.”',
        work: 'You look for the meaning first. You have to be convinced the work matters, and once you are, you go deeper than anyone. Writing, design, planning — work with your colour in it. Evaluation and deadlines drain you fast.',
        jobs: ['Writer / screenwriter', 'Illustration / design', 'Content planning', 'Psychology / counselling'],
        leap: 'The key is taking it outside. A finished thing only you have seen does not exist. Put it out at eighty percent. Your world completes itself when it reaches someone.'
      }
    },
    ENFJ: {
      emoji: '🔥',
      ko: {
        nick: '온도 설계자', tag: '방의 기분을 먼저 맞춘다',
        outer: '들어가면 공기가 풀리는 사람이에요. 누가 어색한지 금방 알아채고, 그 사람에게 말을 넘겨 주고, 웃음이 끊기지 않게 이어요. 그래서 모두가 당신을 좋아하지만, 정작 당신이 힘들다는 건 아무도 눈치채지 못해요.',
        inner: '속에서는 사람들의 온도를 계속 재고 있어요. 저 사람은 지금 인정받고 싶고, 저 사람은 조금 상처받았고. 그걸 자연스럽게 조율하면서, 정작 자기 감정은 뒤로 미뤄요. 그리고 밤에 혼자 "나는 어떤 사람이었지" 하고 생각해요. 사람을 너무 잘 봐서 자기 자리를 잃는 게 당신의 숙제예요.',
        strengths: ['사람의 기분을 단번에 읽고 맞춰 주는 감각', '한 사람을 진짜로 성장시키는 응원과 피드백', '말로 분위기를 바꾸는 힘', '관계를 오래 유지하는 성실함'],
        alone: '혼자 있으면 처음엔 어색해요. 누군가에게 뭘 해 주고 있어야 안심하는 습관이 있거든요. 그 시간에 좋아하는 걸 아무 목적 없이 해 보세요. 당신이 어떤 사람인지 확인하는 시간이 필요해요.',
        trigger: '내 노력을 당연하게 여기는 사람, 분위기가 계속 무거운 자리, 그리고 내가 좋아하는 사람끼리 다투고 있을 때. 그때 제일 먼저 지쳐요.',
        recover: '회복은 혼자만의 조용한 시간이에요. 사람을 만나서 푸는 게 아니라, 아무도 안 챙기는 하루를 만들어야 해요. 그리고 누군가에게 "나 지금 좀 힘들어"를 말해 보세요. 이게 당신에게는 제일 어려운 일이에요.',
        charm: '매력은 사람을 특별하게 만드는 데 있어요. 당신이 "너는 이걸 잘해"라고 말하면, 그 사람은 진짜로 그렇게 돼요. 그 힘이 사람을 오래 붙잡아요.',
        flaw: '약점은 다 받아 주다가 자기 감정을 잃는 거예요. 서운한데도 "이해해"로 넘기고, 그러다 어느 순간 폭발하거나 갑자기 멀어져요. 상대는 늘 당신이 괜찮은 줄 알아요.',
        partners: ['INFP', 'INTP'],
        partnerNote: '당신이 챙기지 않아도 그냥 옆에 있어 주는 사람들. 말없이 있어도 당신을 채워 줘요.',
        avoid: '당신의 호의를 이용하는 사람, 감정을 계속 회수하는 사람. 당신은 그걸 오래 참아요.',
        openLine: '\"너는 늘 우리를 챙기는데, 정작 너는 누가 챙겨? 나는 네가 괜찮은지 물어보고 싶었어.\"',
        work: '일에서는 사람을 움직여요. 누가 무슨 역할을 맡으면 잘할지 감으로 알고, 그 사람이 잘할 수 있게 판을 깔아 줘요. 팀장·교육·영업·기획에서 강하고, 대신 남의 일까지 떠안아서 정작 자기 성과가 흐려져요.',
        jobs: ['팀 리드 · 인사', '교육 · 강의', '브랜드 커뮤니케이션', '고객 성공 · CX'],
        leap: '도약의 열쇠는 "거절 한 번"이에요. 다 받으면 아무것도 깊어지지 않아요. 한 주에 한 번, 정중하게 거절해 보세요. 관계는 생각보다 안 깨져요.'
      },
      en: {
        nick: 'The Setter of Temperature', tag: 'adjusts the room before anyone notices',
        outer: 'The air loosens when you walk in. You spot who is awkward, pass them the conversation, keep the laughter going. Everyone likes you — and nobody notices when you are the one struggling.',
        inner: 'You are reading temperatures constantly. That person needs recognition right now; that one is bruised. You tune it without effort, then set your own feelings aside. At night you wonder what kind of person you were today. Seeing people this well is how you lose your own place.',
        strengths: ['Reading the mood in one look', 'Cheering one person into real growth', 'Turning a room with a sentence', 'Keeping relationships alive for years'],
        alone: 'Being alone feels odd at first. You are used to being needed by someone. Spend that time on something you like with no purpose. You need time to confirm who you are without a role.',
        trigger: 'People who take your effort as standard, rooms that stay heavy, and two people you love fighting. That is where you tire first.',
        recover: 'Recovery is quiet time alone. Do not talk it out with people — build one day where nobody needs looking after. Then tell someone “I am not okay right now”. That is the hardest thing for you to do.',
        charm: 'You make people feel special. When you say “you are good at this”, they become good at it. That is what holds people for years.',
        flaw: 'You take everything in and lose your own feelings. You say “I understand” when you are hurt, then either explode or vanish. They always assumed you were fine.',
        partners: ['INFP', 'INTP'],
        partnerNote: 'The people who simply stay without being looked after — and fill you without a word.',
        avoid: 'Anyone who uses your generosity, or withdraws affection as a way of keeping score. You endure that too long.',
        openLine: '“You look after all of us. Who looks after you? I wanted to ask if you were okay.”',
        work: 'You move people. You sense who should carry what, and you build the ground so they can carry it. Team lead, teaching, sales, planning — and you absorb other people’s work until your own results blur.',
        jobs: ['Team lead / HR', 'Training and lecturing', 'Brand communication', 'Customer success / CX'],
        leap: 'The key is one refusal. Taking everything means nothing gets deep. Decline something politely once a week. Relationships survive it more than you think.'
      }
    },

    ENFP: {
      emoji: '🎈',
      ko: {
        nick: '가능성 연금술사', tag: '모든 사람에게서 반짝이는 걸 찾는다',
        outer: '밝고 말이 많은 사람으로 보여요. 처음 만난 사람에게도 진짜 관심을 가지고, 그 사람이 제일 잘하는 걸 금방 캐내요. 그래서 사람들은 당신과 이야기하고 나면 기분이 좋아지는데, 정작 당신이 어땠는지는 잘 안 물어봐요.',
        inner: '속에서는 감정이 크게 움직여요. 좋은 일에는 세 배로 기쁘고, 서운한 일에는 오래 아파요. 그런데 그걸 밝은 얼굴로 덮어요. 그리고 밤에 혼자 그 장면들을 다시 보면서, 낮에 한 말 하나하나를 검사해요. 사람들은 몰라요, 당신이 그렇게 오래 곱씹는다는 걸.',
        strengths: ['사람 안에서 아직 안 꺼낸 재능을 발견하는 눈', '분위기를 살리는 자연스러운 에너지', '새로운 것에 대한 두려움 없는 호기심', '사람을 진심으로 응원하는 마음'],
        alone: '혼자 있으면 머릿속에 여행 계획이 세 개쯤 떠 있어요. 그런데 막상 혼자 있는 시간이 길어지면 이상하게 가라앉아요. 당신은 사람에게서 충전되고, 그 사람들에게 다시 쓰이는 게 당신의 방식이에요.',
        trigger: '반복되는 루틴, 감정을 인정해 주지 않는 자리, "그건 좀 오바야"라는 말. 그리고 좋아하는 사람이 무표정할 때. 그때 제일 불안해져요.',
        recover: '회복은 새로움과 사람이에요. 안 가 본 곳, 처음 하는 것, 그리고 당신을 웃게 하는 사람 한 명. 거기에 더해 하루의 끝에 "오늘 좋았던 것 세 개"를 적어 보세요. 머리가 조용해져요.',
        charm: '매력은 사람을 특별하게 보이게 하는 데 있어요. 당신이 관심을 가지면, 상대는 자기가 더 나은 사람이 된 것처럼 느껴요. 그리고 그 관심이 진짜라서 반짝임이 사라지지 않아요.',
        flaw: '약점은 벌여 놓고 안 끝내는 것, 그리고 감정 기복을 숨기다가 갑자기 확 꺼내는 거예요. 상대는 "왜 갑자기?"라고 느껴요. 그리고 싫은 말을 못 해서, 마음속에 응어리가 쌓여요.',
        partners: ['INTJ', 'INFJ'],
        partnerNote: '당신의 폭발력을 견디면서 중심을 잡아 주는 사람들. 당신이 흔들릴 때 조용히 붙잡아 줘요.',
        avoid: '당신의 감정을 가볍게 넘기는 사람, 모든 걸 계획대로만 하자고 하는 사람.',
        openLine: '\"너는 늘 재밌게 해 주잖아. 근데 오늘은 네가 재밌는지 궁금해. 나한테는 힘든 얘기도 해도 돼.\"',
        work: '일에서는 시작하는 힘이 압도적이에요. 사람을 모으고, 판을 만들고, 분위기를 띄워요. 기획·마케팅·콘텐츠·교육에서 빛나고, 대신 마무리와 숫자 관리에서 약해요. 그 둘을 잡아 줄 파트너가 있으면 최고의 조합이 돼요.',
        jobs: ['콘텐츠 크리에이터', '마케팅 · 브랜딩', '이벤트 기획', '교육 · 코치'],
        leap: '도약의 열쇠는 "끝까지"예요. 재밌는 것 열 개보다, 하나를 끝낸 기록이 당신을 바꿔요. 캘린더에 마감 하나만 박아 두세요.'
      },
      en: {
        nick: 'The Alchemist of Maybe', tag: 'finds the shine in everyone',
        outer: 'You seem bright and talkative. You take real interest in a stranger and pull out what they are best at within minutes. People leave conversations with you feeling better — and rarely ask how you are.',
        inner: 'Feelings move in big waves. Good things land three times as good, hurts stay longer. You cover it with a bright face, then at night you replay the day and audit every sentence you said. Nobody knows you chew on it that long.',
        strengths: ['Spotting the talent someone has not used yet', 'An energy that lifts a room for free', 'Curiosity with no fear attached', 'Cheering people on for real'],
        alone: 'Alone, three travel plans are already running in your head. Stay alone too long, though, and something sinks. You recharge from people and spend yourself on them — that is your wiring.',
        trigger: 'Repeat routines, rooms where feelings are not allowed, “you are overreacting” — and a blank face on someone you love. That is when the anxiety starts.',
        recover: 'Recovery is newness plus people: somewhere new, something new, one person who makes you laugh. Then write three good things from today before bed. Your head goes quiet.',
        charm: 'You make people look special. When you take interest, they feel like a better version of themselves — and because the interest is genuine, the shine does not fade.',
        flaw: 'You open more than you close, and you hide the swing until it bursts out. They feel it as “where did that come from”. And because you cannot say the unpleasant thing, it curdles inside.',
        partners: ['INTJ', 'INFJ'],
        partnerNote: 'The people who survive your blast radius and hold the centre — quietly steadying you when you wobble.',
        avoid: 'Anyone who waves your feelings away, or needs everything to follow the plan.',
        openLine: '“You always make it fun. Today I want to know if you are having fun. You can bring me the hard stuff too.”',
        work: 'Your power is starting. You gather people, build the board, raise the temperature. Planning, marketing, content, teaching — and finishing and numbers are the weak side. A partner who holds those two makes you formidable.',
        jobs: ['Content creator', 'Marketing / branding', 'Event planning', 'Teaching / coaching'],
        leap: 'The key is finishing. One record of a thing completed will change you more than ten fun starts. Put a single deadline on the calendar.'
      }
    },
    ISTJ: {
      emoji: '🧱',
      ko: {
        nick: '원칙 수호자', tag: '말한 건 지키고, 지킨 건 안 바꾼다',
        outer: '믿음이 가는 사람으로 보여요. 약속 시간은 늘 5분 전이고, 맡은 일은 조용히 끝나 있어요. 말수가 적고 감정 표현이 크지 않아서, 처음엔 무뚝뚝하다는 말을 듣지만, 한 번 신뢰를 얻으면 가장 오래 가는 사람이에요.',
        inner: '속은 생각보다 정교해요. 지난번에 이 사람이 어떤 식으로 실수했는지, 이 일이 어디서 틀어졌는지 정확히 기억해요. 그 기억이 기준이 돼서, 같은 실수를 반복하는 걸 견디기 어려워해요. 그리고 좋아하는 사람에게는 말 대신 일로 애정을 표현해요. 챙겨 두고, 고쳐 두고, 조용히 해 두는 방식이에요.',
        strengths: ['한 번 맡은 일을 끝까지 책임지는 힘', '세부를 놓치지 않는 정확함', '위기에서 흔들리지 않는 안정감', '말과 행동이 일치하는 신뢰'],
        alone: '혼자 있을 때는 정리해요. 서랍, 파일, 일정, 마음속 순서까지. 그 시간이 끝나면 이상하게 마음이 편해져요. 당신에게 질서는 통제가 아니라 안심이에요.',
        trigger: '말한 걸 안 지키는 사람, 이유 없이 바뀌는 규칙, 준비 없이 들이대는 사람. 그리고 내가 애써 맞춰 둔 걸 당연하게 여길 때. 그때 조용히 마음이 닫혀요.',
        recover: '회복은 익숙한 것에서 와요. 같은 길, 같은 아침, 같은 컵. 거기에 더해 걱정을 종이에 다 적고 "내가 할 수 있는 것"에 표시하세요. 통제할 수 있는 걸 확인하면 마음이 내려앉아요.',
        charm: '매력은 흔들리지 않는 사람이라는 데 있어요. 세상이 시끄러워도 당신은 같은 자리에 있어요. 사람들은 그게 얼마나 귀한지 나중에 알아요.',
        flaw: '약점은 감정을 말로 확인하지 않는다는 거예요. 챙겨 주는 걸로 다 표현했다고 생각하지만, 상대는 말이 필요할 때가 있어요. 그리고 한 번 마음에 안 든 사람은 쉽게 안 바뀌어서, 관계가 오래 굳어요.',
        partners: ['ESFP', 'ESTP'],
        partnerNote: '당신의 규칙을 웃으면서 흔들어 주고, 대신 당신이 못 하는 즐거움을 채워 주는 사람들.',
        avoid: '약속을 반복해서 어기는 사람, 즉흥적으로 판을 바꾸는 사람.',
        openLine: '\"너는 말로 안 해도 다 해 주잖아. 근데 나는 가끔 그 말이 듣고 싶어.\"',
        work: '일에서는 정확하고 꾸준해요. 규칙을 지키고, 마감을 넘기지 않고, 실수를 안 만들어요. 회계·관리·운영·엔지니어링처럼 정확성이 중요한 자리에서 대체가 안 되는 사람이에요.',
        jobs: ['회계 · 재무', '품질 · 공정 관리', '공공행정', '시스템 운영'],
        leap: '도약의 열쇠는 "한 번의 실험"이에요. 익숙한 방법 옆에 새 방법을 하나만 놓고 3개월만 비교해 보세요. 당신의 강점은 유지하면서 판이 넓어져요.'
      },
      en: {
        nick: 'The Keeper of the Standard', tag: 'says it, does it, does not renegotiate',
        outer: 'You seem dependable. Five minutes early, work quietly finished. You speak little and do not emote much, so at first people call you stiff — and then find you are the person who stays longest once trusted.',
        inner: 'Inside it is more precise than it looks. You remember exactly how that person slipped last time and where this task came apart. That memory becomes the standard, which is why repeated mistakes are hard to sit through. And you show love through work rather than words — sorting, fixing, quietly arranging.',
        strengths: ['Carrying an assigned job to the end', 'An accuracy that misses no detail', 'Steadiness in a crisis', 'Words and actions that match'],
        alone: 'Alone, you sort. Drawers, files, schedules, the order inside your head. Afterwards something settles. For you order is not control, it is reassurance.',
        trigger: 'People who break their word, rules that change for no reason, anyone who barges in unprepared — and having your arrangements taken for granted. That is when the door quietly closes.',
        recover: 'Recovery comes from the familiar: the same route, the same morning, the same cup. Then write every worry down and mark the ones you can act on. Seeing what is controllable settles you.',
        charm: 'Your charm is being unshakable. The world gets loud and you are still where you were. People realise later how rare that is.',
        flaw: 'You do not confirm feelings in words. You think taking care of things said it, and sometimes they needed it said. And once someone falls out of favour they rarely come back, so relationships set like cement.',
        partners: ['ESFP', 'ESTP'],
        partnerNote: 'The people who shake your rules while laughing, and fill in the fun you cannot reach.',
        avoid: 'Anyone who breaks promises repeatedly, or rebuilds the plan on impulse.',
        openLine: '“You never say it, you just do it. Sometimes I want the words too.”',
        work: 'You are accurate and persistent. Rules kept, deadlines unbroken, errors avoided. Accounting, administration, operations, engineering — anywhere precision matters, you are not replaceable.',
        jobs: ['Accounting / finance', 'Quality and process control', 'Public administration', 'Systems operations'],
        leap: 'The key is one experiment. Put a new method beside the familiar one and compare for three months. You keep your strength and widen the field.'
      }
    },

    ISFJ: {
      emoji: '🧺',
      ko: {
        nick: '조용한 돌봄', tag: '기억해 두고 미리 챙긴다',
        outer: '다정하고 조용한 사람으로 보여요. 큰소리로 나서지 않지만, 누가 뭘 좋아하는지 다 기억하고 있어요. 김밥에 오이 빼 달라는 말을 1년 전에 듣고 지금도 그렇게 챙기죠. 그래서 사람들은 당신 옆에서 편안해요.',
        inner: '속에서는 사람 목록이 돌아가요. 엄마 허리, 친구 생일, 동료가 요즘 힘들다는 말. 그 목록이 계속 업데이트되고, 당신은 그걸 다 챙기려 해요. 그러다 정작 자기 이름은 목록에서 빠져 있어요. 서운함이 쌓여도 "이 정도는 괜찮아"로 넘기고, 나중에 혼자 그 장면을 떠올려요.',
        strengths: ['남이 말하지 않은 필요를 먼저 알아채는 감각', '한결같이 곁을 지키는 성실함', '세부를 오래 기억하는 기억력', '갈등을 키우지 않고 조용히 푸는 힘'],
        alone: '혼자 있을 때는 조용히 회복해요. 좋아하는 드라마, 정리된 방, 따뜻한 물. 그런데 오래 혼자 있으면 "내가 쓸모가 있나" 하는 생각이 들어요. 그건 당신이 사랑받는 방식이 사람을 챙기는 것이라서 그래요.',
        trigger: '내가 챙긴 걸 못 본 척할 때, 분위기가 험해질 때, 그리고 누가 나에게 화를 낼 때. 그때 말은 못 하고 집에 와서 오래 생각해요.',
        recover: '회복은 익숙한 돌봄이에요. 좋아하는 사람에게 작은 걸 해 주고, 그 사람이 좋아하는 걸 받아 보세요. 그리고 하루 한 번, "내가 원하는 것"을 한 가지 정해 보세요. 그게 당신에게는 훈련이에요.',
        charm: '매력은 잊히지 않는 사람이라는 데 있어요. 헤어지고 나서도 당신이 챙겨 준 것들이 하나씩 떠올라요. 그 기억이 사람을 다시 돌아오게 해요.',
        flaw: '약점은 서운함을 말하지 않는다는 거예요. 참고 또 참다가, 어느 날 갑자기 다 정리해 버려요. 상대는 그때 처음 알죠. 그리고 거절을 못 해서, 결국 자기 자리가 없어져요.',
        partners: ['ESTP', 'ENTP'],
        partnerNote: '당신이 챙기지 않아도 알아서 움직이는 사람들. 당신을 웃게 하려고 굳이 애쓰는 사람.',
        avoid: '당신의 돌봄을 당연하게 여기는 사람, 감정을 큰 소리로 몰아붙이는 사람.',
        openLine: '\"너는 다 기억하고 다 챙기잖아. 근데 네가 원하는 건 한 번도 못 들은 것 같아. 뭐가 좋아?\"',
        work: '일에서는 사람을 조용히 받쳐요. 일정을 놓치지 않고, 팀의 빈 곳을 채우고, 손님이 불편한 걸 먼저 알아채요. 의료·교육·서비스·총무에서 강하고, 대신 자기 성과를 안 챙겨서 남의 공이 되는 일이 많아요.',
        jobs: ['간호 · 돌봄', '교육 행정', '고객 서비스', '총무 · 인사 지원'],
        leap: '도약의 열쇠는 "내가 한 일을 남기기"예요. 조용히 잘하는 걸 아무도 못 봐요. 한 주에 한 번, 내가 해결한 일을 기록으로 남기세요.'
      },
      en: {
        nick: 'The Quiet Keeper', tag: 'remembers, and gets there first',
        outer: 'You seem kind and quiet. You never take the floor, but you know what each person likes — you heard “no cucumber” a year ago and still make it that way. People relax around you.',
        inner: 'A list of people runs inside. Mum’s back, a friend’s birthday, the colleague who is having a hard stretch. The list updates constantly, and you try to cover all of it. Your own name is the one missing from it. Hurt piles up and you file it as “this much is fine”, then revisit the scene alone later.',
        strengths: ['Noticing a need before it is spoken', 'Staying constant for years', 'Remembering details that matter', 'Solving conflict without inflating it'],
        alone: 'Alone, you recover quietly — a favourite show, a tidy room, warm water. Alone too long, though, and “am I of any use” creeps in. That is because being looked after is not how you learned to be loved.',
        trigger: 'When what you did goes unseen, when the room turns ugly, when someone is angry at you. You say nothing, go home, and think about it for a long time.',
        recover: 'Recovery is familiar care. Do something small for someone you love and let them do something for you. And once a day, name one thing you want. For you that is practice.',
        charm: 'Your charm is being unforgettable. Long after, the things you quietly arranged come back to people one by one — and they come back to you.',
        flaw: 'You never say the hurt. You endure and endure, then one day tidy the whole relationship away. They learn it at that point. And you cannot refuse, so eventually there is no room left for you.',
        partners: ['ESTP', 'ENTP'],
        partnerNote: 'The people who move without being looked after — and who work at making you laugh.',
        avoid: 'Anyone who treats your care as standard, or pushes feelings at volume.',
        openLine: '“You remember everything for everyone. I do not think I have ever heard what you want. What do you like?”',
        work: 'You hold people up quietly. Nothing slips, the gaps get filled, and you spot a customer’s discomfort first. Care, education, service, administration — and you lose credit because you never claim it.',
        jobs: ['Nursing / care', 'School administration', 'Customer service', 'Office and HR support'],
        leap: 'The key is leaving a trace. Quiet excellence is invisible. Once a week, record one thing you solved.'
      }
    },
    ESTJ: {
      emoji: '📋',
      ko: {
        nick: '현장 지휘자', tag: '말보다 결과로 정리한다',
        outer: '믿음직하고 시원시원한 사람으로 보여요. 일이 엉키면 제일 먼저 "그래서 지금 뭐부터 할까요"를 물어요. 말이 직선적이어서 가끔 세게 들리지만, 뒤로 빼는 법이 없어서 사람들은 결국 당신에게 기대요.',
        inner: '속에서는 기준이 계속 돌아가요. 이건 이래야 하고, 저건 저래야 하고. 그 기준이 높아서 남에게도 적용되고, 특히 가까운 사람에게 더 엄격해요. 사실 그 기준의 밑에는 "내가 책임지면 되니까" 하는 마음이 있어요. 그걸 말로 하지 않아서 오해를 사요.',
        strengths: ['흩어진 상황에서 우선순위를 바로 세우는 힘', '말한 것을 끝까지 책임지는 실행력', '현실적인 판단과 빠른 결정', '조직을 굴러가게 만드는 관리 능력'],
        alone: '혼자 있을 때도 머릿속에 할 일 목록이 있어요. 진짜로 쉬려면 목록을 종이에 다 옮겨 놓고 내일로 미뤄야 해요. 그게 되면 의외로 잘 쉬어요. 당신은 "정리된 상태"에서 편안해지는 사람이에요.',
        trigger: '핑계, 늦는 사람, 결정을 안 내리는 회의. 그리고 내가 세워 둔 계획을 아무 말 없이 바꿀 때. 그때 목소리가 커져요.',
        recover: '회복은 몸을 쓰고 결과를 보는 거예요. 청소, 운동, 정리 — 눈에 보이게 끝나는 일이 약이에요. 그리고 하루에 한 번, 아무도 평가하지 않는 시간을 만드세요.',
        charm: '매력은 앞에서 책임지는 모습이에요. 다들 모르는 척할 때 당신이 "제가 할게요"라고 말해요. 그 한마디가 사람을 안심시켜요.',
        flaw: '약점은 옳은 말을 아프게 하는 거예요. 내용은 맞는데 말투가 세서, 상대는 논리보다 상처를 기억해요. 그리고 한 번 정한 걸 잘 안 바꿔서, 사람이 변해도 당신의 판단은 그대로예요.',
        partners: ['ISFP', 'INFP'],
        partnerNote: '당신에게 "그건 좀 쉬어 가자"라고 말해 주는 사람들. 당신이 못 하는 여백을 채워 줘요.',
        avoid: '말만 하고 안 하는 사람, 규칙을 자기가 편할 때만 적용하는 사람.',
        openLine: '\"너는 늘 다 정리해 주잖아. 오늘은 아무것도 안 정해도 돼. 내가 할게.\"',
        work: '일에서는 실행과 관리가 강해요. 목표를 쪼개고, 사람을 배치하고, 진행을 확인해요. 운영·영업·생산·관리에서 확실한 성과를 내고, 대신 새로운 방식에 대한 저항이 있어서 변화가 필요한 자리에서는 답답해질 수 있어요.',
        jobs: ['운영 관리자', '영업 관리', '생산 · 물류 관리', '행정 · 사무 총괄'],
        leap: '도약의 열쇠는 "듣는 시간 10분"이에요. 결정 전에 한 사람에게 물어보세요. 당신의 실행력에 정보가 붙으면 아무도 못 따라와요.'
      },
      en: {
        nick: 'The Field Commander', tag: 'settles it with results, not speeches',
        outer: 'You seem solid and straight. When things tangle, you ask first: “so what do we do first?” Your words are direct and sometimes land hard, but you never step back, so people end up relying on you.',
        inner: 'Standards keep running. This should be this way, that should be that way. The bar is high, it applies to others, and it gets strictest with the people closest to you. Underneath it is “I will carry the responsibility anyway” — and because that never gets said, it gets misread.',
        strengths: ['Setting priority out of a mess', 'Carrying what you said to the end', 'Practical judgement and fast decisions', 'Making an organisation actually run'],
        alone: 'Even alone, the list is running. To really rest you have to move it onto paper and push it to tomorrow. Then you rest surprisingly well — you relax in a tidied state.',
        trigger: 'Excuses, lateness, meetings that will not decide — and a plan of yours changed without a word. That is when your voice rises.',
        recover: 'Recovery is using your body and seeing a result. Cleaning, training, sorting: something visibly finished is medicine. And once a day, make a stretch of time nobody is grading.',
        charm: 'Your charm is taking the front. When everyone pretends not to know, you say “I will do it.” That one sentence calms people down.',
        flaw: 'You say the right thing in a way that hurts. The content is correct and the delivery is hard, so they remember the sting, not the point. And once you decide, you rarely reopen it — people change and your judgement of them does not.',
        partners: ['ISFP', 'INFP'],
        partnerNote: 'The people who tell you “we can ease off here”, filling in the space you cannot leave empty.',
        avoid: 'Anyone who talks and does not deliver, or applies rules only when convenient.',
        openLine: '“You always sort everything out. Today you do not have to decide anything. I will.”',
        work: 'Execution and management are your ground: split the goal, place the people, check the progress. Operations, sales, production, administration — real results. Change-heavy places frustrate you, because new methods have to earn their way in.',
        jobs: ['Operations manager', 'Sales management', 'Production / logistics', 'Administration lead'],
        leap: 'The key is ten minutes of listening. Ask one person before deciding. Your execution with information attached is hard to match.'
      }
    },

    ESFJ: {
      emoji: '🎀',
      ko: {
        nick: '분위기 관리자', tag: '모두가 편한 자리를 만든다',
        outer: '사람을 챙기는 게 자연스러운 사람이에요. 누가 어디 앉을지, 뭐가 부족한지 먼저 보이고, 웃으면서 자리를 정리해요. 그래서 모임에서 당신이 빠지면 뭔가 허전해요. 다들 그걸 당신이 없으면 알게 되죠.',
        inner: '속에서는 관계의 온도를 계속 확인해요. 저 사람이 나를 어떻게 생각하는지, 내가 실수한 건 아닌지. 그 신경이 사람을 세심하게 만들지만, 동시에 피곤하게 해요. 그래서 밤에 혼자 "오늘 내가 좀 오버했나" 하고 되감을 때가 많아요.',
        strengths: ['사람 사이를 이어 붙이는 접착력', '분위기와 디테일을 동시에 보는 눈', '기억력 좋은 배려', '조직의 규칙을 사람답게 만드는 힘'],
        alone: '혼자 있으면 좀 허전해요. 누군가를 챙기고 있을 때 자기 자리가 있는 것 같거든요. 그래서 혼자만의 시간을 일부러 만들어야 해요. 그 시간에 당신이 좋아하는 걸 아무에게도 설명하지 말고 해 보세요.',
        trigger: '무리에 끼지 못하는 느낌, 내 노력을 인정하지 않는 사람, 그리고 분위기가 싸늘해질 때. 그때 제일 크게 흔들려요.',
        recover: '회복은 사람이에요. 다만 아무에게나가 아니라, 당신을 편하게 해 주는 한 사람. 그리고 "나 지금 서운해"를 말해 보세요. 이게 당신에게는 제일 어려운 일이에요.',
        charm: '매력은 사람을 소중하게 만드는 데 있어요. 당신이 챙기면, 상대는 자기가 중요한 사람이라는 걸 느껴요. 그 감각이 오래 남아요.',
        flaw: '약점은 인정받고 싶은 마음을 돌려 말한다는 거예요. "괜찮아"라고 하면서 표정은 안 괜찮아요. 그리고 남 얘기를 많이 하다가, 그게 소문이 되는 걸 나중에 알아요.',
        partners: ['ISFP', 'ISTP'],
        partnerNote: '당신의 챙김을 조용히 받아 주고, 대신 당신을 평가하지 않는 사람들.',
        avoid: '당신을 무리에 끼워 주지 않는 사람, 감정을 무시하는 사람.',
        openLine: '\"네가 다 챙기니까 우리가 편한 거야. 근데 너도 편해도 돼. 오늘은 내가 챙길게.\"',
        work: '일에서는 사람과 조화를 관리해요. 팀의 온도를 맞추고, 손님의 불편을 먼저 알아채고, 일정을 빈틈없이 챙겨요. 서비스·인사·교육·영업에서 강하고, 대신 갈등을 미루다가 문제가 커지는 일이 있어요.',
        jobs: ['인사 · 교육', '서비스 관리', '이벤트 · 커뮤니티 운영', '비서 · 사무'],
        leap: '도약의 열쇠는 "싫은 말 한 번"이에요. 불편한 걸 그 자리에서 말하면 관계는 오히려 좋아져요. 미루면 나중에 더 크게 터져요.'
      },
      en: {
        nick: 'The Keeper of the Room', tag: 'builds the place where everyone is comfortable',
        outer: 'Looking after people is automatic for you. Who sits where, what is missing — you see it first and fix it with a smile. A gathering without you feels slightly empty, and people only notice once you are gone.',
        inner: 'You keep checking the temperature of relationships. What that person thinks of me, whether I slipped. It makes you considerate and tired at once. Most nights you replay the day wondering whether you were too much.',
        strengths: ['Gluing people to each other', 'Seeing mood and detail at the same time', 'A memory for what people need', 'Making an organisation’s rules human'],
        alone: 'Alone feels a bit hollow. Having someone to look after is how you locate yourself. So build the time alone on purpose, and do something you like without explaining it to anyone.',
        trigger: 'Feeling left out of the group, effort that goes unrecognised, and a room going cold. That shakes you hardest.',
        recover: 'Recovery is people — not any people, the one who makes you comfortable. Then say “I am hurt”. That is the hardest sentence in your vocabulary.',
        charm: 'You make people feel precious. When you take care of someone, they feel like someone important. That feeling stays for years.',
        flaw: 'You ask for recognition sideways. “It is fine” with a face that says otherwise. And you talk about people freely, and find out later that it travelled.',
        partners: ['ISFP', 'ISTP'],
        partnerNote: 'The people who accept your care quietly and never grade you for it.',
        avoid: 'Anyone who leaves you outside the group, or dismisses feelings.',
        openLine: '“We are comfortable because you look after all of it. You are allowed to be comfortable too. I will do it today.”',
        work: 'You manage people and harmony — the team’s temperature, the customer’s discomfort, the schedule with no gaps. Service, HR, education, sales. Conflict gets postponed, though, and then grows.',
        jobs: ['HR / training', 'Service management', 'Events / community', 'Executive assistance'],
        leap: 'The key is saying the unpleasant thing once. Said on the spot, relationships get better. Postponed, it explodes later.'
      }
    },
    ISTP: {
      emoji: '🔧',
      ko: {
        nick: '도구를 든 손', tag: '말없이 뜯어 보고 고친다',
        outer: '무뚝뚝하고 조용한 사람으로 보여요. 회의에서 의견을 잘 안 내지만, 문제가 터지면 갑자기 제일 정확한 사람이 돼요. 말보다 손이 먼저 나가고, 고쳐 놓고도 "그냥요"라고 말해요.',
        inner: '속에서는 구조가 보여요. 이게 왜 안 되는지, 어디가 걸렸는지가 그림처럼 그려져요. 그런데 그걸 설명하는 데 흥미가 없어요. 설명보다 다음에 만질 게 궁금하거든요. 그래서 당신의 능력은 알려지지 않고, 당신도 굳이 알리려 하지 않아요.',
        strengths: ['문제의 원인을 손으로 찾아내는 감각', '위기에서 감정 없이 정확해지는 힘', '도구와 몸을 자유롭게 쓰는 실기', '필요 없는 것을 과감히 버리는 판단'],
        alone: '혼자 있을 때 뭔가를 만지작거려요. 조립하고, 고치고, 뜯어 봐요. 그 시간에 머리가 완전히 비어요. 당신에게 손을 쓰는 일은 취미가 아니라 명상이에요.',
        trigger: '규칙만 있고 이유가 없는 자리, 감정을 캐묻는 대화, 계속 지켜보는 상사. 그 앞에서 당신은 조용히 빠져나와요.',
        recover: '회복은 몸과 손이에요. 뭔가를 분해하고 다시 조립하고, 운전하고, 운동하세요. 생각으로 푸는 게 아니라 손으로 풀어야 해요.',
        charm: '매력은 말없이 해내는 능력이에요. 필요할 때 정확히 나타나서, 아무 말 없이 문제를 끝내요. 그 모습이 사람에게는 든든함으로 남아요.',
        flaw: '약점은 감정을 말로 안 꺼낸다는 거예요. 좋아해도, 서운해도, 고마워도 말이 없어요. 상대는 계속 확인해야 하고, 그러다 지쳐요. 그리고 한 번 마음이 닫히면 조용히 사라져요.',
        partners: ['ESFJ', 'ENFJ'],
        partnerNote: '당신이 말하지 않아도 기다려 주고, 당신의 손이 만든 걸 알아봐 주는 사람들.',
        avoid: '감정을 즉시 요구하는 사람, 과정을 통제하려는 사람.',
        openLine: '\"너는 말 안 해도 다 해 놓잖아. 근데 나는 가끔 네 목소리로 듣고 싶어.\"',
        work: '일에서는 실전이 강해요. 매뉴얼보다 손으로 익히고, 고장 난 걸 빨리 고쳐요. 기술·엔지니어링·장비 운영·스포츠처럼 몸과 도구를 쓰는 분야에서 강하고, 보고서와 회의에서는 힘이 빠져요.',
        jobs: ['기술 엔지니어', '장비 · 설비 운영', '파일럿 · 운전', '스포츠 · 피지컬 코치'],
        leap: '도약의 열쇠는 "한 번 설명하기"예요. 고친 과정을 세 줄로 남겨 보세요. 당신의 실력이 처음으로 남의 자산이 돼요.'
      },
      en: {
        nick: 'The Hands-On Fixer', tag: 'opens it up and fixes it without a word',
        outer: 'You seem quiet and blunt. You rarely speak in meetings — then something breaks and you are suddenly the most accurate person in the room. Your hands move before your mouth, and when it is fixed you say “no reason”.',
        inner: 'You see the structure. Why it does not work, where it is caught, drawn like a diagram. Explaining it holds no interest; the next thing to touch is more interesting. So your ability stays unknown, and you do not bother announcing it.',
        strengths: ['Finding the cause by hand', 'Going precise instead of emotional in a crisis', 'Easy command of tools and body', 'Throwing out what is not needed'],
        alone: 'Alone, you fiddle with something. Assemble it, fix it, take it apart. Your head goes completely quiet. Working with your hands is not a hobby for you, it is meditation.',
        trigger: 'Rules with no reason, conversations that dig for feelings, a supervisor who keeps watching. You quietly leave that room.',
        recover: 'Recovery is hands and body. Disassemble and rebuild, drive, train. Do not solve it in your head — solve it with your hands.',
        charm: 'Your charm is doing it without talk. You appear exactly when needed and finish the problem without a word. People remember that as solid ground.',
        flaw: 'Feelings never make it into words. Liking, hurting, gratitude — all silent. They have to keep checking, and they tire. And once you close, you disappear quietly.',
        partners: ['ESFJ', 'ENFJ'],
        partnerNote: 'The people who wait without pressing you, and notice what your hands made.',
        avoid: 'Anyone who demands feelings immediately, or tries to control the process.',
        openLine: '“You fixed the sink, my laptop and the whole weekend. I just wanted to hear your voice for a minute.”',
        work: 'Practice beats manuals. You learn by hand and fix fast. Engineering, equipment, operations, sport — anywhere body and tool matter. Reports and meetings drain you.',
        jobs: ['Technical engineer', 'Equipment / plant operations', 'Pilot / driver', 'Sport and physical coaching'],
        leap: 'The key is explaining once. Leave three lines about how you fixed it. Your skill becomes someone else’s asset for the first time.'
      }
    },

    ISFP: {
      emoji: '🎨',
      ko: {
        nick: '감각 예술가', tag: '조용히 아름다운 걸 고른다',
        outer: '순하고 감각 좋은 사람으로 보여요. 말은 적은데 옷이나 물건, 공간에서 취향이 묻어나요. 싸움을 피하고 웃으면서 넘기기 때문에, 사람들은 당신이 별 의견이 없다고 생각해요. 사실은 의견이 아주 많고, 그냥 말하지 않을 뿐이에요.',
        inner: '속에서는 지금 이 순간의 감각이 크게 들어와요. 빛, 소리, 온도, 누군가의 목소리 톤. 그게 기분을 만들고, 기분이 하루를 만들어요. 그래서 "그냥 그런 날"이 되는 날이 많아요. 그리고 마음에 안 드는 건 조용히 멀어지는 방식으로 정리해요.',
        strengths: ['분위기와 아름다움을 정확히 집어내는 눈', '사람을 판단 없이 받아 주는 태도', '지금 이 순간에 온전히 있는 힘', '조용히 자기 세계를 지키는 단단함'],
        alone: '혼자 있을 때 제일 자기답게 살아요. 좋아하는 음악, 만들기, 산책, 아무도 안 보는 창작. 그 시간에 당신은 아무에게도 맞추지 않아도 돼요.',
        trigger: '큰 소리로 다투는 자리, 취향을 무시당할 때, 자기 페이스를 강요받을 때. 그때 말없이 사라져요.',
        recover: '회복은 감각이에요. 좋아하는 음악을 크게, 따뜻한 물, 좋은 냄새, 손으로 만드는 것. 그리고 좋아하는 사람과 말 없이 있어도 돼요.',
        charm: '매력은 말하지 않아도 분위기로 전해지는 온도예요. 당신이 좋아하는 사람을 볼 때 눈빛이 달라져요. 그걸 알아챈 사람은 그 눈빛을 오래 기억해요.',
        flaw: '약점은 원하는 것을 말하지 않는다는 거예요. 참고 넘기다가, 어느 날 이유도 설명하지 않고 관계를 정리해요. 상대는 끝까지 이유를 몰라요. 그리고 갈등을 피하려다 보니 중요한 이야기를 못 해요.',
        partners: ['ESTJ', 'ESFJ'],
        partnerNote: '당신의 속도를 존중하고, 당신이 말하지 않은 취향까지 알아봐 주는 사람들.',
        avoid: '감정을 몰아붙이는 사람, 취향과 감각을 무시하는 사람.',
        openLine: '\"너는 말 안 해도 좋아하는 게 다 티 나. 나는 그거 알아채는 게 좋아.\"',
        work: '일에서는 감각과 손이 강해요. 디자인, 요리, 음악, 손으로 만드는 일에서 남들이 못 내는 결과를 내요. 대신 정해진 형식과 회의가 많은 자리에서는 빨리 지쳐요.',
        jobs: ['디자이너 · 일러스트', '뮤지션 · 사운드', '셰프 · 푸드 스타일리스트', '공예 · 메이커'],
        leap: '도약의 열쇠는 "보여 주기"예요. 혼자 만든 걸 한 번 올려 보세요. 당신의 감각은 누군가에게 닿을 때 처음으로 완성돼요.'
      },
      en: {
        nick: 'The Artist of the Senses', tag: 'picks the beautiful thing quietly',
        outer: 'You seem gentle with good taste. You say little, yet your clothes, your objects, your space show a point of view. You avoid fights and smile things away, so people assume you have no opinion. You have many; you simply do not say them.',
        inner: 'This moment comes in loud. Light, sound, temperature, the tone in someone’s voice. They make a mood, and the mood makes the day. That is why you have so many “it was just one of those days”. And what you dislike gets removed by quietly walking away from it.',
        strengths: ['Seeing exactly what makes a mood or a composition work', 'Accepting people without grading them', 'Being fully here, now', 'A quiet firmness about your own world'],
        alone: 'Alone is when you are most yourself — music, making, walking, creating what nobody sees. In those hours nothing has to be adjusted to anyone.',
        trigger: 'Rooms where people shout, having your taste dismissed, being pushed onto someone else’s pace. You disappear without a word.',
        recover: 'Recovery is sensory: music loud, warm water, a good smell, something made by hand. And someone you like, sitting with you in silence.',
        charm: 'Your warmth arrives without words. Your eyes change when you look at someone you like, and anyone who noticed remembers that look.',
        flaw: 'You do not say what you want. You swallow it, then one day end a relationship with no explanation. They never learn why. And avoiding conflict means the important sentences stay unsaid.',
        partners: ['ESTJ', 'ESFJ'],
        partnerNote: 'The people who respect your pace and read the taste you never announced.',
        avoid: 'Anyone who pushes feelings, or dismisses taste and texture.',
        openLine: '“You never say it but it is obvious what you love. I like that I can tell.”',
        work: 'Sense and hand are your instruments — design, cooking, music, making. You produce results others cannot. Fixed formats and meeting-heavy roles tire you fast.',
        jobs: ['Designer / illustrator', 'Musician / sound', 'Chef / food stylist', 'Craft and making'],
        leap: 'The key is showing it. Put one thing you made out into the world. Your taste completes itself when it reaches someone.'
      }
    },

    ESTP: {
      emoji: '🏍️',
      ko: {
        nick: '현장 해결사', tag: '고민보다 일단 움직인다',
        outer: '에너지가 크고 재밌는 사람으로 보여요. 말이 빠르고 몸이 먼저 움직이고, 새 판이 벌어지면 제일 먼저 뛰어들어요. 회의보다 현장에서 강하고, 사람들은 당신과 있으면 뭔가 일어날 것 같다고 느껴요.',
        inner: '속은 단순하고 정확해요. 지금 뭐가 문제고, 뭘 하면 되는지가 금방 보여요. 대신 3년 뒤는 잘 안 보여요. 그게 약점이자 강점이에요. 계획이 없어도 살아남는 사람은 당신뿐이니까요. 다만 밤에 혼자 있을 때, 가끔 문득 허전해요.',
        strengths: ['상황을 즉시 읽고 바로 움직이는 순발력', '사람을 긴장시키지 않는 친화력', '위기에서도 즐길 줄 아는 담력', '현실적인 협상 감각'],
        alone: '혼자 있으면 금방 심심해져요. 그래서 운동, 게임, 드라이브처럼 몸을 쓰는 걸 찾아요. 그 시간이 진짜 회복이에요. 가만히 있는 건 당신에게 회복이 아니라 벌이에요.',
        trigger: '결정이 계속 미뤄지는 회의, 이론만 길게 하는 사람, "왜 그렇게까지 해"라는 말. 그 앞에서 답답해서 나가고 싶어져요.',
        recover: '회복은 몸이에요. 땀을 흘리고, 속도를 내고, 경쟁해 보세요. 그리고 그날 잘한 것 하나를 남에게 말해 보세요. 당신은 인정받을 때 에너지가 차요.',
        charm: '매력은 같이 있으면 심장이 빨라지는 느낌이에요. 당신이 웃으면 분위기가 풀리고, 당신이 결정하면 다들 따라가요. 그 추진력이 사람을 끌어요.',
        flaw: '약점은 재미없는 일을 안 한다는 거예요. 마무리와 관리가 약하고, 말이 앞서서 상처를 남겨요. 특히 약속을 가볍게 잡으면, 신뢰가 한 번에 무너져요.',
        partners: ['ISFJ', 'ISTJ'],
        partnerNote: '당신의 속도를 감당하면서 뒤에서 정리해 주는 사람들. 당신이 못 하는 꾸준함을 채워 줘요.',
        avoid: '계획만 세우고 아무것도 안 하는 사람, 감정을 오래 끄는 사람.',
        openLine: '\"너랑 있으면 재밌잖아. 근데 나는 내일도 너랑 있고 싶어. 그건 좀 다른 얘기야.\"',
        work: '일에서는 현장이 강해요. 영업, 협상, 위기 대응, 스포츠 — 사람과 상황을 즉석에서 다루는 자리에서 압도적이에요. 대신 장기 프로젝트와 문서 작업에서는 흥미를 잃어요.',
        jobs: ['영업 · 세일즈', '이벤트 · 현장 운영', '스포츠 · 트레이너', '창업 초기 단계'],
        leap: '도약의 열쇠는 "한 번 끝까지"예요. 재미로 시작한 일 하나를 마무리하면, 당신의 평판이 완전히 달라져요.'
      },
      en: {
        nick: 'The Fixer on the Ground', tag: 'moves before he finishes thinking',
        outer: 'You come across as big energy and fun. Fast talk, body first, and when a new game opens you are already in it. Stronger on site than in meetings — people feel something will happen around you.',
        inner: 'Inside it is simple and accurate. What is wrong now, what to do next — visible immediately. Three years out, less so. That is the weakness and the strength: nobody survives without a plan like you do. Just sometimes, alone at night, it goes slightly hollow.',
        strengths: ['Reading a situation and moving in the same breath', 'Charm that does not put people on edge', 'The nerve to enjoy a crisis', 'A realistic nose for negotiation'],
        alone: 'Alone, you get bored fast — so you find something for the body: exercise, a game, driving. That is real recovery. Sitting still is not rest for you, it is punishment.',
        trigger: 'Meetings that keep postponing the decision, people who theorise at length, “why would you go that far”. You want to walk out.',
        recover: 'Recovery is physical. Sweat, speed, compete. Then tell someone one thing you did well today — recognition is your fuel gauge.',
        charm: 'Your charm is the pulse going up when you are around. You laugh and the room opens; you decide and people follow. That drive pulls.',
        flaw: 'You do not do the boring part. Finishing and admin are weak, and your words run ahead and leave marks. Promise lightly and trust breaks all at once.',
        partners: ['ISFJ', 'ISTJ'],
        partnerNote: 'The people who can take your speed and tidy up behind you, filling in the persistence you lack.',
        avoid: 'Anyone who plans and never moves, or drags feelings out for weeks.',
        openLine: '“It is fun with you. But I want you tomorrow too. That is a different sentence.”',
        work: 'The field is yours: sales, negotiation, crisis response, sport — anything where people and situations are handled live. Long projects and documents lose you.',
        jobs: ['Sales', 'Events / live operations', 'Sport / training', 'Early-stage founding'],
        leap: 'The key is finishing once. Complete one thing you started for fun and your reputation changes completely.'
      }
    },

    ESFP: {
      emoji: '🌟',
      ko: {
        nick: '무대 체질', tag: '지금 이 자리를 축제로 만든다',
        outer: '밝고 존재감 있는 사람으로 보여요. 들어오면 시선이 가고, 말 한마디에 분위기가 바뀌어요. 사진 찍을 때 제일 자연스럽고, 사람들 사이에서 에너지가 오히려 올라가요.',
        inner: '속은 생각보다 섬세해요. 다들 웃고 있는데 누가 조금 빠져 있으면 그게 눈에 들어와요. 그래서 웃기면서도 그 사람을 챙겨요. 다만 자기가 슬픈 건 잘 안 보여 줘요. 밝은 게 당신의 역할이라고 생각하거든요.',
        strengths: ['분위기를 단번에 바꾸는 존재감', '사람을 편하게 만드는 자연스러운 친화력', '지금 이 순간을 즐기는 재능', '감정 표현이 솔직해서 오해가 적음'],
        alone: '혼자 있으면 금방 처져요. 그래서 좋아하는 콘텐츠를 틀거나, 누군가에게 연락해요. 당신에게 회복은 다른 사람의 에너지예요. 그게 나쁜 게 아니라, 그걸 알아야 관리할 수 있어요.',
        trigger: '무시당하는 느낌, 분위기가 갑자기 차가워질 때, 내 기분을 "그런 걸로 왜 그래"라고 넘길 때. 그때 크게 상처받아요.',
        recover: '회복은 사람과 몸이에요. 좋아하는 사람과 웃고, 춤추고, 맛있는 걸 먹어요. 그리고 하루 한 번, 혼자 조용한 20분을 만들어 보세요. 그게 당신을 오래 가게 해요.',
        charm: '매력은 같이 있으면 기분이 좋아진다는 거예요. 당신이 웃으면 옆 사람도 웃어요. 그게 기술이 아니라 본성이라서, 사람들이 자꾸 돌아와요.',
        flaw: '약점은 힘든 얘기를 피한다는 거예요. 분위기가 무거워지면 농담으로 넘기고, 그러다 중요한 문제를 못 다뤄요. 그리고 충동적으로 결정해서 나중에 후회할 때가 있어요.',
        partners: ['ISTJ', 'ISFJ'],
        partnerNote: '당신의 밝음을 좋아하면서, 무거운 얘기도 받아 주는 사람들. 당신의 속도를 조용히 정리해 줘요.',
        avoid: '기분을 통제하려는 사람, 계속 평가하는 사람.',
        openLine: '\"너는 늘 웃기잖아. 근데 오늘은 안 웃어도 돼. 내가 여기 있을게.\"',
        work: '일에서는 사람 앞에 서는 자리가 강해요. 방송, 공연, 서비스, 영업, 콘텐츠 — 사람의 반응을 즉석에서 받으며 일하는 곳에서 빛나요. 대신 혼자 하는 반복 작업에서는 금방 지쳐요.',
        jobs: ['방송 · 크리에이터', '공연 · 엔터테인먼트', '서비스 · 접객', '이벤트 진행'],
        leap: '도약의 열쇠는 "꾸준함 하나"예요. 재능은 이미 있어요. 같은 시간에 같은 걸 올리는 습관 하나가 당신을 다르게 만들어요.'
      },
      en: {
        nick: 'The Stage Presence', tag: 'turns this room into the party',
        outer: 'You seem bright and unmistakable. Eyes move when you enter and one sentence changes the mood. You are the most natural person in any photo, and among people your energy goes up rather than down.',
        inner: 'Inside you are finer than you look. Everyone laughing and one person slightly out of it — you see that, and you look after them while making the joke. Your own sadness stays hidden; being bright is the role you think you have.',
        strengths: ['A presence that changes the room instantly', 'Natural ease with people', 'Being fully inside the moment', 'Honest expression, so little gets misread'],
        alone: 'Alone, you deflate quickly. So you put something on or message someone. Recovery for you is other people’s energy — that is not a flaw, but knowing it lets you manage it.',
        trigger: 'Feeling dismissed, a room turning cold, having your mood waved off as “why does that bother you”. That hurts a lot.',
        recover: 'Recovery is people and body: laugh, dance, eat something good with someone you like. And once a day, take twenty quiet minutes alone. That is what makes you last.',
        charm: 'Being near you feels good. You laugh and the person next to you laughs. It is not technique, it is constitution — which is why people keep coming back.',
        flaw: 'You dodge the hard conversation. When it gets heavy you turn it into a joke, and the real issue never gets handled. And impulse decisions leave you with regrets.',
        partners: ['ISTJ', 'ISFJ'],
        partnerNote: 'The people who love your brightness and can also take the heavy talk — quietly tidying the edges of your speed.',
        avoid: 'Anyone who manages your mood, or keeps grading you.',
        openLine: '“You always make us laugh. You do not have to today. I will be here.”',
        work: 'You are strongest in front of people: broadcasting, performance, service, sales, content — anywhere reactions come live. Repetitive solo work empties you fast.',
        jobs: ['Broadcasting / creator', 'Performance / entertainment', 'Service and hospitality', 'Event hosting'],
        leap: 'The key is one steady habit. The talent is already there. Posting the same thing at the same time is what changes you.'
      }
    }
  },
  /* ---------- 36문항 (축마다 6문항 · 선택지별 가중치 w) ---------- */
  questions: [

    /* S/N 정방향 */
    {
      axis: 'SN', w: [-3, -1, 1, 3],
      ko: { q: '새로 산 기기를 꺼내 설명서를 펼쳤다. 나는?',
        o: ['처음부터 끝까지 순서대로 읽는다', '필요한 부분을 찾아 그대로 따라 한다', '훑어보고 원리가 궁금한 부분부터 펼친다', '설명서보다 \"이걸로 뭘 할 수 있지\"가 먼저다'] },
      en: { q: 'You unbox a new device and open the manual. You…',
        o: ['Read it front to back, in order', 'Find the part I need and follow it exactly', 'Skim, then jump to the part about how it works', 'Wonder what I could do with it before reading anything'] }
    },

    /* E/I 정방향 */
    {
      axis: 'EI', w: [-3, -1, 1, 3],
      ko: { q: '약속 세 개를 연달아 마치고 집에 들어왔다. 현관에서 드는 생각은?',
        o: ['아직 하나 더 만나도 될 것 같다', '피곤하지만 누가 부르면 또 나갈 것 같다', '좋았지만 이제 조용해야 숨이 쉬어진다', '문 닫는 순간이 제일 좋다, 연락은 내일 보면 된다'] },
      en: { q: 'Three meetups back to back, and you are finally home. In the doorway you think…',
        o: ['I could still do one more', 'Wiped out, but I would go out again if someone asked', 'It was good, but I need quiet before I can breathe', 'Closing the door is the best part; messages can wait until tomorrow'] }
    },

    /* T/F 정방향 */
    {
      axis: 'TF', w: [-3, -1, 1, 3],
      ko: { q: '두 선택지 사이에서 마음이 흔들린다. 마지막에 나를 정리해 주는 건?',
        o: ['기준이 일관되는지, 앞뒤가 맞는지', '숫자로 비교했을 때 손해가 적은 쪽', '내가 중요하게 여기는 가치에 맞는 쪽', '사람들이 덜 상처받는 쪽'] },
      en: { q: 'You are torn between two options. What finally settles it?',
        o: ['Whether it holds up logically, with no contradictions', 'The one that loses less when I run the numbers', 'The one that fits what I value', 'The one where fewer people get hurt'] }
    },

    /* J/P 정방향 */
    {
      axis: 'JP', w: [-3, -1, 1, 3],
      ko: { q: '여행 전날 밤, 나를 편하게 하는 상태는?',
        o: ['동선과 예약과 시간이 전부 정해져 있다', '숙소와 첫날 일정은 확실히 정해져 있다', '가고 싶은 곳 몇 개만 정해져 있다', '아무것도 안 정해져 있다, 도착해서 정한다'] },
      en: { q: 'The night before a trip, what feels comfortable?',
        o: ['Route, bookings and times all locked in', 'The bed and the first day settled for certain', 'A few places I want to see, nothing more', 'Nothing set at all — I will decide when I land'] }
    },

    /* H/C 정방향 */
    {
      axis: 'HC', w: [-3, -1, 1, 3],
      ko: { q: '표정이 안 좋은 사람이 옆자리에 앉았다. 나는?',
        o: ['먼저 말을 걸어 무슨 일인지 묻는다', '조심스럽게 안부를 건넨다', '말없이 필요한 것만 챙겨 준다', '내 일에 집중한다, 사적인 건 모르는 게 낫다'] },
      en: { q: 'Someone with a dark expression sits down next to you. You…',
        o: ['Speak first and ask what happened', 'Carefully ask if they are okay', 'Quietly take care of what they need without a word', 'Get on with my own work — private things are better left alone'] }
    },

    /* A/O 정방향 */
    {
      axis: 'AO', w: [-3, -1, 1, 3],
      ko: { q: '실수한 걸 뒤늦게 알았다. 그날 밤 침대에서?',
        o: ['내일 고치면 된다, 금방 잊고 잔다', '한두 번 떠올리고 넘긴다', '자꾸 그 장면이 되감긴다', '잠이 안 온다, 그 순간만 계속 재생된다'] },
      en: { q: 'You realise a mistake late. In bed that night?',
        o: ['Fix it tomorrow — I forget it and sleep', 'I replay it once or twice, then let it go', 'The scene keeps rewinding on its own', 'I cannot sleep; that moment plays on a loop'] }
    },

    /* J/P 역방향 */
    {
      axis: 'JP', w: [3, 1, -1, -3],
      ko: { q: '아직 정하지 못한 일이 머리에 남아 있으면?',
        o: ['오히려 편하다, 더 좋은 답이 나올 수 있다', '신경 쓰이지만 마지막까지 열어 둔다', '빨리 정해져야 다음 일이 편하다', '결론이 안 나면 잠도 잘 안 온다'] },
      en: { q: 'Something is still undecided and sitting in your head. That feels…',
        o: ['Fine, actually — a better answer may still turn up', 'A little nagging, but I keep it open to the end', 'Uncomfortable; I need it settled to move on', 'Unbearable — I do not sleep well without a conclusion'] }
    },

    /* A/O 역방향 */
    {
      axis: 'AO', w: [3, 1, -1, -3],
      ko: { q: '중요한 일을 하루 앞두고, 머릿속은?',
        o: ['최악의 경우를 여러 번 그려 본다', '걱정이 앞서서 준비를 더 하게 된다', '준비한 만큼 믿고 넘긴다', '할 만큼 했으니 잘될 거라고 생각한다'] },
      en: { q: 'The night before something important, your head…',
        o: ['Runs the worst case several times', 'Worries enough that I over-prepare', 'Trusts the preparation and moves on', 'Assumes it will go fine — I did what I could'] }
    },

    /* E/I 역방향 */
    {
      axis: 'EI', w: [3, 1, -1, -3],
      ko: { q: '갑자기 좋은 아이디어가 떠올랐다. 그 다음은?',
        o: ['혼자 더 굴려 보고, 정리되면 꺼낸다', '메모해 두고, 말할 사람이 있으면 나중에 말한다', '가까운 사람에게 말해 보며 다듬는다', '일단 누구든 붙잡고 말한다, 말하다 완성된다'] },
      en: { q: 'A good idea lands out of nowhere. Next?',
        o: ['I turn it over alone until it is ready to show', 'I note it down and mention it later if someone is around', 'I talk it through with someone close and shape it', 'I grab whoever is nearest — it finishes itself out loud'] }
    },

    /* H/C 역방향 */
    {
      axis: 'HC', w: [3, 1, -1, -3],
      ko: { q: '좋아하는 사람에게 애정을 표현하는 방식은?',
        o: ['말로는 잘 안 한다, 대신 필요한 건 다 해 준다', '말보다 행동, 가끔 짧게 표현한다', '중요한 순간엔 꼭 말로 표현한다', '자주 말하고 자주 만진다, 숨기지 않는다'] },
      en: { q: 'How do you show affection?',
        o: ['Rarely in words — I just do everything that is needed', 'Mostly in actions, with the occasional short line', 'In words, at the moments that matter', 'Often, out loud and with touch — I do not hide it'] }
    },

    /* S/N 역방향 */
    {
      axis: 'SN', w: [3, 1, -1, -3],
      ko: { q: '누가 어제 있었던 일을 이야기한다. 내가 붙잡는 건?',
        o: ['왜 그런 일이 생겼는지, 그 뒤에 뭐가 있는지', '이야기 속에서 반복되는 패턴', '누가, 언제, 정확히 무슨 일이었는지', '말한 그대로의 사실과 순서'] },
      en: { q: 'Someone tells you about yesterday. What do you hold on to?',
        o: ['Why it happened, what sits behind it', 'The pattern repeating inside the story', 'Who, when, and exactly what happened', 'The facts and the order, exactly as told'] }
    },

    /* T/F 역방향 */
    {
      axis: 'TF', w: [3, 1, -1, -3],
      ko: { q: '친한 사람이 명백히 틀린 말을 확신하고 있다. 나를 가장 불편하게 하는 건?',
        o: ['그 말 때문에 그 사람이 상처받을 것', '그 사람이 지금 어떤 마음인지', '틀린 게 그냥 넘어가는 것', '근거 없이 사실이 아니게 되는 것'] },
      en: { q: 'Someone close is certain of something clearly wrong. What bothers you most?',
        o: ['That the belief will end up hurting them', 'What they must be feeling right now', 'That something false just passes unchallenged', 'That a fact is being replaced by nothing'] }
    },

    /* A/O 정방향 */
    {
      axis: 'AO', w: [-3, -1, 1, 3],
      ko: { q: '누가 내 일에 대해 비판했다. 그 말은?',
        o: ['맞으면 받고 아니면 흘린다', '기분은 상하지만 금방 정리된다', '며칠 동안 머리에 남는다', '왜 그런 말을 했는지 한참 곱씹는다'] },
      en: { q: 'Someone criticises your work. That remark…',
        o: ['Gets taken if fair, dropped if not', 'Stings, but clears up quickly', 'Stays with me for days', 'Has me chewing over why they said it'] }
    },

    /* T/F 정방향 */
    {
      axis: 'TF', w: [-3, -1, 1, 3],
      ko: { q: '규칙을 어긴 사람을 봤다. 나는 무엇으로 판단하나?',
        o: ['규칙이 왜 있는지, 어겼으면 결과가 따라야 하는지', '같은 일에 다른 사람도 같은 기준이었는지', '그 사람이 왜 그랬는지 사정', '그 사람이 지금 얼마나 힘든지'] },
      en: { q: 'You see someone break a rule. What do you judge by?',
        o: ['Why the rule exists, and whether breaking it has consequences', 'Whether everyone else got the same standard', 'The reasons they had', 'How hard their life is right now'] }
    },

    /* S/N 정방향 */
    {
      axis: 'SN', w: [-3, -1, 1, 3],
      ko: { q: '처음 쓰는 앱을 열었다. 나는?',
        o: ['화면의 버튼이 뭘 하는지 하나씩 눌러 본다', '비슷한 앱을 써 본 기억에 기대어 쓴다', '전체 구조가 어떻게 생겼는지부터 감을 잡는다', '이게 어떤 원리로 돌아가는지부터 궁금하다'] },
      en: { q: 'You open an app you have never used. You…',
        o: ['Press each button to see what it does', 'Rely on my memory of similar apps', 'Get a feel for how the whole thing is laid out', 'Want to know what principle makes it work'] }
    },

    /* E/I 정방향 */
    {
      axis: 'EI', w: [-3, -1, 1, 3],
      ko: { q: '주말 이틀이 통째로 비었다. 머릿속 첫 장면은?',
        o: ['누구를 만날지부터 정한다', '약속 하나는 잡고 나머지는 쉰다', '집에서 밀린 일을 하고, 한 번쯤은 나간다', '아무도 안 만나는 이틀로 만든다'] },
      en: { q: 'A whole weekend is free. Your first picture of it?',
        o: ['Who I am meeting, starting now', 'One plan, then rest', 'Catching up at home, maybe one outing', 'Two days with nobody at all'] }
    },

    /* J/P 정방향 */
    {
      axis: 'JP', w: [-3, -1, 1, 3],
      ko: { q: '일이 거의 끝나간다. 내가 더 신경 쓰이는 건?',
        o: ['제대로 매듭지어 끝냈는가', '할 일 목록이 다 지워졌는가', '더 나은 방법이 있었는데 놓쳤나', '끝내기보다 다음 것을 벌여 두고 싶다'] },
      en: { q: 'A project is nearly done. What occupies you more?',
        o: ['Whether it was closed properly', 'Whether the to-do list is empty', 'Whether a better way existed and I missed it', 'Opening the next thing rather than closing this one'] }
    },

    /* H/C 정방향 */
    {
      axis: 'HC', w: [-3, -1, 1, 3],
      ko: { q: '내 속마음은 사람들에게?',
        o: ['대부분 말한다, 말해야 가까워진다', '가까운 사람에게는 거의 다 말한다', '골라서 말한다, 다 말할 필요는 없다', '혼자 정리한다, 말해도 달라지지 않는다'] },
      en: { q: 'Your private feelings, to other people?',
        o: ['Mostly spoken aloud — that is how closeness happens', 'Almost everything, to the few I am close to', 'Selected parts; not everything needs saying', 'Sorted alone — saying it changes nothing'] }
    },

    /* E/I 역방향 */
    {
      axis: 'EI', w: [3, 1, -1, -3],
      ko: { q: '모르는 사람이 많은 모임에 도착했다. 속으로 드는 생각은?',
        o: ['조용한 자리를 찾아 앉아 분위기부터 본다', '아는 얼굴을 찾아 그 옆에서 시작한다', '어색해도 일단 인사하고 자리를 잡는다', '모르는 사람에게 먼저 말 거는 게 오히려 재밌다'] },
      en: { q: 'You arrive at a room full of strangers. Inside, you think…',
        o: ['Find a quiet seat and read the room first', 'Look for a familiar face and start there', 'Push through the awkwardness and say hello', 'Talking to strangers first is the fun part'] }
    },

    /* H/C 역방향 */
    {
      axis: 'HC', w: [3, 1, -1, -3],
      ko: { q: '서운하다는 말을 들었다. 그때 나는?',
        o: ['속으로 정리하고 겉으로는 담담하게 넘긴다', '사과는 하지만 마음은 한 발 물러난다', '바로 풀어 보려고 내 마음도 말한다', '그 자리에서 다 털어놓고 오히려 가까워진다'] },
      en: { q: 'Someone tells you they felt hurt by you. You…',
        o: ['File it inside and stay calm outside', 'Apologise, while taking a step back', 'Try to clear it now and say how I feel too', 'Pour it all out on the spot and end up closer'] }
    },

    /* A/O 역방향 */
    {
      axis: 'AO', w: [3, 1, -1, -3],
      ko: { q: '기분이 가라앉는 날, 나는?',
        o: ['왜 그런지 끝까지 파고든다', '하루는 그냥 가라앉아 있는다', '다른 걸 하다 보면 잊는다', '별일 없이 지나간다, 오래 안 간다'] },
      en: { q: 'On a low day, you…',
        o: ['Dig into why until you find the bottom of it', 'Just sit in it for a day', 'Forget it by doing something else', 'Pass through it — it never lasts long'] }
    },

    /* T/F 역방향 */
    {
      axis: 'TF', w: [3, 1, -1, -3],
      ko: { q: '내 의견에 반대하는 사람에게 마지막으로 확인하는 건?',
        o: ['이 이야기가 우리 사이를 어떻게 만들지', '상대가 어떤 마음으로 말하는지', '상대 논리가 어디서 어긋났는지', '사실과 근거 중 무엇이 틀렸는지'] },
      en: { q: 'Faced with someone who disagrees, what do you check last?',
        o: ['What this does to us', 'What they are feeling as they say it', 'Where their reasoning came apart', 'Which fact or piece of evidence is wrong'] }
    },

    /* S/N 역방향 */
    {
      axis: 'SN', w: [3, 1, -1, -3],
      ko: { q: '대화 중 내가 자주 하는 쪽은?',
        o: ['떠오른 생각을 비유와 가능성으로 넓힌다', '사실에서 출발해 의미와 해석을 얹는다', '비슷한 사례를 들어 설명한다', '정확한 숫자와 날짜와 이름으로 말한다'] },
      en: { q: 'Mid-conversation, you usually…',
        o: ['Widen whatever thought arrived, in metaphor and possibility', 'Start from a fact and add meaning to it', 'Explain through similar cases', 'Give the exact number, date and name'] }
    },

    /* J/P 역방향 */
    {
      axis: 'JP', w: [3, 1, -1, -3],
      ko: { q: '계획이 갑자기 바뀌었다. 솔직한 첫 반응은?',
        o: ['새로 생긴 여지가 재밌다', '당황스럽지만 금방 다른 길을 찾는다', '다시 짜야 하니 번거롭다', '정해진 게 깨진 게 불편하다'] },
      en: { q: 'A plan changes suddenly. Your honest first reaction?',
        o: ['The new room to move is exciting', 'Thrown, then I find another way fast', 'Annoying — now it has to be rebuilt', 'Uncomfortable that what was fixed is broken'] }
    },

    /* H/C 정방향 */
    {
      axis: 'HC', w: [-3, -1, 1, 3],
      ko: { q: '처음 만난 사람과 30분 이야기했다. 끝나고 나서?',
        o: ['사적인 이야기까지 나눴고 꽤 편해졌다', '적당히 편해졌고 다음에 또 볼 것 같다', '예의 바르게 대화했고 선을 지켰다', '필요한 이야기만 했다, 사적인 건 묻지 않았다'] },
      en: { q: 'Thirty minutes of talking with someone new. Afterwards?',
        o: ['We got into personal things and it feels easy', 'Pleasantly comfortable; we will probably talk again', 'Polite and appropriately bounded', 'We covered what was needed; I did not ask personal things'] }
    },

    /* E/I 정방향 */
    {
      axis: 'EI', w: [-3, -1, 1, 3],
      ko: { q: '생각이 복잡할 때 정리가 되는 순간은?',
        o: ['누군가에게 설명하다 보면 정리된다', '말로 한 번 꺼낸 뒤 글로 적으면 정리된다', '혼자 걸으면서 중얼거리다 정리된다', '조용히 앉아 글로 써야 머리에 남는다'] },
      en: { q: 'When does a tangled thought finally sort itself?',
        o: ['While explaining it to someone', 'Once I have said it, then written it down', 'Muttering to myself on a walk', 'Only when I sit alone and write it'] }
    },

    /* J/P 정방향 */
    {
      axis: 'JP', w: [-3, -1, 1, 3],
      ko: { q: '선택지가 여러 개다. 나는?',
        o: ['빨리 하나로 좁혀 확정한다', '장단점을 정리해 오늘 안에 정한다', '일단 열어 두고 정보를 더 모은다', '정하지 않고 두는 게 좋다, 나중에 고르면 된다'] },
      en: { q: 'There are several options. You…',
        o: ['Narrow to one and lock it', 'Compare and decide today', 'Keep them open and gather more', 'Prefer not to choose yet — I will pick later'] }
    },

    /* S/N 정방향 */
    {
      axis: 'SN', w: [-3, -1, 1, 3],
      ko: { q: '몇 년이 지나도 남아 있는 기억은?',
        o: ['그날 입은 옷, 먹은 것, 정확한 대사', '그 장소의 냄새와 소리, 감각', '그 일이 내게 어떤 의미였는지', '그 일이 상징하는 것, 그 뒤로 이어진 생각'] },
      en: { q: 'What survives years later?',
        o: ['What we wore, what we ate, the exact words', 'The smell, the sound, the feel of the place', 'What the day meant to me', 'What it stood for, and the thoughts it set off'] }
    },

    /* A/O 정방향 */
    {
      axis: 'AO', w: [-3, -1, 1, 3],
      ko: { q: '보낸 메시지에 답이 없다. 나는?',
        o: ['바쁜가 보다 하고 넘긴다', '조금 신경 쓰이지만 기다린다', '내가 뭘 잘못했나 한 번쯤 생각한다', '보낸 말을 다시 읽으며 이유를 찾는다'] },
      en: { q: 'Your message gets no reply. You…',
        o: ['Assume they are busy and move on', 'Notice it, but wait', 'Wonder once whether I did something', 'Re-read what I sent, hunting for the reason'] }
    },

    /* T/F 정방향 */
    {
      axis: 'TF', w: [-3, -1, 1, 3],
      ko: { q: '\'좋은 결정\'이란?',
        o: ['같은 상황이면 누가 결정해도 같은 결론이 나오는 것', '결과가 더 낫고 손실이 적은 것', '그 결정과 오래 살아도 괜찮은 것', '사람이 덜 다치고 관계가 덜 상하는 것'] },
      en: { q: 'A “good decision” is one that…',
        o: ['Anyone in the same situation would reach', 'Produces a better result with less loss', 'I can live with for a long time', 'Hurts fewer people and strains fewer relationships'] }
    },

    /* S/N 역방향 */
    {
      axis: 'SN', w: [3, 1, -1, -3],
      ko: { q: '처음 가는 동네에 도착했다. 제일 먼저 하는 건?',
        o: ['여기 사람들은 어떻게 살까 상상한다', '왜 이 자리에 이 건물이 있는지 궁금해한다', '눈에 보이는 간판과 길부터 확인한다', '정확한 위치와 필요한 시설부터 찾는다'] },
      en: { q: 'You arrive in a neighbourhood you have never seen. First move?',
        o: ['Imagine how people live here', 'Wonder why this building stands in this spot', 'Check the visible streets and signs', 'Find the exact location and the facilities I need'] }
    },

    /* T/F 역방향 */
    {
      axis: 'TF', w: [3, 1, -1, -3],
      ko: { q: '감정이 상한 사람과 사실 확인이 동시에 필요하다. 나는?',
        o: ['일단 그 사람 마음을 먼저 붙잡는다', '기분을 확인한 뒤 조심스럽게 사실을 꺼낸다', '감정은 잠시 두고 사실 관계부터 정리한다', '감정과 사실은 별개다, 사실부터 바로잡는다'] },
      en: { q: 'Someone is upset and the facts need checking at the same time. You…',
        o: ['Steady their feelings first, no matter what', 'Check how they feel, then raise the facts gently', 'Set the feeling aside and settle what happened', 'Feelings and facts are separate — facts first'] }
    },

    /* H/C 역방향 */
    {
      axis: 'HC', w: [3, 1, -1, -3],
      ko: { q: '누가 내 어깨에 기대어 운다. 나는?',
        o: ['많이 부담스럽다, 어떻게 해야 할지 모르겠다', '부담스럽지만 참고 들어준다', '괜찮다, 그 정도는 들어줄 수 있다', '더 가까이 앉는다, 그 시간이 싫지 않다'] },
      en: { q: 'Someone cries on your shoulder. You…',
        o: ['Find it a lot to carry and do not know what to do', 'Bear it, though it weighs on me', 'Am fine — I can hold that much', 'Sit closer; that moment is not unpleasant'] }
    },

    /* J/P 역방향 */
    {
      axis: 'JP', w: [3, 1, -1, -3],
      ko: { q: '다음 주말 계획을 물었다. 나는?',
        o: ['아직 모른다, 그날 기분 따라 정한다', '한두 개만 정해 두고 나머지는 비워 둔다', '대략 정해 둬야 마음이 편하다', '이미 다 정해져 있다, 비어 있는 게 싫다'] },
      en: { q: 'Someone asks about next weekend. You…',
        o: ['Have no idea — I decide on the day', 'Fix one or two things, leave the rest open', 'Need a rough shape or I feel unsettled', 'Already have it planned; empty space bothers me'] }
    },

    /* E/I 역방향 */
    {
      axis: 'EI', w: [3, 1, -1, -3],
      ko: { q: '일주일 동안 사람을 거의 못 만났다. 그때 드는 느낌은?',
        o: ['오히려 충전됐다, 이 시간이 아깝지 않다', '괜찮지만 슬슬 누군가의 목소리가 그립다', '심심하고 무기력해진다, 누구든 만나야 한다', '답답해서 못 견딘다, 사람 속으로 가야 산다'] },
      en: { q: 'A week with almost no one around. How does it feel?',
        o: ['Recharging — I would not trade that time', 'Fine, though I start missing a voice', 'Restless and flat; I need to see someone', 'Unbearable — I have to be among people to feel alive'] }
    },

    /* A/O 역방향 */
    {
      axis: 'AO', w: [3, 1, -1, -3],
      ko: { q: '내 감정의 파도는?',
        o: ['작은 일에도 크게 흔들리고 오래 간다', '잘 흔들리지만 겉으로는 덜 보인다', '흔들려도 금방 올라온다', '웬만해선 흔들리지 않는다, 대체로 평온하다'] },
      en: { q: 'Your emotional weather?',
        o: ['Small things shake me hard and last', 'I am easily moved but show less of it', 'I tilt, then come back fast', 'Rarely moves — mostly calm'] }
    }

  ]
};
