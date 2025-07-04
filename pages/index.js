import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Destaques from '../components/destaques'
import Servicos from '../components/servicos'
import Beneficios from '../components/beneficios'
import Feedbacks from '../components/feedbacks'
import CTA from '../components/cta'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Netz – Soluções em Tecnologia para Empresas e Pessoas Físicas
          </title>
          <meta
            name="description"
            content="Serviços de TI sob medida para empresas e pessoas físicas: suporte técnico, consultoria, redes e muito mais. Fale conosco pelo WhatsApp!"
          />
          <meta
            property="og:title"
            content="Netz – Soluções em Tecnologia para Empresas e Pessoas Físicas"
          />
          <meta
            property="og:description"
            content="Serviços de TI sob medida para empresas e pessoas físicas: suporte técnico, consultoria, redes e muito mais. Fale conosco pelo WhatsApp!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9fb190e6-4a7b-4449-9f30-67af5701f2f7/5929747b-2e13-49a6-8307-8bbd26957182?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar
          link2={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D6PuNQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FQdOIQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link31={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t0YMDZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link311={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0dby8J'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4Url="#Beneficios"
          link5Url="#CTA"
          link2Url1="#Destaques"
          link2Url11="#Servicos"
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <Destaques
          action1={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lyn4PZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GS6iyL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3fTlJi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          buttonUrl="#Servicos"
          destaquesId="Destaques"
          rootClassName="destaquesroot-class-name"
        ></Destaques>
        <Servicos
          features24Id="Servicos"
          feature1Title={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U632pR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hkAysz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_36Plzw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="servicosroot-class-name"
          feature1Description={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_syWCUG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KbWPV6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q6VNU2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Servicos>
        <Beneficios
          steps2Id="Beneficios"
          buttonUrl1="#Feedbacks"
          step1Title={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pt8vvE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9l9yqk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0YITeA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Lrsm7a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="beneficiosroot-class-name"
          step1Description={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kgPkgY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EyNXWk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7XYGg2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bJzBNH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Beneficios>
        <Feedbacks
          review1={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Lruyx4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ERv_Xo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BvYNmr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GEWwxU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qthDQV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VnFkWK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zrHygi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xKTbS-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1yRzF9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QcV-ve'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feedbacksId1="Feedbacks"
          rootClassName="feedbacksroot-class-name"
          author1Position={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N5Lp6-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wyGhWS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UW1Wf6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dwFIM9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Feedbacks>
        <CTA
          action1={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_veoSD9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nTA1_8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8V6654'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="ct-aroot-class-name"
        ></CTA>
        <Footer rootClassName="footerroot-class-name"></Footer>
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
          @media (max-width: 991px) {
            .home-text23 {
              font-size: 22px;
            }
            .home-text24 {
              font-size: 22px;
            }
            .home-text25 {
              font-size: 22px;
            }
            .home-text26 {
              font-size: 22px;
            }
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
