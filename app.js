const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")
const tipoTri = document.getElementById("TipoTriangulo")
const botão = document.getElementById("descobrir")

botão.onclick = () => {
    if(l1.value == "") {
        l1.focus();
    } else if (l2.value == "") {
        l2.focus();
    } else if (l3.value == "") {
        l3.focus();
    } else if(l1.value <= 0 || l2.value <= 0 || l3.value <= 0) {
        alert("Insira valores válidos!!");
    } else tipoTri.value = resultado(l1.value, l2.value, l3.value);
}

const resultado = (num1,num2,num3) => {
    if(num1 == num2 && num2 == num3) {
        return ("Equilátero");
    } else if (num1 == num2 || num1 == num3 || num2 == num3) {
        return("Isósceles");
    } else return("Escaleno");
}


const PrimeiroValor = document.getElementById("a")
const SegundoValor = document.getElementById("b")
const TerceiroValor = document.getElementById("c")
const resolver = document.getElementById("resolver")
const resposta = document.getElementById("resposta")

resolver.onclick = () => {
    if(PrimeiroValor.value == "") {
        PrimeiroValor.focus();
    } else if (SegundoValor.value == "") {
        SegundoValor.focus();
    } else if (TerceiroValor.value == "") {
        TerceiroValor.focus();
    } else resposta.value = bhaskara(PrimeiroValor.value, SegundoValor.value, TerceiroValor.value);
}

const bhaskara = (valor1, valor2, valor3) => {
    delta = (valor2**2) - 4*valor1*valor3;
        if (delta<0) {
            return("delta é negativo");
        } else
            resultado1 = (-Math.abs(valor2)+ delta) / (2*valor1);
            resultado2 = (-Math.abs(valor2)- delta) / (2*valor1);
           return(`${resultado1} e ${resultado2}`);
}



const nota = document.getElementById("NotaAluno")
const calculo = document.getElementById("calcular")
const aprovacao = document.getElementById("AprovacaoAluno")

calculo.onclick = () => {
    if(nota.value == "") {
        nota.focus();
    }  else if(nota.value < 0) {
        alert("Insira um valor válido");
    } else aprovacao.value = CalculoMedia(nota.value);
}

const CalculoMedia = (valor1) => {
    valor1 = Number.parseInt(valor1)
    if (valor1 < 38) {
        return(`Sua nota foi ${valor1}. Você foi reprovado.`);
    } else if ((valor1 + 3) % 5 === 0) {
        valor1 += 3;
        return(`Sua nota foi ${valor1}. Parabéns! Você foi aprovado.`);
    } else if ((valor1 + 2) % 5 === 0) {
        valor1 += 2;
        return(`Sua nota foi ${valor1}. Parabéns! Você foi aprovado.`);
    } else if ((valor1 + 1) % 5 === 0) {
        valor1 += 1;
        return(`Sua nota foi ${valor1}. Parabéns! Você foi aprovado.`);
    } else return(`Sua nota foi ${valor1}. Parabéns! Você foi aprovado`);
}




const numeral = document.getElementById("limite")
const BtnArray = document.getElementById("faz_array")
const array_final = document.getElementById("array_total")


const lista =[];

const contagem = (number) => {
    for(let i = 1;i < (parseInt(number)+1); i+=1) {
    if (i % 5 == 0 && i % 9 == 0) {
        z = "Luidy Moura";
        lista.push(z);
    } else if (i % 5 == 0) {
        x = "Luidy";
        lista.push(x);
    } else if (i % 9 == 0) {
        y = "Moura";
        lista.push(y);
    } else lista.push(i);
}  
}

BtnArray.onclick = () => {
     if(numeral.value == "") {
        numeral.focus();
    }  else if(numeral.value <= 0) {
        alert("Insira um valor válido");
    } else if (array_final.value != "") {
        lista.length = 0;
        array_final.value = lista
    } contagem(numeral.value);
    array_final.value = lista
}
