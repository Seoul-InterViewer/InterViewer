// "use client";

// import React from "react";
// import { tagVariants } from "./tag.variants";
// import ITagProps from "./tag.type";
// import { tagData } from "./tag.constants";

// // 상단에 폰트 매핑 정의
// const fontMap = {
//   card: "var(--font-regular-18)",
//   level: "var(--font-sb-14)",
//   category: "var(--font-sb-14)",
//   default: "var(--font-sb-12)",
// };

// // 단일 태그 컴포넌트
// const Tag = ({ type = "default", hover, selected, onClick, className, children }: ITagProps) => {
//   // 태그 데이터에 포함된 타입인 경우 && children이 없는 경우
//   if (type in tagData && !children) {
//     const tagKey = type as keyof typeof tagData;

//     return (
//       <div>
//         <div style={{ marginBottom: 8, fontWeight: 600 }}>{tagData[tagKey].label}</div>
//         <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//           {tagData[tagKey].items.map((item) => (
//             <div
//               key={item}
//               className={tagVariants({
//                 type,
//                 hover,
//                 selected: selected === item,
//               })}
//               onClick={(e) => {
//                 if (onClick) {
//                   // @ts-ignore
//                   onClick(item);
//                 }
//               }}
//               // card 타입일 때만 특별한 폰트 스타일 적용
//               style={{ font: fontMap[type] || fontMap.default }}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // 일반 태그도 card 타입이면 폰트 변경
//   return (
//     <div
//       className={className ?? tagVariants({ type, hover, selected: !!selected })}
//       onClick={(e) => {
//         if (onClick) {
//           // @ts-ignore
//           onClick();
//         }
//       }}
//       style={{ font: fontMap[type] || fontMap.default }}
//     >
//       {children}
//     </div>
//   );
// };

// export default Tag;
