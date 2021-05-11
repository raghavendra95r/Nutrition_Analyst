import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import InputArea from './components/InputArea/InputArea';
import AnalyzeButton from './components/AnalyzeButton/AnalyzeButton';
import NewRecipebutton from './components/NewRecipeButton/NewRecipeButton';
import NutritionFacts from './components/NutritionFacts/NutritionFacts';


class App extends React.Component {
  inputstr;
  url;
  constructor(){
    super();
    this.state={
      textinput : "",
      reset:false,
      
      calories:'',
      d_carbs: '',
      d_Cholestrol:'',
      d_Saturated:'',
      d_Fat:'',
      d_Iron:'',
      d_Sodium:'',
      d_protein:'',
      d_VitaD:'',
      d_Calcium:'',
      d_Pottasium:'',
    

      n_carbs: '',
      n_Cholestrol:'',
      n_Saturated:'',
      n_Fat:'',
      n_Iron:'',
      n_Sodium:'',
      n_protein:'',
      n_VitaD:'',
      n_Calcium:'',
      n_Pottasium:'',
   
  }
}

getInput = (e) => {
this.setState({textinput :e.target.value});

}


onAnalyze = () => {
  this.setState({reset:true});
    let api ="https://api.edamam.com/api/nutrition-data?app_id=dd53f8aa&app_key=c82ff8f8ee25249f91ae1bd23f0c26c0&ingr=";
    this.inputstr=this.state.textinput;
    this.url=api+this.inputstr;
    this.url=this.url.replace(/ /g, '%20');
     console.log(this.url);
    // console.log(this.state.textinput);
    this.getData();
}

getData(){

    try{
      fetch(this.url)
      .then(respond =>{
      return respond.json()
    })
    .then(data2 =>{
      this.setState({calories:data2.totalNutrientsKCal.ENERC_KCAL.quantity});
      this.setState({d_carbs:Math.round(data2.totalDaily.CHOCDF.quantity)});
      this.setState({d_Cholestrol:Math.round(data2.totalDaily.CHOLE.quantity)});
      this.setState({d_Saturated:Math.round(data2.totalDaily.FASAT.quantity)});
      this.setState({d_Fat:Math.round(data2.totalDaily.FAT.quantity)});
      this.setState({d_Iron:Math.round(data2.totalDaily.FE.quantity)});
      this.setState({d_Sodium:Math.round(data2.totalDaily.NA.quantity)});
      this.setState({d_VitaD:Math.round(data2.totalDaily.VITD.quantity)});
      this.setState({d_Calcium:Math.round(data2.totalDaily.CA.quantity)});
      this.setState({d_protein:Math.round(data2.totalDaily.PROCNT.quantity)});
      this.setState({d_Pottasium:Math.round(data2.totalDaily.K.quantity)});
  
      this.setState({d_carbs:Math.round(data2.totalNutrients.CHOCDF.quantity)});
      this.setState({d_Cholestrol:Math.round(data2.totalNutrients.CHOLE.quantity)});
      this.setState({d_Saturated:Math.round(data2.totalNutrients.FASAT.quantity)});
      this.setState({d_Fat:Math.round(data2.totalNutrients.FAT.quantity)});
      this.setState({d_Iron:Math.round(data2.totalNutrients.FE.quantity)});
      this.setState({d_Sodium:Math.round(data2.totalNutrients.NA.quantity)});
      this.setState({d_VitaD:Math.round(data2.totalNutrients.VITD.quantity)});
      this.setState({d_Calcium:Math.round(data2.totalNutrients.CA.quantity)});
      this.setState({d_protein:Math.round(data2.totalNutrients.PROCNT.quantity)});
      this.setState({d_Pottasium:Math.round(data2.totalNutrients.K.quantity)});
   
      console.log(data2);
     

      })
    }

  catch(error){
    alert("Enter correct Quantity");
  }
}



onRecipe = () => {

  this.setState({reset:false});
  this.setState({textinput:''});
} 


  render(){

    return (
      <React.Fragment >
        <div className="App"  style={{overflowY: 'scroll'}}>
          <Navbar />
          <h2 className="fw4 tc  hover-mid-gray">Nutrition Analysis  Demo</h2>
          <h5 className=" fw3 tc hover-dark-green">Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc. Enter each ingredient on a new line.</h5>
          <div className="row"  style={{display:'flex'}}>
          <div className="col-5">
            <InputArea  getInput={this.getInput} value={this.state.textinput}  reset={this.onRecipe}  />
            <AnalyzeButton analyze={this.onAnalyze} />
            <NewRecipebutton recipe={this.onRecipe}  removebtn={this.state.reset} />
          </div>
          <div className="col-7">
          {this.state.reset?
          <NutritionFacts
          calories={this.state.calories}
          d_Fat={this.state.d_Fat}
          d_Saturated={this.state.d_Saturated}
          d_Cholestrol={this.state.d_Cholestrol}
          d_Sodium={this.state.d_Sodium}
          d_carbs={this.state.d_carbs}
          d_protein={this.state.d_protein}
          d_VitaD={this.state.d_VitaD}
          d_Calcium={this.state.d_Calcium}
          d_Iron={this.state.d_Iron}
          d_Pottasium={this.state.d_Pottasium}

          n_Fat={this.state.n_Fat}
          n_Saturated={this.state.n_Saturated}
          n_Cholestrol={this.state.n_Cholestrol}
          n_Sodium={this.state.n_Sodium}
          n_carbs={this.state.n_carbs}
          n_protein={this.state.n_protein}
          n_VitaD={this.state.n_VitaD}
          n_Calcium={this.state.n_Calcium}
          n_Iron={this.state.n_Iron}
          n_Pottasium={this.state.n_Pottasium}
  
          />:''}
          </div>
        </div>
      </div>
     
      </React.Fragment>
    );
  }
}


export default App;
