
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
import { Spinner } from '@/components/ui/spinner';

interface Props {
    token: string;
    email: string;
    passwordRules: string;
}

export default function ResetPassword({
                                          token,
                                          email,
                                          passwordRules,
                                      }: Props) {
    return (
        <>
            <Head title="Reset Password | The Taste of Inspiration" />

            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f3ec] px-5 py-16 text-[#25221f] sm:px-8">
                {/* Decorative background */}
                <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full border border-[#8a6a48]/10" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full border border-[#8a6a48]/10" />

                <div className="relative z-10 w-full max-w-xl">
                    {/* Back to login */}
                    <Link
                        href="/login"
                        className="group mb-12 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:text-[#25221f]"
                    >
                        <ArrowLeft
                            size={16}
                            strokeWidth={1.5}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        Back to Login
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
                            Account Security
                        </p>

                        <h1 className="font-serif text-5xl font-light leading-[1.08] tracking-[-0.045em] sm:text-6xl">
                            A new
                            <span className="block italic text-[#8a6a48]">
                                password.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-[#746b61]">
                            Choose a strong new password to restore secure
                            access to your account.
                        </p>
                    </div>

                    {/* Password reset form */}
                    <div className="border border-[#d9cec0] bg-[#fffdf9] p-7 shadow-[0_20px_70px_rgba(70,55,40,0.05)] sm:p-10">
                        <Form
                            action="/reset-password"
                            method="post"
                            transform={(data) => ({
                                ...data,
                                token,
                                email,
                            })}
                            resetOnSuccess={[
                                'password',
                                'password_confirmation',
                            ]}
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
                                                value={email}
                                                readOnly
                                                className="w-full border border-[#d9cec0] bg-[#f3eee7] py-4 pl-12 pr-4 text-sm text-[#746b61] outline-none"
                                            />
                                        </div>

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* New password */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62584c]"
                                        >
                                            New Password
                                        </label>

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
                                                autoFocus
                                                autoComplete="new-password"
                                                placeholder="Enter a new password"
                                                passwordrules={passwordRules}
                                                className="w-full border-[#d9cec0] bg-[#fdfbf7] pl-12 focus:border-[#8a6a48]"
                                            />
                                        </div>

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Confirm password */}
                                    <div>
                                        <label
                                            htmlFor="password_confirmation"
                                            className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62584c]"
                                        >
                                            Confirm Password
                                        </label>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#8a6a48]"
                                            />

                                            <PasswordInput
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                required
                                                autoComplete="new-password"
                                                placeholder="Repeat your new password"
                                                passwordrules={passwordRules}
                                                className="w-full border-[#d9cec0] bg-[#fdfbf7] pl-12 focus:border-[#8a6a48]"
                                            />
                                        </div>

                                        <InputError
                                            message={errors.password_confirmation}
                                            className="mt-2"
                                        />
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
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                Save New Password
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
                            Choose a unique password that you do not use
                            for any other account.
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
