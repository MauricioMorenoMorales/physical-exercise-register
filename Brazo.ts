const horizontal = {
	'6-1': '[10] 12 - 12 - 13 - 10 - 9',
	'6-14': '[10] 12 - 12 - 10 - 10 - 9', //? Segunda serie
	'6-24': '[12] 12 - 10 - 8 - 8 - 6', //! Cambio de peso
	'7-1': '[12] 12 - 11 - 9 - 5 - <7>', //! 7
	'7-6': '[12] 12 - 12 - 11 - 8 - 8',
	'7-17': '[12] 12 - 12 - 12 - 10 - 9',
	'7-22': '[12] 12 - 12 - 12 - 12 - 10',
	'8-2': '[12] 12 - 12 - 12 - 12 - 10',
	'8-10': '[12] 12 - 12 - 8 - 6 - 6',
	'9-16': '[12] 12 - 12 - 11 - 9 - 8',
	'9-23': '[12] 12 - 12 - 12 - 11 - 8',
	'10-1': '[12] 12 - 12 - 12 - 12 - 11',
	'10-8': '[14] 12 - 11 - 8 - 6 - 5', //! Cambio de peso
	'10-14': '[14] 12 - 12 - 9 - 8 - 6',
	'10-23': '[14] 12 - 12 - 10 - 8 - 6',
	'10-30': '[14] 12 - 12 - 11 - 9 - 7',
	'11-5': '[14] 12 - 12 - 11 - 9 - 6',
	'11-12': '[14] 12 - 12 - 12 - 9 - 5d',
	'11-19': '[14] 12 - 12 - 12 - 10 - 8',
	'12-3': '[14] 12 - 12 - 12 - 11 - 9',
	'12-10': '[14] 12 - 12 - 12 - 12 - 10',
	'12-17': '[14] 12 - 12 - 8 - 6 - 5',
	'12-22': '[14] 12 - 12 - 9 - 7 - 5',
	'12-30': '[14] 12 - 12 - 10 - 9 - 8',
	'1-6': '[14] 12 - 12 - 8 - 6 - 5',
	'1-13': '[14] 12 - 12 - 9 - 7 - 7',
	'1-20': '[14] 12 - 12 - 10 - 9 - 7',
	'1-27': '[14] 12 - 12 - 8 - 7 - 5 + 3', //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! no veas las estadisticas solo hazlas primeras 4 sin ver
	'2-3': '[14] 12 - 12 - 10 - 6 - 7',
	'2-10': '[14] 12 - 11 - 11 - 8 - 8',
	'2-17': '[14] 12 - 12 - 10 - 10 - 9',
	'2-18': '[10] 12 - 12 - 9 - 9 - 8',
	'2-24': '[14] 12 - 12 - 12 - 11 - 8',
	'3-3': '[14] 12 - 12 - 12 - 9 - 9',
	'3-10': '[14] 12 - 12 - 8 - 6 - 6',//! Calidad sobre cantidad
	'3/17': '[14] 12 - 12 - 10 - 9 - 8',
	'3/24': '[14] 12 - 12 - 11 - 10 - 8',
	'3/13': '[12] 12 - 12 - 5 - 6 - 5',
};

const vertical = {
	'6-1': '[10] 12 - 11 - 7 - 6 - 6',
	'6-14': '[10] 12 - 12 - 12 - 12 - 10', //? Primera serie
	'6-24': '[12] 9 - 7 - 6 - 6 - 6', //! Cambio de peso
	'7-1': '[12] 10 - 8 - <9> - 7 - 6', //! <9>
	'7-6': '[12] 12 - 10 - <11> - 10 - 8', //! 11
	'7-17': '[12] 12 - 11 - 10 - <11> - 9',
	'7-23': '[12]g 12 - 12 - 12 - 12 - 10',
	'8-2': '[12]g 12 - 12 - 12 - 10 - 9',
	'8-10': '[12] 11 - 9 - 7 - 6 - 6',
	'9-16': '[12] 12 - 10 - 8 - 8 - 7',
	'9-23': '[12] 12 - 11 - 10 - 10 - 9',
	'10-1': '[12] 12 - 12 - 12 - 12 - 10',
	'10-8': '[14] 10 - 9 - 6 - 5 - 4',
	'10-14': '[14] 10 - 10 - 7 - 6 - 6',
	'10-23': '[14] 11 - 11 - 8 - 7 - 7',
	'10-30': '[14] 12 - 12 - 9 - 8 - 7',
	'11-5': '[14] 12 - 11 - 10 - 9 - 8',
	'11-12': '[14] 12 - 6f - 12{10} - .5',
	'11-19': '[14] 12 - 10 - 8 - 7 - 6',
	'12-3': '[14] 12 - 8 - 8 - 7 - .1',
	'12-10': '[14] 12 - 11 - 9 - 8 - 7',
	'12-17': '[14] 10 - 5 - 5 - 6 - 7',
	'12-22': '[14] 11 - 7 - 8 - 7 - 6',
	'12-30': '[14] 12 - 10 - 10 - 8 - 7',
	'1-6': '[14] 10 - 8 - 7 - 6 - 5',
	'1-13': '[14] 11 - 10 - 7 - 7 - 6',
	'1-20': '[14] 12 - 8 - 7 - 6 - 6',
	'1-27': '[14] 12 - 10 - 9 - 7 - 7',
	'2-3': '[14] 12 - 10 - 10 - 10 - 8',
	'2-10': '[14] 11 - 9 - <10> - 7 - 7', //! ----------------
	'2-17': '[12--] 12 - 12 - 12 - 11 - 8',
	'2-24': '12 - 9 - 10 - 9 - 8',
	'3-3': '[14] 12 - 11 - 10 - 9 - 8',
	'3-10': '[14] 12 - 8 - 7 - 7 - 6',
	'3/17': '[14] 12 - 10 - 9 - 8 - 7',
	'3/13': '[12] 12 - 9 - 8 - 6 - 5',
};

const caminadora = {
	'6-24': '10 - 9 - 9 - 7 - 5',
	'7-1': '12 - 11 - 10 - 8 - 7',
	'7-6': '12 - 12 - 12 - 10 - 9',
	'7-17': '12 - 12 - 12 - 12 - 10',
	'7-23': '12 - 12 - 12 - 12 - 11',
	'8-2': '12 - 12 - 12 - 12 - 12',
	'8-10': '12 - 12 - 12 - 12 - 12',
	'9-16': '12 - 12 - 12 - 12 - 7',
	'10-1': '12 - 12 - 12 - 12 - 12',
	'10-8': '12 - 12 - 12 - 12 - 8',
	'10-14': '12 - 12 - 12 - 12 - 12',
	'11-19': '12 - 12 - 12 - 8 - 5',
	'12-3': '12 - 12 - 12 - 10 - 8',
	'12-17': '[14] ',
	'12-30': '12 - 12 - 12 - 9 - 6',
	'1-6': '12 - 12 - 12 - 12 - 8',
	'1-13': '12 - 12 - 12 - 10 - 10',
	'1-20': 'p 12 - 12 - 7 - 5 - .2',
	'1-27': '12 - 12 - 9 - fp8  - 8',
	'2-3': '12 - 12 - 12 - 9 - 8',
	'2-24': '12 - 12 - 12 - 9 - 8',
	'3-3': '12 - 12 - 12 - 8 - 9',
	'3/17': '[6] 12 - 11 - 9 - 8 - 5',
	'3/13': '[12] 12 - 9 - 8 - 6 - 5',
};

const laterales = {
	'6-1': '[10] 12 - 10 - 7 - 7',
	'6-14': '[10] 12 - 10 - 9 - 9 - 8',
	'6-24': '[12] 12 - 9 - 7 - 6 - 5', //! Cambio de peso
	'7-1': '[12] 12 - 8 - 8 - 7 - 6',
	'7-6': '[12] 12 - 11 - 10 - 9 - 8',
	'7-23': '[12] 12 - 12 - 10: - 9 - 8', //! Dolor de derivado de hacer 2 ejercicios al día
	'8-2': '[12] 12 - 12 - 9 - 9 - 7',
	'8-10': '[12] 24 - 24 - 16 - <18> - 15', //*
	'9-16': '[12] 24 - 24 - 19 - 20 - 18',
	'9-23': '[12] ', // entramos tarde
	'10-1': '[12] 24 - 24 - 24 - 22 - f',
	'10-8': '[14] 16 - 14 - f',
	'10-14': '[14] 10',
	'10-30': '[12] 24 - 19 - 16 - 14 - 8f',
	'11-5': '[14] 24 - 22 - 20 - 17 - 18',
	'12-3': '[14] 8 - .2',
	'12-17': '[10] 15 - 20 - 16 - 12 - .5',
	'12-22': '[12] 14 - 13 - 12 - 9 - .5',
	'12-30': '[12] 20 - 18 - 14 - 11 - 11',
	'1-6': '[12] 22 - 21 - 16 - 16 - 14',
	'1-13': '[12] 24 - 24 - 18 - 12 - .5',
	'1-20': '[12] f',
	'1-27': '[12] 24 - 12f (-p10) 15 - 14',
	'2-24': '[12] 24 - 22 - 17 - 12 - 16', //! 16
	'3-3': '[12] 24 - 24 - 22 - 20 - 20',
	'3/17': '[14] 20 - 16 - 10 - 10 - 6',
	'3/13': '[12] 16 - 12 - 10 - 7 - F',
};

const silla = {
	'6-1': '12 - 12 - 10 - 9 - 8',
	'6-14': '12 - 12 - 12 - 9 - <10>', //!10
	'6-24': '20 - 15 - 13 - 12 - 9',
	'7-1': '24 - 17 - 13 - 12 - ',
	'7-6': '24 - 21 - 16 - 14 - 13',
	'7-23': '24 - 24 - 20 - 19 - 17',
	'8-2': '24 - 24 - 24 - 19 - 19',
	'8-10': '24 - 24 - 20 - 17 - 14',
	'9-16': '24++ - 24 - 13 - 12 - 11',
};
