import { SidebarProvider } from '@contexts/SidebarContext'

import { Navbar } from '@components/Navbar/Navbar'
import { Sidebar } from '@components/Sidebar/Sidebar'

export const PanelLayout = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>

      <main className="px-4 sm:px-12 py-24 xl:p-24 2xl:ml-[320px]">
        {children}
      </main>
    </>
  )
}
