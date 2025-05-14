# Electron App

A simple Electron application for reading the API list from WireMock and exporting it to a CSV file.

## Feature

Membaca response list wiremock dengan input IP dan PORT kemudian menyimpan url dan fixedDelayMilliseconds sebagai file csv.

## Install

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/username/list-wiremock-ui.git
    cd list-wiremock-ui
2. Install dependencies using npm or yarn:
    ```bash
    npm install
    or
    yarn install
3. Run the application
   ```bash
   npm start
## Usage

Once the application is open, you will see the following interface:

- IP Address: Enter the IP address of the WireMock server.
- Port: Enter the port of the WireMock server.
- Export Location: Choose the location to save the generated CSV file.

Click Export to export the data into a CSV file containing information from the WireMock server.

## Development
If you want to contribute or further develop the application:
1. Ensure that you have Node.js installed.
2. Fork this repository and create a new branch for the feature or fix you want to implement.
3. Make changes and run the following command to start the application in development mode:
    ```bash
    npm start
4. Send a pull request after making your changes.

## Technologies
- Electron: Used to build desktop applications using web technologies like HTML, CSS, and JavaScript.
- Axios: Used to make HTTP requests to the WireMock server.
- fs (File System): Used to read and write files on the file system.

## License
MIT License