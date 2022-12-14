import React from 'react';
import classes from './Gallery.module.css';
const Gallery=()=>{
    return(
        
            <div className={classes.gallery}>
  <h1>CSS3 Animated Art Gallery</h1>
  <div className={classes.row}>    
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/88/24/cavsM98r_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"Loneliness of autumn"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/13/10/fbt61vRw_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"Happiness"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/70/de/5zEGOiaM_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"Last Dream"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/9e/5b/h0yoZLbM_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"New Big Ben"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
  </div>
  <div className={classes.row}>    
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/05/ac/sefBjSX3_o.jpg'></img>
          <div className={classes.photoInfo}>
            <h3>"Autumn Foggy Day"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/e3/43/PdIsPBrR_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"Paris, Eifel Tower"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/05/04/zVWvnycP_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"He proposal"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div className={classes.thumbnail}>
      <div className={classes.photoContainer}>
        <a href='#'>
          <img src='https://images2.imgbox.com/f9/85/LRGslITj_o.jpg'/>
          <div className={classes.photoInfo}>
            <h3>"The Bridge of Amsterdam"</h3>
            <span className={classes.paintingDate}>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
  
  
</div>
        </div>
    )
}
export default Gallery;