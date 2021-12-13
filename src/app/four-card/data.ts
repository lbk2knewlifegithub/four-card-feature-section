import { Feature } from './models/feature.model';

export const features: Feature[] = [
  {
    color: 'border-cyan',
    name: 'Supervisor',
    description: 'Monitors activity to identify project raodblocks',
    src: 'assets/images/icon-supervisor.svg',
  },
  {
    color: 'border-red',
    name: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    src: 'assets/images/icon-team-builder.svg',
  },
  {
    color: 'border-orange',
    name: 'Karma',
    description: 'Regularly evaluates our talent to esnure quality',
    src: 'assets/images/icon-karma.svg',
  },
  {
    color: 'border-blue',
    name: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    src: 'assets/images/icon-calculator.svg',
  },
];
