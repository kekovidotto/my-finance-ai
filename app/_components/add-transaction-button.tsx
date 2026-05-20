"use client";
import { ArrowDownUp } from "lucide-react";
import { useState } from "react";

import { Button } from "./ui/button";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

export const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUp />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogOpen}
      />
    </>
  );
};
