// list of all exercisers 

const MY_KEY = process.env.REACT_APP_RAPID_API_KEY

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': MY_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

// fetch('https://exercisedb.p.rapidapi.com/exercises', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
  };