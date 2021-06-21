  
module.exports = {
    siteMetadata: {
        description: "Personal page of Bryan Guner",
        locale: "en",
        title: "Bryan Guner",
    },
    module.exports = {
  siteMetadata: {
    description: "Personal page of Bryan Guner",
    locale: "en",
    title: "Bryan Guner",
    formspreeEndpoint: "https://formspree.io/f/mdoyzvay",
  },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: true,
                theme: "classic"
            }
        }
    ]
}
