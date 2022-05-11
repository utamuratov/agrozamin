import { Project, ProjectLabel } from '../enums/project.enum';

export class Data {
  static readonly AGROZAMIN_ECO_SYSTEMS = [
    {
      img: `./assets/images/services/O'zimizniki-logo.png`,
      title: ProjectLabel[Project.advertisement],
      description: 'ecosystemAgrozamin.advertisement.description',
    },
    {
      img: './assets/images/services/AgroBussiness-logo.png',
      title: ProjectLabel[Project.agroBusiness],
      description: 'ecosystemAgrozamin.agroBusiness.description',
    },
    {
      img: './assets/images/services/AgroConsult-logo.png',
      title: ProjectLabel[Project.agroConsult],
      description: 'ecosystemAgrozamin.agroConsult.description',
    },
    {
      img: './assets/images/services/FermerlarMaktabi-logo.png',
      title: ProjectLabel[Project.farmersSchool],
      description: 'ecosystemAgrozamin.farmersSchool.description',
    },
    {
      img: './assets/images/services/Agrolab-logo.png',
      title: ProjectLabel[Project.agroLab],
      description: 'ecosystemAgrozamin.agroLab.description',
    },
  ];

  /* services */
  static readonly SERVICES = [
    {
      logo: './assets/images/services/service-logo-ozimizniki.svg',
      name: ProjectLabel[Project.advertisement],
    },
    {
      logo: './assets/images/services/service-logo-agrobusiness.svg',
      name: ProjectLabel[Project.agroBusiness],
    },
    {
      logo: './assets/images/services/service-logo-agroconsult.svg',
      name: ProjectLabel[Project.agroConsult],
    },
    {
      logo: './assets/images/services/service-logo-fermerlarmaktabi.svg',
      name: ProjectLabel[Project.farmersSchool],
    },
    {
      logo: './assets/images/services/service-logo-agrolab.svg',
      name: ProjectLabel[Project.agroLab],
    },
  ];
}
