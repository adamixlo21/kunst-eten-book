
import { Link, usePage } from '@inertiajs/react';
import {
    ArrowUpRight,
    Gavel,
    Image as ImageIcon,
    LayoutDashboard,
    Mail,
    Menu,
    ShoppingBag,
} from 'lucide-react';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { UserMenuContent } from '@/components/user-menu-content';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';

import type { BreadcrumbItem, NavItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

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
        icon: ImageIcon,
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
    },
];

export function AppHeader({ breadcrumbs = [] }: Props) {
    const { auth } = usePage().props;
    const getInitials = useInitials();
    const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();

    return (
        <>
            <header className="border-b border-[#8a6a48]/20 bg-[#f7f3ec] text-[#25221f]">
                <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6">

                    {/* MOBILE NAVIGATION */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Open navigation"
                                    className="text-[#25221f] hover:bg-[#eee7dc]"
                                >
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="left"
                                className="flex h-full w-72 flex-col border-[#8a6a48]/20 bg-[#f7f3ec]"
                            >
                                <SheetHeader className="border-b border-[#8a6a48]/20 pb-6 text-left">
                                    <SheetTitle className="font-serif text-xl text-[#25221f]">
                                        The Taste of Inspiration
                                    </SheetTitle>

                                    <p className="text-xs uppercase tracking-[0.18em] text-[#8a6a48]">
                                        Administration
                                    </p>
                                </SheetHeader>

                                <nav
                                    className="flex flex-1 flex-col gap-2 py-6"
                                    aria-label="Mobile admin navigation"
                                >
                                    {mainNavItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className={cn(
                                                    'flex items-center gap-3 px-4 py-3 text-sm font-medium transition',
                                                    isCurrentUrl(item.href)
                                                        ? 'bg-[#eee7dc] text-[#8a6a48]'
                                                        : 'text-[#62584c] hover:bg-[#eee7dc]',
                                                )}
                                            >
                                                {Icon && (
                                                    <Icon className="size-4" />
                                                )}

                                                {item.title}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <Link
                                    href="/"
                                    className="mb-4 flex items-center gap-2 border-t border-[#8a6a48]/20 px-4 pt-6 text-sm text-[#8a6a48]"
                                >
                                    <ArrowUpRight className="size-4" />
                                    View Website
                                </Link>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* BRAND */}
                    <Link
                        href="/admin"
                        prefetch
                        className="min-w-0 shrink-0"
                    >
                        <span className="block truncate font-serif text-lg font-medium text-[#25221f] sm:text-xl">
                            The Taste of
                            <span className="italic text-[#8a6a48]">
                                {' '}Inspiration
                            </span>
                        </span>

                        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            Administration
                        </span>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav
                        className="ml-5 hidden min-w-0 flex-1 items-center lg:flex"
                        aria-label="Admin navigation"
                    >
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                {mainNavItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <NavigationMenuItem
                                            key={item.title}
                                            className="relative"
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    whenCurrentUrl(
                                                        item.href,
                                                        'bg-[#eee7dc] text-[#8a6a48]',
                                                    ),
                                                    'gap-2 bg-transparent px-3 text-xs text-[#62584c] transition hover:bg-[#eee7dc] hover:text-[#25221f]',
                                                )}
                                            >
                                                {Icon && (
                                                    <Icon className="size-4" />
                                                )}

                                                {item.title}
                                            </Link>

                                            {isCurrentUrl(item.href) && (
                                                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#8a6a48]" />
                                            )}
                                        </NavigationMenuItem>
                                    );
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* ACCOUNT MENU */}
                    <div className="ml-auto flex shrink-0 items-center gap-3">
                        <Link
                            href="/"
                            className="hidden items-center gap-2 text-xs font-medium text-[#8a6a48] transition hover:text-[#25221f] xl:flex"
                        >
                            View Website
                            <ArrowUpRight className="size-4" />
                        </Link>

                        {auth.user && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        aria-label="Open account menu"
                                        className="size-10 rounded-full p-1 hover:bg-[#eee7dc]"
                                    >
                                        <Avatar className="size-9 overflow-hidden rounded-full">
                                            <AvatarImage
                                                src={auth.user.avatar}
                                                alt={auth.user.name}
                                            />

                                            <AvatarFallback className="bg-[#eee7dc] text-xs font-semibold text-[#8a6a48]">
                                                {getInitials(auth.user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    className="w-64 border-[#8a6a48]/20 bg-[#fdfcf9]"
                                >
                                    <UserMenuContent user={auth.user} />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </div>
            </header>

            {/* BREADCRUMBS */}
            {breadcrumbs.length > 1 && (
                <div className="border-b border-[#8a6a48]/15 bg-[#eee7dc]/40">
                    <div className="mx-auto flex h-12 max-w-7xl items-center px-4 text-sm text-[#746b61] sm:px-6">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
