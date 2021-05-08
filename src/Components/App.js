import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../API/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
        state ={images:[]};
       onSearchSubmit= async(term) =>   {
            console.log(term);
            const response = await unsplash.get('/search/photos',{
                params:{ query: term}
               
                
            });
            // console.log(this);
            // console.log(response.data.results); 
            this.setState({images:response.data.results});
            }

      
        render(){
            return (
            <div className='ui container' style={{marginTop:'10px'}}>
               
                <SearchBar onsSubmit={this.onSearchSubmit} guesswhatiam="I am the propse object"/> 
                
              
              Found :{this.state.images.length} images  
              <ImageList  images ={this.state.images}/>
            </div>
        
        );

    }

}
export default App;

// import React from 'react';
// import SearchBar from './SearchBar';

// class App extends React.Component {
//   onSearchSubmit(term) {
//     console.log(term);
//   }

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: '10px' }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//       </div>
//     );
//   }
// }

// export default App;

