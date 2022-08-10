const app = require("./app");

//Create middleware and establish port number
const port = process.env.PORT || 8081; 

//Listen to Port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



