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

const colorMap = {
  collected: {
    bg: "bg-green-100 dark:bg-green-950",
    icon: "text-green-900 dark:text-green-100",
  },
  customers: {
    bg: "bg-blue-100 dark:bg-blue-950",
    icon: "text-blue-900 dark:text-blue-100",
  },
  pending: {
    bg: "bg-yellow-100 dark:bg-yellow-950",
    icon: "text-yellow-900 dark:text-yellow-100",
  },
  invoices: {
    bg: "bg-orange-100 dark:bg-orange-950",
    icon: "text-orange-900 dark:text-orange-100",
  },
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
  const colors = colorMap[type];

  return (
    <ShadCard>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="tracking-tight text-sm font-medium">{title}</div>
          {Icon ? (
            <div
              className={`size-10 flex items-center justify-center ${colors.bg} rounded-full`}
            >
              <Icon className={`h-5 w-5 ${colors.icon}`} />
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </ShadCard>
  );
}
