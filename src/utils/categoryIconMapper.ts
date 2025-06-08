import CATEGORY_ICONS from "@/constants/categoryIcons";

const categoryIconMapper = (category: string) => {
  // 추후 DB에서 카테고리 목록을 가져와 이를 객체로 매핑하는 식으로 사용할 예정
  return CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
};

export default categoryIconMapper;
