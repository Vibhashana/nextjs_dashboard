import { deleteInvoice } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button variant="secondary" className="w-10" asChild>
      <Link
        href={`/dashboard/invoices/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <Pencil />
      </Link>
    </Button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button variant="destructive" className="w-10 rounded-md p-2">
        <span className="sr-only">Delete</span>
        <Trash2 />
      </Button>
    </form>
  );
}
