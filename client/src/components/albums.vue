<script>
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api.discogs.com/artists/1/releases?page=2&per_page=75',
 
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
</script> 
