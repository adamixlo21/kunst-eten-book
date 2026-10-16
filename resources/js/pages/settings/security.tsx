
import { Form, Head } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

import * as SecurityController from '@/actions/App/Http/Controllers/Settings/SecurityController';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';

type Props = {
    passwordRules: string;
};

export default function Security({ passwordRules }: Props) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    return (
        <>
            <Head title="Security | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-10 text-[#25221f] sm:px-8 lg:px-12 lg:py-14">
                <div className="mx-auto max-w-3xl">
                    {/* Page header */}
                    <div className="mb-10">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-px w-9 bg-[#8a6a48]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </span>
                        </div>

                        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a6a48]">
                            Account Settings
                        </p>

                        <h1 className="font-serif text-4xl font-light tracking-[-0.04em] sm:text-5xl">
                            Account{' '}
                            <span className="italic text-[#8a6a48]">
                                Security
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#746b61]">
                            Update your password to keep your administration
                            account secure.
                        </p>
                    </div>

                    {/* Password settings card */}
                    <div className="border border-[#d9cec0] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(70,55,40,0.04)] sm:p-9">
                        <div className="mb-8 flex items-center gap-3 border-b border-[#d9cec0] pb-6">
                            <div className="flex h-11 w-11 items-center justify-center bg-[#eee7dc] text-[#8a6a48]">
                                <ShieldCheck size={21} strokeWidth={1.5} />
                            </div>

                            <div>
                                <h2 className="font-serif text-xl font-light">
                                    Change Password
                                </h2>

                                <p className="mt-1 text-xs text-[#746b61]">
                                    Choose a strong, unique password.
                                </p>
                            </div>
                        </div>

                        <Form
                            {...SecurityController.update.form()}
                            options={{
                                preserveScroll: true,
                            }}
                            resetOnError={[
                                'password',
                                'password_confirmation',
                                'current_password',
                            ]}
                            resetOnSuccess
                            onError={(errors) => {
                                if (errors.password) {
                                    passwordInput.current?.focus();
                                }

                                if (errors.current_password) {
                                    currentPasswordInput.current?.focus();
                                }
                            }}
                            className="space-y-7"
                        >
                            {({ errors, processing, recentlySuccessful }) => (
                                <>
                                    {/* Current password */}
                                    <div>
                                        <label
                                            htmlFor="current_password"
                                            className={labelClass}
                                        >
                                            Current Password
                                        </label>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className={iconClass}
                                            />

                                            <PasswordInput
                                                id="current_password"
                                                ref={currentPasswordInput}
                                                name="current_password"
                                                required
                                                autoComplete="current-password"
                                                placeholder="Enter current password"
                                                className={passwordClass}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.current_password}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* New password */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className={labelClass}
                                        >
                                            New Password
                                        </label>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className={iconClass}
                                            />

                                            <PasswordInput
                                                id="password"
                                                ref={passwordInput}
                                                name="password"
                                                required
                                                autoComplete="new-password"
                                                placeholder="Enter new password"
                                                passwordrules={passwordRules}
                                                className={passwordClass}
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
                                            Confirm New Password
                                        </label>

                                        <div className="relative">
                                            <LockKeyhole
                                                size={18}
                                                strokeWidth={1.5}
                                                className={iconClass}
                                            />

                                            <PasswordInput
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                required
                                                autoComplete="new-password"
                                                placeholder="Repeat new password"
                                                passwordrules={passwordRules}
                                                className={passwordClass}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.password_confirmation}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <div className="flex flex-wrap items-center gap-5 pt-2">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group inline-flex items-center justify-center gap-3 bg-[#25221f] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {processing ? (
                                                'Saving...'
                                            ) : (
                                                <>
                                                    Update Password
                                                    <ArrowRight
                                                        size={16}
                                                        strokeWidth={1.5}
                                                        className="transition-transform group-hover:translate-x-1"
                                                    />
                                                </>
                                            )}
                                        </button>

                                        {recentlySuccessful && (
                                            <span
                                                role="status"
                                                className="inline-flex items-center gap-2 text-sm text-[#496044]"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    strokeWidth={1.5}
                                                />
                                                Password updated successfully
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>

                    {/* Security note */}
                    <div className="mt-8 border-l-2 border-[#8a6a48] bg-[#eee7dc] px-5 py-4">
                        <p className="text-xs leading-6 text-[#746b61]">
                            For your security, use a password you don't use
                            for any other account.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-10 border-t border-[#d9cec0] pt-6">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]">
                            The Taste of Inspiration · Administration
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

const labelClass =
    'mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#62584c]';

const iconClass =
    'pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#8a6a48]';

const passwordClass =
    'w-full border-[#d9cec0] bg-[#fdfbf7] pl-12 focus:border-[#8a6a48]';
