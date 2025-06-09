import CATEGORY_ICONS from "@/constants/categoryIcons";
import { CategoryIconMapperType } from "@/types/utils/categoryIconMapper.type";

const categoryIconMapper = (type: CategoryIconMapperType, category: string) => {
  // 추후 DB에서 카테고리 목록을 가져와 이를 객체로 매핑하는 식으로 사용할 예정
  return CATEGORY_ICONS[type][category as keyof typeof CATEGORY_ICONS[typeof type]];
};

export default categoryIconMapper;
