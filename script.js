document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('Botao-Acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('Opcoes-Acessibilidades')

    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentaFonteBotao = document.getElementById('Aumentar-Fonte');
    const diminuiFonteBotao = document.getElementById('Diminuir-Fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})