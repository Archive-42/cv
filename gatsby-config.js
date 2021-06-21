module.exports = {
    siteMetadata: {
        description: "Personal page of Bryan Guner",
        locale: "en",
        title: "Bryan Guner",
    },
    module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    title: "John Doe",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
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
