import * as readline from 'readline';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Quais são seus números e a operação desejada?\n`, (v) => {
        let instrucoes = v.split(' ')
        let n1 = Number(instrucoes[0])
        let n2 = Number(instrucoes[1])
        let operacao = instrucoes[2]

        if (instrucoes.length == 1) {
            operacao = instrucoes[0]
        }

        console.log(`Estas foram as suas instruções: ${instrucoes}\n`)

        switch (operacao) {
            case 'Somar':
                let calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Dividir':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Sair':
                break
        }
    })
}