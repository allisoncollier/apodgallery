import React, { Component } from 'react';
import './App.css';
import APODCard from './APODCard';
import AstroInfo from './AstroInfo';
import APODHeading from './APODHeading';

const API_KEY = "ZycdMl8Qjd3c5c7HAn9TDHe7cke9lMbl27JDPeT0";
let astroObjArr = [];
const numOfDays = 30;
const months31 = [1, 3, 5, 7, 8, 10, 12]

class App extends Component {
  isLeapYear = (givenYear) => {
    if (givenYear % 4 === 0) {
      if (givenYear % 100 === 0) {
        return false;
      } else if (givenYear % 400) {
        return true;
      }
    }
    return false;
  }

  state = {
    astroInfo: []
  }
  getAPOD = async () => {
    let dayCounter = numOfDays;
    let astroYear = "00"
    let astroMonth = "00"
    let astroDay = "00"
    let currentDate = ""
    let dateArr = []

    let api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    while (dayCounter > 0) {
      const data = await api_call.json();
      //set the date variables
      if (dayCounter === numOfDays) {
        //get date string
        currentDate = data.date;
        //parse month day and year out of date string
        dateArr = currentDate.split("-");
        //set to respective variables
        astroYear = parseInt(dateArr[0])
        astroMonth = parseInt(dateArr[1])
        astroDay = parseInt(dateArr[2])

        //or if api is giving 404 for today...
        //astroYear = 2020
        //astroMonth = 8
        //astroDay = 31
      }
      //handle decrementing day and or month and or year
      //if day == 1, decrement month
      if (astroDay === 1) {
        //if month == 1, decrement year and set month to 12
        if (astroMonth === 1) {
          astroMonth = 12;
          astroYear--;
        } else {
          astroMonth--
        }

        //set days
        if (months31.includes(astroMonth)) {
          astroDay = 31
        } else {
            //if month == 2 and leap year, set days to 28
            if (astroMonth === 2 && this.isLeapYear(astroYear)) {
              astroDay = 28
            } //if month == 2 and not leap year, set days to 29
            else if (astroMonth === 2) {
              astroDay = 29
            } else {
              astroDay = 30
            }
        }
      } else {
        astroDay--
      }

      astroObjArr.push(data);
      api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${astroYear}-${astroMonth}-${astroDay}`);
      dayCounter--;
    }
    //console.log(astroObjArr);
    this.setState({astroInfo: astroObjArr});
  }

  render() {
    
    return (
      <div className="mainDiv">
        <APODHeading />
        
        <APODCard getAPOD={this.getAPOD}/>
        <AstroInfo astros={this.state.astroInfo}/>
      </div>
    );
  }
}

export default App;
