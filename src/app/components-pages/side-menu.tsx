'use client'
import { Home, Inbox, Brain, Briefcase } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"



// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "About me",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Skills",
        url: "#",
        icon: Brain,
    },
    {
        title: "Expertise",
        url: "#",
        icon: Briefcase,
    }

]

export function AppSidebar() {
    return (
        <nav className="dark flex flex-col w-20 h-screen ">
            <SidebarProvider>
                <Sidebar className="flex flex-col flex-grow">
                    <SidebarContent className="flex-grow">
                        <div className="flex ">
                            <SidebarHeader className="px-4 py-6">
                                <h1 className="text-xl font-semibold">FullStack Developer</h1>
                                <span className="text-sm text-white-500">Head of Integration</span>
                                <Separator/>
                     
                            <SidebarGroup>
                                <SidebarGroupLabel className="text-secondary-foreground">My Resume</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <a href={item.url}>
                                                        <item.icon className="text-primary" />
                                                        <span>{item.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarHeader>
                    </div>
                </SidebarContent>

                {/* Footer fixado no final */}
                <SidebarFooter >
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/guih-henriqueee.png" />
                                    <AvatarFallback>GM</AvatarFallback>
                                </Avatar>
                                <Card className="border-none shadow-none bg-transparent">
                                    <CardTitle className="text-primary">Guilherme Martins</CardTitle>
                                    <CardDescription>
                                        gmartinsdevelop@gmail.com
                                    </CardDescription>
                                </Card>

                            </div>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
        </nav >
    )
}
