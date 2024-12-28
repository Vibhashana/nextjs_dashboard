import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { LatestInvoice } from "@/app/lib/definitions";
import { fetchLatestInvoices } from "@/app/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function LatestInvoices() {
  const latestInvoices: LatestInvoice[] = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Latest Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex grow flex-col justify-between rounded-md bg-primary-foreground dark:bg-primary-foreground/75 p-4">
            <div className="">
              {latestInvoices.map((invoice) => {
                return (
                  <div
                    key={invoice.id}
                    className="flex flex-row items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={invoice.image_url}
                          alt={`${invoice.name}'s profile picture`}
                        />
                        <AvatarFallback>
                          {invoice.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0 space-y-1">
                        <p className="truncate text-sm font-medium">
                          {invoice.name}
                        </p>
                        <p className="hidden text-xs text-muted-foreground sm:block">
                          {invoice.email}
                        </p>
                      </div>
                    </div>
                    <p className="truncate font-medium">{invoice.amount}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-muted-foreground">
            <ArrowPathIcon className="h-5 w-5" />
            <h3 className="ml-2 text-sm">Updated just now</h3>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
