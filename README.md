# React client application + Relay Modern

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and after ejection its been integrated with [Flow](https://flow.org), [GraphQL](http://graphql.org) & [Relay](https://facebook.github.io/relay/).
All tests during development been running against an API [Laravel Lumen](https://lumen.laravel.com) server .

**_Server code its here_**: [React-Lumen-Boilerplate](https://github.com/kikoseijo/lumen-graphql-boilerplate)

[**_VISIT THE APP DEMO SITE_**](https://kikoseijo.github.io/react-relay-app/)

### Install

Clone or download the repo to your working environment-

```
git clone git@github.com:kikoseijo/react-relay-app.git
```

Using the console navigate to the project working root directory

```
cd react-relay-app
```

Install dependencies, you can use NPM or Yarn, its your choice-

```
yarn install
```

You will need a **_GraphQL_** server to work with, you can try the [Lumen boilerplate](https://github.com/kikoseijo/lumen-graphql-boilerplate) that will respond to all the demo endpoints.

```
yarn run relay # will generate the necessary files for "**Relay Modern**" to work.
```

### Libraries

* [React](https://reactjs.org)
* [GraphQL + Relay](https://facebook.github.io/relay/)
* [Bootstrap 4](https://getbootstrap.com)
* [Reactstap](https://reactstrap.github.io)

#### Other libraries

* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [FontAwesome](https://github.com/FortAwesome/react-fontawesome)

#### Development libraries

* [GraphQL playground](https://github.com/graphcool/graphql-playground)
* [relay-devtools](https://www.npmjs.com/package/relay-devtools)

### Available commands

You can use `npm` or `yarn`, its your choice.

| Commands        | Descriptions                                                    |
| :-------------- | :-------------------------------------------------------------- |
| yarn start      | starts application under development environment                |
| yarn build      | builds application ready for production                         |
| yarn schema     | Will download db schema from configured server _.graphqlconfig_ |
| yarn gen        | Generates compiled GraphQL to the \_\_generated\_\_ folders     |
| yarn db         | `yarn schema` && `yarn gen` with a single command               |
| yarn playground | GraphQL playground, on port 3003                                |
| yarn pretty     | It does pretty things, called when pushing code trough git      |

### Todo

This is what i consider the minimum features this package should have to help you start working with Relay.

* [x] Integration with Laravel Lumen
* [x] Token based Auth using Laravel Passport
* [ ] Full CRUDs
* [ ] Relay Store
* [x] Integration Bootstrap v4
* [ ] ...

---

## Credits

* [Kiko Seijo](http://kikoseijo.com 'Laravel, React, Vue, Mobile freelancer in Málaga')
* [Diseño ideas](http://disenoideas.com 'Real estate website designer in Marbella')

**Sunnyface.com**, is a software development company from **Málaga, Spain**. We provide quality software based on the cloud for local & international companies, providing technology solutions with the [most modern programming languages](https://sunnyface.com/tecnologia/ 'Programador experto react y vue en Málaga').

[DevOps](https://sunnyface.com 'Programador ios málaga Marbella') Web development  
[Custom App Development](https://gestorapp.com 'Gestor de aplicaciones moviles en málaga, mijas, marbella') Mobile aplications  
[Social Apps and Startups](https://sosvecinos.com 'Plataforma móvil para la gestion de comunidades') Residents mobile application  
[Graphic designer](https://kikoseijo.com 'Programador freelance movil y Laravel') Freelance senior programmer

---

<div dir=rtl markdown=1>Created by <b>Kiko Seijo</b></div>
