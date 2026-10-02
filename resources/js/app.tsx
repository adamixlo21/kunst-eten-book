import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Kunst Eten';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    layout: (name) => {
        switch (true) {
            case name === 'welcome':
            case name === 'home':
            case name === 'checkout':
            case name === 'checkout-success':
            case name === 'paintings/index':
            case name === 'paintings/show':
            case name === 'legal/privacy-policy':
            case name === 'legal/shipping-and-returns':
            case name === 'legal/terms-and-conditions':
                return null;

            case name === 'auth/login':
            case name === 'auth/register':
            case name === 'auth/forgot-password':
            case name === 'auth/reset-password':
                return null;

            case name.startsWith('auth/'):
                return AuthLayout;

            case name.startsWith('settings/'):
            case name.startsWith('teams/'):
                return [AppLayout, SettingsLayout];

            default:
                return AppLayout;
        }
    },

    strictMode: true,

    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },

    progress: {
        color: '#8a6a48',
    },
});

// Initialize the saved appearance preference in the browser.
if (typeof window !== 'undefined') {
    initializeTheme();
}
