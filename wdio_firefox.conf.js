const { config } = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: [["selenium-standalone"]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "firefox",
            acceptInsecureCerts: true,
            "moz:firefoxOptions": {
                args: ["--headless", "window-size=1920,1080"],
            },
        },
    ],
};

exports.config = chromeConfig;
