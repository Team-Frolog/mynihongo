export interface Conversation {
  id: string;
  theme: string;
  situationImage: string;
  question: {
    japanese: string;
    korean: string;
  };
  userChoice: {
    responseId: string;
    japanese: string;
    korean: string;
  }[];
  response: {
    responseId: string;
    responseImage: string;
    japanese: string;
    korean: string;
  }[];
}

export const conversationData: Conversation[] = [
  {
    id: 'cafe_situation',
    theme: '카페',
    situationImage: 'assets/images/public/cafe/cafe_situation.webp',
    question: {
      japanese: 'いらっしゃいませ。ご注文はお決まりですか？',
      korean: '어서 오세요. 주문은 정하셨나요?',
    },
    userChoice: [
      {
        responseId: 'cafe_situation_response_1',
        japanese: 'コーヒーとケーキをください。',
        korean: '커피와 케이크 주세요.',
      },
      {
        responseId: 'cafe_situation_response_2',
        japanese: 'おすすめは何ですか？',
        korean: '추천 메뉴는 뭐예요?',
      },
    ],
    response: [
      {
        responseId: 'cafe_situation_response_1',
        responseImage:
          'assets/images/public/cafe/cafe_situation_response_1.webp',
        japanese: 'かしこまりました。お席でお待ちください。',
        korean: '알겠습니다. 자리에서 기다려 주세요.',
      },
      {
        responseId: 'cafe_situation_response_2',
        responseImage:
          'assets/images/public/cafe/cafe_situation_response_2.webp',
        japanese: 'おすすめはチョコレートケーキです。',
        korean: '추천은 초콜릿 케이크입니다.',
      },
    ],
  },
  {
    id: 'travel1_situation',
    theme: '여행1',
    situationImage: 'assets/images/public/travel/travel1_situation.webp',
    question: {
      japanese: '予約はされていますか？',
      korean: '예약하셨나요?',
    },
    userChoice: [
      {
        responseId: 'travel1_situation_response_1',
        japanese: 'はい、旅行券を予約しています。',
        korean: '네, 여행권을 예약했습니다.',
      },
      {
        responseId: 'travel1_situation_response_2',
        japanese: 'まだです。今から宿を探します。',
        korean: '아직이요. 지금부터 숙소를 찾아볼 거예요.',
      },
    ],
    response: [
      {
        responseId: 'travel1_situation_response_1',
        responseImage:
          'assets/images/public/travel/travel1_situation_response_1.webp',
        japanese: '確認できました。観光を楽しんでください。',
        korean: '확인되었습니다. 관광을 즐기세요.',
      },
      {
        responseId: 'travel1_situation_response_2',
        responseImage:
          'assets/images/public/travel/travel1_situation_response_2.webp',
        japanese: 'それでは地図をどうぞ。目的地まで気をつけて。',
        korean: '그럼 지도를 드릴게요. 목적지까지 조심히 가세요.',
      },
    ],
  },
  // 여행2
  {
    id: 'travel2_situation',
    theme: '여행2',
    situationImage: 'assets/images/public/travel/travel2_situation.webp',
    question: {
      japanese: '来週出国します。荷造りは終わりましたか？',
      korean: '다음 주 출국입니다. 짐 싸기는 끝났나요?',
    },
    userChoice: [
      {
        responseId: 'travel2_situation_response_1',
        japanese: 'はい、荷物は全部スーツケースに入れました。',
        korean: '네, 짐은 전부 캐리어에 넣었습니다.',
      },
      {
        responseId: 'travel2_situation_response_2',
        japanese: 'いいえ、まだ両替もしていません。',
        korean: '아뇨, 아직 환전도 못 했어요.',
      },
    ],
    response: [
      {
        responseId: 'travel2_situation_response_1',
        responseImage:
          'assets/images/public/travel/travel2_situation_response_1.webp',
        japanese: 'すばらしいです。では航空券を忘れずに。',
        korean: '훌륭합니다. 그럼 항공권은 잊지 마세요.',
      },
      {
        responseId: 'travel2_situation_response_2',
        responseImage:
          'assets/images/public/travel/travel2_situation_response_2.webp',
        japanese: 'それなら、出発前に空港で両替しましょう。',
        korean: '그렇다면 출발 전에 공항에서 환전하세요.',
      },
    ],
  },
  // 연애
  {
    id: 'love_situation',
    theme: '연애',
    situationImage: 'assets/images/public/love/love_situation.webp',
    question: {
      japanese: '明日、告白するつもりです。緊張しています。',
      korean: '내일 고백할 예정이에요. 긴장돼요.',
    },
    userChoice: [
      {
        responseId: 'love_situation_response_1',
        japanese: '相手に好意が伝わるといいですね。',
        korean: '상대에게 호감이 잘 전해지면 좋겠네요.',
      },
      {
        responseId: 'love_situation_response_2',
        japanese: '失恋しても、愛情は本物だったってことですね。',
        korean: '차이더라도 사랑은 진심이었다는 거죠.',
      },
    ],
    response: [
      {
        responseId: 'love_situation_response_1',
        responseImage:
          'assets/images/public/love/love_situation_response_1.webp',
        japanese: 'ありがとうございます！自信が出ました。',
        korean: '감사합니다! 자신감이 생겼어요.',
      },
      {
        responseId: 'love_situation_response_2',
        responseImage:
          'assets/images/public/love/love_situation_response_2.webp',
        japanese: 'そうですね。後悔しないように伝えます。',
        korean: '그러네요. 후회하지 않게 전할게요.',
      },
    ],
  },
  // 음식1
  {
    id: 'food1_situation',
    theme: '음식1',
    situationImage: 'assets/images/public/food/food1_situation.webp',
    question: {
      japanese: '今日は焼き魚と鳥の唐揚げ、どちらを食べたいですか？',
      korean: '오늘은 생선구이랑 닭튀김 중 어떤 걸 먹고 싶어요?',
    },
    userChoice: [
      {
        responseId: 'food1_situation_response_1',
        japanese: '焼き魚はヘルシーで、野菜とも合いますね',
        korean: '생선구이는 건강에도 좋고, 야채랑도 잘 어울려요.',
      },
      {
        responseId: 'food1_situation_response_2',
        japanese: 'やっぱり、唐揚げのような肉料理が好きです。',
        korean: '역시 고기 요리인 닭튀김이 좋아요.',
      },
    ],
    response: [
      {
        responseId: 'food1_situation_response_1',
        responseImage:
          'assets/images/public/food/food1_situation_response_1.webp',
        japanese: 'じゃあ、魚にしましょう！飲み物はお茶でいいですか？',
        korean: '그럼 생선으로 할게요! 음료는 차로 괜찮아요?',
      },
      {
        responseId: 'food1_situation_response_2',
        responseImage:
          'assets/images/public/food/food1_situation_response_2.webp',
        japanese: '了解です！ご飯も多めにしましょうか？',
        korean: '알겠습니다! 밥도 많이 드릴까요?',
      },
    ],
  },
  // 음식2
  {
    id: 'food2_situation',
    theme: '음식2',
    situationImage: 'assets/images/public/food/food2_situation.webp',
    question: {
      japanese: '今日のお昼は、寿司とラーメン、どっちにする？',
      korean: '오늘 점심은 스시랑 라멘 중 뭐 먹을래?',
    },
    userChoice: [
      {
        responseId: 'food2_situation_response_1',
        japanese: '寿司にしよう。みそ汁も付いてくるし。',
        korean: '스시로 하자. 미소된장국도 같이 나오잖아.',
      },
      {
        responseId: 'food2_situation_response_2',
        japanese: 'ラーメンが食べたい。こってり系がいいな。',
        korean: '라멘 먹고 싶어. 진한 국물 있는 걸로.',
      },
    ],
    response: [
      {
        responseId: 'food2_situation_response_1',
        responseImage:
          'assets/images/public/food/food2_situation_response_1.webp',
        japanese: 'いいね！じゃあ、鰻の握りも頼もうか？',
        korean: '좋다! 그럼 장어초밥도 같이 시킬까?',
      },
      {
        responseId: 'food2_situation_response_2',
        responseImage:
          'assets/images/public/food/food2_situation_response_2.webp',
        japanese: 'じゃあ、チャーシュー入りのラーメンにしよう！',
        korean: '그럼 차슈 들어간 라멘으로 하자!',
      },
    ],
  },
  // 음식3
  {
    id: 'food3_situation',
    theme: '음식3',
    situationImage: 'assets/images/public/food/food3_situation.webp',
    question: {
      japanese: 'このケーキ、どう？',
      korean: '이 케이크 어때?',
    },
    userChoice: [
      {
        responseId: 'food3_situation_response_1',
        japanese: '甘いけど、美味しいね！',
        korean: '달콤한데, 맛있어!',
      },
      {
        responseId: 'food3_situation_response_2',
        japanese: 'ちょっと苦いし、不味いかな。',
        korean: '좀 쓴 것 같고, 맛이 없는 듯.',
      },
    ],
    response: [
      {
        responseId: 'food3_situation_response_1',
        responseImage:
          'assets/images/public/food/food3_situation_response_1.webp',
        japanese: 'だよね！香ばしいコーヒーとも合うし。',
        korean: '그치! 고소한 커피랑도 잘 어울려.',
      },
      {
        responseId: 'food3_situation_response_2',
        responseImage:
          'assets/images/public/food/food3_situation_response_2.webp',
        japanese: 'えっ？そんなに？私は美味しいと思ったよ！',
        korean: '엥? 진짜? 난 맛있다고 생각했는데!',
      },
    ],
  },
  // 사랑과 이별
  {
    id: 'lovebreak_situation',
    theme: '사랑과 이별',
    situationImage: 'assets/images/public/lovebreak/lovebreak_situation.webp',
    question: {
      japanese: '昨日の告白、どう思った？',
      korean: '어제 고백, 어떻게 생각했어?',
    },
    userChoice: [
      {
        responseId: 'lovebreak_situation_response_1',
        japanese: '運命だと思った。胸がドキドキしたよ。',
        korean: '운명이라고 생각했어. 가슴이 두근거렸어.',
      },
      {
        responseId: 'lovebreak_situation_response_2',
        japanese: 'ごめん。離れた方がいいと思う…。',
        korean: '미안해. 떨어지는 게 좋을 것 같아...',
      },
    ],
    response: [
      {
        responseId: 'lovebreak_situation_response_1',
        responseImage:
          'assets/images/public/lovebreak/lovebreak_situation_response_1.webp',
        japanese: '私も同じ気持ちだったよ。抱きしめてもいい？',
        korean: '나도 같은 마음이었어. 안아도 될까?',
      },
      {
        responseId: 'lovebreak_situation_response_2',
        responseImage:
          'assets/images/public/lovebreak/lovebreak_situation_response_2.webp',
        japanese: '…そうなんだ。涙が止まらないよ。',
        korean: '...그렇구나. 눈물이 멈추질 않아.',
      },
    ],
  },
  // 날씨1
  {
    id: 'weather1_situation',
    theme: '날씨1',
    situationImage: 'assets/images/public/weather/weather1_situation.webp',
    question: {
      japanese: '今日は暖かいですね。春のような天気です。',
      korean: '오늘은 따뜻하네요. 봄 같은 날씨예요.',
    },
    userChoice: [
      {
        responseId: 'weather1_situation_response_1',
        japanese: 'はい、すごく気持ちいいですね。',
        korean: '네, 정말 기분이 좋아요.',
      },
      {
        responseId: 'weather1_situation_response_2',
        japanese: 'そうですね、でもまだ少し寒い感じがします。',
        korean: '맞아요, 하지만 아직 조금 추운 느낌이 들어요.',
      },
    ],
    response: [
      {
        responseId: 'weather1_situation_response_1',
        responseImage:
          'assets/images/public/weather/weather1_situation_response_1.webp',
        japanese: '外に出て散歩したくなりますね。',
        korean: '밖에 나가서 산책하고 싶어져요.',
      },
      {
        responseId: 'weather1_situation_response_2',
        responseImage:
          'assets/images/public/weather/weather1_situation_response_2.webp',
        japanese: 'そうですね、風が少し冷たいです。',
        korean: '맞아요, 바람이 조금 차가워요.',
      },
    ],
  },
  // 날씨2
  {
    id: 'weather2_situation',
    theme: '날씨2',
    situationImage: 'assets/images/public/weather/weather2_situation.webp',
    question: {
      japanese: '今日は暑いですね。外に出る予定はありますか？',
      korean: '오늘은 덥네요. 밖에 나갈 예정이 있나요?',
    },
    userChoice: [
      {
        responseId: 'weather2_situation_response_1',
        japanese: 'はい、少し買い物に行くつもりです。',
        korean: '네, 조금 쇼핑하러 갈 예정이에요.',
      },
      {
        responseId: 'weather2_situation_response_2',
        japanese: 'いいえ、今日は家でリラックスする予定です。',
        korean: '아니요, 오늘은 집에서 릴랙스할 예정이에요.',
      },
    ],
    response: [
      {
        responseId: 'weather2_situation_response_1',
        responseImage:
          'assets/images/public/weather/weather2_situation_response_1.webp',
        japanese: '暑い日に外出するのは大変ですね。でも、楽しんでください！',
        korean: '더운 날에 외출하는 건 힘들죠. 그래도 즐기세요!',
      },
      {
        responseId: 'weather2_situation_response_2',
        responseImage:
          'assets/images/public/weather/weather2_situation_response_2.webp',
        japanese: '家でリラックスするのもいいですね。ゆっくり休んでください。',
        korean: '집에서 릴랙스하는 것도 좋죠. 푹 쉬세요!',
      },
    ],
  },
  // 시간
  {
    id: 'time_situation',
    theme: '시간',
    situationImage: 'assets/images/public/time/time_situation.webp',
    question: {
      japanese: '今日はどの時間帯が一番集中できると思いますか？',
      korean: '오늘 하루 중 언제가 가장 집중할 수 있을 것 같나요?',
    },
    userChoice: [
      {
        responseId: 'time_situation_response_1',
        japanese: '朝の時間帯が一番集中しやすいと思います。',
        korean: '아침 시간이 가장 집중하기 좋다고 생각해요.',
      },
      {
        responseId: 'time_situation_response_2',
        japanese: '夜の静かな時間が一番集中できると思います。',
        korean: '밤의 조용한 시간이 가장 집중이 잘 된다고 생각해요.',
      },
    ],
    response: [
      {
        responseId: 'time_situation_response_1',
        responseImage:
          'assets/images/public/time/time_situation_response_1.webp',
        japanese:
          '私も朝が一番集中できます。さっぱりした気分で始めるからですね。',
        korean:
          '저도 아침이 제일 집중이 잘 돼요. 상쾌한 기분으로 시작하니까요.',
      },
      {
        responseId: 'time_situation_response_2',
        responseImage:
          'assets/images/public/time/time_situation_response_2.webp',
        japanese: '私も夜の方が集中できます。静かな環境がいいですね。',
        korean: '저도 밤이 더 집중이 잘 돼요. 조용한 환경이 좋죠.',
      },
    ],
  },
  // 운명과 만남
  {
    id: 'fate_situation',
    theme: '운명과 만남',
    situationImage: 'assets/images/public/fate/fate_situation.webp',
    question: {
      japanese: '私たちの出会いは、まさに運命だと思いますか？',
      korean: '우리의 만남은, 정말 운명이라고 생각하나요?',
    },
    userChoice: [
      {
        responseId: 'fate_situation_response_1',
        japanese: 'はい、まさに運命のようなものだと思います。',
        korean: '네, 정말 운명 같은 것 같아요.',
      },
      {
        responseId: 'fate_situation_response_2',
        japanese: '偶然の出会いだったかもしれませんが、すごく大切に思います。',
        korean: '우연히 만났을지도 모르지만, 정말 소중하게 생각해요.',
      },
    ],
    response: [
      {
        responseId: 'fate_situation_response_1',
        responseImage:
          'assets/images/public/fate/fate_situation_response_1.webp',
        japanese: '私もそう感じています。まるで奇跡みたいですね。',
        korean: '저도 그렇게 느껴요. 마치 기적 같은 느낌이에요.',
      },
      {
        responseId: 'fate_situation_response_2',
        responseImage:
          'assets/images/public/fate/fate_situation_response_2.webp',
        japanese: '確かに。偶然でも運命のようなものだと思います。',
        korean: '확실히요. 우연일지라도 운명 같은 것이라고 생각해요.',
      },
    ],
  },
  // 쇼핑1
  {
    id: 'shopping1_situation',
    theme: '쇼핑1',
    situationImage: 'assets/images/public/shopping/shopping1_situation.webp',
    question: {
      japanese: 'この服を買いたいのですが、値段はいくらですか？',
      korean: '이 옷을 사고 싶은데, 가격이 얼마인가요?',
    },
    userChoice: [
      {
        responseId: 'shopping1_situation_response_1',
        japanese: 'この服は5000円です。',
        korean: '이 옷은 5000엔입니다.',
      },
      {
        responseId: 'shopping1_situation_response_2',
        japanese: 'こちらの服は割引されていますので、4000円になります。',
        korean: '이 옷은 할인 중이라서, 4000엔입니다.',
      },
    ],
    response: [
      {
        responseId: 'shopping1_situation_response_1',
        responseImage:
          'assets/images/public/shopping/shopping1_situation_response_1.webp',
        japanese: 'ありがとうございます。買います。',
        korean: '감사합니다. 살게요.',
      },
      {
        responseId: 'shopping1_situation_response_2',
        responseImage:
          'assets/images/public/shopping/shopping1_situation_response_2.webp',
        japanese: 'いいですね！それを買います。',
        korean: '좋네요! 그것을 살게요.',
      },
    ],
  },
  // 쇼핑2
  {
    id: 'shopping2_situation',
    theme: '쇼핑2',
    situationImage: 'assets/images/public/shopping/shopping2_situation.webp',
    question: {
      japanese:
        'この靴を買いたいんですが、サイズはどのように確認すればいいですか？',
      korean: '이 신발을 사고 싶은데, 사이즈는 어떻게 확인해야 하나요?',
    },
    userChoice: [
      {
        responseId: 'shopping2_situation_response_1',
        japanese: '試着してみて、自分にぴったりのサイズを見つけてください。',
        korean:
          '신발을 신고 직접 착용해보고, 본인에게 딱 맞는 사이즈를 찾아보세요.',
      },
      {
        responseId: 'shopping2_situation_response_2',
        japanese:
          '店員さんにサイズを聞いてみてください。きっと助けてくれますよ。',
        korean: '점원에게 사이즈를 물어보세요. 분명 도와줄 거예요.',
      },
    ],
    response: [
      {
        responseId: 'shopping2_situation_response_1',
        responseImage:
          'assets/images/public/shopping/shopping2_situation_response_1.webp',
        japanese: 'ありがとうございます！試してみます。',
        korean: '감사합니다! 한번 시도해보겠습니다.',
      },
      {
        responseId: 'shopping2_situation_response_2',
        responseImage:
          'assets/images/public/shopping/shopping2_situation_response_2.webp',
        japanese: 'はい、店員さんに聞いてみます。',
        korean: '네, 점원에게 물어볼게요.',
      },
    ],
  },
  // 패션 테마 대화
  {
    id: 'fashion_situation',
    theme: '패션',
    situationImage: 'assets/images/public/fashion/fashion_situation.webp',
    question: {
      japanese: 'このジャケット、どう思いますか？試着してみました。',
      korean: '이 자켓, 어떻게 생각하세요? 입어봤어요.',
    },
    userChoice: [
      {
        responseId: 'fashion_situation_response_1',
        japanese: 'とても似合っています！色もサイズもちょうどいいですね。',
        korean: '정말 잘 어울려요! 색상도 사이즈도 딱 맞네요.',
      },
      {
        responseId: 'fashion_situation_response_2',
        japanese: 'うーん、ちょっと大きすぎるかもしれませんね。',
        korean: '음... 조금 너무 큰 것 같네요.',
      },
    ],
    response: [
      {
        responseId: 'fashion_situation_response_1',
        responseImage:
          'assets/images/public/fashion/fashion_situation_response_1.webp',
        japanese: 'ありがとう！流行のデザインで気に入っています。',
        korean: '고마워요! 유행하는 디자인이라 마음에 들어요.',
      },
      {
        responseId: 'fashion_situation_response_2',
        responseImage:
          'assets/images/public/fashion/fashion_situation_response_2.webp',
        japanese: 'そうですね。もっと小さいサイズを試してみます。',
        korean: '맞아요. 더 작은 사이즈를 입어볼게요.',
      },
    ],
  },

  // 판타지 테마 대화
  {
    id: 'fantasy_situation',
    theme: '판타지',
    situationImage: 'assets/images/public/fantasy/fantasy_situation.webp',
    question: {
      japanese: 'この森には妖精が住んでいると言われています。',
      korean: '이 숲에는 요정이 살고 있다고 말해요.',
    },
    userChoice: [
      {
        responseId: 'fantasy_situation_response_1',
        japanese: '本当に？それは不思議ですね。',
        korean: '정말요? 그것은 신기하네요.',
      },
      {
        responseId: 'fantasy_situation_response_2',
        japanese: 'でも、呪いの森だと聞いたこともあります。',
        korean: '하지만, 저도 저주받은 숲이라고 들은 적이 있어요.',
      },
    ],
    response: [
      {
        responseId: 'fantasy_situation_response_1',
        responseImage:
          'assets/images/public/fantasy/fantasy_situation_response_1.webp',
        japanese: 'はい、妖精に出会えるといいですね。',
        korean: '네, 요정을 만날 수 있으면 좋겠어요.',
      },
      {
        responseId: 'fantasy_situation_response_2',
        responseImage:
          'assets/images/public/fantasy/fantasy_situation_response_2.webp',
        japanese: 'それなら、精霊に助けを求める必要があるかもしれませんね。',
        korean: '그렇다면, 정령에게 도움을 요청해야 할지도 모르겠어요.',
      },
    ],
  },

  // SNS 테마 대화
  {
    id: 'sns_situation',
    theme: 'SNS',
    situationImage: 'assets/images/public/sns/sns_situation.webp',
    question: {
      japanese: 'この写真、SNSに投稿しましたか？',
      korean: '이 사진, SNS에 올렸어요?',
    },
    userChoice: [
      {
        responseId: 'sns_situation_response_1',
        japanese: 'はい、友達と一緒に自撮りをして投稿しました。',
        korean: '네, 친구랑 함께 셀카를 찍어서 올렸어요.',
      },
      {
        responseId: 'sns_situation_response_2',
        japanese: 'まだ投稿していません。保存しておこうと思います。',
        korean: '아직 올리지 않았어요. 저장해두려고 해요.',
      },
    ],
    response: [
      {
        responseId: 'sns_situation_response_1',
        responseImage: 'assets/images/public/sns/sns_situation_response_1.webp',
        japanese: '面白いですね！どんな通知が来ましたか？',
        korean: '재밌네요! 어떤 알림이 왔나요?',
      },
      {
        responseId: 'sns_situation_response_2',
        responseImage: 'assets/images/public/sns/sns_situation_response_2.webp',
        japanese: 'それもいいですね。後で更新しましょう。',
        korean: '그것도 좋네요. 나중에 업데이트해요.',
      },
    ],
  },

  // 앱사용 테마 대화
  {
    id: 'app_usage_situation',
    theme: '앱사용',
    situationImage: 'assets/images/public/app-usage/app_usage_situation.webp',
    question: {
      japanese: 'このアプリでお気に入りの項目を保存しましたか？',
      korean: '이 앱에서 좋아하는 항목을 저장했어요?',
    },
    userChoice: [
      {
        responseId: 'app_usage_situation_response_1',
        japanese: 'はい、保存しました。いつでも閲覧できます。',
        korean: '네, 저장했어요. 언제든지 볼 수 있어요.',
      },
      {
        responseId: 'app_usage_situation_response_2',
        japanese: 'まだ保存していませんが、後で再生する予定です。',
        korean: '아직 저장하지 않았지만, 나중에 재생할 예정이에요.',
      },
    ],
    response: [
      {
        responseId: 'app_usage_situation_response_1',
        responseImage:
          'assets/images/public/app-usage/app_usage_situation_response_1.webp',
        japanese:
          'それは便利ですね！登録して、さらに多くの情報を得ることができます。',
        korean: '그거 편리하네요! 등록해서 더 많은 정보를 얻을 수 있어요.',
      },
      {
        responseId: 'app_usage_situation_response_2',
        responseImage:
          'assets/images/public/app-usage/app_usage_situation_response_2.webp',
        japanese: 'いいですね！再生後に変更することもできます。',
        korean: '좋아요! 재생 후에 변경할 수도 있어요.',
      },
    ],
  },

  // 영화 테마 대화
  {
    id: 'movie_situation',
    theme: '영화',
    situationImage: 'assets/images/public/movie/movie_situation.webp',
    question: {
      japanese: '最近、映画を鑑賞しましたか？',
      korean: '최근에 영화를 봤어요?',
    },
    userChoice: [
      {
        responseId: 'movie_situation_response_1',
        japanese: 'はい、劇場で観ました。主役がとても印象的でした。',
        korean: '네, 영화관에서 봤어요. 주연 배우가 정말 인상적이었어요.',
      },
      {
        responseId: 'movie_situation_response_2',
        japanese: 'いいえ、予告編を見ました。音楽が気に入りました。',
        korean: '아니요, 예고편을 봤어요. 음악이 마음에 들었어요.',
      },
    ],
    response: [
      {
        responseId: 'movie_situation_response_1',
        responseImage:
          'assets/images/public/movie/movie_situation_response_1.webp',
        japanese: 'どんな映画ですか？脚本はどうでしたか？',
        korean: '어떤 영화였나요? 각본은 어땠어요?',
      },
      {
        responseId: 'movie_situation_response_2',
        responseImage:
          'assets/images/public/movie/movie_situation_response_2.webp',
        japanese: 'その映画、撮影も素晴らしいと言われていますね。',
        korean: '그 영화, 촬영도 멋지다고 하네요.',
      },
    ],
  },

  // 운명 및 세계관 테마 대화
  {
    id: 'destiny_situation',
    theme: '운명 및 세계관',
    situationImage: 'assets/images/public/destiny/destiny_situation.webp',
    question: {
      japanese: 'あなたは運命を信じますか？',
      korean: '운명을 믿으시나요?',
    },
    userChoice: [
      {
        responseId: 'destiny_situation_response_1',
        japanese: 'はい、運命が自分を導いていると感じます。',
        korean: '네, 운명이 나를 이끌고 있다고 느껴요.',
      },
      {
        responseId: 'destiny_situation_response_2',
        japanese: 'いいえ、運命はただの偶然だと思っています。',
        korean: '아니요, 운명은 단지 우연이라고 생각해요.',
      },
    ],
    response: [
      {
        responseId: 'destiny_situation_response_1',
        responseImage:
          'assets/images/public/destiny/destiny_situation_response_1.webp',
        japanese: 'それは素晴らしいですね。奇跡が起こると信じていますか？',
        korean: '그거 정말 멋지네요. 기적이 일어난다고 믿나요?',
      },
      {
        responseId: 'destiny_situation_response_2',
        responseImage:
          'assets/images/public/destiny/destiny_situation_response_2.webp',
        japanese: 'なるほど。魔法や異世界の話は好きですか？',
        korean: '그렇군요. 마법이나 이세계 이야기는 좋아하시나요?',
      },
    ],
  },

  // 가족 테마 대화
  {
    id: 'family_situation',
    theme: '가족',
    situationImage: 'assets/images/public/family/family_situation.webp',
    question: {
      japanese: 'あなたの家族はどんな人たちですか？',
      korean: '당신의 가족은 어떤 사람들이에요?',
    },
    userChoice: [
      {
        responseId: 'family_situation_response_1',
        japanese: '父と母、そして兄がいます。',
        korean: '아버지와 어머니, 그리고 형이 있어요.',
      },
      {
        responseId: 'family_situation_response_2',
        japanese: '祖父と祖母が一緒に住んでいます。',
        korean: '할아버지와 할머니가 함께 살고 있어요.',
      },
    ],
    response: [
      {
        responseId: 'family_situation_response_1',
        responseImage:
          'assets/images/public/family/family_situation_response_1.webp',
        japanese: '素敵ですね。妹さんはいますか？',
        korean: '멋지네요. 여동생은 있나요?',
      },
      {
        responseId: 'family_situation_response_2',
        responseImage:
          'assets/images/public/family/family_situation_response_2.webp',
        japanese: 'それは素晴らしいですね。息子さんや娘さんはいますか？',
        korean: '정말 멋지네요. 아들 또는 딸이 있나요?',
      },
    ],
  },

  // 감정1 테마 대화
  {
    id: 'emotion1_situation',
    theme: '감정1',
    situationImage: 'assets/images/public/emotion/emotion1_situation.webp',
    question: {
      japanese: '最近、何か嬉しいことがありましたか？',
      korean: '최근에 기쁜 일이 있었나요?',
    },
    userChoice: [
      {
        responseId: 'emotion1_situation_response_1',
        japanese: '友達と楽しい時間を過ごして、すごく嬉しかったです。',
        korean: '친구와 즐거운 시간을 보내서 정말 기뻤어요.',
      },
      {
        responseId: 'emotion1_situation_response_2',
        japanese: '新しい仕事が決まって、すごく嬉しいです。',
        korean: '새로운 일이 결정되어 정말 기뻐요.',
      },
    ],
    response: [
      {
        responseId: 'emotion1_situation_response_1',
        responseImage:
          'assets/images/public/emotion/emotion1_situation_response_1.webp',
        japanese: 'それは素敵ですね！何をして楽しんだんですか？',
        korean: '정말 멋지네요! 무엇을 하며 즐겼나요?',
      },
      {
        responseId: 'emotion1_situation_response_2',
        responseImage:
          'assets/images/public/emotion/emotion1_situation_response_2.webp',
        japanese: 'おめでとうございます！それは素晴らしいですね。',
        korean: '축하드려요! 정말 멋지네요.',
      },
    ],
  },

  // 감정2 테마 대화
  {
    id: 'emotion2_situation',
    theme: '감정2',
    situationImage: 'assets/images/public/emotion/emotion2_situation.webp',
    question: {
      japanese: '最近、何か驚いたことがありましたか？',
      korean: '최근에 놀랐던 일이 있었나요?',
    },
    userChoice: [
      {
        responseId: 'emotion2_situation_response_1',
        japanese: '友達がサプライズパーティーを開いてくれて、驚きました。',
        korean: '친구가 깜짝 파티를 열어줘서 놀랐어요.',
      },
      {
        responseId: 'emotion2_situation_response_2',
        japanese: '天気予報を見て、急に寒くなると言われて驚きました。',
        korean: '날씨 예보를 보고 갑자기 추워진다고 해서 놀랐어요.',
      },
    ],
    response: [
      {
        responseId: 'emotion2_situation_response_1',
        responseImage:
          'assets/images/public/emotion/emotion2_situation_response_1.webp',
        japanese: 'それは楽しい驚きですね！どうでしたか？',
        korean: '정말 즐거운 놀라움이었네요! 어땠어요?',
      },
      {
        responseId: 'emotion2_situation_response_2',
        responseImage:
          'assets/images/public/emotion/emotion2_situation_response_2.webp',
        japanese: '予想外の天気だったんですね！準備はできましたか？',
        korean: '예상치 못한 날씨였나 보네요! 준비는 되었나요?',
      },
    ],
  },

  // 감정3 테마 대화
  {
    id: 'emotion3_situation',
    theme: '감정3',
    situationImage: 'assets/images/public/emotion/emotion3_situation.webp',
    question: {
      japanese: '最近、どんな気持ちになることがありましたか？',
      korean: '최근에 어떤 감정을 느낀 일이 있었어요?',
    },
    userChoice: [
      {
        responseId: 'emotion3_situation_response_1',
        japanese: '久しぶりに友達と会って、すごく楽しかったです。',
        korean: '오랜만에 친구를 만나서 정말 즐거웠어요.',
      },
      {
        responseId: 'emotion3_situation_response_2',
        japanese: '面接の前で、すごく不安でした。',
        korean: '면접 전에 정말 불안했어요.',
      },
    ],
    response: [
      {
        responseId: 'emotion3_situation_response_1',
        responseImage:
          'assets/images/public/emotion/emotion3_situation_response_1.webp',
        japanese: 'それはよかったですね！どこに行ったんですか？',
        korean: '정말 좋았겠어요! 어디에 다녀오셨나요?',
      },
      {
        responseId: 'emotion3_situation_response_2',
        responseImage:
          'assets/images/public/emotion/emotion3_situation_response_2.webp',
        japanese: 'わかります。その気持ち…。結果はどうでしたか？',
        korean: '그 마음 이해돼요… 결과는 어땠나요?',
      },
    ],
  },
  // 건강관리 테마 대화
  {
    id: 'health_situation',
    theme: '건강관리',
    situationImage: 'assets/images/public/health/health_situation.webp',
    question: {
      japanese: '最近、健康のために何か始めた？',
      korean: '요즘 건강을 위해 시작한 게 있어?',
    },
    userChoice: [
      {
        responseId: 'health_situation_response_1',
        japanese: '夜はちゃんと寝るようにしてるよ',
        korean: '밤에는 제대로 자려고 하고 있어.',
      },
      {
        responseId: 'health_situation_response_2',
        japanese: '毎朝、軽く運動してるよ。',
        korean: '매일 아침 가볍게 운동하고 있어.',
      },
    ],
    response: [
      {
        responseId: 'health_situation_response_1',
        responseImage:
          'assets/images/public/health/health_situation_response_1.webp',
        japanese: 'いいね！睡眠は体調を整える基本だよね。',
        korean: '좋다! 수면은 건강을 챙기는 기본이지.',
      },
      {
        responseId: 'health_situation_response_2',
        responseImage:
          'assets/images/public/health/health_situation_response_2.webp',
        japanese: 'えらい！運動って疲労にもストレスにも効くからね。',
        korean: '대단해! 운동은 피로에도 스트레스에도 좋으니까.',
      },
    ],
  },

  // 운동 테마 대화
  {
    id: 'exercise_situation',
    theme: '운동',
    situationImage: 'assets/images/public/exercise/exercise_situation.webp',
    question: {
      japanese: '最近、どんな運動してるの？',
      korean: '요즘 어떤 운동하고 있어?',
    },
    userChoice: [
      {
        responseId: 'exercise_situation_response_1',
        japanese: 'ジムでトレーニングしてるよ。',
        korean: '헬스장에서 운동하고 있어.',
      },
      {
        responseId: 'exercise_situation_response_2',
        japanese: '週に3回ランニングしてる！',
        korean: '일주일에 세 번 달리기해!',
      },
    ],
    response: [
      {
        responseId: 'exercise_situation_response_1',
        responseImage:
          'assets/images/public/exercise/exercise_situation_response_1.webp',
        japanese: 'すごい！続けるのってけっこう大変だよね。',
        korean: '대단하다! 꾸준히 하는 게 꽤 힘든 일이잖아.',
      },
      {
        responseId: 'exercise_situation_response_2',
        responseImage:
          'assets/images/public/exercise/exercise_situation_response_2.webp',
        japanese: 'えらい！ランニングは心も体もスッキリするよね。',
        korean: '멋지다! 달리기는 몸도 마음도 상쾌해지잖아.',
      },
    ],
  },

  // 헬스&뷰티 테마 대화
  {
    id: 'beauty_situation',
    theme: '헬스&뷰티',
    situationImage: 'assets/images/public/beauty/beauty_situation.webp',
    question: {
      japanese: '最近、美容で気をつけていることってある？',
      korean: '요즘 뷰티 관련해서 신경 쓰는 거 있어?',
    },
    userChoice: [
      {
        responseId: 'beauty_situation_response_1',
        japanese: '日焼けしないように、毎日日焼け止めを塗ってるよ。',
        korean: '자외선에 안 타려고 매일 자외선 차단제를 바르고 있어.',
      },
      {
        responseId: 'beauty_situation_response_2',
        japanese: '朝と夜にちゃんと洗顔して、化粧水で保湿してるよ。',
        korean: '아침저녁으로 세안하고 화장수로 보습하고 있어.',
      },
    ],
    response: [
      {
        responseId: 'beauty_situation_response_1',
        responseImage:
          'assets/images/public/beauty/beauty_situation_response_1.webp',
        japanese: 'えらい！肌がきれいな人ってやっぱり努力してるんだね。',
        korean: '대단하다! 피부가 예쁜 사람은 역시 노력하고 있구나.',
      },
      {
        responseId: 'beauty_situation_response_2',
        responseImage:
          'assets/images/public/beauty/beauty_situation_response_2.webp',
        japanese: 'さすが！スキンケアをサボらないのって本当に大事だよね。',
        korean: '역시! 스킨케어를 게을리하지 않는 게 진짜 중요하지.',
      },
    ],
  },

  // 성장과 극복 테마 대화
  {
    id: 'growth_situation',
    theme: '성장과 극복',
    situationImage: 'assets/images/public/growth/growth_situation.webp',
    question: {
      japanese: '壁にぶつかったとき、どうする？',
      korean: '시련에 부딪혔을 때, 어떻게 해?',
    },
    userChoice: [
      {
        responseId: 'growth_situation_response_1',
        japanese: '我慢して、もう少しだけ頑張ってみる。',
        korean: '참고 조금만 더 힘내볼 거야.',
      },
      {
        responseId: 'growth_situation_response_2',
        japanese: '一回立ち止まって、自分に何ができるか学び直す。',
        korean: '한 번 멈춰서, 내가 뭘 할 수 있을지 다시 배워볼 거야.',
      },
    ],
    response: [
      {
        responseId: 'growth_situation_response_1',
        responseImage:
          'assets/images/public/growth/growth_situation_response_1.webp',
        japanese: 'えらい！その我慢がきっと、強くなる力になるね。',
        korean: '대단해! 그 인내가 분명 더 강해지는 힘이 될 거야.',
      },
      {
        responseId: 'growth_situation_response_2',
        responseImage:
          'assets/images/public/growth/growth_situation_response_2.webp',
        japanese: 'いいね。学び直すって、前に進む大きな一歩だよ。',
        korean: '좋아. 다시 배우는 건 앞으로 나아가는 큰 발걸음이야.',
      },
    ],
  },

  // 공부 및 암기 테마 대화
  {
    id: 'study_situation',
    theme: '공부 및 암기',
    situationImage: 'assets/images/public/study/study_situation.webp',
    question: {
      japanese: '新しい言葉を覚えるとき、どうしてる？',
      korean: '새로운 단어를 외울 때, 어떻게 해?',
    },
    userChoice: [
      {
        responseId: 'study_situation_response_1',
        japanese: 'ノートに書いて、何度も練習する！',
        korean: '노트에 쓰면서 여러 번 연습해!',
      },
      {
        responseId: 'study_situation_response_2',
        japanese: '声に出して読んで、アプリに記録してる！',
        korean: '소리 내서 읽고, 앱에 기록해 두고 있어!',
      },
    ],
    response: [
      {
        responseId: 'study_situation_response_1',
        responseImage:
          'assets/images/public/study/study_situation_response_1.webp',
        japanese: 'いいね！書いて練習すると、忘れにくくなるよね。',
        korean: '좋아! 쓰고 연습하면 쉽게 잊어버리지 않게 되지.',
      },
      {
        responseId: 'study_situation_response_2',
        responseImage:
          'assets/images/public/study/study_situation_response_2.webp',
        japanese: 'さすが！読むだけじゃなくて記録もすると、復習に便利だね。',
        korean: '멋져! 읽는 것뿐만 아니라 기록해두면 복습할 때도 편하지.',
      },
    ],
  },

  // 학교 테마 대화
  {
    id: 'school_situation',
    theme: '학교',
    situationImage: 'assets/images/public/school/school_situation.webp',
    question: {
      japanese: '学生時代、教室で一番の思い出は何？',
      korean: '학생 시절, 교실에서 가장 기억에 남는 건 뭐야?',
    },
    userChoice: [
      {
        responseId: 'school_situation_response_1',
        japanese: '好きな先生と話した授業！',
        korean: '좋아하던 선생님과 이야기 나눴던 수업이야!',
      },
      {
        responseId: 'school_situation_response_2',
        japanese: '宿題を忘れて遅刻した日の試験…',
        korean: '숙제를 까먹고 지각한 날의 시험…',
      },
    ],
    response: [
      {
        responseId: 'school_situation_response_1',
        responseImage:
          'assets/images/public/school/school_situation_response_1.webp',
        japanese: 'わかる！いい先生との授業は、一生の思い出になるよね。',
        korean: '공감돼! 좋은 선생님과의 수업은 평생 기억에 남지.',
      },
      {
        responseId: 'school_situation_response_2',
        responseImage:
          'assets/images/public/school/school_situation_response_2.webp',
        japanese: 'それは大変だったね！でも、そういう日ほど記憶に残るよね。',
        korean: '진짜 고생했겠다! 그래도 그런 날이 더 기억에 남는 법이야.',
      },
    ],
  },

  // 자기계발 테마 대화
  {
    id: 'self_improvement_situation',
    theme: '자기계발',
    situationImage:
      'assets/images/public/self-improvement/self_improvement_situation.webp',
    question: {
      japanese: '自己成長のために、毎日続けていることってある？',
      korean: '자기 성장을 위해 매일 계속하고 있는 게 있어?',
    },
    userChoice: [
      {
        responseId: 'self_improvement_situation_response_1',
        japanese: '目標に向かって、計画的に勉強してる！',
        korean: '목표를 향해 계획적으로 공부하고 있어!',
      },
      {
        responseId: 'self_improvement_situation_response_2',
        japanese: '集中して練習する時間を毎日つくってるよ。',
        korean: '집중해서 연습하는 시간을 매일 만들고 있어.',
      },
    ],
    response: [
      {
        responseId: 'self_improvement_situation_response_1',
        responseImage:
          'assets/images/public/self-improvement/self_improvement_situation_response_1.webp',
        japanese: 'すごい！習慣にできてるのが一番の強みだよね。',
        korean: '대단해! 습관으로 만든 게 가장 큰 무기지.',
      },
      {
        responseId: 'self_improvement_situation_response_2',
        responseImage:
          'assets/images/public/self-improvement/self_improvement_situation_response_2.webp',
        japanese: 'それが努力だよね。少しずつでも確実に成長できると思う！',
        korean: '그게 바로 노력이지. 조금씩이라도 확실히 성장할 수 있을 거야!',
      },
    ],
  },

  // 우정 테마 대화
  {
    id: 'friendship_situation',
    theme: '우정',
    situationImage: 'assets/images/public/friendship/friendship_situation.webp',
    question: {
      japanese: '友達との思い出で、忘れられない瞬間はある？',
      korean: '친구와의 추억 중, 잊을 수 없는 순간이 있어?',
    },
    userChoice: [
      {
        responseId: 'friendship_situation_response_1',
        japanese: '一緒に旅行したときのことが忘れられないよ！',
        korean: '함께 여행했던 기억이 잊을 수 없지!',
      },
      {
        responseId: 'friendship_situation_response_2',
        japanese: '友達が支えてくれて、困難を乗り越えた時が印象に残ってる。',
        korean: '친구가 나를 지원해 주어서 어려움을 극복했을 때가 기억에 남아.',
      },
    ],
    response: [
      {
        responseId: 'friendship_situation_response_1',
        responseImage:
          'assets/images/public/friendship/friendship_situation_response_1.webp',
        japanese: '素晴らしい思い出だね！一生忘れないだろうね。',
        korean: '멋진 추억이네! 평생 잊지 못할 거야.',
      },
      {
        responseId: 'friendship_situation_response_2',
        responseImage:
          'assets/images/public/friendship/friendship_situation_response_2.webp',
        japanese: '仲間との絆が深まった瞬間だね。',
        korean: '친구들과의 유대가 깊어진 순간이었네.',
      },
    ],
  },
  // 회사1 테마 대화
  {
    id: 'company1_situation',
    theme: '회사1',
    situationImage: 'assets/images/public/company/company1_situation.webp',
    question: {
      japanese: '会社で一番印象に残っている出来事は何？',
      korean: '회사에서 가장 기억에 남는 일이 뭐야?',
    },
    userChoice: [
      {
        responseId: 'company1_situation_response_1',
        japanese: '部長と一緒に出張に行ったことが一番印象深い。',
        korean: '부장님과 함께 출장을 갔던 게 가장 인상 깊었어.',
      },
      {
        responseId: 'company1_situation_response_2',
        japanese: '会議で上司に褒められた瞬間が嬉しかった！',
        korean: '회의에서 상사에게 칭찬받았던 순간이 정말 기뻤어!',
      },
    ],
    response: [
      {
        responseId: 'company1_situation_response_1',
        responseImage:
          'assets/images/public/company/company1_situation_response_1.webp',
        japanese: '出張は仕事の中でも特別な経験だよね！',
        korean: '출장은 업무 중에서도 특별한 경험이지!',
      },
      {
        responseId: 'company1_situation_response_2',
        responseImage:
          'assets/images/public/company/company1_situation_response_2.webp',
        japanese: '自分の努力が認められる瞬間は最高だよね！',
        korean: '자기의 노력이 인정받는 순간은 최고야!',
      },
    ],
  },

  // 회사2 테마 대화
  {
    id: 'company2_situation',
    theme: '회사2',
    situationImage: 'assets/images/public/company/company2_situation.webp',
    question: {
      japanese: '今日は何時に退社する予定？',
      korean: '오늘은 몇 시에 퇴근할 예정이야?',
    },
    userChoice: [
      {
        responseId: 'company2_situation_response_1',
        japanese: '会議が長引いたから、残業して資料をまとめる予定。',
        korean: '회의가 길어져서, 남아서 자료를 정리할 예정이야.',
      },
      {
        responseId: 'company2_situation_response_2',
        japanese: '今日は定時で退社して、同僚と飲みに行く予定。',
        korean: '오늘은 정시 퇴근해서 동료들과 술 한잔 할 예정이야.',
      },
    ],
    response: [
      {
        responseId: 'company2_situation_response_1',
        responseImage:
          'assets/images/public/company/company2_situation_response_1.webp',
        japanese: '残業が多いと疲れるけど、頑張ってね！',
        korean: '잔업이 많으면 힘들겠지만, 힘내!',
      },
      {
        responseId: 'company2_situation_response_2',
        responseImage:
          'assets/images/public/company/company2_situation_response_2.webp',
        japanese: '同僚との飲み会はリフレッシュになるよね！',
        korean: '동료들과의 회식은 정말 기분 전환이 되지!',
      },
    ],
  },

  // 일상1 테마 대화
  {
    id: 'daily1_situation',
    theme: '일상1',
    situationImage: 'assets/images/public/daily/daily1_situation.webp',
    question: {
      japanese: '今日は仕事終わった後に何する予定？',
      korean: '오늘은 일 끝나고 뭐 할 예정이야?',
    },
    userChoice: [
      {
        responseId: 'daily1_situation_response_1',
        japanese: '散歩に出かけて、リラックスする予定。',
        korean: '산책 나가서 릴렉스 할 예정이야.',
      },
      {
        responseId: 'daily1_situation_response_2',
        japanese: '家で映画を見ながら、料理をする予定。',
        korean: '집에서 영화를 보면서 요리할 예정이야.',
      },
    ],
    response: [
      {
        responseId: 'daily1_situation_response_1',
        responseImage:
          'assets/images/public/daily/daily1_situation_response_1.webp',
        japanese: '散歩はいいリフレッシュになるよね！',
        korean: '산책은 정말 기분 전환이 돼!',
      },
      {
        responseId: 'daily1_situation_response_2',
        responseImage:
          'assets/images/public/daily/daily1_situation_response_2.webp',
        japanese: '映画と料理の組み合わせ、最高だね！',
        korean: '영화랑 요리 조합, 완전 좋다!',
      },
    ],
  },

  // 일상2 테마 대화
  {
    id: 'daily2_situation',
    theme: '일상2',
    situationImage: 'assets/images/public/daily/daily2_situation.webp',
    question: {
      japanese: '今日はどんな一日になりそう？',
      korean: '오늘은 어떤 하루가 될 것 같아?',
    },
    userChoice: [
      {
        responseId: 'daily2_situation_response_1',
        japanese: '朝早く起きて、散歩しに出かける予定。',
        korean: '아침 일찍 일어나서 산책하러 나갈 예정이야.',
      },
      {
        responseId: 'daily2_situation_response_2',
        japanese: '今日は家でゆっくりして、夜に映画を見ようかな。',
        korean: '오늘은 집에서 편하게 쉬고, 밤에 영화를 볼까 해.',
      },
    ],
    response: [
      {
        responseId: 'daily2_situation_response_1',
        responseImage:
          'assets/images/public/daily/daily2_situation_response_1.webp',
        japanese: '朝の散歩は気持ちいいよね！リフレッシュできそう。',
        korean: '아침 산책은 정말 기분 좋지! 리프레시가 될 거야.',
      },
      {
        responseId: 'daily2_situation_response_2',
        responseImage:
          'assets/images/public/daily/daily2_situation_response_2.webp',
        japanese: 'リラックスするのも大切だよね。映画楽しんで！',
        korean: '편하게 쉬는 것도 중요하지! 영화 잘 보고!',
      },
    ],
  },

  // 평가 테마 대화
  {
    id: 'evaluation_situation',
    theme: '평가',
    situationImage: 'assets/images/public/evaluation/evaluation_situation.webp',
    question: {
      japanese: 'このアプリの使い心地はどう？',
      korean: '이 앱의 사용 느낌은 어때?',
    },
    userChoice: [
      {
        responseId: 'evaluation_situation_response_1',
        japanese: '簡単で使いやすい！すぐに覚えられたよ。',
        korean: '간단하고 사용하기 쉬워! 금방 익힐 수 있었어.',
      },
      {
        responseId: 'evaluation_situation_response_2',
        japanese: '少し難しいけど、使いこなせるようになれば便利だと思う。',
        korean: '조금 어렵긴 하지만, 익숙해지면 유용할 것 같아.',
      },
    ],
    response: [
      {
        responseId: 'evaluation_situation_response_1',
        responseImage:
          'assets/images/public/evaluation/evaluation_situation_response_1.webp',
        japanese: 'それは良かった！使いやすさが大事だもんね。',
        korean: '그게 좋았구나! 사용하기 쉬운 게 중요하니까.',
      },
      {
        responseId: 'evaluation_situation_response_2',
        responseImage:
          'assets/images/public/evaluation/evaluation_situation_response_2.webp',
        japanese: '最初は難しいかもしれないけど、慣れれば便利だよね！',
        korean: '처음엔 어려울 수 있지만, 익숙해지면 정말 유용하겠네!',
      },
    ],
  },

  // 상태 및 성격 테마 대화
  {
    id: 'personality_situation',
    theme: '상태 및 성격',
    situationImage:
      'assets/images/public/personality/personality_situation.webp',
    question: {
      japanese: 'あなたの友達はどんな性格？',
      korean: '너의 친구는 어떤 성격이야?',
    },
    userChoice: [
      {
        responseId: 'personality_situation_response_1',
        japanese: '優しくて、いつも助けてくれる。',
        korean: '상냥하고, 항상 도와줘.',
      },
      {
        responseId: 'personality_situation_response_2',
        japanese: 'ちょっと厳しいけど、しっかりしている人。',
        korean: '조금 엄격하지만, 확실한 사람.',
      },
    ],
    response: [
      {
        responseId: 'personality_situation_response_1',
        responseImage:
          'assets/images/public/personality/personality_situation_response_1.webp',
        japanese: 'いいね！優しい人は心が温かいよね。',
        korean: '좋네! 상냥한 사람은 정말 마음이 따뜻해.',
      },
      {
        responseId: 'personality_situation_response_2',
        responseImage:
          'assets/images/public/personality/personality_situation_response_2.webp',
        japanese: '厳しいけど、頼りになるね！',
        korean: '엄격하지만, 믿을 수 있어!',
      },
    ],
  },

  // 색상 테마 대화
  {
    id: 'color_situation',
    theme: '색상',
    situationImage: 'assets/images/public/color/color_situation.webp',
    question: {
      japanese: '新しいシャツ、何色がいい？',
      korean: '새 셔츠, 무슨 색이 좋을까?',
    },
    userChoice: [
      {
        responseId: 'color_situation_response_1',
        japanese: '白いシャツがいい！',
        korean: '흰 셔츠가 좋아!',
      },
      {
        responseId: 'color_situation_response_2',
        japanese: '黒いシャツがかっこいい！',
        korean: '검은 셔츠가 멋져!',
      },
    ],
    response: [
      {
        responseId: 'color_situation_response_1',
        responseImage:
          'assets/images/public/color/color_situation_response_1.webp',
        japanese: '白はさっぱりして見えるね。',
        korean: '흰 것은 깔끔해 보여!',
      },
      {
        responseId: 'color_situation_response_2',
        responseImage:
          'assets/images/public/color/color_situation_response_2.webp',
        japanese: '黒はクールなイメージだよ。',
        korean: '검정 것은 시크한 느낌이야!',
      },
    ],
  },

  // 커뮤니케이션 테마 대화
  {
    id: 'communication_situation',
    theme: '커뮤니케이션',
    situationImage:
      'assets/images/public/communication/communication_situation.webp',
    question: {
      japanese: '大事なこと、ちゃんと伝えた？',
      korean: '중요한 말, 제대로 전했어?',
    },
    userChoice: [
      {
        responseId: 'communication_situation_response_1',
        japanese: 'うん、ちゃんと伝えたよ。',
        korean: '응, 제대로 전했어.',
      },
      {
        responseId: 'communication_situation_response_2',
        japanese: 'まだ伝えてない……。',
        korean: '아직 말 안 했어…',
      },
    ],
    response: [
      {
        responseId: 'communication_situation_response_1',
        responseImage:
          'assets/images/public/communication/communication_situation_response_1.webp',
        japanese: 'それなら安心だね。伝えるは大事！',
        korean: '그렇다면 안심이네. 전달하는 것은 정말 중요하지!',
      },
      {
        responseId: 'communication_situation_response_2',
        responseImage:
          'assets/images/public/communication/communication_situation_response_2.webp',
        japanese: '早く伝えたほうがいいよ。',
        korean: '빨리 전하는 게 좋아!',
      },
    ],
  },

  // 교통 테마 대화
  {
    id: 'transportation_situation',
    theme: '교통',
    situationImage:
      'assets/images/public/transportation/transportation_situation.webp',
    question: {
      japanese: '今日の通勤、どうやって来た？',
      korean: '오늘 출근할 때 어떻게 왔어?',
    },
    userChoice: [
      {
        responseId: 'transportation_situation_response_1',
        japanese: '電車で来たよ。',
        korean: '전철 타고 왔어.',
      },
      {
        responseId: 'transportation_situation_response_2',
        japanese: '車で来たよ。',
        korean: '차로 왔어.',
      },
    ],
    response: [
      {
        responseId: 'transportation_situation_response_1',
        responseImage:
          'assets/images/public/transportation/transportation_situation_response_1.webp',
        japanese: '電車は早くて便利だね。',
        korean: '전철은 빠르고 편하지!',
      },
      {
        responseId: 'transportation_situation_response_2',
        responseImage:
          'assets/images/public/transportation/transportation_situation_response_2.webp',
        japanese: '渋滞は大丈夫だった？',
        korean: '차 막히진 않았어?',
      },
    ],
  },

  // 음악 테마 대화
  {
    id: 'music_situation',
    theme: '음악',
    situationImage: 'assets/images/public/music/music_situation.webp',
    question: {
      japanese: '仕事のあと、どんな音楽を聴く？',
      korean: '퇴근하고 나서 어떤 음악 들어?',
    },
    userChoice: [
      {
        responseId: 'music_situation_response_1',
        japanese: '静かなピアノの曲。',
        korean: '잔잔한 피아노곡이야.',
      },
      {
        responseId: 'music_situation_response_2',
        japanese: '元気なロックの歌！',
        korean: '신나는 록 음악!',
      },
    ],
    response: [
      {
        responseId: 'music_situation_response_1',
        responseImage:
          'assets/images/public/music/music_situation_response_1.webp',
        japanese: 'リラックスできていいね。',
        korean: '편안해져서 좋지!',
      },
      {
        responseId: 'music_situation_response_2',
        responseImage:
          'assets/images/public/music/music_situation_response_2.webp',
        japanese: 'ストレスが吹き飛びそう！',
        korean: '스트레스가 확 날아가겠는데!',
      },
    ],
  },
  // 일본문화 테마 대화
  {
    id: 'japanese_culture_situation',
    theme: '일본문화',
    situationImage:
      'assets/images/public/japanese-culture/japanese_culture_situation.webp',
    question: {
      japanese: '今度、日本の文化体験があるよ！何をやってみたい？',
      korean: '이번에 일본 문화 체험이 있어! 뭐 해보고 싶어?',
    },
    userChoice: [
      {
        responseId: 'japanese_culture_situation_response_1',
        japanese: '浴衣を着て、写真を撮りたい。',
        korean: '유카타 입고 사진 찍고 싶어.',
      },
      {
        responseId: 'japanese_culture_situation_response_2',
        japanese: '折り紙をしてみたいな。',
        korean: '종이접기 해보고 싶어.',
      },
    ],
    response: [
      {
        responseId: 'japanese_culture_situation_response_1',
        responseImage:
          'assets/images/public/japanese-culture/japanese_culture_situation_response_1.webp',
        japanese: 'いいね！夏祭りみたいな気分になれそう！',
        korean: '좋다! 마치 여름 축제 분위기겠네!',
      },
      {
        responseId: 'japanese_culture_situation_response_2',
        responseImage:
          'assets/images/public/japanese-culture/japanese_culture_situation_response_2.webp',
        japanese: '子どものころを思い出すね。',
        korean: '어릴 적 생각나겠다.',
      },
    ],
  },

  // 자연환경 테마 대화
  {
    id: 'environment_situation',
    theme: '자연환경',
    situationImage:
      'assets/images/public/environment/environment_situation.webp',
    question: {
      japanese: '地球のために、どんなことをしてみたい？',
      korean: '지구를 위해 어떤 걸 해보고 싶어?',
    },
    userChoice: [
      {
        responseId: 'environment_situation_response_1',
        japanese: '節電をがんばる！',
        korean: '절전을 열심히 할래!',
      },
      {
        responseId: 'environment_situation_response_2',
        japanese: 'ゴミを減らす！',
        korean: '쓰레기를 줄일래!',
      },
    ],
    response: [
      {
        responseId: 'environment_situation_response_1',
        responseImage:
          'assets/images/public/environment/environment_situation_response_1.webp',
        japanese: 'いいね！小さなことから始めよう！',
        korean: '좋아! 작은 것부터 시작하자!',
      },
      {
        responseId: 'environment_situation_response_2',
        responseImage:
          'assets/images/public/environment/environment_situation_response_2.webp',
        japanese: 'エコな生活ってかっこいいね！',
        korean: '에코한 생활, 멋있어!',
      },
    ],
  },

  // 기억과 회상 테마 대화
  {
    id: 'memories_situation',
    theme: '기억과 회상',
    situationImage: 'assets/images/public/memories/memories_situation.webp',
    question: {
      japanese: '昔の思い出で、一番心に残っているのは？',
      korean: '예전 추억 중에서 가장 기억에 남는 건 뭐야?',
    },
    userChoice: [
      {
        responseId: 'memories_situation_response_1',
        japanese: '友達との再会！',
        korean: '친구와의 재회!',
      },
      {
        responseId: 'memories_situation_response_2',
        japanese: '家族との旅行！',
        korean: '가족과의 여행!',
      },
    ],
    response: [
      {
        responseId: 'memories_situation_response_1',
        responseImage:
          'assets/images/public/memories/memories_situation_response_1.webp',
        japanese: 'いいね。会えたとき、涙が出そうだね。',
        korean: '좋네. 다시 만났을 때 눈물 날 것 같아.',
      },
      {
        responseId: 'memories_situation_response_2',
        responseImage:
          'assets/images/public/memories/memories_situation_response_2.webp',
        japanese: 'あたたかい記憶だね。写真も残ってる？',
        korean: '따뜻한 기억이네. 사진도 남아 있어?',
      },
    ],
  },

  // 고독과 내면 테마 대화
  {
    id: 'solitude_situation',
    theme: '고독과 내면',
    situationImage: 'assets/images/public/solitude/solitude_situation.webp',
    question: {
      japanese: 'もし、あなたがとても悲しい時、どう感じますか？',
      korean: '만약 정말 슬플 때, 어떻게 느끼나요?',
    },
    userChoice: [
      {
        responseId: 'solitude_situation_response_1',
        japanese: '自分の未来について考える。',
        korean: '내 미래에 대해 생각한다.',
      },
      {
        responseId: 'solitude_situation_response_2',
        japanese: '今までのことを振り返る。',
        korean: '지금까지의 일을 되돌아본다.',
      },
    ],
    response: [
      {
        responseId: 'solitude_situation_response_1',
        responseImage:
          'assets/images/public/solitude/solitude_situation_response_1.webp',
        japanese: 'それは大事だね。将来の目標は決まっている？',
        korean: '그건 중요하지. 미래 목표는 정해졌어?',
      },
      {
        responseId: 'solitude_situation_response_2',
        responseImage:
          'assets/images/public/solitude/solitude_situation_response_2.webp',
        japanese: '過去の経験は大切だよね。何か学んだことはあった？',
        korean: '과거의 경험은 소중하지. 배운 게 있었어?',
      },
    ],
  },
  // 절망
  {
    id: 'despair_situation',
    theme: '절망',
    situationImage: 'assets/images/public/despair/despair_situation.webp',
    question: {
      japanese: 'つらい時、どう感じる？',
      korean: '힘들 때, 어떻게 느껴?',
    },
    userChoice: [
      {
        responseId: 'despair_situation_response_1',
        japanese: '泣きたくなる。',
        korean: '울고 싶어진다.',
      },
      {
        responseId: 'despair_situation_response_2',
        japanese: '何も考えたくない。',
        korean: '아무 생각도 하고 싶지 않다.',
      },
    ],
    response: [
      {
        responseId: 'despair_situation_response_1',
        responseImage:
          'assets/images/public/despair/despair_situation_response_1.webp',
        japanese: '泣いてもいいよ。',
        korean: '울어도 괜찮아.',
      },
      {
        responseId: 'despair_situation_response_2',
        responseImage:
          'assets/images/public/despair/despair_situation_response_2.webp',
        japanese: '少し休むのも大切だよ。',
        korean: '조금 쉬는 것도 중요해.',
      },
    ],
  },

  // 열정 테마 대화
  {
    id: 'passion_situation',
    theme: '열정',
    situationImage: 'assets/images/public/passion/passion_situation.webp',
    question: {
      japanese: '何かに熱中するとき、どんな気持ちになる？',
      korean: '무언가에 열중할 때, 어떤 기분이 들어?',
    },
    userChoice: [
      {
        responseId: 'passion_situation_response_1',
        japanese: '情熱が湧いてくる。',
        korean: '열정이 솟아난다.',
      },
      {
        responseId: 'passion_situation_response_2',
        japanese: '自分をもっと強く感じる。',
        korean: '자신이 더 강해진 느낌이 든다.',
      },
    ],
    response: [
      {
        responseId: 'passion_situation_response_1',
        responseImage:
          'assets/images/public/passion/passion_situation_response_1.webp',
        japanese: 'その気持ち、大切にしてね！',
        korean: '그 마음, 소중히 해!',
      },
      {
        responseId: 'passion_situation_response_2',
        responseImage:
          'assets/images/public/passion/passion_situation_response_2.webp',
        japanese: 'その気持ち、素晴らしいよ！',
        korean: '그 마음, 멋지다!',
      },
    ],
  },

  // 자유와 해방 테마 대화
  {
    id: 'freedom_situation',
    theme: '자유와 해방',
    situationImage: 'assets/images/public/freedom/freedom_situation.webp',
    question: {
      japanese: '自由になったら、何をしたい？',
      korean: '자유로워지면, 무엇을 하고 싶어?',
    },
    userChoice: [
      {
        responseId: 'freedom_situation_response_1',
        japanese: '好きなことを思いっきりする。',
        korean: '좋아하는 일을 마음껏 한다.',
      },
      {
        responseId: 'freedom_situation_response_2',
        japanese: '何も考えずにリラックスする。',
        korean: '아무 생각 없이 편안하게 쉰다.',
      },
    ],
    response: [
      {
        responseId: 'freedom_situation_response_1',
        responseImage:
          'assets/images/public/freedom/freedom_situation_response_1.webp',
        japanese: 'それが一番大事だね！',
        korean: '그게 제일 중요하지!',
      },
      {
        responseId: 'freedom_situation_response_2',
        responseImage:
          'assets/images/public/freedom/freedom_situation_response_2.webp',
        japanese: 'それも最高だね！',
        korean: '그것도 최고야!',
      },
    ],
  },

  // 꿈과 희망 테마 대화
  {
    id: 'dreams_situation',
    theme: '꿈과 희망',
    situationImage: 'assets/images/public/dreams/dreams_situation.webp',
    question: {
      japanese: '夢を追いかけるために、何をするべきだと思う？',
      korean: '꿈을 쫓기 위해서, 무엇을 해야 한다고 생각해?',
    },
    userChoice: [
      {
        responseId: 'dreams_situation_response_1',
        japanese: '信じ続けて挑戦する。',
        korean: '계속 믿고 도전한다.',
      },
      {
        responseId: 'dreams_situation_response_2',
        japanese: '失敗を恐れずに前に進む。',
        korean: '실패를 두려워하지 않고 나아간다.',
      },
    ],
    response: [
      {
        responseId: 'dreams_situation_response_1',
        responseImage:
          'assets/images/public/dreams/dreams_situation_response_1.webp',
        japanese: 'その通り！挑戦は夢を叶えるために大事だね。',
        korean: '맞아! 도전은 꿈을 이루기 위한 중요한 부분이야.',
      },
      {
        responseId: 'dreams_situation_response_2',
        responseImage:
          'assets/images/public/dreams/dreams_situation_response_2.webp',
        japanese: '素晴らしい考えだね！失敗から学ぶことも大切だよ。',
        korean: '멋진 생각이야! 실패에서 배우는 것도 중요하지.',
      },
    ],
  },
];
