import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1610374438691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // 升级数据库
      return await queryRunner.createTable(
          new Table({
              name: 'users',
              columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy:"increment", isPrimary: true },
                { name: 'username',type: 'varchar'},
                { name: 'password_digest',type: 'varchar'},
                { name: 'createAt', type: 'time', isNullable: false, default: 'now()' },
                { name: 'updateAt', type: 'time', isNullable: false, default: 'now()' }
              ]
          })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users')
    }

}