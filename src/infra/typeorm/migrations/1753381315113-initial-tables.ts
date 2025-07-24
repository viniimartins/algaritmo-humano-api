import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTables1753381315113 implements MigrationInterface {
    name = 'InitialTables1753381315113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_a4396a5235f159ab156a6f8b603"`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "status" SET DEFAULT 'ACTIVE'`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_a4396a5235f159ab156a6f8b603" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_a4396a5235f159ab156a6f8b603"`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_a4396a5235f159ab156a6f8b603" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
