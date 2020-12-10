const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGES_URI);

const Plot = sequelize.define('plot', {
    type: {
        type: DataTypes.STRING,
        unique: true,
    },
    x_axis: {
        type: DataTypes.ARRAY,
        allowNull: false
    },
    y_axis: {
        type: DataTypes.ARRAY,
        allowNull: false
    },
});

export default Plot;
