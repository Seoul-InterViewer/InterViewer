import { Slider } from "../components/slider";
import { Banner } from "./components/banner";
import { MainCard } from "./components/mainCard";
import { featuredQuestions, mockQuestions } from "./mocks/mainCardData.mock";

const questionCategories = [
  {
    category: "추천",
    questions: featuredQuestions,
  },
  {
    category: "Next.js",
    questions: mockQuestions.next,
  },
  {
    category: "React",
    questions: mockQuestions.react,
  },
  {
    category: "JavaScript",
    questions: mockQuestions.javascript,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <section className="flex flex-col gap-8 mt-200 sm:mt-160 md:mt-[calc(100vh+64px)] ">
        {questionCategories.map((category) => (
          <div className="flex flex-col gap-5" key={`${category.category}-questions`}>
            <h2 className="font-sb-16 md:font-sb-28 font-bold">{`${category.category} 질문`}</h2>
            <Slider type="mainPageCards" slideClassName="!w-full md:!w-104">
              {category.questions.map((question) => (
                <MainCard key={`${question.id}-${category.category}`} {...question} />
              ))}
            </Slider>
          </div>
        ))}
      </section>
    </main>
  );
}
