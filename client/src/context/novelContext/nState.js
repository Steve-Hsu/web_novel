import { useReducer } from 'react';
import NContext from './nContext';
import nReducer from './nReducer';

import {
  ADD,
  UPDATE_CURRENTPAGE
} from '../types'

const NState = (props) => {
  const initialState = {
    currentPage: 'novel',
    title: '糖果袋／Sacks－瑞蒙卡佛',
    context: "十月，天氣陰濕。從我的旅館窗戶，可以看到這座中西部城市的一大片景色。我可以看到光線從一些建築物透出來，黑煙從濃霧間的高聳煙囪冒出來。真希望我不必看這幅景象。去年我路經薩克曼多市，我父親告訴我一則故事，我想把它轉述給你們聽。這個故事是關於他兩年前發生的事，在他和我母親離婚之前。我是一個圖書業務員，代表一家知名公司。我們出版的是教科書，總部在芝加哥。我負責的業務區是伊利諾州，還有愛荷華州和威斯康辛州的一部份。那時我去參加「西部出版社協會」在洛杉磯舉辦的會議，我突然想到可以花幾小時去看看我父親。從他們離婚後我就沒見過他了，我想你們能瞭解。於是我從皮夾裡拿出他的地址，拍了一封電報給他。第二天早上我把行李寄到芝加哥，然後搭上飛往薩克曼多的飛機。我花了一分鐘才認出他來。他站在每個人都站的地方－大門後面－白髪、戴眼鏡、棕色褲子。「爸，你好嗎？」我說。他說：「萊斯。」我們握了握了手，然後朝離境大廳走去。「瑪莉和孩子們還好吧？」他說。「大家都很好，」我回答。這當然不是真的。他打開一只糖果袋。他說：「我挑了一點東西，說不定你可以帶回去。一點小東西。巧克力給瑪莉，軟糖給小孩子。」「謝謝，」我說。「回去時不要忘了拿，」他說。幾個修女趕著跑往登機門，我們讓開路。「喝杯咖啡？」我問道。「隨你的意思，」他說：「但是我沒有車。」我們找到休息室，叫了飲料，點了菸。「就在這點好了，」我說。「嗯，好，」他說。我聳了聳肩說：「好。」我往後靠在椅子上，深深吸了一口氣，吸入他頭頂周圍的悲傷空氣。他說：「我以為芝加哥機場有四個休息室。」「不只，」我說。「我本來以為機場很大，」他說。「你什麼時候開始戴眼鏡的？」我問道。「沒有多久，」他回答。他喝了一大口酒，然後開始切入正題。「真希望我死了就好，」他重新調整了一下眼鏡兩邊的厚重掛鉤。「你是個讀書人，萊斯，你應該懂得我的意思。」我拿起菸灰缸的一側讀底下的字：哈拉俱樂部／雷諾和塔荷湖／歡樂的好地方。「他是個直銷小姐，身材嬌小，小手小腳，深黑色的頭髮。不是什麼絕世美女，但她就是有一些特別的地方。卅歲，有孩子。但她是個好女人，不論如何。「你母親一直都跟她買東西，掃把、拖把、派心餡料之類的。你知道你母親的個性。那天是是星期六，我在家。你母親出門了，我不知道她去哪裡。她不是去上班，我在前面房間看報喝咖啡，那時我聽到有人敲門，就是那個嬌小女人，莎莉雯。她說她有東西要給帕默太太。「我是他先生，」我說。「帕默太太現在不在家，」我請她進屋來要拿錢給她。她不知道應不應該進屋裡，於是站在門口手拿著一只小紙袋和收據。「我來拿，」我說，「妳可以進來坐一會兒，等我去拿錢。」「沒關係，」她說：「你先把東西拿去用，我有很多客人都是這樣，沒關係的。」她微笑讓我知道那並不要緊，你懂嗎。「不行，不行」我說：「我己經拿 了東西，一定要現在付錢。免得妳又要跑一趟，也免得我欠錢，進來吧。」然後我把鈔窗門打開；讓她站在外面不太禮貌。」他咳嗽幾聲，拿了我一根菸。吧台那一頭有個女人笑了。我看了看她，然後我又看菸灰缸下的字。「她進到屋裡。我說：「請等一下，」然後我去臥房找皮夾。我在梳妝台上到處找，就是沒找到。我找到了一些零錢、火柴、梳子，就是找不到我的皮夾。你母親早上打掃過了，於是我回到前面房間說：「我會找出一些錢的。」「沒關係，不要麻煩了，」她說。「不麻煩，」我說：「反正我一定得找到我的皮夾，隨便坐。」「我沒關係的，」她說。「妳看，」我說：「妳聽說了東部的大搶案嗎？我剛才正在看報紙上的新聞。」「我昨天晚上在電視上看到了，」她說。「他們逃之夭夭了，」我說。「很俐落，」她說。「天衣無縫，」我說。「不是每個人都能逃得了的，」她說。「我不知道還能說什麼，於是便走到玄關去找我的長褲，我猜想你母親把長褲放在籃子裡了。我在後面的口袋找到皮夾，然後回去問她該付多少錢。」「我記得是三、四塊錢，我把錢付給她。然後，我不知道為什麼，我問她如果有了搶匪那些錢，她想做什麼。她笑了，我看到她的牙齒。我不知道那時我是怎麼回事，萊斯。五十五歲，孩子也大了，我應該見識很多了。這女人只有我一半年紀，小孩子還在上學。她在孩子上學的空檔做做直銷，只是為了讓自己有事可忙。她並不需要工作，他們的錢夠生活了。她丈夫，賴瑞是「統一貨運」的司機。薪水不錯，卡車司機嘛，你知道。」他停下來抺了一下臉。「每個人都會犯錯，」我說。他搖頭。「她有兩個兒子，漢克和佛萊迪，年齡大概差一歲。她給我看一些照片。總之，當我說到那筆錢時，她笑了，她說大概會辭去直銷的工作，搬到達科市買一間房子。她說她在那裡有認識的人。」我點了一根菸，看著我的錶。酒保豎了豎眉毛，我拿起我的杯子。「她坐在沙發上，向我要了一根菸。她說她把香菸忘在另一個皮包裡，從她離開家就沒抽到半口菸。她說她家裡有一大箱的菸，所以很不甘願買販賣機裡的。我給了她一根菸，然後幫她點火柴。但是我對你說實話，萊斯，那時候我的手在抖。」他停下來，端詳了酒瓶一分鐘。那個己經結束笑聲的女人，把手臂挽在身旁的兩個男人手上。「之後的事就記不太清楚了。我記得我問她想不想喝咖啡，我才剛煮了一壺。她說她得走了，然後她說也許還有時間可以喝一杯。我到廚房等咖啡煮開。老實說，萊斯，我對天發誓，我和你母親結婚這麼多年，我從來沒有欺騙過你母親，一次都沒有。有幾次我有過念頭，也有機會。說真的，你不像我那麼瞭解你母親。」我說，「你不必說那些。」「我拿了咖啡給她，她這時己經把外套脫掉了。我坐在沙發的另一頭，我們開始聊一些更私人的話題。她說她有兩個孩子在讀羅斯福小學，賴瑞是個司機，有時候一、兩個星期不在家。他開車往北到西雅圖，或往南到洛杉磯，說不定更遠到鳳凰城，反正總是到處跑。她說她和賴瑞是高中同學，她很驕傲自己堅持到現在。沒多久我說的一些話就逗得她笑了，就是那一種雙關語的笑話。然後她問我有沒有聽過皮鞋推銷員拜訪寡婦的故事，那個故事又讓我們笑了。然後我告訴她一個更壞的故事，她笑得更厲害，又點了一根菸。一件事跟著另一件事來，就是這麼回事，你懂吧。「然後我吻了她，我把她的頭放在沙發上，吻了她，我可以感覺到她的舌伸出來急著進入我的嘴。你懂我在說什麼嗎？一個男人可以一輩子遵守所有規定，但突然間一切都他媽的不重要了。他的運氣就這樣沒了，你懂嗎？「一切很快就結束了。事後她說：「你一定覺得我很不檢點。」然後她就走了。「我真的很緊張，你知道嗎？我把沙發整理了一下，把沙發墊翻過面。我把報紙全都折好，甚至洗了我們用過的杯子，把咖啡壺沖乾淨。我腦袋裡一直都在想如何面對你母親。我很怕。「事情就是這樣開始的，你母親和我的生活還是老樣子，但是我會定期溜去和那女人見面。」吧台旁的那個女人離開了她的高腳凳，她走了幾步路到地板中央開始跳舞。她左右甩頭，彈著她的手指頭。酒保停下手邊的調酒工作。那女人把手舉在頭上，在地板中央以小圓圈移動。但後來她不跳了，酒保又繼續開始調酒。「你看到了嗎？」我父親問。但我什麼話也沒說。「事情就是這樣發展的，」他說：「賴瑞有出差的時間表，只要有機會我就會去那邊。每次我都編出一些地點告訴你母親。」他把眼鏡拿下來，閉起眼睛。「我從來沒告訴別人這件事。」我不知道該回答什麼。我往外望著機場，看看我的手錶。「聽我說，」他說：「你的飛機什麼時候起飛？你能不能搭另一班飛機？我再請你喝一杯吧，萊斯。我們再叫兩杯酒，我會講快一點。我很快就會說完的，聽我說。」「她把她老公的照片擺在臥室床邊。剛開始我看到他的照片在旁邊心裡不太舒服，但過了一陣子我就習慣了，人很容易就習慣了，你懂嗎？」他搖了搖頭。「很難相信吧，但是最後一定沒有好結局。你知道的，你知道那種事。」「我只知道你告訴我的，」我說。「我會告訴你的，萊斯，我還會告訴你一些更重要的事。你懂嗎？更重要的，比你母親離開我還重要的事。你聽我說，有一次我們在床上，應該是午餐的時候。我們就躺在床上聊天，我好像睡著了，就是那種半夢半醒的午睡，但同時我也提醒自己別忘了馬上就要起床離開。就在這個時候一輛車開進車道，有人下車，啪一聲關上車門。「天哪！賴瑞回來了！」她尖叫。「我那時一定是瘋了。我腦袋裡好像還想到如果從後門跑出去，他會把我按在後院的圍牆上說不定會殺了我。莎莉發出很奇怪的聲音，好像她沒辦法呼吸。她穿著睡袍，但沒有扣起來，就站在廚房裡搖著頭。這些事情都是同時發生的，你懂吧。於是我手拿著衣服，身體幾乎全裸，而賴瑞正打開前門。結果，我跳出去了。我直接跳出他們家的觀景窗，穿破玻璃直接跳出去。」「你逃走了？」我問：「他有沒有追你？」我父親看著我好像我瘋了。他看著他的空杯子。我看著手錶，伸了伸懶腰，我有一點頭痛，在眼睛後方處。我說：「我該趕快上飛機了。」我把手放到脖子後面，把衣領拉直。「那女人還在雷汀市？」「你什麼都不懂，對吧？」我父親說：「你什麼都不懂，你只懂得賣書。」差不多是該走的時候了。「天啊，我真後悔。」他說：「那男人完全崩潰了，他趴在地上哭了。那女人待在廚房，她也在那裡哭了。她跪在地上，大聲哭喊上帝，想讓那男人聽到。」我父親打算說更多事，但他搖了搖頭。也許他希望我能說些什麼。然後他說道：「不，你得去搭飛機了。」我幫他穿上外套，我們走了出去。我扶著他的手肘帶著他走。「我看著你上計程車，」我說。他說：「我看你上飛機。」「好吧，」我說：「下次再換我好了。」我們握了握手，那是我最後一次見到他。在飛往芝加哥的路上，我想起來我把他的糖果袋忘在吧台了。也好，瑪莉不需要糖果、巧克力或任何東西。那是去年的事，她現在更不需要了。"
  }
  const [state, dispatch] = useReducer(nReducer, initialState);

  // Update States functions
  const addName = (name) => {
    dispatch({ type: ADD, payload: name ? name : 'Still no name' })
  }
  const changePage = (pageName) => {
    dispatch({ type: UPDATE_CURRENTPAGE, payload: pageName ? pageName : 'novel' })
  }

  return (
    <NContext.Provider
      value={{
        currentPage: state.currentPage,
        title: state.title,
        context: state.context,
        addName,
        changePage
      }}
    >
      {props.children}
    </NContext.Provider>
  )
}

export default NState;