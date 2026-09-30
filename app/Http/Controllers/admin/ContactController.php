<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/contacts/index', [
            'contacts' => Contact::query()
                ->latest()
                ->get(),
        ]);
    }

    public function show(Contact $contact)
    {
        if (!$contact->is_read) {
            $contact->update([
                'is_read' => true,
            ]);
        }

        return Inertia::render('admin/contacts/show', [
            'contact' => $contact->fresh(),
        ]);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()
            ->route('admin.contacts.index')
            ->with('success', 'Bericht verwijderd.');
    }
}
