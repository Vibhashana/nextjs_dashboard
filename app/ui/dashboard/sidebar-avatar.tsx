import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SidebarAvatar = async () => {
  const session = await auth();

  return (
    <>
      <Avatar className="size-8">
        <AvatarImage src={session?.user?.image || undefined} />
        <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{session?.user?.name}</span>
        <span className="truncate text-xs">{session?.user?.email}</span>
      </div>
    </>
  );
};

export default SidebarAvatar;
