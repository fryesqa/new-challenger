import React from 'react';
import { Link } from 'react-router';

// dummy data for challenge
var challenge = {
        id: '1',
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        name: 'Burger time!',
        profilePic: './icon.jpg',
        username: 'Bob Belcher', //creatorId?
        description: 'Eat 5 hamburgers',
        category: 'Food',
        challengers: ['sloppy joe', 'hungry hippo', 'big mac', 'spicy chicken', 'burger king'],
        successes: ['sloppy joe', 'big mac'],
        currentChallengers: ['spicy chicken', 'burger king'],
        createdAt: new Date().toString(),
        endTime: new Date().toString()
      };


var ChallengeInfoUser = (props) => (
  <table>
    <thead>
      <tr>
        <td> <img src="images/spork.png" width="50px" height="50px" /> </td> 
        <td> <h3>{challenge.name}</h3> </td> 
        <td> <Link to="/challenge/submitAttempt"><button>Submit Button</button></Link> </td> 
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> <img src={challenge.imageUrl} /> </td>
        <td>
          <h5>Category</h5>
          {challenge.category}
          <h5>Challenge Description:</h5>
          {challenge.description}
          <h5>Challenge Ends</h5>
          {challenge.endTime}
        </td>
      </tr>
      <tr>
        <td>
          <h5>Challenge Winners</h5>
          <ul className="PlayerList">
            {
              challenge.successes.map(function(success) {
                return <li key={success}>{success}</li>
              })
            }
          </ul>
        </td>
        <td>
          <h5>Active Challengers</h5>
            {
              challenge.currentChallengers.map(function(currentChallenger) {
                return <li key={currentChallenger}>{currentChallenger}</li>
              })
            }
        </td>
      </tr>
    </tbody>
  </table>
)

export default ChallengeInfoUser;
