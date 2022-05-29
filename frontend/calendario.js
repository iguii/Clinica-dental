const apiRequest = require("request");

function generarCalendario(id_doctor){
    return new Promise((resolve, reject) =>{
        apiRequest("http://127.0.0.1:8000/api/citas/medico/" + id_doctor, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                citas = JSON.stringify(JSON.parse(body)); // asignamos el JSON a pacientes
                resolve(JSON.stringify(body));
            } else {
                if(err == null){
                    resolve("");
                }else{
                    console.log("algo mas aparte del error ha pasado :O");
                }
            }
        });
    })

}


module.exports = {
    getCalendario: generarCalendario
};





