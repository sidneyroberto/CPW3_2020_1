export default class PessoaController {

    calcularIMC(pessoa) {
        const imc = pessoa.peso / Math.pow(pessoa.altura, 2);
        return imc;
    }
}