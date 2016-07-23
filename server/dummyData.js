module.exports = {
  challenges: [
    {
      id: '1',
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
      name: 'Burger time!',
      username: 'Bob Belcher', //creatorId?
      creatorId: 3,
      description: 'Eat 5 hamburgers',
      category: 'Food',
      challengers: 10,
      successes: 8,
      challengerNames: ['sloppy joe', 'hungry hippo', 'big mac', 'spicy chicken', 'burger king'],
      successNames: ['sloppy joe', 'big mac'],
      currentChallengers: ['spicy chicken', 'burger king'],
      createdAt: new Date().toString(),
      endTime: new Date().toString()
    },
    {
      id: '2',
      imageUrl: 'http://i.onionstatic.com/avclub/5748/94/original/304.jpg',
      name: 'Burger frenzy!',
      username: 'Bobby Belchy',
      creatorId: 2,
      description: 'Eat 10 hamburgers',
      category: 'Food',
      challengers: 20,
      successes: 3,
      createdAt: new Date().toString(),
      endTime: new Date().toString()
    },
    {
      id: '3',
      imageUrl: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/5/10/1273503176987/13970-lbs-of-pasta-007.jpg",
      name: 'Pasta Pit',
      username: 'Jimmy Pesto',
      creatorId: 1,
      description: 'Dive into a pit of perfectly cooked, saucy pasta and find the lone meatball',
      category: 'Other',
      challengers: 10,
      successes: 2,
      createdAt: new Date().toString(),
      endTime: new Date().toString()
    }

  ],
  user: {
    id: '1',
    username: 'Jimmy Pesto',
    imageUrl: 'http://vignette3.wikia.nocookie.net/bobsburgerpedia/images/3/32/Jimmy_Pesto.png/revision/latest?cb=20130305162049',
    email: 'jimmypesto@bobsucks.com',
    challengesCreated: [
      {
        id: '3',
        imageUrl: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/5/10/1273503176987/13970-lbs-of-pasta-007.jpg",
        name: 'Pasta Pit',
        username: 'Jimmy Pesto',
        creatorId: 1,
        description: 'Dive into a pit of perfectly cooked, saucy pasta and find the lone meatball',
        category: 'Other',
        challengers: 10,
        successes: 2,
        createdAt: new Date().toString(),
        endTime: new Date().toString()
      }
    ],
    challengesTaken: [
      {
        id: '1',
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        name: 'Burger time!',
        username: 'Bob Belcher', //creatorId?
        creatorId: 3,
        description: 'Eat 5 hamburgers',
        category: 'Food',
        challengers: 10,
        successes: 8,
        createdAt: new Date().toString(),
        endTime: new Date().toString()
      },
    ],
    challengesCompleted: [
      {
        id: '2',
        imageUrl: 'http://i.onionstatic.com/avclub/5748/94/original/304.jpg',
        name: 'Burger frenzy!',
        username: 'Bobby Belchy',
        creatorId: 2,
        description: 'Eat 10 hamburgers',
        category: 'Food',
        challengers: 20,
        successes: 3,
        createdAt: new Date().toString(),
        endTime: new Date().toString()
      }
    ] 
  },
  adminChallenge: {
    id: '3',
    imageUrl: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/5/10/1273503176987/13970-lbs-of-pasta-007.jpg",
    name: 'Pasta Pit',
    description: 'Dive into a pit of perfectly cooked, saucy pasta and find the lone meatball',
    category: 'Other',
    icon: "",
    challengers: [
      {
        id: 1,
        username: 'Teddy',
        attempt: {
          imageUrl: "http://www.splendidtable.org/sites/default/files/styles/w1200/public/eating_spaghetti.jpg?itok=Ri1NoYKy"
        }
      },
      {
        id: 2,
        username: 'Mort'
      }
    ]
  },
  currentUser: 1
};
