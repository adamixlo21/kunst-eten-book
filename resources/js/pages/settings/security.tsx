import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';

import SecurityController from '@/actions/App/Http/Controllers/Settings/SecurityController';
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
            <Head title="Wachtwoord" />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light tracking-tight">
                            Wachtwoord wijzigen
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">
                            Wijzig hier het wachtwoord van je adminaccount.
                        </p>
                    </div>

                    <div className="border border-stone-300 bg-white p-6 sm:p-8">
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
                            className="space-y-6"
                        >
                            {({ errors, processing, recentlySuccessful }) => (
                                <>
                                    <div>
                                        <label
                                            htmlFor="current_password"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Huidig wachtwoord
                                        </label>

                                        <PasswordInput
                                            id="current_password"
                                            ref={currentPasswordInput}
                                            name="current_password"
                                            autoComplete="current-password"
                                            placeholder="Huidig wachtwoord"
                                            className="w-full border-stone-300 bg-[#fdfcf9] focus:border-[#8a6a48]"
                                        />

                                        <InputError
                                            message={errors.current_password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Nieuw wachtwoord
                                        </label>

                                        <PasswordInput
                                            id="password"
                                            ref={passwordInput}
                                            name="password"
                                            autoComplete="new-password"
                                            placeholder="Nieuw wachtwoord"
                                            passwordrules={passwordRules}
                                            className="w-full border-stone-300 bg-[#fdfcf9] focus:border-[#8a6a48]"
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password_confirmation"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Bevestig nieuw wachtwoord
                                        </label>

                                        <PasswordInput
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            autoComplete="new-password"
                                            placeholder="Herhaal nieuw wachtwoord"
                                            passwordrules={passwordRules}
                                            className="w-full border-stone-300 bg-[#fdfcf9] focus:border-[#8a6a48]"
                                        />

                                        <InputError
                                            message={errors.password_confirmation}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-stone-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? 'Opslaan...'
                                                : 'Wachtwoord wijzigen'}
                                        </button>

                                        {recentlySuccessful && (
                                            <span className="text-sm text-emerald-700">
                                                Wachtwoord gewijzigd
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
