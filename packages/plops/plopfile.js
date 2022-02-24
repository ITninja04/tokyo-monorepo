module.exports = (plop) => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        }
      ],
      actions: [
        {
            type: 'append',
            path: '../ui/components/index.ts',
            templateFile: './templates/Component.index.ts.hbs',
        },
        {
            type: 'add',
            path: '../ui/components/{{pascalCase name}}/index.ts',
            templateFile: './templates/component/index.ts.hbs',
        },
        {
            type: 'add',
            path: '../ui/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: './templates/component/Component.tsx.hbs',
        },
        {
            type: 'add',
            path: '../ui/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
            templateFile: './templates/component/Component.types.ts.hbs',
        },
        {
            type: 'add',
            path: '../ui/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: './templates/component/Component.stories.tsx.hbs',
        },
        {
            type: 'add',
            path: '../ui/components/{{pascalCase name}}/test.tsx',
            templateFile: './templates/component/test.tsx.hbs',
        },
        {
            type: 'add',
            path: '../ui/components/{{pascalCase name}}/{{pascalCase name}}.mock.ts',
            templateFile: './templates/component/Component.mock.ts.hbs',
        }
      ]
    })
  }
  