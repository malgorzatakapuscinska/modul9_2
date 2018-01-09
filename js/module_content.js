/* Tablice zdążyliśmy już poznać.
Potrafisz je stworzyć, nadpisać oraz odczytać ich wartości.
Dobrze wiedzieć, że tablice są obiektem i udostępniają dodatkowe właściwości oraz metody operacji na nich samych.*/

	/* 1. length  -  przedstawia aktualny rozmiar tablicy (ilość elementów w tablicy).*/

		var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
		console.log(array.length);
		
		/*Jak widzimy, 'length' zwróci wartość 6. No i to jest prawdą.
		Musimy jednak pamiętać, że tablice zaczynają się od indeksu równego 0, a zatem ostatni element ma indeks 5.*/
	
	/* toString() -  pozwala nam łączyć wszystkie elementy tablicy jako jeden tekst, domyślnie oddzielając poszczególne elementy znakiem ",".*/
		
		/* Niestety nie obsługuje ona wypisywania danych z obiektów.*/
		
		var array = ['aaa', [2.55, 'bbb', [5]]];
		var string = array.toString();
		console.log(string);
		
		/*A co jeżeli będziemy mieli zawarty w środku obiekt?*/
		
		var array1 = ['aaa', [2.55, 'bbb', [5, {id: 'hello'}]]];
		var string1 = array1.toString();
		console.log(string1);
		
		/*Jak widać, zamiast tekstu hello dostaliśmy [object Object], czyli typ naszej zmiennej.*/
		
		/*A co jeżeli będziemy mieli zawarty w środku obiekt?*/
		
		/* To remember !!!*/
		/*A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.
		A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:
		A method is implicitly passed the object on which it was called.
		A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).*/
		
	/* Funkcja join(), podobnie jak metoda toString(), funkcja join() pozwala nam na zmianę tablicy na typ string. Jednak w tym przypadku mamy możliwość zdefiniowania, jakim znakiem kolejne z wpisów będą od siebie oddzielone. Ta funkcja musi mieć podany parametr, nawet jeśli to będzie prosty string - variable.join('').*/
		
		var array = ['aaa', 2.55, 5, {adress: 'xxx'}];
		var testJoin = array.join('|');
		
		console.log(testJoin);
		
	/* push() */
		/*Zdarza się, że chcemy dodać nowe dane do istniejącej już tablicy.
		Dane dopisywane są zawsze na końcu tablicy.*/
		
		var test = ['a', 3, 'c'];
		test[3] = 4;
		
		console.log(test[3]);
		
		/* W wyniku tego kodu na końcu naszej tablicy zostanie dodany string 'd'.*/
		/*Tablica będzie wyglądała tak samo jak w poprzednim przykładzie, lecz dodatkowo zmienna x będzie miała wartość 4, czyli nową długość tablicy test.*/
		
				/*Dlaczego więc używamy funkcji push()?
				Jest ona bardziej przystosowana do dokładania danych do naszej tablicy, a co za tym idzie znacznie szybsza w działaniu.
				Dodatkowo jako wynik działania zwraca długość tablicy.*/
		
		var test1 = ['a', 3, 'c'],
			tx = test1.push('D');
		console.log(tx);
		console.log(test1);

		
	/* pop() */
		/*Jeżeli chcemy usunąć ostatni element z tablicy, posłużymy się funkcją pop(). Można powiedzieć, że ściąga ona ostatni element tablicy oraz zwraca go jako wynik działania.*/
		
		var test2 = ['a', 'b', 3];
		var x = test2.pop();
		
		console.log('Zawartość zmiennej test2: ' + test2 + " oraz zmiennej x: " +  x);
		
	/* splice() */
		/*Funkcja splice() pozwala na dodawanie i/lub usuwanie elementów do/z tablicy. W codziennej pracy na tablicach jest, krótko mówiąc, bardzo bardzo użyteczna, więc warto ją znać.
Zobaczmy, jakie parametry przyjmuje funkcja.*/
		
			/* var array = ['a', 'b', 'c'];
			array.splice(index, elements, new1, new2, … , newX);*/
		
			/*gdzie: */
		
			/*Argumenty index i elements są obowiązkowe, więc nie można ich pominąć.
			index określa na której pozycji dodamy/usuniemy element.
			elements definiuje, ile elementów zostanie usuniętych z tablicy. Jeśli ustawimy go jako 0, żaden z elementów nie zostanie usunięty.
			new1 - newX, to lista elementów, które zostaną dodane do tablicy przed elementem array[index].*/
		
		/*Dodawanie lementów*/
		
		var array4 = ['a', 'b', 'c', 1];
		array4.splice(1, 0, 'x', 'y', 'z');
		
		console.log(array4); /*Przed elementem array[1], czyli 'b', zostanie usuniętych zero elementów, a następnie wstawione zostaną przekazane elementy 'x', 'y', 'z'.*/
		
		/* Usuwanie elementów
		
		Sprawdźmy teraz, jak usunąć 2 elementy z naszej tablicy.*/
		
		var array5 = ['a', 'b', 'c', 1];
		var x = array5.splice(2, 2);
		
		
		console.log(array5);
		console.log(x);
		
	/* concat() */
		/* łączy tablice */
		/* Metoda przyjmuje dowolną ilość tablic i zwraca nową, która jest sumą przekazanych tablic.*/
		
		var test = [1, 2, 3];
		var test2 = ['a', 'b', 'c'];
		var test3 = ['x', 'y', 'z'];
		var arr = test.concat(test2,test3);

		console.log(arr);  //  [1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z'];
		
		/*Co się tutaj dzieje?
		Do tablicy test dołączamy tablice test2 oraz test3. Wynikiem funkcji jest nowa tablica, która zawiera wszystkie wartości z tablic.
		Tablice test, test2, test3 pozostają niezmienione, natomiast wartość zmiennej arr wynosić będzie [1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z'];.
		W praktyce zostaje utworzona nowa tablica o tych samych wartościach, co test i do niej zostaną dołączone pozostałe tablice przekazane jako parametry funkcji concat().*/
		
	/* indexOf() */
		
		/*Ta funkcja jako parametr przyjmuje wartość szukanego elementu.
		
		Przykładowo chcemy sprawdzić, czy nasza tablica zawiera imię 'Ola'.*/
		
		var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
		var indexOfOla = names.indexOf('Ola');

		console.log('The search value is on ' + indexOfOla + ' position');

		console.log(names[indexOfOla]);
		
		/*Należy jednak pamiętać, że jeśli szukanych wpisów jest więcej, funkcja zwróci tylko indeks pierwszego napotkanego elementu.*/
		
		var values = [1, 2, 3, 4, 5, 6];
	    var multipliedValues = values.map(function(value) {
	    return value * 10;
	    });

	    console.log(values);
	    console.log(multipliedValues);
	    
	   /* Co się tutaj dzieje?*/
	    		
	   /* Najpierw zadeklarowana zostaje tablica values.
	    Następnie deklarujemy zmienną multipliedValues, która będzie zawierać wynik funkcji map wykonanej na tablicy.
	    Funkcja map() działa podobnie do pętli, z tym że wykona się tyle razy, ile elementów znajduje się w tablicy. Za każdym razem zostanie również wywołana funkcja, która została przekazana jako parametr do funkcji map().
	    Za pierwszym wykonaniem funkcji parametr value przyjmie pojedynczą wartość tablicy. Ta wartość zostanie pomnożona przez 10, następnie zwrócona jako wynik tej funkcji, a w rezultacie zostanie dodana do tablicy będącej wynikiem funkcji map().*/
	
	 /* filter() */
	    
	    /*Działa podobnie jak map() i również porusza się po każdym kolejnym elemencie tablicy i wywołuje funkcję będącą parametrem dla każdej wartości tablicy.
	    Funkcja filter() zwraca tablicę elementów, dla których została zwrócona wartość true w przekazywanej funkcji.
	    Reszta elementów jest pomijana - najlepiej widać to na poniższym przykładzie:*/
	    
	    var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
	    var namesWithoutOla = names.filter(function(name) {
	        console.log('name in filter: ' + name);
	        return name != 'Ola';
	    });

	    console.log(namesWithoutOla);
	    
	   /* Powyższa funkcja filter() zwróci tablicę imion bez imienia 'Ola'. Przy okazji zobaczysz, że każdy z elementów tablicy został sprawdzony. Świadczy o tym console.log wewnątrz funkcji.
	    Innymi słowy - sprawdzana jest każda wartość w tablicy z osobna. Jeśli dana wartość jest inna niż 'Ola', zwracam ją w tablicy wynikowej.*/
	    		