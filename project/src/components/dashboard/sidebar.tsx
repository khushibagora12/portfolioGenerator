'use client'
import { Home, Settings,FileUser,HandCoins,File,Briefcase,LogOut,UserCheck,MessageSquareText } from "lucide-react"
 import Image from "next/image"
 import Bebas from "next/font/google"
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"


const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },  {
    title: "My Information",
    url: "/dashboard/myinformation",
    icon: UserCheck,
  },
  {
    title: "Portfolio",
    url: "/dashboard/portfolio",
    icon: Briefcase,
  },
  {
    title: "Resume",
    url: "/dashboard/resume",
    icon: FileUser,
  },
  {
    title: "Documents",
    url: "/dashboard/documents",
    icon: File,
  },
  {
    title: "Donate",
    href: "https://www.buymeacoffee.com/sahildale",
    icon: HandCoins,
  },
  {
    title: "Feedback",
    url: "/dashboard/feedback",
    icon: MessageSquareText,
  },

]
export default function AppSidebar() {
  //const pathname = usePathname()

  return (
    // <aside className="w-64 bg-[#112240] text-white min-h-screen py-6 px-4">
    //   <h1 className="text-2xl font-bold mb-8">SHIELD</h1>
    //   <nav className="space-y-4">
    //     {navItems.map(({ label, href }) => (
    //       <Link
    //         key={href}
    //         href={href}
    //         className={cn(
    //           'block px-4 py-2 rounded hover:bg-[#0f1c2e]',
    //           pathname === href && 'bg-[#0f1c2e] font-semibold'
    //         )}
    //       >
    //         {label}
    //       </Link>
    //     ))}
    //   </nav>
    // </aside>
    <UISidebar >
    <SidebarContent className="bg-[#123458] font--poppins font-semibold text-white" >
          
      <SidebarGroup>
        <SidebarGroupLabel>
          <div className="flex-shrink-0 ">
                      <div className="flex gap-4">
                      <Image
                      src="/plainLogo.png"
                      width={60}
                      height={60}
                      alt="logo"
                      />
                      <h1 className={` text-4xl font-mono font-bold text-[#123458] pt-3 `}>DevSnap</h1>
                      </div>
                  </div>
        </SidebarGroupLabel>
        <SidebarGroupContent  className="mt-10">
          <SidebarMenu >
            {items.map((item) => (
              <SidebarMenuItem key={item.title} >
                <SidebarMenuButton asChild className="hover:bg-[#355C7C] text-white" >
                  <a href={item.url || item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    
    </SidebarContent>
    <SidebarFooter className="bg-[#123458]" >
      {/* logout button */}
      <SidebarMenuItem  >
        <SidebarMenuButton asChild className="hover:bg-[#355C7C] text-white">
          <a href="/logout">
            <LogOut />
            <span>Logout</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      </SidebarFooter>
  </UISidebar>
  )
}