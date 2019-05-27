import Sequelize from 'sequelize';
import config from './db_config';

const db = {
    connect:function(){
        return new Sequelize(config);
    }
}

export default db;