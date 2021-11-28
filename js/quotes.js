const quotes = [
  {
    quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
    author: "월트 디즈니",
  },
  {
    quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다",
    author: "존 F. 케네디",
  },
  {
    quote:
      "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다",
    author: "버락 오바마",
  },
  {
    quote: "행동은 모든 성공의 가장 기초적인 핵심이다",
    author: "파블로 피카소",
  },
  {
    quote:
      "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다",
    author: "토마스 에디슨",
  },
  {
    quote: "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다",
    author: "벤자민 프랭클린",
  },
  {
    quote:
      "가장 용감한 행동은 자신에 대해 생각하고 그것을 큰 소리로 외치는 일이다",
    author: "코코 샤넬",
  },
  {
    quote: "나약한 태도는 그 사람 자체도 나약하게 만든다",
    author: "알버트 아인슈타인",
  },
  {
    quote: "태도는 사소한 것이지만 그것이 만드는 차이는 엄청나다",
    author: "윈스턴 처칠",
  },
  {
    quote: "인생이란 공평하지 않다는 사실에 익숙해져라",
    author: "빌 게이츠",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
