import limax from 'limax';

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
      const createdAt = Date.now();
      const date = new Date().toISOString().split('T')[0];
      const slug = limax(data.title);
      const path = `${date}-${slug}`;
      return [{
        type: 'add',
        path: `talks/${path}/package.json`,
        templateFile: 'templates/package.json.hbs',
        data: {createdAt, path}
      }, {
        type: 'add',
        path: `talks/${path}/slides.md`,
        templateFile: 'templates/slides.md.hbs',
      }, {
        type: 'add',
        path: `talks/${path}/public/.gitkeep`,
      }]
    }
  });
};
