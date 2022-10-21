import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';import ListItem from './ListItem';
import Genre from './genre'
import CNN1 from './CNN1'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            news: [
                {
                    title: 'Korban Tewas Banjir Bandang Jerman-Belgia Capai 128 Jiwa',
                    image: 'https://akcdn.detik.net.id/visual/2021/07/15/21-orang-tewas-dalam-banjir-di-jerman-barat-3_169.jpeg?w=650',
                    description: 'Banjir bandang yang menerjang wilayah Eropa Barat menewaskan setidaknya 128 orang sementara ratusan orang lainnya hilang. Menurut pihak berwenang pada Jumat (16/7), upaya penyelamatan skala besar terus dilakukan.',
                    source: 'https://www.cnnindonesia.com/internasional/20210717112520-134-668933/korban-tewas-banjir-bandang-jerman-belgia-capai-128-jiwa',
                    writer: 'CNN Writer',
                    tgl: '17 - 07 - 2021',
                    genre: 'Internasional',
                    name: 'CNN1'
                },
                {
                    title: 'PPKM Darurat Dinilai Sulitkan Rakyat Kecil, Apa yang Harus Dibenahi?',
                    image: 'https://asset.kompas.com/crops/Qcw-_Sa2K53To_HeEVydGd8xD6U=/0x0:0x0/750x500/data/photo/2021/07/13/60ed23d204927.jpg',
                    description: 'Kebijakan pemberlakuan pembatasan kegiatan masyarakat (PPKM) Darurat dinilai menyulitkan masyarakat kecil.',
                    source: 'https://www.kompas.com/tren/read/2021/07/17/123000765/ppkm-darurat-dinilai-sulitkan-rakyat-kecil-apa-yang-harus-dibenahi-',
                    writer: 'Luthfia Ayu Azanella',
                    tgl: '17 - 7 - 2021',
                    genre: 'Ekonomi'
                },
                {
                    title: 'Besok, Pemilik Kedai Kopi yang Pilih Dipenjara 3 Hari Akan Bebas, Keluarga Yakin Jadi Pengusaha Sukses',
                    image: 'https://asset.kompas.com/crops/KvpcScztLxqnWGJ8uo54_sheMM0=/0x0:0x0/750x500/data/photo/2021/07/17/60f2699093327.jpg',
                    description: 'Asep ditahan tiga hari di lapas karena memilih dipenjara daripada membayar denda Rp 5 juta karena melanggar Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) Darurat.',
                    source: 'https://regional.kompas.com/read/2021/07/17/131131578/besok-pemilik-kedai-kopi-yang-pilih-dipenjara-3-hari-akan-bebas-keluarga',
                    writer: 'Kontributor Tasikmalaya, Irwan Nugraha',
                    tgl: '17 - 7 - 2021',
                    genre: 'Sosial'
                },
                {
                    title: 'Naik Motor Saat Mabuk, Pengendara Tabrakan dengan Mobil Jenazah Covid-19, Ini Kronologinya',
                    image: 'https://asset.kompas.com/crops/gLUjDM9mzfy1hDmQ1UJSOOIas-o=/0x0:1200x800/750x500/data/photo/2020/09/09/5f58b837bc670.jpg',
                    description: 'Peristiwa ini terjadi di Jalan Jalur 40, Kelurahan Sikumana, Kecamatan Maulafa, Kota Kupang, Nusa Tenggara Timur (NNT).',
                    source: 'https://regional.kompas.com/read/2021/07/17/131344278/naik-motor-saat-mabuk-pengendara-tabrakan-dengan-mobil-jenazah-covid-19-ini',
                    writer: 'Reza Kurnia Darmawan',
                    tgl: '17 - 7 - 2021',
                    genre: 'Sosial'
                },
                {
                    title: 'PPKM Darurat Terus Berjalan, Bagaimana Skenario Perpanjangan dan Evaluasi Kasus Covid-19?',
                    image: 'https://asset.kompas.com/crops/EUIa1LAuXaJlY_795-qQpNQ09F8=/0x0:737x491/750x500/data/photo/2021/07/03/60e00346d3a08.jpg',
                    description: 'Skenario rencana perpanjangan masa Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) Darurat selama enam pekan kedepan telah dgenreapkan.',
                    source: 'https://www.kompas.com/tren/read/2021/07/17/130800265/-ppkm-darurat-terus-berjalan-bagaimana-skenario-perpanjangan-dan-evaluasi',
                    writer: 'Maya Citra Rosa',
                    tgl: '17 - 7 - 2021',
                    genre: 'Covid'
                }
            ],
            covid: [
                {
                    // API get
                    OBJECTID: 81,
                    Country_Region: "Indonesia",
                    Last_Update: 1626924107000,
                    Lat: -0.7893,
                    Long_: 113.9213,
                    Confirmed: 2983830,
                    Deaths: 77583,
                    Recovered: 2356553,
                    Active: 549694,
                    url: 'https://kawalcorona.com/'
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" component={App}><ListItem news={this.state.news} covid={this.state.covid} search={this.searchitem.bind(this)}/></Route>
                    {/*                                                                     link ke List item untuk lempar search*/}
                    <Route path="/CNN1" component={CNN1}><CNN1 news={this.state.news}/></Route>
                </Router>
            </div>
        )
    }
    //script search
    searchitem(news){
    // function alo(){
    //     var 
    // }
    }
}

export default App