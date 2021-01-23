import {MigrationInterface, QueryRunner, TableIndex} from "typeorm";

export class AddUniqueUsernameToUsers1611150309459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex("users",
          new TableIndex({
              name: 'xxx', columnNames: ['username'],isUnique: true
          })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
