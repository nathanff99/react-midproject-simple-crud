import { useContext, useEffect } from 'react'

import { LinksContext } from '@contexts/LinksContext'

import { LinkItem } from '@components/LinkItem/LinkItem'

import './LinksList.scss'

export const LinksList = () => {
  const { links, fetchLinks } = useContext(LinksContext)

  useEffect(() => {
    fetchLinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <table className="list">
      <thead className="list__header">
        <tr>
          <td className="list__cell list__cell--rounded-left">Title</td>
          <td className="list__cell">Amount</td>
          <td className="list__cell">Link</td>
          <td className="list__cell list__cell--rounded-right">Options</td>
        </tr>
      </thead>
      <tbody>
        {links.length ? (
          links.map((link, index) => <LinkItem key={index} link={link} />)
        ) : (
          <tr className="">
            <td
              colSpan="4"
              className="font-normal text-gray-500 text-center md:text-left lg:text-center py-4"
            >
              No results found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
