const quotes = [
    {
        quote: "컴퓨터는 쓸모가 없다. 그것은 그냥 대답만 할 수 있다.",
        author: "(Pablo Picasso, 피카소는 92세까지 살았는데 65세에 ENIAC이 등장했다.)",
    },
    {
        quote: "컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 걸 대신 기억해 주기도 하고, 내 맥주를 뺏어 마시지도 않는다.",
        author: "(Paul Leary)",
    },
    {
        quote: "창 밖으로 집어던질 수 없는 컴퓨터는 절대 믿지 마라.",
        author: "(Steve Wozniak, 애플 공동창업자)",
    },
    {
        quote: "하드웨어 : 사람이 발로 걷어찰 수 있는 부분",
        author: "(Jeff Pesis, 프로그래머)",
    },
    {
        quote: "2038년 1월 19일 오전 3시 14분 07초, - Unix 세상의 끝",
        author: "(1970년 1월 1일 이후 2의 32승이 되는 때이기 때문에)",
    },
    {
        quote: "진정한 혁신이란 시장을 만들 수는 있지만 소유할 힘은 없는, 작은 스타트업으로부터 일어난다.",
        author: "(Timm Martin, 게임 개발자)",
    },
    {
        quote: "소프트웨어 산업의 가장 놀라운 성과는 하드웨어 산업이 이루어 놓은 성과들을 착실하게 갉아 먹고 있다는 것이다.",
        author: "(Henry Petroski, 실패 분석으로 유명한 엔지니어)",
    },
    {
        quote: "컴퓨터는 어떤 바보라도 사용할 수 있다. 그래서 많은 사람들이 컴퓨터를 사용한다.",
        author: "(Ted Nelson, HTML을 만든 사회 과학자)",
    },
    {
        quote: "고객을 “유저”라고 부르는 딱 두 개의 산업이 있다. - 마약, IT",
        author: "(Edward Tufte, 데이터 시각화의 선구자)",
    },
    {
        quote: "우리는 프로그래머 3대 미덕을 잘 알고 있다. - 게으름, 괴팍함, 그리고 자만심.",
        author: "(Larry Wall, Perl 언어의 창시자)",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;