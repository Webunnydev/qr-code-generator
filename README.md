# qr-code-generator

A simple QR code generator web application built using Node.js and a QR code generation library.

## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
 
## Description

The QR Code Generator is a web application that allows users to generate QR codes for URLs. It provides a simple and user-friendly interface to quickly create QR codes and download them for personal or business use.

The application uses Node.js on the server side to handle requests, and a QR code generation library to generate the QR codes dynamically. It also saves the URL of the QR code to a text file.

## Demo
1. Input the URL
   ![ss1](https://github.com/Webunnydev/qr-code-generator/assets/90133602/324f8d83-770a-4bcb-a2c7-3b6b5d758d1e)
   ![ss2](https://github.com/Webunnydev/qr-code-generator/assets/90133602/f81821f0-564c-49a5-9a9b-3e29df1cb655)

3. Open and view the qr_code.png and qr_url.txt file
   
   ![ss3](https://github.com/Webunnydev/qr-code-generator/assets/90133602/825158f8-bb46-4ce8-a636-c80d5e5bc11c)
   
4. qr_code.png
   ![ss4](https://github.com/Webunnydev/qr-code-generator/assets/90133602/b0977929-cf0d-491d-a628-d0cd53107d5f)

5. qr_url.txt
   ![ss5](https://github.com/Webunnydev/qr-code-generator/assets/90133602/287e2ec6-89f0-4cd0-beee-4eba5c65e57b)

## Features

- Generate QR codes for URLs.
- Saves the URL to a text file.
- Download generated QR codes as PNG or SVG files.
- Responsive and mobile-friendly design.

## Requirements

To run this application locally, you'll need the following:

- Node.js 
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine using bash
2. Navigate to the project directory:
   ```
   cd qr-code-generator
   ```
3. Install the required dependencies:
    ```
    npm install inquirer qr-image
     ```

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch with a descriptive name for your feature or bug fix.

3. Make your changes and commit them.

4. Push your branch to your forked repository.

5. Submit a pull request, detailing the changes you made and the problem it solves.

6. Be open to feedback and be ready to make changes if requested.
