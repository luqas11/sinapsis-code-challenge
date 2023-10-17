# Thumbnail Generator UI

Simple UI/UX for a thumbnail generator, part of the [Sinapsis Technical Code Challenge](https://github.com/sinapsis-co/sinapsis-code-challenge).  
Currently available at https://thumbnail-generator-a868d.firebaseapp.com/.

## How to run

The app is a React project built with Vite, and can be locally launched with the following steps:

1. Create a `.env.local` file copying the content of the `.env` example file. The `VITE_AUTH0_CLIENT_ID` and `VITE_AUTH0_DOMAIN` keys must be replaced by valid values from an Auth0 project.
2. Run `npm install` to install necessary dependencies.
3. Run `npm run dev` to launch the app in development mode.
4. Run `npm run mock` to run the **JSON Server** mock.

The app should be available at http://localhost:5173. The login must be done with valid Auth0 credentials for the configured project.

Additionally, you can override the BE requests with an internal mock, setting `VITE_MOCK_BE` to `true`. That will just bypass the API calls and return hardcoded responses with a faked delay (useful if you can't run `json-server` in your environment).

## Features and development notes
#### Tests
The three screens and the only component in the app are covered by unit tests, which runs over the **Vitest** framework combined with **React Testing Library**.
#### CI / CD
The app is deployed in **Firebase Hosting** automatically throug a GitHub Action. Any push to the `master` branch, deploys to the `live` channel, and a push to any other branches deploys to the `stage` preview channel.
#### Mock
There is a **JSON Server** mock, which is easy and quick to setup following the **How to run** steps. Also, the `VITE_MOCK_BACKEND` allows the dev to internally mock the server response with hardcoded data, making the app work without **JSON Server** running.
#### Login
The login is implemented with an **Auth0** project, and valid credentials are required to complete it.
#### Environment variables
- `VITE_AUTH0_CLIENT_ID` is the client id given by the Auth0 project.
- `VITE_AUTH0_DOMAIN` is the domain given by the Auth0 project.
- `VITE_MOCK_BACKEND` if true, mocks de BE as explained in the **Mock** section.
 - `VITE_BACKEND_URL` URL to point the BE requests.
