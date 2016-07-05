import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
    baseUrl:string = "http://dientes.app/";
    versionApi:string = "api/v1/";

    constructor(private http?:Http) {

    }

    /*
     *  Obtiene la url completa
     *
     *  return String
     */
    getUrl(url:string = null):string {
        return this.baseUrl + this.versionApi + url;
    }

    /*
     * Hace una peticion GET a la api
     *
     * return JSON
     */
    getHttp(url:string, loginToken?:string) {
        let urlComplete = this.getUrl(url);

        return this.http.get(urlComplete, {
            //headers: Headers
        }).map(
            response => response.json()
        )
    }

    /*
     * Hace una peticion POST a la api
     *
     * return JSON
     */
    postHttp(url:string, body:string, options?:any) {
        let urlComplete = this.getUrl(url);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        return this.http.post(urlComplete, body, {
            headers: headers
        }).map(
            response => response.json()
        )
    }

    /*
     *  Obtiene todos los odontologos
     *
     *  return json
     */
    getOdontologos() {
        return this.getHttp("odontologos");
    }
    
    /*
     *  Obtiene todos los odontologos
     *
     *  return json
     */
    getOdontologo(idOdontologo:any) {
        return this.getHttp("detalleOdontologo/" + idOdontologo);
    }

    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getOdontologoPaciente(idOdontologo:any) {
        return this.getHttp("odontologos/" + idOdontologo);
    }

    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getHistorial(idPaciente:any) {
        return this.getHttp("historial/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getPacientes() {
        return this.getHttp("pacientes");
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getAlergias(idPaciente:any) {
        return this.getHttp("alergias/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getEnfermedades(idPaciente:any) {
        return this.getHttp("enfermedades/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getMedicamentos(idPaciente:any) {
        return this.getHttp("medicamentos/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getConsultas(idPaciente:any) {
        return this.getHttp("consultasPaciente/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getConsultasPorOdontologo(idOdontologo:any, idPaciente:any) {
        return this.getHttp("consulta/odontologo/" + idOdontologo + "/paciente/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getPaciente(idPaciente:any) {
        return this.getHttp("paciente/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getDientes(idPaciente:any) {
        return this.getHttp("dientes/" + idPaciente);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getClientesPorEdad() {
        return this.getHttp("clientesPorEdad/");
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getOdontologoTopMesPacientes(mes:number) {
        return this.getHttp("pacientesMes/" + mes);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getOdontologoTopMesIngresos(mes:number) {
        return this.getHttp("ingresosMes/" + mes);
    }
    
    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getTratamientoMes(mes:number, odontologo:any) {
        return this.getHttp("tratamientoMes/" + mes + '/' + odontologo);
    }

    /*
     *  Obtiene todos los pacientes de un odontologo
     *
     *  return json
     */
    getConsulta(idOdontologo:any, idPaciente:any) {
        return this.getHttp("consulta/odontologo/" + idOdontologo + "/paciente/" + idPaciente);
    }
    
    /*
     *  Crea un nuevo usuario
     *
     *  return json
     */
    postCita(body:any) {
        return this.postHttp("registrarCita", body);
    }
}