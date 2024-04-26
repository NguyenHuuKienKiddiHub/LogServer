const LogServices = require("../services/Log");
const getHomePage = (req, res) => {
  res.send(`
   <html>
     <body>
       <h1>CSRF Demo App</h1>
       <form method="POST" action="/transfer">
         <input type="text" name="amount" placeholder="Amount" /><br />
         <input type="submit" value="Transfer" />
       </form>
     </body>
   </html>
 `);
};
const logBehaviour = LogServices.post;
const getLogList = LogServices.get;
module.exports = {
  getHomePage,
  logBehaviour,
  getLogList,
};
