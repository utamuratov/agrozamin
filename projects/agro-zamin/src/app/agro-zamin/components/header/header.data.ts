import { Project, ProjectLabel } from 'ngx-az-core';

export class HeaderData {
  static readonly AGROZAMIN_ECO_SYSTEMS = [
    {
      img: `./assets/images/agrozamin/O'zimizniki-logo.png`,
      title: ProjectLabel[Project.advertisement],
      description: 'ecosystemAgrozamin.advertisement.description',
    },
    {
      img: './assets/images/agrozamin/AgroBussiness-logo.png',
      title: ProjectLabel[Project.agroBusiness],
      description: 'ecosystemAgrozamin.agroBusiness.description',
    },
    {
      img: './assets/images/agrozamin/AgroConsult-logo.png',
      title: ProjectLabel[Project.agroConsult],
      description: 'ecosystemAgrozamin.agroConsult.description',
    },
    {
      img: './assets/images/agrozamin/FermerlarMaktabi-logo.png',
      title: ProjectLabel[Project.farmersSchool],
      description: 'ecosystemAgrozamin.farmersSchool.description',
    },
    {
      img: './assets/images/agrozamin/Agrolab-logo.png',
      title: ProjectLabel[Project.agroLab],
      description: 'ecosystemAgrozamin.agroLab.description',
    },
  ];

  /* services */
  static readonly SERVICES = [
    {
      logo: './assets/images/agrozamin/service-logo-ozimizniki.svg',
      name: ProjectLabel[Project.advertisement],
    },
    {
      logo: './assets/images/agrozamin/service-logo-agrobusiness.svg',
      name: ProjectLabel[Project.agroBusiness],
    },
    {
      logo: './assets/images/agrozamin/service-logo-agroconsult.svg',
      name: ProjectLabel[Project.agroConsult],
    },
    {
      logo: './assets/images/agrozamin/service-logo-fermerlarmaktabi.svg',
      name: ProjectLabel[Project.farmersSchool],
    },
    {
      logo: './assets/images/agrozamin/service-logo-agrolab.svg',
      name: ProjectLabel[Project.agroLab],
    },
  ];
}
