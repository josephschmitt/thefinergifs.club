export default function (context) {
  const {q: query, page, size} = context.route.query;
  context.store.dispatch('search', {query, page, size});
}
