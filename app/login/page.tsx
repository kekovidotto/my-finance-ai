import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "../_components/ui/button";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      {/* left side */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col items-center justify-center p-8 text-center lg:items-start lg:text-left">
        <Image
          className="mb-8"
          src="/logo.svg"
          alt="my-finance-ai"
          width={173}
          height={39}
        />
        <h1 className="mb-3 text-4xl font-bold">Bem vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="w-full">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      {/* right side */}
      <div className="relative hidden h-full w-full lg:block">
        <Image src="/login.png" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
