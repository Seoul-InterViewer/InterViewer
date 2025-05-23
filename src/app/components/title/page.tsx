import { Title } from "./Title";


export default function page() {
  return (
    <div>
      <Title isSetting={true} isMyQuestion={true} isDetailPage={true} />
    </div>
  );  
}
