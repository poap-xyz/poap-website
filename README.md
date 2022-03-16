# POAP: Proof of Attendance Protocol Website

## Setup

Install dependencies & start:

    nvm use 15

    npm install
    npm run dev

| :grey_exclamation: Make sure to change the faqs link in index.html:46 during development.   |
|-----------------------------------------|

### Development
We are using [parcel js](https://parceljs.org) to transpile `.js` and `.scss` files.
Builds will be created on `dist` folder.

## Deployment

    npm run build
    npm run deploy

- Domain: https://www.poap.xyz
- Deployed in Firebase.
