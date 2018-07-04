//canvas global variable for clearGrid and makeGrid function
let canvas = document.getElementById('pixelCanvas');


//call makeGrid when user clicks on submit
function makeGrid() {
	let height = document.getElementById('inputHeight'); //select row, height local variable

	let width = document.getElementById('inputWidth'); //select column, width local variable

	$('tr').remove();

	for(let r = 0; r < height.value; r++){

		const row = canvas.insertRow(r);

		for(let c = 0; c < width.value; c++){

			row.insertCell(c);

		}

	}

		fillCell(); //calls the function to fill cell

}

//reset the grid before creating a new one
function clearGrid(){

	while(canvas.firstChild){

		canvas.removeChild(canvas.firstChild);

	}

}

//fill and unfill cells with color
function fillCell() {

	let color = document.getElementById('colorPicker'); 	//color local variable

	$('td').on('click', function () {

		if (event.target.style.backgroundColor) {

			$(event.target).css('background-color', '');

		} else {

			$(event.target).css('background-color', color.value);

		}

	});
}


$('button').on('click',function(e){

	e.preventDefault(); // prevent browser reload

	clearGrid();

	makeGrid();

});
