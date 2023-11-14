import { Routes, Route, Navigate } from 'react-router-dom'

import { PanelLayout } from '@layouts/PanelLayout'

import { Dashboard } from '@pages/Dashboard/Dashboard'
import { PaymentLinksList } from '@pages/PaymentLinksList/PaymentLinksList'
import { PaymentLinkAdd } from '@pages/PaymentLinkAdd/PaymentLinkAdd'
import { PaymentLinkUpdate } from '@pages/PaymentLinkUpdate/PaymentLinkUpdate'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route
        path="/"
        element={
          <PanelLayout>
            <Dashboard />
          </PanelLayout>
        }
      />
      <Route
        path="/payment-links"
        element={
          <PanelLayout>
            <PaymentLinksList />
          </PanelLayout>
        }
      />
      <Route
        path="/payment-link/add"
        element={
          <PanelLayout>
            <PaymentLinkAdd />
          </PanelLayout>
        }
      />
      <Route
        path="/payment-link/update/:id"
        element={
          <PanelLayout>
            <PaymentLinkUpdate />
          </PanelLayout>
        }
      />
    </Routes>
  )
}
