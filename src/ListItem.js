import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styles from './the_css.css'

class ListItem extends React.Component{
    constructor(props){
        super(props)
        this.search = this.search.bind(this)
    }

    search(){
        /*
        var value = getElementById("insearch").value
        var i=1;

        for(i=1;i<value;i++){
            if(i>=3){
                var getisi = {news,name}
                var valuetxt = getisi.innerText || a.textContent
                if(valuetxt.toUpperCase().indexOf(filter)>-1){
                    listnews.style.display=''
                }
                else{
                    listnews.style.display='none'
                }
            }
        }
        */
    }

    render(){
        return(
            <div class="body">
                <header>
                    <nav id="lnav">
                        <a class="link" href="">Ekonomi</a>
                        <a class="link" href="">Teknologi</a>
                        <a class="link" href="">Internasional</a>
                    </nav>
                    {/* search bar */}
                    <nav id="rnav">
                        <input type="text" id='insearch' placeholder="Search.." ref={(c)=>{this.title=c}}></input>
                        <button type="submit" onclick={this.search}><img class="searchbtn" src='https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png'></img></button>
                    {/*                                      ^ link ke APP.js untuk validasi search*/}
                    </nav>
                </header>
                <nav id="gen">
                    <div class="genre">
                        <button class="link1" id="genre" name="genre" value="Ekonomi" onclick="changeGenre()">Ekonomi</button>
                        <button class="link1" id="genre" name="genre" value="Teknologi" onclick="changeGenre()">Teknologi</button>
                        <button class="link1" id="genre" name="genre" value="Internasional" onclick="changeGenre()">Internasional</button>
                        <button class="link1" id="genre" name="genre" value="Sosial" onclick="changeGenre()">Sosial</button>
                        <button class="link1" id="genre" name="genre" value="Covid" href="API">Covid</button>
                    </div>
                </nav>
                <div id='hotnews'>
                    <a href=''>
                        <img src='https://awsimages.detik.net.id/community/media/visual/2021/07/14/serba-serbi-ppkm-darurat-di-medan-yang-perlu-kamu-tahu_169.jpeg?w=1200'></img>
                        <p class="judulhot">Persiapan Penyekatan PPKM di Medan</p>
                        <p class="judulhot2">Persiapan Penyekatan PPKM di Medan</p>
                        <p class="genrehot">Covid</p>
                    </a>
                </div>
                {
                    this.props.covid.map(covid => {
                        return (
                            <div id='covid'>
                                <div class='judcov'><h1>Kawal Corona {covid.Country_Region}</h1><hr></hr></div>
                                <div class='isicov'>
                                    <div class='confirmed datacov'>
                                        <div class='imgemo'>
                                            <img src="https://img.icons8.com/color/48/000000/sad--v1.png"/>
                                        </div>
                                        <div>
                                            <h1>Confirmed</h1>
                                            <p>{covid.Confirmed}</p>
                                        </div>
                                    </div>
                                    <div class='deaths datacov'>
                                        <div class='imgemo'>
                                            <img src="https://img.icons8.com/fluent/48/000000/crying.png"/>
                                        </div>
                                        <div>
                                            <h1>Deaths</h1>
                                            <p>{covid.Deaths}</p>
                                        </div>
                                    </div>
                                    <div class='recovered datacov'>
                                        <div class='imgemo'>
                                            <img src="https://img.icons8.com/color/48/000000/happy--v1.png"/>
                                        </div>
                                        <div>
                                            <h1>Recovered</h1>
                                            <p>{covid.Recovered}</p>
                                        </div>
                                    </div>
                                    <div class='active datacov'>
                                        <div class='imgemo'>
                                        <img src="https://img.icons8.com/color/48/000000/indonesia-circular.png"/>
                                        </div>
                                        <div>
                                            <h1>Active</h1>
                                            <p>{covid.Active}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class='urlcov'><a href={covid.url}>Source : kawalcorona.com</a></div>
                            </div>
                        )
                    })
                }
                {
                    this.props.news.map(news => {
                        return (
                            <div id='listnews'>
                                <a class='list' href={news.name}>
                                    <img src={news.image}></img>
                                    <div class="judul">
                                        <h1><span>{news.genre}</span>{news.title}</h1>
                                        <p>{news.description}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
                <div id="fotter">
                    <p>Jessen Kanigara - 2440015316</p>
                    <p class="cpyright">&copy; Copyright 2021</p>
                </div>
            </div>
        )
    }
    search=(event)=>{
        alert('hallo')
    }
}

export default ListItem