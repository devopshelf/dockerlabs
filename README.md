# Dexter's Docker Labs

### Toolbox Link: 
[https://devopshelf.github.io/dockerlabs/](https://devopshelf.github.io/dockerlabs/)

It provides the following features:

1. Open source online Dockerfile generator.
2. Provides details of each Docker instruction.
3. Validations for error free Dockerfile.
4. Docker Cheatsheet.
5. Next steps to follow after generating Dockerfile.

### CI/CD

Used Travis-CI for Continuos Integration and Deployment.

```
language: node_js
node_js:
  - "stable"
cache:
  directories:
    - node_modules
script:
  - npm run build
deploy:
  provider: pages
  local-dir: build
  skip-cleanup: true
  github-token: $GITHUB_TOKEN 
  on:
    branch: master

```