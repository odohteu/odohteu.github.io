$(function(){ 
	const summaryBox = $('.js-summary');
	const nrSteps = $('.step').length;
	
	var markupNodes = [],
		markupEdges = [];
	
	$('.step').each( function(index, value) {
		const self = $(this),
			  id = self.attr('id'),
			  title = self.find('.title').html(),
			  text = self.find('.description').html();
		
		var next = (index+1 === nrSteps) ? 0 : (parseInt(id)+1);
		
		markupNodes.push({data: { id: id, name: title, description: text }})
		markupEdges.push({data: { source: id, target: next }})
	});
	
	var cy = cytoscape({
		container: document.getElementById('cy'),
		// zoomingEnabled: false,
		// userZoomingEnabled: false,
		// userPanningEnabled: false,
		// autoungrabify: true,
		// hideEdgesOnViewport: true,

		layout: {
			name: 'circle',
			padding: 30
		},

		style: cytoscape.stylesheet()
			.selector('node')
				.css({
					'shape': 'rectangle',
					'width': 200,
					'padding': 10,
					'box-sizing': 'border-box',
					'border-radius': 20,
					'content': 'data(name)',
					'text-valign': 'center',
					'background-color': '#81bc00',
					'color': '#fff',
					'margin': 5
				})
			.selector(':selected')
				.css({
					'background-color': '#659302'
				})
			.selector('edge')
				.css({
					'curve-style': 'unbundled-bezier',
					// 'node-point-distances': '-50 20 -20',
					'control-point-distances': -20,
					'control-point-weights': '0.5',
					'source-distance-from-node': 20,
					'target-distance-from-node': 20,
					'opacity': 1,
					'width': 6,
					'target-arrow-shape': 'triangle',
					'line-color': '#81bc00',
					'target-arrow-color': '#81bc00',
				}),


		elements: {
			nodes: markupNodes,
			edges: markupEdges,
		},

		ready: function(){
			window.cy = this;
		}
	});
	
	// Click events
	cy.$('node').on('click', function(event) {
		const evtTarget = event.target;
		const text = evtTarget.json().data.description;
		
		summaryBox.html(text);
	});
	
});