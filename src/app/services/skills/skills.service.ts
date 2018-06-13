import { Injectable } from '@angular/core';
import { Skills } from '../../utilities/skills';

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
          childSkills: [
            {
              name: 'HTML',
              image: 'html5.svg',
              childSkills: null
            },
            {
              name: 'CSS',
              image: 'css3.svg',
              childSkills: null
            },
            {
              name: 'JavaScript',
              image: 'js.svg',
              childSkills: [
                {
                  name: 'React',
                  image: 'react.svg',
                  childSkills: null
                },
                {
                  name: 'Angular',
                  image: 'angular.svg',
                  childSkills: null
                },
                {
                  name: 'Vue',
                  image: 'vue.svg',
                  childSkills: null
                }
              ]
            },
          ]
        },
        {
          name: 'Back End Development',
          image: null,
          childSkills: [
            {
              name: 'JavaScript',
              image: 'js.svg',
              childSkills: [
                {
                  name: 'Node',
                  image: null,
                  childSkills: null
                },
                {
                  name: 'Express',
                  image: 'express.svg',
                  childSkills: null
                },
                {
                  name: 'Loopback',
                  image: 'loopback.svg',
                  childSkills: null
                },
              ]
            },
            {
              name: 'C#',
              image: 'csharp.svg',
              childSkills: [
                {
                  name: 'WebAPI',
                  image: null,
                  childSkills: null
                },
                {
                  name: 'MVC',
                  image: null,
                  childSkills: null
                },
              ]
            },
            {
              name: 'PHP',
              image: 'php.svg',
              childSkills: [
                {
                  name: 'WordPress',
                  image: 'wordpress.svg',
                  childSkills: null
                },
              ]
            },
          ]
        },
        {
          name: 'Database',
          image: null,
          childSkills: [
            {
              name: 'MongoDB',
              image: 'mongodb.svg',
              childSkills: null
            },
            {
              name: 'CosmosDB',
              image: 'cosmosdb.svg',
              childSkills: null
            },
            {
              name: 'MS SQL',
              image: 'sql.svg',
              childSkills: null
            },
          ]
        },
        {
          name: 'Cloud',
          image: null,
          childSkills: [
            {
              name: 'Azure',
              image: 'azure.svg',
              childSkills: [
                {
                  name: 'Functions',
                  image: 'functions.svg',
                  childSkills: null
                },
                {
                  name: 'App Service',
                  image: null,
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
