import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LinksContext } from '@contexts/LinksContext'

import { FPButton } from '@FPCore/FPButton/FPButton'
import { TrashIcon } from '@icons/TrashIcon'
import { EditIcon } from '@icons/EditIcon'

import './LinkItem.scss'

export const LinkItem = ({ link }) => {
  const { deleteLink } = useContext(LinksContext)
  const navigate = useNavigate()

  const update = () => {
    navigate(`/payment-link/update/${link.id}`)
  }

  const remove = () => {
    if (confirm('Are you sure you want to delete this link?')) {
      deleteLink(link.id)
    }
  }

  return (
    <tr className="link-item">
      <td className="link-item__cell">
        <p>
          <span className="link-item__cell-title">Title: </span>
          {link.title}
        </p>
        <p className="link-item__cell-item">
          <span className="link-item__cell-title">Description: </span>
          {link.description}
        </p>
        <p className="link-item__cell-item">
          <span className="link-item__cell-title">Amount: </span>
          C$ {link.amount}
        </p>
        <p className="link-item__cell-item link-item__cell-item--primary">
          <span className="link-item__cell-title">Link: </span>
          {window.location.origin}/checkout/{link.hash}
        </p>

        <div className="absolute top-2 right-2 flex gap-1">
          <FPButton
            className="border-gray-900 text-gray-900"
            text={<EditIcon width="1.3em" height="1.3em" />}
            variant="bordered"
            size="sm"
            isIconOnly
            onClick={update}
          />
          <FPButton
            color="danger"
            text={<TrashIcon width="1.3em" height="1.3em" />}
            variant="bordered"
            size="sm"
            isIconOnly
            onClick={remove}
          />
        </div>
      </td>
      <td className="link-item__cell link-item__cell--desktop">
        <span className="link-item__cell-title">{link.title}</span>
        <p className="link-item__cell-description">{link.description}</p>
      </td>
      <td className="link-item__cell link-item__cell--desktop">
        C$ {link.amount}
      </td>
      <td className="link-item__cell link-item__cell--primary link-item__cell--desktop">
        {window.location.origin}/checkout/{link.hash}
      </td>
      <td className="link-item__cell link-item__cell--desktop link-item__cell--options">
        <FPButton
          className="bg-gray-100 text-gray-900"
          text={<EditIcon width="1.3em" height="1.3em" />}
          isIconOnly
          onClick={update}
        />
        <FPButton
          className="bg-gray-100 text-danger"
          text={<TrashIcon width="1.3em" height="1.3em" />}
          isIconOnly
          onClick={remove}
        />
      </td>
    </tr>
  )
}
