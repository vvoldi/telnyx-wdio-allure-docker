const { config } = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: [["selenium-standalone"]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "chrome",
            acceptInsecureCerts: true,
            "goog:chromeOptions": {
                args: ["--headless", "window-size=1920,1080", "--disable-gpu"],
            },
        },
    ],
};

exports.config = chromeConfig;
