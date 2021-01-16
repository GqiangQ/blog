import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComments1610377540024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(
          new Table({
              name: 'comments',
              columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy:"increment", isPrimary: true },
                { name: 'userId',type: 'int' },
                { name: 'postId',type: 'int' },
                { name: 'content', type: 'text' },
                { name: 'createAt', type: 'timestamp', isNullable: false, default: 'now()' },
                { name: 'updateAt', type: 'timestamp', isNullable: false, default: 'now()' }
              ]
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('comments')
    }

}
