import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import YoutubeList from '../../services/videos.json';

export default class Videos extends React.Component{
    renderVideos(){
        var text = [], url = "", x;
        for (x in YoutubeList) {
            url = YoutubeList[x].url;
            text[x] = <ResponsiveEmbed key={x} a16by9>
                <embed src={url} />
            </ResponsiveEmbed>
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
