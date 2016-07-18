// dummy data for populating challenge components

var dummyData = {
  challenges: [
    {
      id: '1',
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
      name: 'Burger time!',
      username: 'Bob Belcher', //creatorId?
      description: 'Eat 5 hamburgers',
      category: 'Food',
      challengers: 10,
      successes: 8,
      createdAt: new Date().toString(),
      endTime: new Date().toString()
    },
    {
      id: '2',
      imageUrl: "http://i.onionstatic.com/avclub/5748/94/original/304.jpg",
      name: 'Burger frenzy!',
      username: 'Bobby Belchy',
      description: 'Eat 10 hamburgers',
      category: 'Food',
      challengers: 20,
      successes: 3,
      createdAt: new Date().toString(),
      endTime: new Date().toString()
    }
  ],
  user: {
    id: '1',
    username: 'Jimmy Pesto',
    imageUrl: 'http://vignette3.wikia.nocookie.net/bobsburgerpedia/images/3/32/Jimmy_Pesto.png/revision/latest?cb=20130305162049',
    email: 'jimmypesto@bobsucks.com'
  }
};

export default dummyData; 

