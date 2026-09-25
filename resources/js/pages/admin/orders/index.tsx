import { Head, Link } from '@inertiajs/react';

type Order = {
    id: number;
    name: string;
    email: string;
    quantity: number;
    total_price: string | number;
    status: string;
    created_at: string;
};

type Props = {
    orders: Order[];
};

export default function OrdersIndex({ orders }: Props) {
    return (
        <>
            <Head title="Bestellingen" />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light">
                            Bestellingen
                        </h1>
                    </div>

                    <div className="overflow-hidden border border-stone-300 bg-white">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="border-b border-stone-300 bg-[#efe8dd]">
                                <tr>
                                    <th className="px-5 py-4 font-medium">
                                        #
                                    </th>
                                    <th className="px-5 py-4 font-medium">
                                        Klant
                                    </th>
                                    <th className="px-5 py-4 font-medium">
                                        Aantal
                                    </th>
                                    <th className="px-5 py-4 font-medium">
                                        Totaal
                                    </th>
                                    <th className="px-5 py-4 font-medium">
                                        Status
                                    </th>
                                    <th className="px-5 py-4" />
                                </tr>
                                </thead>

                                <tbody>
                                {orders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="border-b border-stone-200 last:border-b-0"
                                    >
                                        <td className="px-5 py-4 text-stone-500">
                                            #{order.id}
                                        </td>

                                        <td className="px-5 py-4">
                                            <p className="font-medium">
                                                {order.name}
                                            </p>

                                            <p className="mt-1 text-xs text-stone-500">
                                                {order.email}
                                            </p>
                                        </td>

                                        <td className="px-5 py-4">
                                            {order.quantity}
                                        </td>

                                        <td className="px-5 py-4">
                                            €{' '}
                                            {Number(order.total_price)
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </td>

                                        <td className="px-5 py-4">
                                                <span className="border border-stone-300 px-2.5 py-1 text-xs uppercase tracking-wide">
                                                    {order.status}
                                                </span>
                                        </td>

                                        <td className="px-5 py-4 text-right">
                                            <Link
                                                href={`/admin/orders/${order.id}`}
                                                className="text-sm font-medium text-[#8a6a48] hover:text-stone-900"
                                            >
                                                Bekijken
                                            </Link>
                                        </td>
                                    </tr>
                                ))}

                                {orders.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="px-5 py-12 text-center text-stone-500"
                                        >
                                            Nog geen bestellingen.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
