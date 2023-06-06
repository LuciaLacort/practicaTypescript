import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleaños: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleaños: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
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

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellidos(): string {
    return this.apellidos;
  }

  public setApellidos(apellidos: string): void {
    this.apellidos = apellidos;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public getDni(): string {
    return this.dni;
  }

  public setCumpleaños(cumpleaños: Date): void {
    this.cumpleaños = cumpleaños;
  }

  public getColorFavorito(): string {
    return this.colorFavorito;
  }

  public setColorFavorito(colorFavorito: string): void {
    this.colorFavorito = colorFavorito;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public setDirecciones(direcciones: Direccion[]): void {
    this.direcciones = direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public setMails(mails: Mail[]): void {
    this.mails = mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public setTelefonos(telefonos: Telefono[]): void {
    this.telefonos = telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  public setNotas(notas: string): void {
    this.notas = notas;
  }

  public imprimirPersona(): void {
    console.log('Nombre:', this.getNombre());
    console.log('Apellidos:', this.getApellidos());
    console.log('Edad:', this.getEdad());
    console.log('DNI:', this.getDni());
    console.log('Cumpleaños:', this.cumpleaños);
    console.log('Color favorito:', this.getColorFavorito());
    console.log('Sexo:', this.getSexo());

    console.log('Direcciones:');
    this.getDirecciones().forEach((direccion) => {
      console.log('- Calle:', direccion.getCalle());
      console.log('- Número:', direccion.getNumero());
      console.log('- Piso:', direccion.getPiso());
      console.log('- Letra:', direccion.getLetra());
      console.log('- Código Postal:', direccion.getCodigoPostal());
      console.log('- Población:', direccion.getPoblacion());
      console.log('- Provincia:', direccion.getProvincia());
    });

    console.log('Mails:');
    this.getMails().forEach((mail) => {
      console.log('- Tipo:', mail.getTipo());
      console.log('- Dirección:', mail.getDireccion());
    });

    console.log('Teléfonos:');
    this.getTelefonos().forEach((telefono) => {
      console.log('- Tipo:', telefono.getTipo());
      console.log('- Número:', telefono.getNumero());
    });

    console.log('Notas:', this.getNotas());
    console.log('------------------------');
  }

  public static buscarPorDNI(personas: Persona[], dni: string): Persona | undefined {
    return personas.filter(function (persona) {
      return persona.getDni() === dni;
    })[0];
  }
}
