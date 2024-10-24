import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',

})
export class ExperiencesComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full Stack',
        p: 'Kedu Serviços e soluções educacionais e financeiras | Jul 2025 - Jan 2026',
      },
      text: '<ul><li>Desenvolvimento de aplicação Fullstack com arquitetura Clean Architecture utilizando .NET 8 no backend e Blazor WebAssembly no frontend.</li><li>Implementação de APIs GraphQL com HotChocolate, seguindo padrões SOLID, DDD e CQRS.</li><li>Desenvolvimento de interface responsiva com MudBlazor e cliente GraphQL fortemente tipado usando StrawberryShake.</li><li>Configuração de observabilidade com OpenTelemetry, Serilog e integração com Azure Monitor.</li><li>Trabalho com Entity Framework Core e PostgreSQL para persistência de dados.</li><li>Implementação de health checks e testes automatizados com xUnit, aplicando validações de entrada com FluentValidation.</li><li>Versionamento e colaboração em código com Azure Repos (Git).</li></ul>',
    },
    {
      summary: {
        strong: 'Software Fullstack Developer',
        p: 'Stone Co. | Out 2022 - Jun 2025',
      },
      text: '<ul><li>Desenvolvimento de aplicações Fullstack com C#/.NET Core no backend e Angular (TypeScript, SCSS, HTML5) no frontend.</li><li>Implementação e otimização de APIs REST seguindo padrões SOLID, Clean Code e DDD.</li><li>Monitoramento de desempenho e análise de logs com New Relic e DataDog.</li><li>Escrita de testes unitários utilizando xUnit para garantir qualidade e confiabilidade do código.</li><li>Participação em Scrum/Kanban, contribuindo para entregas contínuas e ágeis.</li><li>Versionamento e colaboração em código com Git/GitHub.</li><li>Automação de deploys e integração contínua com Azure DevOps (Pipelines, CI/CD).</li></ul>',
    },
    
    {
      summary: {
        strong: 'Software Developer Backend',
        p: 'Grupo Negrini Advogados Associados | Jun 2020 - Jan 2022',
      },
      text: '<ul><li>Desenvolvimento e manutenção de aplicações C#/.NET Core com foco em performance e escalabilidade.</li><li>Implementação de Design Patterns e boas práticas de desenvolvimento.</li><li>Criação de testes unitários automatizados com xUnit.</li><li>Utilização de Git/GitHub para controle de versão e colaboração.</li><li>Deploy automatizado utilizando Azure Pipelines.</li></ul>',
    },

    {
      summary: {
        strong: 'Auditor Externo (prestador de serviços à seguradora Líder)',
        p: 'Grupo Negrini Advogados Associados | Dez 2014 - Jun 2020',
      },
      text: '<ul><li>Realização de auditorias de campo no segmento securitário, com foco na identificação e prevenção de fraudes.</li><li>Análise de contas médicas e validação documental junto a órgãos públicos e privados.</li><li>Consulta a bases cadastrais internas e externas para mitigação de riscos relacionados à imagem, lavagem de dinheiro e fraudes.</li><li>Condução de pesquisas reputacionais utilizando ferramentas públicas (Receita Federal, Serasa, Google, Tribunais de Justiça, órgãos reguladores).</li><li>Elaboração de pareceres técnicos e relatórios analíticos baseados nas pesquisas realizadas.</li><li>Análise e validação de documentos de Pessoas Físicas e Jurídicas com perfil investigativo.</li><li>Comunicação ativa via atendimento telefônico, e-mails e elaboração de documentos formais.</li></ul>',
    },

    {
      summary: {
        strong: 'Analista Operacional de prevenção a fraude e atos ilícitos',
        p: 'Banco Itaú Unibanco S/A | Set 2013 - Dez 2014',
      },
      text: '<ul><li>Avaliação de clientes Pessoa Jurídica no início de relacionamento, conforme as Leis nº 9.613/98 (Prevenção à Lavagem de Dinheiro) e nº 12.683/12.</li><li>Análise de risco e consultas a bases cadastrais internas e externas (bureaus de crédito, informações comerciais).</li><li>Pesquisa de reputação de empresas e sócios através de fontes públicas (Receita Federal, Serasa, Google, Tribunais de Justiça e órgãos reguladores).</li><li>Elaboração de pareceres e relatórios técnicos para suporte a decisões estratégicas.</li><li>Validação documental de clientes Pessoa Física e Jurídica com abordagem investigativa.</li><li>Suporte operacional via atendimento telefônico e comunicação eletrônica (e-mails e fax).</li></ul>',
    },

    {
      summary: {
        strong: 'Auxiliar de Escritório',
        p: 'Bradesco Seguros S/A |  Jul 2012 - Abr 2013',
      },
      text: '<ul><li>Apoio à superintendência nas áreas de Análise de Negócios e Gestão de Investimentos.</li><li>Extração e manipulação de dados para emissão de relatórios de controle de investimentos e demonstrativos de carteiras de ações.</li><li>Análise cadastral de corretores e suporte à gestão de documentação.</li><li>Controle de arquivos, materiais e atendimento aos stakeholders via telefone e e-mails.</li></ul>',
    },
    
    {
      summary: {
        strong: 'Assistente Administrativo (prestador de serviços ao Grupo Pão de Açúcar)',
        p: 'BVTI Digital Bussiness Solutions | Jul 2010 - Dez 2011',
      },
      text: '<ul><li>Suporte administrativo à coordenação de contratos e manutenção de equipamentos de TI.</li><li>Extração e análise de dados para elaboração e gestão de contratos de manutenção.</li><li>Conferência e lançamento de notas fiscais eletrônicas; controle de ativos e documentação.</li><li>Organização de arquivos, gestão de materiais e atendimento ao público interno e externo por telefone e e-mail.</li></ul>',
    },
  ]);

  ngAfterViewInit(): void {
    const details = this.elementRef.nativeElement.querySelectorAll('details');

    details.forEach((detail: HTMLDetailsElement) => {
      const summary = detail.querySelector('summary');

      if (summary) {
        summary.addEventListener('click', (e) => {
          e.preventDefault();

          if (detail.open) {
            detail.classList.add('closing');
            detail.classList.remove('animating');

            setTimeout(() => {
              detail.removeAttribute('open');
              detail.classList.remove('closing');
            }, 700);
          } else {
            detail.setAttribute('open', '');

            detail.offsetHeight;

            setTimeout(() => {
              detail.classList.add('animating');
            }, 10);
          }
        });
      }
    });
  }
}
