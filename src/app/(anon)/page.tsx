import { Slider } from "../components/slider";
import { Banner } from "./components/banner";
import { MainCard } from "./components/mainCard";
import { featuredQuestions, mockQuestions } from "./mocks/mainCardData.mock";

const questionCategories = [
  {
    title: "추천 질문",
    questions: featuredQuestions,
    key: "featured-questions",
    idKey: "id",
  },
  {
    title: "Next.js 질문",
    questions: mockQuestions.next,
    key: "next-questions",
    idKey: "next",
  },
  {
    title: "React 질문",
    questions: mockQuestions.react,
    key: "react-questions",
    idKey: "react",
  },
  {
    title: "JavaScript 질문",
    questions: mockQuestions.javascript,
    key: "javascript-questions",
    idKey: "javascript",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <section className="flex flex-col gap-8 mt-200 sm:mt-160 md:mt-[calc(100vh+64px)] ">
        {questionCategories.map((category) => (
          <div className="flex flex-col gap-5" key={category.key}>
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <Slider type="mainPageCards" key={category.key}>
              {category.questions.map((question) => (
                <MainCard key={`${question.id}-${category.idKey}`} {...question} />
              ))}
            </Slider>
          </div>
        ))}
      </section>
    </main>
  );
}
