import { Form, Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    LockKeyhole,
    Mail,
    User,
} from 'lucide-react';

import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <>
            <Head title="Account aanmaken" />

            <main className="min-h-screen bg-[#f7f3ec] text-stone-900">
                <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Left panel */}
                    <section className="relative hidden overflow-hidden border-r border-stone-300 bg-[#ebe2d5] lg:flex lg:flex-col lg:justify-between">
                        <div className="relative z-10 px-14 py-14 xl:px-20">
                            <div className="flex items-center gap-4">
                                <div className="h-px w-10 bg-[#8a6a48]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                    Kunst Eten
                                </p>
                            </div>

                            <div className="mt-20 max-w-xl">
                                <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-400">
                                    Administratie
                                </p>

                                <h1 className="mt-6 text-6xl font-light leading-[0.98] tracking-[-0.04em] xl:text-7xl">
                                    Maak je
                                    <br />
                                    <span className="text-stone-500">
                                        beheeraccount.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-md text-base leading-8 text-stone-600">
                                    Maak een account aan om toegang te krijgen
                                    tot het beheer van Kunst Eten.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 px-14 pb-14 xl:px-20">
                            <div className="grid grid-cols-[90px_1fr] gap-6 border-t border-stone-300 pt-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    02
                                </p>

                                <div>
                                    <p className="text-sm font-medium">
                                        Veilig beheer
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-stone-500">
                                        Gebruik een sterk wachtwoord voor je
                                        beheeraccount.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full border border-[#8a6a48]/10" />
                        <div className="pointer-events-none absolute -right-10 top-40 h-52 w-52 rounded-full border border-[#8a6a48]/10" />
                    </section>

                    {/* Right panel */}
                    <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14 xl:px-20">
                        <div className="w-full max-w-md">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 transition hover:text-[#8a6a48]"
                            >
                                <ArrowLeft size={14} />
                                Terug naar website
                            </Link>

                            <div className="mt-10">
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-8 bg-[#8a6a48]" />

                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                        Kunst Eten
                                    </p>
                                </div>

                                <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
                                    Account aanmaken
                                </h2>

                                <p className="mt-4 text-sm leading-6 text-stone-500">
                                    Vul je gegevens in om een beheeraccount aan
                                    te maken.
                                </p>
                            </div>

                            <div className="mt-9 border border-stone-300 bg-white p-6 shadow-[0_20px_60px_rgba(70,55,40,0.06)] sm:p-8">
                                <Form
                                    {...store.form()}
                                    resetOnSuccess={[
                                        'password',
                                        'password_confirmation',
                                    ]}
                                    disableWhileProcessing
                                    className="space-y-5"
                                >
                                    {({ processing, errors }) => (
                                        <>
                                            {/* Name */}
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="mb-2 block text-sm font-medium"
                                                >
                                                    Naam
                                                </label>

                                                <div className="relative">
                                                    <User
                                                        size={17}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                                    />

                                                    <input
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        required
                                                        autoFocus
                                                        autoComplete="name"
                                                        placeholder="Volledige naam"
                                                        className="w-full border border-stone-300 bg-[#fdfcf9] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-stone-400 focus:border-[#8a6a48] focus:bg-white"
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
                                                    className="mb-2 block text-sm font-medium"
                                                >
                                                    E-mailadres
                                                </label>

                                                <div className="relative">
                                                    <Mail
                                                        size={17}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                                    />

                                                    <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        required
                                                        autoComplete="email"
                                                        placeholder="naam@email.nl"
                                                        className="w-full border border-stone-300 bg-[#fdfcf9] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-stone-400 focus:border-[#8a6a48] focus:bg-white"
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
                                                    className="mb-2 block text-sm font-medium"
                                                >
                                                    Wachtwoord
                                                </label>

                                                <div className="relative">
                                                    <LockKeyhole
                                                        size={17}
                                                        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-stone-400"
                                                    />

                                                    <PasswordInput
                                                        id="password"
                                                        name="password"
                                                        required
                                                        autoComplete="new-password"
                                                        placeholder="Wachtwoord"
                                                        passwordrules={
                                                            passwordRules
                                                        }
                                                        className="w-full border-stone-300 bg-[#fdfcf9] pl-11 focus:border-[#8a6a48]"
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
                                                    className="mb-2 block text-sm font-medium"
                                                >
                                                    Bevestig wachtwoord
                                                </label>

                                                <div className="relative">
                                                    <LockKeyhole
                                                        size={17}
                                                        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-stone-400"
                                                    />

                                                    <PasswordInput
                                                        id="password_confirmation"
                                                        name="password_confirmation"
                                                        required
                                                        autoComplete="new-password"
                                                        placeholder="Herhaal wachtwoord"
                                                        passwordrules={
                                                            passwordRules
                                                        }
                                                        className="w-full border-stone-300 bg-[#fdfcf9] pl-11 focus:border-[#8a6a48]"
                                                    />
                                                </div>

                                                <InputError
                                                    message={
                                                        errors.password_confirmation
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="mt-2 flex w-full items-center justify-center gap-2 bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                {processing && <Spinner />}

                                                {processing
                                                    ? 'Account aanmaken...'
                                                    : 'Account aanmaken'}
                                            </button>
                                        </>
                                    )}
                                </Form>
                            </div>

                            <p className="mt-6 text-center text-sm text-stone-500">
                                Heb je al een account?{' '}
                                <Link
                                    href={login()}
                                    className="font-medium text-[#8a6a48] transition hover:text-stone-900"
                                >
                                    Inloggen
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
