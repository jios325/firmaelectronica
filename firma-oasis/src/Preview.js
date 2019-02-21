import React from 'react';
import {assetUrl} from './config/config.js'
const formatPhoneNumber = (phoneNumberString)=> {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return phoneNumberString
}
const hoteles = {
  "ohr":{
      "logo":assetUrl+'oasis.png',
      "direccion":'KM. 6.5, BLVD. KUKULCÁN CANCÚN, MÉXICO  C.P 77500',
      "redes": [
        {
          "url": 'https://www.facebook.com/OasisHoteles',
          "icono": assetUrl+'fb.png'
        },
        {
          "url": 'https://twitter.com/OasisHotels',
          "icono": assetUrl+'tw.png'
        },
        {
          "url": 'https://blog.oasishoteles.com',
          "icono": assetUrl+'blog.png'
        },
        {
          "url": 'https://www.instagram.com',
          "icono": assetUrl+'inst.png'
        }
      ]
  },
  "pyr":{
      "logo":assetUrl+'logos/pyr.png',
      "direccion":'Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/GrandOasisCancun',
          "icono": assetUrl+'fb.png'
        },
        {
          "url": 'https://twitter.com/GranOasisCancun',
          "icono": assetUrl+'tw.png'
        },
        {
          "url": 'https://www.instagram.com/grandoasiscancun',
          "icono": assetUrl+'inst.png'
        }
      ]
  },
  "goc":{
      "logo":assetUrl+'logos/goc.png',
      "direccion":'Blvd. Kukulkán Km 16.5 Lote 45, 46 y 47 Zona Hotelera, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/GrandOasisCancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/GranOasisCancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/grandoasiscancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  },
  "gop":{
      "logo":assetUrl+'logos/gop.png',
      "direccion":'Blvd. Kukulkán Km 4.5 Sección C Lote 1, Zona Hotelera, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/GrandOasisPalm',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/GrandOasisPalm',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/grandoasispalm',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  },
  "op":{
      "logo":assetUrl+'logos/op.png',
      "direccion":'Blvd. Kukulkán Km 4.5 Sección C Lote 1, Zona Hotelera, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/GrandOasisPalm',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/GrandOasisPalm',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/grandoasispalm',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  },
  "gos":{
      "logo":assetUrl+'logos/gos.png',
      "direccion":'Blvd. Kukulkán Km 19.5 Lote 50 Zona Hotelera, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/GrandOasisSens',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/GrandOasisSens',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/grandoasissens',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  },
  "smart":{
      "logo":assetUrl+'logos/smart.png',
      "direccion":'Av. Tulum, esq. Brisa s/n Col. Centro, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/TheUrbanOasisCancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/UrbanOasisCUN',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/TheUrbanOasisCancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  },
  "oh":{
      "logo":assetUrl+'logos/oh.png',
      "direccion":'Av. Tulum, esq. Brisa s/n Col. Centro, Cancún Q. Roo 77500 México',
      "redes": [
        {
          "url": 'https://www.facebook.com/TheUrbanOasisCancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/UrbanOasisCUN',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/TheUrbanOasisCancun',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  },
  "got":{
      "logo":assetUrl+'logos/got.png',
      "direccion":'Km 252 Carret. Chetumal - Pto Juárez 77780 Akumal, Q. Roo México',
      "redes": [
        {
          "url": 'https://www.facebook.com/GrandOasisTulum',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/fb.png'
        },
        {
          "url": 'https://twitter.com/GrandOasisTulum',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tw.png'
        },
        {
          "url": 'https://www.instagram.com/grandoasistulum',
          "icono": 'https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/inst.png'
        }
      ]
  }
}
const Preview = (props) =>  {
  let {nombre,apellido,puesto,telefono,extension,hotel,celular} = props.data
  let redes = (hotel!=null)?hoteles[hotel].redes:[]
  let template =`
  <div>
  <style>
  .gmail-fix {
    display: none;
    display: none!important;
  }
  span, td, table, div {
    font-family: Arial, serif !important;
  }
</style>
<!--[if mso]>
<style> body,table tr,table td,a, span,table.MsoNormalTable {  font-family:Arial, Helvetica, sans-serif !important;  }</style>
<![endif]-->
<div style="white-space:nowrap; font-size:15px;">
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
</div>
  <tr class="gmail-fix">
    <td>
      <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
        <tr>
          <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 600px;">
            <img src="spacer.gif" width="600" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 600px; width: 600px;"/>
            </td>
          </tr>
      </table>
    </td>
  </tr>
<table class="content" style="width: 600px;max-width:600px;box-sizing: border-box;">
  <tr>
    <td style="padding:25px;">
        <table cellpadding="0" cellspacing="0"  border="0" style="font-family: Arial, sans-serif, 'Open Sans';border-collapse: collapse;width:100%;max-width:600px;">
            <tr style="box-sizing: border-box;">
              <td>
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom:2px solid #756857;border-collapse: collapse;">
                      <tr style="box-sizing: border-box;">
                        <td valign="center" style="vertical-align: center;width: 34%;max-width:180px;height:120px;text-align: center; border-right:2px solid #756857;">
                            <a href="https://www.oasishoteles.com" style="display:block;">
                              <img style="max-width: 100%;display: block;margin:0 auto;" src="${hotel!=null?hoteles[hotel].logo:assetUrl+'oasis.png'}">
                            </a>
                        </td>
                        <td valign="top" style="vertical-align: top; padding-top: 10px; padding-bottom: 10px;overflow:hidden;padding-left:35px;">
                          <table cellpadding="0" cellspacing="0" border="0" width="100%" style=" border-collapse: collapse;">
                            <tr style="box-sizing: border-box;text-align: left;"><td colspan="2" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;color: #756857;font-size: 15px;font-weight: bold;letter-spacing: 0.72px;line-height: 20px;mso-line-height-rule:exactly;text-transform: uppercase;">${(nombre!=null)?nombre:'Nombre'} ${(apellido!=null)?apellido:'Apellido'}</td></tr>
                            <tr style="box-sizing: border-box;text-align: left;"><td style="mso-line-height-rule:exactly;line-height: 11px;font-size: 10px;letter-spacing: 0.48px;font-family: Arial, sans-serif, 'Open Sans';color: #C4A77E;padding-bottom:20px;text-transform: uppercase;" colspan="2">${(puesto!=null)?puesto:'Puesto'}</td></tr>
                            <tr style="box-sizing: border-box;">
                              <td valign="center" style="vertical-align:center;width:18px;"><img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/tel.png" alt="" style="margin-right:5px"></td>
                              <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: #756857;font-size: 10px;letter-spacing: 0.48px;">
                                <span style="line-height: 18px;mso-line-height-rule:exactly;">${(telefono!=null)?formatPhoneNumber(telefono):'Teléfono'} EXT. ${(extension!=null)?extension:'Extensión'}</span>
                              </td>
                            </tr>
                            ${(celular!=null) ?`
                              <tr style="box-sizing: border-box;">
                                <td valign="center" style="vertical-align:center;width:18px;"><img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/cel.png" alt="" style="margin-right:5px"></td>
                                <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';text-align: left;vertical-align:center;color: #756857;font-size: 10px;letter-spacing: 0.48px;">
                                  <span style="line-height: 18px;mso-line-height-rule:exactly;">${celular}</span>
                                </td>
                              </tr>
                              `:''
                              }
                            <tr style="box-sizing: border-box;text-align: left;">
                              <td valign="center" style="vertical-align:center;width:18px;"><img src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/signature/pin.png" alt="" style="margin-right:5px"></td>
                              <td valign="center" style="font-family: Arial, sans-serif, 'Open Sans';color: #756857;font-size: 10px;letter-spacing: 0.48px;">
                                  <span style="mso-line-height-rule:exactly;line-height: 13px;">${(hotel!=null)?hoteles[hotel].direccion:'Direccion del Hotel'}</span>
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
                    <td valign="bottom" style="vertical-align:bottom;color: #C4A77E;font-family: Arial, sans-serif, 'Open Sans';font-size: 12px;text-align: left;mso-line-height-rule:exactly;line-height: 14px;">
                      <span style="margin-right:5px;">¡Síguenos en nuestras redes sociales!</span>
                        ${redes.map(el=>{
                          var cadena=''
                          cadena+=`<a href=${el.url} style="margin-right:3px;"><img src=${el.icono} alt=""></a>`
                          return cadena
                        }).join('')}
                    </td>
                    <td valign="bottom" style="vertical-align:bottom;text-align:right;"><a style="color: #C4A77E;font-family: Arial, sans-serif, 'Open Sans';font-size: 12px;text-align: right;mso-line-height-rule:exactly;line-height: 14px;text-decoration: none;" href="https://www.oasishoteles.com">www.oasishoteles.com</a></td>
                  </tr>
                </table>
              </td>
            </tr>
        </table>
    </td>
  </tr>
</table>
<div style="white-space: nowrap;font-size:0px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
</div>  
`
  return (
    <div dangerouslySetInnerHTML={{__html:template}} ref={props.setRef}/>
  )
}
export default Preview
