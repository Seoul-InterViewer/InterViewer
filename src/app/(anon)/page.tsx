import { Slider } from "../components/slider";
import { Banner } from "./components/banner";
import { MainCard } from "./components/mainCard";
import { featuredQuestions, mockQuestions } from "./mocks/mainCardData.mock";

export default function Home() {
  console.log(mockQuestions);
  return (
    <main className="flex flex-col">
      <Banner />
      <section className="flex flex-col gap-8 mt-[calc(100vh+64px)]">
        <div>
          <h2 className="text-2xl font-bold">추천 질문</h2>
          <Slider type="mainPageCards" key={`featured-questions`}>
            {featuredQuestions.map((question) => (
              <MainCard key={question.id} {...question} />
            ))}
          </Slider>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Next.js 질문</h2>
          <Slider type="mainPageCards" key={`next-questions`}>
            {mockQuestions.next.map((question) => (
              <MainCard key={`${question.id}-next`} {...question} />
            ))}
          </Slider>
        </div>
        <div>
          <h2 className="text-2xl font-bold">React 질문</h2>
          <Slider type="mainPageCards" key={`react-questions`}>
            {mockQuestions.react.map((question) => (
              <MainCard key={`${question.id}-react`} {...question} />
            ))}
          </Slider>
        </div>
        <div>
          <h2 className="text-2xl font-bold">JavaScript 질문</h2>
          <Slider type="mainPageCards" key={`javascript-questions`}>
            {mockQuestions.javascript.map((question) => (
              <MainCard key={`${question.id}-javascript`} {...question} />
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
}
