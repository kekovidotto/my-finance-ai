"use client";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

export const EditTransactionButton = ({
  transaction,
}: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogOpen}
        transactionId={transaction.id}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
      />
    </>
  );
};
