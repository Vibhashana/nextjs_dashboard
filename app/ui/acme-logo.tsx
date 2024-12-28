import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function AcmeLogo() {
  return (
    <>
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <GlobeAltIcon className="size-5 rotate-[15deg]" />
      </div>
      <div className="flex-1 text-left leading-tight ml-3">
        <span className="truncate text-xl">Acme</span>
      </div>
    </>
  );
}
