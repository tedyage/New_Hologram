import Sequelize from 'sequelize';

class User extends Sequelize.Model{};

User.init({
    username:{
        type:Sequelize.STRING(20),
        allowNull:false,
    }
})