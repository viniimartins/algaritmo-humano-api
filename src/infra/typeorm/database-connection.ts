import { DataSource, DataSourceOptions } from 'typeorm';

import { connection } from './connection-options';

const DataSourceManager = new DataSource(
  connection.get('default') as DataSourceOptions,
);


export { DataSourceManager };
