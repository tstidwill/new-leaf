/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("leaves", function (table) {
    table.decimal("lat", 10, 8).alter();
    table.decimal("lng", 11, 8).alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("leaves", function (table) {
    table.decimal("lat", 8, 2).alter();
    table.decimal("lng", 8, 2).alter();
  });
};
