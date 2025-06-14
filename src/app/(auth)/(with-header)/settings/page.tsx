import { BreadCrumb } from "@/app/components/breadCrumb";

export default function SettingsPage() {
  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "설정", href: "/settings" },
        ]}
      />
    </div>
  );
}
