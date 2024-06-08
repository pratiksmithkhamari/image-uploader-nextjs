import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        {/* <TeamSwitcher /> */}
        {/* <MainNav className="mx-6" /> */}
        <h2 className="text-[1.2rem] font-semibold ">Photo Uploader</h2>
        <div className="mr-7 flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avtar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
