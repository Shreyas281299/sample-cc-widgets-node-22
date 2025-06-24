# Station Login Application

This is a simple web application that demonstrates station login and logout functionality using the Webex SDK. The application has been streamlined to only focus on authentication operations without additional user state management features.

## Features

- **Station Login:** Authenticate using an access token.
- **Station Logout:** Deregister the agent.
- **SDK Integration:** Utilizes the Webex SDK to register and deregister the agent.

## Files

- **public/index.html:** Provides a minimal UI for station login and logout.
- **src/index.js:** Contains the logic to initialize the Webex SDK, register the agent, and deregister.
- **README.md:** Provides an overview and usage instructions.

## Setup and Running

1. Ensure you have a valid Webex access token.
2. Open the `public/index.html` file in a browser. This page automatically loads the JavaScript from `src/index.js`.
3. Enter your access token in the provided input field and click **Login**.
4. To logout, click the **Logout** button.

## Notes

- The application has been simplified by removing features related to user state changes and task results.
- Refer to `src/index.js` for the SDK integration logic.

Happy coding!
