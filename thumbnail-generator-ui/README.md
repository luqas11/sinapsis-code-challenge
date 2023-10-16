# Thumbnail Generator UI

Simple UI/UX for a thumbnail generator, part of the [Sinapsis Technical Code Challenge](https://github.com/sinapsis-co/sinapsis-code-challenge).  
Currently available at https://thumbnail-generator-a868d.firebaseapp.com/.

## How to run

The app is a React project built with Vite, and can be locally launched with the following steps:

1. Create a `.env.local` file with the keys specified in the `.env` example file. The `VITE_AUTH0_CLIENT_ID` and `VITE_AUTH0_DOMAIN` keys must be valid values from an Auth0 project, and the `VITE_MOCK_BE` must be `false`.
2. Run `npm install` to install necessary dependencies.
3. Run `npm run dev` to launch the app in development mode.
4. Run `npm run mock` to run the `json-server` mock.

The app should be available at http://localhost:5173. The login must be done with valid Auth0 credentials for the configured project.

Additionally, you can override the BE requests with an internal mock, setting `VITE_MOCK_BE` to `true`. That will just bypass the API calls and return hardcoded responses with a faked delay (useful if you can't run `json-server` in your environment).
