import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import linksService from '@services/paymentLinks'

export const LinksContext = createContext({})

export const LinksProvider = ({ children }) => {
  const [links, setLinks] = useState([])
  const navigate = useNavigate()

  const fetchLinks = async () => {
    try {
      const data = await linksService.fetchLinks()
      setLinks(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getLink = async (id) => {
    try {
      const linkData = await linksService.getLink(id)

      return linkData
    } catch (error) {
      navigate('/payment-links')
      console.error(error)
    }
  }

  const postLink = async (newLink) => {
    try {
      const newLinkData = await linksService.postLink(newLink)
      setLinks((prevLinks) => [...prevLinks, newLinkData])
      navigate('/payment-links')
    } catch (error) {
      console.error(error)
    }
  }

  const updateLink = async (id, updatedLink) => {
    try {
      const updatedLinkData = await linksService.updateLink(id, updatedLink)
      setLinks((prevLinks) =>
        prevLinks.map((link) => (link.id === id ? updatedLinkData : link))
      )
      navigate('/payment-links')
    } catch (error) {
      console.error(error)
    }
  }

  const deleteLink = async (id) => {
    try {
      await linksService.deleteLink(id)
      setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LinksContext.Provider
      value={{
        links,
        setLinks,
        fetchLinks,
        postLink,
        getLink,
        updateLink,
        deleteLink
      }}
    >
      {children}
    </LinksContext.Provider>
  )
}
