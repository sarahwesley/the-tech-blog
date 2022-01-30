const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This is going to help me so much!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "I've already tried it! My wife and I used it when picking where to take our friends. It gave us a great restaurant in the area, and our friends were impressed."
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "I absolutely cannot wait to get mine! I'm thinking blue for the color."
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;