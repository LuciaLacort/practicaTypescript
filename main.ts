import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const personas: Persona[] = [];

const persona1 = new Persona(
  'Juan',
  'Gómez',
  30,
  '12345678A',
  new Date(1990, 5, 15),
  'Azul',
  'Masculino',
  [
    new Direccion('Calle Alcalá', 123, 1, 'A', 28001, 'Madrid', 'Madrid'),
    new Direccion('Calle Gran Vía', 456, 2, 'B', 28013, 'Madrid', 'Madrid')
  ],
  [
    new Mail('Personal', 'juan@gmail.com'),
    new Mail('Trabajo', 'juan@google.com')
  ],
  [
    new Telefono('Móvil', 678901234),
    new Telefono('Casa', 912345678)
  ],
  'LLamar mañana'
);
personas.push(persona1);

const persona2 = new Persona(
  'María',
  'López',
  28,
  '87654321B',
  new Date(1993, 10, 8),
  'Verde',
  'Femenino',
  [
    new Direccion('Calle Serrano', 789, 3, 'C', 28006, 'Madrid', 'Madrid'),
    new Direccion('Calle Mayor', 1011, 4, 'D', 28013, 'Madrid', 'Madrid')
  ],
  [
    new Mail('Personal', 'maria@gmail.com'),
    new Mail('Trabajo', 'maria@google.com')
  ],
  [
    new Telefono('Móvil', 645678901),
    new Telefono('Casa', 917654321)
  ],
  'No contactar hasta la semana que viene'
);
personas.push(persona2);

const persona3 = new Persona(
  'Carlos',
  'Martínez',
  35,
  '56789012C',
  new Date(1988, 3, 20),
  'Rojo',
  'Masculino',
  [
    new Direccion('Calle Valencia', 456, 1, 'A', 8013, 'Barcelona', 'Barcelona'),
    new Direccion('Calle Rosellón', 789, 2, 'B', 8018, 'Barcelona', 'Barcelona')
  ],
  [
    new Mail('Personal', 'carlos@gmail.com'),
    new Mail('Trabajo', 'carlos@google.com')
  ],
  [
    new Telefono('Móvil', 601234567),
    new Telefono('Casa', 935678901)
  ],
  'LLamar en horario de tardes'
);
personas.push(persona3);


const dniBuscado = '12345678A';
const personaEncontrada = Persona.buscarPorDNI(personas, dniBuscado);
if (personaEncontrada) {
  console.log('Persona encontrada:');
  personaEncontrada.imprimirPersona();
} else {
  console.log('Persona no encontrada.');
}
