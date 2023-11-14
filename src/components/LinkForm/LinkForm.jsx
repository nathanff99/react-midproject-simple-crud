import { useState, useContext, useEffect } from 'react'

import { LinksContext } from '@contexts/LinksContext'

import { FPInputText } from '@FPCore/FPInputText/FPInputText'
import { FPTextArea } from '@FPCore/FPTextArea/FPTextArea'
import { FPButton } from '@FPCore/FPButton/FPButton'

import './LinkForm.scss'

export const LinkForm = ({ type = 'add', id = null }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [amountError, setAmountError] = useState('')

  const { postLink, getLink, updateLink } = useContext(LinksContext)

  useEffect(() => {
    if (type === 'update' && id) {
      getLink(id)
        .then((link) => {
          setTitle(link.title)
          setDescription(link.description)
          setAmount(link.amount)
        })
        .catch((error) => {
          console.error('Failed to fetch link:', error)
        })
    }
  }, [id, type, getLink])

  const validateInputs = () => {
    setTitleError('')
    setDescriptionError('')
    setAmountError('')

    if (!title) setTitleError('Please enter a valid title.')
    if (!description) setDescriptionError('Please enter a valid description.')
    if (!amount) setAmountError('Please enter a valid amount.')

    return title && description && amount
  }

  const handleSubmit = async () => {
    if (!validateInputs()) return

    const linkItem = {
      title,
      description,
      amount
    }

    if (type === 'add') {
      await postLink(linkItem)
    } else if (type === 'update') {
      await updateLink(id, linkItem)
    }
  }

  return (
    <form className="form">
      <div className="form__input">
        <FPInputText
          label="Title"
          isRequired
          isInvalid={!!titleError}
          errorMessage={titleError ?? ''}
          value={title}
          setValue={setTitle}
        />
      </div>
      <div className="form__input">
        <FPTextArea
          label="Description"
          fullWidth
          isRequired
          isInvalid={!!descriptionError}
          errorMessage={descriptionError ?? ''}
          value={description}
          setValue={setDescription}
        />
      </div>
      <div className="form__input">
        <FPInputText
          label="Amount"
          isRequired
          isInvalid={!!amountError}
          errorMessage={amountError ?? ''}
          value={amount}
          setValue={setAmount}
        />
      </div>

      <FPButton
        fullWidth
        text={type === 'add' ? 'Add link' : 'Update link'}
        color="primary"
        size="lg"
        onClick={handleSubmit}
      />
    </form>
  )
}
