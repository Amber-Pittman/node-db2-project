
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("ID")
        table.text("VIN").notNull().unique()
        table.text("Make").notNull()
        table.text("Model").notNull()
        table.decimal("Mileage").notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};

