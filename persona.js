"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setCumpleaños = function (cumpleaños) {
        this.cumpleaños = cumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.imprimirPersona = function () {
        console.log('Nombre:', this.getNombre());
        console.log('Apellidos:', this.getApellidos());
        console.log('Edad:', this.getEdad());
        console.log('DNI:', this.getDni());
        console.log('Cumpleaños:', this.cumpleaños);
        console.log('Color favorito:', this.getColorFavorito());
        console.log('Sexo:', this.getSexo());
        console.log('Direcciones:');
        this.getDirecciones().forEach(function (direccion) {
            console.log('- Calle:', direccion.getCalle());
            console.log('- Número:', direccion.getNumero());
            console.log('- Piso:', direccion.getPiso());
            console.log('- Letra:', direccion.getLetra());
            console.log('- Código Postal:', direccion.getCodigoPostal());
            console.log('- Población:', direccion.getPoblacion());
            console.log('- Provincia:', direccion.getProvincia());
        });
        console.log('Mails:');
        this.getMails().forEach(function (mail) {
            console.log('- Tipo:', mail.getTipo());
            console.log('- Dirección:', mail.getDireccion());
        });
        console.log('Teléfonos:');
        this.getTelefonos().forEach(function (telefono) {
            console.log('- Tipo:', telefono.getTipo());
            console.log('- Número:', telefono.getNumero());
        });
        console.log('Notas:', this.getNotas());
        console.log('------------------------');
    };
    Persona.buscarPorDNI = function (personas, dni) {
        return personas.filter(function (persona) {
            return persona.getDni() === dni;
        })[0];
    };
    return Persona;
}());
exports.Persona = Persona;
