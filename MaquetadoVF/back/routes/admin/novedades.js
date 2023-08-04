var express = require('express');
var router = express.Router();
var novedadesModel =require('../../models/novedadesModel');

/* GET home page. */
router.get('/',async function(req, res, next) {

  const novedades = await novedadesModel.getNovedades();// los registros de mi db

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
    console.log(req.body)

    if(req.body.curso != "" && req.body.precio != "" && req.body.calumnos != "") {
      await novedadesModel.insertNovedad(req.body);
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

    var obj ={
      curso: req.body.curso,
      precio: req.body.precio,
      calumnos: req.body.calumnos
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