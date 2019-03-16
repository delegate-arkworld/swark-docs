const config = {
    title: 'Swark Documentation',
    description: 'Documentation of the Ark-Shopware integration named Swark',
    themeConfig: {
        repo: 'reconnico/swark-docs',
        repoLabel: 'Contribute!',
        editLinks: true,
        editLinkText: "Help to improve this page!",
        docsDir: "docs",
        lastUpdated: true,
        sidebar: [
            "/",
            "installation/",
            "configuration/",
            "commands/",
            "demoshop/"
        ],
    }
};

module.exports = config;
