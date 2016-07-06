import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/pages/nuevo-paciente/nuevo-paciente.component.html',
    providers: [ApiService],
})

export class NuevoPacienteComponent {
    nacimiento:any;
    cedula:any;
    nombre:any;
    segundoNombre:any;
    apellido:any;
    segundoApellido:any;
    ocupacion:any;
    telefono:any;
    telefonoEmergencias:any;
    genero:any;
     
    ultimaVisita:any;
    aprietaDientes:any;
    dolorDiente:any;
    dolorDientesObservacion:any;
    sangraEncias:any;
    sangraEnciasObservacion:any;
    ruidoMandibula:any;
    ruidoMandibulaObservacion:any;
    fuma:any;
    cigarrillosDiarios:any;
    muerdeObjetos:any;
    muerdeUnas:any;
    experienciaDentalNegativa:any;
    instruidoCepillado:any;
    embarazada:any;
    cicloMenstrualRegular:any;
    tomaAnticonceptivos:any;
    
    alergias:any = []
    alergiaObservacion:any = []
    enfermedades:any = []
    enfermedadObservacion:any = []
    medicamentos:any = []
    medicamentoObservacion:any = []
    
    diente:any = [];
    dienteSeccion:any = [];
    dienteObservacion:any = [];
    
    dientesData:any = [];
    seccionData:any = [];
    alergiaData:any = [];
    enfermedadData:any = [];
    medicamentoData:any = [];
    
    numeroDientes = [1];
    numeroAlergias = [1];
    numeroEnfermedades = [1];
    numeroMedicamentos = [1];
    
    listoPaciente:boolean = false;
    listoHistorial:boolean = false;
    listoAlergias:boolean = false;
    listoEnfermedades:boolean = false;
    listoMedicamentos:boolean = false;
    listoDientes:boolean = false;
    fin:boolean = false;
    
    idPaciente:any;
    errorValidacion:any;
    
    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.generarDataDientes();
        this.getAlergias();
        this.getMedicamentos();
        this.getEnfermedades();
    }

    getBodyPaciente() {
        return 'fecha_nacimiento=' + this.nacimiento +
            '&cedula=' + this.cedula +
            '&nombre=' + this.nombre +
            '&segundo_nombre=' + this.segundoNombre +
            '&apellido=' + this.apellido +
            '&segundo_apellido=' + this.segundoApellido +
            '&ocupacion=' + this.ocupacion +
            '&telefono=' + this.telefono +
            '&telefono_emergencias=' + this.telefonoEmergencias +
            '&genero=' + this.genero;
    }
    
    getBodyHistorial() {
        'id=' + this.idPaciente +
		'&ultima_visita_al_odontologo=' + this.ultimaVisita +
		'&aprieta_los_dientes=' + this.aprietaDientes +
		'&dolor_de_dientes=' + this.dolorDiente +
		'&observacion_dolor=' + this.dolorDientesObservacion +
		'&sangrado_de_encias=' + this.sangraEncias +
		'&observacion_sangrado=' + this.sangraEnciasObservacion +
		'&ruido_al_mover_la_mandibula=' + this.ruidoMandibula +
		'&observacion_ruidos=' + this.ruidoMandibulaObservacion +
		'&fuma=' + this.fuma +
		'&cigarrillos_diarios=' + this.cigarrillosDiarios +
		'&muerde_objetos_extranos=' + this.muerdeObjetos +
		'&muerde_las_unas=' + this.muerdeUnas +
		'&experiencia_dental_negativa=' + this.experienciaDentalNegativa +
		'&instruido_en_cepillado=' + this.instruidoCepillado +
		'&embarazo=' + this.embarazada +
		'&ciclo_menstrual_regular=' + this.cicloMenstrualRegular +
		'&toma_anticonceptivos=' + this.tomaAnticonceptivos;
    }
    
    getBodyAlergia(i:number) {
        return 'id_alergia=' + this.alergias[i] +
            '&id_paciente=' + this.idPaciente +
            '&detalles=' + this.alergiaObservacion[i];
    }
    
    getBodyMedicamento(i:number) {
        return 'id_medicamento=' + this.medicamentos[i] +
            '&id_paciente=' + this.idPaciente +
            '&detalles=' + this.alergiaObservacion[i];
    }
    
    getBodyEnfermedad(i:number) {
        return 'id_enfermedad=' + this.alergias[i] +
            '&id_paciente=' + this.idPaciente +
            '&detalles=' + this.alergiaObservacion[i];
    }
    
    getBodyDientes(i:number) {
        return 'id_paciente=' + this.idPaciente +
            '&diente=' + this.diente[i] +
            '&seccion=' + this.dienteSeccion[i] +
            '&observacion=' + this.dienteObservacion[i];
    }
    
    generarDataDientes() {
        for (let i = 11; i <= 85; i++) {
            this.dientesData.push(i);
        }
        
        for (let i = 1; i <= 5; i++) {
            this.seccionData.push(i);
        }
    }
    
    getAlergias() {
        this.api.getTodasAlergias().subscribe(
            alergias => this.alergiaData = alergias,
            error => console.error(error)
        )
    }
    
    getMedicamentos() {
        this.api.getTodasMedicamentos().subscribe(
            medicamentos => this.medicamentoData = medicamentos,
            error => console.error(error)
        )
    }
    
    getEnfermedades() {
        this.api.getTodasEnfermedades().subscribe(
            enfermedades => this.enfermedadData = enfermedades,
            error => console.error(error)
        )
    }
    
    enviarForm() {
        if (this.validar()) {
            this.postPaciente();
            this.fin = true;
        }
    }
    
    postPaciente() {
        this.api.postPaciente(this.getBodyPaciente()).subscribe(
                paciente => {
                    if (paciente.resultado == 'exito') {
                        this.listoPaciente = true;
                        this.idPaciente = paciente.id_paciente
                        this.postHistorial();
                        this.postDientes();
                        this.postAlergia();
                        this.postEnfermedades();
                        this.postMedicamento();
                    } else {
                        console.log(paciente);
                    }
                },
                error => {
                    console.log(error);
                }
            )
    }
    
   postHistorial() {
        this.api.postHistorial(this.getBodyHistorial()).subscribe(
                historial => {
                    if (historial.resultado == 'exito') {
                        this.listoHistorial = true;   
                    } else {
                        console.log(historial)
                    }
                },
                error => {
                    console.log(error);
                }
            )
    }
    
    postDientes() {
        for (let i = 0; i < this.numeroDientes.length; i++) {
            this.api.postDiente(this.getBodyDientes(i)).subscribe(
                    dientes => {
                        if (dientes.resultado == 'exito') {
                            this.listoDientes = true;   
                        } else {
                            console.log(dientes)
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
        }
    }
    
    postAlergia() {
        for (let i = 0; i < this.numeroAlergias.length; i++) {
            this.api.postAlergia(this.getBodyAlergia(i)).subscribe(
                    alergias => {
                        if (alergias.resultado == 'exito') {
                            this.listoAlergias = true;   
                        } else {
                            console.log(alergias)
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
        }
    }
    
        postMedicamento() {
        for (let i = 0; i < this.numeroMedicamentos.length; i++) {
            this.api.postMedicamento(this.getBodyMedicamento(i)).subscribe(
                    medicamentos => {
                        if (medicamentos.resultado == 'exito') {
                            this.listoMedicamentos = true;   
                        } else {
                            console.log(medicamentos)
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
        }
    }
    
        postEnfermedades() {
        for (let i = 0; i < this.numeroEnfermedades.length; i++) {
            this.api.postEnfermedad(this.getBodyEnfermedad(i)).subscribe(
                    enfermedades => {
                        if (enfermedades.resultado == 'exito') {
                            this.listoEnfermedades = true;   
                        } else {
                            console.log(enfermedades)
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
        }
    }
    
    agregarNuevoDiente() {
        this.numeroDientes.push(1);
    }
    
   agregarNuevaAlergia() {
        this.numeroAlergias.push(1);
    }
    
    agregarNuevoMedicamento() {
        this.numeroMedicamentos.push(1);
    }
    
    agregarNuevaEnfermedad() {
        this.numeroEnfermedades.push(1);
    }
    
    validar() {
        if(this.nacimiento == undefined){
            this.errorValidacion = "El campo de nacimiento posee errores";
            return false;
        }

        if(this.cedula == undefined || isNaN(parseFloat(this.cedula))) {
        this.errorValidacion = "El campo de cedula posee errores";
                    return false;
        }
                if(this.nombre == undefined){
        this.errorValidacion = "El campo de nombre posee errores";
                    return false;
        }
        
                if(this.apellido == undefined){
        this.errorValidacion = "El campo de apellido posee errores";
                    return false;
        }

                if(this.ocupacion == undefined){
        this.errorValidacion = "El campo de ocupacion posee errores";
                    return false;
        }
                if(this.telefono == undefined || isNaN(parseFloat(this.telefono))) {
        this.errorValidacion = "El campo de telefono posee errores";
                    return false;
        }
                if(this.telefonoEmergencias== undefined || isNaN(parseFloat(this.telefonoEmergencias))) {
        this.errorValidacion = "El campo de telefonoEmergencias posee errores";
                    return false;
        }
                if(this.genero== undefined){
        this.errorValidacion = "El campo de genero posee errores";
                    return false;
        }
                
                if(this.ultimaVisita== undefined){
        this.errorValidacion = "El campo de ultimaVisita posee errores";
                    return false;
        }
                if(this.aprietaDientes== undefined){
        this.errorValidacion = "El campo de aprietaDientes posee errores";
                    return false;
        }
                if(this.dolorDiente== undefined){
        this.errorValidacion = "El campo de dolorDiente posee errores";
                    return false;
        }

                if(this.sangraEncias== undefined){
        this.errorValidacion = "El campo de sangraEncias posee errores";
                    return false;
        }

                if(this. ruidoMandibula== undefined){
        this.errorValidacion = "El campo de ruidoMandibula posee errores";
                    return false;
        }

                if(this.fuma== undefined){
        this.errorValidacion = "El campo de fuma posee errores";
                    return false;
        }
        
        if(isNaN(parseFloat(this.cigarrillosDiarios))){
        this.errorValidacion = "El campo de cigarrillosDiarios posee errores";
        return false;
        }
                if(this.muerdeObjetos== undefined){
        this.errorValidacion = "El campo de muerdeObjetos posee errores";
                    return false;
        }
                if(this.muerdeUnas== undefined){
        this.errorValidacion = "El campo de muerdeUnas posee errores";
                    return false;
        }
                if(this.experienciaDentalNegativa== undefined){
        this.errorValidacion = "El campo de experienciaDentalNegativa posee errores";
                    return false;
        }
                if(this.instruidoCepillado== undefined){
        this.errorValidacion = "El campo de instruidoCepillado posee errores";
                    return false;
        }
        
        for (let i = 0; i < this.numeroDientes.length - 1; i++) {
            if (this.diente[i+1] == undefined) {
                this.errorValidacion = "Existen errores en el campo de dientes";
                return false;
            }
            if (this.dienteSeccion[i+1] == undefined) {
                this.errorValidacion = "Existen errores en el campo de dientes";
                return false;
            }
        }
        
        for (let i = 0; i < this.numeroAlergias.length - 1; i++) {
            if (this.alergias[i+1] == undefined) {
                this.errorValidacion = "Existen errores en el campo de alergias";
                return false;
            }
        }
        
        for (let i = 0; i < this.numeroEnfermedades.length - 1; i++) {
            if (this.enfermedades[i+1] == undefined) {
                this.errorValidacion = "Existen errores en el campo de enfermedades";
                return false;
            }
        }
        
        for (let i = 0; i < this.numeroAlergias.length - 1; i++) {
            if (this.medicamentos[i+1] == undefined) {
                this.errorValidacion = "Existen errores en el campo de alergias";
                return false;
            }
        }
        
        return true
    }
}