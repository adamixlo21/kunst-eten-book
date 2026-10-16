
import { Form, Head, usePage } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, UserRound } from 'lucide-react';

import * as ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import InputError from '@/components/input-error';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export default function Profile() {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Profile | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-10 text-[#25221f] sm:px-8 lg:px-12 lg:py-14">
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
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
                            Your{' '}
                            <span className="italic text-[#8a6a48]">
                                Profile
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#746b61]">
                            Update your name and email address to keep your
                            account information up to date.
                        </p>
                    </div>

                    {/* Profile form */}
                    <div className="border border-[#d9cec0] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(70,55,40,0.04)] sm:p-9">
                        <div className="mb-8 flex items-center gap-3 border-b border-[#d9cec0] pb-6">
                            <div className="flex h-11 w-11 items-center justify-center bg-[#eee7dc] text-[#8a6a48]">
                                <UserRound size={21} strokeWidth={1.5} />
                            </div>

                            <div>
                                <h2 className="font-serif text-xl font-light">
                                    Personal Information
                                </h2>

                                <p className="mt-1 text-xs text-[#746b61]">
                                    Manage your account details.
                                </p>
                            </div>
                        </div>

                        <Form
                            {...ProfileController.update.form()}
                            options={{
                                preserveScroll: true,
                            }}
                            className="space-y-7"
                        >
                            {({ processing, errors, recentlySuccessful }) => (
                                <>
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className={labelClass}
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            defaultValue={auth.user.name}
                                            required
                                            autoComplete="name"
                                            placeholder="Your full name"
                                            className={inputClass}
                                        />

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

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            defaultValue={auth.user.email}
                                            required
                                            autoComplete="username"
                                            placeholder="your@email.com"
                                            className={inputClass}
                                        />

                                        <InputError
                                            message={errors.email}
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
                                            {processing
                                                ? 'Saving...'
                                                : 'Save Changes'}

                                            {!processing && (
                                                <ArrowRight
                                                    size={16}
                                                    strokeWidth={1.5}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
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
                                                Changes saved successfully
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}
                        </Form>
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

const inputClass =
    'w-full border border-[#d9cec0] bg-[#fdfbf7] px-4 py-4 text-sm text-[#25221f] outline-none transition-colors placeholder:text-[#a59a8d] focus:border-[#8a6a48] focus:bg-white';
