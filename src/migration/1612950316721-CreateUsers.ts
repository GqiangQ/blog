import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1612950316721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable ( new Table({
            name: 'users',
            columns: [
              {name: 'id', isGenerated: true, type: 'int', generationStrategy: 'increment', isUnique: true,isPrimary: true},
              {name: 'username', type: 'varchar'},
              {name: 'password', type: 'varchar'},
              {name: 'email', type: 'varchar'},
              {name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'},
              {name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'}
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      return queryRunner.dropTable('users')
    }

}
