const resolvers = {
   Query: {
      getTodos: () => [{ id: 1, title: 'work', completed: false }]
   }
}

export { resolvers }