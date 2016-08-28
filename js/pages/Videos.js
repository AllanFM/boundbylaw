import React from 'react';
import YoutubeList from '../../services/videos.json';

export default class Videos extends React.Component{
    renderVideos(){
        var text = [], url = "", x;
        for (x in YoutubeList) {
            url = YoutubeList[x].url;
            text[x]= <iframe key={x} width='560' height='315' src={url} frameBorder='0' allowFullScreen></iframe>

        }

        return text;
    }

    render(){
        return (
            <div>
                 {this.renderVideos()}
            </div>
        )
    }
}
