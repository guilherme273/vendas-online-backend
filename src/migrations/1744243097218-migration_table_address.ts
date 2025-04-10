import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrationTableAdress1744243097218 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE address (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        complement VARCHAR(255),
        number INT NOT NULL,
        cep VARCHAR(20) NOT NULL,
        city_id INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (city_id) REFERENCES city(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXIST "address"');
  }
}
