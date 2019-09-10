module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-netlify-cache",
            options: {
                cachePublic: true
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
        }
    ]
}