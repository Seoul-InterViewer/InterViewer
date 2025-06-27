import { BreadCrumb } from "@/app/components/breadCrumb";
import { settingsData } from "./mock/settingPage.mock";
import { SettingForm } from "./components/settingForm/SettingForm";

export default function SettingsPage() {
  return (
    <main className="w-full flex flex-col gap-7.5 md:pb-30 pb-15 border border-red-200">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "설정", href: "/settings" },
        ]}
      />
      <SettingForm
        defaultNickname={settingsData.nickname}
        defaultEmail={settingsData.email}
        gamePlayCount={settingsData.gamePlayCount}
        gameRank={settingsData.gameRank}
        defaultPassword={settingsData.password}
      />
    </main>
  );
}
