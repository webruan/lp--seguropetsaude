// selecione o elemento que deseja carregar
const headerSection = document.getElementById('header');


// função que verifica se o elemento está visível na tela
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}

// função que carrega a seção quando o usuário chegar nela
function loadSection() {
    if (isElementVisible(headerSection)) {
        benefits = `
        <picture>
            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/vector.webp">
            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/vector.webp">
            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/vector.webp">
            <img loading="lazy" src="./src/images/desktop/1400px/vector.webp" alt="Background - Vector">
        </picture>
        `;

        table =
        `
        <div class="container table">
            <div class="content">
                <div class="column" id="column-table">
                    <div class="text">
                        <div class="title">
                            <h1>Planos e coberturas</h1>
                        </div>
                    </div>
    
                    <div class="row table-nav">
                        <div class="tab-item opened">
                            <button name="Petlove" class="tab-btn tab-00" onclick="openPlan('Petlove')">
                                <h6>Petlove</h6>
                            </button>
                        </div>
    
                        <div class="tab-item">
                            <button name="Plamev" class="tab-btn tab-01" onclick="openPlan('Plamev')">
                                <h6>Plamev</h6>
                            </button>
                        </div>

                        <div class="tab-item">
                            <button name="AuHappy" class="tab-btn tab-01" onclick="openPlan('AuHappy')">
                                <h6>Au!Happy</h6>
                            </button>
                        </div>
                    </div>
    
                    <div class="column plan" id="Petlove">
                        <div class="row"><!-- Tabela Petlove -->
                            <div class="column"><!-- Plano - Petlove Tranquilo -->
                                <div class="card"><!-- Cartão - Petlove Tranquilo -->
                                    <div class="price" style="background-color: #49A971;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>44,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>91*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>*Valor com 10% de desconto <span>Cartão Porto</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Petlove Tranquilo</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="01">
                                                <li>Consulta generalista</li>
                                                <li>Consulta Pet Home</li>
                                                <li>Vacinas importadas</li>
                                                <li>Urgência & emergência</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Exames de imagem</li>
                                                <li>Funeral/cremação</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Tranquilo -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Petlove%20Tranquilo!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Tranquilo -->
    
                            <div class="column"><!-- Plano - Petlove Ideal -->
                                <div class="card"><!-- Cartão - Petlove Ideal -->
                                    <div class="price" style="background-color: #FFA840;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>89,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>91*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>*Valor com 10% de desconto <span>Cartão Porto</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Petlove Ideal</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="02">
                                                <li>Consulta generalista</li>
                                                <li>Consulta Pet Home</li>
                                                <li>Vacinas importadas</li>
                                                <li>Urgência & emergência</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Exames de imagem</li>
                                                <li>Funeral/cremação</li>
                                                <li>Consulta especialista</li>
                                                <li>Exames cardiológicos</li>
                                                <li>Cirurgias</li>
                                                <li>Internação</li>
                                                <li>Castração</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Ideal -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Petlove%20Ideal!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Ideal -->
    
                            <div class="column"><!-- Plano - Petlove Essencial -->
                                <div class="card best-seller"><!-- Cartão - Petlove Essencial -->
                                    <div class="circle"><!-- Círclo informativo - Mais vendido -->
                                        <div class="text">
                                            <small>Mais vendido</small>
                                        </div>
                                    </div><!-- Fim do círculo -->
    
                                    <div class="price" style="background-color: #4E2096;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>161,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>91*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>*Valor com 10% de desconto <span>Cartão Porto</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Petlove Essencial</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="03">
                                                <li>Consulta generalista</li>
                                                <li>Consulta Pet Home</li>
                                                <li>Vacinas importadas</li>
                                                <li>Urgência & emergência</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Exames de imagem</li>
                                                <li>Funeral/cremação</li>
                                                <li>Consulta especialista</li>
                                                <li>Exames cardiológicos</li>
                                                <li>Cirurgias</li>
                                                <li>Internação</li>
                                                <li>Castração</li>
                                                <li>Exames de alta complexidade</li>
                                                <li>Fisioterapia</li>
                                                <li>Acupuntura</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Essencial -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Petlove%20Essencial!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Essencial -->
    
                            <div class="column"><!-- Plano - Petlove Completo -->
                                <div class="card"><!-- Cartão - Petlove Completo -->
                                    <div class="price" style="background-color: #EA534A;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>269,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>91*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>*Valor com 10% de desconto <span>Cartão Porto</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Petlove Completo</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="04">
                                                <li>Consulta generalista</li>
                                                <li>Consulta Pet Home</li>
                                                <li>Vacinas importadas</li>
                                                <li>Urgência & emergência</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Exames de imagem</li>
                                                <li>Funeral/cremação</li>
                                                <li>Consulta especialista</li>
                                                <li>Exames cardiológicos</li>
                                                <li>Cirurgias</li>
                                                <li>Internação</li>
                                                <li>Castração</li>
                                                <li>Exames de alta complexidade</li>
                                                <li>Fisioterapia</li>
                                                <li>Acupuntura</li>
                                                <li>Rede premium</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Completo -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Petlove%20Completo!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Completo -->
                        </div><!-- Fim da tabela - Petlove -->
    
                        <div class="column discount"><!-- Descontos progressivos - Petlove -->
                            <div class="text">
                                <div class="title">
                                    <h2>Descontos progressivos</h2>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="item small"><!-- Desconto 01 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>10% no segundo pet</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/two-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/two-pets.webp">
                                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/two-pets.webp">
                                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/two-pets.webp">
                                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/two-pets.webp">
                                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/two-pets.webp">
                                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/two-pets.webp">
                                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/two-pets.webp">
                                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/two-pets.webp">
                                            <img loading="lazy" src="./src/images/desktop/1400px/two-pets.webp" alt="Dois cachorros felizes">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 01 -->
    
                                <div class="item medium"><!-- Desconto 02 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>20% no terceiro pet</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/three-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/three-pets.webp">
                                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/three-pets.webp">
                                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/three-pets.webp">
                                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/three-pets.webp">
                                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/three-pets.webp">
                                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/three-pets.webp">
                                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/three-pets.webp">
                                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/three-pets.webp">
                                            <img loading="lazy" src="./src/images/desktop/1400px/three-pets.webp" alt="Três gatinhos lindos">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 02 -->
    
                                <div class="item large"><!-- Desconto 03 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>30% no quarto pet ou mais</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/five-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/five-pets.webp">
                                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/five-pets.webp">
                                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/five-pets.webp">
                                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/five-pets.webp">
                                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/five-pets.webp">
                                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/five-pets.webp">
                                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/five-pets.webp">
                                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/five-pets.webp">
                                            <img loading="lazy" src="./src/images/desktop/1400px/five-pets.webp" alt="Três cachorros e dois gatinhos">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 03 -->
                            </div>
                        </div><!-- Fim dos descontos progressivos - Petlove -->
                    </div>
    
                    <div class="column plan" id="Plamev" style="display: none;">
                        <div class="row"><!-- Tabela Plamev -->
                            <div class="column"><!-- Plano - Plamev Slim -->
                                <div class="card"><!-- Cartão - Plamev Slim -->
                                    <div class="price" style="background-color: #009ca4;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de:</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>39,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>99*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Slim</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="01">
                                                <li>Clínico geral</li>
                                                <li>Emergencial</li>
                                                <li>Exames laboratoriais básicos</li>
                                                <li>Vacina contra raiva</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Plamev Slim -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Plamev%20Slim!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Plamev Slim -->
    
                            <div class="column"><!-- Plano - Plamev Advance -->
                                <div class="card best-seller"><!-- Cartão - Plamev Advance -->
                                    <div class="circle"><!-- Círclo informativo - Mais vendido -->
                                        <div class="text">
                                            <small>Mais vendido</small>
                                        </div>
                                    </div><!-- Fim do círculo -->
    
                                    <div class="price" style="background-color: #FFA840;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de:</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>99,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>99*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Advance</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="02">
                                                <li>Clínico geral</li>
                                                <li>Emergencial</li>
                                                <li>Cirurgias simples</li>
                                                <li>Anestesia</li>
                                                <li>Procedimentos ambulatoriais</li>
                                                <li>Exames por imagens</li>
                                                <li>Exames laboratoriais (básicos / rotina / check-up)</li>
                                                <li>Vacinas</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Plamev Advance -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Plamev%20Advance!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Plamev Advance -->
    
                            <div class="column"><!-- Plano - Plamev Platinum -->
                                <div class="card"><!-- Cartão - Plamev Platinum -->
                                    <div class="price" style="background-color: #0077b2;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de:</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>169,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>99*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Plamev Platinum</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="03">
                                                <li>Clínico geral</li>
                                                <li>Emergencial</li>
                                                <li>Consulta especialista</li>
                                                <li>Cirurgias</li>
                                                <li>Anestesia</li>
                                                <li>Procedimentos ambulatoriais</li>
                                                <li>Exames por imagens</li>
                                                <li>Exames laboratoriais (básicos / rotina / check-up / sorológicos)</li>
                                                <li>Vacinas</li>
                                                <li>Fisioterapia</li>
                                                <li>Acupuntura</li>
                                                <li>Ozonioterapia</li>
                                                <li>Auxilio Funeral (Cremação)</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Plamev Platinum -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Plamev%20Platinum!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Plamev Platinum -->
    
                            <div class="column"><!-- Plano - Plamev Diamond -->
                                <div class="card"><!-- Cartão - Plamev Diamond -->
                                    <div class="price" style="background-color: #79cc43;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de:</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>299,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>95*</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Diamond</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="04">
                                                <li>Clínico geral</li>
                                                <li>Emergencial</li>
                                                <li>Consulta especialista</li>
                                                <li>Cirurgias</li>
                                                <li>Anestesia</li>
                                                <li>Procedimentos ambulatoriais</li>
                                                <li>Exames por imagens completo</li>
                                                <li>Exames laboratoriais completo</li>
                                                <li>Vacinas</li>
                                                <li>Fisioterapia</li>
                                                <li>Acupuntura</li>
                                                <li>Ozonioterapia</li>
                                                <li>Auxilio Funeral (Cremação)</li>
                                                <li>Exames do olho</li>
                                                <li>Reprodução assistida (inseminação artificial)</li>
                                                <li>PET HELP (assessoria 24h por telefone)</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Plamev Diamond -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Plamev%20Diamond!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Plamev Diamond -->
                        </div><!-- Fim da tabela - Plamev -->
    
                        <div class="column discount"><!-- Descontos progressivos - Plamev -->
                            <div class="text">
                                <div class="title">
                                    <h2>Descontos progressivos</h2>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="item small"><!-- Desconto 01 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>5% no segundo pet</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="../src/images/desktop/1400px/two-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="../src/images/desktop/1200px/two-pets.webp">
                                            <source media="(min-width: 992px)" srcset="../src/images/desktop/992px/two-pets.webp">
                                            <source media="(min-width: 768px)" srcset="../src/images/tablet/768px/two-pets.webp">
                                            <source media="(min-width: 576px)" srcset="../src/images/tablet/576px/two-pets.webp">
                                            <source media="(min-width: 480px)" srcset="../src/images/tablet/480px/two-pets.webp">
                                            <source media="(min-width: 414px)" srcset="../src/images/mobile/414px/two-pets.webp">
                                            <source media="(min-width: 376px)" srcset="../src/images/mobile/376px/two-pets.webp">
                                            <source media="(min-width: 320px)" srcset="../src/images/mobile/320px/two-pets.webp">
                                            <img loading="lazy" src="../src/images/desktop/1400px/two-pets.webp" alt="Dois cachorros felizes">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 01 -->
    
                                <div class="item medium"><!-- Desconto 02 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>10% no terceiro pet</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="../src/images/desktop/1400px/three-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="../src/images/desktop/1200px/three-pets.webp">
                                            <source media="(min-width: 992px)" srcset="../src/images/desktop/992px/three-pets.webp">
                                            <source media="(min-width: 768px)" srcset="../src/images/tablet/768px/three-pets.webp">
                                            <source media="(min-width: 576px)" srcset="../src/images/tablet/576px/three-pets.webp">
                                            <source media="(min-width: 480px)" srcset="../src/images/tablet/480px/three-pets.webp">
                                            <source media="(min-width: 414px)" srcset="../src/images/mobile/414px/three-pets.webp">
                                            <source media="(min-width: 376px)" srcset="../src/images/mobile/376px/three-pets.webp">
                                            <source media="(min-width: 320px)" srcset="../src/images/mobile/320px/three-pets.webp">
                                            <img loading="lazy" src="../src/images/desktop/1400px/three-pets.webp" alt="Três gatinhos lindos">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 02 -->
    
                                <div class="item large"><!-- Desconto 03 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>15% no quarto pet ou mais</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="../src/images/desktop/1400px/five-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="../src/images/desktop/1200px/five-pets.webp">
                                            <source media="(min-width: 992px)" srcset="../src/images/desktop/992px/five-pets.webp">
                                            <source media="(min-width: 768px)" srcset="../src/images/tablet/768px/five-pets.webp">
                                            <source media="(min-width: 576px)" srcset="../src/images/tablet/576px/five-pets.webp">
                                            <source media="(min-width: 480px)" srcset="../src/images/tablet/480px/five-pets.webp">
                                            <source media="(min-width: 414px)" srcset="../src/images/mobile/414px/five-pets.webp">
                                            <source media="(min-width: 376px)" srcset="../src/images/mobile/376px/five-pets.webp">
                                            <source media="(min-width: 320px)" srcset="../src/images/mobile/320px/five-pets.webp">
                                            <img loading="lazy" src="../src/images/desktop/1400px/five-pets.webp" alt="Três cachorros e dois gatinhos">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 03 -->
                            </div>
                        </div><!-- Fim dos descontos progressivos - Plamev -->
                    </div>

                    <div class="column plan" id="AuHappy" style="display: none;">
                        <div class="row"><!-- Tabela Petlove -->
                            <div class="column"><!-- Plano - Petlove Tranquilo -->
                                <div class="card"><!-- Cartão - Petlove Tranquilo -->
                                    <div class="price" style="background-color: #b6cc01;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>47,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>90</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>A forma mais econômica de garantir a saúde do seu pet.</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Au! Pet</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="01">
                                                <li>6 consultas (quantidade anual)</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Vacinas V8 ou V10</li>
                                                <li>Vacina anti-rábica</li>
                                                <li>Teste Leishmaniose</li>
                                                <li>Exames de imagem</li>
                                                <li>Consultas em domicílio</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Tranquilo -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Au!%20Pet!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Tranquilo -->
    
                            <div class="column"><!-- Plano - Petlove Ideal -->
                                <div class="card best-seller"><!-- Cartão - Petlove Ideal -->
                                    <div class="circle"><!-- Círclo informativo - Mais vendido -->
                                        <div class="text">
                                            <small>Mais vendido</small>
                                        </div>
                                    </div><!-- Fim do círculo -->

                                    <div class="price" style="background-color: #504797;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>84,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>90</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>O plano com o melhor custo-benefício para você e seu pet.</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Au! Friendly</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="02">
                                                <li>8 consultas (quantidade anual)</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Raio X</li>
                                                <li>Ultrassom</li>
                                                <li>Vacinas V8 ou V10</li>
                                                <li>Vacina anti-rábica</li>
                                                <li>Vacina contra Giárdia</li>
                                                <li>Teste Leishmaniose</li>
                                                <li>Consultas em domicílio</li>
                                                <li>7 Diárias de internação (quantidade anual)</li>
                                                <li>Medicamento anestésico injetável</li>
                                                <li>Serviços de enfermagem</li>
                                                <li>Serviço de oxigênio, soro e medicamentos durante o período de internação</li>
                                                <li>Limpeza no canal auditivo</li>
                                                <li>Extração dentária</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Ideal -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Au!%20Friendly!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Ideal -->
    
                            <div class="column"><!-- Plano - Petlove Essencial -->
                                <div class="card"><!-- Cartão - Petlove Essencial -->
                                    <div class="price" style="background-color: #f9b125;"><!-- Preço do plano -->
                                        <div class="text">
                                            <div class="column">
                                                <p>A partir de</p>
    
                                                <div class="row">
                                                    <div class="text-upper">
                                                        <small>R$</small>
                                                    </div>
    
                                                    <div class="text-center">
                                                        <h1>147,</h1>
                                                    </div>
    
                                                    <div class="text-upper">
                                                        <div class="column">
                                                            <h1>90</h1>
                                                            <small>mensais</small>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <small>Assistência completa com tudo que você possa imaginar em serviços para pet.</span></small>
                                            </div>
                                        </div>
                                    </div><!-- Fim do preço do plano -->
    
                                    <div class="name"><!-- Nome do plano -->
                                        <div class="text">
                                            <div class="title">
                                                <h6>Au! Love</h6>
                                            </div>
                                        </div>
                                    </div><!-- Fim do nome do plano -->
    
                                    <div class="list items-list"><!-- Benefícios do plano -->
                                        <div class="text benefits-plan">
                                            <ul id="03">
                                                <li>10 consultas (quantidade anual)</li>
                                                <li>Exames laboratoriais</li>
                                                <li>Raio X</li>
                                                <li>Ultrassom</li>
                                                <li>Eletrocardiograma</li>
                                                <li>Eco cardiograma</li>
                                                <li>Vacinas V8 ou V10</li>
                                                <li>Vacina anti-rábica</li>
                                                <li>Vacina contra Giárdia</li>
                                                <li>Vacinas (Bronchi Shield e/ou Pneumodog Bronchiguard)</li>
                                                <li>Vacina contra Leishmaniose</li>
                                                <li>Teste Leishmaniose</li>
                                                <li>Limpeza do canal auditivo</li>
                                                <li>Consultas em domicílio</li>
                                                <li>10 Diárias de internação (quantidade anual)</li>
                                                <li>Medicamento anestésico injetável ou inalatório</li>
                                                <li>Serviços de enfermagem</li>
                                                <li>Serviço de oxigênio, soro e medicamentos durante o período de internação</li>
                                                <li>Extração dentária</li>
                                                <li>Tartarectomia (limpeza de tártaro)</li>
                                                <li>Gastrotomia</li>
                                                <li>Procedimento cirúrgico de castração</li>
                                                <li>Procedimento cirúrgico de cesárea</li>
                                            </ul>
                                        </div>
    
                                        <div class="btn">
                                            <button name="Ver mais" class="see-more">Ver mais</button>
                                        </div>
                                    </div><!-- Fim dos benefícios do plano -->
                                </div><!-- Fim do cartão - Petlove Essencial -->
    
                                <div class="btn cta">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20Au!%20Love!">Tenho interesse!</a>
                                </div>
                            </div><!-- Fim do plano - Petlove Essencial -->
                        </div><!-- Fim da tabela - Petlove -->

                        <div class="column discount"><!-- Descontos progressivos - Plamev -->
                            <div class="text">
                                <div class="title">
                                    <h2>Descontos progressivos</h2>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="item small"><!-- Desconto 01 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>AuPet = 5% </p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/two-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/two-pets.webp">
                                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/two-pets.webp">
                                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/two-pets.webp">
                                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/two-pets.webp">
                                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/two-pets.webp">
                                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/two-pets.webp">
                                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/two-pets.webp">
                                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/two-pets.webp">
                                            <img loading="lazy" src="./src/images/desktop/1400px/two-pets.webp" alt="Dois cachorros felizes">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 01 -->

                                <div class="item medium"><!-- Desconto 01 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>AuFriendly = 7%</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/two-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/two-pets.webp">
                                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/two-pets.webp">
                                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/two-pets.webp">
                                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/two-pets.webp">
                                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/two-pets.webp">
                                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/two-pets.webp">
                                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/two-pets.webp">
                                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/two-pets.webp">
                                            <img loading="lazy" src="./src/images/desktop/1400px/two-pets.webp" alt="Dois cachorros felizes">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 01 -->

                                <div class="item large"><!-- Desconto 01 -->
                                    <div class="circle discount">
                                        <div class="text">
                                            <p>AuLove = 10%</p>
                                        </div>
                                    </div>
    
                                    <div class="img">
                                        <picture>
                                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/two-pets.webp">
                                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/two-pets.webp">
                                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/two-pets.webp">
                                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/two-pets.webp">
                                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/two-pets.webp">
                                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/two-pets.webp">
                                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/two-pets.webp">
                                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/two-pets.webp">
                                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/two-pets.webp">
                                            <img loading="lazy" src="./src/images/desktop/1400px/two-pets.webp" alt="Dois cachorros felizes">
                                        </picture>
                                    </div>
                                </div><!-- Fim do desconto 01 -->
                            </div>
                        </div><!-- Fim dos descontos progressivos - Plamev -->
                    </div>
                </div>
            </div>
        </div>
        `;

        differentials =
        `
        <div class="container differentials">
            <div class="content">
                <div class="column">
                    <div class="text">
                        <div class="title">
                            <h1>Diferenciais dos planos</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="card"><!-- Diferenciais do plano - Petlove -->
                            <div class="column">
                                <div class="img" id="img5">
                                    <picture>
                                        <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/petlove-porto.webp">
                                        <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/petlove-porto.webp">
                                        <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/petlove-porto.webp">
                                        <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/petlove-porto.webp">
                                        <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/petlove-porto.webp">
                                        <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/petlove-porto.webp">
                                        <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/petlove-porto.webp">
                                        <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/petlove-porto.webp">
                                        <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/petlove-porto.webp">
                                        <img loading="lazy" src="./src/images/desktop/1400px/petlove-porto.webp" alt="Logo Petlove Saúde">
                                    </picture>
                                </div>

                                <div class="list">
                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='chip'></box-icon>
                                        <p>Microchipagem gratuita</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='current-location' ></box-icon>
                                        <p>Localizador Pet gratuito</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='package' ></box-icon>
                                        <p>Frete grátis na Petlove</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='block' ></box-icon>
                                        <p>Sem fidelidade</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='cart-add' ></box-icon>
                                        <p>Possui compra de carência</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='block' ></box-icon>
                                        <p>Sem limite de idade para contratação</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='discount' type='solid' ></box-icon>
                                        <p>Desconto progressivo contratando mais de 1 pet</p>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fim dos diferenciais do plano - Petlove -->
                        
                        <div class="card"><!-- Diferenciais do plano - Plamev -->
                            <div class="column">
                                <div class="img" id="img6">
                                    <picture>
                                        <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/plamev.webp">
                                        <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/plamev.webp">
                                        <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/plamev.webp">
                                        <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/plamev.webp">
                                        <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/plamev.webp">
                                        <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/plamev.webp">
                                        <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/plamev.webp">
                                        <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/plamev.webp">
                                        <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/plamev.webp">
                                        <img loading="lazy" src="./src/images/desktop/1400px/plamev.webp" alt="Logo Plamev">
                                    </picture>
                                </div>

                                <div class="list">
                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='chip' ></box-icon>
                                        <p>Sem obrigatoriedade de microchipagem</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='money-withdraw' ></box-icon>
                                        <p>Reembolso fora da rede credenciada</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='phone' ></box-icon>
                                        <p>Atendimento internacional por reembolso</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='group' ></box-icon>
                                        <p>Sem coparticipação</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='money' ></box-icon>
                                        <p>Opção de pagamento no boleto</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='discount' type='solid' ></box-icon>
                                        <p>Compra de banho/ tosa com desconto</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='discount' type='solid' ></box-icon>
                                        <p>Desconto progressivo contratando mais de 1 pet</p>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fim dos diferenciais do plano - Plamev -->

                        <div class="card"><!-- Diferenciais do plano - Plamev -->
                            <div class="column">
                                <div class="img" id="img7">
                                    <picture>
                                        <source media="(min-width: 320px)" srcset="./src/images/desktop/1400px/auhappy.png">
                                        <img loading="lazy" src="./src/images/desktop/1400px/auhappy.png" alt="Logo auhappy">
                                    </picture>
                                </div>

                                <div class="list">
                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='chip' ></box-icon>
                                        <p>Sem obrigatoriedade de microchipagem</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='money-withdraw' ></box-icon>
                                        <p>Reembolso fora da rede credenciada</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='revision' ></box-icon>
                                        <p>Opção de migrar o plano de outra operadora sem carência</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='group' ></box-icon>
                                        <p>Sem coparticipação</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='money' ></box-icon>
                                        <p>Opção de pagamento no boleto</p>
                                    </div>

                                    <div class="text">
        
                                        <box-icon color="#121718" size="18px" name='group' type='solid'></box-icon>
                                        <p>Clube de vantagens exclusivo</p>
                                    </div>

                                    <div class="text">
                                        <box-icon color="#121718" size="18px" name='discount' type='solid' ></box-icon>
                                        <p>Desconto contratando mais de 2 pets</p>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fim dos diferenciais do plano - Plamev -->
                    </div>
                </div>
            </div>
        </div>
        `;

        steps =
        `
        <div class="container steps">
            <div class="content">
                <div class="column">
                    <div class="text">
                        <div class="title">
                            <h1>Em três passos seu pet está protegido!</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="item">
                            <div class="column">
                                <div class="text">
                                    <div class="subtitle">
                                        <h6>Escolha seu plano</h6>
                                    </div>
                                </div>

                                <div class="box">
                                    <div class="img">
                                        <box-icon name='select-multiple' color='#0bcdf8' ></box-icon>
                                    </div>

                                    <div class="text">
                                        <div class="paragraph">
                                            <p>Temos três opções de operadoras de planos de saúde para o seu pet. Analise os planos e as vantagens de cada um.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="column">
                                <div class="text">
                                    <div class="subtitle">
                                        <h6>Solicite seu orçamento</h6>
                                    </div>
                                </div>

                                <div class="box">
                                    <div class="img">
                                        <box-icon name='credit-card-alt' color='#0bcdf8'></box-icon>
                                    </div>

                                    <div class="text">
                                        <div class="paragraph">
                                            <p>Entraremos em contato com você para tirar todas as sua dúvidas. E ver qual o plano ideal para seu pet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="column">
                                <div class="text">
                                    <div class="subtitle">
                                        <h6>Seu pet seguro e protegido</h6>
                                    </div>
                                </div>

                                <div class="box">
                                    <div class="img">
                                        <box-icon name='check-shield' color='#0bcdf8'></box-icon>
                                    </div>

                                    <div class="text">
                                        <div class="paragraph">
                                            <p>Pronto! Você cuidando do seu pet o tanto que ele cuida de você</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        form =
        `
        <form id="__vtigerWebForm" name="Site(inicio)" action="https://aguiacorretagem.nsgl01.crm.netsac.com.br/modules/Webforms/capture.php" method="post" accept-charset="utf-8" enctype="multipart/form-data">
            <input type="hidden" name="__vtrftk" value="sid:d78df63e0fd5733cb13286fdfa56cc1603ff0537,1669989776">
            <input type="hidden" name="publicid" value="29273e2f2bca33e33725885740e9436f">
            <input type="hidden" name="urlencodeenable" value="1">
            <input type="hidden" name="name" value="Site(inicio)">

            <div class="column">
                <div class="text">
                    <div class="title">
                        <h2>Solicite uma cotação agora mesmo!</h2>
                    </div>

                    <div class="subtitle">
                        <p>Entraremos em contato com você para tirar todas as suas dúvidas</p>
                    </div>
                </div>

                <div class="inputs">
                    <div class="row">
                        <div class="input">
                            <input type="text" name="firstname" data-label="" value="" required="" placeholder="Nome completo">
                        </div>

                        <div class="input">
                            <input type="email" name="email" data-label="" value="" placeholder="E-mail">
                        </div>

                        <div class="input">
                            <input type="text" name="cf_874" data-label="" value="" required="" placeholder="Telefone ou WhatsApp">
                        </div>
                    </div>
                </div>

                <div class="btn">
                    <input type="submit" value="solicitar contato"></input>
                </div>                                        
            </div>
        </form>
        `;

        help = 
        `
        <div class="container help">
            <div class="content">
                <div class="column">
                    <div class="text">
                        <div class="title">
                            <h1>Temos consultores especialistas a disposição para lhe ajudar</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="item">
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141">
                                <div class="column">
                                    <div class="box">
                                        <div class="row">
                                            <box-icon color="#121718" size="22px" name='whatsapp' type='logo' ></box-icon>
                                            <h6>WhatsApp</h6>
                                        </div>
                                    </div>

                                    <div class="text">
                                        <small>(55) 11 9 5160-7141</small>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="item">
                            <a target="_blank" rel="noopener noreferrer" href="tel:+551129146246">
                                <div class="column">
                                    <div class="box blue">
                                        <div class="row">
                                            <box-icon color="#fbfafa" size="22px" name='phone' ></box-icon>
                                            <h6>Telefone</h6>
                                        </div>
                                    </div>

                                    <div class="text">
                                        <small>(55) 11 2914-6246</small>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="item">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:atendimento@seguropetsaude.com.br">
                                <div class="column">
                                    <div class="box white">
                                        <div class="row">
                                            <box-icon color="#121718" size="22px" name='gmail' type='logo' ></box-icon>
                                            <h6>E-mail</h6>
                                        </div>
                                    </div>

                                    <div class="text">
                                        <small>atendimento@<br>seguropetsaude.com.br</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        footer =
        `
        <div class="row">
            <div class="column left">
                <div class="text">
                    <small>Águia Corretagem de Seguros LTDA</small>
                    <small>CNPJ: 51.957.843/0001-11</small>
                </div>
            </div>

            <div class="column center">
                <div class="text">
                    <p>Nos siga nas redes sociais!</p>
                </div>

                <div class="icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/seguropet.saude" aria-label="Icone Instagram">
                        <box-icon color="#121718" size="22px" name='instagram' type='logo' >Instagram</box-icon>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/seguropetpetlovesaudeplamev " aria-label="Icone Facebook">
                        <box-icon color="#121718" size="22px" name='facebook-circle' type='logo' >Facebook</box-icon>
                    </a>
                </div>
            </div>

            <div class="column right">
                <div class="text">
                    <p>
                        <a href="/termos.html">Termos de Uso</a>
                        |
                        <a href="/privacidade.html">Política de Privacidade</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="text">
            <small>Copyright 2022 © Todos os direitos reservados à Águia Corretagem</small>
        </div>
        `;
    }

    document.getElementById('img-bg-01').innerHTML = benefits;
    document.getElementById('table').innerHTML = table;
    document.getElementById('differentials').innerHTML = differentials;   
    document.getElementById('steps').innerHTML = steps;   
    document.getElementById('form').innerHTML = form;   
    document.getElementById('help').innerHTML = help;   
    document.getElementById('footer').innerHTML = footer;  

    window.removeEventListener('scroll', loadSection);
}

// adicione um evento de scroll no objeto window para chamar a função de carga da seção
window.addEventListener('scroll', loadSection);
