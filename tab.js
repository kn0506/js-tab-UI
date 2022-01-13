(()=>{
	
	const $doc = document;
	const $tab = $doc.getElementById('js-tab');
	const $item = $tab.querySelectorAll('[data-nav]');
	const $content = $tab.querySelectorAll('[data-content]');

	//初期化
	const init = () => {
		$content[0].style.display = 'block';
	};
	init();

const handleClick = (e) => {
	e.preventDefault();

	//クリックされたitemとそのdataを取得
	const $this = e.target;
	const targetVal = $this.dataset.nav;

	//対象外のitem,content全て一旦リセットする
	let index = 0;
	while(index < $item.length){
		$content[index].style.display = 'none';
		$item[index].classList.remove('is-active');
		index++;
	}

	//対象のコンテンツをアクティブ化する
	$tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
	$item[targetVal].classList.add('is-active');
};

//全item要素に対して関数を適応
let index = 0;
while(index < $item.length){
	$item[index].addEventListener('click',(e) => handleClick(e));
	index++;
}

})();