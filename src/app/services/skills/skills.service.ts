import { Injectable } from '@angular/core';
import { Skills } from '../../utilities/skills';
import { eKnowledge } from '../../utilities/eknowledge';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills() {
    return new Skills({
      skills: [
        {
          name: 'Front End Development',
          image: null,
          projects: null,
          knowledge: eKnowledge.Expert,
          childSkills: [
            {
              name: 'HTML',
              image: 'html5.svg',
              projects: [
                {
                  name: 'Various Web Applications',
                  description: 'Developed elements for various web applications.',
                  tags: ['Custom Elements'],
                  link: null
                }
              ],
              knowledge: eKnowledge.Expert,
              childSkills: null
            },
            {
              name: 'CSS',
              image: 'css3.svg',
              projects: [
                {
                  name: 'Various Web Applications',
                  description: 'Developed styling for various web applications.',
                  tags: ['Flexbox', 'Animation'],
                  link: null
                }
              ],
              knowledge: eKnowledge.Proficient,
              childSkills: null
            },
            {
              name: 'JavaScript',
              image: 'js.svg',
              projects: [
                {
                  name: 'Dynamics 365 Client Customizations',
                  description: 'Developed Javascript / Typescript libraries to support heavy customizations for Dynamics 365 clients.',
                  tags: ['DOM Manipulation', 'Sync/Async Programming', 'Event Handling', 'ES6', 'Promises'],
                  link: null
                }
              ],
              knowledge: eKnowledge.Expert,
              childSkills: [
                {
                  name: 'React',
                  image: 'react.svg',
                  projects: [
                    {
                      name: 'The Moving Company Web Application (WIP)',
                      description: 'Currently porting over previously built Angular 1.5 application to React. Including integrations with Hubspot and Contentful',
                      tags: ['Components', 'Services', 'Component Communication', 'ES6'],
                      link: null
                    },
                    {
                      name: 'Microsoft Teams Slack Archive Viewer',
                      description: 'Developed viewer for Slack Archives to integrate within tab component of Microsoft Teams',
                      tags: ['Components', 'Services', 'Component Communication', 'ES6'],
                      link: null
                    },
                    {
                      name: 'Neighbor (WIP)',
                      description: 'Currently building a community organizing and skill-sharing platform to help communities grow and become stronger.',
                      tags: ['Components', 'Services', 'Component Communication', 'ES6'],
                      link: null
                    },
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                },
                {
                  name: 'Angular',
                  image: 'angular.svg',
                  projects: [
                    {
                      name: 'Warehouse Inventory Management System (Angular 2)',
                      description: 'Worked with development team to create custom inventory management system for a regional agriculture business. Primarily responsible for implementing Typescript features and building UI components',
                      tags: ['Components', 'Services', 'Component Communication', 'Typescript'],
                      link: null
                    },
                    {
                      name: 'The Moving Company Web Application (Angular 1.5)',
                      description: 'Developed custom web application for The Moving Company. Including integrations with Mailgun and Twilio.',
                      tags: ['Components', 'Services', 'Component Communication', 'ES6'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                },
                {
                  name: 'Vue',
                  image: 'vue.svg',
                  projects: null,
                  knowledge: eKnowledge.WorkingKnowledge,
                  childSkills: null
                }
              ]
            },
          ]
        },
        {
          name: 'Back End Development',
          image: null,
          projects: null,
          knowledge: eKnowledge.Proficient,
          childSkills: [
            {
              name: 'JavaScript',
              image: 'js.svg',
              projects: null,
              knowledge: eKnowledge.Proficient,
              childSkills: [
                {
                  name: 'Node',
                  image: null,
                  projects: [
                    {
                      name: 'The Moving Company API',
                      description: 'Developed Node / Express / MongoDB API service to process lead submissions from web application.',
                      tags: ['API', 'ORM'],
                      link: null
                    },
                    {
                      name: 'Comeeda API',
                      description: 'Developed Node / Express / MongoDB API service to process users, pickup requests, deliveries and messaging for mobile application.',
                      tags: ['SocketIO', 'API', 'ORM'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                },
                {
                  name: 'Express',
                  image: 'express.svg',
                  projects: [
                    {
                      name: 'The Moving Company API',
                      description: 'Developed Node / Express / MongoDB API service to process lead submissions from web application.',
                      tags: ['API', 'ORM'],
                      link: null
                    },
                    {
                      name: 'Comeeda API',
                      description: 'Developed Node / Express / MongoDB API service to process users, pickup requests, deliveries and messaging for mobile application.',
                      tags: ['SocketIO', 'API', 'ORM'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                },
                {
                  name: 'Loopback',
                  image: 'loopback.svg',
                  projects: [
                    {
                      name: 'Neighbor API (WIP)',
                      description: 'Developing API service to process posts, comments, requests and messaging.',
                      tags: ['SocketIO', 'API', 'ORM'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Familiar,
                  childSkills: null
                },
              ]
            },
            {
              name: 'C#',
              image: 'csharp.svg',
              projects: null,
              knowledge: eKnowledge.Expert,
              childSkills: [
                {
                  name: 'WebAPI',
                  image: null,
                  projects: [
                    {
                      name: 'Message Processing API',
                      description: 'Developed .NET WebAPI to handle message processing to run SQL stored procedures and return messaging.',
                      tags: ['API', 'SQL'],
                      link: null
                    },
                    {
                      name: 'Kanban System API',
                      description: 'Developed .NET WebAPI to process projects and tickets for Kanban system.',
                      tags: ['API', 'Entity Framework'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Expert,
                  childSkills: null
                },
                {
                  name: 'MVC',
                  image: null,
                  projects: [
                    {
                      name: 'Inventory Scanning System',
                      description: 'Developed .NET MVC application to process inventory scanning and reporting.',
                      tags: ['Entity Framework', 'Services', 'Repositories', 'Models'],
                      link: null
                    },
                    {
                      name: 'Record Viewing Application',
                      description: 'Developed .NET MVC application to query and view documents.',
                      tags: ['Entity Framework'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Expert,
                  childSkills: null
                },
              ]
            },
            {
              name: 'PHP',
              image: 'php.svg',
              projects: null,
              knowledge: eKnowledge.Proficient,
              childSkills: [
                {
                  name: 'WordPress',
                  image: 'wordpress.svg',
                  projects: [
                    {
                      name: 'InWisconsin.com',
                      description: 'Worked with development team to create custom plugins to provide custom elements for various visitor and admin facing components.',
                      tags: ['Plugins'],
                      link: null
                    },
                    {
                      name: 'WEDC.org',
                      description: 'Worked with development team to create custom plugins to provide custom elements for various visitor and admin facing components.',
                      tags: ['Plugins'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                },
              ]
            },
          ]
        },
        {
          name: 'Database',
          image: null,
          projects: null,
          knowledge: eKnowledge.Expert,
          childSkills: [
            {
              name: 'MongoDB',
              image: 'mongodb.svg',
              projects: [
                {
                  name: 'The Moving Company API',
                  description: 'Developed Node / Express / MongoDB API service to process lead submissions from web application.',
                  tags: ['API', 'ORM'],
                  link: null
                },
                {
                  name: 'Comeeda API',
                  description: 'Developed Node / Express / MongoDB API service to process users, pickup requests, deliveries and messaging for mobile application.',
                  tags: ['SocketIO', 'API', 'ORM'],
                  link: null
                }
              ],
              knowledge: eKnowledge.Expert,
              childSkills: null
            },
            {
              name: 'CosmosDB',
              image: 'cosmosdb.svg',
              projects: null,
              knowledge: eKnowledge.Familiar,
              childSkills: null
            },
            {
              name: 'MS SQL',
              image: 'sql.svg',
              projects: [
                {
                  name: 'Equipment Insurance Business Data Migration',
                  description: 'Worked extensively within SQL and SSIS to develop data migration/integration solution for Dynamics 365.',
                  tags: ['SSIS', 'Views'],
                  link: null
                },
                {
                  name: 'Equipment Rental Business Data Migration',
                  description: 'Worked extensively within SQL and SSIS to develop data migration/integration solution for Dynamics 365.',
                  tags: ['Entity Framework'],
                  link: null
                }
              ],
              knowledge: eKnowledge.Expert,
              childSkills: null
            },
          ]
        },
        {
          name: 'Cloud',
          image: null,
          projects: null,
          knowledge: eKnowledge.Proficient,
          childSkills: [
            {
              name: 'Azure',
              image: 'azure.svg',
              projects: null,
              knowledge: eKnowledge.Proficient,
              childSkills: [
                {
                  name: 'Functions',
                  image: 'functions.svg',
                  projects: [
                    {
                      name: 'Dynamics 365 Actions',
                      description: 'Developed Azure Function project to migrate existing plugin actions and implement new actions with Azure Functions',
                      tags: ['Functions'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                },
                {
                  name: 'App Service',
                  image: null,
                  projects: [
                    {
                      name: 'Application Services',
                      description: 'Developed and deployed to Azure-hosted Application Services projects for various applications',
                      tags: ['App Services'],
                      link: null
                    }
                  ],
                  knowledge: eKnowledge.Proficient,
                  childSkills: null
                }
              ]
            }
          ]
        }
      ]
    });
  }
}
