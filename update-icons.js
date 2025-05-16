const fs = require("fs");
const path = require("path");

// SVG 파일들이 있는 디렉토리
const SVG_DIR = path.join(__dirname, "public/assets/icons");
// 출력할 React 컴포넌트 파일
const OUTPUT_FILE = path.join(__dirname, "src/app/components/icon/icon.tsx");

// 아이콘 이름을 카멜 케이스로 변환하는 함수
function toCamelCase(name) {
  return name
    .replace(/[-_]([a-z])/g, (g) => g[1].toUpperCase())
    .replace(/^([A-Z])/, (g) => g[0].toLowerCase());
}

// 아이콘 이름을 파스칼 케이스로 변환하는 함수
function toPascalCase(name) {
  name = toCamelCase(name);
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// SVG 파일을 읽어서 React 컴포넌트로 변환
function convertSvgToReactComponent(svgPath, componentName) {
  const svgContent = fs.readFileSync(svgPath, "utf8");

  // SVG 속성 추출
  const widthMatch = svgContent.match(/width="([^"]+)"/);
  const heightMatch = svgContent.match(/height="([^"]+)"/);
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);

  const width = widthMatch ? widthMatch[1] : "24";
  const height = heightMatch ? heightMatch[1] : "24";
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  // fill="black" 또는 다른 색상을 "currentColor"로 변경
  let reactSvg = svgContent
    .replace(
      /<svg[^>]*>/,
      `<svg\n    width="${width}"\n    height="${height}"\n    viewBox="${viewBox}"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    {...props}\n  >`,
    )
    .replace(/fill="[^"]+"/g, 'fill="currentColor"')
    .replace(/<\/svg>/, "</svg>");

  // 단일 색상이 아닌 아이콘(예: Google 로고)은 건너뜀
  if (
    componentName === "GoogleIcon" ||
    componentName === "CsIcon" ||
    componentName === "TypescriptIcon"
  ) {
    reactSvg = svgContent.replace(
      /<svg[^>]*>/,
      `<svg\n    width="${width}"\n    height="${height}"\n    viewBox="${viewBox}"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    {...props}\n  >`,
    );
  }

  // React 컴포넌트 형식으로 변환
  const reactComponent = `const ${componentName} = (props: SVGProps<SVGSVGElement>) => (\n  ${reactSvg}\n);\n`;

  return reactComponent;
}

// 모든 SVG 파일 처리
async function processAllSvgFiles() {
  const svgFiles = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith(".svg"));
  const components = [];
  const iconNames = [];

  for (const svgFile of svgFiles) {
    const name = path.basename(svgFile, ".svg");
    const componentName = `${toPascalCase(name)}Icon`;
    const svgPath = path.join(SVG_DIR, svgFile);

    const component = convertSvgToReactComponent(svgPath, componentName);
    components.push(component);
    iconNames.push({ name: toCamelCase(name), component: componentName });
  }

  // 결과 출력
  console.log("변환된 컴포넌트:", components.length);
  console.log("아이콘 이름:", iconNames.map((i) => i.name).join(", "));

  return { components, iconNames };
}

// 아이콘 컴포넌트 출력 파일 생성
processAllSvgFiles();

console.log("모든 아이콘 컴포넌트가 생성되었습니다.");
