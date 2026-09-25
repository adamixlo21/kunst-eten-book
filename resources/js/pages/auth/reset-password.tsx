import { Form, Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    LockKeyhole,
    Mail,
} from 'lucide-react';

import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Spinner } from '@/components/ui/spinner';
import { update } from '@/routes/password';

type Props = {
    token: string;
    email: string;
    passwordRules: string;
};

export default function ResetPassword({
                                          token,
                                          email,
                                          passwordRules,
                                      }: Props) {
    return (
        <>
            <Head title="Wachtwoord resetten" />

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
                                    Accountbeveiliging
                                </p>

                                <h1 className="mt-6 text-6xl font-light leading-[0.98] tracking-[-0.04em] xl:text-7xl">
                                    Kies een nieuw
                                    <br />
                                    <span className="text-stone-500">
                                        wachtwoord.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-md text-base leading-8 text-stone-600">
                                    Stel een nieuw wachtwoord in om weer veilig
                                    toegang te krijgen tot het beheer van Kunst
                                    Eten.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 px-14 pb-14 xl:px-20">
                            <div className="grid grid-cols-[90px_1fr] gap-6 border-t border-stone-300 pt-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    03
                                </p>

                                <div>
                                    <p className="text-sm font-medium">
                                        Beveiligde toegang
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-stone-500">
                                        Kies een sterk wachtwoord dat je niet
                                        ergens anders gebruikt.
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
                                href="/login"
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 transition hover:text-[#8a6a48]"
                            >
                                <ArrowLeft size={14} />
                                Terug naar inloggen
                            </Link>

                            <div className="mt-10">
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-8 bg-[#8a6a48]" />

                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                        Kunst Eten
                                    </p>
                                </div>

                                <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
                                    Wachtwoord resetten
                                </h2>

                                <p className="mt-4 text-sm leading-6 text-stone-500">
                                    Vul hieronder je nieuwe wachtwoord in.
                                </p>
                            </div>

                            <div className="mt-9 border border-stone-300 bg-white p-6 shadow-[0_20px_60px_rgba(70,55,40,0.06)] sm:p-8">
                                <Form
                                    {...update.form()}
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
                                                        value={email}
                                                        readOnly
                                                        className="w-full border border-stone-300 bg-stone-100 py-3.5 pl-11 pr-4 text-sm text-stone-500 outline-none"
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
                                                    className="mb-2 block text-sm font-medium"
                                                >
                                                    Nieuw wachtwoord
                                                </label>

                                                <div className="relative">
                                                    <LockKeyhole
                                                        size={17}
                                                        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-stone-400"
                                                    />

                                                    <PasswordInput
                                                        id="password"
                                                        name="password"
                                                        autoComplete="new-password"
                                                        autoFocus
                                                        placeholder="Nieuw wachtwoord"
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

                                            {/* Confirmation */}
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
                                                className="flex w-full items-center justify-center gap-2 bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                {processing && <Spinner />}

                                                {processing
                                                    ? 'Bezig met opslaan...'
                                                    : 'Nieuw wachtwoord opslaan'}
                                            </button>
                                        </>
                                    )}
                                </Form>
                            </div>

                            <p className="mt-6 text-center text-xs leading-5 text-stone-400">
                                Beveiligde toegang tot Kunst Eten administratie.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
