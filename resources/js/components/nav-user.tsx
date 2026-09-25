import { Link, router, usePage } from '@inertiajs/react';
import {
    ChevronUp,
    LogOut,
    Shield,
    User,
} from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

export function NavUser() {
    const { auth } = usePage().props as {
        auth: {
            user: {
                name: string;
                email: string;
            };
        };
    };

    const logout = () => {
        router.post('/logout');
    };

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="text-stone-900 hover:bg-stone-200 data-[state=open]:bg-stone-200"
                        >
                            <div className="flex min-w-0 flex-1 flex-col text-left">
                                <span className="truncate text-sm font-medium">
                                    {auth.user.name}
                                </span>

                                <span className="truncate text-xs text-stone-500">
                                    {auth.user.email}
                                </span>
                            </div>

                            <ChevronUp className="ml-auto size-4 text-stone-500" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        side="top"
                        align="end"
                        className="w-64 border-stone-300 bg-[#fdfcf9]"
                    >
                        <div className="px-3 py-2">
                            <p className="text-sm font-medium text-stone-900">
                                {auth.user.name}
                            </p>

                            <p className="mt-1 text-xs text-stone-500">
                                {auth.user.email}
                            </p>
                        </div>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link
                                href="/settings/profile"
                                className="flex cursor-pointer items-center gap-2"
                            >
                                <User size={16} />
                                Profiel
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link
                                href="/settings/security"
                                className="flex cursor-pointer items-center gap-2"
                            >
                                <Shield size={16} />
                                Wachtwoord
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={logout}
                            className="cursor-pointer text-red-600 focus:text-red-700"
                        >
                            <LogOut size={16} />
                            Uitloggen
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
