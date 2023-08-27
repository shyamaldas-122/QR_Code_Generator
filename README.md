# QR_Code_Generator
QR Code is a machine-readable matrix barcode that uniquely represents information. With the increase in optical capabilities of smartphones, the use of QR codes started increasing. In this project, we build this QR Code generator using Node Modules.
![qr_img](https://github.com/shyamaldas-122/QR_Code_Generator/assets/83920184/5c851976-2fa9-4dfd-8be7-0a1432918e3c)

---
## Requirements

For development, you will only need Node.js and two node package like inquirer and qr-image installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    node --version
    v8.11.3

    npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g

###

---

## Install

    git clone https://github.com/shyamaldas-122/QR_Code_Generator.git
    cd QR_Code_Generator
    npm init
    
## inquirer & qr-image installation
  After initilize the node, this project will need inquirer and qr-image too, so just run the following command.

      npm install inquirer qr-image

## Configure app

After all the npm modules is installed we need to configure package.json file

- Go to package.json file;
- Paste "type": "module" in 2nd line and save;
- We use "type": "module" beacuse we are using modular javaScript (ES6);

## Running the project

    node index.js

## Paste your url in terminal after running the project
?Type your URL: https://www.google.com/

## QR Code will be generated and stored in current directory
![qr_img](https://github.com/shyamaldas-122/QR_Code_Generator/assets/83920184/5c851976-2fa9-4dfd-8be7-0a1432918e3c)
