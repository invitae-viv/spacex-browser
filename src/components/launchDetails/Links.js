/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Visible from 'react-visible'
import { launchShape } from '../../reducers/launchCommon'

const Links = ({ launch }) => {
  const {
    links: {
      article_link,
      presskit,
      reddit_campaign,
      reddit_launch,
      reddit_media,
      reddit_recovery,
    },
  } = launch

  const links = [
    { text: 'Article', href: article_link },
    { text: 'Press Kit', href: presskit },
    { text: 'Campaign', href: reddit_campaign },
    { text: 'Launch', href: reddit_launch },
    { text: 'Media', href: reddit_media },
    { text: 'Recovery', href: reddit_recovery },
  ]

  return (
    <section>
      <h3>Links</h3>
      <ul>
        {links.map(({ text, href }) => (
          <Visible isVisible={!!href} key={text}>
            <li>
              <a href={href} target="_blank">
                {text}
              </a>
            </li>
          </Visible>
        ))}
      </ul>
    </section>
  )
}

Links.propTypes = {
  launch: PropTypes.shape(launchShape).isRequired,
}

export default Links
