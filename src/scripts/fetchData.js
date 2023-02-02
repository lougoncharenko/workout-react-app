export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dee6a9c73dmsh511996ae2e56232p17e1fajsn6f45beb52dfb',
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