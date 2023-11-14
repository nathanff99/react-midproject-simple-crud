import { LinksProvider } from '@contexts/LinksContext'

import { Header } from '@components/Header/Header'
import { LinkForm } from '@components/LinkForm/LinkForm'

import './PaymentLinkAdd.scss'

export const PaymentLinkAdd = () => {
  return (
    <LinksProvider>
      <Header
        title="Add Payment Link"
        subtitle="Register a new link for your payment."
        contentCenter
      />

      <section className="add-link">
        <LinkForm type="add" />
      </section>
    </LinksProvider>
  )
}
