import React, { Component } from 'react';
import Main from './navbar.js'
import Liste from './liste'
import './App.css';
import Hoc from './hoc.js'
import './hoc.css'
const newstab=[{
  // id:'1',
  title:'LA GRANDE MURAIL',
  image:'https://www.famillechretienne.fr/var/fc/storage/images/media/images/films/la-grande-muraille/39741136-1-fre-FR/la-grande-muraille.jpeg',
  rating:5
},
  
  {
  // id:'2',
  title:'SOUS UN AUTRE JOURS',
  image:'https://img6.cdn.cinoche.com/images/6105e3dc836775d05b87471a3c08fe19.jpg',
  rating:1
  },
  {
  // id:'3',
  title:'LE SENS DE LA FETE',
  image:'https://www.telerama.fr/sites/tr_master/files/sheet_media/movie/7_768677.jpg',
  rating:3
  },
  {
    // id:'3',
    title:'HOURS',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGMcOBaT-YObcnNdxAwna1obrZ6DKdDbMHeiLCtrWq3Jl_R-S',
    rating:2
    },
  ]

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        news:newstab ,
        // filtred:newstab ,
        isloading:true
      }}
      serach(keyword){
        let filter1=newstab.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
        this.setState({news:filter1})
    }
    searchrating(rate){
      let filter1=newstab.filter((el,i)=>{return el.rating === rate})
      this.setState({news:filter1})
    

  }
  componentDidMount(){
    return setTimeout(() => {this.setState({isloading:false})
      
    }, 2000);
  }
  addmovie=(x)=>{
    this.setState({news:this.state.news.concat(x)})
  }
  
  remove=(id)=>
  {
      this.setState({
          news:this.state.news.filter((el,index)=>(index!==id))
      })
  }

  render() {
    return (
      <div className="App">
      <Main searchname={(keyword)=>this.serach(keyword)}
      searchrating={(rate)=>this.searchrating(rate)}
      add={(x)=>this.addmovie(x)}/>

      <Liste 
      news={this.state.news}
      isloading={this.state.isloading}
      remove={this.remove}
     
     />
      </div>
    );
  }
}

export default Hoc(App) ;
