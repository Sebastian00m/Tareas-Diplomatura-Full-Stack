var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from listado_precios';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    try{
        var query = 'insert into listado_precios set ?';
        var rows = await pool.query (query, [obj])
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById (id) {
    var query = 'delete from listado_precios where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById (id) {
    var query ='select *from listado_precios where id = ?' ;
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/*para modificar UPDATE de los datos */
async  function modificarNovedadById (obj, id) {
    try {
        var query = 'update listado_precios set ? where id = ?' ;
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch (error) {
        throw error;
    }
}

module.exports = {getNovedades , insertNovedad , deleteNovedadById , getNovedadById , modificarNovedadById};