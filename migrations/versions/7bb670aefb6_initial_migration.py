"""Initial migration

Revision ID: 7bb670aefb6
Revises: 
Create Date: 2016-07-13 18:52:10.746742

"""

# revision identifiers, used by Alembic.
revision = '7bb670aefb6'
down_revision = None
branch_labels = None
depends_on = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.execute("""
        CREATE TABLE user (
          id BIGINT PRIMARY KEY AUTO_INCREMENT,
          username VARCHAR(30) NOT NULL,
          firstname VARCHAR(255) DEFAULT NULL,
          lastname VARCHAR(255) DEFAULT NULL,
          password TEXT,
          gravatar TEXT,
          registered_at TIMESTAMP
        );

        CREATE TABLE message (
          id BIGINT PRIMARY KEY AUTO_INCREMENT,
          user_id BIGINT REFERENCES user(id),
          address_to BIGINT REFERENCES user(id) DEFAULT NULL,
          created_at TIMESTAMP,
          title TEXT,
          message TEXT
        );
    """)


def downgrade():
    op.drop_table("user")
    op.drop_table("message")
