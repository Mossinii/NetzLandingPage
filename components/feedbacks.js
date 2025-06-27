import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Feedbacks = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.feedbacksId1}
        className={`thq-section-padding anchorscroll ${props.rootClassName} `}
      >
        <div className="feedbacks-max-width thq-section-max-width">
          <div className="feedbacks-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="feedbacks-text28">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kNoe-B'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="feedbacks-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="feedbacks-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_BNDLHN'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card feedbacks-card1">
                  <div className="feedbacks-container12">
                    <div className="feedbacks-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="feedbacks-text35">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_SsmegM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="feedbacks-text31">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_uaJjZ2'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="feedbacks-text14 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="feedbacks-text27">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Ae1WfO'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card feedbacks-card2">
                  <div className="feedbacks-container14">
                    <div className="feedbacks-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="feedbacks-text36">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_XjZURO'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="feedbacks-text30">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_KyPwyI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="feedbacks-text17 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="feedbacks-text29">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_2umdJ5'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card feedbacks-card3">
                  <div className="feedbacks-container16">
                    <div className="feedbacks-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="feedbacks-text32">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ERLwFY'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="feedbacks-text37">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_86f02u'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="feedbacks-text20 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="feedbacks-text34">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_MZcSbw'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card feedbacks-card4">
                  <div className="feedbacks-container18">
                    <div className="feedbacks-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="feedbacks-text25">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_7mm6q6'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="feedbacks-text33">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_6veuAZ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="feedbacks-text23 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="feedbacks-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text__LiNNQ'),
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
      </div>
      <style jsx>
        {`
          .feedbacks-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .feedbacks-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .feedbacks-text11 {
            text-align: center;
          }
          .feedbacks-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .feedbacks-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .feedbacks-text14 {
            text-align: left;
          }
          .feedbacks-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .feedbacks-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .feedbacks-text17 {
            text-align: left;
          }
          .feedbacks-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .feedbacks-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .feedbacks-text20 {
            text-align: left;
          }
          .feedbacks-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .feedbacks-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .feedbacks-text23 {
            text-align: left;
          }
          .feedbacks-text24 {
            display: inline-block;
          }
          .feedbacks-text25 {
            display: inline-block;
          }
          .feedbacks-text26 {
            display: inline-block;
          }
          .feedbacks-text27 {
            display: inline-block;
          }
          .feedbacks-text28 {
            display: inline-block;
          }
          .feedbacks-text29 {
            display: inline-block;
          }
          .feedbacks-text30 {
            display: inline-block;
          }
          .feedbacks-text31 {
            display: inline-block;
          }
          .feedbacks-text32 {
            display: inline-block;
          }
          .feedbacks-text33 {
            display: inline-block;
          }
          .feedbacks-text34 {
            display: inline-block;
          }
          .feedbacks-text35 {
            display: inline-block;
          }
          .feedbacks-text36 {
            display: inline-block;
          }
          .feedbacks-text37 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .feedbacksroot-class-name {
              margin-top: 5px;
            }
          }
          @media (max-width: 991px) {
            .feedbacks-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .feedbacks-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .feedbacks-card1 {
              width: 100%;
            }
            .feedbacks-card2 {
              width: 100%;
            }
            .feedbacks-card3 {
              width: 100%;
            }
            .feedbacks-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Feedbacks.defaultProps = {
  rootClassName: '',
  review4: undefined,
  author4Name: undefined,
  content1: undefined,
  review1: undefined,
  heading1: undefined,
  review2: undefined,
  author2Position: undefined,
  author1Position: undefined,
  author3Name: undefined,
  author4Position: undefined,
  review3: undefined,
  author1Name: undefined,
  author2Name: undefined,
  feedbacksId1: '',
  author3Position: undefined,
}

Feedbacks.propTypes = {
  rootClassName: PropTypes.string,
  review4: PropTypes.element,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review2: PropTypes.element,
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Name: PropTypes.element,
  author4Position: PropTypes.element,
  review3: PropTypes.element,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  feedbacksId1: PropTypes.string,
  author3Position: PropTypes.element,
}

export default Feedbacks
