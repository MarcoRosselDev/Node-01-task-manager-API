const mongoose = require("mongoose");

const connerctionString =
  "mongodb+srv://marco:<password>@nodeexpressproject.ioc92yd.mongodb.net/NODE-01-TASK-MANAGER?retryWrites=true&w=majority";

mongoose.connect(connerctionString);
