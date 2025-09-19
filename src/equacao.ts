export default class Equacao {
    public segundoGrau(a: number, b: number, c: number): number[] | string {
    if (a === 0) {
        return "Not a quadratic equation (a cannot be zero)";
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return [x]; // Single real root
    } else {
        // Complex roots (not covered in this example for simplicity,
        // but would involve Math.sqrt of a negative number and complex number representation)
        return "No real roots";
    }
}
}