import React from "react";
import { assetUrl } from "../config/config";
const formatPhoneNumber = phoneNumberString => {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
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
        url: "https://www.facebook.com/OasisHoteles",
        icono: assetUrl + "fb.png"
      },
      {
        url: "https://twitter.com/OasisHotels",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "https://www.instagram.com/oasishotels/",
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
        url: "https://www.facebook.com/OasisHoteles",
        icono: assetUrl + "fb.png"
      },
      {
        url: "https://twitter.com/OasisHotels",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "https://www.instagram.com/oasishotels/",
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
    direccion: "KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
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
        url: "https://www.facebook.com/OasisHoteles",
        icono: assetUrl + "fb.png"
      },
      {
        url: "https://twitter.com/OasisHotels",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://blog.oasishoteles.com",
        icono: assetUrl + "blog.png"
      },
      {
        url: "https://www.instagram.com/oasishotels/",
        icono: assetUrl + "inst.png"
      }
    ]
  },
  vcm: {
    vcm: true,
    color: "#175176",
    secondaryColor: "#175176",
    cintillo: false,
    logo: assetUrl + "logos/vcm.png",
    icono_cel: "iconos-vcm/cel.png",
    icono_phone: "iconos-vcm/phone.png",
    icono_pin: "iconos-vcm/pin.png",
    web: "www.caribemaya.com.mx",
    web_link: "https://caribemaya.com.mx/",
    direccion: "KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500",
    redes: [
      {
        url: "https://www.facebook.com/ViajeCaribeMaya",
        icono: assetUrl + "iconos-vcm/facebook.png"
      },
      {
        url: "https://twitter.com/ViajeCaribeMaya",
        icono: assetUrl + "iconos-vcm/twitter.png"
      },
      {
        url: "https://www.instagram.com/viajecaribemaya/",
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
        url: "https://www.facebook.com/GrandOasisCancun",
        icono: assetUrl + "fb.png"
      },
      {
        url: "https://twitter.com/GranOasisCancun",
        icono: assetUrl + "tw.png"
      },
      {
        url: "https://www.instagram.com/grandoasiscancun",
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
        url: "https://www.facebook.com/GrandOasisCancun",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/GranOasisCancun",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/grandoasiscancun",
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
        url: "https://www.facebook.com/GrandOasisPalm",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/GrandOasisPalm",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/grandoasispalm",
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
        url: "https://www.facebook.com/GrandOasisPalm",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/GrandOasisPalm",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/grandoasispalm",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png"
      }
    ]
  },
  gos: {
    logo: assetUrl + "logos/gos.png",
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
        url: "https://www.facebook.com/GrandOasisSens",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/GrandOasisSens",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/grandoasissens",
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
        url: "https://www.facebook.com/TheUrbanOasisCancun",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/UrbanOasisCUN",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/TheUrbanOasisCancun",
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
        url: "https://www.facebook.com/TheUrbanOasisCancun",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png"
      },
      {
        url: "https://twitter.com/UrbanOasisCUN",
        icono:
          "https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png"
      },
      {
        url: "https://www.instagram.com/TheUrbanOasisCancun",
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
  const { color, cintillo, isVCM } = props;
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
                                      <a href="https://www.oasishoteles.com" style="display:block;">
                                          <img style="max-width: 100%;display: block;margin:0 auto;" src="${
                                            hotel != null
                                              ? hoteles[hotel].logo
                                              : assetUrl + "oasis.png"
                                          }">
                                      </a>
                                  </td>
                                  <td valign="top" style="vertical-align: top; padding-top: 10px; padding-bottom: 10px;overflow:hidden;padding-left:35px;">
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
                                          <tr style="box-sizing: border-box;">
                                              <td valign="center" style="vertical-align:center;width:18px;"><img src="${assetUrl}${
    hoteles[hotel].icono_phone
  }" alt="" style="margin-right:5px"></td>
                                              <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: ${
                                                hoteles[hotel].color
                                              };font-size: 10px;letter-spacing: 0.48px;">
                                                  <span style="line-height: 18px;mso-line-height-rule:exactly;padding-top:2px;">${
                                                    telefono != null
                                                      ? formatPhoneNumber(
                                                          telefono
                                                        )
                                                      : "Teléfono"
                                                  } ${
    extension != null ? `EXT. ${extension}` : ""
  }</span>
                                              </td>
                                          </tr>
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
        hoteles[hotel].cintillo
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
                                  <a href="http://onelink.to/v2uxnu">
                                      <img style="display:block;"  src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/appstore.png" alt="">
                                  </a>
                              </td>
                              <td style="padding-left:5px;">
                                  <a href="http://onelink.to/v2uxnu">
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
  <tr style="margin:0;box-sizing:border-box;">
      <td style="padding:0px!important;width:600px;">
          <a href="https://oasishoteles.com/es">
              <img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cintillo/cintillo.jpg" alt="">
          </a>
      </td>
  </tr>
      `
          : ""
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
