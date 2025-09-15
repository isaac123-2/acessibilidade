document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('Botao-Acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('Opcoes-Acessibilidades')

    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') ==='true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })

    const aumentaFonteBotao = document.getElementById('Aumentar-Fonte');
    const diminuiFonteBotao = document.getElementById('Diminuir-Fonte');

    const alternaconstraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaconstraste.addEventListener('click', function(){
        document.body.classList.toggle('alternaconstraste')
    })
})

ScrollReveal().reveal('#inicio',{ delay:500});
ScrollReveal().reveal('#tropicalia',{ delay:500});
ScrollReveal().reveal('#galeria',{ delay:500});
ScrollReveal().reveal('#contato',{ delay:500});