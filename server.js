var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
