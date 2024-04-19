'use strict';
module.exports = (sequelize, DataTypes) => {
    const ActivoTags = sequelize.define('ActivoTags', {
        activoId: {
            allowNull: false,
            type: DataTypes.INTEGER // 使用 DataTypes.INTEGER
        },
        tagId: {
            allowNull: false,
            type: DataTypes.INTEGER // 使用 DataTypes.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE // 使用 DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE // 使用 DataTypes.DATE
        }
    }, {});

    ActivoTags.associate = function(models) {
        // 这里可以添加任何与其他模型的关联关系
    };

    return ActivoTags;
};
