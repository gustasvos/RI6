import Calculo from "./calculo";

export default class Soma extends Calculo {
    public calculcar(n1: number, n2: number): number {
        return n1 + n2
    }
}