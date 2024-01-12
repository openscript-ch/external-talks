export default function (plop) {
  plop.setGenerator('talk', {
    description: 'Add new talk',
    prompts: [{
      type: 'input',
      name: 'author',
      message: 'Author name:'
    },{
      type: 'input',
      name: 'title',
      message: 'Title:'
    }],
    actions: function(data) {
      const date = new Date().toISOString().split('T')[0]
      return [{
        type: 'add',
        path: `talks/${date}/package.json`,
        templateFile: 'templates/package.json.hbs',
        data: {date}
      }, {
        type: 'add',
        path: `talks/${date}/slides.md`,
        templateFile: 'templates/slides.md.hbs',
        data: {date}
      }]
    }
  });
};
