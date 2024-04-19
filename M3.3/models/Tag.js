'use strict';
module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        tagId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER // 使用 DataTypes.INTEGER
        },
        descripcion: {
            allowNull: false,
            type: DataTypes.STRING // 使用 DataTypes.STRING
        }
    }, {});

    Tag.associate = function(models) {
        Tag.belongsToMany(models.Activo, {
            through: models.ActivoTags,
            foreignKey: 'tagId' // 指定外键
        });
    };

    return Tag;
};
