wtdmBudgetGame = {
	d3: require('d3'),
	totalBudget: 1,
	mininumPercentage: 5,

	db: {
		science: {
			name: 'Science, Energy, & Environment',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.75 31.1"><path d="M30.9,26.7L28,22.2a10.59,10.59,0,0,1-2.7.3,19.14,19.14,0,0,1-7.5-1.8A20.62,20.62,0,0,0,5.9,19.3L1.1,26.7A3.07,3.07,0,0,0,1,29.9a3.15,3.15,0,0,0,2.7,1.6H28.2a2.92,2.92,0,0,0,2.7-1.6A3.07,3.07,0,0,0,30.9,26.7Z" transform="translate(-0.6 -0.4)"/><line class="cls-1" x1="14.4" y1="23" x2="15.4" y2="23"/><line class="cls-1" x1="16.2" y1="24.9" x2="17.3" y2="24.9"/><line class="cls-1" x1="14.2" y1="26.1" x2="15.2" y2="26.1"/><path d="M26.6,20.1l-5.8-9V2h1.9a0.79,0.79,0,0,0,.8-0.8A0.79,0.79,0,0,0,22.7.4H9.2a0.79,0.79,0,0,0-.8.8,0.79,0.79,0,0,0,.8.8h1.9v9.1L7,17.6a21.17,21.17,0,0,1,11.5,1.7c3.7,1.7,6.6,1.9,8.6,1.5ZM15,8.6H13.1a0.8,0.8,0,0,1,0-1.6H15A0.8,0.8,0,0,1,15,8.6Zm0-3.1H13.1a0.8,0.8,0,1,1,0-1.6H15a0.79,0.79,0,0,1,.8.8A0.86,0.86,0,0,1,15,5.5Z" transform="translate(-0.6 -0.4)"/></svg>',
			description: '<p>The Science, Energy, & Environment category includes spending by government agencies that advance science or regulate energy and the environment. These agencies are:</p><ul><li>The Department of Energy</li><li>The Environmental Protection Agency (EPA)</li><li>National Aeronautics and Space Administration (NASA)</li><li>The National Science Foundation</li></ul>',
			playerData: 10,
			realData: 1.6
		},
		defense: {
			name: 'Defense & Veteran\'s Affairs',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 35.73"><path d="M34.62,27.16H7.5a7.36,7.36,0,1,0,0,14.71H34.62A7.36,7.36,0,1,0,34.62,27.16ZM7.76,36.78A2.27,2.27,0,1,1,10,34.51,2.27,2.27,0,0,1,7.76,36.78Zm13.3,0a2.27,2.27,0,1,1,2.27-2.27A2.27,2.27,0,0,1,21.06,36.78Zm13.3,0a2.27,2.27,0,1,1,2.27-2.27A2.27,2.27,0,0,1,34.35,36.78Z" transform="translate(0 -6.13)"/><path d="M46.43,9.45h-17l-1-3.14a0.27,0.27,0,0,0-.25-0.18H14a0.26,0.26,0,0,0-.25.19l-3.1,11.53a4.85,4.85,0,0,0-3.58,1.52c-2,2.16-1.72,5.81-1.7,6a0.26,0.26,0,0,0,.26.24H36.48a0.26,0.26,0,0,0,.26-0.26c0-5.48-3.57-6.64-4.4-6.83L30.47,12.6h16A1.57,1.57,0,1,0,46.43,9.45Z" transform="translate(0 -6.13)"/></svg>',
			description: '<p>The Defense &amp; Veteran\'s Affairs category includes spending by government agencies that defend the United States or takes care of veterans.  These agencies are:</p><ul><li>The Department of Defense</li><li>The Department of Homeland Security</li><li>The U.S. Army Corps of Engineers</li><li>The Department of Veterans Affairs</li><li>Other Military and Civil Defense Programs</li></ul>',
			playerData: 10,
			realData: 22
		},
		health: {
			name: 'Medical & Health',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M69.09,6.55c-3.16-2.59-5.35-2-8.52,3.66a7.64,7.64,0,0,1-7.46,4.07V13.53a7.18,7.18,0,1,0-6.27,0v0.75a7.64,7.64,0,0,1-7.45-4.07C36.26,4.57,34.06,4,30.91,6.55S15.24,24.08,0,22.71A10,10,0,0,0,11.26,28s4.4,4.57,11.54,1.37c0,0,3.71,3.35,9.62.3,0,0,4.39,3.35,9.07.46a8.31,8.31,0,0,0,5.58,1.42l0.19,17.25c-0.33-.06-0.6-0.14-1-0.21,0,0-5.12-1.1-10.51-2.61-5.19-1.36-10.9-3.57-11.74-4.72a1.29,1.29,0,0,1,.34-0.2,9,9,0,0,1,2.19-.69,48.22,48.22,0,0,1,7.09-.69c5.16-.19,6.09,0,6.19.06,0-.16,3,0.35,3.81-2.69a0.75,0.75,0,0,0,0-.22c-0.17-2.09-1.78-2.19-3.09-2.44a14.65,14.65,0,0,0-3.9-.13c-4.73.35-19.29-.83-21.13,6.84a3.53,3.53,0,0,1,0,.54C16.12,48.36,29.94,51.26,40,53.26A13.57,13.57,0,0,0,34,62.52c-0.35,4.17,3,8.14,10.66,12.58-5.85,4.14-9.69,8-9.37,12.72,0.55,3.83,3.93,8.94,10.57,12.17h0.06s-4.65-7.09-5-11c-0.31-2.27,1-5.61,6.63-9.64l0.16,14.18h0a2.14,2.14,0,1,0,4.28,0h0l0.19-13.81c5.21,3.86,6.39,7.07,6.09,9.27-0.31,3.88-5,11-5,11h0.06c6.63-3.22,10-8.34,10.56-12.17,0.31-4.69-3.53-8.58-9.37-12.72,7.69-4.44,11-8.41,10.66-12.58a13.56,13.56,0,0,0-5.94-9.27c10-2,23.83-4.89,24.45-11.57a3.53,3.53,0,0,1,0-.54C82,33.48,67.4,34.66,62.67,34.31a14.69,14.69,0,0,0-3.9.13c-1.31.24-2.92,0.35-3.09,2.44a0.71,0.71,0,0,0,0,.22c0.82,3,3.8,2.52,3.81,2.69,0.08,0,1-.24,6.18-0.06a48.35,48.35,0,0,1,7.08.69,8.94,8.94,0,0,1,2.19.69,1.37,1.37,0,0,1,.35.2c-0.84,1.15-6.54,3.36-11.74,4.72-5.4,1.51-10.51,2.61-10.52,2.61l-0.36.08L52.9,31.59a8.28,8.28,0,0,0,5.62-1.42c4.67,2.9,9.07-.46,9.07-0.46,5.9,3,9.61-.3,9.61-0.3C84.34,32.61,88.74,28,88.74,28A10,10,0,0,0,100,22.71C84.75,24.08,72.25,9.14,69.09,6.55ZM43.27,67.71c-1.91-1.18-2.8-2.79-2.62-3.87,0.1-1.5-.42-5.09,6.7-7.7l0.16,14.25ZM58.7,63.84c0.18,1.08-.72,2.68-2.62,3.87-1.25.8-2.47,1.56-3.67,2.32l0.18-13.67C59.08,59,58.59,62.39,58.7,63.84Z"/></svg>',
			description: '<p>The Medical &amp; Health category includes spending by the Department of Health and Human Services which (among other things) provides health care coverage through:</p><ul><li>Medicare</li><li>Medicaid</li><li>The Children’s Health Insurance Program</li><li>The Health Insurance Marketplace</li></ul>',
			playerData: 10,
			realData: 27.6
		},
		wellness: {
			name: 'Well-Being',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.59 90"><path d="M84.64,48.77V95H58.86V70.21H41.14V95H15.36V48.77L50,20.93Zm8.15-9L50,5,7.2,39.76V51.61L50,16.84,92.79,51.61V39.76h0Z" transform="translate(-7.2 -5)"/></svg>',
			description: '<p>The Well-Being category includes spending by government agencies that promote the domestic well-being of Americans. These agencies are:</p><ul><li>The Department of Agriculture</li><li>The Department of Housing and Urban Development</li><li>The Department of Labor</li><li>The Department of Transportation</li><li>The Social Security Administration</li></ul>',
			playerData: 10,
			realData: 33.7
		},
		international: {
			name: 'International Affairs',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><path d="M40,7.5A32.5,32.5,0,1,0,72.5,40,32.54,32.54,0,0,0,40,7.5ZM29.86,13A29.6,29.6,0,0,0,25.25,21q-3.12-.39-6.15-0.95A29,29,0,0,1,29.86,13ZM16.49,23.25c2.48,0.51,5,.94,7.57,1.27A54.21,54.21,0,0,0,22,38.19H11.17A28.72,28.72,0,0,1,16.49,23.25Zm0,33.51a28.7,28.7,0,0,1-5.32-14.95H22a54.29,54.29,0,0,0,2.08,13.67C21.49,55.82,19,56.25,16.49,56.75Zm2.62,3.16q3-.56,6.15-0.95A29.57,29.57,0,0,0,29.86,67,29,29,0,0,1,19.1,59.92Zm19.09,8.73C34.58,67.7,31.33,64,29,58.56q4.51-.41,9.16-0.48V68.64Zm0-14.18c-3.53,0-7,.24-10.45.58a50.21,50.21,0,0,1-2.16-13.25h12.6V54.47h0Zm0-16.27H25.59a50.17,50.17,0,0,1,2.16-13.24c3.42,0.34,6.92.53,10.45,0.58V38.19h0Zm0-16.27q-4.64-.07-9.16-0.48c2.3-5.39,5.54-9.13,9.16-10.08V21.92Zm22.7-1.84q-3,.56-6.15.95A29.61,29.61,0,0,0,50.14,13,29,29,0,0,1,60.9,20.08ZM41.81,11.36C45.42,12.31,48.67,16,51,21.44q-4.51.41-9.16,0.48V11.36Zm0,14.18q5.3-.07,10.45-0.58a50.17,50.17,0,0,1,2.16,13.24H41.81V25.53Zm0,16.27H54.41a50.3,50.3,0,0,1-2.16,13.24c-3.43-.34-6.92-0.53-10.45-0.58V41.81h0Zm0,26.84V58.08q4.64,0.07,9.16.48C48.67,63.95,45.42,67.69,41.81,68.64ZM50.14,67A29.57,29.57,0,0,0,54.75,59c2.08,0.26,4.13.58,6.15,0.95A28.94,28.94,0,0,1,50.14,67ZM63.51,56.75q-3.72-.76-7.57-1.27A54.26,54.26,0,0,0,58,41.81h10.8A28.74,28.74,0,0,1,63.51,56.75Zm5.32-18.56H58a54.3,54.3,0,0,0-2.08-13.67q3.85-.51,7.57-1.28A28.72,28.72,0,0,1,68.83,38.19Z" transform="translate(-7.5 -7.5)"/></svg>',
			description: '<p>The International Affairs category includes spending by The Department of State and foreign aid.</p>',
			playerData: 10,
			realData: 1.7
		},
		government: {
			name: 'Government',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.04 98.78"><path d="M69.66,83.08V45.74h4.42V43.25H25.92v2.49h4.94V83.08H26.38V85H74.53V83.08H69.66Zm-5.07,0H58.26V45.74h6.33V83.08Zm-11.4,0H47.09V45.74h6.09V83.08ZM35.93,45.74H42V83.08h-6.1V45.74Z" transform="translate(-16.48 -0.61)"/><rect x="4.63" y="87.07" width="58.69" height="4.45"/><rect y="94.33" width="67.04" height="4.45"/><path d="M25.78,41.31a24.31,24.31,0,1,1,48.61,0" transform="translate(-16.48 -0.61)"/><rect x="32.53" width="1.88" height="17.52"/><rect x="32.53" width="13.41" height="8.85"/></svg>',
			description: '<p>The Government category includes spending by government agencies that manage the operation of the government. These agencies are:</p><ul><li>The Legislative Branch</li><li>The Judicial Branch</li><li>The Department of Commerce</li><li>The Department of the Interior</li><li>The Department of Justice</li><li>The Department of the Treasury</li><li>The Executive Office of the President</li><li>The General Services Administration</li><li>The Small Business Administration</li><li>Other Independent Agencies</li></ul>',
			playerData: 10,
			realData: 18.3
		},
		education: {
			name: 'Education',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 898.13 657.88"><path d="M546.08,690.84c-8.85-4.83-24-13.15-33.58-18.49s-23.12-12.67-30-16.3-13.06-7-13.75-7.48-6.31-3.59-12.5-6.9-23.06-12.49-37.5-20.4-32.16-17.59-39.37-21.52-18.47-10.08-25-13.67-20.73-11.33-31.56-17.19l-19.69-10.65V485.36c0-49.29.42-73.16,1.3-73.7a2.71,2.71,0,0,1,2.81.36c0.83,0.64,5.73,3.43,10.88,6.2s24,13,41.88,22.8c31.71,17.34,38.54,21.07,82.5,45.05l34.38,18.75,28.75,15.65c8.59,4.67,22.38,12.25,30.63,16.86s17.63,9.79,20.85,11.54L563,552l18.52-10.28c10.19-5.66,29.77-16.39,43.52-23.86l36.88-20,19.38-10.54c4.13-2.25,14-7.6,21.88-11.89s19.44-10.59,25.63-14c12.88-7.1,47.9-26.26,74.2-40.61,9.87-5.38,18.45-9.79,19.06-9.79s1.12,31.34,1.12,73.79c0,69.13-.14,73.84-2.19,74.6-1.2.45-9.78,5-19.06,10.13-35.74,19.74-55,30.22-55.45,30.22-0.28,0-12.24,6.52-26.59,14.5s-34.24,18.87-44.21,24.22c-25.86,13.88-30.56,16.44-55,30-29.95,16.63-53,29-56.6,30.37-1,.4-9-3.2-17.94-8.07h0ZM185.94,658.28c-1.44-1.77-24-85.6-24.05-89.25,0-.78,5.76-3,12.8-4.84q20.61-5.52,52.19-14.11L240,546.5l0.32-97.7,0.32-97.7-7.82-3.93c-4.3-2.16-25-13.21-45.95-24.55-47.54-25.71-56.39-30.49-65-35.09-3.78-2-6.87-4.43-6.87-5.36,0-1.71,12.78-9,56.88-32.33,13.41-7.1,37.31-19.94,53.13-28.53s33.81-18.27,40-21.51c15.23-8,23.79-12.55,77.5-41.47,25.44-13.7,48.78-26.22,51.88-27.84s22.78-12.18,43.75-23.49,42.91-23.1,48.75-26.2c27.44-14.58,51.66-27.54,62.38-33.36,6.46-3.51,12.88-6.38,14.26-6.38s19.44,9.11,40.12,20.24c43.35,23.33,58.46,31.42,77.62,41.6,11.68,6.2,66.84,35.87,101.25,54.46,5.5,3,11.69,6.24,13.75,7.26s20.63,11,41.25,22.12,42.56,22.94,48.75,26.22l20.63,10.94c5.16,2.74,23.16,12.42,40,21.52s35.69,19.23,41.88,22.52c18.27,9.71,24.38,13.3,24.38,14.36S990,296.1,944.38,320.19c-6.53,3.45-20.88,11.16-31.88,17.13s-32.94,17.78-48.75,26.24S817,388.62,795,400.47,749.37,425,742.5,428.6,711.72,445,689.37,457c-58.7,31.53-58.27,31.3-71.25,38.14-6.53,3.44-21,11.24-32.23,17.32s-21.18,11.06-22.18,11.06c-2.21,0-11.48-4.82-72.47-37.71C465.12,471.77,437.56,457,430,453c-20.95-11.08-78.26-41.93-82.5-44.4-2.06-1.2-11.62-6.29-21.25-11.29s-22.28-11.75-28.12-15-13-7.09-16-8.59L276.84,371l0.05,132.08c0,72.65-.15,132.29-0.4,132.53a89,89,0,0,1-9.72,2.86c-5.1,1.32-16.87,4.46-26.15,7s-24.19,6.5-33.12,8.88-17.15,4.61-18.26,4.95a3.34,3.34,0,0,1-3.3-1h0ZM583.09,302.73c32.54-9,40.65-36.38,15.85-53.47-25-17.22-72.05-10.61-83.21,11.68-3.67,7.33-4.1,11.14-2,18.19,5.9,20.29,39.78,31.81,69.41,23.59h0Z" transform="translate(-115 -41.06)"/></svg>',
			description: '<p>The Education category includes spending by The Department of Education.</p>',
			playerData: 10,
			realData: 2.6
		}
	},

	init: function(){
		// add labels
		this.addLabels();

		// create a reference array
		this.dbRef = [];
		for(var category in this.db){
			this.dbRef.push(category);
		}

		// get data
		var playerData = [];
		var realData = [];
		for (var i = 0; i < this.dbRef.length; i++) {
			playerData.push(this.db[this.dbRef[i]].playerData);
			realData.push(this.db[this.dbRef[i]].realData);
		}

		// make chart
		this.drawGraph('playerGraph','graph', playerData, 'rgb(30, 115, 190)', true);
		this.drawGraph('realGraph','graph', realData, 'rgba(0,0,0,0.5)', false);
		
		// hide real graph and init budget
		this.toggleRealGraph();
		this.updateBudget();

		// init finish state
		var self = this;
		document.getElementById('toggleReal').addEventListener('mousedown', function(e){
			e.preventDefault();
			self.toggleRealGraph();
		});

		// init modal
		this.infoModal.init();
	},

	drawGraph: function(id, parentId, data, fillColor, resizable){
		var self = this;

		function drag(d,i){
			var container = document.getElementById('graph');
			var width = self.d3.event.x/container.clientWidth * 100;

			// if user tries to extend past 100% overall, truncate it
			if(width + self.percentageSumExcept(self.dbRef[i]) > 100){
				width = 100 - self.percentageSumExcept(self.dbRef[i]);
				self.toggleCursor(this,'resizeLeft');
				self.toggleCursor(document.body,'resizeLeft');
			}
			else if(width < self.mininumPercentage){
				width = self.mininumPercentage;
				self.toggleCursor(this,'resizeRight');
				self.toggleCursor(document.body,'resizeRight');
			}
			else{
				self.toggleCursor(this,'resizeBoth');
				self.toggleCursor(document.body,'resizeBoth');
			}
			self.db[self.dbRef[i]].playerData = width;
			
			self.d3.select(this).attr('width',self.db[self.dbRef[i]].playerData + '%');
			self.updateBudget();
		}

		function dragEnd(){
			self.toggleCursor(document.body);
			var bars = document.getElementsByClassName('playerGraphBar');
			for (var i = 0; i < bars.length; i++) {
				if(self.budgetLeft > 0 && self.db[self.dbRef[i]].playerData > 1)
					self.toggleCursor(bars[i],'resizeBoth');
				else if(self.budgetLeft > 0 && self.db[self.dbRef[i]].playerData == 1)
					self.toggleCursor(bars[i],'resizeRight');
				else if(self.budgetLeft === 0 && self.db[self.dbRef[i]].playerData > 1)
					self.toggleCursor(bars[i],'resizeLeft');
				else
					self.toggleCursor(bars[i]);
			}
		}

		var handleDrag;
		var handleDragEnd;
		if(resizable){
			handleDrag = drag;
			handleDragEnd = dragEnd;
		}
		else{
			handleDrag = function(){};
			handleDragEnd = function(){};
		}

		var yScale = this.d3.scaleLinear()
			.domain([0,this.dbRef.length-1])
			.range([0,90]);

		var canvas = this.d3.select('#' + parentId).append('svg')
			.attr('id',id);
	
		var group = canvas.append('g')
			.attr('id', 'chart')
			.selectAll('g')
				.data(data)
				.enter()
				.append('rect')
				.attr('class', 'bar ' + id + 'Bar')
				.attr('width',function(d){return d + '%';})
				.attr('height', '10%')
				.attr('y',function(d,i){return yScale(i) + '%';})
				.attr('fill', fillColor)
				.classed('resizeBoth',resizable)
				.call(self.d3.drag()
					.on('drag',handleDrag)
					.on('end', handleDragEnd));
	},

	addLabels: function(){
		var self = this;
		var clickHandler = function(name,icon,description){
			return function(){
				self.infoModal.populate(name,icon,description);
				self.infoModal.toggle();
			};
		};

		for(var category in this.db) {
			var name = this.db[category].name;
			var icon = this.db[category].icon;
			var description = this.db[category].description;

			var container = document.createElement('div');
			container.className = 'label-container';
			
			var label = document.createElement('div');
			label.className = 'label';
			label.setAttribute('title',name);
			label.innerHTML = icon;
			container.appendChild(label);

			container.querySelector('svg').addEventListener('click',clickHandler(name,icon,description));

			document.getElementById('labels').appendChild(container);
		}
	},

	toggleRealGraph: function(){
		var realGraph = document.getElementById('realGraph');
		var toggleButton = document.getElementById('toggleRealButton');
		if(realGraph.style.display == 'block' || realGraph.style.display === '' ){
			realGraph.style.display = 'none';
			toggleRealButton.innerHTML = 'Finish';
		}
		else{
			realGraph.style.display = 'block';
			toggleRealButton.innerHTML = 'Edit';
		}
	},

	updateBudget: function(){
		var ele = document.getElementById('budget-amount');
		this.budgetLeft = 100 - Math.floor(this.percentageSumExcept()*100)/100;
		this.budgetLeft = Math.floor(this.budgetLeft*100)/100;
		ele.innerHTML = (this.budgetLeft / 100 * this.totalBudget).toFixed(2);
	},

	percentageSumExcept: function(exception){
		var output = 0;
		for (var category in this.db) {
			if(category != exception)
				output += this.db[category].playerData;
		}
		return output;
	},

	toggleCursor: function(ele, className){
		var isLeft;
		var isRight;
		var isBoth;
		switch(className){
			case 'resizeLeft':
				isLeft = true;
				isRight = false;
				isBoth = false;
				break;
			case 'resizeRight':
				isLeft = false;
				isRight = true;
				isBoth = false;
				break;
			case 'resizeBoth':
				isLeft = false;
				isRight = false;
				isBoth = true;
				break;
			default:
				isLeft = false;
				isRight = false;
				isBoth = false;
		}
		this.d3.select(ele).classed('resizeLeft', isLeft);
		this.d3.select(ele).classed('resizeRight',isRight);
		this.d3.select(ele).classed('resizeBoth',isBoth);
	},

	infoModal: {
		init: function(){
			this.toggled = false;

			this.container = document.createElement('div');
			this.container.id = 'infoModal-container';
			this.container.style.display = 'none';
			document.body.appendChild(this.container);

			this.ele = document.createElement('div');
			this.ele.id = 'infoModal';
			this.container.appendChild(this.ele);

			this.icon = document.createElement('div');
			this.icon.id = 'infoModal-icon';
			this.ele.appendChild(this.icon);

			this.content = document.createElement('div');
			this.content.id = 'infoModal-content';
			this.ele.appendChild(this.content);

			this.close = document.createElement('button');
			this.close.id = 'infoModal-close';
			this.close.innerHTML = 'X';
			this.content.appendChild(this.close);

			this.heading = document.createElement('h3');
			this.heading.id = 'infoModal-heading';
			this.content.appendChild(this.heading);

			this.text = document.createElement('p');
			this.text.id = 'infoModal-text';
			this.content.appendChild(this.text);


			var self = this;
			this.container.addEventListener('click', function(e){
				self.toggle();
			});
			this.ele.addEventListener('click',function(e){
				e.stopPropagation();
			});

			this.close.addEventListener('mousedown', function(e){
				e.preventDefault();
				self.toggle();
			});
		},

		populate: function(heading, icon, text){
			this.heading.innerHTML = heading;
			this.text.innerHTML = text;
			this.icon.innerHTML = icon;

			// return the scrollbar back to the top
			var self = this;
			setTimeout(function(){
				self.content.scrollTop = 0;
			},1);
		},

		toggle: function(){
			if(this.toggled){
				this.toggled = false;
				this.container.style.display = 'none';
			}
			else{
				this.toggled = true;
				this.container.style.display = 'flex';
			}
		}
	} 
};
wtdmBudgetGame.init();