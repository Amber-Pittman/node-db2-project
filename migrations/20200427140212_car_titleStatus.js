
exports.up = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.text("VIN").notNull().unique()
        table.text("Transmission")
        table.text("Title")
    })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.dropColumn("VIN")
        table.dropColumn("Transmission")
        table.dropColumn("Title")
    });
};

