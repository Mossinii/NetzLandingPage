import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Servicos = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        id={props.features24Id}
        className="thq-section-padding anchorscroll servicos-container1"
      >
        <div className="servicos-container2 thq-section-max-width">
          <div className="servicos-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="servicos-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="servicos-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="servicos-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="servicos-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="servicos-tab-horizontal1"
            >
              <div className="servicos-divider-container1">
                {activeTab === 0 && <div className="servicos-container3"></div>}
              </div>
              <div className="servicos-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="servicos-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XSYiiy'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="servicos-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_pyVcsf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="servicos-tab-horizontal2"
            >
              <div className="servicos-divider-container2">
                {activeTab === 1 && <div className="servicos-container4"></div>}
              </div>
              <div className="servicos-content2">
                <h2 className="thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="servicos-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jhB4H0'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="servicos-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_LceL7w'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="servicos-tab-horizontal3"
            >
              <div className="servicos-divider-container3">
                {activeTab === 2 && <div className="servicos-container5"></div>}
              </div>
              <div className="servicos-content3">
                <h2 className="thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="servicos-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Qm1f2U'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="servicos-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v1-9Y8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .servicos-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .servicos-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .servicos-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .servicos-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .servicos-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .servicos-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .servicos-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .servicos-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .servicos-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .servicos-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .servicos-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .servicos-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .servicos-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .servicos-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .servicos-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .servicos-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .servicos-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .servicos-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .servicos-text1 {
            display: inline-block;
          }
          .servicos-text2 {
            display: inline-block;
          }
          .servicos-text3 {
            display: inline-block;
          }
          .servicos-text4 {
            display: inline-block;
          }
          .servicos-text5 {
            display: inline-block;
          }
          .servicos-text6 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .servicosroot-class-name {
              margin-top: 5px;
              margin-bottom: 0px;
            }
          }

          @media (max-width: 991px) {
            .servicos-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Servicos.defaultProps = {
  feature2Title: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  features24Id: '',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1738262039504-54d6b4a542ab?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNvbXB1dGVyJTIwbWFpbnRlbmNlfGVufDB8fHx8MTc1MDc5MzczNnww&ixlib=rb-4.1.0&w=1400',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1691435828932-911a7801adfb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxzZXJ2ZXJ8ZW58MHx8fHwxNzUwNzkyMjAxfDA&ixlib=rb-4.1.0&w=1400',
  feature1Title: undefined,
  feature1ImgAlt: 'Network Security Icon',
  feature2ImgAlt: 'Software Updates Icon',
  feature3ImgAlt: '24/7 Support Icon',
  rootClassName: '',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1573167582108-000d05b2faad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGNvbnN1bHRhbmN5fGVufDB8fHx8MTc1MDc5MzUzOXww&ixlib=rb-4.1.0&w=1400',
}

Servicos.propTypes = {
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  features24Id: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
}

export default Servicos
