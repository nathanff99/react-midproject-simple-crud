import './Balance.scss'

export const Balance = ({
  title = 'My Balance',
  balance = 0.0,
  color = 'white',
  background = 'primary'
}) => {
  return (
    <div className={`balance bg-${background}`}>
      <p className={`balance__title text-${color}`}>{title}</p>
      <p className={`balance__value text-${color}`}>C$ {balance}</p>
    </div>
  )
}
