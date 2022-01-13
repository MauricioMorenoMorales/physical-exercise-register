const Arquero = {
	'5-30': '12/12 - 12/6 - 8/3 - [r] 10/6 - 9/5',
	'6-12': '12/12 - 12/6 - 8/3 <> - 8/3 - 5/1', //? 1:30
	'6-20': '12/10 - 12/7 - 10/4 - <> 11/4 - 8/3',
	'6-27': '12/12 - 12/8 - 12/6 - 10/4 <> - 10/4',
	'7-4': '12/12 - 12/12 - 12/7 - 12/5 - 10/5', //?Inicia la toma de creatina
	'7-8': '12/12 - 12/12 - 12/10 - 12/6 - 12/ <7>', //! 7
	'7-14': '12/12 - 12/12 - 12/12 - 12/10 - 12/8',
	'7-19': '12/12 - 12/12 - 12/12 - 12/12 - 12/8',
	'7-31': '12/12 - 12/12 - 12/12 - 12/12 - 8/5', //! Retomo ejercicio después de un tiempo
	'8-8': '12/12 - 12/12 - 12/12 - 12/6 - 11/5',
	'8-17': '12/12 - 12/12 - 12/12 - 12/9 - 10/7',
	'8-24': '12/12 - 12/12 - 12/12 - 11/7 - 9/5',
	'9-6': '12/12 - 12/12 - 12/12 - 12/4 - 9/4',
	'9-20': '12/12 - 12/12 - 12/12 - 12/9 - 11/5',
	'9-28': '12/12 - 12/12 - 12/12 - 12/12 - 12/8',
	'10-12': '12/12 - 12/12 - 12/12 - 12/10 - 12/10',
	'10-19': '12/12 - 12/12 - 12/12 - 10/8 - 8/8',
	'11-2': '12/12 - 12/12 - 12/12 - 10/9 - 11/4f',
	'11-15': '12/12 - 12/12 - 12/8 - 10/8 - 10/5',
	'11-29': '12/12 - 12/12 - 12/12 - 12/7 - 6/5',
	'12-14': '12/12 - 12/12 - 12/7 - 11/11 - 8/d',
	'1-3': '12/12 - 12/12 - 12/10 - 10/7 - 10/7',
	'1-10': '12/12 - 12/12 - 12/7 - 7/5 - 7/4'//! # bloques de distancia
};

const Silla = {
	'5-30': '11 - 8 - 7 - 6 - 5',
	'6-12': '12 - 10 - 7 - 5 - 5',
	'6-20': '12 - 11 - 8 - 7 - 7',
	'6-27': '12 - 12 - 9 - 8 - 8',
	'7-4': '12 - 12 - 11 - 9 - 8',
	'7-8': '12 - 12 - 12 - 12 - 11',
	'7-14': 'm 12 - 11 - 9 - 9 - 8',
	'7-19': 'm 12 - 12 - 11 - 10 - 9',
	'7-31': 'm 12 - 12 - 12 - 12 - 9',
	'8-8': 'm 12 - 12 - 12 - 12 - 12',
	'8-17': 'm 12 - 10 - <12> - 10 - 9', //* 12
	'8-24': 'm 12 - 12 - 12 - 11 - 8',
	'9-6': 'm 12 - 11 - 8 - 8 - 7',
	'9-20': 'm 12 - 12 - 9 - 9 - 8',
	'9-28': 'm 12 - 12 - 11 - 10 - 9',
	'10-12': '12 - 12 - 12 - 8 - 8',
	'10-19': '12 - 12 - 12 - 11 - 9',
	'11-2': '12 - 12 - 12 - 12 - 11',
	'11-15': '12 - 12 - 12 - 11 - 8',
	'11-29': '12 - 9 - 9 - 8 - 8',
	'12-14': '12 - 11 - 9 - 9 - 8',
	'1-3': '12 - 12 - 10 - 8 - 8',
	'1-10': '12 - 11 - 10 - 9 - 8'
};

const Normal = {
	'5-30': '8 - 6 - 6 - 5 - 4',
	'6-12': '11 - 7 - 7 - 6 - 5',
	'6-20': '12 - 8 - 7 - 7 - 6',
	'6-27': '12 - 10 - 8 - 8 - 7',
	'7-4': '12 - 12 - 9 - 9 - 6',
	'7-8': '12 - 12 - 12 - 12 - 10',
	'7-14': 'm 12 - 11 - 9 - 10 - 9',
	'7-19': 'm 12 - 12 - 11 - 11 - 10',
	'7-31': 'm 12 - 12 - 12 - 12 - 9',
	'8-8': 'm 12 - 12 - 12 - 12 - 10',
	'8-17': 'm 12 - 12 - 12 - 10 - 9',
	'8-24': 'm 12 - 12 - 10 - 10 - 9',
	'9-6': 'm 12 - 9 - 5 - <6> - 6', //* 6
	'9-20': 'm 12 - 11 - 10 - 9 - 7',
	'9-28': 'm 12 - 12 - 11 - 10 - 9',
	'10-12': '12 - 12 - 12 - 9 - .5',
	'10-19': '12 - 12 - 12 - 12 - 11',
	'11-2': '12 - 12 - 12 - 11 - 10',
	'11-15': '12 - 12 - 11 - 10 - 10',
	'11-29': '12 - 8 - 7 - 7 - 5',
	'12-14': '12 - 10 - 9 - 7 - 7',
	'1-3': '12 - 9 - 9 - 7 - .5',
	'1-10': '12 - 12 - 10 - 9 - 7'
};

const Inclinado = {
	'5-30': '8 - 7 - 7 -  6 - 4',
	'6-12': '12 - 8 - 8 - 6 - 6',
	'6-20': '12 - 10 - 8 - 7 - 7',
	'6-27': '12 - 11 - 10 - 8 - 8',
	'7-4': '12 - 12 - 11 - 9 - 7?',
	'7-8': '12 - 12 - 12 - 12 - 11',
	'7-14': 'm 12 - 12 - 12 - 12 - ',
	'7-19': 'm 12 - 12 - 12 - 12 - 12',
	'7-31': 'm 12 - 12 - 12 - 12 - 12',
	'8-8': 'm 12 - 12 - 12 - 12 - 12',
	'8-17': 'm 12 - 12 - 12 - 12 - 12',
	'8-24': 'm 12 - 12 - 9 - 8 - 6',
	'9-6': 'm 12 - 10 - 9 - 7 - 7',
	'9-20': 'm 12 - 12 - 8 - <9> - 8', //* 9
	'9-28': 'm 12 - 12 - 12 - 10 - .20',
	'10-12': '12 - 12 - 12 - 12 - 8',
	'10-19': '12 - 12 - 12 - 12 - 12',
	'11-2': '12 - 12 - 12 - 12 - 9',
	'11-15': '12 - 10 - 10 - 9 - .2',
	'11-29': '12 - 12 - 9 - .8 - f',
	'12-14': '12 - 12 - 12 - 12 - 8',
	'1-3': '12 - 12 - 10 - 7 - .0',
	'1-10': '12 - 11 - 8 - 8 - 7'
};

const Maquina = {
	'5-30': '[20] 12 - 10 - 10 - <14> - 12', //*14
	'6-12': '[25] 8 - 8 - 6 - 5 - 3', //!
	'6-20': '[25] 10 - 10 - 8 - 8 - 7',
	'6-27': '[25] 12 - 12 - 11 - 10 - 10',
	'7-4': '[25] 12 - 12 - 11 - <12> - 11', //! 12
	'7-8': '[25] 12 - 12 - 12 - 12 - 12',
	'7-14': '[30] 12 - 12 - 12 - 10 - 9',
	'7-19': '[30] 12 - 12 - 12 - 12 - 12',
	'7-31': '[35] ', //! Cansancio
	'8-8': '[35] 12 - 9 - 8 - <9> - 8', //*9
	'8-17': '[35] 3:30',
};
