import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SidebarAvatar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">User</span>
        <span className="truncate text-xs">user@email.com</span>
      </div>
    </>
  );
};

export default SidebarAvatar;
