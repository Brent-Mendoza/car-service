import { Calendar, Home, Pickaxe, Book, Wrench } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

export function AdminSidebar() {
  const location = useLocation()
  return (
    <Sidebar className="static h-full border-none">
      <SidebarContent className=" bg-white h-full">
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/admin"
                    className={
                      location.pathname === "/admin" ? "bg-sidebar-accent" : ""
                    }
                  >
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Manage</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/admin/services"
                    className={
                      location.pathname === "/admin/services"
                        ? "bg-sidebar-accent"
                        : ""
                    }
                  >
                    <Pickaxe />
                    <span>Services</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/admin/bookings"
                    className={
                      location.pathname === "/admin/bookings"
                        ? "bg-sidebar-accent"
                        : ""
                    }
                  >
                    <Book />
                    <span>Bookings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/admin/parts"
                    className={
                      location.pathname === "/admin/parts"
                        ? "bg-sidebar-accent"
                        : ""
                    }
                  >
                    <Wrench />
                    <span>Parts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Logs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/admin/logs"
                    className={
                      location.pathname === "/admin/logs"
                        ? "bg-sidebar-accent"
                        : ""
                    }
                  >
                    <Calendar />
                    <span>Logs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
