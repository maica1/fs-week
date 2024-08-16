import next from 'eslint-config-next';

export default [
  {
    extends: ['next/core-web-vitals'],
    rules: {
      'no-unused-vars': 'error',
    },
  },
];
