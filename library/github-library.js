class GitHub{
	constructor(){
		this.client_id = '5a6d1d467321e22d4b30';
		this.client_secret = 'adbf6c6852dceab858ef4cad4ac89c69c4d7b27e';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
				profile,
				repos
		}
	}
}