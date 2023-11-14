import { useParams } from 'react-router-dom'

import { LinksProvider } from '@contexts/LinksContext'

import { Header } from '@components/Header/Header'
import { LinkForm } from '@components/LinkForm/LinkForm'

import './PaymentLinkUpdate.scss'

export const PaymentLinkUpdate = () => {
  const { id } = useParams()

  return (
    <LinksProvider>
      <Header
        title="Update Payment Link"
        subtitle="Modify your payment link details."
        contentCenter
      />

      <section className="update-link">
        <LinkForm type="update" id={id} />
      </section>
    </LinksProvider>
  )
}
