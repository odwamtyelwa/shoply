const bcrypt = require('bcryptjs');
const admins = [
  {
    name:'Odwa Mtyelwa',
    image: "https://i.ibb.co/wpjNftS/user-2.jpg",
    email: "odwamtyelwa777@gmail.com",
    password: bcrypt.hashSync("050617"),
    phone: "0608158140",
    role: "Admin",
    joiningData: new Date()
  },
  {
    name:'Alice B. Porter',
    image: "https://i.ibb.co/wpjNftS/user-2.jpg",
    email: "kopul800@gmail.com",
    password: bcrypt.hashSync("050617"),
    phone: "708-628-322",
    role: "Admin",
    joiningData: new Date()
  },
  {
    name:'Corrie H. Cates',
    image: "https://i.ibb.co/wpjNftS/user-2.jpg",
    email: "cebolethu712@gmail.com",
    password: bcrypt.hashSync("050617"),
    phone: "708-628-3122",
    role: "Admin",
    joiningData: new Date()
  },
  {
    name:'Owami Cele',
    image: "https://i.ibb.co/wpjNftS/user-2.jpg",
    email: "owamicele700@gmail.com",
    password: bcrypt.hashSync("050617"),
    phone: "0731632699",
    role: "CEO",
    joiningData: new Date()
  },
  {
    name:'Ndumiso Shazi',
    image: "https://i.ibb.co/wpjNftS/user-2.jpg",
    email: "shazindumiso700@gmail.com",
    password: bcrypt.hashSync("050617"),
    phone: "0789477080",
    role: "Manager",
    joiningData: new Date()
  }
];

module.exports = admins;
