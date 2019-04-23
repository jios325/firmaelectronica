export const loginUserService = (request) => {
  let { user } = request
  console.log(user)
  let complejos = [
    {
      "nombre": "gos",
      "pass": 'sensXPFiOR',
      'hoteles': [{"code":"gos","hotel": "Grand Oasis Sens"}]
    },
    {
      "nombre": "goc",
      "pass": 'gocKtEkRe',
      'hoteles': [{"code":'goc',"hotel": "Grand Oasis Cancun"},{"code":'pyr',"hotel": "The Pyramid"}]
    },
    {
      "nombre": "urban",
      "pass": 'urbanKtEkRe',
      'hoteles': [{"code":'smart',"hotel": "Smart Cancun by Oasis"},{"code":'oh',"hotel": "Oh! The Urban Oasis"}]
    },
  ]
  // const hoteles = [
  //   {
  //     "usuario": "goc",
  //     "hotel": "Grand Oasis Cancun",
  //     "pass": 'gocKtEkRe'
  //   },
  //   {
  //     "usuario": "pyr",
  //     "hotel": "The Pyramid",
  //     "pass": 'pyrCBZbbd'
  //   },
  //   {
  //     "usuario": "got",
  //     "hotel": "Grand Oasis Tulum",
  //     "pass": 'tulum7RULfb'
  //   },
  //   {
  //     "usuario": "oh",
  //     "hotel": "Oh! The Urban Oasis",
  //     "pass": 'oh7RULfb'
  //   },
  //   {
  //     "usuario": "smart",
  //     "hotel": "Smart Cancun by Oasis",
  //     "pass": 'smart7RULfb'
  //   },
  //   {
  //     "usuario": "gop",
  //     "hotel": "Grand Oasis Palm",
  //     "pass": 'palm7RULfb'
  //   },
  //   {
  //     "usuario": "op",
  //     "hotel": "Oasis Palm",
  //     "pass": 'opalm7RULfb'
  //   },
  //   {
    //   "usuario": "gos",
    //   "hotel": "Grand Oasis Sens",
    //   "pass": 'sensXPFiOR'
    // },
  //   {
  //     "usuario": "ohr",
  //     "hotel": "Corporativo",
  //     "pass": 'corpo7RULfb'
  //   },
  // ];
  let search = complejos.find(ele => {
    return ele.nombre == user.usuario
  })
  console.log(search)
  let res
  if (!search) {
    res = { "error": "Usuario no Existe" }
  } else {
    var promise = new Promise(function (resolve, reject) {
      if (search.pass == user.password) {
        res = { "success": search }
        resolve(res)
      } else {
        res = { "error": "Contraseña incorrecta" }
        reject(res)
      }
    });
  }
  return res
};