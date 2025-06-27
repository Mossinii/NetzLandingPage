import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Beneficios = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.steps2Id}
        className={`beneficios-container1 thq-section-padding anchorscroll ${props.rootClassName} `}
      >
        <div className="beneficios-max-width thq-section-max-width">
          <div className="beneficios-container2 thq-grid-2">
            <div className="beneficios-section-header">
              <h2 className="thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_x8dbXs'),
                  }}
                ></span>
              </h2>
              <p className="thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_48z3Ej'),
                  }}
                ></span>
              </p>
              <div className="beneficios-actions">
                <a
                  href={props.buttonUrl1}
                  className="beneficios-button thq-button-animated thq-button-filled"
                >
                  <span className="thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5jP4KU'),
                      }}
                    ></span>
                  </span>
                </a>
              </div>
            </div>
            <div className="beneficios-container3">
              <div className="beneficios-container4 thq-card">
                <h2 className="beneficios-text13 thq-heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="beneficios-text30">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bXchwg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="beneficios-text14 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="beneficios-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_GtlmQX'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="beneficios-text15 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VGsXjJ'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="beneficios-container5 thq-card">
                <h2 className="beneficios-text16 thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="beneficios-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bOQyTz'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="beneficios-text17 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="beneficios-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__C3eYJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="beneficios-text18 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_I-miry'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="beneficios-container6 thq-card">
                <h2 className="beneficios-text19 thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="beneficios-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_85bZ4s'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="beneficios-text20 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="beneficios-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_GZ8mqw'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="beneficios-text21 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FAbzQQ'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="beneficios-container7 thq-card">
                <h2 className="beneficios-text22 thq-heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="beneficios-text29">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xAw9IL'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="beneficios-text23 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="beneficios-text28">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MESqJH'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="beneficios-text24 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_w_jurb'),
                    }}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .beneficios-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .beneficios-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .beneficios-container2 {
            align-items: start;
          }
          .beneficios-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .beneficios-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .beneficios-button {
            text-decoration: none;
          }
          .beneficios-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .beneficios-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .beneficios-text13 {
            font-size: 26px;
          }
          .beneficios-text14 {
            text-align: center;
          }
          .beneficios-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .beneficios-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-secondary2);
          }
          .beneficios-text16 {
            font-size: 26px;
          }
          .beneficios-text17 {
            text-align: center;
          }
          .beneficios-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .beneficios-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .beneficios-text19 {
            font-size: 26px;
          }
          .beneficios-text20 {
            text-align: center;
          }
          .beneficios-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .beneficios-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-secondary2);
          }
          .beneficios-text22 {
            font-size: 26px;
          }
          .beneficios-text23 {
            text-align: center;
          }
          .beneficios-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .beneficios-text25 {
            display: inline-block;
          }
          .beneficios-text26 {
            display: inline-block;
          }
          .beneficios-text27 {
            display: inline-block;
          }
          .beneficios-text28 {
            display: inline-block;
          }
          .beneficios-text29 {
            display: inline-block;
          }
          .beneficios-text30 {
            display: inline-block;
          }
          .beneficios-text31 {
            display: inline-block;
          }
          .beneficios-text32 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .beneficios-container1 {
              padding-top: 93px;
            }
            .beneficiosroot-class-name {
              margin-top: 5px;
            }
          }
          @media (max-width: 1200px) {
            .beneficios-container1 {
              height: 1246px;
            }
          }
          @media (max-width: 991px) {
            .beneficios-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .beneficios-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .beneficios-actions {
              width: 100%;
              align-self: flex-start;
            }
            .beneficios-container4 {
              width: 100%;
            }
            .beneficios-container5 {
              width: 100%;
            }
            .beneficios-container6 {
              width: 100%;
            }
            .beneficios-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .beneficios-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Beneficios.defaultProps = {
  buttonUrl1: 'div-beneficios',
  rootClassName: '',
  step2Description: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
  steps2Id: '',
  step1Title: undefined,
  step3Title: undefined,
  step1Description: undefined,
}

Beneficios.propTypes = {
  buttonUrl1: PropTypes.string,
  rootClassName: PropTypes.string,
  step2Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
  steps2Id: PropTypes.string,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Beneficios
