# wp2020-final-project
## To start the service...
```bash
git pull
yarn run local-install
yarn run dev
```
:warning: **Do not mix with npm!!**

# NTUEE+ FrontEnd (12/ Update)
<small>[回MD首頁](https://hackmd.io/CSNbja7XTYCYquYxgq4Xow)</small>
### 前端重構Branch: frontEndRevised
### 架構討論
```
├── client/
    ├── src/
        ├── pages/
            ├── in/
                ├── component/
                ├── container/
                    ├── routes/
                ├── routes/
                ├── css/
                ├── images/
                ├── index.js
                ├── agent.js
            ├── out/
                ├── component/
                ├── container/
                    ├── routes/
                ├── routes/
                ├── css/
                ├── images/
                ├── index.js
                ├── agent.js
            ├── auth/
                ├── component/
                ├── container/
                ├── routes/
                ├── css/
                ├── images/
                ├── index.js
                ├── agent.js
            ├── routes/
            ├── images/
            ├── global.css
            ├── index.js
        ├── index.js
        /////redux/////
        ├── actions/
        ├── reducers/
        ├── store/
        ├── constants/
        /////redux/////
        ├── animation/  
```

### 各檔案寫法

### pages
#### 統一做的事:
- [ ]  class => hook
- [ ] css移動到css資料夾
- [ ] 為所有function加上註解(一些trivial的不用)
- [ ] 每個object應該都要有註解顯示他內部會有的key
- [ ] css檔案每個container只有一個，不會有專屬於component的css(除了Navbar)，修飾component的css會合併在裡面
- [ ] 表示**一個頁面，一個css**，且在**container import一次就好**，component不import css(除了NavBar)
- [ ] 因為檔案架構大更動，所有檔案的import路徑都要改

#### container/
* 命名: 大寫開頭(頁面名稱) Ex: About.js
* 內容: 為網站的主頁面，會包含component的東西，主要負責外觀，盡量不要在裡面處理state，用prop就好(不過不一定了，頗複雜)
* 注意: 在註解部分寫一下整個頁面的架構包含甚麼component，頁面顯示什麼


#### component/
* 命名: 大寫開頭 Ex: NavBar.js
* 內容: 為頁面的部分，主要負責一些邏輯處理，事件處理等
* 注意: 
    * 在註解的部分寫一下哪裡會用到這個component，在最前面寫傳進來的prop會有哪些，會用到的state有哪些等等
    * 事件處理函式的命名規則:handle+大寫開頭動詞們
    * 事件處理函式的第一個參數統一為e(表示event object)(除了一些例外)

#### images/
* 命名: 小寫單字以_連結 EX:

#### routes/
* 命名: "..."Routes.js
* 內容: 為react router的route放置處，負責所有頁面的路由，會從container提取頁面render
* 注意: 之前寫的route應該都會命名成...+app，要做的便是把他依現在的檔案架構放在各個routes/中

#### agent.js
* 內容: 為向後端送request的函式匯集處，由很多的axios method構成
* 由需要後端的頁面名稱構成object，內部是axios method，這樣各component就可以import 這個object去使用axios methid跟後端溝通，而要修改axios method也會統一到這邊修改
* 現在的axios應該散布在各個js中，需要寫進負責該部分的agent.js

:::info
### 示意圖:
![](https://i.imgur.com/vVrf2qo.png)
:::

#### css/
* 命名: 大寫單字(頁面名稱)
* 內容: 為各頁面的css
* 注意: 
    * 目前各頁面的css分散成很多個檔案，需要將其合併起來，修飾不同的component**請用註解將他們分隔成大區塊**，以便之後修改
    * 並且apply css的coding style


### coding style:
#### js
* **不准加分號!!!!!!!**
* 大括號範例
    ```
    while (condition) {
        ...
    }
    ```
* "雙引號"!!!!
* 函數命名使用camelCase
* 所有function使用arrow function!!
* 變數(object除外)與object的property命名使用小寫單字_小寫單字 
    * EX:follow_this
* Class,Object使用大寫開頭單字 
    * EX:ExampleClass
* Comment Form:
    * 之後應該會用這個:[apiDoc](https://apidocjs.com/)，但大家還是先照著下面格式寫，之後再改也不遲
    * function:
    ```javascript
    const testFunction = () => {
        /*
        input:{
        	param1:type, 
                description...
        	param2:type,
                description...
        }
        output: type,
            description...
        description:
            ...
        */
      ...
    }
    ```
    * variable
    ```javascript
    let test_variable = 1 //description
    ```
    * hook
    ```javascript
    const TestHook = (props) => {
        /*
        props:{
        	param1:type, 
                description...
        	param2:type,
                description...
        }
        description:
            ...
        */
    }
    ```
    
* html
    * 有onEvent的tag都換行
    * inline style也換行
    * 依個人感覺換行(以不要超出頁面為原則)

* css
    * id,classNames 請承襲以往規格
    * 這裡要加分號!!!
    * 請依以下順序:
        * 位置相關: 
            * display
            * flex相關
            * position
            * top,right,left,bottom
            * overflow
        * 大小相關(指元素):
            * height,width
        * 排版相關:
            * outline
            * margin
            * border
            * padding
        * 背景相關:background
        * 文字相關:
            * font-family
            * color
            * font-size
            * font-weight
            * text-align
            * text-decoration
            * ...
        * transition
        * transform
        * animation
        * cursor
        * opacity
        * z-index

    * Pseudo-class 順序
        * link
        * visited
        * hover
        * active
        * focus
        * ...
    * css variable:
        * 
    * screen
     ```css
        @media (max-width:1200px) {
            ...
        }
     ```
