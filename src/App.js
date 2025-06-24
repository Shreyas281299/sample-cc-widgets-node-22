import Webex from "@webex/plugin-cc";
import React from "react";
let cc;

const registerCC = (webex) => {
  if (webex) {
    cc = webex.cc;
  }

  return cc
    .register()
    .then((response) => {
      console.log(
        "CC-Widgets: Contact-center registerCC(): registration successful",
        {
          module: "cc-store#store.ts",
          method: "registerCC",
        }
      );
    })
    .catch((error) => {
      console.error(
        `CC-Widgets: Contact-center registerCC(): failed - ${error}`,
        {
          module: "cc-store#store.ts",
          method: "registerCC",
        }
      );
      return Promise.reject(error);
    });
};

function App() {
  console.log("CC-Widgets: Store init(): initializing store");
  const webex = Webex.init({
    config: {
      appName: "sdk-samples",
      appPlatform: "testClient",
      fedramp: false,
      logger: {
        level: "info",
      },
    },
    credentials: {
      access_token:
        "ZjA0ZDVlZGItNTdmYS00Nzg4LWE3ZGYtZTJjYjZmMGY2ZjU3NDQ4NTZiNjktMDUw_P0A1_d9ec32d3-2e8d-411a-bcce-eb2e5e2eb79c",
    },
  });

  webex.once("ready", () => {
    console.log("READY");
    registerCC(webex);
    //   .then(() => {
    //     console.log("CC-Widgets: Store init(): store initialization complete", {
    //       module: "cc-store#store.ts",
    //       method: "init",
    //     });
    //     resolve();
    //   })
    //   .catch((error) => {
    //     console.error(
    //       `CC-Widgets: Store init(): registration failed - ${error}`,
    //       {
    //         module: "cc-store#store.ts",
    //         method: "init",
    //       }
    //     );
    //   });
  });

  return (
    <div className="App">
      <header className="App-header">Learn React</header>
    </div>
  );
}

export default App;
