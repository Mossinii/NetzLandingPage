import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  const translate = useTranslations()
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <header className={`navbar-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image"
          />
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links">
              <a
                href={props.link2Url1}
                rel="noreferrer noopener"
                className="navbar-link21 thq-link thq-body-small"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0qX0Ga'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link2Url11}
                rel="noreferrer noopener"
                className="navbar-link22 thq-link thq-body-small"
              >
                {props.link21 ?? (
                  <Fragment>
                    <span className="navbar-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nnWDkT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link4Url}
                rel="noreferrer noopener"
                className="navbar-link4 thq-link thq-body-small"
              >
                {props.link31 ?? (
                  <Fragment>
                    <span className="navbar-text1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BgTz7c'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link5Url}
                rel="noreferrer noopener"
                className="navbar-link5 thq-link thq-body-small"
              >
                {props.link311 ?? (
                  <Fragment>
                    <span className="navbar-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ob65t4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu"></div>
        </header>
        {link5DropdownVisible === true && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="navbar-container2"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .navbar-container1 {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 1525px;
            display: flex;
            z-index: 100;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            margin-left: var(--dl-layout-space-fourunits);
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-image {
            width: 78px;
            height: 68px;
            object-fit: cover;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-link21 {
            text-decoration: none;
          }
          .navbar-link22 {
            text-decoration: none;
          }
          .navbar-link4 {
            text-decoration: none;
          }
          .navbar-link5 {
            text-decoration: none;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-container2 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-text1 {
            display: inline-block;
          }
          .navbar-text2 {
            display: inline-block;
          }
          .navbar-text3 {
            display: inline-block;
          }
          .navbar-text4 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .navbar-mobile-menu {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              width: 468px;
              margin-left: 0px;
              padding-top: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .navbar-image {
              height: 70px;
              margin-left: 0px;
              padding-top: 0px;
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
            }
            .navbar-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link2Url1: 'https://www.teleporthq.io',
  imageAlt: 'image',
  link4Url: 'https://www.teleporthq.io',
  link2Url11: 'https://www.teleporthq.io',
  link31: undefined,
  link2: undefined,
  link5Url: 'https://www.teleporthq.io',
  rootClassName: '',
  link21: undefined,
  imageSrc: '/netz%20(2)-200h.png',
  link311: undefined,
}

Navbar.propTypes = {
  link2Url1: PropTypes.string,
  imageAlt: PropTypes.string,
  link4Url: PropTypes.string,
  link2Url11: PropTypes.string,
  link31: PropTypes.element,
  link2: PropTypes.element,
  link5Url: PropTypes.string,
  rootClassName: PropTypes.string,
  link21: PropTypes.element,
  imageSrc: PropTypes.string,
  link311: PropTypes.element,
}

export default Navbar
