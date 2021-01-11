import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateChangeColumnsName1610379830332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'password_digest', 'passwordDigest')
        await queryRunner.renameColumn('posts', 'author_id', 'authorId')
        await queryRunner.renameColumn('comments', 'user_id', 'userId')
        await queryRunner.renameColumn('comments', 'post_id', 'postId')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
