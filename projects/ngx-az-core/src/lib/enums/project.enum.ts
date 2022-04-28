export enum Project {
  advertisement = 3,
  agroConsult = 6,
  agroBusiness,
  farmersSchool,
  agroLab,
}

export const ProjectLabel: { [key in Project]: string } = {
  [Project.advertisement]: 'O’zimizniki',
  [Project.agroConsult]: 'AgroConsult',
  [Project.agroBusiness]: 'AgroBusiness',
  [Project.farmersSchool]: 'Fermerlar Maktabi',
  [Project.agroLab]: 'Agrolab',
};
