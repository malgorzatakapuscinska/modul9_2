var femaleNames = ['Adam', 'Marek', 'Sebastian', 'Michał', 'Tadeusz'],
	maleNames = ['Ewa', 'Małgorzata', 'Halina', 'Agnieszka', 'Ola'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Marian';


if (allNames.indexOf(newName) === -1)
{allNames.push(newName);
  console.log(allNames);
	
}
else { console.log("Imię już istnieje w tablicy.");}