import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div>
      <UserButton
        showName
        appearance={{
          elements: {
            userButtonTrigger: {
              className: "bg-primary text-primary-foreground",
            },
          },
        }}
      />
    </div>
  );
};

export default HomePage;
