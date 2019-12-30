exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query {
      allEventsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  results.data.allEventsJson.edges.forEach(edge => {
    const event = edge.node
    createPage({
      path: event.slug,
      component: require.resolve("./src/templates/events-desc.jsx"),
      context: {
        slug: event.slug,
      },
    })
  })
}
