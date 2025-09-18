import Calculo from "./calculo";

export default class Radiciacao extends Calculo {
    public calculcar(n1: number, n2: number): number {
        return Math.pow(n1, 1 / n2)
    }
}