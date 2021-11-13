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
