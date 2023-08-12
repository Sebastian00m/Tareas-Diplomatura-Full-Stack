var express = require('express');
var router = express.Router();
var novedadesModel =require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
/* GET home page. */
router.get('/',async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();// los registros de mi db

  novedades = novedades.map(novedad => {
    if(novedad.img_id) {
        const imagen = cloudinary.image(novedad.img_id, {
          width: 200,
          height: 100,
          crop: 'fill'
        });
        return {
          ...novedad,
          imagen
        }
    } else {
        return {
            ...novedad,
            imagen: ''
        }
    }
  });


  res.render('admin/novedades',{
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});
/*diseño del form agregar*/
router.get('/agregar',(req, res, next) =>{
  res.render ('admin/agregar',{
    layout : 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try{
    
    var img_id = '';
    console.log(req.files.imagen);

    if(req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if(req.body.curso != "" && req.body.precio != "" && req.body.calumnos != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades')
    }else{
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  
  let novedad = await novedadesModel.getNovedadById(id);
  if(novedad.img_id) {
      await (destroy(novedad.img_id));
  }

  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades');
});

 /*para mostrar el formulario y mostrar una sola NOVEDAD BY ID */
router.get('/modificar/:id', async (req,res,next)=> {
  var id = req.params.id;
  console.log(req.params.id);
  var novedad = await novedadesModel.getNovedadById(id);

  console.log(req.params.id);
  res.render('admin/modificar', { //modificar.hbs
    layout: 'admin/layout',
    novedad
  })
});

/*para modificar la novedad */
router.post ('/modificar', async (req,res,next) => {
  try {

      let img_id = req.body.img_original;
      let borrar_img_vieja = false;

      if(req.body.img_delete === "1") {
          img_id = null;
          borrar_img_vieja = true;
      } else {
          if (req.files && Object.keys(req.files).length > 0) {
              imagen = req.files.imagen;
              img_id = (await uploader(imagen.tempFilePath)).public_id;
              borrar_img_vieja = true;
          }
      }
      if(borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }

      var obj ={
        curso: req.body.curso,
        precio: req.body.precio,
        calumnos: req.body.calumnos,
        img_id
      }

    console.log(obj)
    console.log(req.body.id)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  }catch (error) {
    console.log(error)
    res.render('admins/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;