import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  // Nested Routes
  layout('routes/dashboard.tsx', []),
] satisfies RouteConfig;
