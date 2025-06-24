import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import CTA26 from '../components/cta26'
import Footer4 from '../components/footer4'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Playful Bogus Butterfly</title>
          <meta property="og:title" content="Playful Bogus Butterfly" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MECJWF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5jJAHR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JUgH-_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QBo4uf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a6F4tr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XWBgub'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ISbvJP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J0JG33'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZxswGL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U0QnMD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navbar8root-class-name"
          page1Description={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7HD7Qz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JUjCs6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a9e-FB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cReLUa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link31={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D6fRxw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link311={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RbZICM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Jdxzrr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TPa3V7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3yf2dB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="hero17root-class-name"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KKOxe3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mvXqd8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6SAvN-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4YdVKN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5L7i-R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uYpnS_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features24>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_meiRLB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z4uIWS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dFpbmw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zZqRZJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HGJ9H4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GQJMef'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p_6GLo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A9qtbv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Up7UqX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9ttb7S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w_WSTu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_leHuXT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ybfqA8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vMI-Lk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cGp4ta'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HvBLAb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z629Sz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6T4JeX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gFB9UH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IQwLSL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kdSXHp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K9w8Ws'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zTnerA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8xdbea'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ytPHwx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></CTA26>
        <Footer4></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
