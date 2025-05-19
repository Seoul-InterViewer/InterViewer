import { DropdownOption } from "./dropdown.type";

export const dropdownData: Record<string, { label: string; options: DropdownOption[] }> = {
  // 신고하기용 드롭다운
  report: {
    label: "신고하기",
    options: [
      { value: "spam", label: "스팸", disabled: false },
      { value: "abuse", label: "욕설/비방", disabled: false },
      { value: "fake", label: "허위정보", disabled: false },
      { value: "copyright", label: "저작권 침해", disabled: false },
      { value: "other", label: "기타", disabled: false },
    ],
  },
  // 직무 선택용 드롭다운
  position: {
    label: "직무",
    options: [
      { value: "frontend", label: "프론트엔드", disabled: false },
      { value: "backend", label: "백엔드", disabled: false },
      { value: "designer", label: "디자이너", disabled: false },
      { value: "devops", label: "DevOps", disabled: false },
      { value: "pm", label: "PM", disabled: false },
      { value: "other", label: "기타", disabled: false },
    ],
  },
};
