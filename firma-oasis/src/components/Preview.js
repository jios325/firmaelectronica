import React from "react";
import { assetUrl, linkAppAndroid, linkAppIOS, cintilloImg } from "../config/config";

const formatPhoneNumber = (phoneNumberString) => {
  let cleaned = ("" + phoneNumberString).replace(/\s/g, "");
  var match = false;
  if (cleaned.match(/^55/)) {
    match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
  } else {
    match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  }
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return phoneNumberString;
};
const hoteles = {
  ohr: {
    logo: assetUrl + "logos/oasis.png",
    color: "#002D72",
    secondaryColor: "#73D3EC",
    cintillo: true,
    direccion: "KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
    icono_cel: "iconos-ohr/mobile.png",
    icono_phone: "iconos-ohr/phone.png",
    icono_pin: "iconos-ohr/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "/iconos-ohr/redes/fb.png",
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "iconos-ohr/redes/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-ohr/redes/blog.png",
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "iconos-ohr/redes/insta.png",
      },
    ],
  },
  rep: {
    logo: assetUrl + "logos/oasis.png",
    color: "#002D72",
    secondaryColor: "#73D3EC",
    cintillo: true,
    noAddress: true,
    direccion: "TEST ;)",
    icono_cel: "iconos-ohr/mobile.png",
    icono_phone: "iconos-ohr/phone.png",
    icono_pin: "iconos-ohr/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "/iconos-ohr/redes/fb.png",
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "iconos-ohr/redes/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-ohr/redes/blog.png",
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "iconos-ohr/redes/insta.png",
      },
    ],
  },
  lavanderia: {
    logo: assetUrl + "logos/oasis.png",
    color: "#002D72",
    secondaryColor: "#73D3EC",
    cintillo: true,
    direccion: "LBMTO. KABAH LOTE 2B REGIÓN 93 C.P 77517",
    icono_cel: "iconos-ohr/mobile.png",
    icono_phone: "iconos-ohr/phone.png",
    icono_pin: "iconos-ohr/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "/iconos-ohr/redes/fb.png",
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "iconos-ohr/redes/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-ohr/redes/blog.png",
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "iconos-ohr/redes/insta.png",
      },
    ],
  },
  ohrmexico: {
    logo: assetUrl + "logos/oasis.png",
    color: "#002D72",
    secondaryColor: "#73D3EC",
    cintillo: true,
    direccion: "PENNSYLVANIA NO. 127 OFNAS 8-10 COL NAPOLES C.P. 03810 CIUDAD DE MEXICO",
    icono_cel: "iconos-ohr/mobile.png",
    icono_phone: "iconos-ohr/phone.png",
    icono_pin: "iconos-ohr/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "/iconos-ohr/redes/fb.png",
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "iconos-ohr/redes/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-ohr/redes/blog.png",
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "iconos-ohr/redes/insta.png",
      },
    ],
  },
  oweddings: {
    logo: assetUrl + "logos/weddings.png",
    color: "#000000",
    secondaryColor: "#000000",
    cintillo: true,
    icono_cel: "iconos-weddings/cel.png",
    icono_phone: "iconos-weddings/tel.png",
    icono_pin: "iconos-weddings/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://oasishoteles.com/es/bodas",
    direccion: "Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México",
    weddings: true,
    redes: [
      {
        url: "https://www.facebook.com/OWeddingsOasis",
        icono: assetUrl + "/iconos-weddings/fb.png",
      },
      {
        url: "https://twitter.com/OWeddingsOasis",
        icono: assetUrl + "/iconos-weddings/tw.png",
      },
      {
        url: "https://www.instagram.com/oweddingsoasis/",
        icono: assetUrl + "iconos-weddings/insta.png",
      },
    ],
  },
  foa: {
    logo: assetUrl + "logos/foa.png",
    color: "#002D72",
    secondaryColor: "#73D3EC",
    cintillo: true,
    direccion: "KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
    icono_cel: "iconos-ohr/mobile.png",
    icono_phone: "iconos-ohr/phone.png",
    icono_pin: "iconos-ohr/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "/iconos-ohr/redes/fb.png",
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "iconos-ohr/redes/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-ohr/redes/blog.png",
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "iconos-ohr/redes/insta.png",
      },
    ],
  },
  otlc: {
    logo: assetUrl + "logos/otlc-logo.jpg",
    color: "#283566",
    secondaryColor: "#283566",
    cintillo: true,
    tel_800: ["01 800 272 0249", "01 800 439 0355"],
    icono_cel: "iconos-otlc/cel.png",
    icono_phone: "iconos-otlc/tel.png",
    icono_pin: "iconos-otlc/pin.png",
    direccion: "KM 16.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
    web: "www.oasis-tlc.com",
    web_link: "https://oasis-tlc.com/",
    redes: [
      {
        url: "https://www.facebook.com/OasisHoteles",
        icono: assetUrl + "iconos-otlc/fb.png",
      },
      {
        url: "https://twitter.com/OasisHotels",
        icono: assetUrl + "iconos-otlc/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-otlc/blog.png",
      },
      {
        url: "https://www.instagram.com/oasishotels/",
        icono: assetUrl + "iconos-otlc/insta.png",
      },
    ],
  },
  ohrcentral: {
    central: true,
    logo: assetUrl + "logos/oasis.png",
    color: "#002D72",
    secondaryColor: "#73D3EC",
    cintillo: true,
    icono_cel: "iconos-ohr/mobile.png",
    icono_phone: "iconos-ohr/phone.png",
    icono_pin: "iconos-ohr/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "CARRETERA CANCÚN AEROPUERTO KM 17 BLVD. LUIS DONALDO COLOSIO MZ. 04 LOTE 05 CENTRAL DE ABASTOS SM 301 UNIDAD 510",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "/iconos-ohr/redes/fb.png",
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "iconos-ohr/redes/tw.png",
      },
      {
        url: "https://oasishoteles.com/blog/",
        icono: assetUrl + "iconos-ohr/redes/blog.png",
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "iconos-ohr/redes/insta.png",
      },
    ],
  },
  vcm: {
    vcm: true,
    color: "#175176",
    secondaryColor: "#175176",
    cintillo: false,
    logo: assetUrl + "logos/logo-vcm.png",
    icono_cel: "iconos-vcm/cel.png",
    icono_phone: "iconos-vcm/phone.png",
    icono_pin: "iconos-vcm/pin.png",
    web: "www.caribemaya.com.mx",
    web_link: "https://caribemaya.com.mx/",
    direccion: "KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
    redes: [
      {
        url: "https://bit.ly/38RKNKc",
        icono: assetUrl + "iconos-vcm/facebook.png",
      },
      {
        url: "https://bit.ly/2IzkNYi",
        icono: assetUrl + "iconos-vcm/twitter.png",
      },
      {
        url: "https://bit.ly/2MuUGmD",
        icono: assetUrl + "iconos-vcm/instagram.png",
      },
    ],
  },
  pyr: {
    logo: assetUrl + "logos/pyr.png",
    color: "#000000",
    secondaryColor: "#8B8D88",
    cintillo: true,
    icono_cel: "iconos/8B8D88/cel.png",
    icono_phone: "iconos/8B8D88/tel.png",
    icono_pin: "iconos/8B8D88/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/OMMV30m7j7t",
        icono: assetUrl + "iconos/8B8D88/fb.png",
      },
      {
        url: "http://ow.ly/H35A30md9lR",
        icono: assetUrl + "iconos/8B8D88/tw.png",
      },
      {
        url: "http://ow.ly/q1Y230md7Hc",
        icono: assetUrl + "iconos/8B8D88/insta.png",
      },
    ],
  },
  goc: {
    logo: assetUrl + "logos/goc.png",
    color: "#1D3C77",
    secondaryColor: "#006CB3",
    cintillo: true,
    icono_cel: "iconos/006CB3/cel.png",
    icono_phone: "iconos/006CB3/tel.png",
    icono_pin: "iconos/006CB3/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/uYzD30kI8oJ",
        icono: assetUrl + "iconos/1D3C77/fb.png",
      },
      {
        url: "http://ow.ly/CfDh30mccpK",
        icono: assetUrl + "iconos/1D3C77/tw.png",
      },
      {
        url: "http://ow.ly/yjfs30kI9Dn",
        icono: assetUrl + "iconos/1D3C77/insta.png",
      },
    ],
  },
  ocob: {
    logo: assetUrl + "logos/firma-obeach.png",
    color: "#1D3C77",
    secondaryColor: "#7ECBE8",
    cintillo: true,
    icono_cel: "iconos/7ECBE8/cel.png",
    icono_phone: "iconos/7ECBE8/tel.png",
    icono_pin: "iconos/7ECBE8/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/uYzD30kI8oJ",
        icono: assetUrl + "iconos/1D3C77/fb.png",
      },
      {
        url: "http://ow.ly/CfDh30mccpK",
        icono: assetUrl + "iconos/1D3C77/tw.png",
      },
      {
        url: "http://ow.ly/yjfs30kI9Dn",
        icono: assetUrl + "iconos/1D3C77/insta.png",
      },
    ],
  },
  gop: {
    logo: assetUrl + "logos/gop.png",
    color: "#1D3C77",
    secondaryColor: "#006CB3",
    cintillo: true,
    icono_cel: "iconos/006CB3/cel.png",
    icono_phone: "iconos/006CB3/tel.png",
    icono_pin: "iconos/006CB3/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Blvd. Kukulkán Km 4.5 Sección C Lote 1, Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/v5L130mcc7F",
        icono: assetUrl + "iconos/1D3C77/fb.png",
      },
      {
        url: "http://ow.ly/XDgy30mccx5",
        icono: assetUrl + "iconos/1D3C77/tw.png",
      },
      {
        url: "http://ow.ly/mYqk30mcceZ",
        icono: assetUrl + "iconos/1D3C77/insta.png",
      },
    ],
  },
  op: {
    logo: assetUrl + "logos/op.png",
    color: "#1D3C77",
    secondaryColor: "#7ECBE8",
    cintillo: true,
    icono_cel: "iconos/7ECBE8/cel.png",
    icono_phone: "iconos/7ECBE8/tel.png",
    icono_pin: "iconos/7ECBE8/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Blvd. Kukulkán Km 4.5 Sección C Lote 1, Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/Hbjk30md9BM",
        icono: assetUrl + "iconos/1D3C77/fb.png",
      },
      {
        url: "http://ow.ly/IUCU30md9vQ",
        icono: assetUrl + "iconos/1D3C77/tw.png",
      },
      {
        url: "http://ow.ly/dI4Y30md9F5",
        icono: assetUrl + "iconos/1D3C77/insta.png",
      },
    ],
  },
  gos: {
    logo: assetUrl + "logos/logo-gsc.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Blvd. Kukulcan km 4.6, Kukulcan Boulevard, Zona Hotelera, 77500 Cancún, Q. Roo.",
    redes: [
      {
        url: "https://bit.ly/2MqAQsL",
        icono: "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png",
      },
      {
        url: "https://bit.ly/2OxVtWt",
        icono: "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png",
      },
      {
        url: "https://bit.ly/33bl6Aq",
        icono: "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png",
      },
    ],
  },
  smart: {
    logo: assetUrl + "logos/smart.png",
    color: "#1D3C77",
    secondaryColor: "#7ECBE8",
    cintillo: true,
    icono_cel: "iconos/7ECBE8/cel.png",
    icono_phone: "iconos/7ECBE8/tel.png",
    icono_pin: "iconos/7ECBE8/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Av. Tulum, esq. Brisa s/n Col. Centro, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/Hbjk30md9BM",
        icono: assetUrl + "iconos/1D3C77/fb.png",
      },
      {
        url: "http://ow.ly/IUCU30md9vQ",
        icono: assetUrl + "iconos/1D3C77/tw.png",
      },
      {
        url: "http://ow.ly/dI4Y30md9F5",
        icono: assetUrl + "iconos/1D3C77/insta.png",
      },
    ],
  },
  oh: {
    logo: assetUrl + "logos/oh.png",
    color: "#000000",
    secondaryColor: "#8B8D88",
    cintillo: true,
    icono_cel: "iconos/8B8D88/cel.png",
    icono_phone: "iconos/8B8D88/tel.png",
    icono_pin: "iconos/8B8D88/pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Av. Tulum, esq. Brisa s/n Col. Centro, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/sPAN30m7jlZ",
        icono: assetUrl + "iconos/8B8D88/fb.png",
      },
      {
        url: "http://ow.ly/pkGw30m7kuT",
        icono: assetUrl + "iconos/8B8D88/tw.png",
      },
      {
        url: "http://ow.ly/VQRZ30m7knX",
        icono: assetUrl + "iconos/8B8D88/insta.png",
      },
    ],
  },
  got: {
    logo: assetUrl + "logos/got.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion: "Km 252 Carret. Chetumal - Pto Juárez 77780 Akumal, Q. Roo México",
    redes: [
      {
        url: "https://www.facebook.com/GrandOasisTulum",
        icono: "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png",
      },
      {
        url: "https://twitter.com/GrandOasisTulum",
        icono: "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png",
      },
      {
        url: "https://www.instagram.com/grandoasistulum",
        icono: "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png",
      },
    ],
  },
};
const Preview = (props) => {
  console.log(props);
  // const { color, cintillo, isVCM } = props;
  let { nombre, apellido, puesto, telefono, extension, hotel, celular } = props.data;
  let redes = hotel != null ? hoteles[hotel].redes : [];
  const templateTel = (props) => {
    return `
  <tr style="box-sizing: border-box;">
    <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${hoteles[hotel].icono_cel}" alt="" style="margin-right:5px"></td>
    <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${hoteles[hotel].color};font-size: 10px;letter-spacing: 0.48px;">
        <span style="line-height: 18px;mso-line-height-rule:exactly;">${props.tel}</span>
    </td>
  </tr>
  `;
  };
  let template = `
  <div>
  <style type="text/css">
      body {
          margin: 0;
          padding: 0;
      }
      img {
          border: 0;
          line-height: 100%;
          outline: none;
          text-decoration: none;
      }
  </style>
  <!--[if mso]>
      <style> body,table tr,table td,a, span,table.MsoNormalTable {  font-family:Arial, Helvetica, sans-serif !important;  } table td {padding:0px!important;}</style>
  <![endif]-->
  <style>
      .gmail-fix {
          display: none;
          display: none!important;
      }
      span,
      td,
      table,
      div {
          font-family: Arial, serif !important;
      }
  </style>
  <!--[if !mso]><!-->
  <style type="text/css">
      @media only screen and (max-width:480px) {
          @-ms-viewport {
              width: 320px;
          }
          @viewport {
              width: 320px;
          }
      }
  </style>
  <!--[if !mso]><!-->
  <!--<div style="white-space:nowrap; font-size:15px;">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  </div> -->
  <tr class="gmail-fix">
    <td>
        <table cellpadding="0" cellspacing="0" border="0" align="center" width="400" style="table-layout:fixed;width::400px;">
            <tr>
                <td cellpadding="0" cellspacing="0" border="0" height="1" ; style="line-height: 1px; min-width: 400px;">
                    <img src="spacer.gif" width="400" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 400px; width: 400px;" />
                </td>
            </tr>
        </table>
    </td>
  </tr>
  <!--<![endif]-->
  <table class="content" style="width: 400px;max-width:400px;box-sizing: border-box;border-collapse: collapse;border-spacing: 0;table-layout:fixed;">
      <tr>
          <td style="padding:6px;">
              <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif, 'Open Sans';border-collapse: collapse;width:100%;max-width:400px;">
                  <tr style="box-sizing: border-box;">
                      <td>
                          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom:0.5px solid #D9D2D2; border-collapse: collapse;table-layout:fixed;">
                              <tr style="box-sizing: border-box;">
                                  <td valign="center" style="vertical-align: center;width: 120px;max-width:180px;height:120px;text-align: center; border-right:0.5px solid #D9D2D2;">
                                      <a href="${hoteles[hotel].vcm ? "https://caribemaya.com.mx" : "https://www.oasishoteles.com"}" style="display:block;">
                                          <img style="max-width: 80px;display: block;margin:0 auto;" src="${hotel != null ? hoteles[hotel].logo : assetUrl + "oasis.png"}" alt="${hoteles[hotel].vcm ? "Viajes Caribe Maya" : ""
    }"  title="${hoteles[hotel].vcm ? "Viajes Caribe Maya" : ""}">
                                      </a>
                                  </td>
                                  <td valign="${telefono != null ? "top" : "center"}" style="vertical-align: ${telefono != null ? "top" : "middle"
    }; padding-top: 10px; padding-bottom: 10px;overflow:hidden;padding-left:15px; padding-right: 15px;">
                                      <table cellpadding="0" cellspacing="0" border="0" width="100%" style=" border-collapse: collapse;">
                                          <tr style="box-sizing: border-box;text-align: left;">
                                              <td colspan="2" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;color: ${hoteles[hotel].secondaryColor
    };font-size: 12px;font-weight: bold;letter-spacing: 0px;line-height: 14px;mso-line-height-rule:exactly;text-transform: uppercase; padding-bottom:2px;">${nombre != null ? nombre : "Nombre"
    } ${apellido != null ? apellido : "Apellido"}</td>
                                          </tr>
                                          <tr style="box-sizing: border-box;text-align: left;">
                                              <td style="mso-line-height-rule:exactly;line-height: 11px;font-size: 10px;letter-spacing: 0.48px;font-family: Arial, sans-serif, 'Open Sans';color: ${hoteles[hotel].color
    };padding-bottom:15px;text-transform: uppercase;" colspan="2">${puesto != null ? puesto : "Puesto"}</td>
                                          </tr>
                                          ${celular != null
      ? `
                                          <tr style="box-sizing: border-box;">
                                              <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${hoteles[hotel].icono_cel}" alt="" style="margin-right:5px"></td>
                                              <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${hoteles[hotel].color};font-size: 10px;letter-spacing: 0.48px;">
                                                  <span style="line-height: 18px;mso-line-height-rule:exactly;">${celular}</span>
                                              </td>
                                          </tr>
                                          `
      : ""
    }
                                          ${telefono != null
      ? `
                                            <tr style="box-sizing: border-box;">
                                            <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${hoteles[hotel].icono_phone
      }" alt="" style="margin-right:5px"></td>
                                            <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${hoteles[hotel].color
      };font-size: 10px;letter-spacing: 0.48px;">
                                                <span style="line-height: 18px;mso-line-height-rule:exactly;padding-top:2px;">${telefono != null ? formatPhoneNumber(telefono) : "Teléfono"
      } ${extension != null ? `EXT. ${extension}` : ""}</span>
                                                  ${hoteles[hotel].central ? `/</span> <span>01 800 01 OASIS (62747)</span>` : ""}
                                            </td>
                                        </tr>
                                            `
      : `${hoteles[hotel].central
        ? `
                                                <tr style="box-sizing: border-box;">
                                            <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${hoteles[hotel].icono_phone}" alt="" style="margin-right:5px"></td>
                                            <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${hoteles[hotel].color};font-size: 10px;letter-spacing: 0.48px;">
                                                </span> <span>01 800 01 OASIS (62747)</span>
                                            </td>
                                        </tr>
                                              `
        : ""
      }`
    }
                                          
                                          ${hoteles[hotel].tel_800
      ? `
                                              <tr style="box-sizing: border-box;text-align: left;">
                                                  <td colspan="2" style="padding-top:2px;padding-left:18px;font-size:10px;color:${hoteles[hotel].color};"><span>MEX: 01 800 272 0249</span> <span style="font-weight:bold;">/</span> <span>USA & CAN: 01 800 439 0355</span></td>  
                                              </tr>
                                              `
      : ""
    }
                                         ${hoteles[hotel].noAddress
      ? ""
      : `
                                         <tr style="box-sizing: border-box;text-align: left;">
                                         <td valign="center" style="vertical-align:center;width:18px;padding-top:2px;"><img src="${assetUrl}${hoteles[hotel].icono_pin
      }" alt="" style="margin-right:5px"></td>
                                         <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';color: ${hoteles[hotel].color
      };font-size: 10px;letter-spacing: 0px;">
                                             <span style="mso-line-height-rule:exactly;line-height: 11px;">${hotel != null ? hoteles[hotel].direccion : "Direccion del Hotel"
      }</span>
                                         </td>
                                     </tr>
                                         `
    }
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr style="box-sizing: border-box;">
                      <td style="padding-top:4px; padding-bottom:4px">
                          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                              <tr style="box-sizing: border-box;">
                                  <td valign="bottom" style="vertical-align:bottom;color: ${hoteles[hotel].secondaryColor
    };font-family: Arial, sans-serif, 'Open Sans';font-size: 12px;text-align: left;mso-line-height-rule:exactly;line-height: 14px;">
                                      <span style="margin-right:5px;">¡Síguenos!</span> 
                                      ${redes
      .map((el) => {
        var cadena = "";
        cadena += `<a href=${el.url} style="margin-right:3px;"><img src=${el.icono} alt=""></a>`;
        return cadena;
      })
      .join("")}
                                  </td>
                                  ${hoteles[hotel].vcm
      ? `
                                  <td valign="bottom" style="vertical-align:bottom;color: ${hoteles[hotel].secondaryColor};font-family: Arial, sans-serif, 'Open Sans';font-size: 11px;text-align: left;mso-line-height-rule:exactly;line-height: 15px;font-weight: bold;">ARRIVE AND REVIVE</td>
                                  `
      : ""
    }
                                  
                                  <td valign="bottom" style="vertical-align:bottom;text-align:right;"><a style="color: ${hoteles[hotel].secondaryColor
    };font-family: Arial, sans-serif, 'Open Sans';font-size: 12px;text-align: right;mso-line-height-rule:exactly;line-height: 14px;text-decoration: none;" href="${hoteles[hotel].web_link
    }">${hoteles[hotel].web}</a></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      ${!hoteles[hotel].vcm
      ? `
      
      `
      : ""
    }
    ${cintillo(hoteles[hotel].vcm || hoteles[hotel].weddings, hoteles[hotel].cintillo, hotel)}
  </table>
  <!--[if !mso]><!-->
  <div style="white-space: nowrap;font-size:0px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  <!--<![endif]-->
</div>
  `;
  return <div id='contenedor' dangerouslySetInnerHTML={{ __html: template }} ref={props.setRef} />;
};
export default Preview;

const cintillo = (isVCM, show = true, hotel) => {
  console.log(hotel);
  const test = isVCM
    ? `
<tr style="margin:0;box-sizing:border-box;">
    <td style="padding:0px!important;width:400px;">
        <a href="${hotel == "oweddings" ? "https://oasishoteles.com/es/bodas" : "https://caribemaya.com.mx"}">
            <img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/${hotel == "oweddings" ? "cintillo-weddings.png" : "cintillo-vcm.jpg"
    }" alt="">
        </a>
    </td>
</tr>
`
    : `
  <tr style="margin:0;box-sizing:border-box;">
    <td style="padding:0px!important;width:400px;">
        <a href="https://oasishoteles.com/es/ofertas-hoteles-verano-oasis">
        <img width="400" height="100" style="display:block;" src="${assetUrl + "cintillo/cintillo-verano-oasis.jpg"}"/>
        </a>
    </td>
</tr>
`;
  // Temporalmente no mostramos cintillo en todo OHR
  return show && isVCM ? test : "";
};

// const cintillo = (isVCM, show = true, hotel) => {
//   console.log(hotel);
//   const test = isVCM
//     ? `
// <tr style="margin:0;box-sizing:border-box;">
//     <td style="padding:0px!important;width:400px;">
//         <a href="${hotel == "oweddings" ? "https://oasishoteles.com/es/bodas" : "https://caribemaya.com.mx"}">
//             <img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/${
//               hotel == "oweddings" ? "cintillo-weddings.png" : "cintillo-vcm.jpg"
//             }" alt="">
//         </a>
//     </td>
// </tr>
// `
//     : `
// <tr style=margin:0;box-sizing:border-box;">
//   <td style="padding:0px!important;width:400px;">
//     <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing: 0;">
//         <tr style="margin:0;box-sizing:border-box;">
//             <td style="padding:0px!important;width:300px;">
//                 <a href="https://oasishoteles.com/es/protocolos-limpieza-salud">
//                   <img width="300" height="100" style="display:block;" src="${assetUrl + "cintillo/cintillo-left.jpg"}"/>
//                 </a>
//             </td>
//             <td style="padding:0px!important;width:300px;">
//               <a href="https://oasishoteles.com/es/be-free-stay-safe">
//                 <img width="300" height="100"  style="display:block" src="${assetUrl + "cintillo/cintillo-right.jpg"}"/>
//               </a>
//             </td>
//         </tr>
//   </table>
//     </td>
// </tr>
// `;
//   return show ? test : "";
// };
