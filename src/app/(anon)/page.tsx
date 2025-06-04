import { Slider } from "../components/slider";
import { Banner } from "./components/banner";
import { MainCard } from "./components/mainCard";
import { featuredQuestions, mockQuestions } from "./mocks/mainCardData.mock";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <section className="flex flex-col gap-8 mt-[calc(100vh-64px)]">
        <Slider type="mainPageCards">
          {featuredQuestions.map((question) => (
            <MainCard key={question.id} {...question} />
          ))}
        </Slider>
      </section>
    </main>
  );
}
