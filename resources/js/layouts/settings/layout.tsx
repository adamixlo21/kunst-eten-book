import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import {
    LockKeyhole,
    Palette,
    User,
} from 'lucide-react';

const settingsItems = [
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
    {
        title: 'Weergave',
        href: '/settings/appearance',
        icon: Palette,
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-full bg-[#f7f3ec]">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                    <aside>
                        <div className="border border-stone-300 bg-[#efe8dd] p-4">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Account
                            </p>

                            <nav className="space-y-2">
                                {settingsItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-3 px-3 py-2.5 text-sm text-stone-800 transition hover:bg-stone-200"
                                        >
                                            <Icon size={16} />
                                            <span>{item.title}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
