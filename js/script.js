import Banner from "./module/banner";
// import Habilidade from "./module/habilidade";
import Menu from "./module/menu";
// import ProfissaoHabilidade from "./module/profissao-habilidade";
import ScrollAnima from "./module/scroll-anima";
import ScrollSuave from "./module/scroll-suave";
import ScrollTopHeader from "./module/scroll-top-header";
import Servicos from "./module/servicos";
import TypeWriter from "./module/type-writer";

const banner = new Banner('.banner', '.circle-top','.circle-bottom');
banner.init();

const scrollTopHeader = new ScrollTopHeader('.banner','header');
scrollTopHeader.init();

const typeWriter = new TypeWriter('[data-typewriter="typewriter"]');
typeWriter.init();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

// const profissaoHabilidade = new ProfissaoHabilidade('.formacao h1','.box-icon', '.box-icon div');
// profissaoHabilidade.init();

// const habilidade = new Habilidade('.box-icon div svg','.box-description div');
// habilidade.init();

const menu = new Menu('.menu-btn', '.menu', '.close-menu', '.link-menu a');
menu.init();

const servicos = new Servicos('.servicos-dev a', '.servicos-manutencao a', '.servico-dev div', '.servico-manutencao div');
servicos.init();