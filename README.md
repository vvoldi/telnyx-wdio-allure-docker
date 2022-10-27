# WebdriverIO + Allure report + Docker test framefork for [telnyx.com](https://telnyx.com);
This project include:
* Page-object model
* Allure reporter;
* Docker images and docker compose;
* Configs for different browsers

## Steps to run 
1. Clone the repository 
   ```sh
   git clone https://github.com/vvoldi/telnyx-wdio-allure-docker.git
   ```
2. Install NPM packages
    ```sh
   npm install
   ```
3. Open the terminal and run:
```sh
   npm run test
   ```
For running in chrome:
```sh
   npm run test:chrome
   ```
For running in firefox
```sh
   npm run test:firefox
   ```
For running in edge:
```sh
   npm run test:edge
   ```
For runnig in docker:
```sh
   docker-compose -f ./dockercompose.yml up
   npm run test:docker
   ```
## For check Report 

[Report on github pages](https://vvoldi.github.io/telnyx-wdio-allure-docker/)
