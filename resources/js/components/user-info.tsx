
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import type { User } from '@/types';

interface UserInfoProps {
    user: User | null;
    showEmail?: boolean;
}

export function UserInfo({
                             user,
                             showEmail = false,
                         }: UserInfoProps) {
    const getInitials = useInitials();

    if (!user) {
        return null;
    }

    const showAvatar = Boolean(user.avatar);

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-lg">
                {showAvatar && (
                    <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                    />
                )}

                <AvatarFallback className="rounded-lg text-black dark:text-white">
                    {getInitials(user.name)}
                </AvatarFallback>
            </Avatar>

            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                    {user.name}
                </span>

                {showEmail && (
                    <span className="text-muted-foreground truncate text-xs">
                        {user.email}
                    </span>
                )}
            </div>
        </>
    );
}
