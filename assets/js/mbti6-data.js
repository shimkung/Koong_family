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
     questions : 24문항 (축마다 4문항, 선택지 4개는 왼쪽 극 → 오른쪽 극 순서)
   ========================================================================== */

window.KOONG_MBTI6 = {

  /* ---------- 6축 ---------- */
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
  mods: {
    ao: {
      A: {
        ko: {
          label: '단단한 자신감', intro: '흔들려도 다시 중심을 잡는 사람',
          deep: '당신은 실수해도 오래 붙잡지 않아요. 민망한 일이 생기면 얼굴이 뜨거워지긴 해도, 한 시간 뒤에는 다른 얘기를 하고 있죠. 그래서 주변은 당신을 부러워하고, 실제로 그 단단함이 당신을 오래 굴러가게 해요. 다만 그 속도가 너무 빨라서, 옆 사람이 아직 그 장면에서 헤어나오지 못했을 때 당신은 이미 다음으로 넘어가 있어요.',
          love: '연애에서 당신은 확인을 자주 요구하지 않아요. 좋으면 좋다고 하고, 싫으면 싫다고 말하고, 대개 그 자리에서 정리해요. 그래서 함께 있으면 편안하지만, 상대는 "이 사람은 나 없어도 잘 살 것 같다"고 느낄 수 있어요. 필요 없다는 말 대신, 필요하다는 말을 한 번 더 꺼내 보세요.',
          work: '일에서는 결정이 빨라요. 70%의 정보로 방향을 잡고 나머지는 가면서 고치죠. 그 결단이 팀을 앞으로 밀어요. 대신 준비를 오래 하는 사람에게는 조급함으로 보일 수 있으니, "왜 빨리 가는지"를 한 번 설명해 주면 좋아요.',
          shadow: '이 조합의 그림자는 무던함이에요. 너무 잘 견디다 보니 아무도 당신의 한계를 몰라요.'
        },
        en: {
          label: 'Grounded confidence', intro: 'the one who finds their centre again',
          deep: 'A mistake does not hold you long. Your face may burn for a minute, but an hour later you are talking about something else. People envy that, and honestly it is what keeps you moving. The cost is speed: while someone beside you is still stuck in that moment, you are already on the next thing.',
          love: 'You do not keep asking for reassurance. If you like someone, you say it; if you do not, you say that too — usually on the spot. It makes being with you easy, but a partner can end up feeling “this person would be fine without me.” Try saying you need them, not just that you do not.',
          work: 'You decide fast — 70% of the information is enough to set a direction, and the rest gets fixed in motion. That decisiveness pushes a team forward. Someone who prepares slowly may read it as impatience, so explain once why you move at that speed.',
          shadow: 'The shadow of this pairing is that you are too good at enduring — so nobody learns where your limit is.'
        }
      },
      O: {
        ko: {
          label: '섬세한 과사고', intro: '한 장면을 백 번 되감는 사람',
          deep: '당신은 방금 한 말을 밤에 다시 들어요. 표정 하나, 답장의 속도, 말끝의 온도까지 읽고 그게 무슨 뜻이었을지 여러 번 상상하죠. 이건 예민함이라기보다 해상도예요. 남들이 흘려보내는 것을 당신은 선명하게 봐요. 그래서 사람을 잘 이해하지만, 그 선명함이 자기 자신을 향할 때는 오래 아파요.',
          love: '연애에서 당신의 세심함은 무기예요. 상대가 말하지 않은 기분을 먼저 알아채고, 필요한 순간에 정확히 그 말을 해요. 다만 확인받고 싶은 마음을 돌려 말하다 보니, 상대는 가끔 시험을 받는 기분이 들어요. 원하는 것을 원문 그대로 말해 보세요. 대개 그게 제일 잘 통해요.',
          work: '일에서는 위험을 먼저 봐요. 남들이 신나서 달릴 때 "이 부분이 터지면 어떡하지"를 생각하죠. 그래서 당신이 있는 프로젝트는 사고가 적어요. 대신 결정 전에 스스로에게 시간 제한을 걸어야 해요. 그렇지 않으면 완벽한 답을 기다리다 판이 끝나요.',
          shadow: '이 조합의 대가는 자기 감정이 늘 뒷순위가 된다는 거예요.'
        },
        en: {
          label: 'Fine-grained overthinking', intro: 'the one who replays a scene a hundred times',
          deep: 'You listen back to what you said tonight. A look, the speed of a reply, the temperature at the end of a sentence — you read all of it and imagine what it meant. That is not touchiness, it is resolution: you see clearly what others let pass. It makes you deeply understanding, and when it turns on yourself it hurts for a long time.',
          love: 'In love your attentiveness is a weapon. You catch a mood before it is spoken and say exactly the right thing at the right moment. But when you ask for reassurance sideways, a partner feels tested. Say what you want in plain words — that is usually what works best.',
          work: 'You see risk first. While others run at it cheerfully, you are asking what happens if this part breaks — and projects you are on have fewer accidents because of it. The trade-off is that you need to cap your own decision time, or you wait for the perfect answer until the chance is gone.',
          shadow: 'What this pairing charges you is that your own feelings always end up last in the queue.'
        }
      }
    },
    hc: {
      H: {
        ko: {
          label: '따뜻한 온기', intro: '먼저 마음을 데우는 사람',
          deep: '당신은 사람의 기분을 온도로 먼저 느껴요. 방에 들어갔을 때 공기가 차가우면 말보다 표정이 먼저 풀리죠. 그래서 사람들이 당신 옆에서 긴장을 늦춰요. 이 온기는 노력해서 나오는 게 아니라서, 당신은 자기가 얼마나 큰 일을 하고 있는지 모르는 경우가 많아요.',
          love: '연애에서 당신은 상대를 안심시키는 방식으로 사랑해요. 밥은 먹었는지, 잘 자라고, 별것 아닌 걸 기억해 두죠. 다만 그 마음이 늘 말로 표현되지는 않아서, 상대가 "좋아하는 건지 그냥 착한 건지" 헷갈릴 때가 있어요.',
          work: '일에서는 사람을 다루는 자리에 강해요. 갈등이 생기면 누가 맞는지보다 어떻게 풀지부터 생각하죠. 대신 정작 자기 몫을 뒤로 미루다 마감에 몰리는 일이 생겨요.'
        },
        en: {
          label: 'Warmth', intro: 'the one who warms the room first',
          deep: 'You feel a person’s mood as temperature. If the air in the room is cold, your face softens before you speak, and people around you stop bracing. This warmth is not effort for you, which is why you often have no idea how much it does.',
          love: 'You love by making someone feel safe — did you eat, sleep well — remembering small things. Because it does not always reach words, a partner can be unsure whether you like them or are simply kind.',
          work: 'You are strong where people are involved. When conflict appears you think about how to untangle it before who was right. The catch is that your own work slides to the deadline.'
        }
      },
      C: {
        ko: {
          label: '냉철한 칼날', intro: '감정보다 정확함이 먼저인 사람',
          deep: '당신은 상처받아도 표정이 잘 안 바뀌어요. 속으로는 정리하고 있고, 밖으로는 아무 일 없는 얼굴이죠. 그래서 주변은 당신을 강하다고 생각하지만, 사실은 아픈 것을 아프다고 말하는 방법을 배우지 않았을 뿐이에요. 이 냉철함은 당신을 지키는 갑옷이자, 사람을 조금 멀리 세우는 벽이에요.',
          love: '연애에서 당신은 과장하지 않아요. "보고 싶었어"를 아껴 쓰고, 대신 약속은 정확히 지켜요. 그 신뢰가 당신의 사랑법이에요. 다만 상대는 말로 듣고 싶어 하죠. 한 달에 한 번, 계산 없는 말을 연습해 보세요.',
          work: '일에서는 감정에 휘둘리지 않는 판단이 강점이에요. 불리한 사실도 정확히 말하고, 필요한 사람을 잘라야 할 때 칼을 들 수 있죠. 대신 그 정확함이 차갑게 느껴질 때가 있어요. 결론 앞에 사람을 먼저 언급하는 문장 하나를 붙여 보세요.'
        },
        en: {
          label: 'Cool precision', intro: 'the one who picks accuracy over comfort',
          deep: 'Your face barely moves when you are hurt. Inside you are filing it; outside nothing happened. People read that as strength, when really you were never taught how to say it hurts. This coolness is armour — and a wall that keeps people a step away.',
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
        love: '연애할 때 당신은 안정적이에요. 크게 흔들지 않고, 상대의 기분을 살피면서도 자기 중심을 잃지 않죠. 그래서 오래가는 연애를 해요. 다만 갈등이 생기면 "괜찮다"고 넘겨버리는 습관이 있어요. 괜찮지 않은 것을 괜찮다고 말하는 순간, 그 관계는 조금씩 멀어져요.',
        work: '일에서는 추진력과 사람 다루는 힘이 같이 있어요. 결정을 미루지 않으면서도 주변을 다치게 하지 않죠. 사람을 끌고 가야 하는 자리 — 팀장, 프로젝트 리드, 작은 브랜드의 대표 — 에 특히 잘 맞아요.'
      },
      en: {
        headline: 'Steady and warm — rarer than people think',
        deep: 'Confidence plus warmth makes you the person others call easy to be around and easy to trust. You do not fall apart over a mistake, and that steadiness calms the people next to you. The problem is how strong it is: nobody knows your limit, so nobody may notice until you break. You need one person you can say “I am not okay” to.',
        love: 'In love you are stable — rarely thrown, attentive to your partner, and still anchored in yourself. That is why your relationships last. The habit to watch is saying “it is fine” when it is not. Every time you say that, the distance grows a little.',
        work: 'You combine drive with the ability to handle people. You do not delay decisions and still avoid wounding anyone. Roles that pull people along — team lead, project lead, founder of something small — suit you especially well.'
      }
    },
    AC: {
      ko: {
        headline: '빠르고 정확하다. 그래서 가끔, 너무 차갑다',
        deep: '자신감(A)과 냉철함(C)의 조합은 결정이 빠르고 감정에 흔들리지 않아요. 문제가 생기면 한숨부터 나오는 대신 해결 순서를 짜죠. 조직에서는 이보다 강한 조합이 드물어요. 대신 가까운 사람에게는 "나를 사람으로 보지 않는 것 같다"는 인상을 줄 수 있어요. 당신이 아끼는 사람에게는 결론보다 과정을 조금 보여 주세요.',
        love: '연애할 때 당신은 과장이 없어요. 좋아하면 좋아한다고 하고, 아닌 건 아니라고 말하죠. 그 솔직함이 매력이지만, 상대가 원하는 건 정답이 아니라 온도일 때가 있어요. 결론을 말하기 전에 "그래서 내 마음은 이래"를 한 줄 붙여 보세요.',
        work: '일에서는 결단과 냉정함이 무기예요. 어려운 결정을 미루지 않고 감정 소모 없이 처리하죠. 협상, 구조조정, 위기 대응처럼 모두가 머뭇거리는 자리에서 당신이 필요해요.'
      },
      en: {
        headline: 'Fast and precise — and occasionally, too cold',
        deep: 'Confidence and coolness make you quick and hard to shake. When something breaks you skip the sigh and map the order of fixes. Few combinations are stronger inside an organisation. Close up, though, you can give the impression of not seeing people as people. Show someone you love a little of your process, not just the conclusion.',
        love: 'You do not exaggerate in love. You say it when you like someone and say it when you do not. That honesty is attractive — but sometimes what a partner wants is not the correct answer, it is warmth. Before the conclusion, add one line: “and here is how I feel.”',
        work: 'Decisiveness and cool are your weapons. You do not postpone hard calls and you make them without emotional drag. Negotiation, restructuring, crisis response — the places where everyone hesitates — is where you are needed.'
      }
    },
    OH: {
      ko: {
        headline: '남의 마음은 다 읽는데, 정작 내 마음엔 제일 늦게 도착한다',
        deep: '과사고(O)와 온기(H)가 겹치면, 당신은 남의 마음을 너무 잘 읽어서 스스로를 소진해요. 상대가 말하지 않은 서운함까지 느끼고, 그것을 자기 책임으로 가져오죠. 이 조합의 재능은 깊은 공감이지만, 대가로 자기 감정이 늘 뒷순위가 돼요. 오늘 하루만, 남의 기분을 읽기 전에 내 기분을 먼저 물어보세요.',
        love: '연애할 때 당신은 상대의 작은 변화를 다 알아채요. 그래서 사랑하는 방식도, 사랑받는 방식도 섬세해요. 문제는 그 섬세함이 확인 욕구로 바뀔 때예요. "요즘 나 어때?"를 묻고 싶을 때, 먼저 "나는 요즘 네가 좋아"를 말해 보세요. 같은 말이지만 도착하는 방향이 달라요.',
        work: '일에서는 사람의 미묘한 신호를 읽는 능력이 강점이에요. 기획, 상담, 교육, 콘텐츠처럼 사람을 이해하는 일에서 특히 빛나요. 대신 감정 노동을 혼자 떠안지 않도록 경계를 정해 두세요. 다 들어주는 사람은 결국 지쳐서 아무도 못 들어줘요.'
      },
      en: {
        headline: 'You read everyone’s heart and reach your own last',
        deep: 'Overthinking plus warmth means you read people so well that you exhaust yourself. You feel the disappointment they did not mention and carry it as your responsibility. Deep empathy is the gift here; your own feelings always paying the bill is the cost. For one day, ask how you feel before you read how they do.',
        love: 'You notice every small change in your partner, so both loving and being loved come out finely detailed. The risk is when that detail turns into a need for confirmation. When you want to ask “how am I lately?”, say “I have been fond of you lately” first. Same words, opposite direction.',
        work: 'Your strength is reading the subtle signals of people — planning, counselling, teaching, content. Just set a boundary so you are not carrying the emotional labour alone. The one who listens to everything eventually has nothing left to listen with.'
      }
    },
    OC: {
      ko: {
        headline: '머릿속에선 이미 백 번 끝난 일을, 아무 일 없는 얼굴로 지나간다',
        deep: '과사고(O)와 냉철함(C)의 조합은 겉으로 조용하고 속으로는 가장 복잡해요. 이미 여러 번 시뮬레이션을 돌렸지만 그 과정을 말하지 않아서, 사람들은 당신을 무던하다고 생각해요. 이 조합의 강점은 정확한 통찰이에요. 다만 그 통찰을 혼자 삼키면 아무것도 바뀌지 않아요. 결론만이라도 꺼내 놓는 연습이 필요해요.',
        love: '연애할 때 당신은 겉으로 담담하고 속으로는 파도가 쳐요. 상대는 그걸 모르니 "무관심한 사람"으로 오해하기도 하죠. 당신의 사랑은 말보다 오래 기억되는 디테일에 있어요. 그 디테일을 한 번씩 말로 설명해 주면 관계의 온도가 달라져요.',
        work: '일에서는 디테일과 정확성으로 승부해요. 남들이 놓치는 오류를 잡고, 위험을 미리 계산하죠. 분석, 검증, 설계에서 강하지만 결정을 오래 미루면 기회를 잃어요. "지금 아는 것으로 정한다"는 규칙 하나를 스스로에게 붙여 주세요.'
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
        outer: '남들은 당신을 차분하고 예의 바른 사람으로 기억해요. 말수가 적고, 웃을 때도 크게 웃지 않고, 회의에서는 대개 마지막에 한 번 정확하게 말하죠. 그래서 "무슨 생각을 하는지 모르겠다"는 말을 자주 들어요. 사실 그때 당신은 이미 세 가지 시나리오를 돌려보고 있어요.',
        inner: '속마음은 훨씬 시끄러워요. 사람들이 지나치는 앞뒤를 계속 맞춰 보고, 지금 이 대화가 3년 뒤에 어떤 의미가 될지까지 상상해요. 그런데 그 생각을 굳이 꺼내지 않아요. 설명하는 데 드는 시간이 아깝거나, 설명해도 안 통할 것 같아서요. 그래서 당신의 진짜 마음은 말이 아니라 미리 준비된 행동으로 먼저 도착해요.',
        strengths: ['복잡한 문제를 구조로 바꿔 버리는 정리력', '모두가 흥분할 때 혼자 냉정해지는 힘', '한번 세운 기준을 쉽게 흔들지 않는 일관성', '필요한 것을 미리 준비해 두는 조용한 예지력'],
        alone: '혼자 있을 때 당신은 아무것도 안 하는 것처럼 보여요. 그런데 그 시간에 머릿속에서 한 해 계획이 다시 짜이고 있어요. 당신에게 혼자는 낭비가 아니라 정비 시간이에요.',
        trigger: '갑자기 바뀌는 계획, 이유 없이 반복되는 회의, "왜 그렇게까지 생각하냐"는 말. 준비한 것을 아무도 안 봐줄 때 가장 크게 지쳐요.',
        recover: '회복은 대화가 아니라 정리에서 와요. 메모에 지금 걸린 것을 다 쏟아내고, 그중 내일 할 세 개만 남겨 보세요. 그리고 아무도 없는 시간을 한 시간 확보하세요. 그 정도면 대개 원래 속도로 돌아와요.',
        charm: '당신의 매력은 과묵함이 만드는 여백이에요. 좋아하는 사람에게는 준비가 보여요. 지난달에 흘려 말한 취향을 기억하고, 아무도 신경 쓰지 않는 부분을 미리 챙겨 두죠. 그 조용한 확실함이 사람을 붙잡아요.',
        flaw: '약점은 마음을 말로 확인하지 않는다는 거예요. "알아서 알겠지"라고 생각하지만 상대는 몰라요. 그리고 당신 기준으로 실망이 한참 쌓인 뒤에야 말하기 때문에, 상대는 그때 처음 듣죠.',
        partners: ['ENFP', 'ENTP'],
        partnerNote: '당신의 조용한 계획에 웃음과 우연을 얹어 주는 사람들. 당신이 미처 말하지 않은 것을 웃으면서 꺼내 줘요.',
        avoid: '감정을 즉석에서 확인하려는 사람, 계획을 당일 아침에 바꾸는 사람. 당신은 그걸 배신으로 기억해요.',
        openLine: '"네가 조용한 게 무관심인 줄 알았어. 근데 그게 다 챙기고 있던 거였네."',
        work: '일에서는 목표가 주어지면 경로를 스스로 설계해요. 시키지 않아도 필요한 자료를 미리 모아 두고, 예상되는 반대 논리를 먼저 막아 두죠. 그래서 당신이 맡은 일은 중간에 흔들리는 일이 적어요.',
        jobs: ['전략 기획', '데이터 아키텍트', '게임 시스템 디자이너', '기술 연구 · R&D'],
        leap: '한 단계 도약의 열쇠는 완성도가 아니라 공개예요. 90%에서 한 번 공개하고 피드백을 받아 보세요. 당신의 계획은 세상과 부딪히는 순간 훨씬 정교해져요.'
      },
      en: {
        nick: 'The Blueprint Architect', tag: 'draws five moves ahead without saying so',
        outer: 'People remember you as calm and polite. You speak little, do not laugh loudly, and in meetings you usually say one precise thing at the end. So you hear “I never know what you are thinking.” In fact, three scenarios are already running in your head.',
        inner: 'Inside it is much louder. You keep matching up what everyone skipped, imagining what this conversation will mean in three years. You just do not say it — the explanation costs time, or it will not land anyway. So your real feelings arrive as preparation rather than words.',
        strengths: ['Turning tangled problems into structure', 'Staying cold-headed while others get swept up', 'A consistency that does not bend once set', 'Quietly preparing what will be needed'],
        alone: 'Alone, you look like you are doing nothing. That is when the year gets replanned. Solitude is not waste for you, it is maintenance.',
        trigger: 'Plans that change without notice, meetings that repeat for no reason, “why do you think so much?”. Nothing drains you faster than preparation nobody looks at.',
        recover: 'Recovery comes from tidying, not talking. Dump everything on your mind into a note and keep three things for tomorrow. Then take one hour with nobody around. That usually restores your speed.',
        charm: 'Your charm is the space your silence leaves. With someone you like, the preparation shows: you remember a preference they mentioned in passing, you handle the part nobody thinks about. That quiet certainty holds people.',
        flaw: 'Your weak spot is not confirming feelings out loud. You assume it is understood; it is not. And because you only speak after disappointment has piled up by your own standard, they hear it for the first time.',
        partners: ['ENFP', 'ENTP'],
        partnerNote: 'The people who lay laughter and accident over your quiet plan — and say out loud what you never got around to saying.',
        avoid: 'Anyone who demands emotional confirmation on the spot, or moves a plan the morning of. You remember that as betrayal.',
        openLine: '“I thought your silence meant you did not care. Turns out you were handling all of it.”',
        work: 'Given a goal, you design the route yourself. Material gets gathered before anyone asks and the counter-arguments are blocked in advance, so work you own rarely wobbles halfway.',
        jobs: ['Strategy planning', 'Data architecture', 'Game systems design', 'Research & development'],
        leap: 'The key to the next level is not polish but publication. Ship one thing at 90% and take the feedback. Your plan gets sharper the moment it meets the world.'
      }
    },

    INTP: {
      emoji: '🔎',
      ko: {
        nick: '원리 탐정', tag: '"왜?"가 멈추지 않는 사람',
        outer: '남들은 당신을 조용하고 느긋한 사람으로 봐요. 말은 적은데 갑자기 엉뚱한 질문을 던져서, 사람들은 당신이 어디까지 생각했는지 가늠을 못 하죠. 회의에서도 대개 흐름을 한 번 끊고 "근데 그게 왜 그렇게 되는데요?"를 물어요.',
        inner: '속에서는 질문이 계속 이어져요. 하나를 이해하면 그 전제가 궁금해지고, 그 전제의 예외가 궁금해져요. 그래서 남들은 이미 지나간 주제를 당신은 사흘 뒤에 다시 꺼내기도 해요. 당신에게 세상은 정답을 외우는 곳이 아니라, 원리를 알아내는 곳이에요.',
        strengths: ['남들이 당연하게 여기는 것을 의심하는 힘', '서로 다른 분야를 연결해 새 관점을 만드는 재주', '복잡한 이론을 끝까지 파고드는 집요함', '자기 생각을 스스로 교정하는 정직함'],
        alone: '혼자 있는 시간에 세상이 조용히 확장돼요. 밤새 한 주제를 파다가 아침에 전혀 다른 결론에 도착하죠. 그런데 그 결론을 아무에게도 말하지 않아서, 세상은 당신이 얼마나 깊이 들어갔는지 몰라요.',
        trigger: '형식만 있는 절차, "원래 그렇게 하는 거야"라는 말, 생각할 시간을 주지 않고 답을 요구하는 회의. 당신은 이유 없는 규칙 앞에서 가장 빨리 지쳐요.',
        recover: '회복은 아무것도 안 하기로 결정하는 데서 와요. 좋아하는 주제 하나를 목적 없이 30분만 읽어 보세요. 결과물을 만들 필요 없는 사고가 당신의 충전이에요.',
        charm: '당신의 매력은 관심을 가진 사람에게만 갑자기 깊어지는 데 있어요. 평소엔 무던한데, 상대가 흥미로운 말을 하면 눈빛이 바뀌죠. 그 순간의 집중이 사람에게는 특권처럼 느껴져요.',
        flaw: '약점은 시작은 잘하는데 끝을 안 맺는다는 거예요. 흥미가 식으면 그냥 멈추고, 상대는 그걸 "나에 대한 관심이 식은 것"으로 받아들여요. 그리고 감정의 확인을 귀찮아해서, 상대는 늘 혼자 확인해요.',
        partners: ['ENFJ', 'ESFJ'],
        partnerNote: '당신의 생각을 세상 말로 번역해 주는 사람들. 당신이 흩뿌린 아이디어를 실제 자리로 데려가 줘요.',
        avoid: '감정을 즉시 언어로 요구하는 사람, 설명 없이 규칙만 강요하는 사람.',
        openLine: '"네가 그 얘기 할 때 표정이 완전히 달라지는 거 알아? 나는 그게 제일 좋아."',
        work: '일에서는 문제의 뿌리를 찾아요. 남들이 증상을 고칠 때 원인을 파고들어, 같은 문제가 다시 안 생기게 만들죠. 대신 마감보다 완결성을 우선하는 습관이 있어서, 마무리 규칙을 정해 두면 성과가 두 배가 돼요.',
        jobs: ['소프트웨어 엔지니어', '데이터 분석', '연구원', '기술 작가 · 테크니컬 라이터'],
        leap: '도약의 열쇠는 말로 꺼내는 거예요. 머릿속 완성본을 세 줄 요약으로 남기는 습관 하나만 붙여도, 당신의 생각이 처음으로 남의 것이 돼요.'
      },
      en: {
        nick: 'The Principle Detective', tag: 'never stops asking why',
        outer: 'People see you as quiet and unhurried. You say little, then drop an unexpected question, and nobody can tell how far you have already gone. In meetings you tend to break the flow once: “but why does it work that way?”',
        inner: 'The questions keep going. Understanding one thing makes you curious about its premise, then about the exceptions to that premise. So you bring up a topic others finished three days ago. To you the world is not a place to memorise answers, it is a place to work out the mechanism.',
        strengths: ['Doubting what everyone takes for granted', 'Connecting distant fields into a new angle', 'Digging a theory to the end', 'Correcting your own thinking honestly'],
        alone: 'Your world expands quietly in private. You dig all night and arrive at a completely different conclusion by morning — then tell nobody, so nobody knows how deep you went.',
        trigger: 'Procedures with no purpose, “that is how it is done”, meetings that demand an answer before you can think. Nothing tires you faster than a rule without a reason.',
        recover: 'Recovery begins with deciding to do nothing. Read about something you love for thirty minutes with no output in mind. Thinking without a deliverable is how you recharge.',
        charm: 'Your charm is how suddenly deep you become for someone who interests you. Usually easy-going — then they say something interesting and your eyes change. That focus feels like a privilege.',
        flaw: 'You start well and do not close. When interest fades you simply stop, and the other person reads it as interest in them fading. You also find emotional check-ins tedious, so they end up doing all the checking.',
        partners: ['ENFJ', 'ESFJ'],
        partnerNote: 'The people who translate your thinking into the world’s language and carry your scattered ideas to an actual place.',
        avoid: 'Anyone who demands feelings immediately in words, or enforces rules without explaining them.',
        openLine: '“Do you know your whole face changes when you talk about that? That is my favourite thing.”',
        work: 'You find the root of a problem. While others fix symptoms you dig for the cause and stop it recurring. Finishing can lose to completeness, though — set a closing rule and your output doubles.',
        jobs: ['Software engineer', 'Data analysis', 'Researcher', 'Technical writer'],
        leap: 'The key is saying it out loud. One habit — a three-line summary of each finished thought — and your thinking starts belonging to someone else for the first time.'
      }
    },

    ENTJ: {
      emoji: '🧭',
      ko: {
        nick: '판을 키우는 지휘자', tag: '목표가 생기면 지형부터 바꾼다',
        outer: '사람들은 당신을 "일할 때 제일 멋있는 사람"으로 기억해요. 말이 빠르고 결정이 빠르고, 회의가 길어지면 자연스럽게 정리해서 결론을 내죠. 그래서 누군가에게는 리더고, 누군가에게는 조금 부담스러운 사람이에요.',
        inner: '속에서는 늘 목표가 돌아가요. 지금 하는 일이 1년 뒤 어떤 결과로 이어질지 계산하고, 그 계산이 안 맞으면 잠이 잘 안 와요. 그런데 그 계산 과정을 설명하지 않아서, 사람들은 당신이 그냥 밀어붙인다고 생각해요.',
        strengths: ['큰 그림을 그리고 자원을 배분하는 능력', '결정을 미루지 않는 결단', '사람의 강점을 빨리 읽고 자리를 맞춰 주는 눈', '압박 속에서 오히려 선명해지는 집중'],
        alone: '혼자 있을 때도 머릿속 회의가 계속돼요. 쉬는 법을 몰라서, 쉬는 것도 일정에 넣어야 하는 사람이에요.',
        trigger: '결론 없이 반복되는 회의, 책임을 미루는 사람, "그건 좀 어려울 것 같은데"만 반복하는 태도.',
        recover: '회복에는 몸을 쓰는 게 좋아요. 머리로만 도는 사람은 몸을 움직여야 꺼져요. 운동, 산책, 설거지처럼 손이 바쁜 일을 30분만 해 보세요.',
        charm: '당신의 매력은 앞을 보고 걷는 사람의 등이에요. 상대가 망설일 때 "그거 해보자"고 먼저 말해 주는 사람. 그 한마디에 사람들이 힘을 얻어요.',
        flaw: '약점은 감정의 속도를 못 기다린다는 거예요. 상대가 마음을 정리할 시간을 주지 않고 결론을 요구해서, "나는 이 사람의 프로젝트인가" 싶게 만들어요.',
        partners: ['INFP', 'ISFP'],
        partnerNote: '당신이 놓치는 결을 읽어 주는 사람들. 다만 결정을 재촉하면 그들은 말없이 문을 닫아요.',
        avoid: '결정을 회피하는 사람, 감정을 이유로 아무것도 정하지 않는 사람.',
        openLine: '"너 옆에 있으면 이상하게 다 할 수 있을 것 같아."',
        work: '목표를 숫자로 바꾸고 사람을 배치하는 데 능해요. 회의가 흩어질 때 방향을 다시 세우고, 필요한 사람을 필요한 자리에 놓죠. 그래서 당신이 들어간 일은 속도가 달라져요.',
        jobs: ['조직 리더십', '사업 개발', '프로덕트 매니저', '전략 컨설팅'],
        leap: '도약의 열쇠는 설득이 아니라 경청이에요. 결정 전에 한 사람의 반대 의견을 끝까지 들어 보세요. 당신의 판은 그 한 번으로 더 단단해져요.'
      },
      en: {
        nick: 'The Scale-maker', tag: 'changes the terrain once a goal appears',
        outer: 'People remember you as the one who looks most alive at work. You speak fast, decide fast, and when a meeting drags you tidy it into a conclusion. To some you are the leader; to others you are a little intimidating.',
        inner: 'A goal is always running in you. You calculate what this work becomes a year from now, and if the maths does not add up you cannot sleep. You just do not explain the maths, so people think you simply push.',
        strengths: ['Seeing the big picture and moving resources', 'Decisiveness', 'Reading strengths fast and putting them in the right seat', 'Clarity that sharpens under pressure'],
        alone: 'The meeting continues in your head even alone. You do not know how to rest, so rest has to go in the calendar.',
        trigger: 'Meetings with no conclusion, people who dodge responsibility, “that might be difficult” repeated as a full sentence.',
        recover: 'Use your body. A head that will not stop needs movement — thirty minutes of exercise, a walk, washing dishes.',
        charm: 'Your charm is the back of someone walking forward. When a person hesitates you are the one saying “let us try it.” One sentence, and they find strength.',
        flaw: 'You cannot wait for feeling to catch up. Demanding a conclusion before they have sorted their mind makes them wonder whether they are a person to you or a project.',
        partners: ['INFP', 'ISFP'],
        partnerNote: 'The people who read the grain you miss — though push them for a decision and they close the door without a word.',
        avoid: 'People who avoid decisions, and people who use feeling as a reason to settle nothing.',
        openLine: '“When you are next to me I feel like I can do anything.”',
        work: 'You turn goals into numbers and place people well. When a meeting scatters, you reset the direction and put the right person in the right seat, and work you enter moves at a different speed.',
        jobs: ['Organisational leadership', 'Business development', 'Product manager', 'Strategy consulting'],
        leap: 'The key is listening, not persuading. Hear one opponent to the end before deciding. Your plan gets stronger on that one hearing.'
      }
    },

    ENTP: {
      emoji: '⚗️',
      ko: {
        nick: '가설 제조기', tag: '금기를 가지고 노는 발명가',
        outer: '유쾌하고 말이 빠른 사람. 규칙에 "근데 왜요?"를 붙이는 걸 좋아해서, 어떤 자리에서는 분위기 메이커고 어떤 자리에서는 골치 아픈 사람이에요. 본인은 대개 후자를 의식하지 못하죠.',
        inner: '머릿속에서 아이디어가 동시에 여러 개 돌아가요. 하나에 집중하기보다 연결을 찾는 쪽이라, 대화 중에 전혀 다른 얘기로 튀어도 당신 안에서는 다 이어져 있어요. 그 연결을 남들이 못 따라오면 조금 외로워요.',
        strengths: ['남들이 못 보는 연결을 만드는 발상', '반대 입장을 끝까지 밀어 보는 사고 실험', '위기에서 오히려 재미를 찾는 태도', '설득과 협상의 언어 감각'],
        alone: '혼자 있으면 머리가 더 바빠요. 누군가와 이야기할 때 오히려 정리가 돼요. 당신에게 말은 사치가 아니라 연산이에요.',
        trigger: '"원래 이렇게 해요", 재미없는 반복, 생각을 말하기 전에 결론부터 요구하는 자리.',
        recover: '쓸데없는 주제로 누군가와 30분 떠들어 보세요. 아무 성과 없는 대화가 당신의 정비 시간이에요.',
        charm: '대화가 끊기지 않는 사람. 상대가 하던 말의 반대편까지 상상해서 던져 주니까, 함께 있으면 머리가 좋아진 기분이 들어요.',
        flaw: '약점은 시작은 많은데 끝이 없다는 것. 그리고 논쟁에서 이기고 나서야 상대의 표정을 봐요. 그때는 이미 늦어 있어요.',
        partners: ['INFJ', 'ISFJ'],
        partnerNote: '당신의 아이디어에 결말을 붙여 주는 사람들. 이들이 없으면 아이디어는 계속 아이디어로 남아요.',
        avoid: '자존심으로 말하는 사람, 아이디어를 "안 될 이유"로만 받아 주는 사람.',
        openLine: '"너랑 얘기하면 내가 좀 더 똑똑해지는 기분이야."',
        work: '새 판을 여는 데 강해요. 아무도 안 해 본 방식을 먼저 시도하고, 실패해도 웃으면서 다음을 던지죠. 기존 업무를 개선하는 자리보다 없는 것을 만드는 자리에서 빛나요.',
        jobs: ['스타트업 창업', '마케팅 기획', '브랜드 전략', '방송 · 콘텐츠 기획'],
        leap: '도약은 아이디어를 하나만 남기는 데서 와요. 후보 다섯 개 중 하나를 골라 30일만 끝까지 붙잡아 보세요. 그 하나가 당신의 이력을 바꿔요.'
      },
      en: {
        nick: 'The Hypothesis Machine', tag: 'plays with the untouchable',
        outer: 'Funny and quick. You like attaching “but why?” to a rule, which makes you the life of one room and a headache in another — usually without noticing which you are.',
        inner: 'Several ideas run at once. You look for connections rather than focus, so even when you jump to something unrelated the thread is intact inside you. When nobody can follow, it gets a little lonely.',
        strengths: ['Ideas from connections others cannot see', 'Running an opposite position to its end', 'Finding the fun in a crisis', 'A feel for the language of persuasion'],
        alone: 'Alone, your head gets busier. Talking to someone is when things sort themselves out — speech is computation for you, not luxury.',
        trigger: '“That is how we do it”, joyless repetition, rooms that want a conclusion before you can think.',
        recover: 'Thirty minutes of pointless conversation. Talk with no deliverable is your maintenance.',
        charm: 'Conversation that never stalls. You imagine the other side of what they just said and throw it back, so people feel sharper around you.',
        flaw: 'Many starts, no endings. And you check the other person’s face only after winning the argument — by then it is late.',
        partners: ['INFJ', 'ISFJ'],
        partnerNote: 'The people who give your ideas an ending. Without them, an idea stays an idea.',
        avoid: 'People who argue with their ego, and people who receive ideas only as reasons it will not work.',
        openLine: '“Talking to you makes me feel smarter.”',
        work: 'You are strong at opening new ground. You try what nobody has tried and, if it fails, laugh and throw the next one. You shine where something does not exist yet, more than where something needs improving.',
        jobs: ['Startup founder', 'Marketing planning', 'Brand strategy', 'Broadcast & content planning'],
        leap: 'The leap comes from keeping one idea. Pick one of five and hold it for thirty days. That one changes your record.'
      }
    },

    INFJ: {
      emoji: '🕯️',
      ko: {
        nick: '사람을 읽는 등대', tag: '남의 마음이 먼저 보인다',
        outer: '조용하고 다정하고, 어딘가 비밀스러운 사람. 말수는 적은데 사람들이 당신에게 고민을 털어놓아요. 처음 보는 사람도 이상하게 다 말하게 되죠. 그래서 당신은 늘 남의 이야기의 창고예요.',
        inner: '사람의 말과 표정 사이의 간격을 읽어요. 말은 괜찮다는데 눈이 아니라고 하면, 당신은 그 눈을 기억해요. 그런데 그렇게 읽은 것을 다 품고 있어서, 정작 자기 이야기는 잘 꺼내지 못해요.',
        strengths: ['말하지 않은 감정을 읽는 감수성', '사람 안의 최선의 가능성을 보는 눈', '오래 봐도 흔들리지 않는 신념', '어수선한 분위기를 조용히 정리하는 힘'],
        alone: '혼자 있어야 사람을 다시 사랑할 수 있어요. 사람을 많이 만난 날 조용한 시간이 없으면 다음 날이 무너져요.',
        trigger: '무례함, 사람을 도구로 쓰는 대화, 내가 공들인 것을 가볍게 넘기는 태도.',
        recover: '혼자 있는 시간과 글쓰기. 머릿속 사람들을 종이에 내려놓아야 다시 숨이 쉬어져요.',
        charm: '당신이 사람을 이해하는 방식이 매력이에요. 상대가 말로 다 하지 않은 것까지 알아주니까, 함께 있으면 처음으로 이해받는 기분이 들어요.',
        flaw: '약점은 이상이 높다는 것. 그리고 실망을 말하지 않고 마음속에서 결론을 내려요. 상대는 어느 날 갑자기 끝난 관계를 통보받죠.',
        partners: ['ENTP', 'ENFP'],
        partnerNote: '당신의 깊이에 밝음을 얹어 주는 사람들. 이들과 있으면 무거운 생각이 잠깐 가벼워져요.',
        avoid: '감정을 가볍게 다루는 사람, 자기 이야기만 하는 사람.',
        openLine: '"네가 그걸 알아챘을 때, 나는 처음으로 덜 외로웠어."',
        work: '사람의 동기를 읽고 장기 비전을 세우는 데 강해요. 겉으로 드러난 요구가 아니라 그 아래의 필요를 보기 때문에, 당신이 쓴 기획은 오래 살아남아요.',
        jobs: ['상담 · 코칭', '콘텐츠 기획', '브랜드 스토리텔링', '교육 · 커리큘럼 설계'],
        leap: '도약은 완벽한 사람을 기다리지 않는 것에서 와요. 준비가 80%일 때 한 번 문을 두드려 보세요. 세상은 당신이 생각한 것보다 덜 무서워요.'
      },
      en: {
        nick: 'The Lighthouse', tag: 'sees other people’s hearts first',
        outer: 'Quiet, gentle, faintly private. You speak little, yet people pour their worries into you — even strangers tell you everything. You are permanently a warehouse of other people’s stories.',
        inner: 'You read the gap between what a person says and what their face does. “I am fine,” with eyes that are not: you keep the eyes. And because you hold all of what you read, your own story rarely comes out.',
        strengths: ['Sensitivity to unspoken feeling', 'Seeing the best possibility in a person', 'Convictions that hold over years', 'Quietly settling a scattered room'],
        alone: 'You can only love people again after time alone. A crowded day without quiet makes the next day collapse.',
        trigger: 'Rudeness, conversation that treats people as tools, having your effort waved away.',
        recover: 'Solitude plus writing. Put the people in your head onto paper or you cannot breathe.',
        charm: 'The way you understand people. You know what they did not say, so being with you feels like being understood for the first time.',
        flaw: 'Your standards are high, and you conclude inside without saying you are disappointed. Then one day they are informed the relationship is over.',
        partners: ['ENTP', 'ENFP'],
        partnerNote: 'The people who lay brightness over your depth — around them the heavy thinking gets light for a moment.',
        avoid: 'People who treat feeling lightly, and people who only talk about themselves.',
        openLine: '“When you noticed that, I was less lonely for the first time.”',
        work: 'You read motives and build long-range vision. You see the need beneath the stated request, which is why your plans survive longer than most.',
        jobs: ['Counselling & coaching', 'Content planning', 'Brand storytelling', 'Education & curriculum design'],
        leap: 'The leap is not waiting for the perfect person. Knock once at 80% ready. The world is less frightening than you think.'
      }
    },

    INFP: {
      emoji: '🐚',
      ko: {
        nick: '마음의 수집가', tag: '작은 감정을 오래 보관한다',
        outer: '조용하고 순한 사람. 싫은 말도 웃으면서 넘기는 것처럼 보여요. 그런데 그 웃음 뒤에 어떤 문장이 남았는지는 아무도 몰라요. 당신은 화를 내는 대신 조용히 마음을 닫는 쪽이에요.',
        inner: '머릿속에 자기만의 세계가 있어요. 좋아하는 장면, 문장, 노래가 그 안에서 계속 재생되고, 그 세계의 기준으로 현실을 판단해요. 그래서 남들이 "왜 저런 걸 좋아하지" 하는 것에 깊이 빠져요.',
        strengths: ['사람과 사물의 진심을 알아보는 감각', '자기 세계를 끝까지 지키는 순수함', '상처받은 사람에게 정확히 닿는 말', '감정을 글로 옮기는 재능'],
        alone: '혼자인 시간이 길어도 외롭지 않아요. 오히려 사람들 사이에 있을 때 더 외로울 때가 있어요.',
        trigger: '가치관을 무시당할 때, 사람이 상품처럼 평가받는 자리, 내 진심이 "그거 뭐가 좋아"로 끝날 때.',
        recover: '좋아하는 것을 다시 만지세요. 음악, 영상, 책 한 장면. 당신의 회복은 사람이 아니라 감각에서 와요.',
        charm: '누군가를 좋아할 때 그 사람의 사소한 것까지 다 기억해요. 그 기억이 상대에게는 "세상에 한 사람은 나를 정확히 본다"는 감각을 줘요.',
        flaw: '약점은 말하지 않고 마음속에서 정리해 버린다는 것. 그리고 그 정리가 끝나면 조용히 사라져요. 상대는 이유를 끝까지 모를 수 있어요.',
        partners: ['ENTJ', 'ESTJ'],
        partnerNote: '당신의 세계를 현실에 세워 주는 사람들. 다만 그들이 속도를 재촉하면 당신은 문을 닫아요.',
        avoid: '가치관을 조롱하는 사람, 감정을 효율로만 계산하는 사람.',
        openLine: '"너는 네가 생각하는 것보다 훨씬 좋은 사람이야. 진짜로."',
        work: '진심이 담긴 것을 만들 때 힘이 나요. 남들이 흉내 낼 수 없는 결을 만들어 내지만, 마감과 평가 앞에서는 쉽게 지쳐요. 그래서 좋아하는 일을 오래 하려면 마감을 스스로에게 가볍게 걸어 주세요.',
        jobs: ['작가 · 웹소설', '일러스트 · 디자인', '심리 상담', '브랜드 카피라이터'],
        leap: '도약은 감정에 이름을 붙이는 데서 와요. 지금 만드는 것에 "이건 위로를 주는 이야기다"처럼 한 줄 정의를 붙여 보세요. 그 한 줄이 사람을 찾아옵니다.'
      },
      en: {
        nick: 'The Collector of Feelings', tag: 'keeps small feelings for a long time',
        outer: 'Quiet and gentle. You seem to laugh off what you do not like — nobody knows which sentence stayed behind that laugh. Instead of getting angry, you close the door quietly.',
        inner: 'You have a world of your own inside. Favourite scenes, lines and songs keep playing there, and you judge reality by that world’s standard. Which is why you fall deeply into things others ask “why do you even like that?” about.',
        strengths: ['Recognising what is genuine in people and things', 'Guarding your own world intact', 'Words that land exactly on someone who is hurt', 'Putting feeling into writing'],
        alone: 'Long solitude does not feel lonely. Sometimes being among people does.',
        trigger: 'Having your values dismissed, places where people are graded like products, your sincerity answered with “what is so good about that?”',
        recover: 'Touch what you love again — music, a film, one page. Your recovery comes from sensation, not people.',
        charm: 'When you like someone you remember the smallest things about them. It gives them the sense that one person in the world sees them accurately.',
        flaw: 'You conclude inside without saying anything, then quietly disappear once the conclusion is set. They may never learn why.',
        partners: ['ENTJ', 'ESTJ'],
        partnerNote: 'The people who put your world on real ground — though hurry them and they shut the door.',
        avoid: 'People who mock your values, and people who calculate feeling as efficiency.',
        openLine: '“You are a much better person than you think. Really.”',
        work: 'You have energy when making something sincere. You produce a grain nobody can imitate, but deadlines and evaluation tire you fast — so keep the deadlines you set for yourself light.',
        jobs: ['Writer / web novelist', 'Illustration & design', 'Counselling', 'Brand copywriter'],
        leap: 'The leap comes from naming the feeling. Attach one line to what you are making — “this is a story that comforts” — and people will find it.'
      }
    },

    ENFJ: {
      emoji: '🌱',
      ko: {
        nick: '사람을 피우는 정원사', tag: '사람이 자라는 자리를 만든다',
        outer: '따뜻하고 말이 좋은 사람. 사람들 사이에서 누가 어색한지 먼저 알아채고, 그 사람이 대화에 들어오도록 자연스럽게 길을 열어 줘요. 그래서 모임이 끝나고 나면 당신에게 고맙다고 말하는 사람이 꼭 있어요.',
        inner: '속에서는 사람마다의 가능성이 보여요. 이 사람은 여기서 힘들어하고, 저 사람은 저걸 해보면 좋겠는데, 같은 생각이 계속 돌아가요. 그런데 정작 자기가 무엇을 원하는지는 물어본 지 오래됐어요.',
        strengths: ['사람의 장점을 발견해 북돋우는 힘', '어색한 자리를 자연스럽게 만드는 분위기 감각', '말로 사람을 일으키는 표현력', '책임을 끝까지 지는 성실함'],
        alone: '혼자 있으면 누구를 챙겨야 할지 생각해요. 당신에게 외로움은 사람이 없는 게 아니라, 챙길 사람이 없는 상태예요.',
        trigger: '노력이 당연하게 여겨질 때, 무례한 말, 내가 만든 분위기를 아무도 기억하지 않을 때.',
        recover: '나를 위해 쓰는 시간을 일정에 먼저 넣으세요. 그리고 하루 한 번은 "내가 지금 어떤 기분인지"를 소리 내어 말해 보세요.',
        charm: '당신이 누군가를 응원할 때, 그 사람은 세상에서 제일 잘될 것 같은 기분이 들어요. 그 힘이 사람을 당신에게 오래 붙잡아 둬요.',
        flaw: '약점은 모두를 만족시키려다 정작 자기 마음을 숨긴다는 것. 그리고 그렇게 쌓인 서운함이 어느 날 갑자기 큰 말로 터져요.',
        partners: ['INTP', 'ISTP'],
        partnerNote: '당신의 온기를 조용히 받아 주고, 말없이 자기 자리를 지키는 사람들. 그 무던함이 당신을 쉬게 해요.',
        avoid: '받기만 하고 고맙다고 말하지 않는 사람, 사람을 비교하며 줄 세우는 사람.',
        openLine: '"너는 사람들한테 그렇게 잘해 주면서 왜 너한테는 안 그래?"',
        work: '사람을 모으고 움직이는 일에 능해요. 팀의 온도를 올려 성과로 바꾸는 힘이 있어서, 교육·영업·기획처럼 사람과 결과가 같이 움직이는 자리에서 강해요.',
        jobs: ['교육 · 강의', 'HR · 조직문화', '브랜드 커뮤니케이션', '이벤트 · 커뮤니티 운영'],
        leap: '도약은 거절을 연습하는 데서 와요. 다 받아 주는 사람은 오래 못 가요. 한 번의 정중한 거절이 당신의 신뢰를 오히려 높여요.'
      },
      en: {
        nick: 'The Gardener of People', tag: 'builds the place where people grow',
        outer: 'Warm and good with words. You notice who is uncomfortable first and open a path into the conversation so naturally that someone always thanks you as the evening ends.',
        inner: 'You see each person’s possibility, and the loop keeps running — this one is struggling here, that one should try this. But it has been a long time since anyone asked what you want.',
        strengths: ['Finding a strength and watering it', 'Making an awkward room feel ordinary', 'Language that lifts people', 'Carrying a responsibility to the end'],
        alone: 'Alone, you think about who needs looking after. Loneliness for you is not the absence of people but the absence of someone to care for.',
        trigger: 'Effort taken for granted, rude words, a mood you built that nobody remembers.',
        recover: 'Put time for yourself in the calendar first, and once a day say out loud how you actually feel.',
        charm: 'When you cheer for someone they feel like they could take on the world. That force keeps people near you for years.',
        flaw: 'Trying to satisfy everyone, you hide your own mind — until the stored disappointment arrives all at once, much too loud.',
        partners: ['INTP', 'ISTP'],
        partnerNote: 'The people who quietly accept your warmth and hold their own ground without fuss. That steadiness lets you rest.',
        avoid: 'People who only take and never say thanks, and people who rank others against each other.',
        openLine: '“You take such good care of everyone — why not yourself?”',
        work: 'You gather and move people. You can raise a team’s temperature and turn it into results — teaching, sales, planning, anywhere people and outcome move together.',
        jobs: ['Teaching & lecturing', 'HR & culture', 'Brand communications', 'Events & community'],
        leap: 'The leap comes from practising refusal. The person who accepts everything does not last. One polite no raises your credibility.'
      }
    },

    ENFP: {
      emoji: '✨',
      ko: {
        nick: '아이디어 불꽃', tag: '시작의 순간에 가장 밝다',
        outer: '밝고 즉흥적인 사람. 새것 앞에서 눈이 반짝이고, 그 에너지가 주변까지 번져서 다들 조금 신나게 돼요. 그래서 당신이 있는 자리는 대개 지루하지 않아요.',
        inner: '속에서는 가능성이 계속 열려요. 지금 하는 일에서 다음 일이 보이고, 그 다음도 보여서 한 곳에 머무는 게 어려워요. 그런데 그 많은 가능성 중에 정작 끝낸 것이 적다는 걸 스스로도 알아요.',
        strengths: ['사람을 끌어들이는 에너지', '익숙한 것을 새롭게 보는 눈', '처음 만난 사람과도 금방 가까워지는 친화력', '기분이 꺾여도 다시 올라오는 회복력'],
        alone: '혼자 있으면 새로운 걸 찾아요. 가만히 있는 것보다 뭔가를 시작하고 있을 때 훨씬 편안해요.',
        trigger: '반복되는 업무, "그건 안 돼"로 시작하는 대화, 가능성보다 위험을 먼저 말하는 사람.',
        recover: '새로운 자극 하나를 아주 작게 넣어 보세요. 새 길로 퇴근하기, 새 노래 한 장 듣기. 큰 변화보다 작은 새로움이 당신을 살려요.',
        charm: '당신이 누군가에게 관심을 가질 때, 그 사람은 세상에서 제일 흥미로운 사람이 된 기분이 들어요. 그 시선이 사람을 끌어당겨요.',
        flaw: '약점은 흥미가 식으면 갑자기 사라진다는 것. 그리고 그 사라짐을 상대는 배신으로 기억해요. 시작할 때만큼 끝낼 때도 진심을 보여 주세요.',
        partners: ['INTJ', 'INFJ'],
        partnerNote: '당신의 불꽃을 꺼뜨리지 않으면서, 타지 않게 받쳐 주는 사람들. 이들이 있으면 당신의 아이디어가 현실이 돼요.',
        avoid: '가능성을 미리 자르는 사람, 감정을 통제하려는 사람.',
        openLine: '"너랑 있으면 세상이 좀 더 재밌어 보여."',
        work: '새로운 걸 시작하는 자리에 강해요. 기획의 첫 단계, 캠페인의 첫 아이디어, 아무도 안 해 본 시도에서 빛나요. 대신 마무리를 도와줄 사람이 옆에 있으면 성과가 두 배가 돼요.',
        jobs: ['콘텐츠 크리에이터', '마케팅 · 캠페인 기획', '방송 · 예능 기획', '커뮤니티 매니저'],
        leap: '도약은 하나를 고르는 용기에서 와요. 재밌는 것 다섯 개 중 하나만 90일 붙잡아 보세요. 그 하나가 당신을 다음 단계로 데려가요.'
      },
      en: {
        nick: 'The Spark', tag: 'brightest at the moment of starting',
        outer: 'Bright and spontaneous. Your eyes light up at anything new and the energy spreads, so everyone gets a little excited. Rooms you are in are rarely boring.',
        inner: 'Possibilities stay open inside. One thing shows you the next and the next, which makes staying put hard. And you know, better than anyone, how few of those possibilities got finished.',
        strengths: ['Energy that pulls people in', 'Seeing the familiar as new', 'Closeness with a stranger in minutes', 'Getting back up when your mood drops'],
        alone: 'Alone, you look for something new. Starting something is far more comfortable than sitting still.',
        trigger: 'Repeated tasks, conversations that start with “you cannot”, people who name the risk before the possibility.',
        recover: 'Add one very small new stimulus — a different way home, one new album. Small novelty, more than big change, keeps you alive.',
        charm: 'When you take an interest in someone they become the most interesting person in the world. That gaze is magnetic.',
        flaw: 'When interest fades you vanish, and the other person remembers it as betrayal. Show as much sincerity in finishing as in starting.',
        partners: ['INTJ', 'INFJ'],
        partnerNote: 'The people who hold you without putting out your fire. With them your ideas become real.',
        avoid: 'People who cut off possibility in advance, and people who try to control feelings.',
        openLine: '“The world looks more fun when you are around.”',
        work: 'You are strong at beginnings — the first stage of planning, the first idea of a campaign, the untried attempt. A finisher beside you doubles your output.',
        jobs: ['Content creator', 'Marketing & campaigns', 'Broadcast & entertainment planning', 'Community manager'],
        leap: 'The leap is the courage to choose one. Hold one of five interesting things for ninety days. That one takes you to the next level.'
      }
    },

    ISTJ: {
      emoji: '🗂️',
      ko: {
        nick: '기록의 수호자', tag: '말한 것은 반드시 지킨다',
        outer: '조용하고 믿음직한 사람. 약속을 어기는 일이 거의 없고, 맡은 일은 조용히 끝내 놓아요. 그래서 사람들은 당신이 있다는 걸 잊었다가, 당신이 없을 때 그 빈자리를 크게 느껴요.',
        inner: '속에서는 기준이 조용히 돌아가요. 이건 이렇게 하는 게 맞고, 저건 선을 넘은 것 같고. 그 판단을 굳이 말하지 않아서 무던해 보이지만, 사실 당신은 꽤 자주 실망하고 있어요.',
        strengths: ['한 번 맡은 일을 끝까지 완수하는 책임감', '세부를 놓치지 않는 꼼꼼함', '감정에 흔들리지 않는 안정감', '과거의 기록에서 답을 찾는 실용적 기억력'],
        alone: '혼자 있을 때 계획을 다시 정리해요. 당신에게 쉼은 아무것도 안 하는 게 아니라, 순서를 다시 맞추는 일이에요.',
        trigger: '약속을 가볍게 바꾸는 사람, 마감을 지키지 않는 사람, 준비 없이 시작하는 회의.',
        recover: '손에 잡히는 일을 하나 끝내세요. 서랍 정리, 밀린 서류 하나. 완결된 작은 일이 당신의 불안을 지워 줘요.',
        charm: '당신의 매력은 말보다 행동이 먼저 도착한다는 거예요. 상대가 부탁하기 전에 이미 준비해 두고, 그 사실을 자랑하지 않죠. 그 조용함이 사람을 안심시켜요.',
        flaw: '약점은 변화 앞에서 몸이 굳는다는 것. 갑자기 바뀐 계획을 받아들이는 데 시간이 오래 걸리고, 그 사이 표정이 굳어서 상대는 거절로 받아들여요.',
        partners: ['ESFP', 'ENFP'],
        partnerNote: '당신의 규칙에 생기를 더해 주는 사람들. 이들이 있으면 계획이 조금 틀어져도 웃을 수 있어요.',
        avoid: '말을 자주 바꾸는 사람, 규칙을 자기 편할 때만 꺼내는 사람.',
        openLine: '"너는 말 안 해도 다 해 주는 사람이야. 그게 얼마나 큰지 알아."',
        work: '일에서는 정확함으로 신뢰를 쌓아요. 같은 일을 매번 같은 품질로 해내는 능력은 대체하기 어려워요. 시스템이 흔들릴 때 마지막으로 남는 사람이 대개 당신이에요.',
        jobs: ['회계 · 재무', '공공 · 행정', '프로젝트 관리(PM)', '품질 · 운영 관리'],
        leap: '도약은 익숙한 방식을 한 번 바꿔 보는 데서 와요. 지금 하는 일 하나를 일부러 다른 방법으로 해 보세요. 당신의 기준은 그대로 두고, 방법만 실험해 보는 거예요.'
      },
      en: {
        nick: 'The Keeper', tag: 'keeps what was promised',
        outer: 'Quiet and reliable. You almost never break a commitment, and work you take on gets finished without noise. People forget you are there — and then feel the hole when you are not.',
        inner: 'A standard runs quietly inside. This is the right way; that crossed a line. You do not say it, so you seem unbothered, but in truth you are disappointed more often than anyone knows.',
        strengths: ['Finishing what you take on', 'Noticing the detail', 'Steadiness that feeling cannot shake', 'A practical memory for where the answer was last time'],
        alone: 'Alone, you re-sort the plan. Rest for you is not doing nothing, it is putting the order back.',
        trigger: 'People who move a promise lightly, people who miss deadlines, meetings that start without preparation.',
        recover: 'Finish one thing you can hold. A drawer, one overdue form. A completed small task erases your unease.',
        charm: 'Your charm is that action arrives before words. You prepare before being asked and never mention it. That quietness makes people feel safe.',
        flaw: 'You stiffen in front of change. A last-minute shift takes you a long time to accept, and your frozen face reads as rejection.',
        partners: ['ESFP', 'ENFP'],
        partnerNote: 'The people who put life into your rules — with them, a bent plan can still make you laugh.',
        avoid: 'People who change their words often, and people who invoke the rules only when it suits them.',
        openLine: '“You do it all without being asked. Do you know how big that is?”',
        work: 'You build trust with accuracy. Delivering the same work at the same quality every time is hard to replace, and when a system shakes you are usually the one left standing.',
        jobs: ['Accounting & finance', 'Public sector & administration', 'Project management', 'Quality & operations'],
        leap: 'The leap comes from changing one familiar method. Do one thing a different way on purpose — keep your standard, experiment only with the route.'
      }
    },

    ISFJ: {
      emoji: '🧶',
      ko: {
        nick: '조용한 안전망', tag: '소리 없이 다 챙겨 둔다',
        outer: '다정하고 조용한 사람. 필요한 것을 말하기 전에 이미 준비해 두고, 그걸 티 내지 않아요. 그래서 사람들은 당신이 해 준 일을 나중에야 알아차리죠.',
        inner: '속에서는 사람들의 사정이 계속 돌아가요. 저 사람은 요즘 힘들 테니 조심해야지, 이 사람은 이걸 좋아하니까. 그런데 정작 내가 싫은 것은 말하지 않아서, 마음속 명세서가 조용히 길어져요.',
        strengths: ['상대가 말하기 전에 알아채는 세심함', '한 번 인연을 맺으면 오래 가는 의리', '반복되는 일상에서 신뢰를 만드는 성실함', '분위기를 부드럽게 만드는 안정감'],
        alone: '혼자 있을 때 사람들을 걱정해요. 당신이 진짜로 쉬려면 누구도 걱정하지 않는 시간이 필요해요.',
        trigger: '고마움을 말하지 않는 사람, 당연하게 여기는 태도, 내 자리를 함부로 넘보는 사람.',
        recover: '나를 위한 작은 일 하나를 하세요. 좋아하는 간식, 좋아하는 담요. 남을 챙기는 손길을 잠깐 자기 쪽으로 돌리는 거예요.',
        charm: '당신이 누군가를 챙길 때, 그 사람은 자기 이야기가 세상에 하나 있다는 걸 느껴요. 그 세심함이 오래 남아요.',
        flaw: '약점은 싫다는 말을 못 한다는 것. 참고 참다가 어느 날 갑자기 관계를 끊어서, 상대는 영문을 몰라요.',
        partners: ['ENTP', 'ESTP'],
        partnerNote: '당신이 안 해 본 것을 해 보게 만드는 사람들. 이들과 있으면 조용한 하루가 조금 시끄러워지고, 그게 좋아요.',
        avoid: '고마움을 모르는 사람, 당신의 희생을 당연하게 계산하는 사람.',
        openLine: '"네가 챙겨 준 거 나 다 알고 있어. 말을 안 했을 뿐이야."',
        work: '일에서는 사람과 일정을 조용히 정리해요. 눈에 띄지 않지만 당신이 빠지면 모두가 불편해지는 자리예요. 운영, 지원, 돌봄처럼 지속성이 중요한 곳에서 강해요.',
        jobs: ['간호 · 돌봄', '행정 · 사무 지원', '고객 지원', '교육 행정'],
        leap: '도약은 내 이름으로 한 번 말하는 데서 와요. 회의에서 "제가 한 일은 이겁니다"를 한 번만 말해 보세요. 그게 당신을 지켜 줘요.'
      },
      en: {
        nick: 'The Safety Net', tag: 'quietly has it all covered',
        outer: 'Warm and quiet. What is needed is ready before it is asked for, and you never make a show of it — so people only notice later what you did.',
        inner: 'Other people’s circumstances keep running inside: this one is having a hard time, be gentle; that one likes this. What you dislike never gets said, and the invoice grows quietly.',
        strengths: ['Noticing before they speak', 'Loyalty that lasts once attached', 'Trust built from repeated ordinary days', 'A steadiness that softens a room'],
        alone: 'Alone, you worry about people. Real rest needs time when there is nobody to worry about.',
        trigger: 'People who never say thank you, being taken for granted, someone stepping on your place carelessly.',
        recover: 'Do one small thing for yourself — a favourite snack, a favourite blanket. Turn the hand that looks after others toward yourself for a moment.',
        charm: 'When you look after someone, they feel their story has a place in the world. That care stays with them.',
        flaw: 'You cannot say “I do not want to.” You endure and endure, then cut the relationship off — and they have no idea why.',
        partners: ['ENTP', 'ESTP'],
        partnerNote: 'The people who get you to try what you never did. A quiet day gets louder around them, and you like it.',
        avoid: 'People who do not know gratitude, and people who count your sacrifice as owed.',
        openLine: '“I know everything you did for me. I just never said it.”',
        work: 'You quietly settle people and schedules. Your seat is invisible until you leave it and everyone is uncomfortable. Operations, support and care suit you.',
        jobs: ['Nursing & care', 'Administration & office support', 'Customer support', 'Education administration'],
        leap: 'The leap is saying it once in your own name. Say “this is what I did” in one meeting. That sentence protects you.'
      }
    },

    ESTJ: {
      emoji: '🚦',
      ko: {
        nick: '실행의 관제탑', tag: '결정을 행동으로 바꾼다',
        outer: '분명하고 믿음직한 사람. 말이 정확하고, 일이 어긋나면 바로 "그래서 누가 언제까지 할 거야?"를 물어요. 덕분에 팀이 굴러가지만, 가끔은 "너무 딱딱하다"는 말을 들어요.',
        inner: '속에서는 책임에 대한 감각이 늘 작동해요. 내가 이 자리에 있는 이상 이건 내가 책임져야 한다는 생각이 늘 깔려 있어요. 그래서 남들이 대충 넘길 때 혼자 화가 나요.',
        strengths: ['일을 구조와 일정으로 바꾸는 실행력', '책임을 회피하지 않는 태도', '현실적인 판단과 정확한 말', '기준을 세워 조직을 정리하는 힘'],
        alone: '혼자 있어도 머릿속에 할 일이 정렬돼 있어요. 쉬는 것도 계획이 있어야 편해요.',
        trigger: '말만 하고 안 하는 사람, 책임을 흐리는 태도, 기준 없이 감정으로 결정하는 자리.',
        recover: '몸을 쓰거나 손으로 정리하는 일이 회복에 좋아요. 그리고 일주일에 한 번은 아무 목표 없는 저녁을 일부러 비워 두세요.',
        charm: '당신의 매력은 흔들리지 않는 태도예요. 상대가 무너질 때 옆에서 "괜찮아, 하나씩 하자"고 말해 주는 사람. 그 말이 실제로 맞아떨어지는 게 당신의 힘이에요.',
        flaw: '약점은 감정을 논의의 대상으로 안 본다는 것. 상대가 서운하다고 말하면 "그건 감정이고, 사실은 이거잖아"로 넘겨서, 결국 아무도 말하지 않게 돼요.',
        partners: ['INFP', 'ISFP'],
        partnerNote: '당신이 놓치는 결을 조용히 보여 주는 사람들. 이들이 있으면 당신의 기준이 조금 부드러워져요.',
        avoid: '약속을 흐리는 사람, 감정으로 규칙을 바꾸려는 사람.',
        openLine: '"너랑 있으면 일이 정리되는 게 아니라 마음이 정리돼."',
        work: '일에서는 목표를 계획으로, 계획을 행동으로 바꿔요. 회의가 흩어지면 결론을 만들고 담당을 정하죠. 그래서 당신이 있는 조직은 속도가 붙어요.',
        jobs: ['운영 총괄', '영업 관리', '공공 · 행정 관리', '물류 · 생산 관리'],
        leap: '도약은 “내가 맞다”를 한 번 놓아 보는 데서 와요. 반대 의견을 끝까지 듣고 그 사람 방식으로 한 번 해 보세요. 당신의 신뢰가 그 한 번으로 두 배가 돼요.'
      },
      en: {
        nick: 'The Control Tower', tag: 'turns decisions into action',
        outer: 'Clear and dependable. You speak precisely, and when work slips you ask “so who is doing what by when?” It keeps teams moving — and now and then earns you “a bit stiff.”',
        inner: 'A sense of responsibility is always running. If I am in this seat, this is mine to carry. That is why you are the one who gets angry when others wave something through.',
        strengths: ['Turning work into structure and schedule', 'Never dodging responsibility', 'Practical judgement and precise speech', 'Setting standards that organise a team'],
        alone: 'Even alone, the to-do list stays sorted. You rest better with a plan for resting.',
        trigger: 'People who talk and do not act, responsibility that gets blurred, decisions made by feeling with no standard.',
        recover: 'Use your body or tidy something by hand. And once a week, deliberately leave an evening with no goal.',
        charm: 'Your charm is how you do not shake. When someone is falling apart you are the one saying “it is fine, one thing at a time” — and it actually holds, which is your power.',
        flaw: 'You do not treat feeling as something to discuss. “That is emotion, the fact is this” ends the conversation — and eventually nobody tells you anything.',
        partners: ['INFP', 'ISFP'],
        partnerNote: 'The people who quietly show you the grain you skip. With them your standard softens.',
        avoid: 'People who blur commitments, and people who bend rules with feeling.',
        openLine: '“With you, it is not the work that settles — it is me.”',
        work: 'You turn goals into plans and plans into action. When a meeting scatters you make the conclusion and assign the owner, so the organisation you are in picks up speed.',
        jobs: ['Operations leadership', 'Sales management', 'Public administration', 'Logistics & production'],
        leap: 'The leap comes from letting go of “I am right” once. Hear the objection to the end and do it their way once. Your credibility doubles.'
      }
    },

    ESFJ: {
      emoji: '🫖',
      ko: {
        nick: '분위기의 온도조절기', tag: '모두가 편한 자리를 만든다',
        outer: '밝고 챙기는 사람. 누가 음료가 비었는지, 누가 말을 못 하고 있는지 먼저 봐요. 그래서 모임에서 당신은 조용한 진행자예요. 티 내지 않지만 그 자리는 당신이 만든 거예요.',
        inner: '속에서는 관계의 온도가 늘 보여요. 저 사람은 오늘 기분이 좋고, 이 사람은 뭔가 서운해 보이고. 그런데 그 감각이 너무 예민해서, 남의 기분을 내 책임처럼 느낄 때가 많아요.',
        strengths: ['사람을 편하게 만드는 분위기 감각', '관계를 오래 유지하는 성실함', '현실적인 도움을 바로 주는 실행력', '분위기를 읽고 먼저 나서는 용기'],
        alone: '혼자 있으면 누구에게 연락해야 할지 생각나요. 당신의 외로움은 관계가 끊길까 봐 오는 경우가 많아요.',
        trigger: '무시하는 말투, 내가 만든 자리를 아무도 기억하지 않을 때, 사람들 사이에서 소외되는 모습을 볼 때.',
        recover: '좋아하는 사람과 아주 평범한 대화를 나누세요. 당신은 관계에서 충전되는 사람이에요. 다만 그 대화에서 남을 챙기지 않아도 되는 시간이어야 해요.',
        charm: '당신과 함께 있으면 사람은 "여기 있어도 되는구나" 하는 감각을 받아요. 그 소속감이 사람을 끌어당겨요.',
        flaw: '약점은 모두에게 좋은 사람이 되려다 자기 편이 없어지는 것. 그리고 남의 평가에 생각보다 많이 흔들려요.',
        partners: ['INTP', 'ISTP'],
        partnerNote: '당신의 온기를 받아 주면서, 남의 시선에서 당신을 잠깐 빼 주는 사람들.',
        avoid: '사람을 편 가르는 사람, 고마움을 말하지 않는 사람.',
        openLine: '"네가 만들어 준 자리에서 나는 늘 편했어. 그거 알아?"',
        work: '일에서는 사람과 일정을 함께 챙기는 자리에 강해요. 팀의 분위기를 좋게 유지하면서 실제 결과까지 만드는 사람은 드물어요.',
        jobs: ['고객 성공 · CS', '이벤트 · 커뮤니티 기획', 'HR · 총무', '유치 · 교육'],
        leap: '도약은 "모두가 좋아할 필요는 없다"를 받아들이는 데서 와요. 한 사람이 싫어해도 계속 가는 연습이 당신을 단단하게 해요.'
      },
      en: {
        nick: 'The Thermostat', tag: 'makes the room comfortable for everyone',
        outer: 'Bright and attentive. You notice whose glass is empty and who has not spoken, which makes you the quiet host of every gathering. You never say so, but the room is yours.',
        inner: 'You always see the temperature between people — this one is in a good mood, that one looks a little hurt. The sense is so fine that you often feel other people’s moods as your responsibility.',
        strengths: ['A feel for making people comfortable', 'Keeping relationships alive over years', 'Concrete help, given immediately', 'The nerve to read a room and step in'],
        alone: 'Alone, you remember who you should message. Your loneliness often comes from fearing a connection is fading.',
        trigger: 'A dismissive tone, a room you built that nobody remembers, watching someone left out.',
        recover: 'Have an ordinary conversation with someone you like. You recharge through connection — as long as nobody needs looking after in it.',
        charm: 'Around you people feel “I am allowed to be here.” That sense of belonging is what draws them in.',
        flaw: 'Trying to be good to everyone, you end up with no side of your own — and other people’s opinion of you moves you more than you admit.',
        partners: ['INTP', 'ISTP'],
        partnerNote: 'The people who accept your warmth and take you out of other people’s eyes for a while.',
        avoid: 'People who sort others into camps, and people who never say thank you.',
        openLine: '“I was always comfortable in the space you made. Did you know that?”',
        work: 'You are strong where people and schedules are handled together. Keeping a team’s mood good while still producing results is rare.',
        jobs: ['Customer success', 'Events & community planning', 'HR & general affairs', 'Early years education'],
        leap: 'The leap is accepting that not everyone has to like you. Continuing while one person disapproves is what makes you solid.'
      }
    },

    ISTP: {
      emoji: '🔧',
      ko: {
        nick: '손끝의 해결사', tag: '말보다 손이 빠르다',
        outer: '말수 적고 쿨한 사람. 긴 설명보다 그냥 해결해 버려요. 그래서 사람들은 당신에게 문제만 던지고 결과를 받아 가요. 당신은 그게 편하고, 사실 조금 서운하기도 해요.',
        inner: '속에서는 원리가 계속 돌아가요. 저건 왜 저렇게 되는 거지, 이걸 바꾸면 어떻게 되지. 말로 설명하기보다 직접 만져 봐야 직성이 풀려서, 가끔 위험한 시도도 해요.',
        strengths: ['문제를 손으로 해결하는 실전 능력', '위기에서 감정 없이 판단하는 침착함', '도구와 몸을 다루는 감각', '필요한 것만 남기는 간결함'],
        alone: '혼자 무언가를 만지작거릴 때 제일 편해요. 그 시간이 당신에게는 대화 열 시간보다 좋아요.',
        trigger: '길게 설명만 하는 회의, 감정으로 상황을 흔드는 사람, 손대지 못하게 하는 규칙.',
        recover: '손으로 하는 일을 하세요. 자전거 정비, 게임, 요리. 결과가 눈에 보이는 일이 당신을 정리해 줘요.',
        charm: '당신의 매력은 말없이 해결해 버리는 능력이에요. 상대가 곤란할 때 설명 없이 고쳐 주고, 그 다음 아무 말도 안 하죠. 그 무심함이 오히려 멋있어요.',
        flaw: '약점은 감정을 말로 안 한다는 것. 상대는 당신이 괜찮은지 알 수 없어서, 결국 혼자 추측하다 지쳐요.',
        partners: ['ENFJ', 'ESFJ'],
        partnerNote: '당신이 말하지 않은 마음을 읽어 주는 사람들. 이들은 당신의 무심함을 차갑게 받아들이지 않아요.',
        avoid: '감정을 계속 캐묻는 사람, 과정을 통제하려는 사람.',
        openLine: '"너는 말은 안 하는데, 필요한 건 다 해 주더라."',
        work: '일에서는 문제가 생겼을 때 가장 빨리 손을 대요. 이론보다 현장에서 강하고, 남들이 멈춰 있을 때 혼자 움직여요. 기술·제작·현장직에서 특히 빛나요.',
        jobs: ['엔지니어 · 정비', '개발자', '영상 · 음향 기술', '스포츠 · 현장 운영'],
        leap: '도약은 과정을 한 번 설명해 보는 데서 와요. 결과만 주는 사람에서, 결과와 이유를 함께 주는 사람이 되면 대우가 달라져요.'
      },
      en: {
        nick: 'The Fixer', tag: 'hands move before words',
        outer: 'Few words, cool surface. You fix it instead of explaining it, so people hand you the problem and collect the result. It suits you — and stings a little.',
        inner: 'Mechanisms keep turning inside. Why does that behave like that, what happens if I change this. You need to touch it rather than describe it, which occasionally means trying something risky.',
        strengths: ['Solving with your hands', 'Calm judgement in a crisis', 'A feel for tools and bodies', 'Keeping only what is needed'],
        alone: 'Tinkering with something alone is the most comfortable place. That hour beats ten hours of talking.',
        trigger: 'Meetings made of long explanations, people who shake a situation with feeling, rules that say do not touch.',
        recover: 'Do something with your hands — a bike, a game, cooking. Work with a visible result tidies you.',
        charm: 'You fix things without saying anything. When someone is stuck you repair it, then say nothing at all. That indifference is somehow attractive.',
        flaw: 'You never put feelings into words, so a partner cannot tell if you are okay and eventually tires of guessing.',
        partners: ['ENFJ', 'ESFJ'],
        partnerNote: 'The people who read what you did not say — they do not take your coolness as coldness.',
        avoid: 'People who keep digging for feelings, and people who want to control the process.',
        openLine: '“You never say much, but you always do what is needed.”',
        work: 'When something breaks you are the first to put a hand on it. Stronger in the field than in theory, you move while others are still stopped. Technical, making and on-site work suit you.',
        jobs: ['Engineer / mechanic', 'Developer', 'Video & audio technician', 'Sports & on-site operations'],
        leap: 'The leap is explaining the process once. Move from giving only the result to giving the result and the reason, and how you are treated changes.'
      }
    },

    ISFP: {
      emoji: '🎐',
      ko: {
        nick: '감각의 산책자', tag: '조용히 아름다운 걸 고른다',
        outer: '부드럽고 조용한 사람. 싫은 것도 웃으면서 넘기고, 좋은 것도 크게 말하지 않아요. 그런데 당신이 고른 물건, 입은 옷, 고른 노래에는 늘 일관된 취향이 있어요.',
        inner: '속에서는 감각이 먼저 반응해요. 이 색이 맞다, 이건 아니다. 그 판단이 정확한데 말로 설명하기 어려워서, 대개 "그냥"이라고 말하고 넘기죠. 그 "그냥"이 사실 당신의 전문성이에요.',
        strengths: ['색 · 소리 · 분위기를 정확히 고르는 감각', '사람을 있는 그대로 받아들이는 관용', '지금 이 순간을 즐기는 능력', '화려하지 않지만 오래 남는 결과물'],
        alone: '혼자 있는 시간이 창작의 재료가 돼요. 좋아하는 것을 보고 듣는 것만으로도 충분히 바빠요.',
        trigger: '취향을 평가받을 때, 빨리 결정하라고 재촉할 때, 감정을 논리로 설명하라고 할 때.',
        recover: '좋아하는 감각에 오래 머무르세요. 좋아하는 앨범을 처음부터 끝까지 듣기, 좋아하는 길 걷기.',
        charm: '당신이 누군가를 좋아할 때, 그 사람만을 위한 것을 조용히 만들어요. 티 내지 않지만 그 사람은 알아요. 그 조용한 헌신이 오래 남아요.',
        flaw: '약점은 갈등을 피하려고 속마음을 미루는 것. 그리고 그렇게 미룬 것이 쌓이면 갑자기 자리를 떠나요.',
        partners: ['ENFJ', 'ESTJ'],
        partnerNote: '당신을 끌어당겨 주는 사람들. 다만 너무 세게 당기면 당신은 흘러가 버려요.',
        avoid: '취향을 무시하는 사람, 자기 기준을 강요하는 사람.',
        openLine: '"너는 말 안 해도 네가 뭘 좋아하는지 알겠어. 그게 좋아."',
        work: '일에서는 결과의 질감으로 승부해요. 화려한 말보다 손에 잡히는 감각이 좋은 결과물을 만들어요. 디자인, 영상, 음악, 요리, 공예처럼 감각이 성과가 되는 자리에서 강해요.',
        jobs: ['그래픽 · 영상 디자인', '음악 · 사운드', '요리 · 푸드 스타일리스트', '반려 · 자연 관련 직업'],
        leap: '도약은 자기 취향에 이름을 붙이는 데서 와요. "그냥"이라고 넘기지 말고, 이 스타일이 무엇인지 한 문장으로 적어 보세요. 그 문장이 당신의 작업을 소개해 줘요.'
      },
      en: {
        nick: 'The Drifter of Sensations', tag: 'quietly picks the beautiful thing',
        outer: 'Soft and quiet. You laugh off what you dislike and do not announce what you love — yet the objects you choose, the clothes you wear, the songs you pick all share one consistent taste.',
        inner: 'Sensation answers first. This colour is right, this one is not. The judgement is exact but hard to put into words, so you say “just because.” That “just because” is your expertise.',
        strengths: ['Choosing colour, sound and atmosphere precisely', 'Accepting people as they are', 'Being able to enjoy this moment', 'Work that is not loud but lasts'],
        alone: 'Time alone is your raw material. Seeing and hearing what you love keeps you busy enough.',
        trigger: 'Having your taste graded, being rushed to decide, being asked to explain a feeling with logic.',
        recover: 'Stay inside a sensation you love — an album start to finish, a walk along a favourite route.',
        charm: 'When you love someone you quietly make something only for them. You never mention it; they know. That quiet devotion stays.',
        flaw: 'To avoid conflict you postpone your own truth — and once enough has piled up, you simply leave.',
        partners: ['ENFJ', 'ESTJ'],
        partnerNote: 'The people who pull you forward — though pull too hard and you drift away.',
        avoid: 'People who dismiss your taste, and people who impose their standard.',
        openLine: '“You never say it, but I can tell what you love. I like that.”',
        work: 'You compete on the texture of the result. A good feel in the hand beats a clever sentence. Design, video, music, cooking, craft — where sensation becomes the product.',
        jobs: ['Graphic & video design', 'Music & sound', 'Food styling & cooking', 'Animals & nature'],
        leap: 'The leap comes from naming your taste. Instead of “just because,” write one sentence about what this style is. That sentence introduces your work for you.'
      }
    },

    ESTP: {
      emoji: '🎯',
      ko: {
        nick: '현장의 승부사', tag: '판이 벌어지면 강해진다',
        outer: '빠르고 대담한 사람. 계획서를 오래 보기보다 일단 부딪혀 보고, 그 자리에서 답을 찾아요. 그래서 사람들은 당신을 믿으면서도 조금 걱정해요.',
        inner: '속에서는 지금 이 순간이 제일 중요해요. 3년 뒤 계획보다 오늘의 판이 재밌어야 하고, 재미가 없으면 몸이 먼저 반응해요. 그 즉각성이 당신의 생존 능력이에요.',
        strengths: ['상황을 빠르게 읽고 움직이는 순발력', '위험을 두려워하지 않는 담대함', '사람을 설득하고 끌어들이는 현장 감각', '실패해도 금방 털고 일어나는 회복력'],
        alone: '혼자 있으면 심심해요. 당신은 사람과 상황 속에서 충전되는 사람이라, 고요함이 오히려 피로예요.',
        trigger: '결론 없이 길어지는 회의, 준비만 하고 시작하지 않는 사람, 몸을 묶는 규칙.',
        recover: '몸을 움직이세요. 운동, 드라이브, 새로운 장소. 당신의 스트레스는 대개 몸에 쌓여 있어요.',
        charm: '당신의 매력은 재미있고 대담하다는 것. 같이 있으면 심심할 틈이 없고, 위기에서도 웃을 수 있게 해 줘요. 그게 사람을 끌어당겨요.',
        flaw: '약점은 결과를 먼저 보고 과정을 건너뛴다는 것. 그리고 그 과정에서 다친 사람의 표정을 늦게 봐요.',
        partners: ['ISFJ', 'INFJ'],
        partnerNote: '당신의 속도를 조금 늦춰 주는 사람들. 이들이 있으면 당신은 더 멀리 갈 수 있어요.',
        avoid: '결정을 계속 미루는 사람, 재미를 죄악처럼 말하는 사람.',
        openLine: '"너랑 있으면 뭐든 벌어질 것 같아서 좋아."',
        work: '일에서는 현장에서 강해요. 영업, 협상, 위기 대응처럼 그 자리에서 판단해야 하는 일에서 빛나요. 계획이 완벽하지 않아도 밀고 나가는 힘이 결과를 만들어요.',
        jobs: ['영업 · 세일즈', '스포츠 · 트레이닝', '이벤트 · 현장 진행', '창업 · 사업 개발'],
        leap: '도약은 “한 번 더 확인하기”를 붙이는 데서 와요. 결정 전에 한 사람에게 물어보세요. 그 한 번이 큰 손실을 막고, 당신의 추진력은 그대로 남아요.'
      },
      en: {
        nick: 'The Field Player', tag: 'stronger once the game is live',
        outer: 'Fast and bold. Rather than study a plan you go and hit it, finding the answer on the spot. People trust you and worry about you at the same time.',
        inner: 'This moment matters most. A three-year plan is less interesting than today’s game, and when it stops being fun your body reacts first. That immediacy is your survival skill.',
        strengths: ['Reading a situation and moving', 'Boldness in front of risk', 'Persuading and pulling people in person', 'Shaking off failure fast'],
        alone: 'Alone, you get bored. You charge from people and situations, so quiet is actually tiring.',
        trigger: 'Meetings that never conclude, people who prepare and never start, rules that tie your hands.',
        recover: 'Move your body — exercise, a drive, somewhere new. Your stress lives in your body.',
        charm: 'You are fun and fearless. There is no boring gap when you are around, and you make a crisis laughable. That is magnetic.',
        flaw: 'You watch the outcome and skip the process — and notice the face of the person hurt in it too late.',
        partners: ['ISFJ', 'INFJ'],
        partnerNote: 'The people who slow you down slightly — with them you get further.',
        avoid: 'People who postpone every decision, and people who talk about fun as a sin.',
        openLine: '“Something always happens when you are around. I like that.”',
        work: 'You are strong on the ground — sales, negotiation, crisis response, where a call has to be made on the spot. Boldness covers for an imperfect plan.',
        jobs: ['Sales', 'Sports & training', 'Events & live production', 'Founding & business development'],
        leap: 'The leap is adding one more check. Ask one person before you decide. That once prevents a big loss and leaves your drive intact.'
      }
    },

    ESFP: {
      emoji: '🎤',
      ko: {
        nick: '무대의 불씨', tag: '있는 곳이 곧 무대다',
        outer: '밝고 사람을 좋아하는 사람. 어색한 자리도 금방 데워지고, 당신이 웃으면 주변도 같이 웃어요. 그래서 사람들은 당신을 "분위기 좋은 사람"으로 기억해요.',
        inner: '속에서는 지금의 즐거움이 소중해요. 미래를 걱정하는 시간보다 지금 이 사람들과 이 순간에 집중하는 편이에요. 그런데 그 밝음 뒤에 혼자 정리해야 할 마음이 쌓여 있어요.',
        strengths: ['사람을 편하게 만드는 밝음', '지금 이 순간을 즐기는 능력', '눈치 빠른 상황 감각', '감정을 숨기지 않는 솔직함'],
        alone: '혼자 있으면 갑자기 가라앉을 때가 있어요. 사람들 앞에서의 밝음과 혼자일 때의 마음이 꽤 달라요.',
        trigger: '분위기를 무겁게 만드는 사람, 계속 평가하는 자리, 즐거움을 사치라고 말하는 사람.',
        recover: '좋아하는 사람과 가벼운 약속 하나. 당신은 즐거움으로 회복되는 사람이에요. 거기서 남을 웃기지 않아도 되는 자리면 더 좋아요.',
        charm: '당신과 있으면 사람은 자기 자신을 조금 더 좋아하게 돼요. 그게 당신이 주는 가장 큰 선물이에요.',
        flaw: '약점은 힘든 얘기를 나중으로 미룬다는 것. 그리고 미룬 감정은 사라지지 않고 어느 날 한꺼번에 와요.',
        partners: ['ISTJ', 'INTJ'],
        partnerNote: '당신의 불꽃을 받쳐 주는 사람들. 이들이 있으면 즐거움이 오래가요.',
        avoid: '분위기를 통제하려는 사람, 웃음을 가볍게 보는 사람.',
        openLine: '"너는 네가 생각하는 것보다 사람을 살리는 재주가 있어."',
        work: '일에서는 사람을 움직이는 자리에서 강해요. 무대, 영업, 서비스, 콘텐츠처럼 표정과 목소리가 성과가 되는 일이 잘 맞아요.',
        jobs: ['방송 · 공연', '서비스 · 접객', '콘텐츠 크리에이터', '이벤트 진행 · MC'],
        leap: '도약은 즐거운 일에 구조를 붙이는 데서 와요. 지금 잘되는 일 하나에 반복할 수 있는 형식을 만들어 보세요. 그 형식이 당신을 오래 가게 해요.'
      },
      en: {
        nick: 'The Live Wire', tag: 'wherever you are becomes the stage',
        outer: 'Bright and fond of people. Awkward rooms warm up fast, and when you laugh everyone does. People remember you as “the one with the good energy.”',
        inner: 'What matters is right now. You would rather be here with these people than worry about next year — though behind the brightness, feelings you have to sort out alone are stacking up.',
        strengths: ['Brightness that puts people at ease', 'Enjoying the present moment', 'Fast social radar', 'Honesty that does not hide feeling'],
        alone: 'Alone, you can sink suddenly. The bright version in front of people and the one alone are quite different.',
        trigger: 'People who make a room heavy, places that keep grading you, anyone who calls pleasure a luxury.',
        recover: 'One light plan with someone you like. You recover through enjoyment — especially where you do not have to entertain anyone.',
        charm: 'Around you people like themselves a little more. That is the biggest gift you give.',
        flaw: 'You postpone the hard conversation. Postponed feelings do not disappear; they arrive all at once.',
        partners: ['ISTJ', 'INTJ'],
        partnerNote: 'The people who hold your fire safely — with them the fun lasts.',
        avoid: 'People who want to control the mood, and people who treat laughter as trivial.',
        openLine: '“You have more of a gift for bringing people alive than you realise.”',
        work: 'You are strong where people move. Stage, sales, service, content — work where your face and voice are the product.',
        jobs: ['Broadcast & performance', 'Hospitality & service', 'Content creator', 'Event hosting & MC'],
        leap: 'The leap comes from putting structure on what you enjoy. Give the thing that works a repeatable format, and it will carry you for years.'
      }
    }
  },

  /* ---------- 24문항 (축마다 4문항, 선택지는 왼쪽 극 → 오른쪽 극) ---------- */
  questions: [
    {
      axis: 'EI',
      ko: { q: '금요일 저녁, 약속이 갑자기 취소됐다. 가장 먼저 드는 생각은?',
        o: ['잘됐다 싶어 누구라도 불러서 나간다', '집에 있긴 한데 누가 부르면 나갈 것 같다', '일단 쉬다가 연락이 오면 생각한다', '완전히 혼자인 저녁이 반갑다'] },
      en: { q: 'Your Friday plan is cancelled at the last minute. Your first thought?',
        o: ['Perfect — I will call someone and go out', 'I am home, but I would go if someone asked', 'I will rest, and decide if a message comes', 'A whole evening alone sounds great'] }
    },
    {
      axis: 'SN',
      ko: { q: '처음 가는 동네에 도착했다. 제일 먼저 하는 일은?',
        o: ['큰길과 간판부터 눈에 담는다', '지도로 대략의 구조를 파악한다', '골목의 분위기와 사람들을 본다', '이 동네에 무슨 사연이 있을지 상상한다'] },
      en: { q: 'You arrive in a neighbourhood you have never seen. First move?',
        o: ['Take in the main road and the signs', 'Get the rough layout from a map', 'Watch the mood and the people in the side streets', 'Imagine what stories this place has'] }
    },
    {
      axis: 'TF',
      ko: { q: '내 의견이 반대에 부딪혔을 때?',
        o: ['근거를 더 정확히 준비해 다시 말한다', '상대 논리의 허점을 짚는다', '어디서 엇갈렸는지 확인한다', '관계가 상하지 않게 표현을 고른다'] },
      en: { q: 'When your opinion meets opposition?',
        o: ['I prepare better evidence and say it again', 'I point out the hole in their logic', 'I check where exactly we diverged', 'I choose words that will not bruise the relationship'] }
    },
    {
      axis: 'JP',
      ko: { q: '여행을 떠나기 전?',
        o: ['동선과 예약을 미리 다 짜 둔다', '큰 틀만 정하고 세부는 열어 둔다', '숙소만 정하고 나머지는 간다', '당일 아침에 마음 내키는 대로 정한다'] },
      en: { q: 'Before a trip?',
        o: ['The route and bookings are already set', 'A rough shape, details left open', 'Book the bed, figure the rest out there', 'Decide on the morning of, as the mood takes me'] }
    },
    {
      axis: 'AO',
      ko: { q: '단체방에 잘못 보낸 메시지를 발견했다. 1분 뒤?',
        o: ['지우고 "잘못 보냈어요" 한 줄 남기고 넘어간다', '지우고 조용히 잊는다', '민망하지만 웃으면서 넘긴다', '그 장면을 몇 시간씩 되감는다'] },
      en: { q: 'You spot a message you sent to the wrong group chat. A minute later?',
        o: ['Delete it, leave one line saying “wrong chat”, move on', 'Delete it and quietly forget it', 'It is embarrassing but I laugh it off', 'I replay that moment for hours'] }
    },
    {
      axis: 'HC',
      ko: { q: '힘들어하는 사람에게 조언할 때?',
        o: ['먼저 마음을 어루만지고 이야기한다', '내 경험을 편하게 꺼낸다', '차분히 상황을 정리해 준다', '핵심만 정확히 짚어 준다'] },
      en: { q: 'When someone struggling asks your advice?',
        o: ['I soothe the feeling before the problem', 'I share my own experience, casually', 'I calmly lay out the situation', 'I state the essential point, precisely'] }
    },

    {
      axis: 'EI',
      ko: { q: '모르는 사람이 많은 자리에 도착했을 때 나는?',
        o: ['먼저 인사를 건네고 대화를 연다', '누가 말을 걸면 자연스럽게 이어진다', '아는 사람 옆에 조용히 자리를 잡는다', '구석에서 분위기를 보며 때를 기다린다'] },
      en: { q: 'You arrive somewhere full of strangers. You…',
        o: ['Say hello first and open the conversation', 'Carry it naturally once someone speaks to me', 'Quietly take a seat next to someone I know', 'Watch from the side and wait for the right moment'] }
    },
    {
      axis: 'SN',
      ko: { q: '새 전자기기를 샀을 때?',
        o: ['설명서를 순서대로 읽고 설정한다', '필요한 기능만 찾아 쓴다', '일단 켜서 이것저것 눌러 본다', '이걸로 뭘 할 수 있을지 상상부터 한다'] },
      en: { q: 'You buy a new device. You…',
        o: ['Read the manual in order and set it up', 'Find only the features I need', 'Turn it on and press everything', 'Start by imagining what I could do with it'] }
    },
    {
      axis: 'TF',
      ko: { q: '중요한 결정을 앞두고?',
        o: ['장단점을 표로 정리해 비교한다', '효율과 손익을 계산한다', '그 선택이 사람들에게 어떻게 닿을지 생각한다', '마음이 어디로 가는지 먼저 본다'] },
      en: { q: 'Before a big decision?',
        o: ['I compare pros and cons in a table', 'I calculate cost, benefit and efficiency', 'I think about how the choice will land on people', 'I look first at where my heart is going'] }
    },
    {
      axis: 'JP',
      ko: { q: '마감이 일주일 남았을 때?',
        o: ['이미 절반 이상 끝내 둔다', '하루 분량씩 나눠서 한다', '사흘 전부터 몰아서 한다', '마지막 날 밤이 제일 잘 나온다'] },
      en: { q: 'With a week to the deadline?',
        o: ['Half of it is already done', 'I do a slice each day', 'I push hard from three days out', 'The last night is when I do my best work'] }
    },
    {
      axis: 'AO',
      ko: { q: '칭찬을 들었을 때?',
        o: ['고맙다고 받는다', '그럴 수도 있지 하고 넘긴다', '조금 쑥스럽지만 기분 좋다', '빈말인지 아닌지 한참 생각한다'] },
      en: { q: 'When someone praises you?',
        o: ['I say thank you and take it', 'It might be true — I let it pass', 'A bit shy, but it feels good', 'I spend a while working out whether they meant it'] }
    },
    {
      axis: 'HC',
      ko: { q: '길에서 모르는 사람이 도움을 청하면?',
        o: ['그 사람 사정이 궁금해질 만큼 챙긴다', '기꺼이 시간을 내서 돕는다', '빠르게 해결해 주고 인사한다', '정확히 설명하고 자리를 뜬다'] },
      en: { q: 'A stranger on the street asks for help. You…',
        o: ['Look after them enough to wonder how their day went', 'Gladly give my time', 'Fix it quickly and say goodbye', 'Explain precisely and move on'] }
    },

    {
      axis: 'EI',
      ko: { q: '사람을 많이 만난 날, 집에 돌아와서?',
        o: ['에너지가 남아서 더 얘기하고 싶다', '좋았던 대화를 한두 번 다시 떠올린다', '씻고 눕고 싶지만 답장은 한다', '말을 하나도 하기 싫어 폰을 뒤집어 둔다'] },
      en: { q: 'Home after a day full of people?',
        o: ['I still have energy and want to talk more', 'I replay one or two good exchanges', 'I want to shower and lie down, but I answer messages', 'I do not want to speak at all — phone face down'] }
    },
    {
      axis: 'SN',
      ko: { q: '대화 중 내가 자주 하는 쪽은?',
        o: ['구체적인 사실과 경험을 말한다', '비슷한 사례를 들어 설명한다', '떠오른 생각을 이어 붙인다', '비유와 가능성으로 이야기한다'] },
      en: { q: 'In conversation I usually…',
        o: ['Talk in concrete facts and experience', 'Explain through similar cases', 'Chain whatever thought just arrived', 'Talk in metaphor and possibility'] }
    },
    {
      axis: 'TF',
      ko: { q: '누군가 실수했을 때 나의 첫 반응은?',
        o: ['원인과 규칙을 먼저 확인한다', '다시 안 생기게 하는 방법을 말한다', '얼마나 당황했을지 먼저 살핀다', '괜찮다고 말해 주고 싶다'] },
      en: { q: 'Someone makes a mistake. Your first reaction?',
        o: ['Check the cause and the rule', 'Say how to stop it happening again', 'Check how flustered they must be', 'I want to tell them it is okay'] }
    },
    {
      axis: 'JP',
      ko: { q: '계획이 갑자기 바뀌면?',
        o: ['일정이 무너진 게 불편하다', '바뀐 것부터 다시 정리한다', '당황스럽지만 곧 적응한다', '오히려 새로워서 재밌다'] },
      en: { q: 'When a plan changes suddenly?',
        o: ['The broken schedule bothers me', 'I re-sort from what changed', 'I am thrown, then adjust quickly', 'It is new, so it is fun'] }
    },
    {
      axis: 'AO',
      ko: { q: '중요한 자리 전날 밤?',
        o: ['충분히 준비했다, 푹 잔다', '최종 점검만 하고 잔다', '자다 깨서 한 번 더 확인한다', '최악의 경우를 여러 번 상상한다'] },
      en: { q: 'The night before something important?',
        o: ['I have prepared enough — I sleep well', 'One final check, then sleep', 'I wake up and check again', 'I run the worst case several times'] }
    },
    {
      axis: 'HC',
      ko: { q: '내가 상처받았을 때?',
        o: ['티가 나고 오래 간다', '티는 나지만 말은 안 한다', '겉으로는 괜찮고 혼자 정리한다', '별일 아닌 것처럼 금방 넘어간다'] },
      en: { q: 'When you are hurt?',
        o: ['It shows, and it lasts', 'It shows, but I do not say it', 'I look fine and sort it out alone', 'I move on as if nothing happened'] }
    },

    {
      axis: 'EI',
      ko: { q: '복잡한 생각을 정리할 때 가장 잘 되는 방법은?',
        o: ['누군가에게 말하면서 정리한다', '말로 하다가 글로 옮기면 정리된다', '혼자 중얼거리며 정리한다', '조용한 곳에서 글로만 써야 정리된다'] },
      en: { q: 'What sorts a complicated thought best?',
        o: ['Saying it out loud to someone', 'Talking first, then writing it down', 'Muttering it to myself', 'Writing alone, in a quiet place'] }
    },
    {
      axis: 'SN',
      ko: { q: '영화를 보고 나서 오래 남는 것은?',
        o: ['장면과 연출, 현실성', '배우의 연기와 대사', '인물의 감정선', '결말 너머의 의미와 해석'] },
      en: { q: 'What stays with you after a film?',
        o: ['The shots, the craft, whether it was believable', 'The acting and the dialogue', 'The emotional line of the characters', 'What it meant beyond the ending'] }
    },
    {
      axis: 'TF',
      ko: { q: '내가 옳다고 확신할 때?',
        o: ['틀렸다면 바로 말한다', '정확한 근거로 설득한다', '상대가 받아들일 수 있는 방식으로 전한다', '말하지 않고 기다리는 편이다'] },
      en: { q: 'When you are certain you are right?',
        o: ['I say so, plainly', 'I persuade with exact evidence', 'I deliver it in a way they can accept', 'I tend to say nothing and wait'] }
    },
    {
      axis: 'JP',
      ko: { q: '파일과 물건 정리 상태는?',
        o: ['이름 규칙대로 정리되어 있다', '대분류 폴더까지만 정리한다', '어질러져 있지만 위치는 안다', '필요할 때 찾으면 된다'] },
      en: { q: 'Your files and belongings?',
        o: ['Named and sorted by a rule', 'Sorted into top-level folders at least', 'Messy, but I know where everything is', 'I find it when I need it'] }
    },
    {
      axis: 'AO',
      ko: { q: '결정을 내린 뒤?',
        o: ['바로 다음 일로 넘어간다', '한 번 점검하고 잊는다', '다른 선택지가 떠오르면 흔들린다', '한참 동안 그 결정을 되짚는다'] },
      en: { q: 'After you decide?',
        o: ['I move straight to the next thing', 'One review, then it is gone', 'A different option surfaces and I wobble', 'I go back over the decision for a long while'] }
    },
    {
      axis: 'HC',
      ko: { q: '부탁을 거절해야 할 때?',
        o: ['미안해서 몇 번이고 사정을 설명한다', '대안을 같이 찾아 준다', '짧게 미안하다고 말한다', '분명하게 선을 긋는다'] },
      en: { q: 'When you have to refuse a request?',
        o: ['I explain my situation again and again out of guilt', 'I help find an alternative', 'I say sorry, briefly', 'I draw the line clearly'] }
    }
  ]
};
