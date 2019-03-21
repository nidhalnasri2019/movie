import React, { Component } from 'react';
import Main from './navbar.js'
import Liste from './liste'
import './App.css';
import Hoc from './hoc.js'
import './hoc.css'
const newstab=[{
  id:'1',
  title:'LA GRANDE MURAIL',
  image:'https://www.famillechretienne.fr/var/fc/storage/images/media/images/films/la-grande-muraille/39741136-1-fre-FR/la-grande-muraille.jpeg',
  article: "There s practically nothing easier to test than pure, data-in data-out functions, so why would we throw away the opportunity to define our components in such a way by adding state to them? When testing stateful components, now we need to get our components into the right state in order to test their behaviour. We also need to come up with all of the various combinations of state (which the component can mutate at any time), and props (which the component has no control over), and figure out which ones to test, and how to do so. When components arejust functions of input props, testing is a lot easier.(More on testing later).",
  rating:5
},
  
  {
  id:'2',
  title:'SOUS UN AUTRE JOURS',
  image:'https://img6.cdn.cinoche.com/images/6105e3dc836775d05b87471a3c08fe19.jpg',
  article:'In point #1, I said that React is just for views. The obvious question then is, Where do I put all my state and logic? Im glad you asked! You may already be aware of Flux, which is a style/pattern/architecture for designing web applications,  most commonly ones that use React for rendering. There are several frameworks out there that implement the ideas of Flux,  but without a doubt the one that I recommend is Redux.js*.',
  rating:1
  },
  {
  id:'3',
  title:'LE SENS DE LA FETE',
  image:'https://www.telerama.fr/sites/tr_master/files/sheet_media/movie/7_768677.jpg',
  article:'Testing React components is still a bit of a tricky topic. Not because its hard, but because it s still an evolving area, and no single approach has emerged as the best one yet. At the moment, my go-to method is to use shallow rendering and prop assertions.Shallow rendering is nice, because it allows you to render a single component completely, but without delving into any of its child components to render those. Instead, the resulting object will tell you things like the type and props of the children. ',
  rating:3
  },
  ]

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        news:newstab ,
        filtred:newstab ,
        isloading:true
      }}
      serach(keyword){
        let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
        this.setState({filtred:filter1})
    }
    searchrating(rate){
      let filter1=this.state.news.filter((el,i)=>{return el.rating === rate})
      this.setState({filtred:filter1})
    

  }
  componentDidMount(){
    return setTimeout(() => {this.setState({isloading:false})
      
    }, 2000);
  }
  render() {
    return (
      <div className="App">
      <Main searchname={(keyword)=>this.serach(keyword)}
      searchrating={(rate)=>this.searchrating(rate)}/>

      <Liste news={this.state.filtred}
      isloading={this.state.isloading}/>

      </div>
    );
  }
}

export default Hoc(App) ;
