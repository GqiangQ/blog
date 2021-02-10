import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComments1612950465512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: 'comments',
            columns: [
              {name: 'id', isGenerated: true, type: 'int', generationStrategy: 'increment', isPrimary: true},
              {name: 'userId', type: 'int'},
              {name: 'postId', type: 'int'},
              {name: 'content', type: 'text'},
              {name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'},
              {name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'}
            ]
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('comments')
    }

}
