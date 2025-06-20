import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('bemdev', [
    route('about', 'routes/about.tsx'),
    route('posts/:postId', 'routes/post.tsx'),
  ]),

  // Nested Routes
  layout('routes/dashboard.tsx', [
    route('finances', 'routes/finances.tsx'),
    route('personal-info', 'routes/personal-info.tsx'),
  ]),
] satisfies RouteConfig;
