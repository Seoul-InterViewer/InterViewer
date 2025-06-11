import { tv } from "tailwind-variants";

export const createVariants = tv({
  slots: {
    questionTitleWrapper: "flex flex-col gap-11 mb-20 border-b border-gray-200 pb-20",
    questionInput:
      "pl-3 bg-gray-100/50 h-10 md:h-20 font-bold-32 md:font-bold-56 text-color-font placeholder:text-font placeholder:opacity-100 focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-300 outline-none focus:outline-none",
    tagDropdown: "absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md z-10",
    questionInputWrapper: "w-[100%] h-25 md:h-54 border-border border flex flex-col gap-2.5",
    questionTextarea:
      "w-full h-full px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd] resize-none placeholder:text-sub-text focus:outline-none font-regular-14 md:font-regular-18",
    questionTextareaCount: "font-regular-14 md:font-regular-18 text-black/50",
    codePenInputWrapper: "w-[100%] h-11 md:h-14 border-border border flex flex-col gap-2.5",
    codePenTextarea:
      "w-full h-full px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd] resize-none placeholder:text-sub-text focus:outline-none font-regular-14 md:font-regular-18",
    fileUploadTitleWrapper: "flex gap-8 justify-between md:justify-start mb-5",
    imageSlideWrapper: "w-88 h-130 w-108 h-130 md:h-140 rounded-xl overflow-hidden",
    fileDetailWrapper:
      "hidden md:block w-194 h-140 rounded-xl border border-gray-200 overflow-y-auto p-4",
    fileDetailIcon: "w-1 h-1 bg-gray-400 rounded-full",
    fileDetailThumbnail:
      "w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center relative",
  },
});
