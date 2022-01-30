const { Post } = require('../models');

const postData = [
    {
        title: "Apple drops new Mac",
        post_text: "Apple released an all new Mac, there are many colors to choose from and personalizations to be made. A WebDev's dream computer!",
        user_id: 3
    },
    {
        title: "Write & Go",
        post_text: "Taskinator has given us busy bees a simple way to take notes and create checklists! This application is becoming very popular!",
        user_id: 2
    },
    {
        title: "IDK you pick",
        post_text: "The application that will save relationships. Coding bootcamp students created this awesome website that randomly chooses a restaurant for you to try with your bae.",
        user_id: 1
    },


]



const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;