
import { Link, usePage } from '@inertiajs/react';

import {
    LayoutDashboard,
    ShoppingBag,
    User,
    LockKeyhole,
    ExternalLink,
    Mail,
    Image,
    Gavel,
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
    const { unreadContactCount } = usePage<{
        unreadContactCount: number;
    }>().props;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/admin',
            icon: LayoutDashboard,
        },
        {
            title: 'Orders',
            href: '/admin/orders',
            icon: ShoppingBag,
        },
        {
            title: 'Paintings',
            href: '/admin/paintings',
            icon: Image,
        },
        {
            title: 'Artwork Bids',
            href: '/admin/bids',
            icon: Gavel,
        },
        {
            title: 'Contact Messages',
            href: '/admin/contacts',
            icon: Mail,
            badge: unreadContactCount ?? 0,
        },
        {
            title: 'Profile',
            href: '/settings/profile',
            icon: User,
        },
        {
            title: 'Password',
            href: '/settings/security',
            icon: LockKeyhole,
        },
    ];

    return (
        <Sidebar
            collapsible="icon"
            className="
                border-r border-stone-300
                bg-[#efe8dd] text-stone-900
                dark:border-stone-700
                dark:bg-stone-900 dark:text-stone-100
            "
        >
            <SidebarHeader
                className="
                    border-b border-stone-300
                    bg-[#efe8dd] px-3 py-4
                    text-stone-900
                    dark:border-stone-700
                    dark:bg-stone-900 dark:text-stone-100
                "
            >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="
                                text-stone-900 hover:bg-stone-200
                                hover:text-stone-900
                                dark:text-stone-100
                                dark:hover:bg-stone-800
                                dark:hover:text-white
                            "
                        >
                            <Link href="/admin">
                                <div className="flex min-w-0 flex-col">
                                    <span
                                        className="
                                            truncate font-serif text-sm
                                            font-semibold tracking-tight
                                            text-[#8a6a48]
                                            dark:text-[#c9a87e]
                                        "
                                    >
                                        The Taste of Inspiration
                                    </span>

                                    <span
                                        className="
                                            text-xs text-stone-500
                                            dark:text-stone-400
                                        "
                                    >
                                        Administration
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent
                className="
                    bg-[#efe8dd] px-2 py-4
                    text-stone-900
                    dark:bg-stone-900 dark:text-stone-100
                "
            >
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter
                className="
                    border-t border-stone-300
                    bg-[#efe8dd] p-3
                    text-stone-900
                    dark:border-stone-700
                    dark:bg-stone-900 dark:text-stone-100
                "
            >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="
                                text-stone-900 hover:bg-stone-200
                                hover:text-stone-900
                                dark:text-stone-100
                                dark:hover:bg-stone-800
                                dark:hover:text-white
                            "
                        >
                            <Link href="/">
                                <ExternalLink size={17} />
                                <span>View Website</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
