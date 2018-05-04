export default function (context) {
  context.store.dispatch('search', context.route.query.q);
}
