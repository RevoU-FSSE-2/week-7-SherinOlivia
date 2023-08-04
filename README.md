# Week 7 Assignment Overview

For Week 7's Assignment, we are to create an interactive and responsive web application using newly learned materials, such as :
1. nodejs
- setting up project
- install, uninstall & custom script (package.json)
2. Typescript 
- setting up project with Typescript
- Compiling Typescript into Javascript
3. HTML & Typescript DOM
- DOM manipulation using Typescript
- Reusable Typescript code
- Event Handling

## Deployed Website
<p align="center">
<a href="https://roofinancetracker.netlify.app/">roofinancetracker.netlify.app</a>
|
<a href="http://financetracker.roozone.site/">financetracker.roozone.site</a>
</p>

- Tablet Dimension
![Deployedweb-tablet](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/deployedweb-tablet.webp?token=GHSAT0AAAAAACCWZZISMHS34KW2T5E3WO5YZGNJ37A)

- Mobile Dimension
![Deplyedweb-mobile](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/deployedweb-mobile.webp?token=GHSAT0AAAAAACCWZZITIBWSND5UPTLLWBFMZGNJ3UQ)

## Nodejs

**Nodejs**
: a cross-platform, open-source back-end JavaScript runtime environment, that runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.

**Installation**
1. First, go to [**nodejs.org**](https://nodejs.org/)
[![Nodejs-Web](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/nodejs-web-download.webp?token=GHSAT0AAAAAACCWZZISFC7TAFEJHX57U42UZGNKFDA)](https://nodejs.org/en)
2. Click on `download` and double-click on the installer once it finishes downloading.
3. Install and wait for the Installation to complete
![Nodejs-Install](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/nodejsInstall.webp?token=GHSAT0AAAAAACCWZZITPUUYC3T7VNZB5M2QZGNKFNQ)
![Nodejs-InstallComplete](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/nodejs-InstallDone.webp?token=GHSAT0AAAAAACCWZZITL3QDTCF2UTI3266CZGNKFVA)

**Nodejs init, Install, Uninstall**
![Nodejs-init](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/npm-init.webp?token=GHSAT0AAAAAACCWZZITUGNUCLHIQ5B7AP5YZGNKF6Q)
1. To use nodejs's features, we first have to initialize the nodejs project by creating `package.json` which is automatically created through: `npm init` command.
- to create a default `package.json` (skipping ahead the list of information to fill), use the command: `npm init -y`. We still can edit the informations inside manually afterward.
2. If your project needs `dependencies` [aka your project relies on other library/framework], such as `bootstrap`, we can install that with the command: `npm install bootstrap`. They will automatically shown and listed in the `package.json`
- Alternatively, we can also install `pnpm`, and use `pnpm` command to install our dependencies. [`pnpm`stands for 'Performant NPM', `pnpm` holds all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it. ]
3. Likewise, if you apparently don't need any of what you installed, use the command: `npm uninstall`, i.e `npm uninstall bootstrap`
4. Add custom script to your `package.json` so you won't have to type a long command everytime you need to run something: `"command-name": " command-to-run"`
- example: `"watch": "tsc --watch"`


![Nodejs-packagejson](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/npminit-packagejson.webp?token=GHSAT0AAAAAACCWZZISZED5GB2TIU53HWP2ZGNKGHA)


## Typescript

**Typescript**
: a superset of Javascript that adds static typing with optional type annotations to JavaScript.

**Installation**
- To install Typescript, we can use `npm install` command on the terminal: `npm install -g typescript`[This will install latest version of typescript globally on our machine]
- After installing, initialize typescript too with `tsc init`, this will create a `tsconfig.json` file where we can customize the typescript settings of our project.

**Compiles**
Because we uses javascript file to handle our html file's backend needs, we have to compile our typescript file into javascript with `tsc tsc-file`, i.e `tsc app.ts`
- to automatically compiles our typescript file into javascript, use the command: `tsc --watch`
- to exit or end the `watch`, use `ctrl + c`
## NPM, PNPM, & TSC Versions Verification 
![npm-pnpm-tsc-version](https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/main/assets/documentations/npm-tsc-pnpm-ver.webp?token=GHSAT0AAAAAACCWZZISY5IHCL5NNZWRKL3QZGNKLRA)
### Contact Me:

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/1c5fe23ec11e53d6016917a61761b60e66e84c98/assets/gmail-icon.svg?token=A74SPLFVGVTP7CPSDHK2R63EZVHG2" width="15px" background-color="none">[SOChronicle@gmail.com](mailto:SOChronicle@gmail.com) [Personal]

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/1c5fe23ec11e53d6016917a61761b60e66e84c98/assets/gmail-icon.svg?token=A74SPLFVGVTP7CPSDHK2R63EZVHG2" width="15px" background-color="none">[SOlivia@gmail.com](mailto:SOlivia198@gmail.com) [Work]

[![Roo-Discord](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-discord.svg)](https://discord.com/users/shxdxr#7539)[![Roo-Instagram](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-instagram.svg)](https://instagram.com/shxdxr?igshid=MzRlODBiNWFlZA==)[![Roo-LinkedIn](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-linkedin-circled.svg)](https://www.linkedin.com/in/sherin-olivia-07311127a/)