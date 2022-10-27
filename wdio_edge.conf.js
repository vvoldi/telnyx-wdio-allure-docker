const { config } = require("./wdio.conf");

const edgeConfig = {
    ...config,
    services: [["selenium-standalone"]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "MicrosoftEdge",
            acceptInsecureCerts: true,
            "ms:edgeOptions": {
                args: ["--headless", "window-size=1920,1080", "--disable-gpu"],
            },
        },
    ],
};

exports.config = edgeConfig;
