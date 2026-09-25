import { Form, Head, usePage } from '@inertiajs/react';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import InputError from '@/components/input-error';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export default function Profile() {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Profiel" />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light tracking-tight">
                            Profiel
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-stone-500">
                            Wijzig hier je naam en e-mailadres.
                        </p>
                    </div>

                    <div className="border border-stone-300 bg-white p-6 sm:p-8">
                        <Form
                            {...ProfileController.update.form()}
                            options={{
                                preserveScroll: true,
                            }}
                            className="space-y-6"
                        >
                            {({ processing, errors, recentlySuccessful }) => (
                                <>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Naam
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            defaultValue={auth.user.name}
                                            required
                                            autoComplete="name"
                                            placeholder="Volledige naam"
                                            className="w-full border border-stone-300 bg-[#fdfcf9] px-4 py-3.5 text-sm outline-none transition focus:border-[#8a6a48] focus:bg-white"
                                        />

                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            E-mailadres
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            defaultValue={auth.user.email}
                                            required
                                            autoComplete="username"
                                            placeholder="naam@email.nl"
                                            className="w-full border border-stone-300 bg-[#fdfcf9] px-4 py-3.5 text-sm outline-none transition focus:border-[#8a6a48] focus:bg-white"
                                        />

                                        <InputError
                                            message={errors.email}
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
                                                : 'Profiel opslaan'}
                                        </button>

                                        {recentlySuccessful && (
                                            <span className="text-sm text-emerald-700">
                                                Opgeslagen
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
