const info = {
	place: 'Геодезическая 12',
	email: 'juicy-shop@nerazvod.com',
	workTime: '25/8',
	motto: 'Слоган',
	yearsOfWork: 10,
	'telegram info': '+777777777',
	taxes: undefined,
	printMainInfo: function () {
		console.log(`${this.place} ${this.workTime} ${this.email}`);
	},
};

export { info };
