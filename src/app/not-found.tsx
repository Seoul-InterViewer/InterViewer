import { Header } from "./components/header";
import NotFound from "./components/NotFound/NotFound";

export default function NotFoundPage() {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className="flex items-center justify-center h-screen pt-20">
        <NotFound />
      </main>
    </>
  );
}
