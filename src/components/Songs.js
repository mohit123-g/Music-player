

import "../App.css";
import { useState } from "react";
const Songs=(props)=>{
  
	
	const [SearchSong,setSearchSong]=useState(-1);
	const searchSongs=()=>{
		var search=props.search;
		var flag=0;
  for( let i=0;i<props.songs.length;i++)
  {   
        if(props.songs[i].name===search)
		{ 		
		   setSearchSong(i+1);
		   flag=1;
		}
	
  }
  if ( flag<1){
	alert("Song is not found");
 }
	};

	return (
	<div className="song">
		<h1>
			<input id="inputbox" placeholder="Enter song name"
			onChange={(event)=>{
				props.setSearch(event.target.value);
			 }}
			/>
	 <a href={"player"+SearchSong}>
	 <button id="searchButton" onClick={searchSongs}>Search</button> 
		 </a>


		 
			<br></br><br></br> 
			 <a href="player1" >
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
		/></button></a>
		
<a href="player2">
<button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image" 
		/></button></a>

<a href="player3">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
		/></button></a>
		
<a href="player4">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
		/></button></a>
		
<a href="player5">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
		/></button></a>
		
<a href="player6">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
		/></button></a>
		
<a href="player7">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
		/></button></a>
		
<a href="player8">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player9">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player10">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player11">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player12">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player13">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player14">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player15">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player16">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player17">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player18">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player19">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player20">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player21">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player22">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player23">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player24">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player25">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>
		
<a href="player26">
    <button id="but1" >
		<img src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
		  alt="my image"
    
		/></button></a>  
    </h1>
	</div>
	);
}

export default Songs;
