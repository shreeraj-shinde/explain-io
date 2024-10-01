import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/prisma/client";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";
import Toast from "../Components/Toast";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

const AuthPage = () => {
  const SignUp = async (formData: FormData) => {
    "use server";

    const UserEmail = formData.get("email");
    const UserName = formData.get("name");
    const UserPassword = formData.get("password");
    const data = {
      name: UserName,
      email: UserEmail,
      password: UserPassword,
    };
    const validation = schema.safeParse(data);

    console.log(validation);

    if (!validation.success) {
      <Toast type="error" message="Please Enter All Fields" />;
      return;
    }

    //Find User
    const User = await prisma.user.findFirst({
      where: { email: UserEmail as string },
    });

    if (User) {
      return;
    }

    const hashedPassword = await hash(UserPassword as string, 10);

    console.log({
      name: UserName,
      email: UserEmail,
      password: hashedPassword,
    });

    //   const user = await prisma.user.create({
    //     data: {
    //       email: UserEmail,
    //       name: UserName,
    //       password: hashedPassword,
    //     },
    //   });
    redirect("/auth");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">Sign In</TabsTrigger>
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your Email and Password to Sign In. If you don have an
                account Sign Up
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Sign In</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Fill out the details and click on Sign Up to create account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form action={SignUp}>
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Name" name="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <Button className="mt-3" type="submit">
                  Sign Up
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
