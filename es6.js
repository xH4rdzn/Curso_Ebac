const alunos = [
  { aluno: 'João', nota: 5 },
  { aluno: 'Lucas', nota: 8 },
  { aluno: 'Ana', nota: 3 },
  { aluno: 'Julia', nota: 10 },
  { aluno: 'Leo', nota: 9.5 },
  { aluno: 'Nicolas', nota: 2 },
];

function alunosAprovados(array) {
  const aprovados = array.filter((obj) => obj.nota >= 6);
  return aprovados.map((obj) => obj.aluno);
}

console.log(alunosAprovados(alunos));
