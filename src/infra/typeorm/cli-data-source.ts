import 'dotenv/config';
import 'reflect-metadata';

import { DataSource, DataSourceOptions } from 'typeorm';

import { connection } from './connection-options';

const dataSource = connection.get('default');

export default new DataSource(dataSource as DataSourceOptions);
