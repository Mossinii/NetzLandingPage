import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`hero17-header78 ${props.rootClassName} `}>
        <div className="hero17-column thq-section-max-width thq-section-padding">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_P7Lbde'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5UW9hl'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <button className="thq-button-filled hero17-button">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero17-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_VkKbRM'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt1}
                src={props.image6Src1}
                className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt1}
                src={props.image1Src1}
                className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt1}
                src={props.image2Src1}
                className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt1}
                src={props.image5Src1}
                className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt2}
                src={props.image6Src2}
                className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt11}
                src={props.image6Src11}
                className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 744px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero17-row-container {
            width: 100%;
          }
          .hero17-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-text4 {
            display: inline-block;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  image2Alt1: 'Hero Image',
  image6Src2:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG5ldHdvcmt8ZW58MHx8fHwxNzUwNzkyMjI5fDA&ixlib=rb-4.1.0&w=1500',
  action1: undefined,
  image6Alt11: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG5ldHdvcmt8ZW58MHx8fHwxNzUwNzkyMjI5fDA&ixlib=rb-4.1.0&w=1500',
  heading1: undefined,
  image6Src1:
    'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxuZXR3b3JrfGVufDB8fHx8MTc1MDc5MjIyOXww&ixlib=rb-4.1.0&w=1500',
  image6Alt2: 'Hero Image',
  image6Src11:
    'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxuZXR3b3JrfGVufDB8fHx8MTc1MDc5MjIyOXww&ixlib=rb-4.1.0&w=1500',
  image1Src1:
    'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHx0ZWNub2xvZ3l8ZW58MHx8fHwxNzUwNzkyMTY0fDA&ixlib=rb-4.1.0&w=1500',
  image1Alt: 'IT Services Image',
  image6Alt: 'Hero Image',
  content1: undefined,
  image6Alt1: 'Hero Image',
  image5Src1:
    'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHNlcnZlcnxlbnwwfHx8fDE3NTA3OTIyMDF8MA&ixlib=rb-4.1.0&w=1500',
  image2Src:
    'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHx0ZWNub2xvZ3l8ZW58MHx8fHwxNzUwNzkyMTY0fDA&ixlib=rb-4.1.0&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHNlcnZlcnxlbnwwfHx8fDE3NTA3OTIyMDF8MA&ixlib=rb-4.1.0&w=1500',
  image5Alt1: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHx0ZWNub2xvZ3l8ZW58MHx8fHwxNzUwNzkyMTY0fDA&ixlib=rb-4.1.0&w=1500',
  image2Alt: 'Hero Image',
  image1Alt1: 'IT Services Image',
  image5Alt: 'Hero Image',
  image2Src1:
    'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHx0ZWNub2xvZ3l8ZW58MHx8fHwxNzUwNzkyMTY0fDA&ixlib=rb-4.1.0&w=1500',
  rootClassName: '',
}

Hero17.propTypes = {
  image2Alt1: PropTypes.string,
  image6Src2: PropTypes.string,
  action1: PropTypes.element,
  image6Alt11: PropTypes.string,
  image6Src: PropTypes.string,
  heading1: PropTypes.element,
  image6Src1: PropTypes.string,
  image6Alt2: PropTypes.string,
  image6Src11: PropTypes.string,
  image1Src1: PropTypes.string,
  image1Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  content1: PropTypes.element,
  image6Alt1: PropTypes.string,
  image5Src1: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  image5Alt1: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt1: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Src1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero17
