const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING, allowedNull: false
    },
    slug: {
      type: Sequelize.STRING, allowedNull: false
    },
    content: {
      type: Sequelize.TEXT, allowedNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });
  
  const User = db.define('user', {
    name: {
      type: Sequelize.STRING, allowedNull: false
    },
    email: {
      type: Sequelize.STRING, allowedNull: false,
      validate: {isEmail: true}
    }
  });
  

module.exports = { db, Page, User };
// module.exports = {
//     db
// }