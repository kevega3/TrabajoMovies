
import { useEffect,useState } from 'react';
import { Input} from 'antd';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons'; 

import './css/Tarjetas.css';

export const Tarjetas = (props) => {
    const { Meta } = Card;     


    const renderStars = (rating) => {
        const stars = [];
        const maxStars = 5;
    
        const filledStars = Math.round(rating)/ 2;
      
        for (let i = 1; i <= maxStars; i++) {
          if (i <= filledStars) {
            stars.push(<StarFilled key={i} style={{ color: 'gold', fontSize: '20px' }} />);
          } else {
            stars.push(<StarFilled key={i} style={{ color: 'gray', fontSize: '20px' }} />);
          }
        }
        return stars;
      };
    return(

        <div className="container mt-3">
        <div className="row">
            {props.movies.map((movie) => (
                <div
                    key={movie.id}
                    className="col-md-3 mb-3"
                    onClick={() => props.selectMovie(movie)}
                >
                    <Card className='MetaData' styles={{color:'white'}}
                        hoverable
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                        cover={
                            <img
                                alt="example"
                                src={`${props.getConfig.URL_IMAGE}${movie.poster_path}`} 
                            />
                        }    
                    >
                         <Meta
                                title={<span style={{ color: 'white',justifyContent:"start",display:"grid" }}>{movie.title}</span>} 
                                description={
                                    <span style={{ color: 'white',justifyContent:"start",display:"flex" }}>
                                      {renderStars(movie.vote_average)}
                                    </span>
                                  }
                            />
                    </Card>
                </div> 
            ))}
        </div>
    </div>
    
       
    );
};
