function myDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeDark() {
  document.body.style.backgroundColor = "#333";
}

function changeRed() {
  document.body.style.backgroundColor = "rgb(129, 14, 14)";
}

function changeOrange() {
  document.body.style.backgroundColor = "rgb(218, 144, 76)";
}

function upper1Case() {
  alert(
    "O MEU NOME RUBEN JOSÉ SARAIVA PINTO, ALUNO DA UNIVERSIDADE FERNANDO PESSOA, ESTUDO AQUI PARA OBTER UMA LICENCIATURA EM ENGENHARIA INFORMÁTICA E DESENVOLVER COMPETÊNCIAS ÚTEIS E NECESSÁRIAS PARA O MERCADO DE TRABALHO. COM ISSO, A DIFICULDADE DO CURSO ESTÁ ADAPTADO PARA AS NECESSIDADES PARA OS ALUNOS QUE DESEJAM FREQUENTÁ-LO. NOS MEUS TEMPOS LIVRES, PASSO O MEU TEMPO NO COMPUTADOR A JOGAR VIDEOJOGOS DE DIVERSOS TIPOS COMO ESTRATÉGIA, AVENTURA E AÇÃO, E SE NÃO ESTIVER OCUPADO NISTO, VISUALIZO VIDEOS NA PLATAFORMA YOUTUBE. O CONTEÚDO DESTES PODEM VARIAR, DE TUTORIAIS EDUCATIVOS ATE ACONTECIMENTOS RECENTES QUE TERÃO CONSEQUÊNCIAS NO FUTURO. NESTA FORMA, OS MEUS INTERESSES TEM UMA BASE INTELECTUAL OU, NOUTRAS PALAVRAS, A PROCURA DE CONHECIMENTO E A EXPLORAÇÃO DO DESCONHECIDO,PORQUE É IMPORTANTE ESTAR INFORMADO NAS VÁRIAS MATÉRIAS. ATÉ AO ANO CORRENTE, EU ERA ESCUTEIRO NO AGRUPAMENTO 994 CAXINAS E PARTICIPAVA NO MOVIMENTO ESCUTISTA. EU TINHA UM PAPEL ATIVO NESTE E TINHA UM BOM INTERESSE NO DESENVOLVIMENTO DO AGRUPAMENTO E NO MOVIMENTO, MAS COM AS RESPONSABILIDADES DE UM NOVO ESTUDANTE UNIVERSITÁRIO IMPEDIA-ME DE MANTER ESTE PAPEL E FOCAR-ME NOS MEUS ESTUDOS AO MESMO TEMPO, COM ISSO SAÍ DESTE. NOUTRA ONDA DE PENSAMENTO, EU TENHO TAMBÉM UM INTERESSE PARTICULAR EM JOGOS COMO A SUECA, BILHAR, ENTRE OUTROS DEVIDO À OPORTUNIDADE DE CONECTAR-ME COM OS AMIGOS E FAMILIARES MAIS AFASTADOS E FACILITAR A CONVERSA ENTRE ELES, POR ISSO CONSIDERO ESTE UMA FERRAMENTA IMPORTANTE PARA O MEU FUTURO, PORQUE MUITAS DAS VEZES OS MEMBROS DE GRUPO DE TRABALHO SÃO PESSOAS DESCONHECIDAS OU QUE NUNCA TIVEMOS UMA CONVERSA COM ESTES, POR ISSO ESTES JOGOS DÃO UMA OPORTUNIDADE PARA CONHECER E DESENVOLVER O TRABALHO DE UMA FORMA MAIS INFORMADA ENTRE OS ELEMENTOS."
  )
}
 function upper2Case() {
   alert (" SOU O JOÃO PEDRO AMORIM MELO, TENHO VINTE ANOS E SOU ALUNO DA UNIVERSIDADE FERNANDO PESSOA. ESTOU NESTE MOMENTO A ESTUDAR NO ENSINO SUPERIOR NO CURSO DE ENGENHARIA INFORMÁTICA. DECIDI ENTRAR NESTE CURSO COM INTUITO DE DESENVOLVER AS MINHAS COMPETÊNCIAS E PROCURAR MAIS CONHECIMENTO SOBRE ESTA ÁREA DA TECNOLOGIA. ATUALMENTE, ESTOU A GOSTAR MUITO DA MINHA EXPERIÊNCIA NA UNIVERSIDADE FERNANDO PESSOA. SINTO-ME BASTANTE EMPENHADO E EMPOLGADO POR TODAS AS COISAS QUE ESTOU APRENDER. AS ÁREAS QUE ME INTRIGAM MAIS NA TECNOLOGIA SÃO OS COMPUTADORES, MAIS CONCRETAMENTE, A PROGRAMAÇÃO DE JOGOS E A INTELIGÊNCIA ARTIFICIAL. GOSTARIA E ESPERO FUTURAMENTE TRABALHAR ALGO RELACIONADO COM A IMERSÃO TOTAL, A NÍVEL DE PROGRAMAÇÃO E NÃO DE HARDWARE. A IMERSÃO TOTAL É UM TEMA AINDA POUCO EXPLORADO, MESMO HAVENDO ÓCULOS QUE PERMITEM TER UMA EXPERIÊNCIA DE REALIDADE AUMENTADA, EU PESSOALMENTE GOSTARIA DE EXPLORAR MUITO MAIS ESSA ÁREA. NOS MEUS TEMPOS LIVRES FAÇO VÁRIAS COISAS, COMO POR EXEMPLO, JOGO VIDEOJOGOS DE VÁRIOS TIPOS, ESTOU COM AMIGOS OU FAMILIARES, TAMBÉM PASSO MUITO TEMPO NO COMPUTADOR A DESENVOLVER UM PROJETO, A VER VÍDEOS NA PLATAFORMA YOUTUBE OU A LER JORNAIS/REVISTAS DE TECNOLOGIAS ONLINE.")
 }


