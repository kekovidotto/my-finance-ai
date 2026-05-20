"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/app/_lib/prisma";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@/generated/prisma/client";

import { upsertTransactionSchema } from "./schema";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Usuário não autenticado");
  }
  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...params, userId },
    create: { ...params, userId },
  });
  revalidatePath("/transactions");
};
