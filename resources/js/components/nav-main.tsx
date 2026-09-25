import { Link } from '@inertiajs/react';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';

export function NavMain({ items }: { items: NavItem[] }) {
    const { isCurrentOrParentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel className="px-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
                Beheer
            </SidebarGroupLabel>

            <SidebarMenu className="mt-2 space-y-1">
                {items.map((item) => {
                    const active = isCurrentOrParentUrl(item.href);

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={active}
                                tooltip={{ children: item.title }}
                                className={`
                                    text-stone-700
                                    hover:bg-stone-200
                                    hover:text-stone-950

                                    dark:text-stone-300
                                    dark:hover:bg-stone-800
                                    dark:hover:text-white

                                    data-[active=true]:bg-stone-900
                                    data-[active=true]:text-white

                                    dark:data-[active=true]:bg-[#8a6a48]
                                    dark:data-[active=true]:text-white
                                `}
                            >
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon size={17} />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
