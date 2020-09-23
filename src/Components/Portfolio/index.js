import React, { Component } from 'react'
import {PortfolioTitle,PortfolioTitleSpan,PortfolioSection,Img,PortfolioList,PortfolioItem,OverlaySpan,Overlay,Box} from './style.js'

const Portfolio =()=>  {
        return (
            <PortfolioSection>
            <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div>
                <Box>
                    <Img src="images/Portfolio/portfolio-img1.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img2.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img3.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img4.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img5.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img6.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img7.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
                <Box>
                    <Img src="images/Portfolio/portfolio-img8.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                
            </div>
            
        </PortfolioSection>
        )
    
}


export default Portfolio;


















// in this case use show component images by class based



// import React, { Component ,Fragment} from 'react'
// import {Box,Img,Overlay,OverlaySpan,PortfolioItem,PortfolioList,PortfolioSection,PortfolioTitleSpan,PortfolioTitle} from './style.js'
// import axios from 'axios';

//  class Portfolio extends Component {



//         state={
//             images : [],
//         };
    
//         componentDidMount() {
//             axios.get('js/data.json').then(res => {this.setState({images: res.data.portfolio})} )
//         };


//         render(){
//             const {images} = this.state;
    
//             const imagesList = images.map( (imagesItem)=>{
//                 console.log("iddddd",imagesItem.id)
//               return (
//                 <Box key={imagesItem.id}>
//                 <Img src={imagesItem.image} alt=""/>
//                 <Overlay>
//                     <OverlaySpan>
//                         Show Image
//                     </OverlaySpan>
//                 </Overlay>
//                </Box>  
//               )
//             } )
//         return (
//             <PortfolioSection>
//             <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
//             <PortfolioList>
//                 <PortfolioItem active  >All</PortfolioItem>
//                 <PortfolioItem>HTML</PortfolioItem>
//                 <PortfolioItem>Photoshop</PortfolioItem>
//                 <PortfolioItem>Wordpress</PortfolioItem>
//                 <PortfolioItem>Mobile</PortfolioItem>
//             </PortfolioList>
            
//             <div>
//            {imagesList}
//             </div>
//         </PortfolioSection>
//         )
//         }
// }


// export default Portfolio;


//************************************************************************************* */

// in this case use show component images by hooks 

// import React, { useState ,useEffect} from 'react'
// import {Box,Img,Overlay,OverlaySpan,PortfolioItem,PortfolioList,PortfolioSection,PortfolioTitleSpan,PortfolioTitle} from './style.js'
// import axios from 'axios';

// const Portfolio =()=>  {

//         //using hooks by functional component 
//         const [images , setImages] = useState([]);

//         useEffect ( ()=> {
//             axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})      
//         } , [])

     
//         const PortfolioImages =()=> images.map( (imageItem)=>{
//             console.log("images",imageItem.image)
//             return (   
//                 <Box key={imageItem.id}>
//                  <Img src={imageItem.image} alt=""/>
//                  <Overlay>
//                      <OverlaySpan>
//                          Show Image
//                      </OverlaySpan>
//                  </Overlay>
//              </Box>  
             
//           )  
         
//         });
//         return (
//             <PortfolioSection>
//             <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
//             <PortfolioList>
//                 <PortfolioItem active  >All</PortfolioItem>
//                 <PortfolioItem>HTML</PortfolioItem>
//                 <PortfolioItem>Photoshop</PortfolioItem>
//                 <PortfolioItem>Wordpress</PortfolioItem>
//                 <PortfolioItem>Mobile</PortfolioItem>
//             </PortfolioList>
            
//             <div>
//            {PortfolioImages}
//             </div>
            
//         </PortfolioSection>
//         )
    
// }


// export default Portfolio;

