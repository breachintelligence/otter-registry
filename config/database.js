export default {
  development: {
    driver: 'sqlite3',
    database: 'otter_gate_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'otter_gate_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'otter_gate_prod'
  }
};
