
import { Form, Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    LockKeyhole,
    Mail,
    ShieldCheck,
} from 'lucide-react';

import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Spinner } from '@/components/ui/spinner';

interface Props {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({
                                  status,
                                  canResetPassword,
                              }: Props) {
    return (
        <>
            <Head title="Login | The Taste of Inspiration" />

            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f3ec] px-5 py-16 text-[#25221f] sm:px-8">
                {/* Decorative background */}
                <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full border border-[#8a6a48]/10" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full border border-[#8a6a48]/10" />

                <div className="relative z-10 w-full max-w-xl">
                    {/* Back to website */}
                    <Link
                        href="/"
                        className="group mb-12 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:text-[#25221f]"
                    >
                        <ArrowLeft
                            size={16}
                            strokeWidth={1.5}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        Back to Website
                    </Link>

                    {/* Introduction */}
                    <div className="mb-10">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-px w-10 bg-[#8a6a48]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </span>
                        </div>

                        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#8a6a48]">
                            Private Administration
                        </p>

                        <h1 className="font-serif text-5xl font-light leading-[1.08] tracking-[-0.045em] sm:text-6xl">
                            Welcome
                            <span className="block italic text-[#8a6a48]">
                                back.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-[#746b61]">
                            Sign in to access your private dashboard and manage
                            orders, artworks, and messages.
                        </p>
                    </div>

                    {/* Login form */}
                    <div className="border border-[#d9cec0] bg-[#fffdf9] p-7 shadow-[0_20px_70px_rgba(70,55,40,0.05)] sm:p-10">
                        {status && (
                            <div
                                role="status"
                                className="mb-7 border border-[#b7c7ab] bg-[#edf3e9] px-4 py-3 text-sm leading-6 text-[#496044]"
                            >
                                {status}
                            </div>
                        )}

                        <Form
                            action="/login"
                            method="post"
                            resetOnSuccess={['password']}
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62584c]"
                                        >
                                            Email Address
                                        </label>

                                        <div className="relative">
                                            <Mail
                                                size={18}
                                                strokeWidth={1.5}
                                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6a48]"
                                            />

                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                autoComplete="email"
                                                placeholder="your@email.com"
                                                className="w-full border border-[#d9cec0] bg-[#fdfbf7] py-4 pl-12 pr-4 text-sm text-[#25221f] outline-none transition-colors placeholder:text-[#a59a8d] focus:border-[#8a6a48] focus:bg-white"
                                            />
                                        </div>

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                                            <label
                                                htmlFor="password"
                                                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62584c]"
                                            >
                                                Password
                                            </label>

                                            {canResetPassword && (
                                                <Link
                                                    href="/forgot-password"
                                                    className="text-xs font-medium text-[#8a6a48] transition-colors hover:text-[#25221f]"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#8a6a48]"
                                            />

                                            <PasswordInput
                                                id="password"
                                                name="password"
                                                required
                                                autoComplete="current-password"
                                                placeholder="Enter your password"
                                                className="w-full border-[#d9cec0] bg-[#fdfbf7] pl-12 focus:border-[#8a6a48]"
                                            />
                                        </div>

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Remember me */}
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                        />

                                        <label
                                            htmlFor="remember"
                                            className="cursor-pointer text-xs text-[#746b61]"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group flex w-full items-center justify-center gap-3 bg-[#25221f] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign In
                                                <ArrowRight
                                                    size={16}
                                                    strokeWidth={1.5}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </Form>
                    </div>

                    {/* Security note */}
                    <div className="mt-8 flex items-start gap-3 border-t border-[#8a6a48]/20 pt-6">
                        <ShieldCheck
                            size={17}
                            strokeWidth={1.5}
                            className="mt-0.5 shrink-0 text-[#8a6a48]"
                        />

                        <p className="text-xs leading-6 text-[#746b61]">
                            This is a private administration area, accessible
                            only to authorized users.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#8a6a48]/20 pt-5">
                        <Link
                            href="/"
                            className="font-serif text-lg font-light tracking-tight text-[#25221f] transition-colors hover:text-[#8a6a48]"
                        >
                            The Taste of Inspiration
                        </Link>

                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]">
                            Food · Art · Inspiration
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
}
