import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const app = express();
// serve up production assets
app.use(express.static('dist'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname('/Users/franyelizacodeait/Desktop/yeliBeans/Adopt-me/dist');

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 3009;
console.log('server started on port:',PORT);
app.listen(PORT);