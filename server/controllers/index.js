// pull in our models. This will automatically load the index.js from that folder
const models = require('../models');
const Cat = models.Cat.CatModel;

// default fake data so that we have something to work with until we make a real Cat
const defaultData = {
  name: 'unknown',
  bedsOwned: 0,
};

let lastAdded = new Cat(defaultData);
// console.dir(lastAdded);

const hostIndex = (req, res) => {
  res.render('index', {
    currentName: lastAdded.name,
    title: 'Home Page',
    pageName: "Home Page",
  });
};

const readAllCats = (req, res, callback) => {
  Cat.find(callback).lean();
};

const readCat = (req, res) => {
  if(!req.query.nam){
    return res.status(400).json({error: 'A name is needed!'});
  }

  const name1 = req.query.name;
  const callback = (err, doc) => {
    if(err) {
      return res.status(500).json({err});
    }

    return res.json(doc);
  }

  Cat.findByName(name1, callback);
};

const hostPage1 = (req, res) => {

};

const hostPage2 = (req, res) => {
  res.render('page2');
};

const hostPage3 = (req, res) => {
  res.render('page3');
};

const getName = (req, res) => {

};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname || !req.body.beds) {
    return res.status(400).json({ error: 'firstname,lastname and beds are all required' });
  }
  
};

const searchName = (req, res) => {
  if (!req.query.name) {
    return res.status(400).json({ error: 'Name is required to perform a search' });
  }
};

const updateLast = (req, res) => {
	
};

const notFound = (req, res) => {
  res.status(404).render('notFound', {
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  page3: hostPage3,
  readCat,
  getName,
  setName,
  updateLast,
  searchName,
  notFound,
};
