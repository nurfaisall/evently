import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import Icon from "@/public/assets/more.png"


import React from 'react'

function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <Image src={Icon} width={24} height={24} alt="more image"/>

            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNav