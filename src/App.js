import StarRatings from 'react-star-ratings';
import React from 'react';
import { data } from './data';
import { useState } from 'react';
import arrow from './Images/arrow.png';

function App() {
  let [i, seti] = useState(2);
  // console.log(i);
  // console.log(data[i]);
  let j = i - 1;
  let k = i - 2;
  if(i == 0){
    j = data.length - 1;
    k = data.length - 2;
  }
  if(i == 1){
    k = data.length - 1;
  }

  return (
    <div className='page'>
       
      <div className="left">
          <div className='rating' style={{
          color: i%2==0 ? '#4CAF50' : '#609B6C',
        }}>
          { data[i].rating }
          </div>
          <StarRatings
            rating={ parseFloat(data[i].rating) }
            isSelectable={ false }
            isAggregateRating={ true }
            numOfStars={ data[i].rating }
            starRatedColor={i%2==0 ? '#4CAF50' : '#609B6C'}
            starDimension='30px'
          />
          <div className='name'>
          {data[i].name}
          </div>
          <div className='company'>
          {data[i].company}
          </div>
          <div className='description'>
          {data[i].description}
          </div>
          <button className='book' style={{
          backgroundColor: i%2==0 ? '#4CAF50' : '#609B6C',
        }}>Book a Session</button>
      </div>

      <div className='half-circle'  style={{
          backgroundColor: i%2==0 ? '#C5F8C7' : '#7ABD87',
        }}> </div>

      {/* <div className='circle'></div> */}
      
      <div className='up-arrow' onClick={()=>{seti((i+1)%data.length)}}>
        <img className='arrow' src={arrow}></img>
      </div>

      <div className='down-arrow' onClick={()=>{
            if(i == 0){
              seti(data.length - 1)
            }else{  
              seti((i-1))
            }
        }}>
        <img className='arrow' src={arrow}></img>
      </div>

      <div className='name1'>
        {data[i].name}
      </div>

      <img className='img' src={data[i].url}></img>
      <img className='img1' src={data[i].url}></img>
      <img className='img2' src={data[j].url}></img>
      <img className='img3' src={data[k].url}></img>
      <img className='img4' src={data[(i+1)%data.length].url}></img>
      <img className='img5' src={data[(i+2)%data.length].url}></img>

    </div>
  );
}

export default App;
