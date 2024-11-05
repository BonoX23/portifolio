import { Component, OnInit, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',

})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Software Fullstack Developer',
        p: 'Stone Co. | Out 2022 à Jun 2024',
      },
      text: '<p>Desenvolvimento de software usando linguagens C# no backend, e TypeScript com o uso do framework Angular no frontend para o desenvolvimento de novas features, sempre respeitando a aplicabilidade de código limpo e de fácil manutenção; Criação de testes de unidade; Monitoramento da API através das ferramentas New Relic e DataDog; Utilização de metodologias ágeis e suas aplicações práticas para desenvolvimento de software(Kanban e Scrum); Conhecimento e aplicabilidade de padrões de projetos (Design Patterns); Ferramenta de versionamento (Github); Utilização do Azure Pippeline para realização de deploy.</p>',
    },
    
    {
      summary: {
        strong: 'Software Developer Backend',
        p: 'Grupo Negrini Advogados Associados | Jun 2020 - Jan 2022',
      },
      text: '<p>Realização de manutenção e desenvolvimento de software utilizando C# e .NET no backend; Criação e automação de testes de unidade com XUnit, assegurando a qualidade do código; Aplicação de metodologias ágeis (Scrum e Kanban) para otimizar o fluxo de trabalho e o desenvolvimento de software; Conhecimento e implementação de Design Patterns para promover soluções escaláveis e eficientes; Gestão de código e versionamento por meio do Git e GitHub; Utilização do Azure Pippeline para realização de deploy.</p>',
    },

    {
      summary: {
        strong: 'Auditor Externo (prestador de serviços à seguradora Líder)',
        p: 'Grupo Negrini Advogados Associados | Dez 2014 - Jun 2020',
      },
      text: '<p>Atuar no segmento securitário realizando auditoria de campo visando identificar fraudes; Analisar documentação médicas e confirmar junto a órgãos públicos ou privado a veracidade de documentos juntados ao processo; consultar bases cadastrais internas e externas, com o intuito de inibir risco de imagem, lavagem de dinheiro e fraudes; realizar pesquisas de reputação na internet referente ao segurado ou beneficiário, através de ferramentas de pesquisas públicas (Receita Federal Pessoa Física, Serasa, Google, TJs, órgãos reguladores responsáveis); elaboração de parecer para evidência das pesquisas e consultas; avaliação de documentos pessoa física e pessoa jurídica com perfil investigativo; elaboração de relatórios, atendimento telefônico; recebimento e envio de e-mails.</p>',
    },

    {
      summary: {
        strong: 'Analista Operacional de prevenção a fraude e atos ilícitos',
        p: 'Banco Itaú Unibanco S/A | Set 2013 - Dez 2014',
      },
      text: '<p>Avaliar clientes Pessoas Jurídicas no início de relacionamentos com o banco Itaú com base nas leis 9.613/98 e 12.683/12; Consultar bases cadastrais internas e externas (bureau, e informações fornecidas pela área comercial) com o intuito de inibir risco à imagem, lavagem de dinheiro e fraudes; Realizar pesquisas de reputação na internet das empresas e sócios que sejam ou desejam ser clientes do banco, através de ferramentas de pesquisas públicas (Receita Federal Pessoa Física e Pessoa Jurídica, Serasa, Google, TJs, órgãos reguladores responsáveis); elaboração de parecer para evidência das pesquisas e consultas; avaliação de documentos pessoa física e pessoa jurídica com perfil investigativo; elaboração de relatórios, atendimento telefônico; recebimento e envio de e-mails e fax.</p>',
    },

    {
      summary: {
        strong: 'Auxiliar de Escritório',
        p: 'Bradesco Seguros S/A |  Jul 2012 - Abr 2013',
      },
      text: '<p>Assistência à superintendência no setor de análise de negócios e gestão de investimentos; Extração de informações de banco de dados para emissão de relatórios de controle de investimentos, e emissão dos demonstrativos das carteiras de ações; Análise cadastral de corretores; Controle de arquivos; Controle de material; Atendimento telefônico; Recebimento e envio de e- mails e fax.</p>',
    },
    
    {
      summary: {
        strong: 'Assistente Administrativo (prestador de serviços ao Grupo Pão de Açúcar)',
        p: 'BVTI Digital Bussiness Solutions | Jul 2010 - Dez 2011',
      },
      text: '<p>Assistência à coordenação; Análise de contratos; Extração de informações do banco de dados para a elaboração dos contratos de manutenções dos equipamentos de informática; Recebimento, levantamento e análise de notas fiscais; Lançamentos de notas fiscais eletrônicas; Controle de ativos; Controle de arquivos; Controle de material; Atendimento telefônico; Recebimento e envio de e-mails e fax.</p>',
    },
  ]);
}
