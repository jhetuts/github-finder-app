class GitHub{
	constructor(){
		this.client_id = '34315dfa00d45e965254';
		this.client_secret = '2e7cd4aab1ad7cdebb3214e8cebf6ae3f2375488';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=$
		{this.client_id}&client_secret=${this.client_secret}`);

		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
				profile,
				repos
		}
	}
}