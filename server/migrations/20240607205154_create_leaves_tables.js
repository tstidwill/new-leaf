/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("leaves", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.float("lat").notNullable();
    table.float("long").notNullable();
    table.string("address").notNullable();
    table.string("description").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("leaves");
};
