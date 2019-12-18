export const loginUserService = request => {
  let { user } = request;
  // TO DO: importar el json globalmente
  let complejos = [
    {
      nombre: "ohr",
      pass: "26837434",
      hoteles: [
        { code: "ohr", hotel: "Corporativo" },
        { code: "ohrcentral", hotel: "Corporativo" },
        { code: "ohrmexico", hotel: "Corporativo México" },
        { code: "lavanderia", hotel: "Lavandería y Taller de Costura" }
      ]
    },
    {
      nombre: "gos",
      pass: "sensXPFiOR",
      hoteles: [{ code: "gos", hotel: "Grand Sens Cancun" }]
    },
    {
      nombre: "goc",
      pass: "gocCBZbbd",
      hoteles: [
        { code: "goc", hotel: "Grand Oasis Cancun" },
        { code: "pyr", hotel: "The Pyramid" },
        { code: "otlc", hotel: "OTLC" }
      ]
    },
    {
      nombre: "gop",
      pass: "gopKtEkRe",
      hoteles: [
        { code: "gop", hotel: "Grand Oasis Palm" },
        { code: "op", hotel: "Oasis Palm" }
      ]
    },
    {
      nombre: "urban",
      pass: "urbanKth7wj",
      hoteles: [
        { code: "smart", hotel: "Smart Cancun by Oasis" },
        { code: "oh", hotel: "Oh! The Urban Oasis" }
      ]
    },
    {
      nombre: "got",
      pass: "tulum7RUloeu",
      hoteles: [{ code: "got", hotel: "Grand Oasis Tulum" }]
    },
    {
      nombre: "vcm",
      pass: "vcm7RUloeu",
      hoteles: [{ code: "vcm", hotel: "Caribe Maya" }]
    }
  ];
  let search = complejos.find(ele => {
    return ele.nombre == user.usuario;
  });
  console.log(search);
  let res;
  if (!search) {
    res = { error: "Usuario no Existe" };
  } else {
    var promise = new Promise(function (resolve, reject) {
      if (search.pass == user.password) {
        res = { success: search };
        resolve(res);
      } else {
        res = { error: "Contraseña incorrecta" };
        reject(res);
      }
    });
  }
  return res;
};
