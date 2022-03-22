const routeOptions = [
  {
    name: 'pageNotFound',
    path: '*',
    pageTitle: 'errors.pageNotFound',
  },
  {
    name: 'adverts',
    path: '/',
    pageTitle: 'adverts.name',
  },
  {
    name: 'advert-detail',
    path: '/advert-detail/:id',
    pageTitle: 'adverts.detail.name',
  },
];

const routes = routeOptions.map(({ name, path, pageTitle }) => ({
  name,
  path,
  component: () => import(`@/views/${name}`),
  meta: {
    pageTitle,
  },
}));
export default routes;
