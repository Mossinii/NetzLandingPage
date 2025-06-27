import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer
        className={`footer-footer7 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <div className="footer-container">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Pb4IUr'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="footer-footer-links"></div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-container {
            display: flex;
            align-items: flex-start;
          }
          .footer-footer-links {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }

          @media (max-width: 767px) {
            .footer-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
