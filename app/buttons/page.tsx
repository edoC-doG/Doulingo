import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonPage = () => {
    return (
        <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
            <Button>Default</Button>
            <Button variant={'primary'}>Primary</Button>
            <Button variant={'primaryOutline'}>Primary OutLine</Button>
            <Button variant={'secondary'}>Secondary</Button>
            <Button variant={'secondaryOutline'}>Secondary OutLine</Button>
            <Button variant={'danger'}>Danger</Button>
            <Button variant={'dangerOutline'}>Danger OutLine</Button>
            <Button variant={'super'}>Super</Button>
            <Button variant={'superOutline'}>Super OutLine</Button>
            <Button variant={'ghost'}>Ghost</Button>
            <Button variant={'sidebar'}>Sidebar</Button>
            <Button variant={'sidebarOutline'}>Sidebar Outline</Button>
        </div>
    )
}

export default ButtonPage