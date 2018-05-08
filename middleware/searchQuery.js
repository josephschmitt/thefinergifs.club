export default async function searchQuery(context) {
  const {q: query, page, size} = context.route.query;
  await context.store.dispatch('search', {query, page, size});
}
