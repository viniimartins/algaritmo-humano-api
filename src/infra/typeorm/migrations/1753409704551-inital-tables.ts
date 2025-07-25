import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitalTables1753409704551 implements MigrationInterface {
  name = 'InitalTables1753409704551';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "duration"`);
    await queryRunner.query(
      `ALTER TABLE "courses" ADD "duration" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "duration"`);
    await queryRunner.query(
      `ALTER TABLE "courses" ADD "duration" integer NOT NULL`,
    );
  }
}
