$( document ).ready(function() {

    console.log( "charts building" );


	Morris.Donut({
	  element: 'myfirstchart',
	  data: [
	    {label: "Black", value: 12},
	    {label: "white", value: 22},
	    {label: "green", value: 8},
	    {label: "red", value: 30}
	  ],
	  colors: ['black', 'grey', 'green', 'red'],
	  resize: true
	});



	Morris.Donut({
	  element: 'donut-example',
	  data: [
	    {label: "Paid", value: 12},
	    {label: "Yet to pay", value: 30}
	  ],
	  colors: ['green', 'red', 'orange'],
	  resize: true
	});

});
