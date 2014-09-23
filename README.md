MEAN stackでtodoアプリを作る
===

##### 要件
- 担当者はuserから紐づける
- 期限登録はdatapickerを使う
- create_timeを自動で設定
- soket.ioで登録時に即画面に反映される
- 担当者はselectboxで表示
- 登録者は自動で登録
- ログインしないと登録できない
- 認証はデフォルトを利用する
- 画面名はtodo

#### collection設計

- 内容: content
- 期限: limit
- 担当者: responsible_user
- 登録者: registrant_user
- 作成日: created_at
- 更新日: updated_at
- 終了フラグ: deleted_at

#### 使用コマンド
- yo angular-fullstack:route todo
    - client側のtodo処理ファイル一式追加
- yo angular-fullstack:endpoint todo
    - server側のtodo処理ファイル一式追加
- bower install Bootflat --save
    - bootstrap機能拡張ファイル追加

#### その他
- 認証は`$scope.users = User.query();`でおこなっている
    - `user.service.js`のfactoryでサーバーにアクセスを行い、サーバー側でログイン判定を行っている
    - `api/user.index.js`の`router.get('/', auth.hasRole('admin'), controller.index);`

- bower.jsonにoverridesを追加
    - 下記を追加することで、Gruntのwiredepタスクで自動的にindex.htmlに追記される
```json
"overrides": {
	"Bootflat": {
		"main": ["/bootflat/js/icheck.min.js",
			"/bootflat/js/jquery.fs.selecter.min.js",
			"/bootflat/js/jquery.fs.stepper.min.js"
				]
	}
}
```

#### 参考
- [YEOMANを使ってMEAN(MONGODB+EXPRESS+ANGULARJS+NODE.JS)を作成しよう](http://urx.nu/bUy7)
- [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)
- [Bootflat](http://bootflat.github.io/)
