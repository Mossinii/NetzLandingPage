import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CTA = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.cTAId}
        className={`thq-section-padding ${props.rootClassName} `}
      >
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="thq-heading-2">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="cta-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_PvCOWc'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <p className="thq-body-large">
                    {props.content1 ?? (
                      <Fragment>
                        <span className="cta-text6">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_IMxMTD'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="cta-actions">
                  <a
                    href="https://wa.me/5493494999?text=Ola%2c%20gostaria%20de%20falar%20com%20a%20NETZ%20sobre%20serviços%20de%20TI"
                    rel="noreferrer noopener"
                    className="cta-link thq-button-filled"
                  >
                    <span>
                      {props.action1 ?? (
                        <Fragment>
                          <span className="cta-text5">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3GIRXc'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta-accent2-bg {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: #0c4a13;
          }
          .cta-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .cta-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: #5cb373;
          }
          .cta-container2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-sixunits);
            background-image: linear-gradient(
              270deg,
              rgb(189, 195, 199) 0%,
              rgb(29, 170, 97) 100%
            );
          }
          .cta-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .cta-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .cta-link {
            color: #ffffff;
            text-decoration: none;
            background-color: #1daa61;
          }
          .cta-text4 {
            display: inline-block;
          }
          .cta-text5 {
            display: inline-block;
          }
          .cta-text6 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .cta-accent2-bg {
              background-color: #0c4e0e;
            }
            .cta-container2 {
              background-image: linear-gradient(
                270deg,
                rgb(189, 195, 199) 0%,
                rgb(29, 170, 97) 100%
              );
            }
            .cta-link {
              color: #ffffff;
              background-color: #1daa61;
            }
          }
          @media (max-width: 1200px) {
            .cta-accent2-bg {
              background-color: #183e2a;
            }
            .cta-container2 {
              background-image: linear-gradient(
                270deg,
                rgb(189, 195, 199) 0%,
                rgb(29, 170, 97) 100%
              );
            }
            .cta-link {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              background-color: #1daa61;
            }
          }
          @media (max-width: 991px) {
            .cta-accent1-bg {
              background-color: #0a5603;
            }
            .cta-container2 {
              background-image: linear-gradient(
                270deg,
                rgb(189, 195, 199) 0%,
                rgb(29, 170, 97) 100%
              );
            }
            .cta-link {
              background-color: #1daa61;
            }
          }
          @media (max-width: 767px) {
            .cta-container2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .cta-actions {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .cta-link {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

CTA.defaultProps = {
  heading1: undefined,
  action1: undefined,
  rootClassName: '',
  content1: undefined,
  cTAId: 'CTA',
}

CTA.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  cTAId: PropTypes.string,
}

export default CTA
