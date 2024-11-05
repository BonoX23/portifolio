import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
  standalone: true,
  imports: [],
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      alt: 'Ícone de conhecimento de C#',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/html5/html5-original.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/css3/css3-original.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-original.svg',
      alt: 'Ícone de conhecimento de typescript',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/angular/angular-original.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
      alt: 'Ícone de conhecimento de mmsql',
    },
  ]);
}
