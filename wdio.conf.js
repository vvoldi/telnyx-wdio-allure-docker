exports.config = {
    specs: ["./test/specs/**/*.js"],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
            "goog:chromeOptions": {
                args: ["window-size=1920,1080", "--headless"],
            },
            acceptInsecureCerts: true,
        },
    ],
    logLevel: "debug",
    bail: 0,
    baseUrl: "https://telnyx.com/",
    waitforTimeout: 40000,
    connectionRetryTimeout: 120000,
    services: ["chromedriver"],
    framework: "mocha",
    reporters: [
        ["spec", { addConsoleLogs: true }],
        ["allure", { outputDir: "allure-results" }],
    ],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};
