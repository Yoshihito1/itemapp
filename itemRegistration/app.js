function generateHTML() {
    // フォームの値を取得
    const title = document.getElementById('title').value;
    const maker = document.getElementById('maker').value;
    const cpu = document.getElementById('cpu').value;
    const cpugen = document.getElementById('cpugen').value;
    const cpuname = document.getElementById('cpuname').value;
    const core = document.getElementById('core').value;
    const core1 = document.getElementById('core1').value;
    const thread = document.getElementById('thread').value;
    const thread1 = document.getElementById('thread1').value;
    const memory = document.getElementById('memory').value;
    const memory1 = document.getElementById('memory1').value;
    const ssd = document.getElementById('ssd').value;
    const os = document.getElementById('os').value;
    const os1 = document.getElementById('os1').value;
    const office = document.getElementById('office').value;
    const connect = document.getElementById('connect').value;
    const connect1 = document.getElementById('connect1').value;
    const cam = document.getElementById('cam').value;
    const slot = document.getElementById('slot').value;
    const output = document.getElementById('output').value;
    const output1 = document.getElementById('output1').value;
    const USB = document.getElementById('USB').value;
    const drive = document.getElementById('drive').value;
    const battery = document.getElementById('battery').value;
    const size = document.getElementById('size').value;
    const weight = document.getElementById('weight').value;
    const display = document.getElementById('display').value;
    const display1 = document.getElementById('display1').value;
    const dpi = document.getElementById('dpi').value;
    const dpi1 = document.getElementById('dpi1').value;
    const ghz = document.getElementById('ghz').value;
    const ghz1 = document.getElementById('ghz1').value;
    const hdd = document.getElementById('hdd').value;
    const ssdbox = document.getElementById('ssdbox').value;
    const graphics = document.getElementById('graphics').value;
    const graphic1 = document.getElementById('graphic1').value;
    const graphic2 = document.getElementById('graphic2').value;
    const dpcondition = document.getElementById('dpcondition').value;
    const dpcondition1 = document.getElementById('dpcondition1').value;
    const apcondition = document.getElementById('apcondition').value;
    const apcondition1 = document.getElementById('apcondition1').value;
    const dent = document.getElementById('dent').value;
    const dent1 = document.getElementById('dent1').value;
    const keyboard = document.getElementById('keyboard').value;
    const keyboard1 = document.getElementById('keyboard1').value;
    const palm = document.getElementById('palm').value;
    const palm1 = document.getElementById('palm1').value;
    const operation = document.getElementById('operation').value;
    const operation1 = document.getElementById('operation1').value;
    const backlight = document.getElementById('backlight').value;
    const touch = document.getElementById('touch').value;
    const com = document.getElementById('com').value;
    const ment = document.getElementById('ment').value;
    const accessory = document.getElementById('accessory').value;
    const accessory1 = document.getElementById('accessory1').value;
    const type = document.getElementById('type').value;
    const type1 = document.getElementById('type1').value;
    const usk = document.getElementById('usk').value;


  
    // HTMLを生成
    const html = `<table border="1" width="100%" cellspacing="0" cellpadding="5" bordercolor="#ffffff" bgcolor="#ffffff">
<tr><th><font color="#000000">
届いたらすぐにご使用できます <br></font>
<font color="#000000">
商品名</font></th></tr><tr><th>
<font color="#000000">
【中古】${maker} ${title}<br></font></th></tr></table><table border="1" width="100%" cellspacing="0" cellpadding="5" bordercolor="#ffffff" bgcolor="#ffffff"><tr><th>
<font color="#000000">
商品説明</font></th></tr><tr><th>
<font color="#000000">
◆ ◆ ◆高性能 ${cpu} ${cpuname} ${cpugen} + 高速起動 SSD
${ssd} ${hdd} + メモリ ${memory}${memory1}GB + ${os}${os1}
速さの四拍子 秒速起動 ◆ ◆ ◆<br>
【動作品（商品到着後にすぐ使用可能）。領収書の発行可能です。】<br>
【保証付き、動作良好です。】 <br> <br>
<br>
大人気${maker}シリーズ！！動作サクサクです。
${graphic1}${graphic2}${backlight}${usk}${touch}<br>
${type}${type1}<br><br></font> </th></tr></table><table border="1" width="100%" cellspacing="0" cellpadding="10" bordercolor="#ffffff"><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
メーカー</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${maker}<br></font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
品名/型番</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${title}</font>
</th>
</tr>
<tr>
<th bgcolor="#cce7ff" width="30%">
<font color="#000000">
ディスプレイ</font>
</th>
<th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${display}${display1} <br>
${touch}
</font>
<font  color="#546e5b">
${dpi}${dpi1} <br>
</font>
</th>
</tr>
<tr>
<th bgcolor="#cce7ff" width="30%">
<font color="#000000">
CPU
</font>
</th>
<th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${cpu} ${cpuname}</font> <br>
<font  color="#546e5b">
高性能 ${cpu} ${cpuname}<br>
超高速${ghz}${ghz1}GHzのスレッドが${thread}${thread1}個同時に駆動します。<br>
大人気${cpu}製 ${com}高性能 クアッドコア（${core}${core1}コア）・${thread}${thread1}スレッド CPU搭載 ${ment}
<br>
</font>
</th>
</tr>
<tr>
<th bgcolor="#cce7ff" width="30%">
<font color="#000000">
メモリ
</font>
</th>
<th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${memory}${memory1}GB</font> <br>
<font  color="#546e5b">
大容量メモリー搭載で、たくさんのアプリを開いても快適です。</font>
</th>
</tr>
<tr>
<th bgcolor="#cce7ff" width="30%">
<font color="#000000">
ストレージ <br>
(SSD)
</font>
</th>
<th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${ssd} ${hdd} </font> <br>
<font  color="#546e5b">
『爆速 SSD搭載』 ${ssd} ${hdd} <br>
<br>
◆SSDを初めての方は驚かれるかも？。起動に要する時間はHDDの5～10倍も高速だと言われてます。 <br>
◆HDDと比較したSSDのメリット:データ処理速度が高速！ 起動音が静か！ 衝撃に非常強い！ 低発熱！ 省エネ！ 軽量！</font></th></tr><tr><th bgcolor="#e6e6fa" width="30%"><font  color="#000000">OS</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${os}${os1}</font> <br>
<font  color="#546e5b">
デジタルライセンス認証済みにてすぐに使用が出来る状態となっています。*アップグレードにより ${os}DtoDリカバリー領域有ります。またのメニューよりUSB等へ OS再インストールバックアップメディア作成可能です 。</font></th></tr><tr><th bgcolor="#e6e6fa" width="30%">
<font  color="000000">
Office <br>ソフト</font> </th><th bgcolor="#f5f5f5" align="left">
<font color=" #000000 ">${office}</font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
通信機能</font></th>
<th bgcolor="#f5f5f5" align="left"><font color="#000000">
${connect}${connect1}<br></font><font  color="#546e5b"></font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
Webカメラ内蔵・マイク装備</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${cam}
</font> <br></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
メモリスロット</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${slot}<br></font><font  color="#546e5b"></font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
グラフィック</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${graphics}${graphic1}${graphic2} 
</font><br>
<font  color="#546e5b">
高精細動画の再生に優れた高画質HD グラフィックス搭載です。</font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
外部ディスプレイ出力
</font>
</th>
<th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${output}${output1}
</font><br>
<font  color="#546e5b">
別のモニターと接続して大画面で操作することも可能です。</font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
USB</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${USB}
</font> <br>
<font  color="#546e5b">
USB3.0はUSB2.0の10倍の転送速度ですので、極めて高速です。<br></font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
光学ドライブ</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
${drive}</font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
本体サイズ（突起部含まず）
</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
約 ${size} <br>
</font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
重量（バッテリ含む）</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
約 ${weight}<br><br></font></th></tr></table><table border="1" width="100%" cellspacing="0" cellpadding="10" bordercolor="#ffffff" bgcolor="#ffffff"><tr> <th colspan="2" align="center" bgcolor="#ffefd5">
<font color="#000000">
状態、動作確認</font></th> </tr> <tr><th width="30%" align="center" bgcolor="#ffefd5">
<font color="#000000">
液晶</font> </th><th width="70%" align="left">
<font color="#000000">
${dpcondition}${dpcondition1}${touch}
<br></font></th></tr><tr><th align="center" bgcolor="#ffefd5">
<font color="#000000">
カバー <br></font>
<font color="#000000">
*天板、底面</font> </th><th align="left">
<font color="#000000">
${apcondition}${apcondition1}${dent}${dent1}
</font></th></tr><tr><th height="45" align="center" bgcolor="#ffefd5">
<font color="#000000">
キーボード</font> </th><th align="left">
<font color="#000000">
${keyboard}${keyboard1}${usk}
</font></th></tr><tr><th align="center" bgcolor="#ffefd5">
<font color="#000000">
パームレスト <br></font>
<font color="#000000">
*キーボード手前側の手のひらを置く部位</font></th><th align="left">
<font color="#000000">
${palm}${palm1}${backlight}
</font></th></tr><tr><th align="center" bgcolor="#ffefd5">
<font color="#000000">
バッテリー</font></th><th align="left">
<font color="#000000">
${battery}</font></th></tr><tr><th align="center" bgcolor="#ffefd5">
<font color="#000000">
動作確認</font></th><th align="left">
<font color="#000000">
${operation}${operation1}<br>

<font  color="#546e5b">
(USB &amp; 無線LAN &amp; スピーカー&amp;キーボード＆インターネット)</font> </font></th></tr></table><table border="1" width="100%" cellspacing="0" cellpadding="5" bordercolor="#ffffff"><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
備考</font></th><th bgcolor="#f5f5f5" align="left">
<font color="#000000">
付　属　品 <br>
${accessory}${accessory1}
<br>（記載の無い物は付属いたしません）
</font></th></tr><tr><th bgcolor="#cce7ff" width="30%">
<font color="#000000">
注意事項</font></th><th bgcolor="#f5f5f5" align="left">
<font  color="#546e5b">
◆注意事項: 必ず最後まで説明をお読みください。 <br>
◆あくまで中古です、メーカー販売では無いのでメーカーと
同じ仕様をお求めの方は絶対に購入しないでください。 <br>
◆中古品というご理解がある方のみ購入をお願いいたします。 <br>
◆中古品ですので軽キズ、汚れがあります。((中古品ですので、写真では確認
できない部分にキズや汚れ、 塗装剥げ、シール剥がしの跡等がある場合があります。)) <br>
◆同型番の商品を複数出品しておりますので写真を転用している場合があります。（
その場合、同程度の状態の商品を発送致します。）ご了承お願い致します。 <br>
◆サービス品（ソフトウエア）での不具合はサポート対象外になります。<br>
◆お客様自身でのOS再インストール時にてofficeソフトの再認証サポートは致しておりません。<br>
◆発送は 埼玉県から、クロネコヤマト便にてお送りします。配送の期日、時間指定は可能です。 <br>
◆土・日・祝日お休みさせていただきます。土・日・祝日はメール確認及びご返信、ご入金確認、
ご質問対応、 発送業務等すべてお休みさせて頂きます。 <br>
◆バッテリーは消耗品の為、動作補償外となります。<br>
◆上記内容にご納得の上でご購入お願い致します。<br></font></th></tr></table>`;  


// プレビューを表示
const preview = document.getElementById('preview');
preview.innerHTML = html;

// コードをコピーする関数を呼び出す
copyCodeToClipboard(html);
  }
  
  

 // コードをコピーする関数
 function copyCodeToClipboard(html) {
   const code = document.getElementById('code');
   code.innerText = html;

   // コピーするボタンを指定
   const copyButton = document.getElementById('copybtn');
   const clipboard = new ClipboardJS(copyButton);

   // コピーが成功した場合の処理
  let copied = false; // コピーが成功したかを管理するフラグ
  clipboard.on('success', function (e) {
    if (!copied) { // コピーが成功していない場合にのみアラートを表示
      alert('コピーが成功しました！');
      copied = true; // copiedをtrueに設定して、2回目以降はアラートが表示されないようにする
    }
    e.clearSelection();
  });

   // コピーが失敗した場合の処理
   clipboard.on('error', function (e) {
     alert('コピーに失敗しました。手動でコピーしてください。');
   });
 }

 // 初期処理としてHTMLを生成してプレビューに表示
 generateHTML();