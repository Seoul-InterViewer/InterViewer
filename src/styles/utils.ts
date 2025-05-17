export function rem(px: number) {
  return `${px / 16}rem`;
}

// 기본 vh/vw 함수 - 기준 뷰포트 크기를 인자로 받음
export function vh(px: number, viewportHeight: number) {
  return `${(px / viewportHeight) * 100}vh`;
}

export function vw(px: number, viewportWidth: number) {
  return `${(px / viewportWidth) * 100}vw`;
}
