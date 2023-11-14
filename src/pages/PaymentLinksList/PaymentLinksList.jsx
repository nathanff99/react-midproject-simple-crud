import { useNavigate } from 'react-router-dom'

import { LinksProvider } from '@contexts/LinksContext'

import { Header } from '@components/Header/Header'
import { LinksList } from '@components/LinksList/LinksList'

export const PaymentLinksList = () => {
  const navigate = useNavigate()

  const addHandle = () => {
    navigate('/payment-link/add')
  }

  return (
    <LinksProvider>
      <Header
        title="Payment Links"
        subtitle="List of all payment links generated."
        showAddButton
        addButtonText="Add new link"
        addButtonHandle={addHandle}
      />

      <LinksList />
    </LinksProvider>
  )
}
