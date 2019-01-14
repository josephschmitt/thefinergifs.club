export default async function searchQuery(context) {
  const {q: query, season, episode, page, size} = context.route.query;
  await context.store.dispatch('search', {query, season, episode, page, size});
}
