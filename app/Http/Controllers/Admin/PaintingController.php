<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Painting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PaintingController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/paintings/index', [
            'paintings' => Painting::query()
                ->orderBy('sort_order')
                ->get(),
        ]);
    }

    public function edit(Painting $painting)
    {
        return Inertia::render('admin/paintings/edit', [
            'painting' => $painting,
        ]);
    }

    public function update(Request $request, Painting $painting)
    {


        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:5000'],
            'starting_price' => ['required', 'numeric', 'min:0'],
            'bidding_open' => ['required', 'boolean'],
            'sort_order' => ['required', 'integer', 'min:0'],

            'image' => [
                'nullable',
                'file',
                'mimes:jpg,jpeg,png,webp',
                'max:10240',
            ],
        ]);

        if ($request->hasFile('image')) {

            // Delete old image
            if ($painting->image) {
                Storage::disk('public')->delete($painting->image);
            }

            $validated['image'] = $request
                ->file('image')
                ->store('paintings', 'public');
        } else {
            unset($validated['image']);
        }

        $painting->update([
            ...$validated,
            'slug' => Str::slug($validated['title']),
        ]);

        return redirect()
            ->route('admin.paintings.index')
            ->with('success', 'Schilderij bijgewerkt.');
    }

    public function destroy(Painting $painting)
    {
        // Prevent deleting paintings with private bids.
        if ($painting->bids()->exists()) {
            return redirect()
                ->route('admin.paintings.index')
                ->withErrors([
                    'delete' => 'This painting cannot be deleted because it has received private bids. Close bidding instead to preserve the offer history.',
                ]);
        }

        // Delete the painting from the database first.
        // If deletion fails, keep the associated image.
        $painting->delete();

        // Remove uploaded images only.
        if (
            $painting->image &&
            !str_starts_with($painting->image, '/') &&
            !str_starts_with($painting->image, 'http://') &&
            !str_starts_with($painting->image, 'https://')
        ) {
            Storage::disk('public')->delete($painting->image);
        }

        return redirect()
            ->route('admin.paintings.index')
            ->with('success', 'Painting deleted successfully.');
    }

}
