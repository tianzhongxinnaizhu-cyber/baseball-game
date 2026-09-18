# Baseball GM v3.38

月単位で進める編成型・野球GMシミュレーションです。

GitHub Pages:
https://tianzhongxinnaizhu-cyber.github.io/baseball-game/

## v3.38
- 選手詳細画面に年度別成績とは独立した「通算成績」を追加
- 野手は PA / AB / AVG / OBP / SLG / OPS / H / 2B / 3B / HR / R / RBI / BB / HBP / SO / SB / CS / SF / GDP を集計
- 投手は G / GS / W / L / HLD / SV / IP / ERA / WHIP / 被安打 / 被本塁打 / BB / HBP / SO を集計
- シーズン途中は保存済み年度に今季分を加えて表示
- 野手起用された投手は通算打撃成績も表示
- v3.37で追加した2軍昇格時の投手 / 野手ベンチ選択も継続

ゲーム本体は `index.html` に直接配置しています。セーブはブラウザ内に保存されます。大切なデータはゲーム内のJSON書き出しでもバックアップしてください。
