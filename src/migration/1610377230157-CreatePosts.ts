import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePosts1610377230157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 升级数据库
        return await queryRunner.createTable(
          new Table({
              name: 'posts',
              columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy:"increment", isPrimary: true },
                { name: 'title',type: 'varchar' },
                { name: 'content',type: 'text' },
                { name: 'authorId', type: 'int' },
                { name: 'createAt', type: 'timestamp', isNullable: false, default: 'now()' },
                { name: 'updateAt', type: 'timestamp', isNullable: false, default: 'now()' }
              ]
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('posts')
    }

}
