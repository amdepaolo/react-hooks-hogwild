import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";
import PigDetails from "./PigDetails";
import ControlBar from "./ControlBar";
import hogs from "../porkers_data";

// Hierarchy:
// App
// -tiles
// 	--tile
// -selected hog details

function App() {
	const[currentPig, setCurrentPig] = useState(hogs[0]);
	const[greasedOnly, setGreased] = useState(false);
	const[sortValue, setSort] = useState('name')

	function pigSelect(name){
		const chosenPig = hogs.find(hog => hog.name === name)
		setCurrentPig(chosenPig)
	} 

	function filterGrease(){
		setGreased(!greasedOnly);
	}

	function sortSelect(event){
		setSort(event.target.value)
	}

	const sortedHogs = hogs.sort((a,b) => {
		if(sortValue === 'name'){return a.name.localeCompare(b.name)
		} else {
			return a.weight-b.weight;
		} 
	});

	const chosenHogs = greasedOnly? sortedHogs.filter(hog => hog.greased) : hogs;

	return (
		<div className="App">
			<Nav />
			<ControlBar
				greased={greasedOnly} 
				onFilterClick={filterGrease}
				onSelect={sortSelect}
			/>
			<Tiles 
				hogs={chosenHogs} 
				onPigClick={pigSelect}
			/>
			<PigDetails currentPig={currentPig} />
		</div>
	);
}

export default App;
