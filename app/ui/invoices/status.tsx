import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { CircleCheck, Clock } from "lucide-react";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <Badge
      variant={status === "pending" ? "secondary" : null}
      className={clsx("px-2 py-1 text-xs", {
        "bg-green-500 text-white": status === "paid",
      })}
    >
      {status === "pending" ? (
        <span className="flex items-center gap-2">
          <Clock size={16} className="text-gray-500" />
          Pending
        </span>
      ) : null}
      {status === "paid" ? (
        <span className="flex items-center gap-2">
          <CircleCheck size={16} className="text-white" />
          Paid
        </span>
      ) : null}
    </Badge>
  );
}
