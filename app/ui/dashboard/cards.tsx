import { HandCoins, Users, Hourglass, FileText } from "lucide-react";

import { fetchCardData } from "@/app/lib/data";

import {
  CardContent,
  CardHeader,
  Card as ShadCard,
} from "@/components/ui/card";

const iconMap = {
  collected: HandCoins,
  customers: Users,
  pending: Hourglass,
  invoices: FileText,
};

export default async function CardWrapper() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfCustomers,
    numberOfInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <ShadCard>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="tracking-tight text-sm font-medium">{title}</div>
          {Icon ? <Icon className="h-5 w-5 text-muted-foreground" /> : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </ShadCard>
  );
}
