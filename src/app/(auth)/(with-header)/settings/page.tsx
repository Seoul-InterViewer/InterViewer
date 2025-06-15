import { BreadCrumb } from "@/app/components/breadCrumb";
import { settingsData } from "./mock/settingPage.mock";
import { InputLine } from "./components/inputLIne/InputLine";

export default function SettingsPage() {
  return (
    <main className="w-full flex flex-col gap-7.5 md:pb-30 pb-15 border border-red-200">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "설정", href: "/settings" },
        ]}
      />
      <div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold-32 md:font-bold-48">{settingsData.nickname}</h1>
          <div>
            <div className="w-32.5 md:w-46 flex justify-between items-center">
              <span className="font-sb-14 md:font-sb-18 text-sub-text">게임 플레이 횟수</span>
              <span className="font-sb-14 md:font-sb-18 text-font">
                {settingsData.gamePlayCount}
              </span>
            </div>
            <div className="w-32.5 md:w-46 flex justify-between items-center">
              <span className="font-sb-14 md:font-sb-18 text-sub-text">게임 랭킹</span>
              <span className="font-sb-14 md:font-sb-18 text-font">#{settingsData.gameRank}</span>
            </div>
          </div>
        </div>
        <span className="inline-block w-full h-0.25 mt-5 mb-12.5 md:my-15 bg-black/20"></span>
        <div className="w-full flex flex-col gap-10">
          <InputLine
            labelName="닉네임"
            inputName="nickName"
            nickname={settingsData.nickname}
            placeholder="변경할 닉네임을 입력해주세요"
            explanation="질문 작성 시, 작성자를 나타내는 이름입니다."
          />
          <InputLine
            labelName="이메일 주소"
            inputName="email"
            nickname={settingsData.email}
            placeholder="변경할 이메일 주소를 입력해주세요"
            explanation="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
          />
        </div>
      </div>
    </main>
  );
}
