// Creating our Search model
module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
        search_term: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Search.associate = function(models) {
        // We're saying that a Search should belong to a User
        // A search can't be created without a User due to the foreign key constraint
        Search.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Search;
};