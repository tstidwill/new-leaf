/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("leaves", (table) => {
    table.string("name").notNullable();
    table.increments("id").primary();
    table.string("type").notNullable();
    table.string("address").notNullable();
    table.decimal("lat").notNullable();
    table.decimal("lng").notNullable();
    table.string("description");
    table.string("website");
    table.string("place_id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("leaves");
};
