import { info } from './shopInfo.mjs';
import { goods } from './goods.mjs';
console.log(info);

let isWeedHere = false;
for (let i = 0; i < goods.length; i++) {
	if (goods[i] === 'Weed') {
		isWeedHere = true;
		break;
	}
}
delete info['telegram info'];
delete info.motto;

info.printMainInfo();

console.log(goods);
goods.push({
	name: 'Товары из Алика по оверпарйсу',
	price: 20000000000,
});
console.log(goods);
goods.pop();

goods.unshift({
	name: 'PC5 - мечта всех мужчин',
	price: 1000000 + 2,
});
console.log(goods);
goods.unshift();

let overPrice = goods.filter((good) => good.price > 1000);
console.log(overPrice);
console.log('SALE!!!');
const fixPriveTypeSale = goods.map((good) => (good.price = 500));
console.log(fixPriveTypeSale);

let addNewGood = (newGood, ...goods) => {
	goods = [newGood, ...goods];
};

console.log(goods.slice(2));

console.log(info.taxes ?? 'Все в порядке, агай');
