module.exports = class API {
    static async fetchAllPost(req, res) {
        res.send("Hello from API")
    };

    static async fetchPostByID(req, res) {
        res.send("Post by ID")
    };

    static async createPost(req, res) {
        res.send("create Post")
    };

    static async updatePost(req, res) {
        res.send("Hello from API")
    };

    static async fetchAllPost(req, res) {
        res.send("update Post")
    };

    static async deletePost(req, res) {
        res.send("delete Post")
    };
};