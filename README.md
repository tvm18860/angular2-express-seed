# Angular 2 + Express Seed Project

This repository contains a basic web app with the following technologies & features:
- Angular 2 & TypeScript on the frontend
- [Angular 2 Material UI component library](https://github.com/angular/material2)
- Express on the backend
- Dockerfiles for development and production purposes

## Getting Started
This can all run inside docker. Make sure you have docker and docker-compose installed, clone this repository,
cd into the main directory, and run:
```
docker-compose up   // Then go to localhost:4200
```

After the above command completes, the app will be accessible at localhost:4200. It also mounts a volume to the host 
system so that any changes made locally will be known in the container as well. Any frontend code changes will 
automatically trigger a browser refresh. Any backend changes will automatically trigger a server restart.

## Angular Cli
The Angular 2 part of this app was generated with the [Angular-Cli](https://github.com/angular/angular-cli). It's an excellent tool that makes 
developing in Angular 2 much more approachable. Many of its features are used in this project so it's recommended to go through some of their 
documentation to get familiar with it.

## Development vs. Production
One particular piece to note about the Angular-Cli usage is its development server and ability to proxy requests. When running the development 
container, files are being served by the Angular-Cli's server but requests are still being handled by the Express backend. This has the 
advantage of automatically re-compiling the TypeScript and reloading the browser on file changes. But, as you add new routes, make sure you 
edit public/proxy.conf.json accordingly. Do note that an entry in proxy.conf.json matches everything at that endpoint. For example, consider the
following config:
```
{
    "/api": {
        "target": "http://localhost:3000"
    }
}
```

This will match everthing at ```/api*``` and proxy it to the target. So ```/api/data``` would match in this case.

Also, the approach used here is to have two main js files on the backend, app.js and dev.js. 
In production, app.js is used and Express will serve static files, while dev.js is better used in tandom with the Angular-Cli's 
development server. 

It may seem a bit unnecessary to use docker-compose when there is only one container running, but that is to make this project easily extensible. 
Adding a database and connecting it to the webapp is even easier with docker-compose.

There is also a Dockerfile for running the app in production. This will not mount any
volumes and exposes only the port used by Express. Also, note that the app will be accessible on port 3000 in this case. 
```
docker-compose -f docker-compose.prod.yml up -d  // Then go to localhost:3000
```

It is also worth noting that there is an npm command in place to run this project outside of docker:
```
npm run start-local-dev
```
Although not recommended, rebuilding the docker image after changes to project dependencies (package.json) can be a hassle, and running locally temporarily may save time. If you do this, you'll need Node version 6.x to match that running in docker. You'll also need to ```npm install```. 

## Tests
Both frontend and backend tests use the Jasmine test framework 
- Frontend unit tests use the [Karma](https://karma-runner.github.io/1.0/index.html) test runner

The following commands may be used to execute tests. Make sure you first exec into the container running the app
or prefix the following commands with ```docker exec <container_name>``` 
```
npm test              // Run all the tests
npm run test-server   // Run only backend tests
npm run test-frontend // Run frontend tests
npm run e2d 		  // Run e2e tests
```

The karma tests are run in the docker container in PhantomJS.
The e2e Protractor tests run in Chrome by default, but this can easily be changed.

## New to Angular 2?
There is a basic structure set up to start working with in this repo,
but here are a few resources that may be helpful:
- The official Angular 2 docs could be better but have a ton of information: [https://angular.io/docs/ts/latest](https://angular.io/docs/ts/latest)
- A quick and simple introduction to components & syntax: [http://learnangular2.com/](http://learnangular2.com/)
- A cheat sheet reference to bookmark: [https://angular.io/cheatsheet](https://angular.io/cheatsheet)
- If you have an Angular 1 background this is essential: [https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html)
- For TypeScript, the offical docs are the way to go: [https://www.typescriptlang.org/docs/handbook/basic-types.html](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- Angular 2 also makes some heavy use of a library called [RxJs](https://www.learnrxjs.io/), and while it's
  not a requirement to use it, it's worth having a basic understanding of.
