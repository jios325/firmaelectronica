import React from "react";
import { assetUrl, linkAppAndroid, linkAppIOS } from "../config/config";
const formatPhoneNumber = phoneNumberString => {
  let cleaned = ("" + phoneNumberString).replace(/\s/g, '');
  var match = false;
  if (cleaned.match(/^55/)) {
    match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
  }
  else {
    match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  }
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return phoneNumberString;
};
const hoteles = {
  ohr: {
    logo: assetUrl + "oasis.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    direccion: "KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "fb.png"
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "inst.png"
      }
    ]
  },
  rep: {
    logo: assetUrl + "oasis.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    noAddress: true,
    direccion: "TEST ;)",
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "fb.png"
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "inst.png"
      }
    ]
  },
  lavanderia: {
    logo: assetUrl + "oasis.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    direccion: "LBMTO. KABAH LOTE 2B REGIÓN 93 C.P 77517",
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "fb.png"
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "inst.png"
      }
    ]
  },
  ohrmexico: {
    logo: assetUrl + "oasis.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    direccion:
      "PENNSYLVANIA NO. 127 OFNAS 8-10 COL NAPOLES C.P. 03810 CIUDAD DE MEXICO",
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "fb.png"
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "inst.png"
      }
    ]
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
        icono: assetUrl + "iconos-otlc/fb.png"
      },
      {
        url: "https://twitter.com/OasisHotels",
        icono: assetUrl + "iconos-otlc/tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "iconos-otlc/blog.png"
      },
      {
        url: "https://www.instagram.com/oasishotels/",
        icono: assetUrl + "iconos-otlc/insta.png"
      }
    ]
  },
  ohrcentral: {
    central: true,
    logo: assetUrl + "oasis.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "CARRETERA CANCÚN AEROPUERTO KM 17 BLVD. LUIS DONALDO COLOSIO MZ. 04 LOTE 05 CENTRAL DE ABASTOS SM 301 UNIDAD 510",
    redes: [
      {
        url: "http://ow.ly/5Dqb30kI8lA",
        icono: assetUrl + "fb.png"
      },
      {
        url: "http://ow.ly/8jXf30kIaSO",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "http://ow.ly/pWLz30kI9xt",
        icono: assetUrl + "inst.png"
      }
    ]
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
        icono: assetUrl + "iconos-vcm/facebook.png"
      },
      {
        url: "https://bit.ly/2IzkNYi",
        icono: assetUrl + "iconos-vcm/twitter.png"
      },
      {
        url: "https://bit.ly/2MuUGmD",
        icono: assetUrl + "iconos-vcm/instagram.png"
      }
    ]
  },
  pyr: {
    logo: assetUrl + "logos/pyr.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/OMMV30m7j7t",
        icono: assetUrl + "fb.png"
      },
      {
        url: "http://ow.ly/H35A30md9lR",
        icono: assetUrl + "tw.png"
      },
      {
        url: "http://ow.ly/q1Y230md7Hc",
        icono: assetUrl + "inst.png"
      }
    ]
  },
  goc: {
    logo: assetUrl + "logos/goc.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/uYzD30kI8oJ",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "http://ow.ly/CfDh30mccpK",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "http://ow.ly/yjfs30kI9Dn",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
  },
  gop: {
    logo: assetUrl + "logos/gop.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "Blvd. Kukulkán Km 4.5 Sección C Lote 1, Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/v5L130mcc7F",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "http://ow.ly/XDgy30mccx5",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "http://ow.ly/mYqk30mcceZ",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
  },
  op: {
    logo: assetUrl + "logos/op.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "Blvd. Kukulkán Km 4.5 Sección C Lote 1, Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/Hbjk30md9BM",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "http://ow.ly/IUCU30md9vQ",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "http://ow.ly/dI4Y30md9F5",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
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
    direccion:
      "Blvd. Kukulkán Km 19.5 Lote 50 Zona Hotelera, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "https://bit.ly/2MqAQsL",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://bit.ly/2OxVtWt",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://bit.ly/33bl6Aq",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
  },
  smart: {
    logo: assetUrl + "logos/smart.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "Av. Tulum, esq. Brisa s/n Col. Centro, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/tW0Z30m7jj5",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "http://ow.ly/bcLE30md9yW",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "http://ow.ly/sTB630md7Of",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
  },
  oh: {
    logo: assetUrl + "logos/oh.png",
    color: "#756857",
    secondaryColor: "#C4A77E",
    cintillo: true,
    icono_cel: "cel.png",
    icono_phone: "tel.png",
    icono_pin: "pin.png",
    web: "www.oasishoteles.com",
    web_link: "https://www.oasishoteles.com",
    direccion:
      "Av. Tulum, esq. Brisa s/n Col. Centro, Cancún Q. Roo 77500 México",
    redes: [
      {
        url: "http://ow.ly/sPAN30m7jlZ",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "http://ow.ly/pkGw30m7kuT",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "http://ow.ly/VQRZ30m7knX",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
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
    direccion:
      "Km 252 Carret. Chetumal - Pto Juárez 77780 Akumal, Q. Roo México",
    redes: [
      {
        url: "https://www.facebook.com/GrandOasisTulum",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/GrandOasisTulum",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/grandoasistulum",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
  }
};
const Preview = props => {
  console.log(props);
  // const { color, cintillo, isVCM } = props;
  let {
    nombre,
    apellido,
    puesto,
    telefono,
    extension,
    hotel,
    celular
  } = props.data;
  let redes = hotel != null ? hoteles[hotel].redes : [];
  const templateTel = props => {
    return `
  <tr style="box-sizing: border-box;">
    <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${
      hoteles[hotel].icono_cel
      }" alt="" style="margin-right:5px"></td>
    <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${
      hoteles[hotel].color
      };font-size: 10px;letter-spacing: 0.48px;">
        <span style="line-height: 18px;mso-line-height-rule:exactly;">${
      props.tel
      }</span>
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
  <div style="white-space:nowrap; font-size:15px;">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  </div>
  <tr class="gmail-fix">
    <td>
        <table cellpadding="0" cellspacing="0" border="0" align="center" width="600" style="table-layout:fixed;width::600px;">
            <tr>
                <td cellpadding="0" cellspacing="0" border="0" height="1" ; style="line-height: 1px; min-width: 600px;">
                    <img src="spacer.gif" width="600" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 600px; width: 600px;" />
                </td>
            </tr>
        </table>
    </td>
  </tr>
  <!--<![endif]-->
  <table class="content" style="width: 600px;max-width:600px;box-sizing: border-box;border-collapse: collapse;border-spacing: 0;table-layout:fixed;">
      <tr>
          <td style="padding:25px;">
              <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif, 'Open Sans';border-collapse: collapse;width:100%;max-width:600px;">
                  <tr style="box-sizing: border-box;">
                      <td>
                          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom:2px solid ${
    hoteles[hotel].color
    };border-collapse: collapse;table-layout:fixed;">
                              <tr style="box-sizing: border-box;">
                                  <td valign="center" style="vertical-align: center;width: 34%;max-width:180px;height:120px;text-align: center; border-right:2px solid ${
    hoteles[hotel].color
    };">
                                      <a href="${hoteles[hotel].vcm ? 'https://caribemaya.com.mx' : 'https://www.oasishoteles.com'}" style="display:block;">
                                          <img style="max-width: 100%;display: block;margin:0 auto;" src="${
    hotel != null
      ? hoteles[hotel].logo
      : assetUrl + "oasis.png"
    }" alt="${hoteles[hotel].vcm ? "Viajes Caribe Maya" : ''}"  title="${hoteles[hotel].vcm ? "Viajes Caribe Maya" : ''}">
                                      </a>
                                  </td>
                                  <td valign="${telefono != null ? 'top' : 'center'}" style="vertical-align: ${telefono != null ? 'top' : 'middle'}; padding-top: 10px; padding-bottom: 10px;overflow:hidden;padding-left:35px;">
                                      <table cellpadding="0" cellspacing="0" border="0" width="100%" style=" border-collapse: collapse;">
                                          <tr style="box-sizing: border-box;text-align: left;">
                                              <td colspan="2" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;color: ${
    hoteles[hotel].color
    };font-size: 15px;font-weight: bold;letter-spacing: 0.72px;line-height: 20px;mso-line-height-rule:exactly;text-transform: uppercase;">${
    nombre != null ? nombre : "Nombre"
    } ${apellido != null ? apellido : "Apellido"}</td>
                                          </tr>
                                          <tr style="box-sizing: border-box;text-align: left;">
                                              <td style="mso-line-height-rule:exactly;line-height: 11px;font-size: 10px;letter-spacing: 0.48px;font-family: Arial, sans-serif, 'Open Sans';color: ${
    hoteles[hotel].secondaryColor
    };padding-bottom:20px;text-transform: uppercase;" colspan="2">${
    puesto != null ? puesto : "Puesto"
    }</td>
                                          </tr>
                                          ${
    celular != null
      ? `
                                          <tr style="box-sizing: border-box;">
                                              <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${
      hoteles[hotel].icono_cel
      }" alt="" style="margin-right:5px"></td>
                                              <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${
      hoteles[hotel].color
      };font-size: 10px;letter-spacing: 0.48px;">
                                                  <span style="line-height: 18px;mso-line-height-rule:exactly;">${celular}</span>
                                              </td>
                                          </tr>
                                          `
      : ""
    }
                                          ${telefono != null ?
      `
                                            <tr style="box-sizing: border-box;">
                                            <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${hoteles[hotel].icono_phone}" alt="" style="margin-right:5px"></td>
                                            <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${
      hoteles[hotel].color
      };font-size: 10px;letter-spacing: 0.48px;">
                                                <span style="line-height: 18px;mso-line-height-rule:exactly;padding-top:2px;">${
      telefono != null
        ? formatPhoneNumber(
          telefono
        )
        : "Teléfono"
      } ${extension != null ? `EXT. ${extension}` : ""}</span>
                                                  ${
      hoteles[hotel].central
        ? `/</span> <span>01 800 01 OASIS (62747)</span>`
        : ""
      }
                                            </td>
                                        </tr>
                                            `
      : `${hoteles[hotel].central
        ? `
                                                <tr style="box-sizing: border-box;">
                                            <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${hoteles[hotel].icono_phone}" alt="" style="margin-right:5px"></td>
                                            <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${
        hoteles[hotel].color
        };font-size: 10px;letter-spacing: 0.48px;">
                                                </span> <span>01 800 01 OASIS (62747)</span>
                                            </td>
                                        </tr>
                                              `
        : ""}`}
                                          
                                          ${
    hoteles[hotel].tel_800
      ? `
                                              <tr style="box-sizing: border-box;text-align: left;">
                                                  <td colspan="2" style="padding-top:2px;padding-left:18px;font-size:10px;color:${
      hoteles[hotel].color
      };"><span>MEX: 01 800 272 0249</span> <span style="font-weight:bold;">/</span> <span>USA & CAN: 01 800 439 0355</span></td>  
                                              </tr>
                                              `
      : ""
    }
                                         ${hoteles[hotel].noAddress ? '' : `
                                         <tr style="box-sizing: border-box;text-align: left;">
                                         <td valign="center" style="vertical-align:center;width:18px;padding-top:2px;"><img src="${assetUrl}${
      hoteles[hotel].icono_pin
      }" alt="" style="margin-right:5px"></td>
                                         <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';color: ${
      hoteles[hotel].color
      };font-size: 10px;letter-spacing: 0.48px;">
                                             <span style="mso-line-height-rule:exactly;line-height: 13px;">${
      hotel != null
        ? hoteles[hotel].direccion
        : "Direccion del Hotel"
      }</span>
                                         </td>
                                     </tr>
                                         `}
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr style="box-sizing: border-box;">
                      <td style="padding-top:15px;">
                          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                              <tr style="box-sizing: border-box;">
                                  <td valign="bottom" style="vertical-align:bottom;color: ${
    hoteles[hotel].secondaryColor
    };font-family: Arial, sans-serif, 'Open Sans';font-size: 12px;text-align: left;mso-line-height-rule:exactly;line-height: 14px;">
                                      <span style="margin-right:5px;">¡Síguenos en nuestras redes sociales!</span> 
                                      ${redes
      .map(el => {
        var cadena = "";
        cadena += `<a href=${
          el.url
          } style="margin-right:3px;"><img src=${
          el.icono
          } alt=""></a>`;
        return cadena;
      })
      .join("")}
                                  </td>
                                  ${hoteles[hotel].vcm ? `
                                  <td valign="bottom" style="vertical-align:bottom;color: ${
      hoteles[hotel].secondaryColor
      };font-family: Arial, sans-serif, 'Open Sans';font-size: 11px;text-align: left;mso-line-height-rule:exactly;line-height: 15px;font-weight: bold;">ARRIVE AND REVIVE</td>
                                  ` : ''}
                                  
                                  <td valign="bottom" style="vertical-align:bottom;text-align:right;"><a style="color: ${
    hoteles[hotel].secondaryColor
    };font-family: Arial, sans-serif, 'Open Sans';font-size: 12px;text-align: right;mso-line-height-rule:exactly;line-height: 14px;text-decoration: none;" href="${
    hoteles[hotel].web_link
    }">${hoteles[hotel].web}</a></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      ${
    !hoteles[hotel].vcm
      ? `
      <tr style="margin:0;box-sizing:border-box;">
      <td style="background:black;margin:0;box-sizing:border-box;padding-top:6px;padding-bottom: 6px;padding-left: 10px;padding-right: 10px;">
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing: 0;table-layout:fixed;width:580px;">
              <tr style="margin:0;box-sizing:border-box;">
                  <td style="padding-left:6px;color:#FFFFFF;word-wrap:break-word;width:250px;" align="right">
                      <div style="border-top:1px dotted #FFFFFF;height:1px;width:220px;max-width:220px;">&nbsp;</div>
                  </td>
                  <td style="padding-left:6px;" align="right">
                      <span style="font-family: Arial, sans-serif, 'Open Sans';color:#FFFFFF;font-size: 10px;font-weight: 500;letter-spacing: 0.36px;line-height: 11px;text-align: center;">¡Descarga nuestra App Oficial!</span>
                  </td>
                  <td style="padding-left:6px;" align="right">
                      <table cellpadding="0" cellspacing="0" border="0" style="margin:0;box-sizing:border-box;border-collapse: collapse;border-spacing: 0;">
                          <tr style="margin:0;box-sizing:border-box;text-align: right;">
                              <td>
                                  <a href="${linkAppIOS}">
                                      <img style="display:block;"  src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/appstore.png" alt="">
                                  </a>
                              </td>
                              <td style="padding-left:5px;">
                                  <a href="${linkAppAndroid}">
                                      <img style="display:block;" src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/googleplay.png" alt="">
                                  </a>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
      `
      : ""
    }
    ${
    hoteles[hotel].vcm ?
      `
      <tr style="margin:0;box-sizing:border-box;">
          <td style="padding:0px!important;width:600px;">
              <a href="https://caribemaya.com.mx">
                  <img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/cintillo-vcm.jpg" alt="">
              </a>
          </td>
      </tr>
      `
      :
      `
      <tr style="margin:0;box-sizing:border-box;">
          <td style="padding:0px!important;width:600px;">
              <a href="https://oasishoteles.com/es">
                  <img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/cintillo.jpg" alt="">
              </a>
          </td>
      </tr>
      `
    }
  </table>
  <!--[if !mso]><!-->
  <div style="white-space: nowrap;font-size:0px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  <!--<![endif]-->
</div>
  `;
  return (
    <div
      id="contenedor"
      dangerouslySetInnerHTML={{ __html: template }}
      ref={props.setRef}
    />
  );
};
export default Preview;
