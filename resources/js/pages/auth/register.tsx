
import { Form, Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    LockKeyhole,
    Mail,
    User,
} from 'lucide-react';

import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Spinner } from '@/components/ui/spinner';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <>
            <Head title="Register | The Taste of Inspiration" />

            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f3ec] px-5 py-16 text-[#25221f] sm:px-8">
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

                    {/* Header */}
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
                            Create your
                            <span className="block italic text-[#8a6a48]">
                                account.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-[#746b61]">
                            Create an account to access the administration
                            area of The Taste of Inspiration.
                        </p>
                    </div>

                    {/* Registration form */}
                    <div className="border border-[#d9cec0] bg-[#fffdf9] p-7 shadow-[0_20px_70px_rgba(70,55,40,0.05)] sm:p-10">
                        <Form
                            action="/register"
                            method="post"
                            resetOnSuccess={[
                                'password',
                                'password_confirmation',
                            ]}
                            disableWhileProcessing
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className={labelClass}
                                        >
                                            Full Name
                                        </label>

                                        <div className="relative">
                                            <User
                                                size={18}
                                                strokeWidth={1.5}
                                                className={iconClass}
                                            />

                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                required
                                                autoFocus
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                className={inputClass}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className={labelClass}
                                        >
                                            Email Address
                                        </label>

                                        <div className="relative">
                                            <Mail
                                                size={18}
                                                strokeWidth={1.5}
                                                className={iconClass}
                                            />

                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoComplete="email"
                                                placeholder="your@email.com"
                                                className={inputClass}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className={labelClass}
                                        >
                                            Password
                                        </label>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className={`${iconClass} z-10`}
                                            />

                                            <PasswordInput
                                                id="password"
                                                name="password"
                                                required
                                                autoComplete="new-password"
                                                placeholder="Create a password"
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
                                            className={labelClass}
                                        >
                                            Confirm Password
                                        </label>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className={`${iconClass} z-10`}
                                            />

                                            <PasswordInput
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                required
                                                autoComplete="new-password"
                                                placeholder="Repeat your password"
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
                                                Creating Account...
                                            </>
                                        ) : (
                                            <>
                                                Create Account

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

                    {/* Login link */}
                    <p className="mt-7 text-center text-sm text-[#746b61]">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="font-medium text-[#8a6a48] transition-colors hover:text-[#25221f]"
                        >
                            Sign In
                        </Link>
                    </p>

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

const labelClass =
    'mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62584c]';

const iconClass =
    'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6a48]';

const inputClass =
    'w-full border border-[#d9cec0] bg-[#fdfbf7] py-4 pl-12 pr-4 text-sm text-[#25221f] outline-none transition-colors placeholder:text-[#a59a8d] focus:border-[#8a6a48] focus:bg-white';
