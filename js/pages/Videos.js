import React from 'react';
import YoutubeList from '../../services/videos.json';

export default class Videos extends React.Component{
    renderVideos(){
      //console.log(YoutubeList);
      var text = "", url = "";
      var x;
      for (x in YoutubeList) {

          url = YoutubeList[x].url;
          text += "<iframe width='560' height='315' src='" + url + "' frameborder='0' allowfullscreen></iframe>";

      }
      return text;
    }

    render(){
        return (
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JkRfp63MOjk" frameborder="0" allowfullscreen></iframe>

              {this.renderVideos()}
          </div>
        )
    }
}
