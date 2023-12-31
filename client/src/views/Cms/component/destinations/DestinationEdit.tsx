import { Suspense, lazy, useState } from 'react'

import AdaptableCard from '@/components/shared/AdaptableCard'
import CMSBackButton from '../common/CMSBackButton'
import Container from '@/components/shared/Container'
import Tabs from '@/components/ui/Tabs'
import { useLocation } from 'react-router-dom'

const Content = lazy(() => import('./DestinationContent'))
const Seo = lazy(() => import('./Seo'))

const { TabNav, TabList } = Tabs
const settingsMenu: Record<
    string,
    {
        label: string
        path: string
    }
> = {
    content: { label: 'Content', path: 'content' },
    seo: { label: 'Seo', path: 'seo' },
}

const DestinationEdit = () => {
    const location = useLocation()
    const preview = location.pathname.split('/').pop();
    
    const [currentTab, setCurrentTab] = useState('content')

    const onTabChange = (val: string) => {
        setCurrentTab(val)
    }

    return (
    <>
        <CMSBackButton route={`/cms/destinations`} />
        <Container className='mt-2'>
            <AdaptableCard>
                <Tabs variant='pill' value={currentTab} onChange={(val) => onTabChange(val)}>
                    <TabList>
                        {Object.keys(settingsMenu).map((key) => (
                            <TabNav key={key} value={key}>
                                {settingsMenu[key].label}
                            </TabNav>
                        ))}
                    </TabList>
                </Tabs>
                <div className="px-4 py-6">
                    <Suspense fallback={<></>}>
                        {currentTab === 'content' && (
                            <Content preview={preview} />
                            )}
                        {currentTab === 'seo' && (
                          <Seo />
                        )}
                    </Suspense>
                </div>
            </AdaptableCard>
        </Container>
    </>
    )
}

export default DestinationEdit
