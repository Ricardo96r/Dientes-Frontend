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
     *  Crea un nuevo usuario
     *
     *  return json
     */
    postUser(body:string) {
        return this.postHttp("user", body);
    }
}