import { Button, buttonVariants } from "@/app/components/button";
import { useRouter } from "next/navigation";

export const GameCreateButtons = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between gap-4">
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "black" })}
        onClick={() => router.back()}
      >
        취소
      </Button>
      <Button
        type="button"
        className={buttonVariants({ size: "lg", color: "yellow" })}
        onClick={() => router.push("/games/create/select-blanks")}
      >
        다음으로
      </Button>
    </div>
  );
};
