export default class Pitagoras {
  co;
  ca;

  constructor() {}

  calcular_hiponetusa() {
    let elevado = Math.pow(this.co, 2) + Math.pow(this.ca, 2);
    let h = Math.sqrt(elevado);
    return h
  }
}

