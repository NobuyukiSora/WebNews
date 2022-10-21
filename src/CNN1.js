import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styles from './the_css.css'
import video from './video.mp4'

const Video={
    type:'video/mp4',
    src:video
};

class CNN1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            type:Video.type,
            src:Video.src
        }
    }
    render(){
        return(
            <div class="body">
                <header>
                    <nav id="lnav">
                        <a class="link backnav" href="/"><img class="back" src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767523-1502427.png"></img></a>
                        <a class="link" href="">Ekonomi</a>
                        <a class="link" href="">Teknologi</a>
                        <a class="link" href="">Internasional</a>
                    </nav>
                    {/* search bar */}
                    <nav id="rnav">
                        <input type="text" placeholder="Search.." ref={(c)=>{this.title=c}}></input>
                        <button type="submit" onclick={this.search}><img class="searchbtn" src='https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png'></img></button>
                    {/*                                      ^ link ke APP.js untuk validasi search*/}
                    </nav>
                </header>
                <nav id="gen">
                    <div class="genre">
                        <a class="" href="/"><img class="back" src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767523-1502427.png"></img></a>
                        <button class="link1" id="genre" name="genre" value="Ekonomi" onclick="changeGenre()">Ekonomi</button>
                        <button class="link1" id="genre" name="genre" value="Teknologi" onclick="changeGenre()">Teknologi</button>
                        <button class="link1" id="genre" name="genre" value="Internasional" onclick="changeGenre()">Internasional</button>
                        <button class="link1" id="genre" name="genre" value="Sosial" onclick="changeGenre()">Sosial</button>
                        <button class="link1" id="genre" name="genre" value="Covid" href="API">Covid</button>
                    </div>
                </nav>
                <div id="body">
                    <div class='image'>
                        <img src="https://akcdn.detik.net.id/visual/2021/07/15/21-orang-tewas-dalam-banjir-di-jerman-barat-3_169.jpeg?w=650"></img>
                        <p>Internasional</p>
                    </div>
                    <div class='jnews'>
                        <h1>Korban Tewas Banjir Bandang Jerman-Belgia Capai 128 Jiwa</h1>
                        <p class="writer">Penulis : CNN Writer<br/></p>
                        <p class="tgl">CNN Indonesia | 17 - 07 - 2021</p>
                    </div>
                    <div class='isinews'>
                        
                        <p>
                        <div class="video">
                            <video src={this.state.src} type={this.state.type} width="100%" height="90%" autoplay controls></video>
                            <a class="source" href="https://www.youtube.com/watch?v=2qVLJ42fi4E">
                                Source : Youtube - CNBC Indonesia
                            </a>
                            
                        </div>
                            Banjir bandang yang menerjang wilayah Eropa Barat menewaskan setidaknya 128 orang sementara ratusan orang lainnya hilang. Menurut pihak berwenang pada Jumat (16/7), upaya penyelamatan skala besar terus dilakukan.<br></br><br></br>
                            
                            Wilayah dengan dampak kerusakan terberat dialami Jerman dan Belgia. Mengutip CNN, perumahan warga di dua negara tersebut terendam banjir dan beberapa mobil warga juga terjepit di antara puing-puing bangunan.
                            Media Jerman Bild menyebut bencana ini sebagai "banjir kematian".<br/><br/>

                            Akibat musibah ini, setidaknya 165 ribu orang di Rhineland-Palatinate dan Rhine-Westphalia Utara tidak mendapat pasokan lisrik.<br/><br/>

                            Sementara itu, korban tewas di North Rhine-Westphalia kini berjumlah 43 orang sedangkan di Rhineland-Palatinate telah meningkat menjadi 62 jiwa dan 362 warga mengalami luka-luka.<br/><br/>

                            Banjir di Jerman barat dipicu hujan deras yang mengguyur wilayah tersebut. Akibatnya, bendungan di sepanjang sungai Rur di negara bagian North Rhine-Westphalia jebol pada Jumat (16/7) malam. Dalam musibah itu sekitar 700 warga di Ophoven dievakuasi ke lokasi yang aman.<br/><br/>

                            Guna mencegah korban bertambah, petugas telah menerjunkan tim untuk memantau dengan cermat waduk-waduk di wilayah tersebut.<br/><br/>

                            Lebih lanjut pihak berwenang melaporkan jika cuaca tidak bertambah buruk, warga North Rhine-Westphalia yang tinggal di pengungsian kemungkinan besar dapat kembali ke rumah mereka pada hari Minggu (18/7) besok.<br/><br/>

                            Dari hasil pemantauan drone pada hari sebelumnya, petugas tidak menemukan kerusakan yang signifikan. Petugas juga telah membuka saluran yang tersumbat untuk membantu penyaluran air.<br/><br/>

                            Dalam musiba ini, pemerintah Jerman telah mengerahkan 850 tentara untuk membantu proses evakusi korban.<br/><br/>
                        </p>
                    </div>
                </div>
                <div id="fotter">
                    <p>Jessen Kanigara - 2440015316</p>
                    <a class="source" href="https://www.cnnindonesia.com/internasional/20210717112520-134-668933/korban-tewas-banjir-bandang-jerman-belgia-capai-128-jiwa">Source berita : https://www.cnnindonesia.com/internasional/20210717112520-134-668933/korban-tewas-banjir-bandang-jerman-belgia-capai-128-jiwa</a>
                    <p class="cpyright">&copy; Copyright 2021</p>
                </div>
            </div>
        )
    }
}

export default CNN1