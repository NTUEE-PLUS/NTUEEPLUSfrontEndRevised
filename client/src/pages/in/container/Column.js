import React, { Component } from 'react'

import { saveImage } from '../functions/saveImage.js'
import '../css/Column.css'
import ColumnBlock from '../component/ColumnBlock'
class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filename: '',
            file: null,
        }

        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFilenameChange = this.handleFilenameChange.bind(this)
        // this.getImg = getImg.bind (this);
    }
    // componentWillMount (){
    // 	this.getImg ('1908')
    // }
    handleFilenameChange(event) {
        const target = event.target
        const filename = target.value
        //const name = target.id;

        this.setState({
            filename: filename,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        saveImage(this.state.filename, this.state.file)
    }

    handleImageChange(e) {
        console.log(this.state.file)
        let reader = new FileReader()
        //if (e.target.files.length===0) return;
        let file = e.target.files[0]
        this.setState({
            file: file,
        })

        try {
            reader.readAsDataURL(file)
        } catch (error) {
            console.log('readfile error!!')
        }
        console.log(this.state.file)
    }
    render() {
        const column_block_2001 = {
            filename: '2001',
            anno: [
                '羅韻瑢 鄭謹譯 李筠婕 吳建翰 余欣澄 ',
                '| 2020/03/14 星期六',
            ],
            title: [
                '1999級 簡韶逸 (CEO/ Founder @ Ganzin Technology, Prof. @ NTUEE)',
            ],
            exp: [
                '現任：CEO of Ganzin Technology',
                '現任：Associate professor at GIEE  (NTU)',
                '曾任：Research staff in Quanta Research Institute (廣達)  (2003~2004)',
            ],
            edu: [
                '博士：台灣大學電子工程學研究所  (2003)',
                '學士：台灣大學電機系 (1999)',
            ],
            intro: [
                '簡韶逸教授任職於台大電子所長達16年，致力於多媒體訊號處理系統、多媒體積體電路設計、晶片系統設計方法的研究。 多年來，「媒體晶片系統實驗室」不斷研發出優異的技術。2016 年簡韶逸教授帶學生做出眼球追蹤技術的雛形時，他看好一定能應用在 AR/VR 上，於是決心創業。2018年1月時見臻科技 (Ganzin Technology) 從台灣大學spin off。見臻科技提供整合性視線追蹤解決方案  (eye tracking solution)，包括視線追蹤模組  (eye tracking module) 及對應之軟體開發平台  (SDK)，解決目前市面上眼動儀成本高、功耗高、體積大、機構複雜的問題。',
                '見臻科技連兩年參加世界性消費電子展 (CES)，2018年獲選Taiwan Tech Star，是32家獲選的台灣新創公司之一，2019年更被路透社評選為Best of CES。',
            ],
            id: 'Column_Block_2001',
        }
        const column_block_1912 = {
            filename: '1912',
            anno: [
                '李筠婕 鄭謹譯 莊永松 吳建翰 俞建琁 王廷峻 ',
                '| 2020/02/20 星期四',
            ],
            title: ['2008級 鄭恆之  (Technical Lead Manager @ Google Brain)'],
            exp: ['現任：Google Brain Technical Lead Manager'],
            edu: ['博士：CMU ECE (2013)', '學士：台灣大學電機系 (2008)'],
            intro: [
                '目前任職於 Google Brain 的團隊技術領導者和軟體主管工程師的鄭恆之，從事大規模機器學習的研究與軟體開發。在2013年加入 Googe 的實習生行列進行廣告排行的研究，僅僅花費不到三年的時間，就從實習生轉正職於 Google Research 的軟體工程師並且晉升 Google Brain 的技術領導與主管工程師，亮麗的職涯經歷背後是堅實的學術基礎與多篇國際期刊論文的支撐。',
                '熱愛音樂的鄭恆之學長在大學時期曾任台大合唱團公演指揮，並在陳宏銘教授的 Multimedia Processing and Communications Lab 時於ACM Multimedia 等論壇發表三篇論文，畢業後於 CMU ECE 攻讀博士且專注於機器學習與多媒體訊號處理。研究成果在進入博班後達到高峰，屢次在移動通訊、普及計算和行動電腦運算領域發表高度影響力的文章，並在該論壇得到最佳論文獎的殊榮。',
            ],
            id: 'Column_Block_1912',
        }
        return (
            <div id='column_block_container'>
                <ColumnBlock link='/in/column/2001' block={column_block_2001} />
                <ColumnBlock link='/in/column/1912' block={column_block_1912} />
            </div>
        )
    }
}

export default Column
