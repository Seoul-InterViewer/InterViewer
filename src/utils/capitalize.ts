const capitalize = (string: string) => {
  if (string === "nextjs") return "NextJS";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default capitalize;
