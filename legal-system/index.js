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
                console.log(e.target)
                hiddenDOM[i].classList.toggle('hidden');
            });
        });
    }
});

const DATA = [{"title":"法とは何か","text":"法とはans社会規範snaの1つで、社会の中で作られたルールのことである。"},{"title":"法とは何か: 法の特徴","text":"法の特徴はans国家権力の強制力snaを伴っていることである。"},{"title":"法の存在形式","text":"法がどのような形で存在しているか、その発現方式をans法源snaという。"},{"title":"法律の構造","text":"ans本則sna: 当該法律の本体をなす部分<br>\nans附則sna: 本則に付随する部分"},{"title":"法の分類・性質①","text":"ans公法sna: 国と国民、地方公共団体とその構成員の間を規律する法\nans私法sna: 私人同士の生活関係を規律する法"},{"title":"法の分類・性質②","text":"ans実体法sna: 要件と効果を定めた法\nans手続法sna: 権利や義務を、訴訟手続で具体的に実現するためのプロセスを定めた法"},{"title":"法解釈の基本","text":"法律の解釈を行う際には、その言葉の意味するところをans立法者意思snaから考える。"},{"title":"憲法とは","text":"国のans最高法規sna: 憲法に違反する法律や命令等は効力を持てない。"},{"title":"憲法とは","text":"ans人権規定sna, ans統治機構snaの二本立て"},{"title":"憲法の三大原則","text":"ans国民主権sna: 国の政治は国民が決定。\nans平和主義sna: 戦争放棄、軍隊の不保持、交戦権の否認。\nans基本的人権の尊重sna: 人間が生まれながらにして当然に持つ不可侵の権利。"},{"title":"憲法上最も重要な価値","text":"ans個人の尊重sna: 第13条前段の規定に基づく。"},{"title":"人権の性格","text":"ans固有性sna: 生まれながらにして当然に持つ。\nans不可侵性sna: 権力によって侵害されない。\nans普遍性sna: 人種・性別・身分・職業・国籍にかかわらず、差別なく保証される。"},{"title":"精神的自由権","text":"信教の自由(第20条)\nans政教分離sna原則: 政治と宗教の結びつきを禁止"},{"title":"精神的自由権","text":"学問の自由(第23条)\n教授人事、施設管理など、ans大学の自治snaを保障する。"},{"title":"表現の自由(第21条)","text":"ans知る権利snaも含まれると解釈されている。\n→表現するためには必要な情報・知識を得る必要があるから。"},{"title":"表現の自由の重要性","text":"ans自己実現の価値sna本を読んだりインターネットで検索したりすることなどによって、いろいろなことを知り、考える。他人とコミュニケーションを取ることでも新たな発見がある。\nans自己統治の価値sna政府によって不都合なことであっても、色々な人と政治的な意見を交換することによって、国の政治をどう動かしていくかを自ら決定していくことができる。"},{"title":"人権の制約","text":"人権相互が矛盾・衝突する場合に、憲法上の調整を図るための原理をans公共の福祉snaという。"},{"title":"社会権","text":"「干渉するな」はans自由権sna\n「何とかしてくれ」はans社会権sna"},{"title":"教育を受ける権利","text":"国民の三大義務\nans勤労の義務sna ans納税の義務sna ans教育の義務sna"},{"title":"国会の主な役割","text":"ans法律snaを議決する\nans予算snaを議決する\nans条約snaを承認する"},{"title":"国立国会図書館の仕事","text":"国立図書館としての機能\nans納本制度sna・目録の作成出版・出版物の利用・国内外の図書館等の支援援助"},{"title":"内閣の主な役割","text":"ans法律snaの執行\nans条約snaの締結\nans予算snaの作成・提出"},{"title":"裁判所の組織","text":"ans三審制snaが採用されている。"},{"title":"意見立法審査研","text":"最高裁判所はans憲法の番人snaとも言われている。"},{"title":"地方自治の本旨","text":"民主主義的意義: ans住民sna自治\n自由主義的意義: ans団体sna自治"},{"title":"法律の成立・公布・施行と改正民法","text":"ans成立sna: 法律案は、憲法に特別の定めのある場合を覗いては、衆議院及び参議院の両議院で可決したとき法律となる"},{"title":"法律の成立・公布・施行と改正民法","text":"ans公布sna成立した法律を一般に周知させる目的で、国民が知ることのできる状態に置くことをいい、法律が現実に発行し、作用するためには、それが公布されることが必要です。"},{"title":"法律の成立・公布・施行と改正民法","text":"法律の効力が一般的、現実的に発動し、作用す ること になるans施行snaことをといい、公布された法律がいつからans施行snaされるかについては、通常、その法律の附則で定められています。"},{"title":"民事責任と刑事責任の違い","text":"民事責任の視点: ans紛争解決sna\n刑事責任の視点: ans真実発見sna"},{"title":"契約の基本原則に関する条文","text":"民法はおせっかいな法律ではない。 ans契約自由の原則sna"},{"title":"債権債務関係とは","text":"ans債権sna: 人に一定の行為を要求する権利\nans債務sna: 人から一定の行為を要求され、それに従う義務"},{"title":"債権債務関係とは","text":"お互いが約束を果たせば、債務がans弁済snaされて終了"},{"title":"定型的な取引","text":"ans定型約款sna: 契約の一種だが、不特定多数の者と画一的な取引を行うことが両当事者にとって合理的あ場合に、一方当事者が準備した契約条項に基づいて締結する契約"},{"title":"契約違反","text":"契約に違反するとans債務不履行snaが発生"},{"title":"契約違反","text":"ans履行不能sna: 世の中に1つしか無いものを他の人にあげてしまった\nans履行遅滞sna: 引き渡しが遅れた、支払期限に間に合わなかった\nans不完全履行sna: 渡したものにキズがあった、一部しか代金を支払わなかった。"},{"title":"契約違反の効果","text":"ans履行の強制sna\nans損害賠償請求権sna\nans解除権sna"},{"title":"契約の解除","text":"ans原状回復義務sna: 契約成立前の状態に戻さなければならない。"},{"title":"インターネット取引","text":"トラブルが急速に増加\nans消費者保護snaに関する制度が必要"},{"title":"意思と表示の不一致","text":"ans錯誤sna: 意思と表示の不一致を表意者が知らないこと"},{"title":"取消権の期間制限","text":"期間制限: ans追認sna(取り消しうる契約を有効と認めること)をすることができる時から5年間or錯誤又は詐欺の時から20年"},{"title":"不法行為の要件その1","text":"ans故意sna: 結果を知りながら行為をすること。\nsna過失sna: 結果を予見することができたのにそれを回避しなかったこと。"},{"title":"不法行為の要件その2","text":"ans違法性sna: 権利または法律上保護される利益"},{"title":"不法行為の要件その3","text":"ans因果関係sna: 「これによって」"},{"title":"被害者に過失がある場合","text":"ans過失相殺sna: 被害者にも不注意があった場合に、損害賠償額を斟酌する制度"},{"title":"損害賠償①","text":"① ans積極的損害sna: 現実に財産が奪われる形での損害\n② ans消極的損害sna: 将来得られるのが確実な利益の喪失"},{"title":"損害賠償②","text":"③ ans慰謝料sna: 精神的な損害"},{"title":"差止請求","text":"ans人格権sna: 裁判例の蓄積により認められている。"},{"title":"権利の消滅","text":"ans消滅時効sna: 権利を行使できる者が、一定期間権利を行使しないことにより、その権利を行使することができなくなる制度"},{"title":"「親族」の範囲","text":"ans6親等sna内の血族、ans配偶者sna、ans3親等sna内の姻族"},{"title":"婚姻の成立条件","text":"ans婚姻適齢snaに達していること\nans重根禁止sna: 他の人と婚姻していないこと\nans再婚禁止期間snaでないこと。女性の場合、前婚解消から100日\nans近親婚の禁止sna: 特定の親族間ではないこと。"},{"title":"婚姻の効果","text":"ans同居協力扶助義務sna: 一緒に暮らして協力しあう。\n成年擬制: 成人として扱われる。"},{"title":"婚姻の解消","text":"調停離婚: ans調停前置sna主義"},{"title":"離婚の効果","text":"ans財産分与sna: 婚姻中に協力して蓄積した財産の精算"},{"title":"親子関係","text":"ans認知snaにより父子関係が発生"},{"title":"相続","text":"ans遺言snaがあればそれに従う。\nans遺言snaがなければans法定相続sna"},{"title":"法定相続","text":"ans積極財産sna: 不動産の所有権、現金、債権者の地位、金の延べ棒などのプラス財産\nans消極財産sna: 借金"},{"title":"法定相続","text":"相続されないもの: プライバシー権、著作者人格権、会社員としての地位などのans一身専属権sna"},{"title":"相続の承認と放棄","text":"ans承認sna: 引き継ぐ\nans放棄sna: 一切引き継がない"},{"title":"刑事法とは","text":"ans犯罪snaとans刑罰snaを定めた法"},{"title":"刑事法を考える時の視点①","text":"ans自由保障sna: 犯罪者にも人権はある、刑罰という劇薬は控えめにすべきだ\nans法益保護sna: 犯罪と刑罰を厳しく定めることによって安全を守ってほしい！"},{"title":"刑事法を考える時の視点②","text":"ans罪刑法定主義snaの原則\n・ どのような行為が犯罪となるのか？\n・ どのような刑罰が科せられるのか？"},{"title":"日本の刑法が及ぶ範囲","text":"ans属地主義snaの原則: 日本国内で犯された犯罪に日本の刑法が適用される"},{"title":"国境を超える情報の取り締まり","text":"ans国外犯処罰snaの規定"},{"title":"犯罪の基本構造","text":"ans構成要件snaに該当する = 法律の定めた犯罪の枠に当てはまる。\nans違法性snaを阻却する事由がない = 精神障害や正当行為などに当てはまらない。\nans責任snaを阻却する事由がない = 精神障害や刑事未成年に当てはまらない。"},{"title":"故意・過失","text":"ans故意責任snaの原則"},{"title":"刑罰の種類","text":"・ 死刑\n・ ans懲役sna\n・ ans罰金snaと科料\n・ ans禁錮snaと勾留"},{"title":"捜査","text":"犯罪が発生すると、通常、警察が捜査を行い、犯人を検挙して、事件を検察庁にans送致snaする。"},{"title":"捜査","text":"警察官は、検察官に事件を送らずに捜査を終了させることがある(ans微罪処分sna)"},{"title":"捜査","text":"検察官は、被害者や目撃者から事情を聞いたり、ans被疑者sna(捜査対象者)を取り調べるなどの捜査を行った上で、事件を起訴するか不起訴にするかを決定する。"},{"title":"逮捕と被疑者の身柄拘束","text":"Ans逮捕sna →ans勾留(最大20日)sna → ans起訴sna"},{"title":"起訴するか否かの決定","text":"起訴・不起訴の決定を行えるのはans検察官snaのみ\n起訴処分には法定で裁判が開かれるans公判請求snaと後半が開かれ書類捜査で刑が言い渡される略式命令請求がある。"},{"title":"不起訴処分","text":"不起訴処分には、犯罪を立証する証拠が不十分な場合のans嫌疑不十分sna、証拠が十分でも犯人の性格、年齢及び境遇、犯罪の軽重、情状等を考慮して起訴を必要としないと判断した場合のans起訴猶予sna、犯人が精神の障害により是非善悪を判断できないなどのため、責任能力が認められない場合のans心神喪失snaなどがある。"}];
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