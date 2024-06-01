import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/html/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 
