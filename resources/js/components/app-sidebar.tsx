import { Link } from '@inertiajs/react';
import {
    LayoutDashboard,
    ShoppingBag,
    User,
    LockKeyhole,
    ExternalLink,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import type { NavItem } from '@/types';

export function AppSidebar() {
    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/admin',
            icon: LayoutDashboard,
        },
        {
            title: 'Bestellingen',
            href: '/admin/orders',
            icon: ShoppingBag,
        },
        {
            title: 'Profiel',
            href: '/settings/profile',
            icon: User,
        },
        {
            title: 'Wachtwoord',
            href: '/settings/security',
            icon: LockKeyhole,
        },
    ];

    return (
        <Sidebar
            collapsible="icon"
            className="
                border-r border-stone-300
                bg-[#efe8dd]
                text-stone-900

                dark:border-stone-700
                dark:bg-stone-900
                dark:text-stone-100
            "
        >
            <SidebarHeader
                className="
                    border-b border-stone-300
                    bg-[#efe8dd]
                    px-3 py-4
                    text-stone-900

                    dark:border-stone-700
                    dark:bg-stone-900
                    dark:text-stone-100
                "
            >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="
                                text-stone-900
                                hover:bg-stone-200
                                hover:text-stone-900

                                dark:text-stone-100
                                dark:hover:bg-stone-800
                                dark:hover:text-white
                            "
                        >
                            <Link href="/admin">
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48] dark:text-[#c9a87e]">
                                        Kunst Eten
                                    </span>

                                    <span className="text-xs text-stone-500 dark:text-stone-400">
                                        Administratie
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent
                className="
                    bg-[#efe8dd]
                    px-2 py-4
                    text-stone-900

                    dark:bg-stone-900
                    dark:text-stone-100
                "
            >
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter
                className="
                    border-t border-stone-300
                    bg-[#efe8dd]
                    p-3
                    text-stone-900

                    dark:border-stone-700
                    dark:bg-stone-900
                    dark:text-stone-100
                "
            >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="
                                text-stone-900
                                hover:bg-stone-200
                                hover:text-stone-900

                                dark:text-stone-100
                                dark:hover:bg-stone-800
                                dark:hover:text-white
                            "
                        >
                            <Link href="/">
                                <ExternalLink size={17} />
                                <span>Website bekijken</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
