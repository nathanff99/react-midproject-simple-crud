import { useContext } from 'react'

import { AuthContext } from '@contexts/AuthContext'

import { Header } from '@components/Header/Header'
import { Balance } from '@components/Balance/Balance'
import { ChartBar } from '@components/ChartBar/ChartBar'

import received from '@data/ReceivedChart.json'
import withdrawals from '@data/WithdrawalsChart.json'

export const Dashboard = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Header
        title={`Welcome back, ${user.name}!`}
        subtitle="See your balance summary below."
      />

      <div className="flex flex-wrap md:flex-nowrap md:gap-2">
        <div className="w-full md:w-1/3 mb-2">
          <Balance
            title="PayFast wallet"
            balance="421.48"
            background="secondary"
          />
        </div>
        <div className="w-full md:w-1/3 mb-2">
          <Balance
            title="Upcoming payouts"
            balance="952.39"
            background="secondary"
          />
        </div>
        <div className="w-full md:w-1/3 mb-2">
          <Balance
            title="On the way"
            balance="7912.92"
            background="secondary"
          />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:gap-2">
        <div className="w-full md:w-1/2 mb-2">
          <div className="bg-gray-100 rounded-xl p-6">
            <h1 className="font-bold text-xl">Received (last week)</h1>
            <ChartBar data={received} />
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-2">
          <div className="bg-gray-100 rounded-xl p-6">
            <h1 className="font-bold text-xl">Withdrawals (6 months)</h1>
            <ChartBar data={withdrawals} />
          </div>
        </div>
      </div>
    </>
  )
}
