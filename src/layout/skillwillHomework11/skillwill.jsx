import React from 'react'
import './skillwill.css'
import Card from '../../components/cards/card'
import harry from '../../assets/image/books/harry.png'
import got from '../../assets/image/books/got.png'
import hobbit from '../../assets/image/books/hobbit.png'
import lotr from '../../assets/image/books/lotr.png'
import Header from '../header/header'; 
import Footer from '../footer/footer'; 
import List from '../homeworkLists/list'

const data = [
  {
     image: harry, 
     name: "Harry Potter",
      description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
       characters: ['Lord Voldemort', 'Professor Severus Snape', 'Ron Weasley' , 'Hermione Granger'] 
      },

  { image: got, 
    name: "Game of Thrones", 
    description: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
     characters: ['Eddard Stark', 'Daario Naharis','Roose Bolton', 'Jon Snow', ]
     },

  { image: hobbit,
     name: "The Hobbit",
      description: 'The Hobbit is a series of three epic high fantasy adventure films directed by Peter Jackson. The films are subtitled An Unexpected Journey, The Desolation of Smaug, and The Battle of the Five Armies. The films are based on the 1937 novel The Hobbit by J. R. R.', 
      characters: ['Bilbo Baggins', 'Gandalf', 'Thorin Oakenshield' , 'Smaug'] 
    },

  { image: lotr,
     name: "The Lord of The Rings", 
     description: 'The Lord of the Rings is a trilogy of epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by British author J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.', 
     characters: ['Frodo Baggins', 'Aragorn','Samwise Gamgee', 'Gandalf', 'Legolas'] 
    },
    
];





export default function homework() {
  
  const handleButtonClick = (name, characters) => {
    alert(`Name: ${name}\nCharacters: ${characters.join(', ')}`);
    console.log(`Name: ${name}`);
    console.log(`Characters: ${characters.join(', ')}`);
  };
  
  return (
    <div>
      <Header/>
      <List/>
        <div className='homework0112'>

          <div className='bookDiv'>
            <h1 className='skilhome'>SKILLWILL HOMEWORK 11</h1>
            <div className='cards'>

            {data.map((card, index) => (
              <Card
                key={index}
               name={card.name}
                 image={card.image}
                 description={card.description}
                 characters={card.characters}
                onButtonClick={() => handleButtonClick(card.name, card.characters)}
              />
            ))}

          </div>

          </div>  
          </div>

              <Footer/>
        </div>




  )
}
