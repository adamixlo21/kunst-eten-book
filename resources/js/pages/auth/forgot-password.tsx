
import { Form, Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from 'lucide-react';

import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';

interface Props {
    status?: string;
}

export default function ForgotPassword({ status }: Props) {
    return (
        <>
            <Head title="Forgot Password | The Taste of Inspiration" />

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
                            Account Recovery
                        </p>

                        <h1 className="font-serif text-5xl font-light leading-[1.08] tracking-[-0.045em] sm:text-6xl">
                            A fresh
                            <span className="block italic text-[#8a6a48]">
                                beginning.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-[#746b61]">
                            Forgot your password? Enter your registered email
                            address and we will send you a secure link to
                            restore access to your account.
                        </p>
                    </div>

                    {/* Form */}
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
                            action="/forgot-password"
                            method="post"
                            className="space-y-7"
                        >
                            {({ processing, errors }) => (
                                <>
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

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group flex w-full items-center justify-center gap-3 bg-[#25221f] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Reset Link
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
                        <LockKeyhole
                            size={16}
                            strokeWidth={1.5}
                            className="mt-0.5 shrink-0 text-[#8a6a48]"
                        />
                        <p className="text-xs leading-6 text-[#746b61]">
                            For your security, the password reset link will
                            only be sent to the email address associated
                            with your account.
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
