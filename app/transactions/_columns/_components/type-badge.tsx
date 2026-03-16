import { Transaction, TransactionType } from "@prisma/client";
import { Circle } from "lucide-react";
import React from "react";

import { Badge } from "@/app/_components/ui/badge";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export const TransactionTypeBadge = ({
  transaction,
}: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted font-bold">
        <Circle className="fill-primary mr-2" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 text-danger font-bold">
        <Circle className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }
  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge className="bg-white/10 font-bold text-white">
        <Circle className="mr-2 fill-white" size={10} />
        Investimento
      </Badge>
    );
  }
  return <Badge>Outro</Badge>;
};
