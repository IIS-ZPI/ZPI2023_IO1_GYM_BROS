# GYM BROS

## Project realization technology:

- React.js - a JavaScript library for building user interfaces
- TypeScript - a strict syntactical superset of JavaScript
- Vite - a build tool that aims to provide a faster and leaner development experience for modern web projects
- Jest - a JavaScript Testing Framework
- GitHub Actions - a CI/CD tool that helps automate the software development process
- GitHub Pages - a static site hosting service.

## Deployment

The application is deployed on the Github pages. You can find it [here](https://iis-zpi.github.io/ZPI2023_IO1_GYM_BROS/). 

It is updated automatically after each new release (after each push on `release` branch), with the use of [GitHub Actions deploy-site.yml](https://github.com/IIS-ZPI/ZPI2023_IO1_GYM_BROS/blob/develop/.github/workflows/deploy-site.yml) workflow.

### Workflow explained

1. **Checkout** - checks out the repository, so the workflow can access the code.
2. **Set up Node** - sets up Node.js for the workflow to use.
3. **Install dependencies** - installs the dependencies from the `package.json` file.
4. **Build** - builds the application.
5. **Setup Pages** - sets up the GitHub Pages for the deployment. 
6. **Upload artifact** - uploads the artifact to the GitHub Pages which is the built application from ./dist folder.
7. **Deploy to GitHub Pages** - deploys the application to the GitHub Pages

## Project documentation

-   The project documentation is located in the `documentation` folder. You can find it [here](https://github.com/IIS-ZPI/ZPI2023_IO1_GYM_BROS/blob/develop/documentation/)

## Project backlog

The backlog is located in the [GitHub projects, here](https://github.com/orgs/IIS-ZPI/projects/20/views/1).

### Project board

It is divided into 5 columns:
1. Todo - tasks that are not yet started
2. In progress - tasks that are currently being worked on
3. In review/tests - tasks that are ready for review
4. On develop - tasks that are on the develop branch
5. Done (on release) - tasks that are on the release branch

### Tasks - issues

Each task is submitted as an issue, which is then assigned to a specific branch.

Each pull-request is created with a specific description:

```
Closes #<issue_number>
```
This way, the issue is automatically linked and closed when the pull-request is merged. The issue automatically moves to the "On develop" column.

## Unit test automation

The CI implementation method with unit test automation is located in the `.github/workflows/run-test.yml` folder, [here](https://github.com/IIS-ZPI/ZPI2023_IO1_GYM_BROS/tree/develop/.github/workflows/run-test.yml).

### Workflow explained

1. **Checkout** - checks out the repository, so the workflow can access the code.
2. **Set up Node** - sets up Node.js for the workflow to use.
3. **Install dependencies** - installs the dependencies from the `package.json` file.
4. **Build** - builds the application.
5. **Run tests** - runs the tests.


### Location of software testing and repair reports

Results of each test is both located as a comment in the pull request.
