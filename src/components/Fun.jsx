import React from 'react';

export default function Fun (props) {
  return <div>
      <div className="content-container">
        <section className="app-container">
            <img className="demo-gifs" src="./images/Solarmap.gif" />
            <a className="title" href="https://github.com/chm294/solarMap" target="_blank"> Solar Map </a>
            <div className="app-description-container">
            March 2018<br/>
            Thinking of making the switch to renewable energy? Estimate if your location would be a hotspot for solar panels. 
            Find out how much solar radiation your area gets within a few simple steps!
            Built with vanilla javascript, Google Maps, Google Places, and the National Renewal Energy Laboratory (NREL) API, Solar Map
            allows users to search any address located within the United States, draw a polygon over their desired area, and find out 
            information on estimated solar radiation in kWh over the selected area, by month and by year. The data comes from the 
            nearest NREL climate station. 
            </div>
        </section>
        <section className="app-container">
            <img className="demo-gifs" src="./images/avatar.gif" />
            <a className="title" href="https://github.com/chm294/avatarselector" target="_blank"> Avatar Selector </a>
            <div className="app-description-container">
            March 2018<br/>
            Small and simple react avatar selector component with css animations. 
            </div>
        </section>
      </div>
    </div>
}