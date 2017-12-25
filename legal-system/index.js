document.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    setContent();

    document.querySelector('.button.forw').addEventListener('click', () => {
        i++
        setContent();
    });

    document.querySelector('.button.prev').addEventListener('click', () => {
        i--
        setContent();
    });

    let t = 0;
    document.addEventListener('keydown', (e) =>{
        if(e.shiftKey && e.keyCode == 13){
            i--
            setContent(); 
        } else if(e.keyCode == 13){
            i++
            setContent();
        } else if(e.shiftKey && e.keyCode == 32){
            if(document.querySelectorAll('.ans:not(.hidden)')) document.querySelectorAll('.ans:not(.hidden)')[document.querySelectorAll('.ans:not(.hidden)').length - 1].classList.add('hidden');
        }else if(e.keyCode == 32){
            if(document.querySelector('.ans.hidden')) document.querySelector('.ans.hidden').classList.remove('hidden');
        }
    });

    function setContent() {
        if(i <= 0) document.querySelector('.button.prev').classList.add('hidden');
        else document.querySelector('.button.prev').classList.remove('hidden');

        if(i >= DATA.length - 1) document.querySelector('.button.forw').classList.add('hidden');
        else document.querySelector('.button.forw').classList.remove('hidden');

        document.querySelector('.question > h3').innerHTML = data[i].title;
        const ans = data[i].text.match(/ans.*?sna/)[0];
        document.querySelector('.question > p').innerHTML = data[i].text.replace(/\n/g, '<br>').replace(/ans/g, '<span class="ans hidden">').replace(/sna/g, '</span>');

        const hiddenDOM = document.getElementsByClassName('ans');
        Object.keys(hiddenDOM).forEach((i) => {
            hiddenDOM[i].addEventListener('click', (e) => {
                hiddenDOM[i].classList.toggle('hidden');
            });
        });
    }
});

const DATA = [{"title":"法とは何か","text":"法とはans社会規範snaの1つで、社会の中で作られたルールのことである。"},{"title":"法とは何か: 法の特徴","text":"法の特徴はans国家権力の強制力snaを伴っていることである。"},{"title":"法の存在形式","text":"法がどのような形で存在しているか、その発現方式をans法源snaという。"},{"title":"法律の構造","text":"ans本則sna: 当該法律の本体をなす部分<br>\nans附則sna: 本則に付随する部分"},{"title":"法の分類・性質①","text":"ans公法sna: 国と国民、地方公共団体とその構成員の間を規律する法\nans私法sna: 私人同士の生活関係を規律する法"},{"title":"法の分類・性質②","text":"ans実体法sna: 要件と効果を定めた法\nans手続法sna: 権利や義務を、訴訟手続で具体的に実現するためのプロセスを定めた法"},{"title":"法解釈の基本","text":"法律の解釈を行う際には、その言葉の意味するところをans立法者意思snaから考える。"},{"title":"憲法とは","text":"国のans最高法規sna: 憲法に違反する法律や命令等は効力を持てない。"},{"title":"憲法とは","text":"ans人権規定sna, ans統治機構snaの二本立て"},{"title":"憲法の三大原則","text":"ans国民主権sna: 国の政治は国民が決定。\nans平和主義sna: 戦争放棄、軍隊の不保持、交戦権の否認。\nans基本的人権の尊重sna: 人間が生まれながらにして当然に持つ不可侵の権利。"},{"title":"憲法上最も重要な価値","text":"ans個人の尊重sna: 第13条前段の規定に基づく。"},{"title":"人権の性格","text":"ans固有性sna: 生まれながらにして当然に持つ。\nans不可侵性sna: 権力によって侵害されない。\nans普遍性sna: 人種・性別・身分・職業・国籍にかかわらず、差別なく保証される。"},{"title":"精神的自由権","text":"信教の自由(第20条)\nans政教分離sna原則: 政治と宗教の結びつきを禁止"},{"title":"精神的自由権","text":"学問の自由(第23条)\n教授人事、施設管理など、ans大学の自治snaを保障する。"},{"title":"表現の自由(第21条)","text":"ans知る権利snaも含まれると解釈されている。\n→表現するためには必要な情報・知識を得る必要があるから。"},{"title":"表現の自由の重要性","text":"ans自己実現の価値sna本を読んだりインターネットで検索したりすることなどによって、いろいろなことを知り、考える。他人とコミュニケーションを取ることでも新たな発見がある。\nans自己統治の価値sna政府によって不都合なことであっても、色々な人と政治的な意見を交換することによって、国の政治をどう動かしていくかを自ら決定していくことができる。"},{"title":"人権の制約","text":"人権相互が矛盾・衝突する場合に、憲法上の調整を図るための原理をans公共の福祉snaという。"},{"title":"社会権","text":"「干渉するな」はans自由権sna\n「何とかしてくれ」はans社会権sna"},{"title":"教育を受ける権利","text":"国民の三大義務\nans勤労の義務sna ans納税の義務sna ans教育の義務sna"},{"title":"国会の主な役割","text":"ans法律snaを議決する\nans予算snaを議決する\nans条約snaを承認する"},{"title":"国立国会図書館の仕事","text":"国立図書館としての機能\nans納本制度sna・目録の作成出版・出版物の利用・国内外の図書館等の支援援助"},{"title":"内閣の主な役割","text":"ans法律snaの執行\nans条約snaの締結\nans予算snaの作成・提出"},{"title":"裁判所の組織","text":"ans三審制snaが採用されている。"},{"title":"意見立法審査研","text":"最高裁判所はans憲法の番人snaとも言われている。"},{"title":"地方自治の本旨","text":"民主主義的意義: ans住民sna自治\n自由主義的意義: ans団体sna自治"},{"title":"法律の成立・公布・施行と改正民法","text":"ans成立sna: 法律案は、憲法に特別の定めのある場合を覗いては、衆議院及び参議院の両議院で可決したとき法律となる"},{"title":"法律の成立・公布・施行と改正民法","text":"ans公布sna成立した法律を一般に周知させる目的で、国民が知ることのできる状態に置くことをいい、法律が現実に発行し、作用するためには、それが公布されることが必要です。"},{"title":"法律の成立・公布・施行と改正民法","text":"法律の効力が一般的、現実的に発動し、作用することになることをans施行snaといい、公布された法律がいつからans施行snaされるかについては、通常、その法律の附則で定められています。"},{"title":"民事責任と刑事責任の違い","text":"民事責任の視点: ans紛争解決sna\n刑事責任の視点: ans真実発見sna"},{"title":"契約の基本原則に関する条文","text":"民法はおせっかいな法律ではない。 ans契約自由の原則sna"},{"title":"債権債務関係とは","text":"ans債権sna: 人に一定の行為を要求する権利\nans債務sna: 人から一定の行為を要求され、それに従う義務"},{"title":"債権債務関係とは","text":"お互いが約束を果たせば、債務がans弁済snaされて終了"},{"title":"定型的な取引","text":"ans定型約款sna: 契約の一種だが、不特定多数の者と画一的な取引を行うことが両当事者にとって合理的あ場合に、一方当事者が準備した契約条項に基づいて締結する契約"},{"title":"契約違反","text":"契約に違反するとans債務不履行snaが発生"},{"title":"契約違反","text":"ans履行不能sna: 世の中に1つしか無いものを他の人にあげてしまった\nans履行遅滞sna: 引き渡しが遅れた、支払期限に間に合わなかった\nans不完全履行sna: 渡したものにキズがあった、一部しか代金を支払わなかった。"},{"title":"契約違反の効果","text":"ans履行の強制sna\nans損害賠償請求権sna\nans解除権sna"},{"title":"契約の解除","text":"ans原状回復義務sna: 契約成立前の状態に戻さなければならない。"},{"title":"インターネット取引","text":"トラブルが急速に増加\nans消費者保護snaに関する制度が必要"},{"title":"意思と表示の不一致","text":"ans錯誤sna: 意思と表示の不一致を表意者が知らないこと"},{"title":"取消権の期間制限","text":"期間制限: ans追認sna(取り消しうる契約を有効と認めること)をすることができる時から5年間or錯誤又は詐欺の時から20年"},{"title":"不法行為の要件その1","text":"ans故意sna: 結果を知りながら行為をすること。\nsna過失sna: 結果を予見することができたのにそれを回避しなかったこと。"},{"title":"不法行為の要件その2","text":"ans違法性sna: 権利または法律上保護される利益"},{"title":"不法行為の要件その3","text":"ans因果関係sna: 「これによって」"},{"title":"被害者に過失がある場合","text":"ans過失相殺sna: 被害者にも不注意があった場合に、損害賠償額を斟酌する制度"},{"title":"損害賠償①","text":"① ans積極的損害sna: 現実に財産が奪われる形での損害\n② ans消極的損害sna: 将来得られるのが確実な利益の喪失"},{"title":"損害賠償②","text":"③ ans慰謝料sna: 精神的な損害"},{"title":"差止請求","text":"ans人格権sna: 裁判例の蓄積により認められている。"},{"title":"権利の消滅","text":"ans消滅時効sna: 権利を行使できる者が、一定期間権利を行使しないことにより、その権利を行使することができなくなる制度"},{"title":"「親族」の範囲","text":"ans6親等sna内の血族、ans配偶者sna、ans3親等sna内の姻族"},{"title":"婚姻の成立条件","text":"ans婚姻適齢snaに達していること\nans重婚禁止sna: 他の人と婚姻していないこと\nans再婚禁止期間snaでないこと。女性の場合、前婚解消から100日\nans近親婚の禁止sna: 特定の親族間ではないこと。"},{"title":"婚姻の効果","text":"ans同居協力扶助義務sna: 一緒に暮らして協力しあう。\n成年擬制: 成人として扱われる。"},{"title":"婚姻の解消","text":"調停離婚: ans調停前置sna主義"},{"title":"離婚の効果","text":"ans財産分与sna: 婚姻中に協力して蓄積した財産の精算"},{"title":"親子関係","text":"ans認知snaにより父子関係が発生"},{"title":"相続","text":"ans遺言snaがあればそれに従う。\nans遺言snaがなければans法定相続sna"},{"title":"法定相続","text":"ans積極財産sna: 不動産の所有権、現金、債権者の地位、金の延べ棒などのプラス財産\nans消極財産sna: 借金"},{"title":"法定相続","text":"相続されないもの: プライバシー権、著作者人格権、会社員としての地位などのans一身専属権sna"},{"title":"相続の承認と放棄","text":"ans承認sna: 引き継ぐ\nans放棄sna: 一切引き継がない"},{"title":"刑事法とは","text":"ans犯罪snaとans刑罰snaを定めた法"},{"title":"刑事法を考える時の視点①","text":"ans自由保障sna: 犯罪者にも人権はある、刑罰という劇薬は控えめにすべきだ\nans法益保護sna: 犯罪と刑罰を厳しく定めることによって安全を守ってほしい！"},{"title":"刑事法を考える時の視点②","text":"ans罪刑法定主義snaの原則\n・ どのような行為が犯罪となるのか？\n・ どのような刑罰が科せられるのか？"},{"title":"日本の刑法が及ぶ範囲","text":"ans属地主義snaの原則: 日本国内で犯された犯罪に日本の刑法が適用される"},{"title":"国境を超える情報の取り締まり","text":"ans国外犯処罰snaの規定"},{"title":"犯罪の基本構造","text":"ans構成要件snaに該当する = 法律の定めた犯罪の枠に当てはまる。\nans違法性snaを阻却する事由がない = 精神障害や正当行為などに当てはまらない。\nans責任snaを阻却する事由がない = 精神障害や刑事未成年に当てはまらない。"},{"title":"故意・過失","text":"ans故意責任snaの原則"},{"title":"刑罰の種類","text":"・ 死刑\n・ ans懲役sna\n・ ans罰金snaと科料\n・ ans禁錮snaと勾留"},{"title":"捜査","text":"犯罪が発生すると、通常、警察が捜査を行い、犯人を検挙して、事件を検察庁にans送致snaする。"},{"title":"捜査","text":"警察官は、検察官に事件を送らずに捜査を終了させることがある(ans微罪処分sna)"},{"title":"捜査","text":"検察官は、被害者や目撃者から事情を聞いたり、ans被疑者sna(捜査対象者)を取り調べるなどの捜査を行った上で、事件を起訴するか不起訴にするかを決定する。"},{"title":"逮捕と被疑者の身柄拘束","text":"Ans逮捕sna →ans勾留(最大20日)sna → ans起訴sna"},{"title":"起訴するか否かの決定","text":"起訴・不起訴の決定を行えるのはans検察官snaのみ\n起訴処分には法定で裁判が開かれるans公判請求snaと公判が開かれ書類捜査で刑が言い渡される略式命令請求がある。"},{"title":"不起訴処分","text":"不起訴処分には、犯罪を立証する証拠が不十分な場合のans嫌疑不十分sna、証拠が十分でも犯人の性格、年齢及び境遇、犯罪の軽重、情状等を考慮して起訴を必要としないと判断した場合のans起訴猶予sna、犯人が精神の障害により是非善悪を判断できないなどのため、責任能力が認められない場合のans心神喪失snaなどがある。"},{"title":"「非行少年」とは","text":"ans犯罪少年sna: 罪を犯した少年(犯罪行為時に14歳以上であった少年)\nans触法少年sna: 14歳に満たないで刑罰法令に触れる行為をした少年\nans虞犯少年sna: 保護者の正当な監督に服しない性癖等の自由が有り、少年の性格又は環境に照らして、将来、罪を犯し、又は刑罰法令に触れる行為をするおそれのある少年"},{"title":"少年法が扱う事件","text":"非行少年の事件はans少年保護事件snaと呼ばれ、家庭裁判所が専属的に管轄権をもつ"},{"title":"少年事件の手続き","text":"非行少年の発見 → 社会調査 → 少年審判 → ans保護処分sna"},{"title":"検察官への送致","text":"家庭裁判所が検察官から送致された少年を調査した結果、刑事処分が相当であるとして、検察官へ改めて事件を送ることをans逆送snaという。"},{"title":"少年法第61条","text":"第61条  家庭裁判所の審判に付された少年又は少年のとき犯した罪により公訴を提起された者については、氏名、年齢、職業、住居、容ぼう等によりその者が当該事件の本人であることを推知することができるような記事又は写真を新聞紙その他の出版物に掲載してはならない。\n\n「ans推知報道の禁止sna」"},{"title":"行政法","text":"行政ans組織snaに関する法\n行政ans作用snaに関する法: 行政組織の活動を規律する法\n行政ans救済snaに関する法: 行政組織の過ちに対して市民を救済する法"},{"title":"行政の仕事①","text":"ans行政規制sna: 事故や食中毒等の困ったことが起きないように、予めチェックする仕事"},{"title":"行政の仕事②","text":"ans給付行政sna: 国民が健康で文化的な最低限度の生活を送るために、国民に対して金銭やサービスの給付を行う仕事"},{"title":"行政の仕事③","text":"ans調達行政sna: 行政活動のための資金を集める行政"},{"title":"行政の仕事④","text":"ans誘導行政sna: 人々の行動を一定の方向に導くことを目的とする行政"},{"title":"行政指導","text":"行政が「命令」せずに「お願い」すること: ans行政指導sna"},{"title":"様々な制裁方法①","text":"ans行政刑罰sna: 刑事罰の一種\nans交通反則金sna: 警察官から告知、警察本部長によって通告、納付して終了\nans過料sna: 行政上の秩序を維持するために違反者に制裁金を課す制度"},{"title":"様々な制裁方法②","text":"ans放置違約金sna: 運転者が駐車違反をした場合に、違反者として出頭せずに反則金を納付しなかった場合は、車両の使用者に違反金が課される制度\nans加算税sna: 本来収めるべき税額に一定割合を乗じた額が加算\nans課徴金sna: カルテルやインサイダー取引など、企業の「儲け過ぎ」を剥奪し、制裁"},{"title":"行政の誤りに対する救済","text":"国や地方公共団体による過失に対する賠償を「ans国家賠償sna」という。"},{"title":"行政に対する救済②","text":"処分が不服だとして訴えることを「ans行政不服審査sna」という。"},{"title":"行政の誤りに対する救済③","text":"裁判所に対して、行政の処分が不服だとして訴えることを「ans行政事件訴訟sna」という。"},{"title":"行政救済に対する法: 行政手続法","text":"ansパブリックコメントsna: 政令や省令などの案に意見を提出できる制度。"},{"title":"なぜ法令遵守が必要なのか","text":"法令遵守 = ansコンプライアンスsna"},{"title":"会社のあるべき統治システム","text":"会社のあるべき統治システム = ansコーポレートガバナンスsna"},{"title":"会社法という法律","text":"「ans経営者sna」と「ans株主sna」の間のルール"},{"title":"株式会社を作るメリット","text":"万が一の時もans間接sna・ans有限sna責任で済む"},{"title":"株主とは","text":"株主とは、ans株式snaを保有し、株式会社を実質的に所有する人。\nans所有snaとans経営snaのans分離sna: 経営については素人なので、取締役に任せる"},{"title":"株式会社の特徴","text":"ans株主平等原則sna: 株主は株式数に応じて平等に扱われる。\nans株式譲渡自由sna の原則"},{"title":"株主の権利","text":"ans自益権sna: 会社から経済的利益を受ける権利\nans共益権sna: 会社の経営に参加したり、経営を監督する権利"},{"title":"株式会社設置のための主な手続き","text":"ans定款snaを作る: 商号・目的などの基本項目を決める\n↓\n定款のans認証snaを受ける: 公証人役場にて\n↓\nans登記申請snaする"},{"title":"定款作成その①","text":"定款に署名した人をans発起人snaという。"},{"title":"定款作成その②","text":"会社の名前: ans商号sna\n書かないと定款全体が無効になる事項のことをans絶対的記載事項snaという。"},{"title":"会社財産の確保","text":"ans資本sna: 会社財産を確保するための基準となる一定の金額"},{"title":"株式会社に登場するプレーヤー","text":"ans代表取締役sna: 会社を代表し、業務執行\nans取締役sna: 業務執行\nans株主sna: 会社の共同所有者(=社員)"},{"title":"株式会社を実際に動かす人たち","text":"会社のans機関sna: 法人である株式会社を実際に動かす人たち"},{"title":"取締役の地位","text":"ans善管注意義務sna: プロフェッショナルに一般的に要求される程度の注意義務、忠実義務を負う。\n取締役はans株主総会snaが専任\n取り締まりの任期: 原則ans2年sna"},{"title":"取締役の違法行為(民事)","text":"ans任務違反sna、ans損害の発生sna、ans過失snaにより損害賠償責任が発生する"},{"title":"監査役","text":"ans会計sna監査とans業務sna監査の2種類がある。"}];
const data = shuffle(DATA);

function shuffle(array) {
    var n = array.length, t, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }

    return array;
}