const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 
        req.header('origin') || 
        req.header('x-forwarded-host') || 
        req.header('referrer') || 
        req.header('host')
    )
    return res.json({ username: os.userInfo().username });
    }
);

app.get('/app/*', function response(req, res) {
    res.send(path.join(__dirname, 'client/public/index.html'));
    res.end();
});

app.listen(8080, () => console.log("Listening on port 8080!"));