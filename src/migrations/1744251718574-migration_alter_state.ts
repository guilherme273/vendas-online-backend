import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrationAlterState1744251718574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE state ADD COLUMN uf VARCHAR(2) NOT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE state DROP COLUMN uf;`);
  }
}
