import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function ShadcnPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Button>Button</Button> */}
      <div className="w-1/4">
        <Card>
          <CardHeader className="items-center gap-2">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/64144024?v=4" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <CardTitle>Syed Sameed Hasan</CardTitle>

            <CardDescription>Software Engineer</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              maxime maiores nihil blanditiis velit. Placeat, adipisci
              aspernatur quae ullam iusto odio non necessitatibus ab illum hic
              voluptas facilis architecto.
            </p>
            {/* <Separator /> */}
            <div className="flex gap-5    ">
              <Avatar>
                <AvatarImage src="https://cdn2.iconfinder.com/data/icons/social-media-2189/48/1-Facebook-256.png" />
                <AvatarFallback>f</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/2-512.png" />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/github-256.png" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter>
            <Sheet>
              <SheetTrigger className="w-[100%]">
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="w-[100%] rounded-full"
                >
                  View Profile
                </Button>{" "}
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {/* <Button>Next</Button> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
