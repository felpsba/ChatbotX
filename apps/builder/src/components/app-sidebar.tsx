'use client'

import * as React from 'react'
import {
  Atom,
  AudioWaveform, ChartPie,
  Command, GalleryVerticalEnd, MessageCircleMore, Radio, SlidersHorizontal, Users,
  Workflow,
  Wrench
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { useTranslate } from '@tolgee/react'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslate()

  const chatbotId = 1

  const data = {
    user: {
      name: 'shadcn',
      email: 'm@example.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'FREE Business Account',
        logo: GalleryVerticalEnd,
        plan: 'Free',
      },
      {
        name: 'PRO Business Account',
        logo: AudioWaveform,
        plan: 'Profesional',
      },
      {
        name: 'ENTERPRISE Corp.',
        logo: Command,
        plan: 'Enterprise',
      },
    ],
    navMain: [
      {
        title: t('Analytics'),
        url: `/chatbots/${chatbotId}/dashboard`,
        icon: ChartPie,
        isActive: true,
      },
      {
        title: t('Inbox'),
        url: `/chatbots/${chatbotId}/inbox`,
        icon: MessageCircleMore,
      },
      {
        title: t('Flows'),
        url: `/chatbots/${chatbotId}/flows`,
        icon: Workflow,
      },
      {
        title: t('Contacts'),
        url: `/chatbots/${chatbotId}/contacts`,
        icon: Users,
      },
      {
        title: t('Automated Responses'),
        url: `/chatbots/${chatbotId}/automated-responses`,
        icon: Atom,
      },
      {
        title: t('Broadcasts'),
        url: `/chatbots/${chatbotId}/broadcasts`,
        icon: Radio,
      },
      {
        title: t('Tools'),
        url: `/chatbots/${chatbotId}/tools`,
        icon: Wrench,
      },
      {
        title: t('Settings'),
        url: `/chatbots/${chatbotId}/settings`,
        icon: SlidersHorizontal,
      },
    ],
  }

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
