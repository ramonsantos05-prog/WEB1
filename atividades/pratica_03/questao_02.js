const alunos = [
    {
        nome: "João",
        notas: [8, 7, 9]
    },
    {
        nome: "Maria",
        notas: [5, 6, 4]
    },
    {
        nome: "Pedro",
        notas: [2, 3, 1]
    },
    {
        nome: "Ana",
        notas: [9, 8, 10]
    }
];


let alunosComMedia = alunos.map(function(aluno) {

    let soma = aluno.notas.reduce(function(total, nota) {
        return total + nota;
    }, 0);

    let media = soma / aluno.notas.length;

    return {
        nome: aluno.nome,
        media: media
    };
});

console.log("Alunos com média:");
console.log(alunosComMedia);

let aprovados = alunosComMedia.filter(function(aluno) {
    return aluno.media >= 7;
});

console.log("Alunos com média >= 7:");
console.log(aprovados);

let notasBaixas = alunosComMedia.filter(function(aluno) {
    return aluno.media < 3;
});

console.log("Alunos com média < 3:");
console.log(notasBaixas);