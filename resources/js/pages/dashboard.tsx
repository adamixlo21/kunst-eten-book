
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    ShoppingBag,
    User,
    LockKeyhole,
    Globe,
} from 'lucide-react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-full bg-[#f7f3ec] p-5 text-[#25221f] sm:p-8 lg:p-10">
                <div className="mx-auto max-w-7xl">

                    {/* Page heading */}
                    <div className="mb-10">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-px w-8 bg-[#8a6a48]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>
                        </div>

                        <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                            Your Dashboard
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#746b61]">
                            Manage your website, orders, and account from one
                            place.
                        </p>
                    </div>

                    {/* Dashboard navigation cards */}
                    <div className="grid gap-5 md:grid-cols-3">

                        {/* Orders */}
                        <Link
                            href="/admin/orders"
                            className="group border border-[#d9cec0] bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6a48] hover:shadow-[0_15px_40px_rgba(70,55,40,0.06)] sm:p-8"
                        >
                            <ShoppingBag
                                size={25}
                                strokeWidth={1.5}
                                className="text-[#8a6a48]"
                            />

                            <h2 className="mt-7 font-serif text-2xl font-light">
                                Orders
                            </h2>

                            <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#746b61]">
                                View and manage all customer orders and
                                purchases.
                            </p>

                            <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#25221f]">
                                View Orders

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>

                        {/* Profile */}
                        <Link
                            href="/settings/profile"
                            className="group border border-[#d9cec0] bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6a48] hover:shadow-[0_15px_40px_rgba(70,55,40,0.06)] sm:p-8"
                        >
                            <User
                                size={25}
                                strokeWidth={1.5}
                                className="text-[#8a6a48]"
                            />

                            <h2 className="mt-7 font-serif text-2xl font-light">
                                Profile
                            </h2>

                            <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#746b61]">
                                Update your personal details and account
                                information.
                            </p>

                            <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#25221f]">
                                Edit Profile

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>

                        {/* Password */}
                        <Link
                            href="/settings/password"
                            className="group border border-[#d9cec0] bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6a48] hover:shadow-[0_15px_40px_rgba(70,55,40,0.06)] sm:p-8"
                        >
                            <LockKeyhole
                                size={25}
                                strokeWidth={1.5}
                                className="text-[#8a6a48]"
                            />

                            <h2 className="mt-7 font-serif text-2xl font-light">
                                Password
                            </h2>

                            <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#746b61]">
                                Change your password and keep your account
                                secure.
                            </p>

                            <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#25221f]">
                                Change Password

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Website link section */}
                    <div className="mt-8 border border-[#d9cec0] bg-[#eee7dc] p-6 sm:p-8">
                        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <Globe
                                        size={17}
                                        strokeWidth={1.5}
                                        className="text-[#8a6a48]"
                                    />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                        Your Website
                                    </p>
                                </div>

                                <h2 className="font-serif text-2xl font-light sm:text-3xl">
                                    The Taste of Inspiration
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[#746b61]">
                                    See your website just as your visitors do.
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="group inline-flex w-full items-center justify-center gap-3 bg-[#25221f] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#8a6a48] sm:w-auto"
                            >
                                View Website

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="mt-10 border-t border-[#d9cec0] pt-6">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]">
                            The Taste of Inspiration · Administration
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
