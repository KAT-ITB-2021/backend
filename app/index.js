const app = require('./app');
const config = require('./config');

const app = express();
app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/register'));