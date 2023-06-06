"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var personas = [];
var persona1 = new persona_1.Persona('Juan', 'Gómez', 30, '12345678A', new Date(1990, 5, 15), 'Azul', 'Masculino', [
    new direccion_1.Direccion('Calle Alcalá', 123, 1, 'A', 28001, 'Madrid', 'Madrid'),
    new direccion_1.Direccion('Calle Gran Vía', 456, 2, 'B', 28013, 'Madrid', 'Madrid')
], [
    new mail_1.Mail('Personal', 'juan@gmail.com'),
    new mail_1.Mail('Trabajo', 'juan@google.com')
], [
    new telefono_1.Telefono('Móvil', 678901234),
    new telefono_1.Telefono('Casa', 912345678)
], 'LLamar mañana');
personas.push(persona1);
var persona2 = new persona_1.Persona('María', 'López', 28, '87654321B', new Date(1993, 10, 8), 'Verde', 'Femenino', [
    new direccion_1.Direccion('Calle Serrano', 789, 3, 'C', 28006, 'Madrid', 'Madrid'),
    new direccion_1.Direccion('Calle Mayor', 1011, 4, 'D', 28013, 'Madrid', 'Madrid')
], [
    new mail_1.Mail('Personal', 'maria@gmail.com'),
    new mail_1.Mail('Trabajo', 'maria@google.com')
], [
    new telefono_1.Telefono('Móvil', 645678901),
    new telefono_1.Telefono('Casa', 917654321)
], 'No contactar hasta la semana que viene');
personas.push(persona2);
var persona3 = new persona_1.Persona('Carlos', 'Martínez', 35, '56789012C', new Date(1988, 3, 20), 'Rojo', 'Masculino', [
    new direccion_1.Direccion('Calle Valencia', 456, 1, 'A', 8013, 'Barcelona', 'Barcelona'),
    new direccion_1.Direccion('Calle Rosellón', 789, 2, 'B', 8018, 'Barcelona', 'Barcelona')
], [
    new mail_1.Mail('Personal', 'carlos@gmail.com'),
    new mail_1.Mail('Trabajo', 'carlos@google.com')
], [
    new telefono_1.Telefono('Móvil', 601234567),
    new telefono_1.Telefono('Casa', 935678901)
], 'LLamar en horario de tardes');
personas.push(persona3);
var dniBuscado = '12345678A';
var personaEncontrada = persona_1.Persona.buscarPorDNI(personas, dniBuscado);
if (personaEncontrada) {
    console.log('Persona encontrada:');
    personaEncontrada.imprimirPersona();
}
else {
    console.log('Persona no encontrada.');
}
