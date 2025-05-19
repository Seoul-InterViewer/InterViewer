import { RadioButton } from "./RadioButton";
import { IRadioItem } from "./radioButton.type";

const datas: IRadioItem[] = [
  { value: "react", txt: "React" },
  { value: "js", txt: "JavaScript" },
  { value: "next", txt: "Next" },
  { value: "node", txt: "Node" },
  { value: "php", txt: "PHP" },
  { value: "java", txt: "JAVA" },
  { value: "python", txt: "Python" },
];

export default function RadioButtonTestPage() {
  return <RadioButton datas={datas} />;
}
