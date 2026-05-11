import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';

interface NavItem {
  title: string;
  url?: string;
  onClick?: () => void;
  icon: LucideIcon;
}

interface NavMainProps {
  label?: string;
  pathname: string;
  items: NavItem[];
}

export function NavMain({ label, pathname, items }: NavMainProps) {
  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = item.url
              ? item.url === '/'
                ? pathname === '/'
                : pathname.startsWith(item.url)
              : false;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild={!!item.url}
                  tooltip={item.title}
                  isActive={isActive}
                  onClick={item.onClick}
                >
                  {item.url ? (
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      <item.icon />
                      <span>{item.title}</span>
                    </>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
